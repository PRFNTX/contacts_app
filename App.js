/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Header from "./components/header"
import ContactList from "./components/contact-list"
import ContactItem from "./components/contact-item"

export default class App extends Component<{}> {
  render() {
    return (
		<View>
			<Header/>
			<ContactList>
				<ContactItem/>
				<ContactItem/>
				<ContactItem/>
				<ContactItem/>
			</ContactList>
			
			
			{/*search contacts*/}
				{/* text input and button */}
			{/* component for new contact*/}
				{/* top right align add button */}

			{/* view for contacts list*/}
				{/* contacts component */}
					{/* name, image/icon */}

			{/* on press go do summary page */}
				{/* attempt if turned show summar on left and contact list on right. */}
			
		</View>
    );
  }
}

const styles={
	mainView:{
		flexDirection:"column"
	}
}

