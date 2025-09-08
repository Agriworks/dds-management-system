import {
    Group,
    LucideIcon,
    CreditCard,
    Users,
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
                href: "/customers",
                label: "Customers",
                icon: Users,
            },
        ]
      },
    ];
  }
  