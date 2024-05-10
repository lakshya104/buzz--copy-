"use client";

import { Card, CardHeader, CardContent, CardFooter } from "../ui/card";
import { BackButton } from "./back-button";
import { Header } from "./header-auth";
import { Social } from "./social";

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonLabel2,
  backButtonHref2,
  backButtonHref,
  showSocial,
  heading,
}) => {
  return (
    <Card className="shadow-md w-[370px]">
      <CardHeader>
        <Header label={headerLabel} heading={heading} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref}></BackButton>
        {heading === "Register" && (
          <BackButton
            label={backButtonLabel2}
            href={backButtonHref2}
          ></BackButton>
        )}
      </CardFooter>
    </Card>
  );
};
