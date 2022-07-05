import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useEffect, useLayoutEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import WheatherForcastItems from "../components/WheatherForcastItems";
import { Day, Month } from "../Day-Month";
import * as Location from "expo-location";
// import GetLocation from "react-native-get-location";

const Home = () => {
  const [weather, setWeather] = useState();
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  // API link Function
  const weatherForcast = (location) =>
    `https://api.weatherapi.com/v1/forecast.json?key=5d786fa305ec469390053744220407&q=${location}&days=7`;

  //Fetching wheather data
  const fetchWeather = async () => {
    const data = await axios
      .get(weatherForcast(location))
      .catch((err) => console.log(err.message));
    setWeather(data);
  };

  // Date formatiing function
  const formatedDate = (getDate) => {
    const updatedDate = getDate.slice(0, 11);
    const d = updatedDate.split("-");
    const date = new Date(+d[0], +d[1] - 1, +d[2]);
    return date;
  };

  //Call the api function
  useLayoutEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(
        location
          ? location.coords.latitude + "," + location.coords.longitude
          : "Lahore"
      );
    })();
    // setLocationMap(
    //   location
    //     ? location.coords.latitude + "," + location.coords.longitude
    //     : "Lahore"
    // );
  }, [location]);

  useLayoutEffect(() => {
    location && fetchWeather();
  }, [location]);

  return (
    <LinearGradient
      colors={["#9887FF", "#8975FE", "#735DEF", "#6660BB"]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <SafeAreaView>
        <StatusBar style="light" />
        {weather ? (
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
                {weather.data.location.name.length > 13
                  ? weather.data.location.name.slice(0, 13) + "..."
                  : weather.data.location.name}
              </Text>
              <Text style={{ textAlign: "center", color: "#ffff" }}>
                {weather.data.current.condition.text}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 120,
                  }}
                >
                  <Text style={{ fontSize: 90, color: "#ffff" }}>
                    {weather.data.current.temp_c.toFixed(0)}
                  </Text>
                  <Text
                    style={{ fontSize: 65, color: "#ffff", marginBottom: 22 }}
                  >
                    °
                  </Text>
                </View>
                <View style={{ height: 120 }}>
                  <Image
                    source={{
                      uri: "https:" + weather.data.current.condition.icon,
                    }}
                    style={{ height: 120, width: 120 }}
                  />
                </View>
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
                  {weather.data.current.wind_kph} kph
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
                  {weather.data.current.humidity}%
                </Text>
              </View>
            </View>
            <Text
              style={{ color: "#ffff", paddingTop: "10%", textAlign: "center" }}
            >
              {Day[
                formatedDate(weather.data.current.last_updated).getDay() - 1
              ] +
                " " +
                formatedDate(weather.data.current.last_updated).getDate() +
                ", " +
                Month[
                  formatedDate(weather.data.current.last_updated).getMonth()
                ]}
            </Text>

            <View
              style={{
                backgroundColor: "#ffff",
                borderRadius: 25,
                padding: "6%",
                marginTop: 15,
                height: "56%",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  marginVertical: "4%",
                }}
              >
                Future weather
              </Text>
              <ScrollView>
                {weather.data.forecast.forecastday.map((item) => (
                  <WheatherForcastItems item={item} key={item.date_epoch} />
                ))}
              </ScrollView>
            </View>
          </View>
        ) : (
          <View
            style={{
              height: "100%",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <ActivityIndicator size="large" color="#ffff" />
          </View>
        )}
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
