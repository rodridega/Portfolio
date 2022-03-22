import { Heading } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Barra } from "./components/Barra/Barra";
import { Footer } from "./components/Footer";
import CallToActionWithVideo from "./components/Hero";
import { ProyContainer } from "./components/ProyContainer";

import "./App.css";
import { TecnologiasContainer } from "./components/TecnologiasContainer";

function App() {
  return (
    <BrowserRouter>
      <Barra />
      <CallToActionWithVideo />
      <Heading as={"h2"} textAlign={"center"} py={"16"}>
        Stack
      </Heading>
      <TecnologiasContainer />
      <Heading as={"h2"} textAlign={"center"} py={"20"} id="proyectos">
        Proyectos
      </Heading>
      <ProyContainer />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
