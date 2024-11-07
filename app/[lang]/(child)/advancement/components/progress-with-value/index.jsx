"use client";
import React from "react";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";

const WidthValue = () => {
  const [value, setValue] = React.useState(50);

  return (
    <>
      <div className="flex gap-2">
        <Label className="inline-flex">To Level 6 </Label>
        <Progress className="flex-1" isStripe isAnimate value={value} color="success" />
        <Label className="inline-flex"> {value}/1000</Label>
      </div>
    </>
  );
};

export default WidthValue;
