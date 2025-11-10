import { Picker } from "@react-native-picker/picker";
import { StyleSheet, View } from "react-native";
import i18n from "../i18n";

export default function LanguageDropdown() {
  return (
    <View style={styles.wrapper}>
      <Picker
        selectedValue={i18n.language}
        style={styles.picker}
        dropdownIconColor="#000"
        onValueChange={(lang) => i18n.changeLanguage(lang)}
      >
        <Picker.Item label="English" value="en" />
        <Picker.Item label="हिन्दी" value="hi" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: 120,
    justifyContent: "center",
    alignItems: "center",
  },
  picker: {
    width: 120,
    height: 40,
  },
});
