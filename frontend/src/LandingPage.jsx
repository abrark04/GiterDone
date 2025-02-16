import React from "react";

function LandingPage() {
  const gradientStyle = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    backgroundImage: `
      radial-gradient(at 83.8% 31.9%, hsla(35, 100%, 73%, 1) 0px, transparent 50%),
      radial-gradient(at 14.3% 20.5%, hsla(219, 98%, 83%, 1) 0px, transparent 50%),
      radial-gradient(at 8% 7%, hsla(219, 95%, 91%, 1) 0px, transparent 50%)
    `,
  };

  const titleContainerStyle = {
    textAlign: "center",
    color: "#333",
  };

  const mainTitleContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  };

  const logoStyle = {
    width: "50px",
    height: "50px",
  };

  const mainTitleStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
  };

  const sloganStyle = {
    fontSize: "1.2rem",
    marginTop: "10px",
  };

  return (
    <div style={gradientStyle}>
      <div style={titleContainerStyle}>
        <div style={mainTitleContainerStyle}>
          <img src="shield.svg" alt="Logo" style={logoStyle} />
          <p style={mainTitleStyle}>Aegis</p>
        </div>
        <p style={sloganStyle}>Our slogan here.</p>
      </div>
    </div>
  );
}

export default LandingPage;
