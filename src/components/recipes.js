import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function RecipeDetail(props) {
  const navigation = useNavigation();
  const recipe = props.route.params.recipe;

  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <View>
      <View testID="imageContainer">
        <Image
          source={{ uri: recipe.recipeImage }}
          style={styles.recipeImage}
        />
      </View>

      <View>
        <Pressable onPress={() => navigation.goBack()}>
          <Text>Back</Text>
        </Pressable>
        <Pressable onPress={toggleFavorite}>
          <Ionicons
            name={isFavorite ? "heart" : "heart-outline"}
            size={24}
            color="red"
          />
        </Pressable>
      </View>

      <View testID="recipeTitle">
        <Text>{recipe.name}</Text>
      </View>

      <View testID="recipeCategory">
        <Text>{recipe.category}</Text>
      </View>

      <View testID="miscContainer">
        <Ionicons name="time-outline" size={20} />
        <Ionicons name="restaurant-outline" size={20} />
        <Ionicons name="flame-outline" size={20} />
        <Ionicons name="list-outline" size={20} />
      </View>

      <View testID="sectionContainer">
        <Text>Ingredients</Text>
        <View testID="ingredientsList">
          {recipe.ingredients.map((ingredient, index) => (
            <View key={index}>
              <Text>{`${ingredient.name} - ${ingredient.measure}`}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Instructions</Text>
        <Text style={styles.instructionsText}>
          {recipe.recipeInstructions}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  recipeImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 10,
  },
  instructionsText: {
    marginTop: 5,
    fontSize: 14,
  },
});
