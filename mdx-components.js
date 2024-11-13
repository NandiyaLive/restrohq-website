import { mdxComponents } from "@/components/mdx/mdx-components";

export function useMDXComponents(components) {
  return {
    ...mdxComponents,
    ...components,
  };
}
