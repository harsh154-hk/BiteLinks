"use client";

import Script from "next/script";
import React from "react";

export default function DouppleWidget() {
  return (
    <>
      <Script
        src="https://doupple.vercel.app/widget.js"
        data-agent-id="0f556b91-702c-47fc-8fff-8746a03eedc7"
        strategy="lazyOnload"
      />
    </>
  );
}
