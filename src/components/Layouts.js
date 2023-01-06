import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/one">One</Link>
          </li>
          <li>
            <Link to="/two">Two</Link>
          </li>
          <li>
            <Link to="/three">Three</Link>
          </li>
          <li>
            <Link to="/four">Four</Link>
          </li>
          <li>
            <Link to="/five">Five</Link>
          </li>
          <li>
            <Link to="/six">Six</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;