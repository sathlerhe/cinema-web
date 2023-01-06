import { useEffect, useState } from "react";
import { Container as GridContainer, Row, Col } from "react-grid-system";
import { useSearchParams } from "react-router-dom";
import MovieCarousel from "../../components/MovieCarousel";

import api from "../../services/api";
import {
  Container,
  Box,
  BoxNotAble,
  FilmakersBox,
  SimilarsBox,
} from "./styles";

const Movie: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [idParam, setIdParam] = useState<any>();
  // const [movieInfo, setMovieInfo] = useState();
  // const [trailerLink, setTrailerLink] = useState();

  // useEffect(() => {
  //   const handleGetMovie = async () => {
  //     let idParamVar = searchParams.get("id");
  //     String(idParamVar).length > 0
  //       ? setIdParam(String(idParamVar))
  //       : setIdParam("not__able");

  //     const movieInfoRes = await api.get(
  //       `/title/${import.meta.env.VITE_API_KEY}/${idParam}`
  //     );
  //     setMovieInfo(movieInfoRes.data);

  //     const trailerInfoRes = await api.get(
  //       `/trailer/${import.meta.env.VITE_API_KEY}/${idParam}`
  //     );
  //     setTrailerLink(trailerInfoRes.data.link);

  //     if (!movieInfo && !trailerLink) {
  //       return setIdParam("not__able");
  //     }
  //   };

  //   handleGetMovie();
  // }, []);

  const movieInfoMocked = {
    id: "tt0110413",
    title: "Léon: The Professional",
    originalTitle: "Léon",
    fullTitle: "Léon: The Professional (1994)",
    type: "Movie",
    year: "1994",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTgyMWQ0ZWUtN2Q2MS00NmY0LWI3OWMtNjFkMzZlNDZjNTk0XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_Ratio0.6762_AL_.jpg",
    releaseDate: "1994-11-18",
    runtimeMins: "110",
    runtimeStr: "1h 50min",
    plot: "12-year-old Mathilda is reluctantly taken in by Léon, a professional assassin, after her family is murdered. An unusual relationship forms as she becomes his protégée and learns the assassin's trade.",
    plotLocal: "",
    plotLocalIsRtl: false,
    awards: "Top rated movie #35 | Awards, 6 wins & 17 nominations",
    directors: "Luc Besson",
    directorList: [
      {
        id: "nm0000108",
        name: "Luc Besson",
      },
    ],
    writers: "Luc Besson",
    writerList: [
      {
        id: "nm0000108",
        name: "Luc Besson",
      },
    ],
    stars: "Jean Reno, Gary Oldman, Natalie Portman",
    starList: [
      {
        id: "nm0000606",
        name: "Jean Reno",
      },
      {
        id: "nm0000198",
        name: "Gary Oldman",
      },
      {
        id: "nm0000204",
        name: "Natalie Portman",
      },
    ],
    actorList: [
      {
        id: "nm0000606",
        image:
          "https://m.media-amazon.com/images/M/MV5BMTgzNjA1MjY2M15BMl5BanBnXkFtZTYwMjgzOTk0._V1_Ratio1.0000_AL_.jpg",
        name: "Jean Reno",
        asCharacter: "Leon",
      },
      {
        id: "nm0000198",
        image:
          "https://m.media-amazon.com/images/M/MV5BMTc3NTM4MzQ5MV5BMl5BanBnXkFtZTcwOTE4MDczNw@@._V1_Ratio1.0000_AL_.jpg",
        name: "Gary Oldman",
        asCharacter: "Stansfield",
      },
      {
        id: "nm0000204",
        image:
          "https://m.media-amazon.com/images/M/MV5BYzU0ZGRhZWItMGJlNy00YzlkLWIzOWYtNDA2NzlhMDg3YjMwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_Ratio1.0000_AL_.jpg",
        name: "Natalie Portman",
        asCharacter: "Mathilda",
      },
      {
        id: "nm0000732",
        image:
          "https://m.media-amazon.com/images/M/MV5BNTMxMjYzNzk5Nl5BMl5BanBnXkFtZTcwNzU4NDgwMw@@._V1_Ratio1.0000_AL_.jpg",
        name: "Danny Aiello",
        asCharacter: "Tony",
      },
      {
        id: "nm0032216",
        image:
          "https://m.media-amazon.com/images/M/MV5BMDVlNjcxM2ItNTU2NC00YzJkLWFlMzEtZGYwMTI0MmI5ZGE4XkEyXkFqcGdeQXVyNjkyNzAzNg@@._V1_Ratio1.0000_AL_.jpg",
        name: "Peter Appel",
        asCharacter: "Malky",
      },
      {
        id: "nm0089112",
        image:
          "https://m.media-amazon.com/images/M/MV5BNGU5YTdkODMtYjAxYS00NmM4LWI0MGEtZjZmNGMwYTA2Njg0XkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_Ratio2.3571_AL_.jpg",
        name: "Willi One Blood",
        asCharacter: "1st Stansfield Man",
      },
      {
        id: "nm0187199",
        image:
          "https://m.media-amazon.com/images/M/MV5BMTQ4MDMyODEyMF5BMl5BanBnXkFtZTgwNDI4OTQ1MjE@._V1_Ratio1.3429_AL_.jpg",
        name: "Don Creech",
        asCharacter: "2nd Stansfield Man",
      },
      {
        id: "nm0321798",
        image: "https://imdb-api.com/images/original/nopicture.jpg",
        name: "Keith A. Glascoe",
        asCharacter: "3rd Stansfield Man",
      },
      {
        id: "nm0779685",
        image: "https://imdb-api.com/images/original/nopicture.jpg",
        name: "Randolph Scott",
        asCharacter: "4th Stansfield Man",
      },
      {
        id: "nm0045937",
        image:
          "https://m.media-amazon.com/images/M/MV5BMzExOTM3ZmMtODMyNS00ZjNlLTljZDctNGY2NzBjYzAwMGEwXkEyXkFqcGdeQXVyMTQ5Njc3Nzcw._V1_Ratio1.0000_AL_.jpg",
        name: "Michael Badalucco",
        asCharacter: "Mathilda's Father",
      },
      {
        id: "nm0338746",
        image:
          "https://m.media-amazon.com/images/M/MV5BODczMTdmYTQtNjlmYS00MzgxLTk2ZWEtYmQ1ZWIzM2U0M2E1XkEyXkFqcGdeQXVyMTEwODg2MDY@._V1_Ratio1.3286_AL_.jpg",
        name: "Ellen Greene",
        asCharacter: "Mathilda's Mother",
      },
      {
        id: "nm0716408",
        image:
          "https://m.media-amazon.com/images/M/MV5BMTU3NzA1ODQ2OV5BMl5BanBnXkFtZTcwNDU5OTAzMQ@@._V1_Ratio1.0000_AL_.jpg",
        name: "Elizabeth Regen",
        asCharacter: "Mathilda's Sister",
      },
      {
        id: "nm0560593",
        image: "https://imdb-api.com/images/original/nopicture.jpg",
        name: "Carl J. Matusovich",
        asCharacter: "Mathilda's Brother",
      },
      {
        id: "nm0784262",
        image:
          "https://m.media-amazon.com/images/M/MV5BMTM1Njk4NTEyOV5BMl5BanBnXkFtZTYwNDI2Mzgy._V1_Ratio1.3571_AL_.jpg",
        name: "Frank Senger",
        asCharacter: "Fatman",
      },
      {
        id: "nm1707797",
        image:
          "https://m.media-amazon.com/images/M/MV5BZTk5MWQwYjctYmZmMy00MGE4LWIwN2ItMTA2ZjM2YjBkOGViXkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_Ratio1.6429_AL_.jpg",
        name: "Lucius Wyatt Cherokee",
        asCharacter: "Tonto",
      },
      {
        id: "nm0149987",
        image: "https://imdb-api.com/images/original/nopicture.jpg",
        name: "Eric Challier",
        asCharacter: "Bodyguard Chief",
      },
      {
        id: "nm0076306",
        image: "https://imdb-api.com/images/original/nopicture.jpg",
        name: "Luc Bernard",
        asCharacter: "Mickey",
      },
      {
        id: "nm0494069",
        image:
          "https://m.media-amazon.com/images/M/MV5BNDE0Mjk0MjIyN15BMl5BanBnXkFtZTcwMTg5NzUyNQ@@._V1_Ratio1.0000_AL_.jpg",
        name: "Maïwenn",
        asCharacter: "Blond Babe",
      },
    ],
    fullCast: null,
    genres: "Action, Crime, Drama",
    genreList: [
      {
        key: "Action",
        value: "Action",
      },
      {
        key: "Crime",
        value: "Crime",
      },
      {
        key: "Drama",
        value: "Drama",
      },
    ],
    companies: "Gaumont, Les Films du Dauphin, Columbia Pictures",
    companyList: [
      {
        id: "co0172053",
        name: "Gaumont",
      },
      {
        id: "co0008826",
        name: "Les Films du Dauphin",
      },
      {
        id: "co0050868",
        name: "Columbia Pictures",
      },
    ],
    countries: "France, USA",
    countryList: [
      {
        key: "France",
        value: "France",
      },
      {
        key: "USA",
        value: "USA",
      },
    ],
    languages: "English, Italian, French",
    languageList: [
      {
        key: "English",
        value: "English",
      },
      {
        key: "Italian",
        value: "Italian",
      },
      {
        key: "French",
        value: "French",
      },
    ],
    contentRating: "R",
    imDbRating: "8.5",
    imDbRatingVotes: "1161946",
    metacriticRating: "64",
    ratings: null,
    wikipedia: null,
    posters: null,
    images: null,
    trailer: null,
    boxOffice: {
      budget: "FRF 115,000,000 (estimated)",
      openingWeekendUSA: "$5,306,558",
      grossUSA: "$19,501,238",
      cumulativeWorldwideGross: "$19,569,225",
    },
    tagline: null,
    keywords: "hitman,loss of family,neo noir,killer child,girl",
    keywordList: [
      "hitman",
      "loss of family",
      "neo noir",
      "killer child",
      "girl",
    ],
    similars: [
      {
        id: "tt0120689",
        title: "The Green Mile",
        image:
          "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_Ratio0.6763_AL_.jpg",
        imDbRating: "8.6",
      },
      {
        id: "tt0120586",
        title: "American History X",
        image:
          "https://m.media-amazon.com/images/M/MV5BZTJhN2FkYWEtMGI0My00YWM4LWI2MjAtM2UwNjY4MTI2ZTQyXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_Ratio0.6763_AL_.jpg",
        imDbRating: "8.5",
      },
      {
        id: "tt0253474",
        title: "The Pianist",
        image:
          "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.7246_AL_.jpg",
        imDbRating: "8.5",
      },
      {
        id: "tt0102926",
        title: "The Silence of the Lambs",
        image:
          "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.6763_AL_.jpg",
        imDbRating: "8.6",
      },
      {
        id: "tt0114369",
        title: "Se7en",
        image:
          "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.6763_AL_.jpg",
        imDbRating: "8.6",
      },
      {
        id: "tt0114814",
        title: "The Usual Suspects",
        image:
          "https://m.media-amazon.com/images/M/MV5BYTViNjMyNmUtNDFkNC00ZDRlLThmMDUtZDU2YWE4NGI2ZjVmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.6763_AL_.jpg",
        imDbRating: "8.5",
      },
      {
        id: "tt0172495",
        title: "Gladiator",
        image:
          "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.6763_AL_.jpg",
        imDbRating: "8.5",
      },
      {
        id: "tt0407887",
        title: "The Departed",
        image:
          "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_Ratio0.6763_AL_.jpg",
        imDbRating: "8.5",
      },
      {
        id: "tt1675434",
        title: "The Intouchables",
        image:
          "https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_Ratio0.6763_AL_.jpg",
        imDbRating: "8.5",
      },
      {
        id: "tt0137523",
        title: "Fight Club",
        image:
          "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_Ratio0.6763_AL_.jpg",
        imDbRating: "8.8",
      },
      {
        id: "tt0482571",
        title: "The Prestige",
        image:
          "https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_Ratio0.6763_AL_.jpg",
        imDbRating: "8.5",
      },
      {
        id: "tt0120815",
        title: "Saving Private Ryan",
        image:
          "https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_Ratio0.6860_AL_.jpg",
        imDbRating: "8.6",
      },
    ],
    tvSeriesInfo: null,
    tvEpisodeInfo: null,
    errorMessage: "",
  };
  const trailerLinkMocked =
    "https://www.imdb.com/video/imdb/vi1471530265/imdb/embed";

  return (
    <Container>
      <GridContainer>
        <Row>
          <Col>
            {idParam === "not__able" ? (
              <BoxNotAble>
                <h1>You must have a valid id</h1>
              </BoxNotAble>
            ) : (
              <Box>
                <h1>{movieInfoMocked?.title}</h1>
                <iframe src={trailerLinkMocked} />
                <p>{movieInfoMocked?.plot}</p>
                <FilmakersBox>
                  <div>
                    <h6>Director(s):</h6>
                    <p>{movieInfoMocked?.directors}</p>
                  </div>
                  <div>
                    <h6>Writer(s):</h6>
                    <p>{movieInfoMocked?.writers}</p>
                  </div>
                </FilmakersBox>

                <SimilarsBox>
                  <h4>Similars:</h4>
                  <MovieCarousel moviesToDisplay={movieInfoMocked?.similars} />
                </SimilarsBox>
              </Box>
            )}
          </Col>
        </Row>
      </GridContainer>
    </Container>
  );
};

export default Movie;
