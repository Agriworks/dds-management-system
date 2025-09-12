import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Village } from "@/types/api";
import { getVillages } from "@/lib/api-client";
import { Loader2 } from "lucide-react";

interface VillageDropdownProps {
  mandalId: string;
  value: string;
  disabled?: boolean;
  onChange: (villageId: string) => void;
}

export function VillageDropdown({
  mandalId,
  value,
  disabled,
  onChange,
}: VillageDropdownProps) {
  const [villages, setVillages] = useState<Village[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!mandalId) {
      setVillages([]);
      return;
    }
    async function fetchVillages() {
      setLoading(true);
      setError(null);
      try {
        const data = await getVillages({ mandalId });
        setVillages(data);
      } catch {
        setError("Failed to load villages");
        setVillages([]);
      } finally {
        setLoading(false);
      }
    }
    fetchVillages();
  }, [mandalId]);

  return (
    <Select
      onValueChange={onChange}
      value={value}
      disabled={disabled || !mandalId}
    >
      <SelectTrigger className="w-full">
        <SelectValue
          placeholder={
            loading ? (
              <span className="inline-flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" /> Loading villages...
              </span>
            ) : error ? (
              error
            ) : !mandalId ? (
              "Select a mandal first"
            ) : (
              "Select a village"
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
        ) : villages.length === 0 ? (
          <div className="py-2 px-3 text-sm text-muted-foreground text-center">
            No villages found
          </div>
        ) : (
          villages.map((village) => (
            <SelectItem key={village.id} value={village.id}>
              {village.label_english} ({village.label_telugu})
            </SelectItem>
          ))
        )}
      </SelectContent>
    </Select>
  );
}
