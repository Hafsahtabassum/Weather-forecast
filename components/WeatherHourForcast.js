import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Image, Text, TouchableOpacity, View } from "react-native";

const WheatherForcastItems = ({ item }) => {
  return (
    <TouchableOpacity key={item.time}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 10,
          paddingHorizontal: 6,
          width: 287,
        }}
      >
        <LinearGradient
          colors={["#e8e8e8", "transparent"]}
          style={{
            borderRadius: 100,
            padding: 11,
          }}
        >
          <Image
            source={{
              uri: "https:" + item.condition.icon,
            }}
            style={{ height: 53, width: 53 }}
          />
        </LinearGradient>
        <View
          style={{
            flexDirection: "row",
            borderColor: "rgb(0, 0, 0, 0.5)",
            borderWidth: 0.5,
            borderRadius: 50,
            width: "63%",
            justifyContent: "space-between",
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "50%",
              paddingHorizontal: 5,
            }}
          >
            <Text style={{ fontSize: 30, color: "#3a2cb7" }}>
              {item.temp_c.toFixed(0)}
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: "#3a2cb7",
                alignSelf: "flex-start",
                marginTop: 20,
              }}
            >
              °
            </Text>
          </View>
          <View style={{ justifyContent: "center", width: "50%" }}>
            <Text>
              {item.time.slice(11)} {item.time.slice(11, 13) > 12 ? "PM" : "AM"}
            </Text>
            {item.chance_of_rain > 0 && (
              <Text>
                <Entypo name="drop" size={14} color="black" />
                {item.chance_of_rain}%
              </Text>
            )}
            {
              (item.chance_of_rain =
                0 && item.chance_of_snow > 0 ? (
                  <Text>
                    <FontAwesome5 name="snowflake" size={14} color="black" />
                    {item.chance_of_snow}%
                  </Text>
                ) : (
                  <></>
                ))
            }
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default WheatherForcastItems;
