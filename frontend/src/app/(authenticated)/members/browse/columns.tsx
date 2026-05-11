import { ColumnDef } from "@tanstack/react-table";

export type MemberRow = {
  id: string;
  givenName: string;
  familyName: string;
  husbandOrFatherName: string;
  aadharNumber: string;
  phoneNumber: string;
  mandal: string;
  village: string;
};

export function getMemberColumns(): ColumnDef<MemberRow>[] {
  return [
    {
      accessorKey: "givenName",
      header: "సభ్యుని పేరు",
    },
    {
      accessorKey: "familyName",
      header: "ఇంటి పేరు",
    },
    {
      accessorKey: "husbandOrFatherName",
      header: "భర్త / తండ్రి పేరు",
    },
    {
      accessorKey: "aadharNumber",
      header: "ఆధార్ నంబర్",
    },
    {
      accessorKey: "phoneNumber",
      header: "ఫోన్ నంబర్",
    },
    {
      accessorKey: "mandal",
      header: "మండలం",
    },
    {
      accessorKey: "village",
      header: "ఊరు",
    },
  ];
}
