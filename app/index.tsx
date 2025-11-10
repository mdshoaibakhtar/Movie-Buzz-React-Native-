import { useFormData } from "@/src/hooks/useFormData";
import { useProfile } from "@/src/hooks/useProfile";
import { useRouter } from "expo-router";
import { Button, Text, TextInput, View } from "react-native";

export default function Home() {
  const data = useFormData();
  console.log(data);
  const router = useRouter();
  const { name, updateName } = useProfile();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home</Text>
      <Text style={{ marginVertical: 20 }}>Stored Name: {data.name}</Text>
      <Button title="Go to Form" onPress={() => router.push("/form")} />

      <Text>Profile Name</Text>

      <TextInput
        value={name}
        onChangeText={updateName}
        style={{ borderWidth: 1, padding: 8, marginVertical: 10 }}
      />

      <Text style={{ marginVertical: 20 }}>Profile Name: {name}</Text>
    </View>
  );
}
