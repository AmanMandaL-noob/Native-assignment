import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function MenuDetailsScreen({ route }) {
  const { menu } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.menuName}>{menu.name}</Text>
      <Text style={styles.menuPrice}>{menu.price}</Text>
      <Text style={styles.menuIngredients}>{menu.ingredients}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  menuName: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  menuPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  menuIngredients: {
    fontSize: 16,
  },
});
