import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation, points, setPoints }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.pointsText}>Current Points: {points}</Text>
      
      {/* Custom Touchable Button for Win */}
      <TouchableOpacity
        style={styles.winButton}
        onPress={() => {
          setPoints(points + 100);
          navigation.navigate('Win');
        }}
      >
        <Text style={styles.buttonText}>Win</Text>
      </TouchableOpacity>
      
      {/* Custom Touchable Button for Lose */}
      <TouchableOpacity
        style={styles.loseButton}
        onPress={() => {
          setPoints(points - 50);
          alert('You lose 50 points!');
        }}
      >
        <Text style={styles.buttonText}>Lose</Text>
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
  winButton: {
    backgroundColor: '#4CAF50',  // Green color for win
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: 200,
    alignItems: 'center',
  },
  loseButton: {
    backgroundColor: '#F44336',  // Red color for lose
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

export default HomeScreen;
