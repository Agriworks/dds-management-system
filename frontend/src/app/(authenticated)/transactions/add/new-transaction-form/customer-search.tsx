import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Customer } from "@/types/api";
import { getCustomers } from "@/lib/api-client";
import { Loader2 } from "lucide-react";

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

  useEffect(() => {
    if (!mandalId || !villageId) {
      setCustomers([]);
      return;
    }
    async function fetchCustomers() {
      setLoading(true);
      setError(null);
      try {
        const data = await getCustomers({
          mandalId,
          villageId,
        });
        setCustomers(data.customers);
      } catch {
        setError("Failed to load customers");
        setCustomers([]);
      } finally {
        setLoading(false);
      }
    }
    fetchCustomers();
  }, [mandalId, villageId]);

  return (
    <Select
      onValueChange={onChange}
      value={value}
      disabled={disabled || !mandalId || !villageId}
    >
      <SelectTrigger className="w-full">
        <SelectValue
          placeholder={
            loading ? (
              <span className="inline-flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" /> Loading customers...
              </span>
            ) : error ? (
              error
            ) : !mandalId || !villageId ? (
              "Select a mandal and village first"
            ) : (
              "Select a customer"
            )
          }
        />
      </SelectTrigger>
      <SelectContent>
        {loading ? (
          <div className="flex items-center justify-center py-2 px-3 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin mr-2" /> Loading...
          </div>
        ) : error ? (
          <div className="py-2 px-3 text-sm text-destructive text-center">
            {error}
          </div>
        ) : customers.length === 0 ? (
          <div className="py-2 px-3 text-sm text-muted-foreground text-center">
            No customers found
          </div>
        ) : (
          customers.map((customer) => (
            <SelectItem key={customer.id} value={customer.id}>
              {customer.full_name_english} ({customer.phone_number})
            </SelectItem>
          ))
        )}
      </SelectContent>
    </Select>
  );
}
