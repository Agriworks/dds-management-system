import {
  Group,
  LucideIcon,
  Users,
  LayoutDashboard,
  Wallet,
  ShieldUser,
  ReceiptText,
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
          label: "డ్యాష్‌బోర్డ్",
          icon: LayoutDashboard,
        },
        {
          href: "/members/browse",
          label: "సభ్యులు",
          icon: Users,
          submenus: [
            {
              href: "/members/browse",
              label: "సంఘం సభ్యులు",
            },
            {
              href: "/members/add",
              label: "కొత్త సభ్యుడు",
            },
          ],
        },
        {
          href: "/transactions/browse",
          label: "ట్రాన్సాక్షన్లు",
          icon: ReceiptText,
          submenus: [
            {
              href: "/transactions/browse",
              label: "ట్రాన్సాక్షన్లు చూడండి",
            },
            {
              href: "/transactions/add",
              label: "కొత్త ట్రాన్సాక్షన్",
            },
          ],
        },
        {
          href: "/accounts",
          label: "అకౌంట్లు",
          icon: Wallet,
        },
        {
          href: "/customers",
          label: "పాత్రల నిర్వహణ",
          icon: ShieldUser,
        },
      ],
    },
  ];
}
