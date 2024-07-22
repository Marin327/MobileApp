import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Calendar } from 'react-native-calendars';

const CalendarScreen = () => {
    const [selectedDate, setSelectedDate] = useState('');

    const handleDayPress = (day) => {
        setSelectedDate(day.dateString);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Calendar Screen</Text>
            <Text style={styles.selectedDate}>
                {selectedDate ? `Selected date: ${selectedDate}` : 'Select a date'}
            </Text>
            <Calendar
                style={styles.calendar}
                onDayPress={handleDayPress}
                theme={{
                    selectedDayBackgroundColor: 'blue',
                    selectedDayTextColor: 'white',
                    todayTextColor: 'blue',
                    arrowColor: 'blue',
                }}
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
    selectedDate: {
        fontSize: 18,
        marginBottom: 10,
    },
    calendar: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        marginTop: 20,
        width: '100%',
    },
});

export default CalendarScreen;