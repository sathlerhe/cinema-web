import Footer from "../Footer";
import Header from "../Header";
import { ReactNode } from "react";

import { Container, Children } from "./styles";

interface ILayout {
  children: ReactNode;
}
const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <Container>
      <Header />
      <Children>{children}</Children>
      <Footer />
    </Container>
  );
};

export default Layout;
