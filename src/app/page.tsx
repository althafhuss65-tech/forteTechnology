export default function ComingSoon() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#1A1A2E",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: "560px" }}>
        {/* Logo mark */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "64px",
            height: "64px",
            background: "#1565C0",
            borderRadius: "12px",
            marginBottom: "2rem",
          }}
        >
          <span style={{ color: "#fff", fontWeight: 800, fontSize: "1.5rem", letterSpacing: "-0.02em" }}>
            F
          </span>
        </div>

        <h1
          style={{
            color: "#F8F9FA",
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            margin: "0 0 0.5rem",
          }}
        >
          Forte Technologies
        </h1>

        <p
          style={{
            color: "#6B7280",
            fontSize: "0.9rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            margin: "0 0 2.5rem",
          }}
        >
          Protective &amp; Industrial Coatings
        </p>

        <div
          style={{
            width: "40px",
            height: "2px",
            background: "#1565C0",
            margin: "0 auto 2.5rem",
          }}
        />

        <p
          style={{
            color: "#9CA3AF",
            fontSize: "1.05rem",
            lineHeight: 1.7,
            margin: "0 0 2.5rem",
          }}
        >
          Our new website is on its way. In the meantime, reach us directly for your coating requirements.
        </p>

        <a
          href="mailto:info@fortetechnologies.in"
          style={{
            display: "inline-block",
            background: "#1565C0",
            color: "#fff",
            padding: "0.75rem 1.75rem",
            borderRadius: "8px",
            textDecoration: "none",
            fontSize: "0.95rem",
            fontWeight: 500,
            letterSpacing: "0.01em",
          }}
        >
          info@fortetechnologies.in
        </a>
      </div>

      <p
        style={{
          position: "absolute",
          bottom: "1.5rem",
          color: "#374151",
          fontSize: "0.8rem",
        }}
      >
        Bangalore, India
      </p>
    </div>
  );
}
