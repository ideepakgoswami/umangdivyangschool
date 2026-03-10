import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 64,
          background:
            "linear-gradient(135deg, rgba(108,99,255,0.18), rgba(249,168,38,0.18), rgba(255,255,255,0))",
          backgroundColor: "#F9FAFB",
          color: "#1F2937",
          gap: 18,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              backgroundColor: "#6C63FF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 34,
              fontWeight: 800,
            }}
          >
            U
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 44, fontWeight: 800, lineHeight: 1.05 }}>
              {siteConfig.name}
            </div>
            <div style={{ fontSize: 22, opacity: 0.75 }}>
              Empowering special children to live with dignity
            </div>
          </div>
        </div>

        <div style={{ fontSize: 24, maxWidth: 900, opacity: 0.9 }}>
          Special education • Therapy support • Life skills • Community inclusion
        </div>

        <div
          style={{
            marginTop: 22,
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
          }}
        >
          {["Donate", "Volunteer", "Contact"].map((t) => (
            <div
              key={t}
              style={{
                padding: "10px 14px",
                borderRadius: 999,
                backgroundColor: "rgba(108,99,255,0.12)",
                border: "1px solid rgba(108,99,255,0.25)",
                fontSize: 18,
                fontWeight: 700,
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}

