import Link from "next/link";
import { CodeBlock } from "./code-block";
import { Callout } from "./callout";
import { Step, Steps } from "./steps";

export const mdxComponents = {
  h1: ({ ...props }) => (
    <h1 className="text-4xl font-bold tracking-tight" {...props} />
  ),
  h2: ({ ...props }) => (
    <h2
      className="border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0"
      {...props}
    />
  ),
  h3: ({ ...props }) => (
    <h3 className="text-2xl font-semibold tracking-tight" {...props} />
  ),
  h4: ({ ...props }) => (
    <h4 className="text-xl font-semibold tracking-tight" {...props} />
  ),
  p: ({ ...props }) => (
    <p className="leading-7 [&:not(:first-child)]:mt-6" {...props} />
  ),
  ul: ({ ...props }) => (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props} />
  ),
  code: ({ ...props }) => (
    <code
      className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"
      {...props}
    />
  ),
  pre: CodeBlock,
  a: ({ href = "", ...props }) => (
    <Link
      href={href}
      className="font-medium underline underline-offset-4"
      {...props}
    />
  ),
  Callout: Callout,
  Steps: Steps,
  Step: Step,
};
