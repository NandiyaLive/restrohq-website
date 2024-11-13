import Link from "next/link";
import Logo from "../common/logo";
import { MobileNav } from "./mobile-nav";
import { DocsSearch } from "./search";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex p-4 items-center">
        <div className="flex items-center gap-1">
          <Link href="/">
            <div className="flex items-center gap-2">
              <Logo className="h-6 w-6" />
              <h3 className="text-xl font-semibold">RestroHQ</h3>
            </div>
          </Link>

          <h3 className="text-xl font-semibold text-neutral-400">/</h3>

          <Link href="/docs">
            <h3 className="text-xl font-semibold">Docs</h3>
          </Link>
        </div>
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <DocsSearch />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
