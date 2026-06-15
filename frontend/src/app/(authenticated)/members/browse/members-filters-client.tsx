"use client";

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { MandalDropdown } from "@/app/(authenticated)/transactions/add/new-transaction-form/mandals-dropdown";
import { VillageDropdown } from "@/app/(authenticated)/transactions/add/new-transaction-form/villages-dropdown";
import { useLanguage } from "@/i18n/LanguageContext";

export function MembersFiltersClient({
  initialMandalId,
  initialVillageId,
}: {
  initialMandalId: string;
  initialVillageId: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [mandalId, setMandalId] = useState(initialMandalId);
  const [villageId, setVillageId] = useState(initialVillageId);
  const { t } = useLanguage();

  const applyFilters = () => {
    const params = new URLSearchParams(searchParams.toString());
    if (mandalId) {
      params.set("mandalId", mandalId);
    } else {
      params.delete("mandalId");
    }

    if (villageId) {
      params.set("villageId", villageId);
    } else {
      params.delete("villageId");
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  const resetFilters = () => {
    setMandalId("");
    setVillageId("");
    router.push(pathname);
  };

  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 mb-4 border-b pb-4">
      <div>
        <label className="mb-2 block text-sm font-medium">{t.membersBrowse.mandal}</label>
        <MandalDropdown
          value={mandalId}
          onChange={(value) => {
            setMandalId(value);
            setVillageId("");
          }}
        />
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium">{t.membersBrowse.village}</label>
        <VillageDropdown
          mandalId={mandalId}
          value={villageId}
          onChange={setVillageId}
          disabled={!mandalId}
        />
      </div>
      <div className="flex items-end gap-2">
        <Button type="button" onClick={applyFilters}>
          {t.membersBrowse.filterBtn}
        </Button>
        <Button type="button" variant="outline" onClick={resetFilters}>
          {t.membersBrowse.resetBtn}
        </Button>
      </div>
    </div>
  );
}
