import { Container } from "@chakra-ui/react";
import { Responsive } from "../utils/layoutProps";

interface Props {
  children?: any;
}

const ContainerLayout = ({ children }: Props) => {
  return (
    <>
      <Container maxW={{ base: "100%", md: "100%", lg: "60%" }}>
        {children}
      </Container>
    </>
  );
};

export default ContainerLayout;
