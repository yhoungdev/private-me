import { IButton } from "@/interface/button.interface";
import { Button } from "@chakra-ui/react";
import { FC } from "react";

const ButtonInterface: FC<IButton> = ({
  py,
  my,
  children,
  radius,
  onClick,
  bg,
  ...props
}) => {
  return (
    <Button
      py={py ? py : ""}
      my={my ? my : ""}
      borderRadius={radius ? radius : "xl"}
      size={"md"}
      onClick={onClick}
      bg={bg ? bg : "brand.primary"}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ButtonInterface;
