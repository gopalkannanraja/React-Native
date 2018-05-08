import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ContactListItem = ({ profileImage, name, Key }) => {
    console.log('props', Key);
    return (
        <View style={styles.container} >
          <Image source={{uri:profileImage}} key={Key} style={{ width: 50, height: 50,borderRadius:25 }} />
          <Text style={{marginLeft:10}}>{name}</Text>
        </View>
      );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    flexDirection: "row",
    marginRight:10,
    marginLeft:10,
    marginBottom:10
  }
});

export default ContactListItem;