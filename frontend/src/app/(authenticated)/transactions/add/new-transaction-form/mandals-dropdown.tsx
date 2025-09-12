import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mandal } from "@/types/api";
import { getMandals } from "@/lib/api-client";
import { Loader2 } from "lucide-react";

interface MandalDropdownProps {
  value: string;
  disabled?: boolean;
  onChange: (mandalId: string) => void;
}

export function MandalDropdown({
  value,
  disabled,
  onChange,
}: MandalDropdownProps) {
  const [mandals, setMandals] = useState<Mandal[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchMandals() {
      setLoading(true);
      setError(null);
      try {
        const data = await getMandals();
        setMandals(data);
      } catch {
        setError("Failed to load mandals");
        setMandals([]);
      } finally {
        setLoading(false);
      }
    }
    fetchMandals();
  }, []);

  return (
    <Select onValueChange={onChange} value={value} disabled={disabled}>
      <SelectTrigger className="w-full">
        <SelectValue
          placeholder={
            loading ? (
              <span className="inline-flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" /> Loading mandals...
              </span>
            ) : error ? (
              error
            ) : (
              "Select a mandal"
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
        ) : mandals.length === 0 ? (
          <div className="py-2 px-3 text-sm text-muted-foreground text-center">
            No mandals found
          </div>
        ) : (
          mandals.map((mandal) => (
            <SelectItem key={mandal.id} value={mandal.id}>
              {mandal.label_english} ({mandal.label_telugu})
            </SelectItem>
          ))
        )}
      </SelectContent>
    </Select>
  );
}
