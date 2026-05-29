import { useEffect, useState } from "react";
import { BASE_URL } from "../App";
import { Link } from "react-router-dom";

function Posts() {
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
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "white",
          fontSize: "clamp(32px, 5vw, 55px)",
          marginBottom: "40px",
          fontWeight: "bold",
        }}
      >
        Posts
      </h1>

      {isLoading && (
        <h2
          style={{
            color: "white",
            textAlign: "center",
            fontSize: "28px",
          }}
        >
          Loading...
        </h2>
      )}

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
          <Link
            to={`/posts/${post.id}`}
            key={post.id}
            style={{
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "24px",
              padding: "25px",
              color: "white",
              textDecoration: "none",
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              transition: "0.3s",
              overflow: "hidden",
            }}
          >
            {/* TOP */}
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
                  fontSize: "24px",
                  fontWeight: "bold",
                  flexShrink: 0,
                }}
              >
                {post.id}
              </div>

              <div>
                <h2
                  style={{
                    margin: 0,
                    fontSize: "22px",
                    textTransform: "capitalize",
                    lineHeight: "1.4",
                  }}
                >
                  {post.title}
                </h2>

                <p
                  style={{
                    marginTop: "6px",
                    color: "#cbd5e1",
                    fontSize: "14px",
                  }}
                >
                  User ID: {post.userId}
                </p>
              </div>
            </div>

            {/* BODY */}
            <div
              style={{
                background: "rgba(255,255,255,0.08)",
                padding: "16px",
                borderRadius: "16px",
                marginBottom: "20px",
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: "#e2e8f0",
                  lineHeight: "1.7",
                  fontSize: "15px",
                }}
              >
                {post.body}
              </p>
            </div>

            {/* BUTTON */}
            <button
              style={{
                width: "100%",
                padding: "14px",
                border: "none",
                borderRadius: "14px",
                background:
                  "linear-gradient(135deg,#38bdf8,#6366f1)",
                color: "white",
                fontWeight: "bold",
                fontSize: "15px",
                cursor: "pointer",
              }}
            >
              Read More
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Posts;
