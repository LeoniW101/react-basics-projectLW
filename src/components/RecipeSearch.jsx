import { useState } from "react";
import { TextInput } from "./ui/TextInput";
import { Center, Heading } from "@chakra-ui/react";

export const RecipeSearch = ({
  items,
  handleFilteredRecipes,
  originalItems,
}) => {
  const [searchField, setSearchField] = useState("");

  const handleChange = (event) => {
    const searchValue = event.target.value;
    setSearchField(searchValue);

    if (searchValue === "") {
      handleFilteredRecipes(originalItems);
    } else {
      const matchedRecipes = items.filter((item) => {
        const { label, dietLabels, cautions, healthLabels } = item.recipe;
        return (
          label.toLowerCase().includes(searchValue.toLowerCase()) ||
          dietLabels.some((label) =>
            label.toLowerCase().includes(searchValue.toLowerCase())
          ) ||
          cautions.some((caution) =>
            caution.toLowerCase().includes(searchValue.toLowerCase())
          ) ||
          healthLabels.some((label) =>
            label.toLowerCase().includes(searchValue.toLowerCase())
          )
        );
      });

      handleFilteredRecipes(matchedRecipes);
    }
  };

  return (
    <Center flexDir="column" gap={8} mt={10} mb={6}>
      <Heading as="h2" size="xl">
        Search recipe:
      </Heading>
      <TextInput borderColor="blue" changeFn={handleChange} w={500} />
    </Center>
  );
};
