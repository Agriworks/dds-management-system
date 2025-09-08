import { ModeToggle } from "@/components/mode-toggle";
import { SheetMenu } from "@/components/admin-panel/sheet-menu";
import { cn } from "@/lib/utils";

interface NavbarProps {
  title: string;
  className?: string;
}

export function Navbar({ title, className }: NavbarProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-5 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background dark:shadow-secondary",
        className,
      )}
    >
      <div className="mx-4 sm:mx-8 flex h-14 items-center">
        <div className="flex items-center space-x-4 lg:space-x-0">
          <SheetMenu />
          <h1 className="font-bold">{title}</h1>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
