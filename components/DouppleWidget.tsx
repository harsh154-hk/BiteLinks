"use client";

import Script from "next/script";
import React from "react";

export default function DouppleWidget() {
  return (
    <>
      <Script
        src="https://doupple.vercel.app/widget.js"
        data-agent-id="a22c8009-1037-4aeb-87b8-bf3b875ca172"
        strategy="lazyOnload"
      />
    </>
  );
}
