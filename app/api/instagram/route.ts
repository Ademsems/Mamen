import { NextResponse } from "next/server";

// TODO: Add INSTAGRAM_ACCESS_TOKEN to .env.local to activate feed
export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!token) {
    return NextResponse.json({ posts: [] }, { status: 200 });
  }

  try {
    const url = new URL("https://graph.instagram.com/me/media");
    url.searchParams.set(
      "fields",
      "id,caption,media_type,media_url,permalink,thumbnail_url,timestamp"
    );
    url.searchParams.set("access_token", token);
    url.searchParams.set("limit", "6");

    const res = await fetch(url.toString(), {
      next: { revalidate: 3600 }, // cache for 1 hour
    });

    if (!res.ok) {
      console.error("Instagram API error:", res.status, await res.text());
      return NextResponse.json({ posts: [] }, { status: 200 });
    }

    const data = await res.json();
    return NextResponse.json({ posts: data.data ?? [] });
  } catch (err) {
    console.error("Instagram fetch error:", err);
    return NextResponse.json({ posts: [] }, { status: 200 });
  }
}
