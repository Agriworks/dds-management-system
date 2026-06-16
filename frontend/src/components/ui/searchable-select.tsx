"use client";

import * as React from "react";
import { Search, X, Loader2, ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
} from "@/components/ui/drawer";
import {
  Command,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useIsMobile } from "@/hooks/use-mobile";

export interface SearchableSelectOption {
  value: string;
  label: string;
  searchText?: string;
}

export interface SearchableSelectProps {
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  searchPlaceholder?: string;
  emptyMessage?: string;
  loadingMessage?: string;
  errorMessage?: string;
  options: SearchableSelectOption[];
  onSearch?: (searchTerm: string) => void;
  loading?: boolean;
  error?: string | null;
  serverSideSearch?: boolean;
  renderOption?: (option: SearchableSelectOption) => React.ReactNode;
  renderValue?: (value: string, options: SearchableSelectOption[]) => string;
}

const triggerClassName =
  "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex h-9 w-full items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 font-normal";

function useVisualViewportHeight() {
  const [height, setHeight] = React.useState<number | undefined>(undefined);

  React.useEffect(() => {
    const viewport = window.visualViewport;
    if (!viewport) return;

    const update = () => setHeight(viewport.height);
    update();
    viewport.addEventListener("resize", update);
    viewport.addEventListener("scroll", update);
    return () => {
      viewport.removeEventListener("resize", update);
      viewport.removeEventListener("scroll", update);
    };
  }, []);

  return height;
}

interface SearchableSelectBodyProps {
  searchTerm: string;
  searchPlaceholder: string;
  searchInputRef: React.RefObject<HTMLInputElement | null>;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClearSearch: (e: React.MouseEvent) => void;
  filteredOptions: SearchableSelectOption[];
  loading: boolean;
  error: string | null;
  emptyMessage: string;
  loadingMessage: string;
  errorMessage: string;
  renderOption?: (option: SearchableSelectOption) => React.ReactNode;
  onSelect: (value: string) => void;
  listClassName?: string;
}

