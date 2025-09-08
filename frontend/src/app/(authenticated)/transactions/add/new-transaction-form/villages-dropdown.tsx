import React, { useEffect, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Village } from "@/types/api";
import { getVillages } from "@/lib/api-client";

interface VillageDropdownProps {
  mandalId: string;
  value: string;
  onChange: (villageId: string) => void;
  disabled?: boolean;
}

export function VillageDropdown({ mandalId, value, onChange, disabled }: VillageDropdownProps) {
  const [villages, setVillages] = useState<Village[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!mandalId) {
      setVillages([]);
      return;
    }
    async function fetchVillages() {
      setLoading(true);
      try {
        const data = await getVillages({ mandalId });
        setVillages(data);
      } finally {
        setLoading(false);
      }
    }
    fetchVillages();
  }, [mandalId]);

  return (
    <Select onValueChange={onChange} value={value} disabled={disabled || !mandalId}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={loading ? "Loading villages..." : !mandalId ? "Select a mandal first" : "Select a village"} />
      </SelectTrigger>
      <SelectContent>
        {villages.map((village) => (
          <SelectItem key={village.id} value={village.id}>
            {village.name} {village.pincode && `(${village.pincode})`}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
