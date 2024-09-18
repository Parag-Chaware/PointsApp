import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const WinScreen = ({ navigation, points }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.pointsText}>Congratulations! You now have {points} points!</Text>
      
      {/* Back to Home button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  pointsText: {
    fontSize: 24,
    marginBottom: 30,
    fontWeight: 'bold',
    color: '#333',
  },
  backButton: {
    backgroundColor: '#2196F3',  // Blue for back button
    padding: 15,
    borderRadius: 10,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default WinScreen;
