import { Link, Navigator } from "expo-router";

import { cn } from "@/lib/utils";

export function Header({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const { state } = Navigator.useContext();
  const selected = state.routes[state.index].name;
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          selected !== "index" && "text-muted-foreground"
        )}
      >
        Overview
      </Link>
      <Link
        href="/customers"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          selected !== "customers" && "text-muted-foreground"
        )}
      >
        Customers
      </Link>
      <Link
        href="/products"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          selected !== "products" && "text-muted-foreground"
        )}
      >
        Products
      </Link>
    </nav>
  );
}
