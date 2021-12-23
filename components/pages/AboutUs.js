import React, {useEffect, useState} from "react";
import {Text, View} from "react-native";
import axios from "axios";
import {Icon} from "react-native-elements";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function AboutUsTab() {
    const [HolidayData, setHolidayData] = useState([]);
    const [Available, SetAvailable] = useState(false);

    function getHolidayData() {
        axios
            .get(
                "https://opendata.rijksoverheid.nl/v1/sources/rijksoverheid/infotypes/schoolholidays/schoolyear/2021-2022?output=json"
            )
            .then((res) => {
                const data = res.data;
                setHolidayData(data);
                SetAvailable(true);
            });
    }

    useEffect(() => {
        getHolidayData();
    }, []);
    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text>Over deze app!</Text>
            <Text>Deze app is met een hoop liefde gemaakt door Tiemco Meernik, student Software Development aan het
                Deltion College te Zwolle.
            </Text>
            <MaterialCommunityIcons name="alert" size={26}/>
            {Available ? (
                    <Text>{HolidayData.notice.replace('&sup1;', "")}</Text>
                ) :
                (
                    <Text>ERROR</Text>
                )}
        </View>
    );
}
