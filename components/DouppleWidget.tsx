"use client";

import Script from "next/script";
import React from "react";

export default function DouppleWidget() {
  return (
    <>
      <Script
        src="http://localhost:3000/widget.js"
        data-agent-id="995200f5-d024-48a5-bb5c-1a31aff7f506"
        strategy="lazyOnload"
      />
    </>
  );
}


