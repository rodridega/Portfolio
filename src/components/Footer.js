import React from "react";
import { Box, Container, Grid, HStack, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <Box bg="gray.700" w="100%" p={4} color="white" id="contacto" mt={10}>
      <Container maxW="container.xl">
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <Link
            href={
              "mailto:rodridega@gmail.com?Subject=Me%20interesa%20tu%20perfil"
            }
            fontSize={{ base: "md", md: "2xl" }}
          >
            Rodridega@gmail.com
          </Link>

          <HStack gap={8} justifyContent={"end"}>
            <Link
              href="https://github.com/rodridega"
              isExternal
              _hover={{
                color: "red.400",
              }}
            >
              <FontAwesomeIcon icon={faGithub} size={"2x"} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/rodrigo-deganutti-330812223/"
              isExternal
              _hover={{
                color: "red.400",
              }}
            >
              <FontAwesomeIcon icon={faLinkedin} size={"2x"} />
            </Link>
          </HStack>
        </Grid>
      </Container>
    </Box>
  );
};
