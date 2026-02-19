import { cn } from "../lib/utils";

interface AvailabilityBadgeProps {
  available: boolean;
  count?: number;
  size?: "sm" | "md";
}

export default function AvailabilityBadge({
  available,
  count,
  size = "sm",
}: AvailabilityBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-body font-semibold rounded-full",
        size === "sm" && "text-xs px-3 py-1",
        size === "md" && "text-sm px-4 py-1.5",
        available
          ? "bg-available text-white shadow-md"
          : "bg-unavailable text-white shadow-md"
      )}
    >
      <span
        className={cn(
          "w-2 h-2 rounded-full",
          available ? "bg-white" : "bg-white"
        )}
      />
      {available
        ? count
          ? `${count} Available`
          : "Available"
        : "Not Available"}
    </span>
  );
}
