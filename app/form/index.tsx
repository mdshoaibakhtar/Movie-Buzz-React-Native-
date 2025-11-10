import { Controller, useForm } from "react-hook-form";
import { Button, Text, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import { setName } from "../../src/store/slices/userSlice";

export default function FormScreen() {
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm({ defaultValues: { name: "" } });

  const onSubmit = (data: any) => {
    dispatch(setName(data.name));
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text>Name</Text>
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={{ borderWidth: 1, marginBottom: 12, padding: 8 }}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      <Button title="Save" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
