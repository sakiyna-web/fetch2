import { useEffect, useState } from "react";
import { BASE_URL } from "../App";

function Albums() {
  const [albums, setAlbums] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchAlbums() {
      setLoading(true);

      const response = await fetch(`${BASE_URL}/albums`);
      const data = await response.json();

      setAlbums(data);
      setLoading(false);
    }

    fetchAlbums();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0f172a, #1e293b, #334155)",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "white",
          fontSize: "clamp(32px, 5vw, 55px)",
          marginBottom: "40px",
        }}
      >
        Albums
      </h1>

      {isLoading ? (
        <h2
          style={{
            color: "white",
            textAlign: "center",
          }}
        >
          Loading...
        </h2>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "25px",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          {albums.map((album) => (
            <div
              key={album.id}
              style={{
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "24px",
                padding: "25px",
                color: "white",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    width: "65px",
                    height: "65px",
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg,#38bdf8,#6366f1)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "22px",
                    fontWeight: "bold",
                  }}
                >
                  {album.id}
                </div>

                <div>
                  <h3
                    style={{
                      margin: 0,
                      fontSize: "20px",
                    }}
                  >
                    Album #{album.id}
                  </h3>

                  <p
                    style={{
                      marginTop: "5px",
                      color: "#cbd5e1",
                    }}
                  >
                    User ID: {album.userId}
                  </p>
                </div>
              </div>

              <div
                style={{
                  background: "rgba(255,255,255,0.08)",
                  padding: "16px",
                  borderRadius: "16px",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    color: "#e2e8f0",
                    lineHeight: "1.7",
                    textTransform: "capitalize",
                  }}
                >
                  {album.title}
                </p>
              </div>

              <button
                style={{
                  width: "100%",
                  marginTop: "20px",
                  padding: "14px",
                  border: "none",
                  borderRadius: "14px",
                  background:
                    "linear-gradient(135deg,#38bdf8,#6366f1)",
                  color: "white",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Open Album
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Albums;