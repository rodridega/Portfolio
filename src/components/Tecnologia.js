import { Box, Image } from "@chakra-ui/react";
import React from "react";

export const Tecnologia = ({ src }) => {
  return (
    <Box p={4}>
      <Image src={src.tec} width={"80px"} scale={"1.2"} />
    </Box>
  );
};
