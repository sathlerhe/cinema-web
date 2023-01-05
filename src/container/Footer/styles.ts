import { styled } from "../../../stitches.config";

export const Container = styled("footer", {
  color: "$text_white",
  borderTop: "1px solid $primary",
  padding: "$xxxs 0 ",

  p: {
    textAlign: "center",
    fontWeight: "$light",

    "> a": {
      textDecoration: "underline",
      transition: "0.4s ease",

      "&:hover": {
        color: "$primary",
      },
    },
  },
});
