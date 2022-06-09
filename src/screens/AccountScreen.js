import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { useSelector } from 'react-redux';

const AccountScreen = () => {
  const user = useSelector((state) => state?.user.user);
  // console.log(user)

  return (
    <View style={{backgroundColor:'white', height:'100%', borderTopWidth:1}}>
      <View style={styles.profile}>
        <View style={{alignItems: 'center' , margin: 50, height: 400}}>
          <Text style={styles.name}>AccountScreen</Text>
          <Image testID='ProfileImage'  source={{uri:user.image}} style={styles.profileImage}/>
          <Text testID='ProfileName' style={[styles.name, {textDecorationLine:'underline'}]}>{user.name}</Text>
        </View>

      </View>

    </View>
  )
}

export default AccountScreen

const styles = StyleSheet.create({
  profileImage:{
    borderRadius:100,
    borderWidth: 5,
    borderColor: 'grey',
    width:200, 
    height: 200,
    flex: 3,
  },
  name:{
    flex: 1,
    marginVertical: 20,
    fontWeight: 'bold',
    fontSize: 20,
  },
})