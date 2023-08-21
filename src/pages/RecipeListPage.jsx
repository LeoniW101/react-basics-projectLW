import { Box, Flex, SimpleGrid, useBreakpointValue } from "@chakra-ui/react";
import { RecipeItemCard } from "../components/RecipeItemCard";

export const RecipeListPage = ({ items, clickFn }) => {
  const columns = useBreakpointValue({ base: 1, sm: 2, md: 3, lg: 4 });

  return (
    <Box bgColor="white" color="whitesmoke" minH="100vh">
      <Flex align="center" justify="center" minH="100vh">
        <SimpleGrid columns={columns} gap={8}>
          {items.map((item) => (
            <RecipeItemCard
              key={item.recipe.url}
              item={item}
              clickFn={clickFn}
            />
          ))}
        </SimpleGrid>
      </Flex>
    </Box>
  );
};
