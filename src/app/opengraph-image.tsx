import { ImageResponse } from "next/og";
import { moddo, profile } from "@/data/content";

export const alt = `${profile.name}, ${profile.role}`;
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
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #1f1f38 0%, #2c2c6c 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 40, color: "#4db5ff", display: "flex" }}>{profile.role}</div>
        <div style={{ fontSize: 96, fontWeight: 700, marginTop: 8, display: "flex" }}>
          {profile.name}
        </div>
        <div style={{ fontSize: 34, marginTop: 24, color: "rgba(255,255,255,0.85)", display: "flex" }}>
          LLM agents with tool use, evals and the infra around them
        </div>
        <div style={{ display: "flex", gap: 24, marginTop: 56, fontSize: 28 }}>
          {moddo.stats.slice(0, 2).map((s) => (
            <div
              key={s.label}
              style={{
                display: "flex",
                padding: "16px 24px",
                borderRadius: 16,
                background: "rgba(77,181,255,0.15)",
                border: "2px solid rgba(77,181,255,0.5)",
              }}
            >
              <span style={{ color: "#4db5ff", fontWeight: 700, marginRight: 12 }}>{s.value}</span>
              {s.label}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
