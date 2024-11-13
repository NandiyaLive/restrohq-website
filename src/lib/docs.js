import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx/mdx-components";

const DOCS_DIRECTORY = path.join(process.cwd(), "src/content");

export async function getAllDocs() {
  console.log(DOCS_DIRECTORY);

  const files = getAllFiles(DOCS_DIRECTORY);
  const docs = await Promise.all(files.map(getDocFromFile));
  return docs;
}

function getAllFiles(dir) {
  const files = fs.readdirSync(dir);

  return files.reduce((allFiles, file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      return [...allFiles, ...getAllFiles(filePath)];
    }
    if (file.endsWith(".mdx")) {
      return [...allFiles, filePath];
    }
    return allFiles;
  }, []);
}

async function getDocFromFile(filePath) {
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const slug = getSlugFromFilePath(filePath);

  const { content: compiledContent } = await compileMDX({
    source: content,
    components: mdxComponents,
    options: {
      parseFrontmatter: true,
    },
  });

  return {
    ...data,
    slug,
    content: compiledContent,
  };
}

function getSlugFromFilePath(filePath) {
  const relativePath = path.relative(DOCS_DIRECTORY, filePath);
  return relativePath
    .replace(/\.mdx$/, "")
    .split(path.sep)
    .join("/");
}
