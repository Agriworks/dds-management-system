import React, { useEffect, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mandal } from "@/types/api";
import { getMandals } from "@/lib/api-client";

interface MandalDropdownProps {
  value: string;
  onChange: (mandalId: string) => void;
  disabled?: boolean;
}

export function MandalDropdown({ value, onChange, disabled }: MandalDropdownProps) {
  const [mandals, setMandals] = useState<Mandal[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchMandals() {
      setLoading(true);
      try {
        const data = await getMandals();
        setMandals(data);
      } finally {
        setLoading(false);
      }
    }
    fetchMandals();
  }, []);

  return (
    <Select onValueChange={onChange} value={value} disabled={disabled}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={loading ? "Loading mandals..." : "Select a mandal"} />
      </SelectTrigger>
      <SelectContent>
        {mandals.map((mandal) => (
          <SelectItem key={mandal.id} value={mandal.id}>
            {mandal.name} ({mandal.district})
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
