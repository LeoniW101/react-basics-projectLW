import {
  Center,
  Image,
  Card,
  CardBody,
  Flex,
  Heading,
  Text,
  Button,
  Box,
} from "@chakra-ui/react";

export const RecipePage = ({ item, clickFn }) => {
  const {
    image,
    label,
    dietLabels,
    cautions,
    mealType,
    dishType,
    healthLabels,
    ingredientLines,
    totalTime,
    yield: servings,
    totalNutrients,
  } = item.recipe;

  const isVegetarian = healthLabels.includes("Vegetarian");
  const isVegan = healthLabels.includes("Vegan");

  const filteredTotalNutrients = {
    ENERC_KCAL: totalNutrients.ENERC_KCAL,
    PROCNT: totalNutrients.PROCNT,
    FAT: totalNutrients.FAT,
    CHOCDF: totalNutrients.CHOCDF,
    CHOLE: totalNutrients.CHOLE,
    NA: totalNutrients.NA,
  };

  return (
    <Center bgColor="white.900" h="100vh" flexDirection="column">
      <Center>
        <Flex
          bgColor="tomato.900"
          justifyContent="center"
          alignItems="center"
          h="calc(100vh - 100px)"
          w="100%"
        >
          <Card
            bgColor="white"
            borderRadius="xl"
            w={{ base: "90%", md: "3xl" }}
            h="3xl"
          >
            <CardBody overflow="auto" m={6}>
              <Image h="xl" w="100%" src={image} borderRadius="xl" />

              <Box mt="6" spacing="3">
                <Flex justifyContent="center">
                  <Heading size="lg" mt={4} mb={4}>
                    {label}
                  </Heading>
                </Flex>

                <Text>Mealtype: {mealType}</Text>
                <Text> Dishtype: {dishType}</Text>
                <Text mt={4} fontSize="xl" fontWeight="bold">
                  Health Labels:
                </Text>
                <Text mb={2}>{healthLabels}</Text>

                <Flex
                  flexDirection={{ base: "column", md: "row" }}
                  justifyContent="space-between"
                >
                  <Box mb={{ base: 6, md: 0 }}>
                    {isVegan ? (
                      <Text bgColor="green">Vegan</Text>
                    ) : isVegetarian ? (
                      <Text bgColor="lime">Vegetarian</Text>
                    ) : null}

                    <Text mt={4} fontSize="xl" fontWeight="bold">
                      Diet Labels:
                    </Text>
                    <Text bgColor="orange.200">{dietLabels}</Text>

                    <Text mt={4} fontSize="xl" fontWeight="bold">
                      Caution:
                    </Text>
                    <Text bgColor="red.400" mb={6}>
                      {cautions}
                    </Text>
                  </Box>

                  <Box>
                    <Text mt={4} fontSize="xl" fontWeight="bold">
                      Total Cooking Time:
                    </Text>
                    <Text> {totalTime} minutes</Text>

                    <Text mt={4} fontSize="xl" fontWeight="bold">
                      Servings:
                    </Text>
                    <Text> {servings}</Text>
                  </Box>
                </Flex>

                <Flex
                  flexDirection={{ base: "column", md: "row" }}
                  justifyContent="space-between"
                >
                  <Box>
                    {/* map through ingredientLines and target index of */}
                    <Text mt={4} fontSize="xl" fontWeight="bold">
                      Ingredients:
                    </Text>
                    <ul>
                      {ingredientLines.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      ))}
                    </ul>
                  </Box>

                  <Box>
                    <Text mt={4} fontSize="xl" fontWeight="bold">
                      Total Nutrients:
                    </Text>
                    <ul>
                      {Object.entries(filteredTotalNutrients).map(
                        ([key, value]) => (
                          <li key={key}>
                            {value.label}: {value.quantity.toFixed(2)}{" "}
                            {value.unit}
                          </li>
                        )
                      )}
                    </ul>
                  </Box>
                </Flex>
              </Box>
            </CardBody>
          </Card>
        </Flex>
      </Center>
      <Button
        mt={6}
        w="fit-content"
        bgColor="green.300"
        color="gray.900"
        onClick={() => clickFn()}
      >
        Back
      </Button>
    </Center>
  );
};
