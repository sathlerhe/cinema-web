import { styled } from "../../../stitches.config";

export const Container = styled("div", {
  gridTemplateAreas: `
  "header"
  "body"
  "footer"`,
  header: { gridArea: "header", maxWidth: "100vw" },
  footer: { gridArea: "footer", maxWidth: "100vw" },
  "@sm": {
    overflowX: "hidden",
  },
});

export const Children = styled("div", {
  margin: "0",
  padding: "0",
});
