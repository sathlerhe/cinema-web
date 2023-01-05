import { styled } from "../../../stitches.config";

export const Card = styled("div", {
  background: "$bg_transparent",
  width: "200px",
  height: "320px",
  borderRadius: "$xs",
  gap: "0",
});

export const Flex = styled("div", {
  padding: "$quarck $nano",
  height: "80px",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "space-around",
  color: "$text_white",
});

export const Img = styled("div", {
  width: "100%",
  borderRadius: "$xs $xs 0 0",
  height: "240px",
  backgroundSize: "cover",
  backgroundPosition: "center",
});

export const Title = styled("h6", {
  fontSize: "$body_1",
  fontWeight: "$light",
  margin: "0",
});

export const Rating = styled("p", {
  margin: "0",
  fontSize: "$body_3",
});
