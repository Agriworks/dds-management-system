import React, { useState, useCallback } from "react";
import {
  SearchableSelect,
  SearchableSelectOption,
} from "@/components/ui/searchable-select";
import { Customer } from "@/types/api";
import { getCustomers } from "@/lib/api-client";
import { useDebouncedCallback } from "@/hooks/use-debounce";
import { useLanguage } from "@/i18n/LanguageContext";

interface CustomerDropdownProps {
  mandalId: string;
  villageId: string;
  value: string;
  disabled?: boolean;
  onChange: (customerId: string) => void;
}

export function CustomerDropdown({
  mandalId,
  villageId,
  value,
  disabled,
  onChange,
}: CustomerDropdownProps) {
  const { t, lang } = useLanguage();
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const debouncedSearch = useDebouncedCallback(
    useCallback(
      async (search: string) => {
        if (!mandalId || !villageId) {
          setCustomers([]);
          return;
        }

        const cleanSearch = search.replace(/\D/g, "");
        if (!cleanSearch) {
          setCustomers([]);
          return;
        }

        setLoading(true);
        setError(null);

        try {
          const data = await getCustomers({
            mandalId,
            villageId,
            search: cleanSearch,
            limit: "100",
          });
          setCustomers(data.customers);
        } catch {
          setError("Failed to load customers");
          setCustomers([]);
        } finally {
          setLoading(false);
        }
      },
      [mandalId, villageId],
    ),
    300,
  );

  const handleSearch = (search: string) => {
    debouncedSearch(search);
  };

  // Convert customers to options
  const options: SearchableSelectOption[] = customers.map((customer) => {
    const name =
      lang === "te"
        ? customer.full_name_telugu || customer.full_name_english
        : customer.full_name_english || customer.full_name_telugu;
    return {
      value: customer.id,
      label: `${name} (${customer.aadhar_number})`,
      searchText: customer.aadhar_number,
    };
  });

  return (
    <SearchableSelect
      value={value}
      onValueChange={onChange}
      disabled={disabled || !mandalId || !villageId}
      placeholder={
        !mandalId || !villageId
          ? t.customerDropdown.selectMandaVillageFirst
          : t.customerDropdown.placeholder
      }
      searchPlaceholder={t.customerDropdown.searchPlaceholder}
      emptyMessage={t.customerDropdown.emptyMessage}
      loadingMessage={t.customerDropdown.loadingMessage}
      errorMessage={t.customerDropdown.errorMessage}
      options={options}
      onSearch={handleSearch}
      loading={loading}
      error={error}
      serverSideSearch
    />
  );
}
