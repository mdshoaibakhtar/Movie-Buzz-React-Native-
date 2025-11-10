import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "../src/store";

export default function RootLayout() {
  console.log(i18n.language);
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "Home",
            headerShown: true,
            // headerRight: () => <LanguageDropdown />,
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
