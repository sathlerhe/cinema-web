import { styled } from "../../../stitches.config";

export const Container = styled("div", {});

export const Box = styled("div", {
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
