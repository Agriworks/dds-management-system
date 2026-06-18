"use client";

import { useEffect, useState, useMemo, useCallback } from "react";
import { useSession } from "next-auth/react";
import { useLanguage } from "@/i18n/LanguageContext";
import { ClientContentLayout } from "@/components/admin-panel/client-content-layout";
import { getDeletedMembers, restoreMember } from "@/lib/api-client";
import { DataTable } from "@/components/TableView/data-table";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ColumnDef } from "@tanstack/react-table";
import { RefreshCw, RotateCcw } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

type DeletedMemberRow = {
  id: string;
  givenNameEnglish: string;
  familyNameEnglish: string;
  givenNameTelugu: string;
  familyNameTelugu: string;
  husbandOrFatherName: string;
  aadharNumber: string;
  phoneNumber: string;
  mandalEnglish: string;
  mandalTelugu: string;
  villageEnglish: string;
  villageTelugu: string;
  savingsBalance: number;
  withdrawBalance: number;
  laagodiBalance: number;
};

function formatInr(amount: number): string {
  return new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(amount);
}

export default function DeletedMembersPage() {
  const { data: session } = useSession();
  const { t, lang } = useLanguage();
  const theToast = useToast();
  
  const [members, setMembers] = useState<DeletedMemberRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [restoringId, setRestoringId] = useState<string | null>(null);
  const [showConfirmRestore, setShowConfirmRestore] = useState(false);
  const [selectedMember, setSelectedMember] = useState<DeletedMemberRow | null>(null);

  const fetchDeleted = useCallback(async () => {
    if (!session?.user?.accessToken) return;
    setLoading(true);
    try {
      const data = await getDeletedMembers(session.user.accessToken);
      setMembers(data as DeletedMemberRow[]);
    } catch (error) {
      console.error("Failed to fetch deleted members:", error);
      theToast.toast({
        title: t.common.error,
        description: error instanceof Error ? error.message : "Failed to load deleted members",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }, [session?.user?.accessToken, t.common.error, theToast]);

  useEffect(() => {
    if (session?.user?.accessToken) {
      fetchDeleted();
    }
  }, [session?.user?.accessToken, fetchDeleted]);

  const handleRestore = (member: DeletedMemberRow) => {
    setSelectedMember(member);
    setShowConfirmRestore(true);
  };

  const confirmRestore = async () => {
    if (!selectedMember || !session?.user?.accessToken) return;
    const memberId = selectedMember.id;
    setRestoringId(memberId);
    setShowConfirmRestore(false);
    try {
      await restoreMember(memberId, session.user.accessToken);
      setMembers((prev) => prev.filter((m) => m.id !== memberId));
      theToast.toast({
        title: t.membersBrowse.restoreSuccess,
        duration: 3000,
      });
    } catch (error) {
      theToast.toast({
        title: t.common.error,
        description: error instanceof Error ? error.message : t.membersBrowse.restoreError,
        variant: "destructive",
      });
    } finally {
      setRestoringId(null);
      setSelectedMember(null);
    }
  };

  const columns = useMemo<ColumnDef<DeletedMemberRow>[]>(() => [
    {
      id: "memberName",
      accessorFn: (row) => {
        const given = lang === "te" ? row.givenNameTelugu : row.givenNameEnglish;
        const family = lang === "te" ? row.familyNameTelugu : row.familyNameEnglish;
        return `${given} ${family}`.trim();
      },
      header: t.membersBrowse.colName,
      cell: ({ row }) => {
        const given = lang === "te" ? row.original.givenNameTelugu : row.original.givenNameEnglish;
        const family = lang === "te" ? row.original.familyNameTelugu : row.original.familyNameEnglish;
        return <span className="font-medium">{given} {family}</span>;
      },
    },
    {
      accessorKey: "husbandOrFatherName",
      header: t.membersBrowse.colHusbandFather,
    },
    {
      accessorKey: "aadharNumber",
      header: t.membersBrowse.colAadhar,
    },
    {
      accessorKey: "phoneNumber",
      header: t.membersBrowse.colPhone,
    },
    {
      id: "mandal",
      accessorFn: (row) => lang === "te" ? row.mandalTelugu : row.mandalEnglish,
      header: t.membersBrowse.colMandal,
    },
    {
      id: "village",
      accessorFn: (row) => lang === "te" ? row.villageTelugu : row.villageEnglish,
      header: t.membersBrowse.colVillage,
    },
    {
      accessorKey: "savingsBalance",
      header: t.membersBrowse.colSavings,
      cell: ({ row }) => (
        <span className="tabular-nums">{formatInr(row.original.savingsBalance)}</span>
      ),
    },
    {
      accessorKey: "withdrawBalance",
      header: t.membersBrowse.colWithdraw,
      cell: ({ row }) => (
        <span className="tabular-nums">{formatInr(row.original.withdrawBalance)}</span>
      ),
    },
    {
      accessorKey: "laagodiBalance",
      header: t.membersBrowse.colLaagodi,
      cell: ({ row }) => (
        <span className="tabular-nums">{formatInr(row.original.laagodiBalance)}</span>
      ),
    },
    {
      id: "actions",
      header: t.membersBrowse.colActions,
      cell: ({ row }) => (
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-1"
          disabled={restoringId === row.original.id}
          onClick={() => handleRestore(row.original)}
        >
          <RotateCcw className="h-3.5 w-3.5" />
          {t.membersBrowse.restoreBtn}
        </Button>
      ),
    },
  ], [lang, t, restoringId]);

  const pagedData = useMemo(
    () => members.slice(pageIndex * pageSize, pageIndex * pageSize + pageSize),
    [members, pageIndex, pageSize],
  );
  const pageCount = Math.max(1, Math.ceil(members.length / pageSize));

  return (
    <ClientContentLayout titleKey="membersBrowse" subKey="deletedTitle">
      <div className="shadow-md rounded-lg bg-background p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold">{t.membersBrowse.deletedTitle}</h1>
          <Button variant="ghost" size="sm" onClick={fetchDeleted} disabled={loading}>
            <RefreshCw className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`} />
            {t.common.reset}
          </Button>
        </div>
        <div className="mt-4 overflow-x-auto">
          <DataTable<DeletedMemberRow, unknown>
            columns={columns}
            data={pagedData}
            pageCount={pageCount}
            pageIndex={pageIndex}
            pageSize={pageSize}
            isLastPage={pageIndex + 1 >= pageCount}
            hideToolbar={true}
            hidePagination={false}
            isLoading={loading}
            onPaginationChange={(nextPageIndex, nextPageSize) => {
              setPageIndex(nextPageIndex);
              setPageSize(nextPageSize);
            }}
          />
        </div>
      </div>

      <AlertDialog open={showConfirmRestore} onOpenChange={setShowConfirmRestore}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{t.membersBrowse.restoreConfirmTitle}</AlertDialogTitle>
            <AlertDialogDescription>
              {t.membersBrowse.restoreConfirmDesc}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setSelectedMember(null)}>{t.membersBrowse.deleteNo}</AlertDialogCancel>
            <AlertDialogAction
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={confirmRestore}
            >
              {t.membersBrowse.deleteYes}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </ClientContentLayout>
  );
}
