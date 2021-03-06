import { Container, HStack } from "@chakra-ui/react";
import React from "react";
import { Tecnologia } from "./Tecnologia";
import tecs from "../data/tecs";

export const TecnologiasContainer = () => {
  return (
    <Container maxW="container.xl">
      <HStack
        alignItems={"center"}
        justify={"center"}
        wrap={"wrap"}
        rounded={"lg"}
        boxShadow={"lg"}
        p={4}
        mb={4}
      >
        {tecs.map((tec) => {
          return <Tecnologia key={tec.id} src={tec} />;
        })}
      </HStack>
    </Container>
  );
};
