import { Box, Image } from "@chakra-ui/react";
import React from "react";

export const Tecnologia = ({ src }) => {
  return (
    <Box p={4} _hover={{
      transition: "all 0.5s ease-in-out",
      transform: "scale(1.5)" 
    }}>
      <Image src={src.tec} width={"80px"}  />
    </Box>
  );
};
