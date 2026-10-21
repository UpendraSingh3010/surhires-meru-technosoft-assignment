import { ImageResponse } from "next/og";

// Generated at build time and used as the default share image for every page.
export const alt = "Surhires – hire faster, find work that pays fairly";
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
          justifyContent: "space-between",
          padding: 80,
          background: "#0b1f3a",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 20,
              background: "#0f766e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 48,
              fontWeight: 800,
            }}
          >
            S
          </div>
          <div style={{ fontSize: 48, fontWeight: 800 }}>Surhires</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.1 }}>
            Hire the right people. Find the right work.
          </div>
          <div style={{ fontSize: 32, color: "#c7d2e0" }}>
            Skill-based matching and real salaries for India&apos;s growing teams.
          </div>
        </div>
        <div style={{ display: "flex", height: 12, width: 240, borderRadius: 6, background: "#14b8a6" }} />
      </div>
    ),
    size,
  );
}
