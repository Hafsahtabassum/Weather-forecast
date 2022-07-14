import { LinearGradient } from "expo-linear-gradient";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Day, Month } from "../Day-Month";

const WheatherForcastItems = ({ item }) => {
  const d = item.date.split("-");
  const date = new Date(+d[0], +d[1] - 1, +d[2]);
  return (
    <TouchableOpacity key={item.date_epoch}>
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
              uri: "https:" + item.day.condition.icon,
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
              {item.day.maxtemp_c.toFixed(0)}
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
            <Text>{Day[date.getDay() - 1]}</Text>
            <Text>
              {item.date.slice(8, 10)} {Month[date.getMonth()]}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default WheatherForcastItems;
