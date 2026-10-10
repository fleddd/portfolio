import { ImageResponse } from "next/og";

export const alt = "Oleh Fedkiv - Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function GET(request: Request) {
  const logoUrl = new URL("/logo.webp", request.url).toString();

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
          background: "radial-gradient(ellipse at 50% 0%, #3b3b3b 0%, #1f1f1f 40%, #0d0d0d 80%)",
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
              width: 132,
              height: 156,
              marginBottom: 20,
              backgroundImage: `url(${logoUrl})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              filter: "grayscale(1) brightness(1.7)",
            }}
          />
          <div
            style={{
              fontSize: 72,
              fontWeight: 400,
              letterSpacing: -2,
              textTransform: "uppercase",
              background: "linear-gradient(100deg, #9a9a9a 0%, #ededed 40%, #ffffff 52%, #a9a9a9 75%, #d6d6d6 100%)",
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
              color: "#ffffff",
            }}
          >
            Full-Stack Developer
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#a9a9a9",
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
