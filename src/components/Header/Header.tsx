import { Box, Heading } from '@chakra-ui/react';

export const Header = () => {
  return (
    <Box bg='teal.500' p={4} color='white' textAlign='center'>
      <Heading as='h1' size='lg'>Dio Bank</Heading>
    </Box>
  );
};
