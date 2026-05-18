import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BASE_URL } from "../App";

function PostDetails() {
    const { id } = useParams();
    const [isLoading, setLoading] = useState(false);
    const [post, setSinglePost] = useState(null);

    // created function 
    async function fetchSinglePost() {
        setLoading(true);
        const response = await fetch(`${BASE_URL}/posts/${id}`);
        const data = await response.json();
        setSinglePost(data);
        setLoading(false);
    }

    useEffect(() => {
        if (id) {
            // send request
            fetchSinglePost(); // calling function 
        }
    }, [id]);

    return <>
        <div
            style={{
                minHeight: "100vh",
                background:
                    "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "30px",
                fontFamily: "Arial, sans-serif",
            }}
        >
            {isLoading && <h3 style={{ color: "white" }}>Loading...</h3>}
            {
                !isLoading && <div
                    style={{
                        width: "100%",
                        maxWidth: "850px",
                        background: "rgba(255,255,255,0.08)",
                        backdropFilter: "blur(12px)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        borderRadius: "28px",
                        overflow: "hidden",
                        boxShadow: "0 15px 40px rgba(0,0,0,0.4)",
                    }}
                >
                    {/* Header */}
                    <div
                        style={{
                            background:
                                "linear-gradient(90deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)",
                            padding: "40px",
                            color: "#fff",
                        }}
                    >
                        <p
                            style={{
                                margin: 0,
                                opacity: 0.8,
                                fontSize: "14px",
                                letterSpacing: "1px",
                            }}
                        >
                            POST DETAILS
                        </p>

                        <h1
                            style={{
                                marginTop: "12px",
                                fontSize: "36px",
                                fontWeight: "bold",
                                textTransform: "capitalize",
                                lineHeight: "1.3",
                            }}
                        >
                            {post?.title}
                        </h1>

                        {/* Meta Info */}
                        <div
                            style={{
                                display: "flex",
                                gap: "15px",
                                marginTop: "25px",
                                flexWrap: "wrap",
                            }}
                        >
                            <div
                                style={{
                                    background: "rgba(255,255,255,0.15)",
                                    padding: "12px 18px",
                                    borderRadius: "14px",
                                    fontSize: "15px",
                                }}
                            >
                                👤 User ID: {post?.userId}
                            </div>

                            <div
                                style={{
                                    background: "rgba(255,255,255,0.15)",
                                    padding: "12px 18px",
                                    borderRadius: "14px",
                                    fontSize: "15px",
                                }}
                            >
                                📄 Post ID: {post?.id}
                            </div>
                        </div>
                    </div>

                    {/* Body */}
                    <div style={{ padding: "40px" }}>
                        <h2
                            style={{
                                color: "#fff",
                                marginBottom: "20px",
                                fontSize: "24px",
                            }}
                        >
                            Description
                        </h2>

                        <div
                            style={{
                                background: "rgba(15,23,42,0.8)",
                                border: "1px solid rgba(255,255,255,0.1)",
                                borderRadius: "20px",
                                padding: "28px",
                            }}
                        >
                            <p
                                style={{
                                    color: "#cbd5e1",
                                    lineHeight: "2",
                                    fontSize: "18px",
                                    whiteSpace: "pre-line",
                                    margin: 0,
                                }}
                            >
                                {post?.body}
                            </p>
                        </div>

                        {/* Buttons */}
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginTop: "35px",
                                flexWrap: "wrap",
                                gap: "15px",
                            }}
                        >
                            <button
                                style={{
                                    padding: "14px 28px",
                                    border: "none",
                                    borderRadius: "14px",
                                    background:
                                        "linear-gradient(90deg, #6366f1 0%, #9333ea 100%)",
                                    color: "#fff",
                                    fontSize: "16px",
                                    fontWeight: "bold",
                                    cursor: "pointer",
                                    boxShadow: "0 8px 20px rgba(99,102,241,0.4)",
                                    transition: "0.3s",
                                }}
                            >
                                Edit Post
                            </button>

                            <button
                                style={{
                                    padding: "14px 28px",
                                    borderRadius: "14px",
                                    background: "transparent",
                                    border: "1px solid #f87171",
                                    color: "#f87171",
                                    fontSize: "16px",
                                    fontWeight: "bold",
                                    cursor: "pointer",
                                    transition: "0.3s",
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            }
        </div>
    </>
}

export default PostDetails;