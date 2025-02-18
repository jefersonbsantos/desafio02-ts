import { Box, FormControl, FormLabel, Input, Button, VStack } from '@chakra-ui/react';

interface ICard {
  id: number,
  paragraph: string,
  details: string
}

export const Card = ({ id, paragraph, details }: ICard) => {
  return(
    <Box p={4} borderWidth='1px' borderRadius='lg' maxW='md' mx='auto' mt={10}>
      <VStack spacing={4}>
        <FormControl id='email'>
          <FormLabel>Email</FormLabel>
          <Input type='email' />
        </FormControl>
        <FormControl id='password'>
          <FormLabel>Senha</FormLabel>
          <Input type='password' />
        </FormControl>
        <Button colorScheme='teal' w='full' type='submit'>
          Entrar
        </Button>
      </VStack>
    </Box>
  )
}