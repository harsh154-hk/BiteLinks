"use client";

import Script from "next/script";
import React from "react";

export default function ElevenLabsWidget() {
  return (
    <>
      {React.createElement("elevenlabs-convai", {
        "agent-id": "agent_0901kb3f98vqe0g97va8j3tcdmqw",
      })}

      <Script
        src="https://unpkg.com/@elevenlabs/convai-widget-embed"
        strategy="lazyOnload"
      />
    </>
  );
}
