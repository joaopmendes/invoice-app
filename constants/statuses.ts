export const STATUSES = {
  DRAFT: "DRAFT",
  PENDING: "PENDING",
  PAID: "PAID",
} as const;

export type Status = typeof STATUSES[keyof typeof STATUSES];