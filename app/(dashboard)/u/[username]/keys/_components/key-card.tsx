"use client";

import { Input } from "@/components/ui/input";
import { CopyButton } from "./copy-button";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface KeyCardProps {
  value: string | null;
}

export const KeyCard = ({ value }: KeyCardProps) => {
  const [show, setShow] = useState(false);

  return (
    <div className="rounded-xl bg-muted p-6">
      <div className="flex items-start gap-x-8">
        <p className="font-semibold shrink-0">Stream Key</p>
        <div className="space-y-2 w-full">
          <div className="w-full flex items-center gap-x-1">
            <Input disabled value={value || ""} type={show ? "text" : "password"} placeholder="Stream Key" />
            <CopyButton value={value || ""} />
          </div>
          <Button onClick={() => setShow(!show)} variant="link" size="sm">
            {show ? "Hide" : "Show"}
          </Button>
        </div>
      </div>
    </div>
  );
};
