import Link from "next/link";
import LogoWithText from "./logo-with-text";
import { Button } from "../ui/button";
import { Icon } from "@iconify/react";
import { config } from "@/lib/config";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Docs",
    href: "/docs",
  },
  // {
  //   name: "Platform",
  //   href: "/platform",
  // },
  // {
  //   name: "Resources",
  //   href: "/resources",
  // },
  // {
  //   name: "Pricing",
  //   href: "/pricing",
  // },
];

const Navbar = () => {
  return (
    <section className="bg-white text-black fixed top-0 left-0 right-0 w-screen z-50 border">
      <div className="container max-w-7xl grid grid-cols-4 lg:grid-cols-5 items-center justify-between py-4">
        <LogoWithText icon="h-8 w-8" text="text-xl" />

        <nav className="flex items-center gap-8 col-span-2 lg:col-span-3 justify-center">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm">
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-4 text-sm">
          <a
            href="https://github.com/RestroHQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="akar-icons:github-fill" className="h-6 w-6" />
          </a>

          <Link href={`${config.APP_URL}/auth/login`}>Sign In</Link>

          <Button asChild>
            <Link href={`${config.APP_URL}/auth/register`} className="text-sm">
              Get Started
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
