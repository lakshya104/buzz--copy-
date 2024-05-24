"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { ProgressBarLink } from "./progress-bar";


export const SidebarItem = ({
  label,
  iconSrc,
  href,
}) => {
  const pathname = usePathname();
  const active = pathname.startsWith(href);

  return (
    <Button
      variant={active ? "sidebarOutline"  : "sidebar"}
      className="justify-start h-[52px]"
      asChild
    >
      <ProgressBarLink href={href}>
        <Image
          src={iconSrc}
          alt={label}
          className="mr-5"
          height={32}
          width={32}
        />
        {label}
      </ProgressBarLink>
    </Button>
  );
};