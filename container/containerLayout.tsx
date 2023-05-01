import { IContainer } from "@/interface/container.interface";
import { Container } from "@chakra-ui/react";
import { FC } from "react";

const ContainerLayout: FC<IContainer> = ({ children, px, width }) => {
  return (
    <>
      <Container
        maxW={{ base: "100%", md: "100%", lg: "85%" }}
        width={width ? width : undefined}
      >
        {children}
      </Container>
    </>
  );
};

export default ContainerLayout;