function SearchableSelectBody({
  searchTerm,
  searchPlaceholder,
  searchInputRef,
  onSearchChange,
  onClearSearch,
  filteredOptions,
  loading,
  error,
  emptyMessage,
  loadingMessage,
  errorMessage,
  renderOption,
  onSelect,
  listClassName,
}: SearchableSelectBodyProps) {
  return (
    <>
      <div className="shrink-0 border-b bg-popover p-2">
        <div className="relative">
          <Search className="pointer-events-none absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
          <input
            ref={searchInputRef}
            type="text"
            inputMode="numeric"
            placeholder={searchPlaceholder}
            value={searchTerm}
            onChange={onSearchChange}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="none"
            enterKeyHint="search"
            className="w-full touch-manipulation rounded-md border py-2 pl-8 pr-8 text-base focus:border-transparent focus:outline-none focus:ring-2 focus:ring-ring"
          />
          {searchTerm && (
            <button
              type="button"
              onClick={onClearSearch}
              className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      <CommandList
        className={cn(
          "max-h-[50vh] overflow-y-auto overscroll-contain sm:max-h-60",
          listClassName,
        )}
      >
        {loading ? (
          <div className="flex items-center justify-center px-3 py-4 text-sm text-muted-foreground">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {loadingMessage}
          </div>
        ) : error ? (
          <div className="px-3 py-4 text-center text-sm text-destructive">
            {errorMessage}
          </div>
        ) : filteredOptions.length === 0 ? (
          <div className="px-3 py-4 text-center text-sm text-muted-foreground">
            {emptyMessage}
          </div>
        ) : (
          filteredOptions.map((option) => (
            <CommandItem
              key={option.value}
              value={`${option.label} ${option.searchText || ""}`}
              onSelect={() => onSelect(option.value)}
            >
              {renderOption ? renderOption(option) : option.label}
            </CommandItem>
          ))
        )}
      </CommandList>
    </>
  );
}

interface SearchableSelectTriggerProps
  extends React.ComponentPropsWithoutRef<typeof Button> {
  displayContent: React.ReactNode;
  hasValue: boolean;
}

const SearchableSelectTrigger = React.forwardRef<
  HTMLButtonElement,
  SearchableSelectTriggerProps
>(function SearchableSelectTrigger(
  { displayContent, hasValue, className, disabled, ...props },
  ref,
) {
  return (
    <Button
      ref={ref}
      type="button"
      variant="outline"
      role="combobox"
      aria-expanded={props["aria-expanded"]}
      disabled={disabled}
      className={cn(triggerClassName, className)}
      {...props}
    >
      <span
        className={cn(
          "min-w-0 flex-1 truncate text-left",
          !hasValue && "text-muted-foreground",
        )}
      >
        {displayContent}
      </span>
      <ChevronDownIcon className="size-4 opacity-50" />
    </Button>
  );
});

export function SearchableSelect({
  value,
  onValueChange,
  placeholder = "Select an option",
  disabled = false,
  className,
  searchPlaceholder = "Search...",
  emptyMessage = "No options found",
  loadingMessage = "Loading...",
  errorMessage = "Error loading options",
  options = [],
  onSearch,
  loading = false,
  error = null,
  serverSideSearch = false,
  renderOption,
  renderValue,
}: SearchableSelectProps) {
  const isMobile = useIsMobile();
  const viewportHeight = useVisualViewportHeight();
  const [isOpen, setIsOpen] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filteredOptions, setFilteredOptions] =
    React.useState<SearchableSelectOption[]>(options);
  const searchInputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (serverSideSearch) {
      setFilteredOptions(options);
      return;
    }

    if (!searchTerm.trim()) {
      setFilteredOptions(options);
    } else {
      const filtered = options.filter((option) => {
        const searchText =
          `${option.label} ${option.searchText || ""}`.toLowerCase();
        return searchText.includes(searchTerm.toLowerCase());
      });
      setFilteredOptions(filtered);
    }
  }, [options, searchTerm, serverSideSearch]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    onSearch?.(newSearchTerm);
  };

  const clearSearch = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSearchTerm("");
    onSearch?.("");
    searchInputRef.current?.focus({ preventScroll: true });
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (open) {
      if (!isMobile) {
        setTimeout(() => {
          searchInputRef.current?.focus({ preventScroll: true });
        }, 0);
      }
    } else {
      setSearchTerm("");
    }
  };

  const handleSelect = (newValue: string) => {
    onValueChange?.(newValue);
    setIsOpen(false);
    setSearchTerm("");
  };

  const getDisplayValue = () => {
    if (!value) return placeholder;

    if (renderValue) {
      return renderValue(value, options);
    }

    const selectedOption = options.find((option) => option.value === value);
    return selectedOption?.label || value;
  };

  const displayContent = loading ? (
    <span className="inline-flex items-center gap-2">
      <Loader2 className="h-4 w-4 animate-spin" />
      {loadingMessage}
    </span>
  ) : error ? (
    <span className="text-destructive">{errorMessage}</span>
  ) : (
    getDisplayValue()
  );

  const bodyProps: SearchableSelectBodyProps = {
    searchTerm,
    searchPlaceholder,
    searchInputRef,
    onSearchChange: handleSearchChange,
    onClearSearch: clearSearch,
    filteredOptions,
    loading,
    error,
    emptyMessage,
    loadingMessage,
    errorMessage,
    renderOption,
    onSelect: handleSelect,
  };

  if (isMobile) {
    const drawerMaxHeight = viewportHeight
      ? `${Math.round(viewportHeight * 0.85)}px`
      : "85vh";

    return (
      <>
        <SearchableSelectTrigger
          displayContent={displayContent}
          hasValue={!!value}
          disabled={disabled}
          aria-expanded={isOpen}
          className={className}
          onClick={() => {
            if (!disabled) handleOpenChange(true);
          }}
        />
        <Drawer open={isOpen} onOpenChange={handleOpenChange} direction="bottom">
          <DrawerContent
            className="flex flex-col"
            style={{ maxHeight: drawerMaxHeight }}
          >
            <DrawerTitle className="sr-only">{placeholder}</DrawerTitle>
            <Command shouldFilter={!serverSideSearch} className="flex min-h-0 flex-1 flex-col overflow-hidden">
              <SearchableSelectBody
                {...bodyProps}
                listClassName="max-h-none flex-1"
              />
            </Command>
          </DrawerContent>
        </Drawer>
      </>
    );
  }

  return (
    <Popover open={isOpen} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        <SearchableSelectTrigger
          displayContent={displayContent}
          hasValue={!!value}
          disabled={disabled}
          aria-expanded={isOpen}
          className={className}
        />
      </PopoverTrigger>
      <PopoverContent
        className="z-[100000] w-[var(--radix-popover-trigger-width)] max-w-[90vw] p-0 sm:max-w-none"
        align="start"
        side="bottom"
        sideOffset={8}
        onOpenAutoFocus={(event) => {
          event.preventDefault();
          searchInputRef.current?.focus({ preventScroll: true });
        }}
      >
        <Command shouldFilter={!serverSideSearch}>
          <SearchableSelectBody {...bodyProps} />
        </Command>
      </PopoverContent>
    </Popover>
  );
}
