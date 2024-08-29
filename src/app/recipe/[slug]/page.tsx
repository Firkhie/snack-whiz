import Markdown from "markdown-to-jsx";
import fs from "fs";
import matter from "gray-matter";
import React from "react";
import path from "path";

interface RecipePageProps {
  params: {
    slug: string;
  };
}

function getPostContent(slug: string) {
  const folder = path.join(process.cwd(), "src/recipes");
  const file = path.join(folder, `${slug}.md`);
  const content = fs.readFileSync(file, "utf8");

  const matterResult = matter(content);
  return matterResult;
}

export default function RecipePage(props: RecipePageProps) {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return (
    <main>
      <article>
        <header>
          <h1>{post.data.title}</h1>
          <p className="text-gray-600">{post.data.description}</p>
          <div className="text-sm text-gray-500">
            <span>Cook Time: {post.data.cook_time} minutes</span> |
            <span> Difficulty: {post.data.difficulty}</span>
          </div>
        </header>
        <Markdown
          options={{
            overrides: {
              h1: {
                component: "h1",
                props: {
                  className: "text-2xl font-bold mt-6",
                },
              },
              h2: {
                component: "h2",
                props: {
                  className: "text-xl font-semibold mt-4 underline mb-2",
                },
              },
              h3: {
                component: "h3",
                props: {
                  className: "font-semibold mb-1",
                },
              },
              p: {
                props: {
                  className: "mb-4",
                },
              },
              ul: {
                props: {
                  className: "list-disc list-inside mb-4",
                },
              },
              ol: {
                props: {
                  className: "list-decimal mb-4 pl-4",
                },
              },
            },
          }}
        >
          {post.content}
        </Markdown>
      </article>
    </main>
  );
}
