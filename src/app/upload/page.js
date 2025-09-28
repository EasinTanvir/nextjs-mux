import Mux from "@mux/mux-node";
import MuxUploader from "@mux/mux-uploader-react";

const client = new Mux({
  tokenId: process.env["MUX_TOKEN_ID"],
  tokenSecret: process.env["MUX_TOKEN_SECRET"],
});

export default async function Uploader() {
  let upload;
  try {
    upload = await client.video.uploads.create({
      cors_origin: "*",
      new_asset_settings: {
        playback_policy: ["public"],
        video_quality: "basic",
        passthrough: "1",
      },
    });
  } catch (err) {
    console.log("pass", err);
  }

  console.log("upload id", upload?.id);

  return <MuxUploader endpoint={upload.url} />;
}
