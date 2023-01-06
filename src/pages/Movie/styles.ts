import { styled } from "../../../stitches.config";

export const Container = styled("div", {
  padding: "$xxs 0",
});

export const BoxNotAble = styled("div", {
  width: "100%",
  height: "75vh",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "> h1": {
    textAlign: "center",
    color: "$text_white",
  },
});

export const Box = styled("div", {
  color: "$text_white",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "center",
  gap: "$sm",

  "> iframe": {
    width: "854px",
    height: "480px",
    alignSelf: "center",
  },

  "> h1": {
    margin: "0",
    color: "$primary",
    fontSize: "$header_1",
  },

  "> p": {
    fontSize: "$header_6",
    fontWeight: "$light",
    textAlign: "justify",
    margin: "0",
  },

  "@sm": {
    "> iframe": {
      width: "720px",
      height: "404.68px",
    },
  },

  "@xs": {
    "> iframe": {
      width: "395px",
      height: "222.01px",
    },
  },

  "@xxs": {
    "> iframe": {
      width: "345px",
      height: "193.91px",
    },
  },

  "@nano": {
    "> iframe": {
      width: "290px",
      height: "163px",
    },
  },
});

export const SimilarsBox = styled("div", {
  width: "100%",

  "> h4": {
    fontSize: "$header_4",
    color: "$primary",
  },
});

export const FilmakersBox = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$xxxs",

  "> div": {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    gap: "$nano",

    "> h6": {
      margin: "0",
    },
    "> p": {
      margin: "0",
    },
  },
});
