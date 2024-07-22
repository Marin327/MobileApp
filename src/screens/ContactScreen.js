import React from 'react';
import { Linking, StyleSheet, Text, View } from 'react-native';

const ContactScreen = () => {
    const phoneNumber = '+1234567890';
    const emailAddress = 'example@email.com';
    const websiteUrl = 'https://www.example.com';

    const handlePhonePress = () => {
        Linking.openURL(`tel:${phoneNumber}`);
    };

    const handleEmailPress = () => {
        Linking.openURL(`mailto:${emailAddress}`);
    };

    const handleWebsitePress = () => {
        Linking.openURL(websiteUrl);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contact Screen</Text>

            <View style={styles.contactInfo}>
                <Text style={styles.label}>Phone:</Text>
                <Text style={styles.info} onPress={handlePhonePress}>
                    {phoneNumber}
                </Text>

                <Text style={[styles.label, { marginTop: 10 }]}>Email:</Text>
                <Text style={styles.info} onPress={handleEmailPress}>
                    {emailAddress}
                </Text>

                <Text style={[styles.label, { marginTop: 10 }]}>Website:</Text>
                <Text style={styles.info} onPress={handleWebsitePress}>
                    {websiteUrl}
                </Text>
            </View>
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
    contactInfo: {
        alignItems: 'flex-start',
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    info: {
        fontSize: 16,
        color: 'blue',
        textDecorationLine: 'underline',
        marginBottom: 10,
    },
});

export default ContactScreen;