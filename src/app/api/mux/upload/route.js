import Mux from "@mux/mux-node";
import { NextResponse } from "next/server";
const mux = new Mux({
  tokenId: process.env.MUX_TOKEN_ID,
  tokenSecret: process.env.MUX_TOKEN_SECRET,
});

export default async function POST(params) {
  const upload = await mux.video.uploads.create({
    cors_origin: "*",
    new_asset_settings: {
      playback_policy: ["public"],
      video_quality: "basic",
      passthrough: 1,
    },
  });

  return NextResponse.json({ url: upload.url }, { status: 201 });

  // upload.url is what you'll want to return to your client.
}
