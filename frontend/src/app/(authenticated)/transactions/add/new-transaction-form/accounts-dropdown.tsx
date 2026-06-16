import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

type Account = {
  id: string;
  name: string;
  account_number: string;
  account_type_id: string;
  account_type_name: string | null;
  account_type_label_english: string | null;
  account_type_label_telugu?: string | null;
};

interface AccountsDropdownProps {
  memberId: string | null | undefined;
  villageId: string | null | undefined;
  value: string | undefined;
  disabled?: boolean;
  onChange: (accountId: string) => void;
}

export function AccountsDropdown({
  memberId,
  villageId,
  value,
  disabled,
  onChange,
}: AccountsDropdownProps) {
  const { t, lang } = useLanguage();
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAccounts() {
      if (!memberId || !villageId) {
        setAccounts([]);
        setError(null);
        return;
      }

      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `/api/accounts/available?memberId=${memberId}&villageId=${villageId}`,
        );
        if (!res.ok) {
          const errorData = await res.json().catch(() => ({}));
          throw new Error(
            errorData.error?.message || "Failed to fetch accounts",
          );
        }
        const data = await res.json();
        setAccounts(data.data ?? []);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to load accounts",
        );
        setAccounts([]);
      } finally {
        setLoading(false);
      }
    }
    fetchAccounts();
  }, [memberId, villageId]);

  return (
    <Select
      onValueChange={onChange}
      value={value || undefined}
      disabled={disabled || !memberId || !villageId || loading}
    >
      <SelectTrigger>
        <SelectValue
          placeholder={
            !memberId || !villageId
              ? t.accountsDropdown.selectMemberFirst
              : loading
                ? (
                    <span className="inline-flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" /> {t.common.loading}
                    </span>
                  )
                : error
                  ? error
                  : accounts.length === 0
                    ? t.accountsDropdown.notFound
                    : t.accountsDropdown.placeholder
          }
        />
      </SelectTrigger>
      <SelectContent>
        {loading ? (
          <div className="flex items-center justify-center py-2 px-3 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin mr-2" /> {t.common.loading}
          </div>
        ) : error ? (
          <div className="py-2 px-3 text-sm text-destructive text-center">
            {error}
          </div>
        ) : accounts.length === 0 ? (
          <div className="py-2 px-3 text-sm text-muted-foreground text-center">
            {t.accountsDropdown.memberNotFound}
          </div>
        ) : (
          accounts.map((account) => {
            const label =
              lang === "te"
                ? account.account_type_label_telugu || account.account_type_label_english || ""
                : account.account_type_label_english || account.account_type_label_telugu || "";
            return (
              <SelectItem key={account.id} value={account.id} title={label}>
                <span className="block min-w-0 max-w-full truncate">{label}</span>
              </SelectItem>
            );
          })
        )}
      </SelectContent>
    </Select>
  );
}

