import type { ReactNode } from "react";

interface EmptyStateProps {
  icon: ReactNode;
  title: string;
  subtitle?: string;
  action?: ReactNode;
}

export function EmptyState({ icon, title, subtitle, action }: EmptyStateProps) {
  return (
    <div className="py-12 flex flex-col items-center justify-center text-center">
      <div className="text-gray-300 dark:text-gray-600 mb-3">{icon}</div>
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
        {title}
      </p>
      {subtitle && (
        <p className="text-sm text-gray-400 dark:text-gray-500 mt-1 max-w-sm">
          {subtitle}
        </p>
      )}
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}
