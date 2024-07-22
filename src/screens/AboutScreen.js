import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const AboutScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>About Screen</Text>

            <View style={styles.contentContainer}>
                <Image
                    source={{ uri: 'https://via.placeholder.com/200' }}
                    style={styles.image}
                />

                <Text style={styles.paragraph}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                    condimentum urna felis, vitae mollis felis fermentum quis. Fusce
                    elementum massa eu elit dictum, vel eleifend nulla viverra. Vivamus
                    euismod dolor id est convallis, in fermentum lorem convallis. Cras
                    ullamcorper, mauris nec malesuada sagittis, leo nunc commodo felis,
                    a sagittis mi sem eget sem. Nulla vel ex eget lectus commodo
                    tincidunt. Aenean dictum vestibulum arcu at luctus. Vestibulum ante
                    ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                    Curae; Quisque at ultricies velit.
                </Text>

                <Text style={styles.paragraph}>
                    Phasellus id sollicitudin sem. Ut congue, justo sit amet hendrerit
                    ultricies, libero felis elementum urna, eget feugiat magna libero
                    vel felis. Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia Curae; Curabitur congue tortor sit amet
                    dui dictum, sit amet gravida nisl ultricies. Nulla facilisi. In hac
                    habitasse platea dictumst. Nam in eros et eros dapibus mollis ac nec
                    nulla. In lacinia justo sed leo dapibus consectetur. Integer aliquam
                    ex ac pretium. In sit amet nunc ac mi commodo mollis. Mauris id
                    risus sit amet magna dictum rutrum a eget est.
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
    contentContainer: {
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 20,
    },
    paragraph: {
        textAlign: 'justify',
        marginBottom: 15,
        fontSize: 16,
        lineHeight: 24,
    },
});

export default AboutScreen;