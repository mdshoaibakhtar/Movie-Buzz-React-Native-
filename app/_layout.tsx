import i18n from "@/src/i18n";
import { Stack } from "expo-router";
import { Button } from "react-native";
import { Provider } from "react-redux";
import { store } from "../src/store";

export default function RootLayout() {
  const { changeLanguage } = useLang;
  console.log("Layout rendered", i18n.language);
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "Home",
            headerShown: true,
            headerRight: () => (
              <Button
                title={i18n.language === "en" ? "Lang" : "Lang"}
                onPress={() =>
                  changeLanguage(i18n.language == "en" ? "hi" : "en")
                }
              />
            ),
          }}
        />

        <Stack.Screen
          name="form/index"
          options={{
            title: "Form",
            headerShown: true,
            // headerRight: () => <LanguageDropdown />,
          }}
        />
      </Stack>
    </Provider>
  );
}
