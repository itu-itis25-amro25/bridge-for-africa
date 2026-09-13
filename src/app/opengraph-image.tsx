import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#09090b",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg
            width="56"
            height="56"
            viewBox="0 0 32 32"
            fill="none"
            stroke="white"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" y1="23" x2="28" y2="23" />
            <line x1="10" y1="23" x2="10" y2="8" />
            <line x1="22" y1="23" x2="22" y2="8" />
            <path d="M10,8 Q16,17 22,8" />
          </svg>
          <div style={{ fontSize: 44, fontWeight: 600 }}>Bridge for Africa</div>
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 28,
            color: "#a1a1aa",
            maxWidth: 820,
            textAlign: "center",
          }}
        >
          A monthly bridge to a kid’s education.
        </div>
      </div>
    ),
    { ...size }
  );
}
