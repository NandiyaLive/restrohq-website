"use client";

import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function CodeBlock({ children, className, ...props }) {
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(children);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <pre className={className} {...props}>
        {children}
      </pre>
      <Button
        size="icon"
        variant="ghost"
        className="absolute right-2 top-2 h-8 w-8"
        onClick={onCopy}
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        <span className="sr-only">Copy code</span>
      </Button>
    </div>
  );
}
