import {
  MaskedViewBase,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import WheatherForcastItems from "../components/WheatherForcastItems";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import GetLocation from "react-native-get-location";

const Home = () => {
  const loca = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then((location) => {
        location ? console.log(location) : console.log("wait");
      })
      .catch((error) => {
        const { code, message } = error;
        console.warn(code, message);
      });
  };

  useEffect(() => {
    loca();
  }, []);

  return (
    <LinearGradient
      colors={["#9887FF", "#8975FE", "#735DEF", "#6660BB"]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <SafeAreaView>
        <StatusBar style="light" />
        <View style={{ width: "90%", alignSelf: "center", paddingTop: "5%" }}>
          <View style={{ alignSelf: "center" }}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 35,
                fontWeight: "bold",
                color: "#ffff",
              }}
            >
              Lahore
              {/* <Ionicons name="location-sharp" size={30} color="#ffff" /> */}
            </Text>
            <Text style={{ textAlign: "center", color: "#ffff" }}>
              Chance of Rain: 3%
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 100, color: "#ffff" }}>30</Text>
              <Text style={{ fontSize: 65, color: "#ffff" }}>°</Text>
            </View>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text
                style={{ textAlign: "center", color: "#ffff", opacity: 0.6 }}
              >
                Wind
              </Text>
              <Text
                style={{ textAlign: "center", color: "#ffff", fontSize: 18 }}
              >
                9 kmh
              </Text>
            </View>
            <View>
              <Text
                style={{ textAlign: "center", color: "#ffff", opacity: 0.6 }}
              >
                Humidit
              </Text>
              <Text
                style={{ textAlign: "center", color: "#ffff", fontSize: 18 }}
              >
                79%
              </Text>
            </View>
          </View>
          <Text
            style={{ color: "#ffff", paddingTop: "10%", textAlign: "center" }}
          >
            Monday 4,July
          </Text>

          <View
            style={{
              backgroundColor: "#ffff",
              borderRadius: 25,
              padding: "6%",
              marginTop: 15,
              height: "55%",
            }}
          >
            <Text
              style={{ fontWeight: "bold", fontSize: 20, marginVertical: "5%" }}
            >
              Future weather
            </Text>
            <ScrollView>
              <WheatherForcastItems />
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
