export default function Home() {
  const colors = {
    legoBlue: "#0055ad",
    legoYellow: "#ffcf00",
    bgGray: "#f0f0f0",
    dark: "#222",
  };

  return (
    <div style={styles.container}>
      {/* Injetando a animação CSS diretamente */}
      <style>{`
        @keyframes progressAnimation {
          0% { width: 5%; }
          50% { width: 80%; }
          100% { width: 65%; }
        }
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }
      `}</style>

      <div
        style={{
          ...styles.card,
          boxShadow: `12px 12px 0px ${colors.legoBlue}`,
        }}
      >
        {/* Tente renomear o arquivo para exatamente lego.gif e coloque em /public */}
        <img src="/lego.gif" alt="Lego Programmer" style={styles.gif} />

        <h1 style={styles.title}>Construindo...</h1>

        <p style={styles.subtitle}>Build Mode: ON</p>

        <div style={styles.barContainer}>
          <div
            style={{
              ...styles.barFill,
              backgroundColor: colors.legoYellow,
              animation: "progressAnimation 3s ease-in-out infinite",
            }}
          ></div>
        </div>

        <p style={{ ...styles.statusText, animation: "pulse 1.5s infinite" }}>
          {`> assembling_components...`}
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#e0e0e0",
    margin: 0,
    fontFamily: "system-ui, -apple-system, sans-serif",
  },
  card: {
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "16px",
    border: "4px solid #222",
    textAlign: "center",
    maxWidth: "380px",
    width: "90%",
  },
  gif: {
    width: "100%",
    maxWidth: "220px",
    borderRadius: "8px",
    border: "3px solid #222",
    marginBottom: "20px",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "900",
    textTransform: "uppercase",
    margin: "10px 0",
    color: "#222",
  },
  subtitle: {
    color: "#555",
    fontWeight: "bold",
    fontSize: "0.9rem",
  },
  barContainer: {
    width: "100%",
    height: "20px",
    backgroundColor: "#ddd",
    border: "3px solid #222",
    borderRadius: "10px",
    marginTop: "25px",
    overflow: "hidden",
  },
  barFill: {
    height: "100%",
    borderRight: "3px solid #222",
  },
  statusText: {
    fontSize: "0.75rem",
    color: "#888",
    marginTop: "15px",
    fontFamily: "monospace",
  },
};
