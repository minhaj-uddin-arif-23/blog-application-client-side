"use client";

import Link from "next/link";
import { Book, Menu, Trees, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./MoodToggle";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  className?: string;
}

const menu: MenuItem[] = [
  { title: "Home", url: "/" },
  {
    title: "Blogs",
    url: "/blogs",
    items: [
      {
        title: "All Blogs",
        url: "/blogs",
        description: "Read all published articles",
        icon: <Book className="size-5" />,
      },
      {
        title: "Categories",
        url: "/categories",
        description: "Browse by blog categories",
        icon: <Trees className="size-5" />,
      },
      {
        title: "Tags",
        url: "/tags",
        description: "Explore topics via tags",
        icon: <Zap className="size-5" />,
      },
    ],
  },
  { title: "About", url: "/about" },
  { title: "Contact", url: "/contact" },
];

const Navbar1 = ({ className }: Navbar1Props) => {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-background/80 backdrop-blur",
        className
      )}
    >
      <div className="mx-auto w-11/12">
        {/* Desktop */}
        <nav className="hidden items-center justify-between py-4 lg:flex">
          <Link href="/" className="text-lg font-bold tracking-tight">
            Blogify
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              {menu.map((item) => renderMenuItem(item))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex gap-2">
            <ModeToggle />
            <Button variant="outline" size="sm" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/register">Sign up</Link>
            </Button>
          </div>
        </nav>

        {/* Mobile */}
        <div className="flex items-center justify-between py-4 lg:hidden">
          <Link href="/" className="text-lg font-bold">
            Blogify
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>

            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <Link href="/" className="text-lg font-bold">
                    Blogify
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="mt-6 flex flex-col gap-6">
                <Accordion type="single" collapsible>
                  {menu.map((item) => renderMobileMenuItem(item))}
                </Accordion>

                <div className="flex flex-col gap-3">
                  <ModeToggle />
                  <Button variant="outline" asChild>
                    <Link href="/login">Login</Link>
                  </Button>
                  <Button asChild>
                    <Link href="/register">Sign up</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="grid gap-2 p-2 md:w-[400px]">
            {item.items.map((sub) => (
              <NavigationMenuLink asChild key={sub.title}>
                <Link
                  href={sub.url}
                  className="flex items-start gap-4 rounded-md p-3 transition hover:bg-muted"
                >
                  {sub.icon}
                  <div>
                    <p className="text-sm font-semibold">{sub.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {sub.description}
                    </p>
                  </div>
                </Link>
              </NavigationMenuLink>
            ))}
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink asChild>
        <Link
          href={item.url}
          className="rounded-md px-4 py-2 text-sm font-medium transition hover:bg-muted"
        >
          {item.title}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title}>
        <AccordionTrigger>{item.title}</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-2">
          {item.items.map((sub) => (
            <Link
              key={sub.title}
              href={sub.url}
              className="rounded-md px-2 py-1 text-sm hover:bg-muted"
            >
              {sub.title}
            </Link>
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <Link
      key={item.title}
      href={item.url}
      className="block rounded-md px-2 py-1 text-sm font-medium hover:bg-muted"
    >
      {item.title}
    </Link>
  );
};

export { Navbar1 };
