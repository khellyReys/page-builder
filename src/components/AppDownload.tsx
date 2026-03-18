const IOS_URL =
  "https://apps.apple.com/ph/app/whatahotel/id6759237169";
const ANDROID_URL =
  "https://play.google.com/store/apps/details?id=com.whatahotel.app";

export function AppDownload() {
  return (
    <div
      style={{
        margin: "0 40px 40px",
        background: "linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 100%)",
        borderRadius: "12px",
        padding: "32px 36px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "24px",
        flexWrap: "wrap",
      }}
    >
      {/* Left — text */}
      <div style={{ flex: 1, minWidth: "200px" }}>
        <div
          style={{
            fontSize: "11px",
            fontWeight: 700,
            color: "#B0373E",
            letterSpacing: "2px",
            textTransform: "uppercase",
            marginBottom: "6px",
          }}
        >
          WhataHotel! Mobile App
        </div>
        <div
          style={{
            fontSize: "20px",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.2,
          }}
        >
          Download our app for<br />
          more promos
        </div>
      </div>

      {/* Right — buttons */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          flexShrink: 0,
        }}
      >
        {/* App Store */}
        <a
          href={IOS_URL}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: "#ffffff",
            color: "#1A1A1A",
            borderRadius: "8px",
            padding: "10px 20px",
            textDecoration: "none",
            minWidth: "160px",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.85")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")
          }
        >
          {/* Apple icon */}
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="#1A1A1A"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          <div>
            <div
              style={{
                fontSize: "9px",
                fontWeight: 500,
                color: "#4A4A4A",
                letterSpacing: ".3px",
                lineHeight: 1,
              }}
            >
              Download on the
            </div>
            <div
              style={{
                fontSize: "15px",
                fontWeight: 700,
                color: "#1A1A1A",
                lineHeight: 1.3,
              }}
            >
              App Store
            </div>
          </div>
        </a>

        {/* Google Play */}
        <a
          href={ANDROID_URL}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: "#ffffff",
            color: "#1A1A1A",
            borderRadius: "8px",
            padding: "10px 20px",
            textDecoration: "none",
            minWidth: "160px",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.85")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")
          }
        >
          {/* Play icon */}
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 20.5v-17c0-.83 1-.99 1.43-.43l14 8.5c.38.23.38.79 0 1.02l-14 8.5C3.99 21.49 3 21.33 3 20.5z" fill="#1A1A1A" />
          </svg>
          <div>
            <div
              style={{
                fontSize: "9px",
                fontWeight: 500,
                color: "#4A4A4A",
                letterSpacing: ".3px",
                lineHeight: 1,
              }}
            >
              Get it on
            </div>
            <div
              style={{
                fontSize: "15px",
                fontWeight: 700,
                color: "#1A1A1A",
                lineHeight: 1.3,
              }}
            >
              Google Play
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}