import Home from "../pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "../container/Layout";

const AppRoutes = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRoutes;
