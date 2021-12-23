import React, {useState} from "react";
import {Text, View} from "react-native";
import {Picker} from "@react-native-picker/picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SettingsTab() {
    const [Region, setRegion] = useState(getRegion);
    const setNewRegion = async (region) => {
        setRegion(region);
        try {
            await AsyncStorage.setItem("Region", region);
        } catch (e) {
            console.log(e);
        }
        console.log(region);
    };
    const getRegion = async () => {
        let region
        try {
            region = await AsyncStorage.getItem("Region");
        } catch (e) {
            console.log(e);
        }
        setRegion(region);
    };
    getRegion();
    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text>
                Instellingen
            </Text>
            <Text>Klopt je vakantieregio niet of wil je een andere regio bekijken? Hier kun je de vakantieregio
                aanpassen!</Text>
            <View style={{width: 150, borderWidth: 1, borderColor: "pink", borderRadius: 4,}}>

                <Picker selectedValue={Region} onValueChange={(itemValue, itemIndex) => setNewRegion(itemValue)}>
                    <Picker.Item label="Noord" value="noord"/>
                    <Picker.Item label="Midden" value="midden"/>
                    <Picker.Item label="Zuid" value="zuid"/>
                </Picker>
            </View>

        </View>
    );
}
