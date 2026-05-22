import { Link } from "react-router-dom";

function GlobalLayout({ children }) {
    const styles = {
        container: {
            minHeight: "100vh",
            background: "linear-gradient(135deg, #eef2ff, #dbeafe)",
            padding: "20px",
            fontFamily: "Arial, sans-serif",
            boxSizing: "border-box",
        },

        navbar: {
            maxWidth: "1000px",
            margin: "0 auto",
            background: "#fff",
            padding: "20px",
            borderRadius: "20px",
            boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "15px",
            alignItems: "center",
        },

        link: {
            textDecoration: "none",
            color: "#fff",
            background: "#2563eb",
            padding: "12px 22px",
            borderRadius: "12px",
            fontWeight: "bold",
            fontSize: "16px",
            transition: "0.3s",
            textAlign: "center",
            minWidth: "150px",
            boxShadow: "0 4px 10px rgba(37,99,235,0.3)",
        },

        main: {
            maxWidth: "1000px",
            margin: "25px auto",
            background: "#fff",
            padding: "25px",
            borderRadius: "20px",
            boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
            minHeight: "400px",
            overflow: "hidden",
        },

        title: {
            textAlign: "center",
            color: "#1e293b",
            marginBottom: "20px",
            fontSize: "28px",
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>
                React Blog Dashboard
            </h1>

            <nav style={styles.navbar}>
                <Link
                    to="/"
                    style={styles.link}
                >
                    🏠 Home
                </Link>

                <Link
                    to="/posts"
                    style={styles.link}
                >
                    📝 Posts
                </Link>

                <Link
                    to="/create/post"
                    style={styles.link}
                >
                    ➕ Create Post
                </Link>
            </nav>

            <main style={styles.main}>
                {children}
            </main>
        </div>
    );
}

export default GlobalLayout;