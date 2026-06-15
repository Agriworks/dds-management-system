import {
  Group,
  LucideIcon,
  Users,
  LayoutDashboard,
  Wallet,
  ShieldUser,
  ReceiptText,
} from "lucide-react";
import { Translations } from "@/i18n/translations/te";

type Submenu = {
  href: string;
  label: string;
  active?: boolean;
};

type Menu = {
  href: string;
  label: string;
  active?: boolean;
  icon: LucideIcon;
  submenus?: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(t: Translations): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard",
          label: t.nav.dashboard,
          icon: LayoutDashboard,
        },
        {
          href: "/members/browse",
          label: t.nav.members,
          icon: Users,
          submenus: [
            {
              href: "/members/browse",
              label: t.nav.browseMembers,
            },
            {
              href: "/members/add",
              label: t.nav.addMember,
            },
          ],
        },
        {
          href: "/transactions/browse",
          label: t.nav.transactions,
          icon: ReceiptText,
          submenus: [
            {
              href: "/transactions/browse",
              label: t.nav.browseTransactions,
            },
            {
              href: "/transactions/add",
              label: t.nav.addTransaction,
            },
          ],
        },
        {
          href: "/accounts",
          label: t.nav.accounts,
          icon: Wallet,
        },
        {
          href: "/customers",
          label: t.nav.rolesManagement,
          icon: ShieldUser,
        },
      ],
    },
  ];
}

