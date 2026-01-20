import { getCollection } from "astro:content";

export async function GET() {
  const posts = await getCollection("blog");

  const index = posts.map((post) => ({
    slug: post.slug,
    title: post.data.title,
    description: post.data.description,
    heroImage: post.data.heroImage,
    category: post.data.category,
    pubDate: post.data.pubDate,
  }));

  return new Response(JSON.stringify(index), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
}
