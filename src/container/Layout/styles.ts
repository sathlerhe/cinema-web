import { styled } from "../../../stitches.config";

export const Container = styled("div", {
  header: { maxWidth: "100vw" },
  footer: { maxWidth: "100vw" },
  "@sm": {
    overflowX: "hidden",
  },
});

export const Children = styled("div", {
  margin: "0",
  padding: "0",
});
