import { useEffect, useState } from "react";

const gradients = [
  ["#7C3AED", "#EC4899"],
  ["#2563EB", "#06B6D4"],
  ["#F97316", "#EF4444"],
  ["#22C55E", "#14B8A6"],
  ["#8B5CF6", "#3B82F6"],
];

function Home() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=12")
      .then((res) => res.json())
      .then((data) => {
        setPhotos(
          data.map((item) => ({
            ...item,
            colors: gradients[item.id % gradients.length],
            letter: item.title[0].toUpperCase(),
          }))
        );
      });
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        overflow: "hidden",
        position: "relative",

        background: `
radial-gradient(at 20% 20%,#8B5CF6 0%,transparent 45%),
radial-gradient(at 80% 20%,#2563EB 0%,transparent 45%),
radial-gradient(at 40% 80%,#EC4899 0%,transparent 50%),
#020617
`,
        fontFamily: "Inter,sans-serif",
      }}
    >
      {/* Floating blob 1 */}
      <div
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "#7C3AED",
          filter: "blur(120px)",
          top: "-100px",
          left: "-50px",
          opacity: ".35",
        }}
      />

      {/* Floating blob 2 */}
      <div
        style={{
          position: "absolute",
          width: "280px",
          height: "280px",
          borderRadius: "50%",
          background: "#2563EB",
          filter: "blur(120px)",
          right: "-70px",
          bottom: "-70px",
          opacity: ".35",
        }}
      />

      <h1
        style={{
          textAlign: "center",
          color: "white",
          fontSize: "54px",
          marginBottom: "14px",
          position: "relative",
          zIndex: 5,
        }}
      >
        Mesh Gallery
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#94A3B8",
          marginBottom: "50px",
          position: "relative",
          zIndex: 5,
        }}
      >
        React • Mesh Gradient • 3D Cards
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(270px,1fr))",
          gap: "28px",
          position: "relative",
          zIndex: 5,
        }}
      >
        {photos.map((photo) => (
          <div
            key={photo.id}
            style={{
              background:
                "rgba(255,255,255,.05)",

              backdropFilter: "blur(12px)",

              border:
                "1px solid rgba(255,255,255,.1)",

              borderRadius: "28px",

              padding: "22px",

              transition: ".35s",

              transform:
                "perspective(1000px)",

              boxShadow:
                "0 20px 50px rgba(0,0,0,.35)",

              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                `
perspective(1000px)
rotateX(8deg)
rotateY(-8deg)
translateY(-12px)
scale(1.03)
`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "perspective(1000px)";
            }}
          >
            <div
              style={{
                height: "180px",

                background: `
linear-gradient(
135deg,
${photo.colors[0]},
${photo.colors[1]}
)
`,

                borderRadius: "22px",

                display: "flex",

                alignItems: "center",

                justifyContent: "center",

                color: "white",

                fontSize: "72px",

                fontWeight: "800",

                marginBottom: "18px",

                boxShadow:
                  `0 0 35px ${photo.colors[0]}`,
              }}
            >
              {photo.letter}
            </div>

            <h3
              style={{
                color: "white",
                lineHeight: "1.5",
                marginBottom: "10px",
              }}
            >
              {photo.title}
            </h3>

            <span
              style={{
                color: "#94A3B8",
                fontSize: "14px",
              }}
            >
              Album #{photo.albumId}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;