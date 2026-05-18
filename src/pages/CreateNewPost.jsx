function CreateNewPost() {
    const newPost = {
      title: "",
      body: "",
      userId: 1,
    };
  
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background:
            "linear-gradient(135deg, rgb(59, 130, 246), rgb(147, 51, 234))",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            width: "400px",
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "20px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "25px",
              color: "#333",
            }}
          >
            Create New Post
          </h2>
  
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }}
          >
            <input
              type="text"
              placeholder="Enter post title"
              value={newPost.title}
              style={{
                padding: "14px",
                borderRadius: "10px",
                border: "1px solid #ccc",
                fontSize: "16px",
                outline: "none",
              }}
            />
  
            <textarea
              placeholder="Write your post..."
              value={newPost.body}
              rows="6"
              style={{
                padding: "14px",
                borderRadius: "10px",
                border: "1px solid #ccc",
                fontSize: "16px",
                resize: "none",
                outline: "none",
              }}
            ></textarea>
  
            <button
              type="submit"
              style={{
                padding: "14px",
                border: "none",
                borderRadius: "10px",
                background:
                  "linear-gradient(135deg, rgb(59, 130, 246), rgb(147, 51, 234))",
                color: "white",
                fontSize: "17px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Create Post
            </button>
          </form>
        </div>
      </div>
    );
  }
  
  export default CreateNewPost;