import { Container, VStack, Heading, Text, Box, List, ListItem, ListIcon, Divider, Image } from "@chakra-ui/react";
import { FaAppleAlt, FaCarrot, FaFish, FaLeaf, FaLemon, FaSeedling, FaWater } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">
          Chuando Tan Inspired Diet Plan
        </Heading>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Time of Day
          </Heading>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={FaLemon} color="yellow.500" />
              <Text as="span" fontWeight="bold">
                Morning Routine:
              </Text>{" "}
              Hydration - Glass of warm water with lemon
            </ListItem>
            <ListItem>
              <ListIcon as={FaAppleAlt} color="red.500" />
              <Text as="span" fontWeight="bold">
                Breakfast:
              </Text>{" "}
              Greek yogurt with mixed berries, a handful of nuts, and a drizzle of honey
            </ListItem>
            <ListItem>
              <ListIcon as={FaCarrot} color="orange.500" />
              <Text as="span" fontWeight="bold">
                Mid-Morning Snack:
              </Text>{" "}
              An apple or a handful of mixed berries with a small portion of almonds or walnuts
            </ListItem>
            <ListItem>
              <ListIcon as={FaFish} color="blue.500" />
              <Text as="span" fontWeight="bold">
                Lunch:
              </Text>{" "}
              Grilled chicken breast or tofu with quinoa and steamed vegetables
            </ListItem>
            <ListItem>
              <ListIcon as={FaLeaf} color="green.500" />
              <Text as="span" fontWeight="bold">
                Afternoon Snack:
              </Text>{" "}
              Cottage cheese with sliced cucumber and cherry tomatoes
            </ListItem>
            <ListItem>
              <ListIcon as={FaFish} color="blue.500" />
              <Text as="span" fontWeight="bold">
                Dinner:
              </Text>{" "}
              Grilled fish with a side of sweet potato and steamed asparagus
            </ListItem>
            <ListItem>
              <ListIcon as={FaSeedling} color="green.500" />
              <Text as="span" fontWeight="bold">
                Evening Snack (Optional):
              </Text>{" "}
              A small bowl of mixed fruit
            </ListItem>
          </List>
        </Box>

        <Divider />

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Key Elements of the Diet
          </Heading>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={FaLeaf} color="green.500" />
              <Text as="span" fontWeight="bold">
                High Protein:
              </Text>{" "}
              Include lean meats, fish, eggs, and plant-based proteins like lentils and tofu for muscle repair and health.
            </ListItem>
            <ListItem>
              <ListIcon as={FaAppleAlt} color="red.500" />
              <Text as="span" fontWeight="bold">
                Antioxidants and Vitamins:
              </Text>{" "}
              Consume a variety of fruits and vegetables for essential vitamins and antioxidants.
            </ListItem>
            <ListItem>
              <ListIcon as={FaWater} color="blue.500" />
              <Text as="span" fontWeight="bold">
                Hydration:
              </Text>{" "}
              Drink plenty of water throughout the day to maintain hydration and overall health.
            </ListItem>
            <ListItem>
              <ListIcon as={FaCarrot} color="orange.500" />
              <Text as="span" fontWeight="bold">
                Avoid Processed Foods:
              </Text>{" "}
              Steer clear of processed and high-sugar foods to maintain energy levels and support skin health.
            </ListItem>
          </List>
        </Box>

        <Divider />

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Additional Tips for Overall Wellness
          </Heading>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={FaLeaf} color="green.500" />
              <Text as="span" fontWeight="bold">
                Fitness Routine:
              </Text>{" "}
              Regular activities like weight training, cardio, yoga, swimming, and running. Focus on different muscle groups.
            </ListItem>
            <ListItem>
              <ListIcon as={FaLeaf} color="green.500" />
              <Text as="span" fontWeight="bold">
                Skincare:
              </Text>{" "}
              Daily regimen: cleansing, exfoliating, moisturizing, and using high SPF sunscreen.
            </ListItem>
            <ListItem>
              <ListIcon as={FaLeaf} color="green.500" />
              <Text as="span" fontWeight="bold">
                Stress Management:
              </Text>{" "}
              Practice mindfulness and meditation to manage stress. Ensure adequate sleep.
            </ListItem>
            <ListItem>
              <ListIcon as={FaLeaf} color="green.500" />
              <Text as="span" fontWeight="bold">
                Lifestyle Discipline:
              </Text>{" "}
              Maintain a consistent and dedicated approach to diet, fitness, and overall wellness.
            </ListItem>
          </List>
        </Box>

        <Divider />

        <Box textAlign="center">
          <Image src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZm9vZHxlbnwwfHx8fDE3MTU4NDg4MjV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Healthy Food" borderRadius="md" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
