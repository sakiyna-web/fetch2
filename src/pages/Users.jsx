import { useEffect, useState } from "react";
import { BASE_URL } from "../App";

function Users() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);

      const response = await fetch(`${BASE_URL}/posts`);
      const data = await response.json();

      setPosts(data);
      setLoading(false);
    }

    fetchPosts();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0f172a, #1e293b, #334155)",
        padding: "40px 20px",
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "white",
          marginBottom: "40px",
          fontSize: "clamp(30px,5vw,50px)",
        }}
      >
        Posts
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
              "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "25px",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          {posts.map((post) => (
            <div
              key={post.id}
              style={{
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "24px",
                padding: "25px",
                color: "white",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                transition: "0.3s",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg,#38bdf8,#6366f1)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                }}
              >
                {post.id}
              </div>

              <h2
                style={{
                  fontSize: "24px",
                  marginBottom: "15px",
                  lineHeight: "1.4",
                }}
              >
                {post.title}
              </h2>

              <p
                style={{
                  color: "#cbd5e1",
                  lineHeight: "1.7",
                  fontSize: "15px",
                }}
              >
                {post.body}
              </p>

              <button
                style={{
                  marginTop: "20px",
                  padding: "12px 18px",
                  border: "none",
                  borderRadius: "12px",
                  background:
                    "linear-gradient(135deg,#38bdf8,#6366f1)",
                  color: "white",
                  fontWeight: "bold",
                  cursor: "pointer",
                  width: "100%",
                  fontSize: "15px",
                }}
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Users;