import * as React from "react";

import { cn } from "@/lib/utils";

export function Section({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <section className={cn("py-14 sm:py-16", className)} {...props}>
      <div className="container px-4 max-w-7xl mx-auto relative z-10">
        {children}
      </div>
    </section>
  );
}
