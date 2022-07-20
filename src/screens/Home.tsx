import { FlatList, Heading, HStack, IconButton, Text, useTheme, VStack } from 'native-base';
import { SignOut } from 'phosphor-react-native';
import { useState } from 'react';

import Logo from '../assets/logo_secondary.svg';
import { Filter } from '../components/Filter';
import { Order, OrderTypes } from '../components/Order';

export function Home() {
  const [statusSelected, setStatusSelected] = useState<'open' | 'closed'>('open');
  const [orders, setOrders] = useState<OrderTypes[]>([{
    id: '123',
    patrimony: '123456',
    when: '18/07/2022 às 10:00',
    status: 'open',
  }]);

  const { colors } = useTheme();

  return (
    <VStack flex={1} pb={6} bg="gray.700">
      <HStack
        w="full"
        justifyContent="space-between"
        alignItems="center"
        bg="gray.600"
        pt={12}
        pb={5}
        px={6}
      >
        <Logo />

        <IconButton icon={<SignOut size={26} color={colors.gray[300]} />} />
      </HStack>

      <VStack flex={1} px={6}>
        <HStack
          w="full"
          mt={8}
          mb={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading color="gray.100">
            Meus Chamados
          </Heading>

          <Text color="gray.200">
            3
          </Text>
        </HStack>

        <HStack space={3} mb={8}>
          <Filter
            title="Abertos"
            type="open"
            onPress={() => setStatusSelected('open')}
            isActive={statusSelected === 'open'}
          />
          <Filter
            title="Finalizados"
            type="closed"
            onPress={() => setStatusSelected('closed')}
            isActive={statusSelected === 'closed'}
          />
        </HStack>

        <FlatList
          data={orders}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <Order data={item} />}
        />
      </VStack>
    </VStack>
  );
}