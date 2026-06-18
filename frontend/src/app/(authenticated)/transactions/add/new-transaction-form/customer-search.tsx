import React, { useState, useCallback, useRef, useMemo, useEffect } from "react";
import {
  SearchableSelect,
  SearchableSelectOption,
} from "@/components/ui/searchable-select";
import { Customer } from "@/types/api";
import { getCustomers } from "@/lib/api-client";
import { useDebouncedCallback } from "@/hooks/use-debounce";
import { useLanguage } from "@/i18n/LanguageContext";

const PAGE_SIZE = 10;

interface CustomerDropdownProps {
  mandalId: string;
  villageId: string;
  value: string;
  disabled?: boolean;
  onChange: (customerId: string) => void;
  onVillageChange?: (villageId: string) => void;
  initialCustomer?: Customer | null;
}

export function CustomerDropdown({
  mandalId,
  villageId,
  value,
  disabled,
  onChange,
  onVillageChange,
  initialCustomer,
}: CustomerDropdownProps) {
  const { t, lang } = useLanguage();
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    null,
  );
  const searchQueryRef = useRef("");
  const offsetRef = useRef(0);

  useEffect(() => {
    if (!value) {
      setSelectedCustomer(null);
    }
  }, [value]);

  useEffect(() => {
    if (initialCustomer) {
      setSelectedCustomer(initialCustomer);
    }
  }, [initialCustomer]);

  const fetchCustomers = useCallback(
    async (search: string, offset: number, append: boolean) => {
      if (!mandalId || !villageId) {
        setCustomers([]);
        setHasMore(false);
        return;
      }

      if (append) {
        setLoadingMore(true);
      } else {
        setLoading(true);
      }
      setError(null);

      try {
        const data = await getCustomers({
          mandalId,
          villageId,
          search: search,
          limit: String(PAGE_SIZE),
          offset: String(offset),
        });

        searchQueryRef.current = search;
        offsetRef.current = offset + data.customers.length;
        setHasMore(data.pagination.hasMore);

        setCustomers((prev) => {
          const merged = append ? [...prev, ...data.customers] : data.customers;
          const seen = new Set<string>();
          return merged.filter((customer) => {
            if (seen.has(customer.id)) return false;
            seen.add(customer.id);
            return true;
          });
        });
      } catch {
        setError("Failed to load customers");
        if (!append) {
          setCustomers([]);
          setHasMore(false);
        }
      } finally {
        setLoading(false);
        setLoadingMore(false);
      }
    },
    [mandalId, villageId],
  );

  useEffect(() => {
    setCustomers([]);
    setHasMore(false);
    searchQueryRef.current = "";
    offsetRef.current = 0;
    if (mandalId && villageId) {
      void fetchCustomers("", 0, false);
    }
  }, [mandalId, villageId, fetchCustomers]);

  const debouncedSearch = useDebouncedCallback(
    useCallback(
      (search: string) => {
        offsetRef.current = 0;
        void fetchCustomers(search, 0, false);
      },
      [fetchCustomers],
    ),
    300,
  );

  const handleSearch = (search: string) => {
    debouncedSearch(search);
  };

  const handleLoadMore = useCallback(() => {
    if (loading || loadingMore || !hasMore) {
      return;
    }

    void fetchCustomers(searchQueryRef.current, offsetRef.current, true);
  }, [fetchCustomers, hasMore, loading, loadingMore]);

  const handleChange = (customerId: string) => {
    const found =
      customers.find((customer) => customer.id === customerId) ??
      (selectedCustomer?.id === customerId ? selectedCustomer : undefined);

    if (found) {
      setSelectedCustomer(found);
      if (found.village_id !== villageId) {
        onVillageChange?.(found.village_id);
      }
    }
    onChange(customerId);
  };

  const visibleCustomers = useMemo(() => {
    if (
      selectedCustomer &&
      !customers.some((customer) => customer.id === selectedCustomer.id)
    ) {
      return [selectedCustomer, ...customers];
    }
    return customers;
  }, [customers, selectedCustomer]);

  const options: SearchableSelectOption[] = visibleCustomers.map(
    (customer) => {
      const name =
        lang === "te"
          ? customer.full_name_telugu || customer.full_name_english
          : customer.full_name_english || customer.full_name_telugu;
      const phoneText = customer.phone_number ? `(${customer.phone_number}) ` : "";
      return {
        value: customer.id,
        label: customer.village_name
          ? `${name} ${phoneText}(${customer.aadhar_number}) — ${customer.village_name}`
          : `${name} ${phoneText}(${customer.aadhar_number})`,
        searchText: `${name} ${customer.phone_number || ""} ${customer.aadhar_number}`,
      };
    },
  );

  return (
    <SearchableSelect
      value={value}
      onValueChange={handleChange}
      disabled={disabled || !mandalId || !villageId}
      placeholder={
        !mandalId || !villageId
          ? t.customerDropdown.selectMandaVillageFirst
          : t.customerDropdown.placeholder
      }
      searchPlaceholder={t.customerDropdown.searchPlaceholder}
      emptyMessage={t.customerDropdown.emptyMessage}
      loadingMessage={t.customerDropdown.loadingMessage}
      loadingMoreMessage={t.customerDropdown.loadingMoreMessage}
      errorMessage={t.customerDropdown.errorMessage}
      options={options}
      onSearch={handleSearch}
      onLoadMore={handleLoadMore}
      hasMore={hasMore}
      loading={loading}
      loadingMore={loadingMore}
      error={error}
      serverSideSearch
      inputMode="text"
      sanitizeSearch={(val) => val}
      maxSearchLength={50}
    />
  );
}
