"use client";

import Script from "next/script";
import React from "react";

export default function DouppleWidget() {
  return (
    <>
      <Script
        src="http://localhost:3000/widget.js"
        data-agent-id="5e17262b-ec17-41da-9dbf-e1d4b7578558"
        strategy="lazyOnload"
      />
    </>
  );
}


