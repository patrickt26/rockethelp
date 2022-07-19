import { Button as ButtonNB, IButtonProps, Heading } from 'native-base';

interface ButtonProps extends IButtonProps {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <ButtonNB
      bg="green.700"
      h={14}
      fontSize="sm"
      rounded="sm"
      _pressed={{
        bg: "green.500"
      }}
      {...rest}
    >
      <Heading color="white" fontSize="md">
        {title}
      </Heading>
    </ButtonNB>
  );
}