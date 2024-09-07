import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Setting 1</Text>
        {/* Add a switch or another UI element here */}
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Setting 2</Text>
        {/* Add a switch or another UI element here */}
      </View>
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  settingText: {
    fontSize: 18,
  },
  saveButton: {
    backgroundColor: '#3498db',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
  },
  saveButtonText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default SettingsScreen;
