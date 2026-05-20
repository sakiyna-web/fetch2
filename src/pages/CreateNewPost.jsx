import { useState } from "react";

function CreateNewPost() {
  const [newPost, setNewPost] = useState({
    title: "",
    body: "",
    userId: 1,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  function handleChange(e) {
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value,
    });
  }

  async function createPost(e) {
    e.preventDefault();

    if (!newPost.title || !newPost.body) {
      setMessage("⚠ Заполните все поля");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPost),
        }
      );

      const data = await response.json();

      console.log(data);

      setMessage("✅ Пост успешно создан!");

      setNewPost({
        title: "",
        body: "",
        userId: 1,
      });
    } catch (error) {
      setMessage("❌ Ошибка при создании поста");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg,#0F172A,#1E3A8A,#7C3AED)",
        fontFamily: "Arial",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "420px",
          background: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(20px)",
          padding: "35px",
          borderRadius: "25px",
          boxShadow: "0 10px 35px rgba(0,0,0,0.3)",
          border: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "white",
            marginBottom: "25px",
            fontSize: "32px",
          }}
        >
          Create Post ✨
        </h1>

        <form
          onSubmit={createPost}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <input
            name="title"
            value={newPost.title}
            onChange={handleChange}
            placeholder="Post title..."
            style={{
              padding: "16px",
              borderRadius: "14px",
              border: "none",
              outline: "none",
              background: "rgba(255,255,255,0.15)",
              color: "white",
              fontSize: "16px",
            }}
          />

          <textarea
            name="body"
            value={newPost.body}
            onChange={handleChange}
            rows="6"
            placeholder="Write your content..."
            style={{
              padding: "16px",
              borderRadius: "14px",
              border: "none",
              outline: "none",
              resize: "none",
              background: "rgba(255,255,255,0.15)",
              color: "white",
              fontSize: "16px",
            }}
          />

          <button
            type="submit"
            disabled={loading}
            style={{
              padding: "15px",
              border: "none",
              borderRadius: "14px",
              background:
                "linear-gradient(135deg,#2563EB,#9333EA)",
              color: "white",
              fontWeight: "bold",
              fontSize: "17px",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            {loading
              ? "Creating..."
              : "🚀 Create Post"}
          </button>
        </form>

        {message && (
          <div
            style={{
              marginTop: "20px",
              textAlign: "center",
              color: "white",
              fontWeight: "bold",
              background: "rgba(255,255,255,0.15)",
              padding: "12px",
              borderRadius: "12px",
            }}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

export default CreateNewPost;