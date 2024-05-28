import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function getPostMetadata(basePath) {
  const cwd = process.cwd();
  console.log(cwd);
  const folder = basePath + "/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((filename) => {
    const fileContents = fs.readFileSync(
      path.resolve(cwd, basePath, filename),
      "utf8"
    );
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      author: matterResult.data.author,
      bio: matterResult.data.description,
      slug: filename.replace(".md", ""),
    };
  });
  return posts;
}
