import { Link } from "react-router-dom";

function GlobalLayout({ children }) {
    return (
        <>
            <div>
                <Link to="/">Home</Link>
                <br />
                <Link to="/posts">Posts</Link>
                <br />
                <Link to="/create/post">Create a new post</Link>
            </div>
            <main>{children}</main>
        </>
    )

}

export default GlobalLayout;