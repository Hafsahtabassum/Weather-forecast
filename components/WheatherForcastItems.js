import { Image, Text, TouchableOpacity, View } from "react-native";

const WheatherForcastItems = () => {
  return (
    <TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 10,
          paddingHorizontal: 5,
        }}
      >
        <Image
          source={require("../assets/27.png")}
          style={{ height: 75, width: 75 }}
        />
        <View
          style={{
            flexDirection: "row",
            borderColor: "#111",
            borderWidth: 0.5,
            borderRadius: 50,
            //   paddingHorizontal: 30,
            width: "63%",
            justifyContent: "space-between",
            //   paddingVertical: 15,
            paddingHorizontal: 35,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: 30, color: "#3a2cb7" }}>30</Text>
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
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text>Monday</Text>
            <Text>5 July</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default WheatherForcastItems;
