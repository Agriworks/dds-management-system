import React, { useEffect, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Customer } from "@/types/api";
import { getCustomers } from "@/lib/api-client";

interface CustomerDropdownProps {
  mandalId: string;
  villageId: string;
  value: string;
  onChange: (customerId: string) => void;
  disabled?: boolean;
}

export function CustomerDropdown({ mandalId, villageId, value, onChange, disabled }: CustomerDropdownProps) {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!mandalId || !villageId) {
      setCustomers([]);
      return;
    }
    async function fetchCustomers() {
      setLoading(true);
      try {
        const { customers: data } = await getCustomers({
          mandalId,
          villageId,
          limit: '50',
        });
        setCustomers(data);
      } finally {
        setLoading(false);
      }
    }
    fetchCustomers();
  }, [mandalId, villageId]);

  return (
    <Select onValueChange={onChange} value={value} disabled={disabled || !mandalId || !villageId}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={loading ? "Loading customers..." : (!mandalId || !villageId) ? "Select a mandal and village first" : customers.length === 0 ? "No customers found" : "Select a customer"} />
      </SelectTrigger>
      <SelectContent>
        {customers.map((customer) => (
          <SelectItem key={customer.id} value={customer.id}>
            {customer.name} ({customer.phone})
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
