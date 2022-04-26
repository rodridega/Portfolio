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
              transition: "all 0.3s ease-in-out",
              transform: "scale(1.05)",
            }}
            borderRadius={"lg"}
            alt={nombre}
            border={"1px solid"}
            borderColor={"gray.200"}
          />
        </AspectRatio>
      </Link>
      <Text my={4} fontSize={"lg"}>
        {" "}
        {descripcion}
      </Text>
      <Divider />
      <Text mt={2}>Tecnologias usadas: {tecs}</Text>
    </Box>
  );
};
