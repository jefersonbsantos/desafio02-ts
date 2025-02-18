import { 
  Center,
  ChakraProvider,
  Input,
  Box,
  Button
} from '@chakra-ui/react'
import { login } from './services/login';
import { Header } from './components/Header/Header';
import { Card } from './components/Card';
import { Button as NewButton } from './components/Button';
import { welcome } from './services/welcome';

function App() {
  return (
    <ChakraProvider>
      <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
          <Center>
            <h1>Faça o login</h1>
          </Center>
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Center>
            <Button onClick={login} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
              Button
            </Button>
          </Center>
          <Header />
          <Card />
          <NewButton onClick={() => welcome('Usuário')} mt={4} mx='auto' display='block'>
            Clique para receber boas-vindas
          </NewButton>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
