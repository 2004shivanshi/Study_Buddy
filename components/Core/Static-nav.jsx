"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/UI2/navigation-menu";
import { DrumstickIcon } from "lucide-react";

const Products = [
  {
    title: "Memory Matrix",
    href: "/games/memory-matrix",
    description:
      "Challenge your mind and master patterns and enhance cognitive agility with Memory Matrix!",
  },
  {
    title: "   Code Editor",
    href: "   /code-editor",
    description:
      "We provide instant, accurate, and personalized solutions to doubts.",
  },
  {
    title: "Syntax Slayer",
    href: "/games/syntax-slayer",
    description:
      "Syntax Slayer is a fast-paced coding game where players sharpen debugging skills by battling coding errors, enhancing accuracy and problem-solving through interactive challenges.",
  },
  {
    title: "Pomodoro Timer",
    href: "/pomodoro-timer",
    description:
      "The Pomodoro Timer enhances focus, productivity, and time management through structured work-break intervals.",
  },
  {
    title: "Todo",
    href: "/todo",
    description:
      "A to-do list helps manage tasks by organizing priorities, increasing focus, and tracking progress efficiently.",
  },
  {
    title: "Mentorship",
    href: "/mentorship",
    description:
      "We provide mentorship through personalized guidance, problem-solving, and continuous support using AI insights.",
  },
  {
    title: "Doubts",
    href: "/doubts",
    description:
      "A unique code editor offers real-time collaboration, error detection, and intelligent suggestions, enhancing productivity and learning efficiency.",
  },
  {
    title: "   Articles",
    href: "   /articles",
    description:
      "A unique chatbot offers instant responses, personalized interactions, and 24/7 support, enhancing user engagement and productivity.",
  },
];

const Portfolios = [
  {
    title: "Ami broker",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Trading view",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Python",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Meta TRADER",
    href: "/docs/primitives/scroll-area",
    description:
      "We use AFL (AmiBroker Formula Language) to create custom indicators and trading systems.",
  },
  {
    title: "Excel",
    href: "/docs/primitives/tabs",
    description:
      "Pine Script development empowers traders to customize their trading experience",
  },
];

export function StaticNav({ color }) {
  return (
    <nav className="absoulte top-0">
      {" "}
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link
              href={"/"}
              className={`text-white hover:text-white inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2  text-base font-medium sfont-medium transition-colors`}
            >
              Home
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              href={"/meeting"}
              className={`text-white hover:text-white inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2  text-base font-medium sfont-medium transition-colors`}
            >
              Meeting
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={`text-white hover:text-white hover:bg-black `}
            >
              <Link href={"/"}>Student More</Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] hover:bg-black ">
                {Products.map((product) => (
                  <ListItem
                    key={product.title}
                    title={product.title}
                    href={product.href}
                  >
                    {`${product.description}`}{" "}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              href={"/Select"}
              className={`text-white hover:text-white inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2  text-base font-medium sfont-medium transition-colors`}
            >
              Resume
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              href={"/bot"}
              className={`text-white hover:text-white inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2  text-base font-medium sfont-medium transition-colors`}
            >
              Chatbot
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem></NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}

// ListItem component converted to JavaScript
const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-black hover:text-gray-200 focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className=" text-base font-medium sfont-medium leading-none">
              {title}
            </div>
            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);

ListItem.displayName = "ListItem";
