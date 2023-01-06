import { useEffect, useState } from "react";
import { Container as GridContainer, Row, Col } from "react-grid-system";
import { useSearchParams } from "react-router-dom";

import api from "../../services/api";
import { Container, Box } from "./styles";

const Movie: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [idParam, setIdParam] = useState(String);
  const [movieInfo, setMovieInfo] = useState();
  const [trailerLink, setTrailerLink] = useState();

  useEffect(() => {
    const handleGetMovie = async () => {
      let idParamVar = searchParams.get("id");
      String(idParamVar).length > 0
        ? setIdParam(String(idParamVar))
        : setIdParam("not__able");
      console.log(idParam);

      const movieInfoRes = await api.get(
        `/title/${import.meta.env.VITE_API_KEY}/${idParam}`
      );
      setMovieInfo(movieInfoRes.data);

      const trailerInfoRes = await api.get(
        `/trailer/${import.meta.env.VITE_API_KEY}/${idParam}`
      );
      setTrailerLink(trailerInfoRes.data.link);

      if (!movieInfo && !trailerLink) {
        return setIdParam("not__able");
      }
    };

    handleGetMovie();
  }, []);

  return (
    <Container>
      <GridContainer>
        <Row>
          <Col>
            {idParam === "not__able" ? (
              <Box>
                <h1>You must have a valid id</h1>
              </Box>
            ) : (
              <></>
            )}
          </Col>
        </Row>
      </GridContainer>
    </Container>
  );
};

export default Movie;
