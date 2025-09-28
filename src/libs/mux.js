const sendData = {
  muxStatus: "status of the video",
  muxUploadId: "create a id when you will upload the video by upload.id",

  muxAssetId: "unique",
  muxPlaybackId: "play the video al generate thumbnail for the video",

  thubnailUrl: "play the video al generate thumbnail for the video",

  // muxTrackId: "for transcripn",
  // muxTrackStatus: "",
};

const create = {
  url: "https://direct-uploads.oci-us-ashburn-1-vop1.production.mux.com/upload/1hUr1C4mT7giJFihDUfTu9Q2V02XGQZJqMffijBtdh01A?token=eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg5MTg4MjMwOTIyNzA1NjMwMTMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJkdSIsImV4cCI6MTc1OTY0MjkxNiwic3ViIjoiMWhVcjFDNG1UN2dpSkZpaERVZlR1OVEyVjAyWEdRWkpxTWZmaWpCdGRoMDFBIn0.pKfXVr_K1_NlKVVLCrUdsLcLZ9e4suP6iL1ahh04iaMNBdCrjwfjpy-5-PVKA2gQpFPkoTrGRObUfRwtfdSSEgdDard0fIGi5zcp2_POPx9SwAvABgAvEM20D3HmAknt4a_jvc-k7M3K3tPW0Pmma5rhD4zJNx9B8KGZTYe9B8EHitUNn5Ck9cBgTzoMzjRrh6oQxXdoDWeyBcivB9g6BQYAL4nlveccEccuqhEDMEJ9zIC4IMjwM-ptxWlRzAyIOcxA0vwqyJG10mOcxKBmQErKfmzbx-LSuJpOaJxxntAtFdbLkm1_XD-mF3GxtOuiWfymIA3iGCjQfzAHWkD-RQ",
  timeout: 3600,
  status: "waiting",
  new_asset_settings: {
    video_quality: "basic",
    playback_policies: ["public"],
    passthrough: "1",
  },
  id: "1hUr1C4mT7giJFihDUfTu9Q2V02XGQZJqMffijBtdh01A",
  cors_origin: "*",
};

const ready = {
  video_quality: "basic",
  upload_id: "1hUr1C4mT7giJFihDUfTu9Q2V02XGQZJqMffijBtdh01A",
  tracks: [
    {
      type: "video",
      max_width: 1280,
      max_height: 720,
      max_frame_rate: 30,
      id: "gNMMqdfR3qPSjaX8pPQPJ9KZvz6oHCBGc9WTqtFMU02g",
      duration: 14.766667,
    },
    {
      type: "audio",
      status: "ready",
      primary: true,
      name: "Default",
      max_channels: 2,
      language_code: "und",
      id: "zyBEN01fVcA5Ka402NXSkTAYEKinY8y2QUdXAHqrTVHAQsPSp2bCDkEQ",
    },
  ],
  status: "ready",
  resolution_tier: "720p",
  progress: { state: "completed", progress: 100 },
  playback_ids: [
    {
      policy: "public",
      id: "02IyVWoerW5uguAKSX01adL4Iadw6cKMAB01DEBTfhdoLg",
    },
  ],
  passthrough: "1",
  mp4_support: "none",
  max_stored_resolution: "HD",
  max_stored_frame_rate: 30,
  max_resolution_tier: "1080p",
  master_access: "none",
  ingest_type: "on_demand_direct_upload",
  id: "ghlGPl4XrJjGmhyqCg00TiMfoUTGEyRRWW01CXUdNsSl8",
  encoding_tier: "baseline",
  duration: 14.788,
  created_at: 1759038277,
  aspect_ratio: "16:9",
};
