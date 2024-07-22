import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

const FavoritesScreen = () => {
    const [favorites, setFavorites] = useState([
        { id: '1', title: 'Favorite Item 1' },
        { id: '2', title: 'Favorite Item 2' },
        { id: '3', title: 'Favorite Item 3' },
        { id: '4', title: 'Favorite Item 4' },
        { id: '5', title: 'Favorite Item 5' },
    ]);

    const renderFavoriteItem = ({ item }) => (
        <TouchableOpacity style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Favorites Screen</Text>
            <FlatList
                data={favorites}
                renderItem={renderFavoriteItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    list: {
        width: '100%',
    },
    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    itemTitle: {
        fontSize: 18,
    },
});

export default FavoritesScreen;