import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "@react-hook/media-query";

import { media } from "../../../stitches.config";

import "swiper/css";
import "swiper/css/pagination";

import { Card, Img, Title, Rating, Flex } from "./styles";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

interface IMovieCarousel {
  moviesToDisplay: any;
}
const MovieCarousel: React.FC<IMovieCarousel> = ({ moviesToDisplay }) => {
  const [slidesPerView, setSlidesPerView] = useState(Number);
  const desktop = useMediaQuery("screen and (min-width: 1500px )");
  const containerXl = useMediaQuery(media.xl);
  const containerSm = useMediaQuery(media.md);
  const containerXs = useMediaQuery("screen and (min-width: 540px)");
  const containerXxs = useMediaQuery("screen and (min-width: 360px )");

  useEffect(
    function checkSlidesPerView() {
      if (window.innerWidth >= 1500) {
        setSlidesPerView(6.5);
      } else if (window.innerWidth <= 1440 && window.innerWidth > 960) {
        setSlidesPerView(4.5);
      } else if (window.innerWidth <= 960 && window.innerWidth > 540) {
        setSlidesPerView(3.5);
      } else if (window.innerWidth <= 540 && window.innerWidth > 360) {
        setSlidesPerView(1.8);
      } else if (window.innerWidth <= 360) {
        console.log("aa");
        setSlidesPerView(1.3);
      }

      console.log(slidesPerView);
    },
    [window.innerWidth]
  );

  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={30}
      centeredSlides={false}
      className="mySwiper"
    >
      {moviesToDisplay?.map((movie: any) => (
        <SwiperSlide key={movie?.id}>
          <Link to={`/movie?id=${movie?.id}`}>
            <Card>
              <Img style={{ backgroundImage: `url(${movie?.image}` }} />
              <Flex>
                <Title>{movie?.title}</Title>
                <Rating>{movie?.imDbRating}/10</Rating>
              </Flex>
            </Card>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MovieCarousel;
