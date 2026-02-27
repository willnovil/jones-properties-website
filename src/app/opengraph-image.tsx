import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Jones Properties - Live in Cleveland, TN";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #14532d 0%, #166534 50%, #15803d 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
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
              color: "white",
              letterSpacing: "-2px",
              marginBottom: "8px",
            }}
          >
            JONES Properties
          </div>
          <div
            style={{
              fontSize: 36,
              color: "rgba(255,255,255,0.7)",
              marginBottom: "40px",
            }}
          >
            Live in Cleveland, TN
          </div>
          <div
            style={{
              display: "flex",
              gap: "40px",
              marginBottom: "40px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "rgba(255,255,255,0.1)",
                borderRadius: "12px",
                padding: "20px 40px",
              }}
            >
              <div style={{ fontSize: 42, fontWeight: 700, color: "white" }}>500+</div>
              <div style={{ fontSize: 18, color: "rgba(255,255,255,0.6)" }}>Properties</div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "rgba(255,255,255,0.1)",
                borderRadius: "12px",
                padding: "20px 40px",
              }}
            >
              <div style={{ fontSize: 42, fontWeight: 700, color: "white" }}>20+</div>
              <div style={{ fontSize: 18, color: "rgba(255,255,255,0.6)" }}>Years</div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "rgba(255,255,255,0.1)",
                borderRadius: "12px",
                padding: "20px 40px",
              }}
            >
              <div style={{ fontSize: 42, fontWeight: 700, color: "white" }}>24/7</div>
              <div style={{ fontSize: 18, color: "rgba(255,255,255,0.6)" }}>Support</div>
            </div>
          </div>
          <div
            style={{
              fontSize: 28,
              color: "rgba(255,255,255,0.9)",
              fontWeight: 600,
            }}
          >
            (423) 472-4000
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
