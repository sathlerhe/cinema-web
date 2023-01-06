import { styled } from "../../../stitches.config";

export const Container = styled("div", {
  padding: "$xxs 0",
});

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
