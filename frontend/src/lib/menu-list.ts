import {
  Group,
  LucideIcon,
  CreditCard,
  Users,
  LayoutDashboard,
} from "lucide-react";

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

export function getMenuList(): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard",
          label: "Dashboard",
          icon: LayoutDashboard,
        },
        {
          href: "/members/browse",
          label: "Members",
          icon: Users,
          submenus: [
            {
              href: "/members/browse",
              label: "Browse",
            },
            {
              href: "/members/add",
              label: "Add",
            },
          ],
        },
        {
          href: "/transactions/browse",
          label: "Transactions",
          icon: CreditCard,
          submenus: [
            {
              href: "/transactions/browse",
              label: "Browse",
            },
            {
              href: "/transactions/add",
              label: "Add",
            },
          ],
        },
        {
          href: "/accounts",
          label: "Accounts",
          icon: CreditCard,
        },
        {
          href: "/customers",
          label: "Roles Management",
          icon: Users,
        },
      ],
    },
  ];
}
