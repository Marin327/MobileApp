import React from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native';

const GalleryScreen = () => {
    const images = [
        { id: '1', uri: 'https://via.placeholder.com/300' },
        { id: '2', uri: 'https://via.placeholder.com/300' },
        { id: '3', uri: 'https://via.placeholder.com/300' },
        { id: '4', uri: 'https://via.placeholder.com/300' },
        { id: '5', uri: 'https://via.placeholder.com/300' },
    ];

    const renderItem = ({ item }) => (
        <Image source={{ uri: item.uri }} style={styles.image} resizeMode="cover" />
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Gallery Screen</Text>
            <FlatList
                data={images}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

const { width } = Dimensions.get('window');
const itemMargin = 10;
const itemSize = (width - itemMargin * 3) / 2;

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
        alignItems: 'center',
    },
    image: {
        width: itemSize,
        height: itemSize,
        margin: itemMargin,
        borderRadius: 10,
    },
});

export default GalleryScreen;