import Home from "../pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "../container/Layout";
import Movie from "../pages/Movie";

const AppRoutes = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movie />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRoutes;
