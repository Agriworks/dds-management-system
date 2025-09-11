import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utilities used by transactions table
export function getTransactionTypeColor(type: string): string {
  const normalized = String(type || "").toUpperCase()

  switch (normalized) {
    case "DEPOSIT":
      return "bg-green-100 text-green-800 border-green-200"
    case "WITHDRAWL":
    case "WITHDRAWAL":
      return "bg-red-100 text-red-800 border-red-200"
    case "LOAN":
      return "bg-amber-100 text-amber-800 border-amber-200"
    case "PAYBACK":
      return "bg-blue-100 text-blue-800 border-blue-200"
    default:
      return "bg-gray-100 text-gray-800 border-gray-200"
  }
}

export function formatDate(input: string | Date): string {
  const date = input instanceof Date ? input : new Date(input)
  if (isNaN(date.getTime())) return "-"

  return date.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  })
}

export function formatAmount(amount: number): string {
  if (typeof amount !== "number" || !isFinite(amount)) return "-"

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount)
}
