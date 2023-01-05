import { styled } from "../../../stitches.config";

export const Container = styled("div", {});

export const Div = styled("div", {
  "> h4": {
    fontSize: "$header_5",
    color: "$primary",
    fontWeight: "$light",
  },

  "> div": {
    marginBottom: "$md",
  },
});
