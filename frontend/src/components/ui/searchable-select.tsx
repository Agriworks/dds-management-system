"use client";

import * as React from "react";
import { Search, X, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

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
  const [isOpen, setIsOpen] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filteredOptions, setFilteredOptions] =
    React.useState<SearchableSelectOption[]>(options);
  const searchInputRef = React.useRef<HTMLInputElement>(null);
  const searchContainerRef = React.useRef<HTMLDivElement>(null);

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
      setTimeout(() => {
        searchInputRef.current?.focus({ preventScroll: true });
      }, 0);
    } else {
      setSearchTerm("");
    }
  };

  const handleValueChange = (newValue: string) => {
    onValueChange?.(newValue);
    setIsOpen(false);
    setSearchTerm("");
  };

  const preventCloseOnSearchInteraction = (event: Event) => {
    if (
      searchContainerRef.current &&
      searchContainerRef.current.contains(event.target as Node)
    ) {
      event.preventDefault();
    }
  };

  const stopEventPropagation = (e: React.SyntheticEvent) => {
    e.stopPropagation();
  };

  const getDisplayValue = () => {
    if (!value) return placeholder;

    if (renderValue) {
      return renderValue(value, options);
    }

    const selectedOption = options.find((option) => option.value === value);
    return selectedOption?.label || value;
  };

  return (
    <Select
      value={value}
      onValueChange={handleValueChange}
      disabled={disabled}
      open={isOpen}
      onOpenChange={handleOpenChange}
    >
      <SelectTrigger className={cn("w-full", className)}>
        <SelectValue placeholder={placeholder}>
          {loading ? (
            <span className="inline-flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              {loadingMessage}
            </span>
          ) : error ? (
            <span className="text-destructive">{errorMessage}</span>
          ) : value ? (
            getDisplayValue()
          ) : (
            placeholder
          )}
        </SelectValue>
      </SelectTrigger>
      <SelectContent
        searchable
        className="p-0 w-[var(--radix-select-trigger-width)] max-w-[90vw] sm:max-w-none z-[100000]"
        side="bottom"
        align="start"
        position="popper"
        sideOffset={8}
        avoidCollisions={false}
        onOpenAutoFocus={(event) => {
          event.preventDefault();
          searchInputRef.current?.focus({ preventScroll: true });
        }}
        onCloseAutoFocus={(event) => {
          event.preventDefault();
        }}
        onPointerDownOutside={preventCloseOnSearchInteraction}
        onInteractOutside={preventCloseOnSearchInteraction}
        onFocusOutside={preventCloseOnSearchInteraction}
      >
        <div
          ref={searchContainerRef}
          className="p-2 border-b sticky top-0 bg-popover z-10"
          onPointerDown={stopEventPropagation}
          onMouseDown={stopEventPropagation}
          onTouchStart={stopEventPropagation}
        >
          <div className="relative">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            <input
              ref={searchInputRef}
              type="text"
              inputMode="numeric"
              placeholder={searchPlaceholder}
              value={searchTerm}
              onChange={handleSearchChange}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="none"
              enterKeyHint="search"
              onPointerDown={stopEventPropagation}
              onMouseDown={stopEventPropagation}
              onTouchStart={stopEventPropagation}
              onClick={stopEventPropagation}
              onKeyDown={stopEventPropagation}
              className="w-full pl-8 pr-8 py-2 text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent touch-manipulation"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={clearSearch}
                onPointerDown={stopEventPropagation}
                onMouseDown={stopEventPropagation}
                onTouchStart={stopEventPropagation}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        <div className="max-h-[50vh] sm:max-h-60 overflow-y-auto overscroll-contain">
          {loading ? (
            <div className="flex items-center justify-center py-4 px-3 text-sm text-muted-foreground">
              <Loader2 className="h-4 w-4 animate-spin mr-2" />
              {loadingMessage}
            </div>
          ) : error ? (
            <div className="py-4 px-3 text-sm text-destructive text-center">
              {errorMessage}
            </div>
          ) : filteredOptions.length === 0 ? (
            <div className="py-4 px-3 text-sm text-muted-foreground text-center">
              {emptyMessage}
            </div>
          ) : (
            filteredOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {renderOption ? renderOption(option) : option.label}
              </SelectItem>
            ))
          )}
        </div>
      </SelectContent>
    </Select>
  );
}
