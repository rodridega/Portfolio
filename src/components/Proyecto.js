import {
  AspectRatio,
  Box,
  Divider,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";

export const Proyecto = ({ proyecto }) => {
  const { nombre, imagen, tecs, descripcion, link } = proyecto;

  return (
    <Box height={"xl"} mb={"16"}>
      <Heading size={"lg"} minHeight={"20"}>
        {nombre}
      </Heading>
      <Link href={link} isExternal>
        <AspectRatio>
          <Image
            src={imagen}
            _hover={{
              boxShadow: "0px 0px 5px gray",
            }}
          />
        </AspectRatio>
      </Link>
      <Text my={4}>{descripcion}</Text>
      <Divider />
      <Text mt={2}>Tecnologias usadas: {tecs}</Text>
    </Box>
  );
};
