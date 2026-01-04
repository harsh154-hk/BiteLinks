"use client";

import Script from "next/script";
import React from "react";

export default function DouppleWidget() {
  return (
    <>
      <Script
        src="https://postdisapproved-gerda-suborganic.ngrok-free.dev/widget.js"
        data-agent-id="995200f5-d024-48a5-bb5c-1a31aff7f506"
        strategy="lazyOnload"
      />
    </>
  );
}


