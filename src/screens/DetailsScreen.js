import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const DetailsScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Details Screen</Text>

            <View style={styles.detailsContainer}>
                <Image
                    source={{ uri: 'https://via.placeholder.com/200' }}
                    style={styles.image}
                />

                <Text style={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                    condimentum urna felis, vitae mollis felis fermentum quis. Fusce
                    elementum massa eu elit dictum, vel eleifend nulla viverra.
                </Text>

                <Text style={styles.description}>
                    Vivamus euismod dolor id est convallis, in fermentum lorem convallis.
                    Cras ullamcorper, mauris nec malesuada sagittis, leo nunc commodo
                    felis, a sagittis mi sem eget sem.
                </Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    detailsContainer: {
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 20,
    },
    description: {
        textAlign: 'justify',
        marginBottom: 15,
        fontSize: 16,
        lineHeight: 24,
    },
});

export default DetailsScreen;