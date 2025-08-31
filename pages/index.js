function Home() {
  return (
    <div
      style={{
        margin: "0",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        backgroundColor: "#f0f0f0",
      }}
    >
      <div
        style={{
          padding: "20px",
          backgroundColor: "#fff",
          border: "1px solid #ddd",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
        }}
      >
        <h1 style={{ fontSize: "2rem", color: "#333" }}>
          🚧 Construindo uma oportunidade...
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#666" }}>
          Se prepare para algo novo! Volte em breve!
        </p>
      </div>
    </div>
  );
}

export default Home;
