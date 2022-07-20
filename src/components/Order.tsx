import { HStack, Text } from 'native-base';

export interface OrderTypes {
  id: string;
  patrimony: string;
  when: string;
  status: 'open' | 'closed';
};

interface OrderProps {
  data: OrderTypes;
};

export function Order({ data, ...rest }: OrderProps) {
  return (
    <HStack
      bg="gray.600"
      mb={4}
      alignItems="center"
      justifyContent="space-between"
      rounded="sm"
    >
      <Text color="white" fontSize="md">
        Patrimonio {data.patrimony}
      </Text>
    </HStack>
  );
}