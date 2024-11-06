import Link from "next/link";
import LogoWithText from "./logo-with-text";
import { Button } from "../ui/button";

const navLinks = [
  {
    name: "Platform",
    href: "/platform",
  },
  {
    name: "Resources",
    href: "/resources",
  },
  {
    name: "Pricing",
    href: "/pricing",
  },
];

const Navbar = () => {
  return (
    <section className="bg-white text-black fixed top-0 left-0 right-0 w-screen z-50 border">
      <div className="container max-w-7xl grid grid-cols-5 lg:grid-cols-7 items-center justify-between py-4">
        <LogoWithText icon="h-8 w-8" text="text-xl" />

        <nav className="flex items-center gap-8 col-span-3 lg:col-span-5 justify-center">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm">
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 text-sm">
          <Link href={`${process.env.NEXT_PUBLIC_APP_URL}/auth/login`}>
            Sign In
          </Link>

          <Button asChild>
            <Link
              href={`${process.env.NEXT_PUBLIC_APP_URL}/auth/register`}
              className="text-sm"
            >
              Get Started
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
