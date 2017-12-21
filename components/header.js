import React, { Component } from "react"
import { View, Text } from "react-native"

class Header extends Component{
	render(){
		return(
			<View style={styles.header}> 
				<Text style={styles.text}> Header </Text>
			</View>
		)
	}
}

const styles = {
	header:{
		justifyContent:"center",
		alignItems:"center",
		height:"20%",
		marginTop:"5%",
		marginBottom:"2%",
		shadowOffset:{width:0,height:3},
		shadowColor:"#000",
		shadowOpacity:0.4
	},
	text:{
		fontSize:22
	}
}

export default Header

