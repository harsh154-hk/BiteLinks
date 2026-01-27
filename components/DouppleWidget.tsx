"use client";

import Script from "next/script";
import React from "react";

export default function DouppleWidget() {
  return (
    <>
      <Script
        src="https://doupple.vercel.app/widget.js"
        data-agent-id="3a8fc7d8-7314-46ef-8827-8e00523bcc65"
        strategy="lazyOnload"
      />
    </>
  );
}
