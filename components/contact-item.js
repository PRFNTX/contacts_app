import React, { Component } from "react"
import { View, Text, Image, Button } from "react-native"


class ContactItem extends Component{
	render(){
		return(
			<View style={styles.contactItem} >
				<Image style={styles.image} source={require("../icon.png")}/>
				<View style={styles.contactDetail}>
					<View style={styles.contactText}>
						<Text >Name</Text>
						<Text style={styles.contactInfo} > Detail </Text>
					</View>
					<Text > ED </Text> 
				</View>
			</View>
		)
	}
}

const styles={
	contactDetail:{
		alignContent:"center",
		width:"85%",
		flexDirection:"row",
		justifyContent:"space-between",
	},
	contactItem:{
		height:40,
		flexDirection:"row",
	},
	contactText:{
		height:"100%",
		flexDirection:"column",
		justifyContent:'flex-start',
	},
	contactInfo:{
		fontSize:10,
		fontColor:"#ddd",
		marginLeft:5,
	},
	image:{
		height:"90%",
		width:"9%",
		marginRight:"1%",
		marginLeft:"1%",
	}
}
export default ContactItem
