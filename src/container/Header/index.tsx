import { Col, Container as GridContainer, Row } from "react-grid-system";
import { Link } from "react-router-dom";

import { Container, Flex, Links, LinkEl } from "./styles";

const Header: React.FC = () => {
  const links = [
    {
      name: "Movies",
      link: "/movies",
    },
    {
      name: "TvShows",
      link: "/shows",
    },
    {
      name: "Rank",
      link: "/rank",
    },
  ];

  return (
    <Container>
      <GridContainer>
        <Row>
          <Col>
            <Flex>
              <Link to="/">
                <h1>CinemaWeb</h1>
              </Link>

              <Links>
                {links?.map((link) => (
                  <LinkEl key={link?.name} to={link?.link}>
                    {link?.name}
                  </LinkEl>
                ))}
              </Links>
            </Flex>
          </Col>
        </Row>
      </GridContainer>
    </Container>
  );
};

export default Header;
