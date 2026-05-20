import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../App";




function ShowComments (){
    const {id} = useParams();
    console.log(id)
    const [isLoading, setLoading] = useState(false);
    const [comments, setComments] = useState(null);

    async function getCommentsBasedOnID() {
        setLoading(true);
        const response = await fetch(`${BASE_URL}/posts/${id}/comments`);
        const data = await response.json();
        setComments(data);
        setLoading(false);
    }

    useEffect(() => {
        if (id) {
            // send request
            getCommentsBasedOnID(); // calling function 
        }
    }, [id]);
    
    return (
        <div
          style={{
            minHeight: "100vh",
            background:
              "linear-gradient(135deg,#1E3A8A,#7C3AED,#EC4899)",
            padding: "40px",
            fontFamily: "Arial",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              color: "white",
              marginBottom: "40px",
              fontSize: "42px",
            }}
          >
            💬 Comments Section
          </h1>
    
          <div
            style={{
              maxWidth: "900px",
              margin: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "25px",
            }}
          >
            {comments?.map((comment) => (
              <div
                key={comment.id}
                style={{
                  background: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(15px)",
                  padding: "25px",
                  borderRadius: "20px",
                  boxShadow:
                    "0 8px 25px rgba(0,0,0,0.25)",
                  border:
                    "1px solid rgba(255,255,255,0.2)",
                  color: "white",
                  transition: "0.3s",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "15px",
                  }}
                >
                  <h2
                    style={{
                      margin: 0,
                      fontSize: "20px",
                    }}
                  >
                    {comment.name}
                  </h2>
    
                  <span
                    style={{
                      background: "#2563EB",
                      padding: "6px 12px",
                      borderRadius: "20px",
                      fontSize: "13px",
                      fontWeight: "bold",
                    }}
                  >
                    #{comment.id}
                  </span>
                </div>
    
                <p
                  style={{
                    color: "#E5E7EB",
                    marginBottom: "18px",
                    lineHeight: "1.6",
                  }}
                >
                  {comment.body}
                </p>
    
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      background: "#7C3AED",
                      padding: "8px 14px",
                      borderRadius: "12px",
                      fontSize: "14px",
                    }}
                  >
                    📧 {comment.email}
                  </span>
    
                  <span
                    style={{
                      color: "#D1D5DB",
                    }}
                  >
                    Post #{comment.postId}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}
export default ShowComments;