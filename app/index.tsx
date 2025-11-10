import { Link } from "expo-router";
import { Text, View } from "react-native";
import { useUser } from "../src/hooks/useUser";

export default function Home() {
  const name = useUser();
  const a = "bad commit"
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home</Text>
      <Text style={{ marginVertical: 20 }}>Stored Name: {name}</Text>
      <Link href="/form">Go to Form</Link>
    </View>
  );
}
