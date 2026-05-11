import React, { useEffect, useState, useCallback } from "react";
import {
  SearchableSelect,
  SearchableSelectOption,
} from "@/components/ui/searchable-select";
import { Customer } from "@/types/api";
import { getCustomers } from "@/lib/api-client";
import { useDebouncedCallback } from "@/hooks/use-debounce";

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
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Debounced search function
  const debouncedSearch = useDebouncedCallback(
    useCallback(
      async (search: string) => {
        if (!mandalId || !villageId) {
          setCustomers([]);
          return;
        }

        setLoading(true);
        setError(null);

        try {
          const data = await getCustomers({
            mandalId,
            villageId,
            search: search.trim() || undefined,
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
    300, // 300ms delay
  );

  // Initial load when mandalId or villageId changes
  useEffect(() => {
    if (!mandalId || !villageId) {
      setCustomers([]);
      return;
    }

    // Load initial data
    debouncedSearch("");
  }, [mandalId, villageId, debouncedSearch]);

  // Handle search
  const handleSearch = (search: string) => {
    debouncedSearch(search);
  };

  // Convert customers to options
  const options: SearchableSelectOption[] = customers.map((customer) => ({
    value: customer.id,
    label: `${customer.full_name_telugu || customer.full_name_english} (${customer.phone_number})`,
    searchText: `${customer.full_name_telugu || ""} ${customer.full_name_english} ${customer.phone_number}`,
  }));

  return (
    <SearchableSelect
      value={value}
      onValueChange={onChange}
      disabled={disabled || !mandalId || !villageId}
      placeholder={
        !mandalId || !villageId
          ? "ముందు మండలం మరియు ఊరు ఎంచుకోండి"
          : "సంఘం సభ్యుని ఎంచుకోండి"
      }
      searchPlaceholder="సంఘం సభ్యుని పేరు లేదా ఫోను ద్వారా వెతకండి..."
      emptyMessage="సంఘం సభ్యుని కనుగొనబడలేదు"
      loadingMessage="సభ్యుల వివరాలు లోడ్ అవుతున్నాయి..."
      errorMessage="సభ్యుల వివరాలు లోడ్ చేయలేకపోయాం"
      options={options}
      onSearch={handleSearch}
      loading={loading}
      error={error}
    />
  );
}
