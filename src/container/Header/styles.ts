import { styled } from "../../../stitches.config";
import { Link } from "react-router-dom";

export const Container = styled("header", {
  background: "$bg_primary",
  color: "$text_white",
  borderBottom: "1px solid $primary",
  padding: "$xxs 0",
});

export const Flex = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  "> a > h1": {
    fontSize: "$header_4",
    color: "$primary",
  },
});

export const Links = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$md",
});

export const LinkEl = styled(Link, {
  padding: "$nano",
  fontSize: "$body_1",
  borderRadius: "$xs",
  transition: "0.4s ease",

  "&:hover": {
    background: "$bg_transparent",
    color: "$primary",
  },
});
