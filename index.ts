import { registerRootComponent } from 'expo';
import { ExpoRoot } from 'expo-router';
import React from 'react';

// Wrap ExpoRouter in a React component
const App = () => React.createElement(ExpoRoot);

// Register the App component
registerRootComponent(App);
