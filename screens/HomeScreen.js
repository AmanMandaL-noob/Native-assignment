import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

const menuList = [
  { id: 1, name: 'Pizza', price: '₹150', ingredients: 'Cheese, Tomato Sauce, Pepperoni, Mushrooms' },
  { id: 2, name: 'Burger', price: '₹120', ingredients: 'Beef Patty, Cheese, Lettuce, Tomato, Onion' },
  { id: 3, name: 'Fried Rice', price: '₹180', ingredients: 'Rice, Soy Sauce, Egg, Carrots, Peas, Shrimp' },
  { id: 4, name: 'Biryani', price: '₹220', ingredients: 'Rice, Chicken, Kewra Water, Onion, Garlic, Special Ingridient ' },
];

export default function HomeScreen({ navigation }) {
  const renderMenuItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('MenuDetails', { menu: item })}>
        <Text style={styles.menuItemText}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={menuList}
        renderItem={renderMenuItem}
        keyExtractor={item => item.id.toString()}
      />
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
  menuItem: {
    width: '80%',
    padding: 10,
    backgroundColor: '#eee',
    marginVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
