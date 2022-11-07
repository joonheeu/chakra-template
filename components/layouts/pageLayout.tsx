import { Flex } from "@chakra-ui/react";

type PageLayoutType = {
  children: JSX.Element | JSX.Element[] | String;
};

export default function PageLayout({ children }: PageLayoutType) {
  return (
    <Flex direction='column' justifyContent='center' alignItems='center' gap='20px'>
      {children}
    </Flex>
  );
}