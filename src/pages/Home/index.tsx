import { useEffect, useState } from "react";
import { Col, Container as GridContainer, Row } from "react-grid-system";
import MovieCarousel from "../../components/MovieCarousel";
import api from "../../services/api";

import { Container, Div } from "./styles";

const Home: React.FC = () => {
  interface IMostPopularShows {
    id: string;
    rank: string;
    rankUpDown: string;
    title: string;
    fullTitle: string;
    year: string;
    image: string;
    crew: string;
    imDbRating: string;
    imDbRatingCount: string;
  }

  const [mostPopularTvShows, setMostPopularTvShows] = useState();
  const [mostPopularMovies, setMostPopularMovies] = useState();
  const [inTheaters, setInTheaters] = useState();

  const showsMocked: Array<IMostPopularShows> = [
    {
      id: "tt13443470",
      rank: "1",
      rankUpDown: "0",
      title: "Wednesday",
      fullTitle: "Wednesday (2022)",
      year: "2022",
      image:
        "https://m.media-amazon.com/images/M/MV5BM2ZmMjEyZmYtOGM4YS00YTNhLWE3ZDMtNzQxM2RhNjBlODIyXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_Ratio0.6716_AL_.jpg",
      crew: "Jenna Ortega, Gwendoline Christie",
      imDbRating: "8.3",
      imDbRatingCount: "198873",
    },
    {
      id: "tt12785720",
      rank: "2",
      rankUpDown: "+110",
      title: "The Witcher: Blood Origin",
      fullTitle: "The Witcher: Blood Origin (2022)",
      year: "2022",
      image:
        "https://m.media-amazon.com/images/M/MV5BYTYxZjhlZjQtYTlmYi00OWM0LWI4YzgtNjAxZmJkNjM1MTQzXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_Ratio0.6716_AL_.jpg",
      crew: "Sophia Brown, Laurence O'Fuarain",
      imDbRating: "4.4",
      imDbRatingCount: "26629",
    },
    {
      id: "tt13406094",
      rank: "3",
      rankUpDown: "-1",
      title: "The White Lotus",
      fullTitle: "The White Lotus (2021)",
      year: "2021",
      image:
        "https://m.media-amazon.com/images/M/MV5BYjdjNzBmYjEtM2Y5My00YjI0LWJjY2YtOGQ4MjNkNmE2MDVjXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_Ratio0.6716_AL_.jpg",
      crew: "Jennifer Coolidge, Jon Gries",
      imDbRating: "7.9",
      imDbRatingCount: "112630",
    },
    {
      id: "tt5057054",
      rank: "4",
      rankUpDown: "+2",
      title: "Tom Clancy's Jack Ryan",
      fullTitle: "Tom Clancy's Jack Ryan (2018)",
      year: "2018",
      image:
        "https://m.media-amazon.com/images/M/MV5BNDNmNGI2NzAtZjZhYi00YTc1LWJjOTctMTRlMDI0MzEzNjA2XkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_Ratio0.6716_AL_.jpg",
      crew: "John Krasinski, Wendell Pierce",
      imDbRating: "8.0",
      imDbRatingCount: "131858",
    },
    {
      id: "tt4236770",
      rank: "5",
      rankUpDown: "0",
      title: "Yellowstone",
      fullTitle: "Yellowstone (2018)",
      year: "2018",
      image:
        "https://m.media-amazon.com/images/M/MV5BOGFiZjU5NGEtNTAwNS00ZjI2LTg0YTktNjg0ODFlM2E0NGVhXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_Ratio0.6716_AL_.jpg",
      crew: "Kevin Costner, Luke Grimes",
      imDbRating: "8.7",
      imDbRatingCount: "147559",
    },
    {
      id: "tt16450274",
      rank: "6",
      rankUpDown: "+406",
      title: "Treason",
      fullTitle: "Treason (2022)",
      year: "2022",
      image:
        "https://m.media-amazon.com/images/M/MV5BZTA5MWQ3MmMtNzU1MS00NmI2LWI5ZTYtZTdiOTRlYzMxZDYxXkEyXkFqcGdeQXVyNzUwMDA5NDE@._V1_Ratio0.7910_AL_.jpg",
      crew: "Olga Kurylenko, Oona Chaplin",
      imDbRating: "6.3",
      imDbRatingCount: "7693",
    },
    {
      id: "tt10795658s",
      rank: "7",
      rankUpDown: "+5",
      title: "Alice in Borderland",
      fullTitle: "Alice in Borderland (2020)",
      year: "2020",
      image:
        "https://m.media-amazon.com/images/M/MV5BZmUwMGI4M2QtYmRlYy00NDQ1LThjNDAtYTI4NDNiNDg5MDViXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_Ratio0.6716_AL_.jpg",
      crew: "Kento Yamazaki, Tao Tsuchiya",
      imDbRating: "7.6",
      imDbRatingCount: "63289",
    },
    {
      id: "tt107956s8",
      rank: "7",
      rankUpDown: "+5",
      title: "Alice in Borderland",
      fullTitle: "Alice in Borderland (2020)",
      year: "2020",
      image:
        "https://m.media-amazon.com/images/M/MV5BZmUwMGI4M2QtYmRlYy00NDQ1LThjNDAtYTI4NDNiNDg5MDViXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_Ratio0.6716_AL_.jpg",
      crew: "Kento Yamazaki, Tao Tsuchiya",
      imDbRating: "7.6",
      imDbRatingCount: "63289",
    },
    {
      id: "tt1079a658",
      rank: "7",
      rankUpDown: "+5",
      title: "Alice in Borderland",
      fullTitle: "Alice in Borderland (2020)",
      year: "2020",
      image:
        "https://m.media-amazon.com/images/M/MV5BZmUwMGI4M2QtYmRlYy00NDQ1LThjNDAtYTI4NDNiNDg5MDViXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_Ratio0.6716_AL_.jpg",
      crew: "Kento Yamazaki, Tao Tsuchiya",
      imDbRating: "7.6",
      imDbRatingCount: "63289",
    },
  ];

  // useEffect(() => {
  //   const handleCallApi = async () => {
  //     let tvShowsRes = await api.get(
  //       `/mostpopulartvs/${import.meta.env.VITE_API_KEY}`
  //     );
  //     setMostPopularTvShows(tvShowsRes.data.items);

  //     let moviesRes = await api.get(
  //       `/MostPopularMovies/${import.meta.env.VITE_API_KEY}`
  //     );
  //     setMostPopularMovies(moviesRes.data.items);

  //     let inTheatersRes = await api.get(
  //       `/InTheaters/${import.meta.env.VITE_API_KEY}`
  //     );
  //     setInTheaters(inTheatersRes.data.items);
  //   };

  //   handleCallApi();
  // }, []);

  return (
    <Container>
      <GridContainer>
        <Row>
          <Col>
            <Div>
              <h4>Most Popular TV Shows</h4>
              <MovieCarousel moviesToDisplay={showsMocked} />

              <h4>Most Popular Movies</h4>
              <MovieCarousel moviesToDisplay={showsMocked} />

              <h4>In Theaters</h4>
              <MovieCarousel moviesToDisplay={showsMocked} />
            </Div>
          </Col>
        </Row>
      </GridContainer>
    </Container>
  );
};

export default Home;
