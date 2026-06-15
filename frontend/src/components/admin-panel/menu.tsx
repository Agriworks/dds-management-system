"use client";

import Link from "next/link";
import { Ellipsis, LogOut, Settings, Languages } from "lucide-react";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { getMenuList } from "@/lib/menu-list";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CollapseMenuButton } from "@/components/admin-panel/collapse-menu-button";
import { UserPen } from "lucide-react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useLanguage } from "@/i18n/LanguageContext";

interface MenuProps {
  isOpen: boolean | undefined;
}

export function Menu({ isOpen }: MenuProps) {
  const pathname = usePathname();
  const { data: session } = useSession();
  const { lang, setLang, t } = useLanguage();
  const menuList = getMenuList(t);

  const handleLogout = async () => {
    await signOut({ redirect: true, callbackUrl: "/" });
  };

  return (
    <ScrollArea className="[&>div>div[style]]:!block">
      <nav className="mt-8 h-full w-full">
        <ul className="flex flex-col min-h-[calc(100vh-48px-36px-16px-32px)] lg:min-h-[calc(100vh-32px-40px-32px)] items-start space-y-1 px-2">
          {menuList.map(({ groupLabel, menus }, index) => (
            <li className={cn("w-full", groupLabel ? "pt-5" : "")} key={index}>
              {(isOpen && groupLabel) || isOpen === undefined ? (
                <p className="text-sm font-medium text-muted-foreground px-4 pb-2 max-w-[248px] truncate">
                  {groupLabel}
                </p>
              ) : !isOpen && isOpen !== undefined && groupLabel ? (
                <TooltipProvider>
                  <Tooltip delayDuration={100}>
                    <TooltipTrigger className="w-full">
                      <div className="w-full flex justify-center items-center">
                        <Ellipsis className="h-5 w-5" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                      <p>{groupLabel}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ) : (
                <p className="pb-2"></p>
              )}
              {menus.map(
                ({ href, label, icon: Icon, active, submenus }, index) => {
                  return !submenus || submenus.length === 0 ? (
                    <div className="w-full" key={index}>
                      <TooltipProvider disableHoverableContent>
                        <Tooltip delayDuration={100}>
                          <TooltipTrigger asChild>
                            <Button
                              variant={
                                (active === undefined &&
                                  pathname.startsWith(href)) ||
                                active
                                  ? "secondary"
                                  : "ghost"
                              }
                              className="w-full justify-start h-10 mb-1"
                              asChild
                            >
                              <Link href={href}>
                                <span
                                  className={cn(isOpen === false ? "" : "mr-4")}
                                >
                                  <Icon size={18} />
                                </span>
                                <p
                                  className={cn(
                                    "max-w-[200px] truncate",
                                    isOpen === false
                                      ? "-translate-x-96 opacity-0"
                                      : "translate-x-0 opacity-100",
                                  )}
                                >
                                  {label}
                                </p>
                              </Link>
                            </Button>
                          </TooltipTrigger>
                          {isOpen === false && (
                            <TooltipContent side="right">
                              {label}
                            </TooltipContent>
                          )}
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  ) : (
                    <div className="w-full" key={index}>
                      <CollapseMenuButton
                        icon={Icon}
                        label={label}
                        active={
                          active === undefined
                            ? pathname.startsWith(href)
                            : active
                        }
                        submenus={submenus}
                        isOpen={isOpen}
                      />
                    </div>
                  );
                },
              )}
            </li>
          ))}

          <li className="w-full grow flex flex-col justify-end items-center">
            {/* Language Selector */}
            {isOpen !== false ? (
              <div className="w-full px-3 mb-4 space-y-1.5">
                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <Settings className="w-4 h-4" />
                  <span>{t.nav.language}</span>
                </div>
                <Select value={lang} onValueChange={(v) => setLang(v as "te" | "en")}>
                  <SelectTrigger className="w-full h-9 bg-background border-input">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="te">తెలుగు (Telugu)</SelectItem>
                    <SelectItem value="en">English</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            ) : (
              <div className="mb-4">
                <TooltipProvider disableHoverableContent>
                  <Tooltip delayDuration={100}>
                    <TooltipTrigger asChild>
                      <div>
                        <Select value={lang} onValueChange={(v) => setLang(v as "te" | "en")}>
                          <SelectTrigger className="w-10 h-10 p-0 flex items-center justify-center border-input bg-background [&>span:last-child]:hidden">
                            <Languages className="w-5 h-5 text-muted-foreground" />
                            <span className="sr-only">{t.nav.language}</span>
                          </SelectTrigger>
                          <SelectContent side="right" align="start">
                            <SelectItem value="te">తెలుగు (Telugu)</SelectItem>
                            <SelectItem value="en">English</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="right">భాష / Language</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            )}

            <TooltipProvider disableHoverableContent>
              <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full h-10 mt-5"
                    disabled
                  >
                    <Link
                      href="/account"
                      className="w-full flex justify-center items-center h-10"
                    >
                      <Avatar className="h-full w-10 flex items-center justify-center">
                        <AvatarImage src="#" alt="Avatar" />
                        <AvatarFallback className="bg-transparent flex items-center justify-center">
                          <UserPen className="w-4 h-4" />
                        </AvatarFallback>
                      </Avatar>
                      <p
                        className={cn(
                          "flex",
                          "whitespace-nowrap",
                          isOpen === false ? "opacity-0 hidden" : "opacity-100",
                          "items-center",
                          "justify-center",
                        )}
                      >
                        {session?.user?.email}
                      </p>
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">{t.nav.account}</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider disableHoverableContent>
              <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                  <Button
                    onClick={handleLogout}
                    variant="outline"
                    className="w-full justify-center h-10 mt-5"
                  >
                    <span className={cn(isOpen === false ? "" : "mr-4")}>
                      <LogOut size={18} />
                    </span>
                    <p
                      className={cn(
                        "whitespace-nowrap",
                        isOpen === false ? "opacity-0 hidden" : "opacity-100",
                      )}
                    >
                      {t.nav.logout}
                    </p>
                  </Button>
                </TooltipTrigger>
                {isOpen === false && (
                  <TooltipContent side="right">{t.nav.logout}</TooltipContent>
                )}
              </Tooltip>
            </TooltipProvider>
          </li>
        </ul>
      </nav>
    </ScrollArea>
  );
}
