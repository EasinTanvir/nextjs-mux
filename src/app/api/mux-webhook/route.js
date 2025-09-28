import Mux from "@mux/mux-node";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

const secret = process.env.MUX_WEBHOOK_SECRET;

export async function POST(request) {
  const getJsonBody = await request.json();
  const rawBody = JSON.stringify(getJsonBody);

  const headerPayload = headers();
  const muxSignature = (await headerPayload).get("mux-signature");
  console.log("type,", getJsonBody.type);

  if (!muxSignature) {
    console.log("signature not found");
    return NextResponse.json(
      { message: "signature not found" },
      { status: 500 }
    );
  }

  const mux = new Mux();
  mux.webhooks.verifySignature(
    rawBody,
    {
      "mux-signature": muxSignature,
    },
    secret
  );

  switch (getJsonBody.type) {
    case "video.upload.created":
      console.log("create", getJsonBody.data);

    case "video.asset.ready":
      console.log("ready", getJsonBody.data);

    case "video.asset.deleted":
      // delete with upload id upload_id
      console.log("deleted", getJsonBody.data);

    case "video.asset.errored":
      console.log("error", getJsonBody.data);
  }

  return Response.json({ message: "ok" });
}

// access video thubmnail => https://image.mux.com/02IyVWoerW5uguAKSX01adL4Iadw6cKMAB01DEBTfhdoLg/thumbnail.jpg
// access video preview => https://image.mux.com/02IyVWoerW5uguAKSX01adL4Iadw6cKMAB01DEBTfhdoLg/animated.gif
