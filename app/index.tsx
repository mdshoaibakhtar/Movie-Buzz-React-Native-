import { useFormData } from "@/src/hooks/useFormData";
import { useLanguage } from "@/src/hooks/useLanguage";
import { useProfile } from "@/src/hooks/useProfile";
import { useRouter } from "expo-router";
import { useTranslation } from "react-i18next";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Home() {
  const data = useFormData();
  console.log(data);
  const router = useRouter();
  const { name, updateName } = useProfile();
  const { t } = useTranslation();
  const { changeLanguage } = useLanguage();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={styles.title}>{t("welcome")}</Text>
      {/* <Button title="Hindi" onPress={() => changeLanguage("hi")} />
      <Button title="English" onPress={() => changeLanguage("en")} />
      <Text style={{ marginVertical: 20 }}>Stored Name: {data.name}</Text> */}
      <Button title="Go to Form" onPress={() => router.push("/form")} />

      {/* <Text>Profile Name</Text>

      <TextInput
        value={name}
        onChangeText={updateName}
        style={{ borderWidth: 1, padding: 8, marginVertical: 10 }}
      />

      <Text style={{ marginVertical: 20 }}>Profile Name: {name}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
});
