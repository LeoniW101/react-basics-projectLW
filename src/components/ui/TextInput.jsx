import { Input } from "@chakra-ui/react";

export const TextInput = ({ changeFn, ...props }) => {
  return (
    <Input
      ml={3}
      variant="outline"
      focusBorderColor="green.400"
      onChange={changeFn}
      {...props}
    />
  );
};
