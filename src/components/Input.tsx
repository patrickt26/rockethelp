import { Input as InputNB, IInputProps } from 'native-base';

export function Input({ ...rest }: IInputProps) {
  return (
    <InputNB
      bg="gray.700"
      h={14}
      size="md"
      borderWidth={0}
      fontSize="md"
      fontFamily="body"
      color="white"
      placeholderTextColor="gray.300"
      autoCorrect={false}
      _focus={{
        borderWidth: 1,
        borderColor: "green.500",
        bg: "gray.700",
      }}
      {...rest}
    />
  );
}