import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipeSearch } from "./components/RecipeSearch";
import { data } from "./utils/data";
import { useState } from "react";
import { RecipePage } from "./components/RecipePage";
import { Box, Center, Heading } from "@chakra-ui/react";

export const App = () => {
  // Your state code here
  const [selectedItem, setSelectedItem] = useState();
  //new state for filtered recipes
  const [filteredRecipes, setFilteredRecipes] = useState(data.hits);

  // handle filter recipe from RecipeSearch
  const handleFilteredRecipes = (recipes) => {
    setFilteredRecipes(recipes);
  };
  return (
    <Box>
      <Center h="100hv" flexDir="column" bgColor="white" color="black">
        <Heading as="h1" fontSize={["3xl", "4xl", "6xl"]}>
          Recipe Checker
        </Heading>

        {selectedItem ? (
          <RecipePage item={selectedItem} clickFn={setSelectedItem} />
        ) : (
          <>
            <RecipeSearch
              items={filteredRecipes}
              clickFn={setSelectedItem}
              originalItems={data.hits}
              handleFilteredRecipes={handleFilteredRecipes}
            />
            <RecipeListPage
              selectedItem={selectedItem}
              clickFn={setSelectedItem}
              items={filteredRecipes}
            />
          </>
        )}
      </Center>
    </Box>
  );
};
