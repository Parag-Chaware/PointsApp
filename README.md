# PointsApp - React Native Application

This is a simple React Native application built using **Expo** to track points based on user actions. The app allows the user to gain or lose points depending on whether they select "Win" or "Lose."

## Features

- Navigate between screens using React Navigation.
- Update points dynamically when users select "Win" or "Lose."
- Points increase by 100 for each "Win" and decrease by 50 for each "Lose."

## Screens

1. **Home Screen**: Displays the current points and provides two buttons: **Win** and **Lose**.
   - **Win**: Increases the points by 100 and navigates to a new screen.
   - **Lose**: Decreases the points by 50 and stays on the same screen with updated points.

2. **Win Screen**: Displays the updated points after selecting "Win" and provides a button to navigate back to the Home Screen.

## Technologies Used

- React Native (via Expo)
- React Navigation

## Prerequisites

Before you begin, ensure you have installed the following:

- **Node.js** (>=12.x) & **npm**
- **Expo CLI**

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/Parag-Chaware/PointsApp.git
