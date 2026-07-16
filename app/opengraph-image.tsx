import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Shinano Labs — creative tools for human imagination";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logoBytes = await readFile(
    join(process.cwd(), "public/Assets/logo/shinano labs logo.png")
  );
  const logoSrc = `data:image/png;base64,${logoBytes.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background:
            "linear-gradient(145deg, #2f0c16 0%, #461220 42%, #3a1a28 72%, #1c3a45 100%)",
          color: "#eff2ef",
          fontFamily: "sans-serif",
        }}>
        {/* Soft accent glows */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            left: "-80px",
            width: "520px",
            height: "520px",
            borderRadius: "9999px",
            background:
              "radial-gradient(circle, rgba(209,102,102,0.35) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-160px",
            right: "-40px",
            width: "560px",
            height: "560px",
            borderRadius: "9999px",
            background:
              "radial-gradient(circle, rgba(0,126,167,0.28) 0%, transparent 70%)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoSrc}
            width={72}
            height={72}
            alt=""
            style={{ objectFit: "contain" }}
          />
          <div
            style={{
              fontSize: 36,
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "#eff2ef",
            }}>
            Shinano Labs
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: "900px",
            }}>
            Creative tools for human imagination.
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 400,
              color: "rgba(239,242,239,0.78)",
              maxWidth: "760px",
              lineHeight: 1.35,
            }}>
            A small studio in Nagano, Japan — building apps that amplify your
            creative voice.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: 22,
            color: "rgba(239,242,239,0.65)",
          }}>
          <div
            style={{
              width: "40px",
              height: "2px",
              background: "#d16666",
            }}
          />
          Meanwhile · Myriad Worlds · Bard
        </div>
      </div>
    ),
    { ...size }
  );
}
