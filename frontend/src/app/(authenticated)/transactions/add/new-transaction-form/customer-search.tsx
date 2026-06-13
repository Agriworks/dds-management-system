import React, { useState, useCallback } from "react";
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

  const options: SearchableSelectOption[] = customers.map((customer) => ({
    value: customer.id,
    label: `${customer.full_name_telugu || customer.full_name_english} (${customer.aadhar_number})`,
    searchText: customer.aadhar_number,
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
      searchPlaceholder="ఆధార్ నంబర్ ద్వారా వెతకండి..."
      emptyMessage="ఆధార్ నంబర్ ఇచ్చి సభ్యుని వెతకండి"
      loadingMessage="సభ్యుల వివరాలు లోడ్ అవుతున్నాయి..."
      errorMessage="సభ్యుల వివరాలు లోడ్ చేయలేకపోయాం"
      options={options}
      onSearch={handleSearch}
      loading={loading}
      error={error}
      serverSideSearch
    />
  );
}
