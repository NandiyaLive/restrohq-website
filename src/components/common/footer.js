import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import LogoWithText from "./logo-with-text";
import { Icon } from "@iconify/react";

const footerLinks = {
  product: [
    { label: "Features", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "API", href: "#" },
    { label: "Integrations", href: "#" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  resources: [
    { label: "Documentation", href: "#" },
    { label: "Help Center", href: "#" },
    { label: "Community", href: "#" },
    { label: "Partners", href: "#" },
  ],
  legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Security", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          <div className="col-span-2">
            <LogoWithText text="text-xl" icon="h-6 w-6" asLink />

            <p className="text-muted-foreground mt-4 mb-8 text-sm max-w-sm">
              RestroHQ is the ultimate all-in-one SaaS solution for restaurants.
              Manage POS, orders, reservations, menus, customer data, and
              analytics with ease. Start streamlining your operations today!
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Icon icon="logos:facebook" />, href: "#" },
                { icon: <Icon icon="logos:twitter" />, href: "#" },
                { icon: <Icon icon="skill-icons:instagram" />, href: "#" },
                { icon: <Icon icon="devicon:linkedin" />, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-muted-foreground text-2xl hover:text-primary transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4 capitalize text-right">
                {title}
              </h4>
              <ul className="space-y-2 text-right">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} RestroHQ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
