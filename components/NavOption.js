import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

const DATA = [
    {
        id: "999",
        title: "Get a Ride",
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_869,h_489/f_auto,q_auto/products/carousel/Select.png",
        screen: "MapScreen",
    },
    {
        id: "696",
        title: "Order Food",
        image: "https://w7.pngwing.com/pngs/4/102/png-transparent-fork-and-spoon-gps-logo-take-out-online-food-ordering-delivery-restaurant-the-restaurant-door.png",
        screen: "EatScreen",
    }
]

function NavOption() {

    const navigation = useNavigation();

    const Item = ({ title, image, screen }) => (
        <TouchableOpacity
            onPress={() => navigation.navigate(screen)}
            style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
            <View>
                <Image
                    style={{ width: 120, height: 120, resizeMode: "contain" }}
                    source={{ uri: image }} />
                <Text style={tw`mt-2 text-lg font-semibold`}>{title}</Text>
                <Icon
                    style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                    name="arrowright"
                    color="white"
                    type="antdesign"
                />
            </View>
        </TouchableOpacity>


    );
    const renderItem = ({ item }) => (
        <Item title={item.title} image={item.image} screen={item.screen} />
    );
    return (
        <FlatList
            data={DATA}
            keyExtractor={item => item.id}
            horizontal
            renderItem={renderItem}
        />
    )
}

export default NavOption