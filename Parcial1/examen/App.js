import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function App() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showData, setShowData] = useState(false);

  const captureData = () => {
    setShowData(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>NFLGamePass Registration</Text>
      <Text style={styles.instructions}>
        Enter your details and press "Capture" to display them.
      </Text>

      <TextInput style={styles.input} placeholder="ID" onChangeText={setId} />
      <TextInput style={styles.input} placeholder="Name" onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Email" onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Phone" onChangeText={setPhone} />

      <Button title="Capture" onPress={captureData} color="#007AFF" />

      {showData && (
        <View style={styles.outputContainer}>
          <Text style={styles.outputTitle}>Captured Data:</Text>
          <Text>ID: {id}</Text>
          <Text>Name: {name}</Text>
          <Text>Email: {email}</Text>
          <Text>Phone: {phone}</Text>
        </View>
      )}

      <Text style={styles.footer}>*Your data will be used for testing purposes only.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f4f4f4",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  instructions: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    width: "90%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: "white",
    marginBottom: 10,
  },
  outputContainer: {
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 3,
    width: "90%",
    alignItems: "center",
  },
  outputTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  footer: {
    marginTop: 20,
    fontStyle: "italic",
    textAlign: "center",
  },
});
