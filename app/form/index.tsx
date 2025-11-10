import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { saveFormData } from "../../src/store/slices/formSlice";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  mobile: yup
    .string()
    .matches(/^[0-9]{10}$/, "Mobile must be 10 digits")
    .required("Mobile is required"),
  address: yup.string().optional(),
});

export default function FormScreen() {
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    dispatch(saveFormData(data));
    router.push("/");
    console.log("Dispatched Form Data:", data);
  };

  return (
    <View style={styles.container}>
      <Text>Name</Text>
      <Controller
        control={control}
        name="name"
        render={({ field: { value, onChange } }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors.name && <Text style={styles.error}>{errors.name.message}</Text>}

      <Text>Email</Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { value, onChange } }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            keyboardType="email-address"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

      <Text>Mobile</Text>
      <Controller
        control={control}
        name="mobile"
        render={({ field: { value, onChange } }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter your mobile number"
            keyboardType="numeric"
            maxLength={10}
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors.mobile && (
        <Text style={styles.error}>{errors.mobile.message}</Text>
      )}

      <Text>Address</Text>
      <Controller
        control={control}
        name="address"
        render={({ field: { value, onChange } }) => (
          <TextInput
            style={styles.textarea}
            placeholder="Enter your address (optional)"
            multiline
            value={value}
            onChangeText={onChange}
          />
        )}
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: {
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
  },
  textarea: {
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    height: 80,
    marginTop: 5,
    marginBottom: 10,
  },
  error: { color: "red", marginBottom: 8 },
});
