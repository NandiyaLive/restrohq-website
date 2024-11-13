import { DocsSidebarNav } from "@/components/docs/sidebar";
import { MobileNav } from "@/components/docs/mobile-nav";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DocsSearch } from "@/components/docs/search";
import Logo from "@/components/common/logo";
import Navbar from "@/components/docs/navbar";

export default function DocsLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container flex-1">
        <div className="grid grid-cols-[200px_1fr] gap-6 md:grid-cols-[250px_1fr] lg:grid-cols-[300px_1fr]">
          <aside className="hidden w-[200px] flex-col md:flex md:w-[250px] lg:w-[300px]">
            <ScrollArea className="flex-1 py-6 pr-6">
              <DocsSidebarNav />
            </ScrollArea>
          </aside>
          <main className="relative py-6">
            <div className="prose prose-slate dark:prose-invert max-w-none">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
