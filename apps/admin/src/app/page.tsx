import ClubForm from "./clubform/club-form"

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        color: "white",
        padding: "0",
        margin: "0",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      {/* Welcome section */}
      <div
        style={{
          padding: "40px 20px 20px",
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            marginBottom: "12px",
            color: "#0000ff",
          }}
        >
          Hoş Geldiniz
        </h1>

        <p
          style={{
            fontSize: "16px",
            color: "#0000ff",
            marginBottom: "40px",
          }}
        >
          Admin Panelinde Değişiklik Yapabilirsiniz
        </p>

        {/* Form container with proper centering */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px 0",
          }}
        >
          <ClubForm />
        </div>
      </div>
    </div>
  )
}

