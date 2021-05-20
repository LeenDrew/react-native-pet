import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from '../screens/Feed';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Navbar() {
	return (
		<NavigationContainer>
			<Tabs />
		</NavigationContainer>
	);
}

const BottomTab = createBottomTabNavigator();

function Tabs() {
	return (
		<BottomTab.Navigator
			initialRouteName="Home"
			tabBarOptions={{
				activeTintColor: '#A8CEC6',
			}}
		>
			<BottomTab.Screen
				name="Feed"
				component={Feed}
				options={{
					tabBarIcon: ({ color }) => <AntDesign name="appstore-o" size={24} color={color} />,
				}}
			/>
			<BottomTab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarIcon: ({ color }) => <FontAwesome5 name="carrot" size={24} color={color} />,
				}}
			/>
			<BottomTab.Screen
				name="Profile"
				component={Profile}
				options={{
					tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={color} />,
				}}
			/>
		</BottomTab.Navigator>
	);
}
