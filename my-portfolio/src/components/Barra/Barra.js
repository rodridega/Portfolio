import React from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import { HashLink } from "react-router-hash-link";

import './Barra.css'

export const Barra = () => {
  return (
    <div>
      <Box bg="gray.700" w="100%" p={4} color="white">
        <Container maxW="container.xl">
          <Flex>
            <Box>
              <Heading as="h2" size="md" fontWeight={"thin"}>
                Rodrigo Deganutti
              </Heading>
            </Box>

            <Spacer />
            <HStack>
              <HashLink
                to="#proyectos"
                smooth
              >
                Proyectos
              </HashLink>
              <HashLink to="#contacto" smooth>
                Contacto
              </HashLink>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </div>
  );
};
