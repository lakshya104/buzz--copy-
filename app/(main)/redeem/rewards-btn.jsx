"use client";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import React, { useState } from "react";
import { redeemRewardForUser } from "@/actions/server-utils";

const RewardsBtn = ({ disabled, id }) => {
  const [active, setActive] = useState(false);
  return (
    <>
      <Button
        variant="sidebarOutline"
        className="w-32"
        onClick={() => setActive((prev) => !prev)}
        disabled={disabled}
      >
        {" "}
        {active ? <Check className="stroke-[3] h-6 w-6" /> : "Select"}
      </Button>
      {/* <Button onClick={() => redeemRewardForUser(id)}>Select</Button> */}
    </>
  );
};

export default RewardsBtn;
