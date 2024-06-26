import Markdown from "markdown-to-jsx";
import getPostMetadata from "@/utils/getPostMetadata";
import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

function getPostContent(slug) {
  const folder = "material/";
  const file = path.join(folder, slug + ".md");
  const content = fs.readFileSync(file, "utf8");

  const matterResult = matter(content);
  return matterResult;
}

export const generateStaticProps = async () => {
  const posts = getPostMetadata("material");
  return posts.map((post) => ({ slug: post.slug }));
};

export async function generateStaticPaths({ params }) {
  const id = params?.slug ? " ⋅ " + params?.slug : "";
  return {
    title: `The Blog Site ${id.replace("_", " ")}`,
  };
}

export default function BlogPage(props) {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  console.log(post);
  return (
    <main>
      <article>
        <Markdown>{post.content}</Markdown>
      </article>
    </main>
  );
}
