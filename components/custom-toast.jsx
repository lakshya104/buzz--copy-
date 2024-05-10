import { toast } from "sonner";

import { Button } from "@/components/ui/button";

export function CustomToast({variant, heading, subHeading, description}) {
  return (
    <Button
      variant={variant || "default"}
      onClick={() =>
        toast({subHeading}, {
          description: {description},
          action: {
            label: "X",
            onClick: () => {},
          },
        })
      }
    >
      {heading}
    </Button>
  );
}


// <CustomToast
// variant="dangerOutline"
// heading="Sign Out"
// subHeading="Signed Out"
// description="successfully signed out"
// />