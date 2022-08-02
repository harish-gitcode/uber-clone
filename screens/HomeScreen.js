import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import NavOption from '../components/NavOption';

/* if we need to add custom style can use 
                        style={[tw`text-red-500`,styles.text]} or write  style={[tw`text-red-500`,{color:"purple", }]}
             */
function HomeScreen() {
    return (
        <SafeAreaView>
            <View style={tw`p-3`}>
                <Image
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode: "contain"
                    }}
                    source={{
                        uri: "https://download.logo.wine/logo/Uber/Uber-Logo.wine.png",
                    }}
                />
                <NavOption />
            </View>
        </SafeAreaView>
    );
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color: "blue",
    },
})