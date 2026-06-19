
import { Link } from "react-router";
const NotFoundPage = () => {
    return (
      <div className="text-center space-y-3 mt-5">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>

      <Link to="/" style={{ color: "blue", textDecoration: "underline" }}>
        <button className="btn bg-primary text-white">Go Back Home</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;