import { Col, Container as GridContainer, Row } from "react-grid-system";

import { Container } from "./styles";

const Footer: React.FC = () => {
  return (
    <Container>
      <GridContainer>
        <Row>
          <Col>
            <p>
              Copy Rights @ 2022 -{" "}
              <a href="https://www.linkedin.com/in/henrique-sathler/">
                Henrique Sathler
              </a>
            </p>
          </Col>
        </Row>
      </GridContainer>
    </Container>
  );
};

export default Footer;
