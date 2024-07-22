import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

const SearchScreen = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    // Функция за симулиране на търсене
    const handleSearch = () => {
        // Тук може да имате логика за реално търсене към външен източник
        // В примера просто симулираме търсене с няколко фиктивни резултата
        const results = [
            { id: '1', title: 'Резултат 1' },
            { id: '2', title: 'Резултат 2' },
            { id: '3', title: 'Резултат 3' },
            { id: '4', title: 'Резултат 4' },
            { id: '5', title: 'Резултат 5' },
        ];
        setSearchResults(results);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Въведете търсене"
                value={searchQuery}
                onChangeText={text => setSearchQuery(text)}
                onSubmitEditing={handleSearch}
            />

            <FlatList
                style={styles.list}
                data={searchResults}
                renderItem={({ item }) => (
                    <View style={styles.resultItem}>
                        <Text>{item.title}</Text>
                    </View>
                )}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 20,
        borderRadius: 8,
    },
    list: {
        width: '100%',
    },
    resultItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});

export default SearchScreen;