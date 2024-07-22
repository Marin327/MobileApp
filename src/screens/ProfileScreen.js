import { FontAwesome5 } from '@expo/vector-icons'; // Използваме FontAwesome5 за икони
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Профил на Марин Маринов</Text>
            <Text style={styles.text}>Телефонен номер: 0897082919</Text>

            <View style={styles.socialContainer}>
                <TouchableOpacity style={styles.socialButton}>
                    <FontAwesome5 name="facebook" size={24} color="#4267B2" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                    <FontAwesome5 name="instagram" size={24} color="#C13584" />
                </TouchableOpacity>
                {/* Можете да добавите и други икони за различни социални мрежи */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        marginBottom: 10,
    },
    socialContainer: {
        flexDirection: 'row',
        marginTop: 20,
    },
    socialButton: {
        marginHorizontal: 10,
    },
});

export default ProfileScreen;