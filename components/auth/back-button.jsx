"use client";
import { Button } from "../ui/button";
import { ProgressBarLink } from "../progress-bar";

export const BackButton = ({ href, label }) => {
  return (
    <Button variant="superOutline" className="font-normal w-full" size="sm" asChild>
      <ProgressBarLink href={href}>{label}</ProgressBarLink>
    </Button>
  );
};
