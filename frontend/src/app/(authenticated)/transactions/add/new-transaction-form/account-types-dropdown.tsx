import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";

type AccountType = {
  id: string;
  name: string;
  label_english: string;
  label_telugu: string | null;
  description?: string | null;
};

interface AccountTypesDropdownProps {
  value: string;
  disabled?: boolean;
  onChange: (accountTypeName: string, accountTypeId?: string) => void;
}

export function AccountTypesDropdown({
  value,
  disabled,
  onChange,
}: AccountTypesDropdownProps) {
  const [items, setItems] = useState<AccountType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAccountTypes() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("/api/account-types");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setItems(data.data ?? []);
      } catch {
        setError("Failed to load account types");
        setItems([]);
      } finally {
        setLoading(false);
      }
    }
    fetchAccountTypes();
  }, []);

  return (
    <Select
      onValueChange={(val) => {
        const selected = items.find((i) => i.name === val);
        onChange(val, selected?.id);
      }}
      value={value}
      disabled={disabled}
    >
      <SelectTrigger className="w-full">
        <SelectValue
          placeholder={
            loading ? (
              <span className="inline-flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" /> Loading account
                types...
              </span>
            ) : error ? (
              error
            ) : (
              "Select account type"
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
        ) : items.length === 0 ? (
          <div className="py-2 px-3 text-sm text-muted-foreground text-center">
            No account types found
          </div>
        ) : (
          items.map((a) => (
            <SelectItem key={a.id} value={a.name}>
              {a.label_english} {a.label_telugu ? `(${a.label_telugu})` : ""}
            </SelectItem>
          ))
        )}
      </SelectContent>
    </Select>
  );
}


