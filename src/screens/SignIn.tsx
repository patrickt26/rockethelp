import { useState } from 'react';
import { Alert } from 'react-native';
import { Heading, VStack, Icon, useTheme } from 'native-base';
import { Envelope, Key } from 'phosphor-react-native';
import auth from '@react-native-firebase/auth';

import Logo from '../assets/logo_primary.svg';

import { Button } from '../components/Button';
import { Input } from '../components/Input';

export function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { colors } = useTheme();

  function handleSignIn() {
    if (!email || !password) {
      return Alert.alert('Entrar', 'Informe e-mail e senha');
    }

    setIsLoading(true);

    auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        console.log(error);
        setIsLoading(false);

        switch (error.code) {
          case 'auth/invalid-email':
            return Alert.alert('Entrar', 'Formato de e-mail inválido.');
          
          case 'auth/user-not-found':
          case 'auth/wrong-password':
            return Alert.alert('Entrar', 'E-mail ou senha inválido.');
          
          default:
            return Alert.alert('Entrar', 'Ocorreu um problema, tente novamente mais tarde.');
        }
      })
  }

  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
      <Logo />

      <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
        Acesse sua conta
      </Heading>

      <Input
        placeholder="E-mail"
        mb={4}
        InputLeftElement={<Icon as={<Envelope color={colors.gray[300]} />} ml={4} />}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <Input
        placeholder="Senha"
        mb={8}
        InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4} />}
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        secureTextEntry
      />

      <Button
        title="Entrar"
        w="full"
        onPress={handleSignIn}
        isLoading={isLoading}
      />
    </VStack>
  );
}