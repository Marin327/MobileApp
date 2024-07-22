import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';

const { Value, timing } = Animated;

const HomeScreen = ({ navigation }) => {
    const opacity = new Value(0);

    const fadeIn = () => {
        timing(opacity, {
            toValue: 1,
            duration: 500,
            easing: Easing.inOut(Easing.ease),
        }).start();
    };

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.background, { opacity }]} />

            <Text style={styles.title}>Welcome to Home Screen!</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    fadeIn();
                    navigation.navigate('Details');
                }}
            >
                <Text style={styles.buttonText}>Go to Details Screen</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    background: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#3498db',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#ffffff',
        zIndex: 1,
    },
    button: {
        backgroundColor: '#2980b9',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginTop: 20,
    },
    buttonText: {
        fontSize: 18,
        color: '#ffffff',
        fontWeight: 'bold',
    },
});

export default HomeScreen;