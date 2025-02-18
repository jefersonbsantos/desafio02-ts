import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react';

interface IButton extends ButtonProps {
  onClick: () => void;
}

export const Button = ({ onClick, children, ...rest }: IButton) => {
  return (
    <ChakraButton onClick={onClick} colorScheme='teal' {...rest}>
      {children}
    </ChakraButton>
  );
};
