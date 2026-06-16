"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { useLanguage } from "@/i18n/LanguageContext";

export function NewTransactionFab() {
  const { t } = useLanguage();
  const router = useRouter();
  const [expanded, setExpanded] = useState(false);
  const fabRef = useRef<HTMLDivElement>(null);

  // Collapse when tapping outside
  useEffect(() => {
    if (!expanded) return;

    function handleClickOutside(e: MouseEvent | TouchEvent) {
      if (fabRef.current && !fabRef.current.contains(e.target as Node)) {
        setExpanded(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [expanded]);

  // Auto-collapse after 3 seconds
  useEffect(() => {
    if (!expanded) return;
    const timer = setTimeout(() => setExpanded(false), 3000);
    return () => clearTimeout(timer);
  }, [expanded]);

  const handleMobileTap = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      // Only intercept on mobile (< 640px, matching Tailwind's sm breakpoint)
      if (window.innerWidth >= 640) return;

      e.preventDefault();
      if (expanded) {
        router.push("/transactions/add");
      } else {
        setExpanded(true);
      }
    },
    [expanded, router],
  );

  const label = t.membersBrowse.newTransactionBtn;

  return (
    <div ref={fabRef} className="fixed bottom-6 right-6 z-50 sm:bottom-8 sm:right-8">
      {/* ── Desktop: tooltip on hover, direct navigation ── */}
      <div className="hidden sm:block">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              asChild
              size="icon"
              className="h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <a href="/transactions/add" aria-label={label}>
                <Plus className="!size-6" />
              </a>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left" sideOffset={8}>
            {label}
          </TooltipContent>
        </Tooltip>
      </div>

      {/* ── Mobile: expandable FAB ── */}
      <div className="sm:hidden">
        <Button
          onClick={handleMobileTap}
          className={[
            "rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out h-14",
            expanded ? "pl-5 pr-4 gap-2" : "w-14 px-0",
          ].join(" ")}
          aria-label={label}
        >
          <Plus className="!size-6 shrink-0" />
          <span
            className={[
              "whitespace-nowrap text-sm font-medium overflow-hidden transition-all duration-300 ease-in-out",
              expanded ? "max-w-48 opacity-100" : "max-w-0 opacity-0",
            ].join(" ")}
          >
            {label}
          </span>
        </Button>
      </div>
    </div>
  );
}
