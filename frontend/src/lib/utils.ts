import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getTransactionTypeColor(type: string) {
  switch (type) {
    case "DEPOSIT":
      return "bg-green-100 text-green-800";
    case "WITHDRAWL":
      return "bg-red-100 text-red-800";
    case "LOAN":
      return "bg-blue-100 text-blue-800";
    case "PAYBACK":
      return "bg-purple-100 text-purple-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
}

export function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function formatAmount(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(amount);
}
