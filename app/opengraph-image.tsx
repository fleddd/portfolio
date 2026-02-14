import { ImageResponse } from "next/og";

export const alt = "Oleh Fedkiv - Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a0f 0%, #12121a 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              background: "linear-gradient(90deg, #fff 0%, #94a3b8 100%)",
              backgroundClip: "text",
              color: "transparent",
              marginBottom: 16,
            }}
          >
            Oleh Fedkiv
          </div>
          <div
            style={{
              fontSize: 36,
              fontWeight: 600,
              background: "linear-gradient(90deg, #06b6d4 0%, #3b82f6 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Full-Stack Developer
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#64748b",
              marginTop: 24,
            }}
          >
            React · Next.js · TypeScript · Node.js
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
