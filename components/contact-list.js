import React, { Component } from "react"
import { View, Text } from "react-native"

class ContactList extends Component{
	render(){
		return(
			<View style={styles.contactList}>
				{this.props.children}
			</View>
		)
	}
}

const styles={
	contactList:{
		
	}
}
export default ContactList
