import React from "react";
import { Container, Grid } from "@chakra-ui/react";
import proyects from "../data/proyects.js";
import { Proyecto } from "./Proyecto.js";

export const ProyContainer = () => {
  return (
    <Container maxW='container.xl' >
      <Grid
        templateColumns={{
          base: "1, 1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={6}
      >
        {proyects.map((proyecto) => (
          <Proyecto
           
            proyecto={proyecto}
            key={proyecto.nombre}
          />
        ))}
      </Grid>
    </Container>
  );
};
