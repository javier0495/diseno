import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function App() {
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [mostrarDatos, setMostrarDatos] = useState(false);

  const capturarDatos = () => {
    setMostrarDatos(true);
  };

  return (
    <View style={{ padding: 20, marginTop: 50 }}>
      <Text>Formulario de Registro</Text>

      <TextInput
        placeholder="ID"
        onChangeText={setId}
        style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
      />
      <TextInput
        placeholder="Nombre"
        onChangeText={setNombre}
        style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
      />
      <TextInput 
        placeholder="Email" 
        onChangeText={setEmail} 
        keyboardType="email-address" 
        style={{ borderWidth: 1, marginBottom: 10, padding: 5 }} 
      />
      <TextInput 
        placeholder="Teléfono" 
        onChangeText={setPhone} 
        keyboardType="phone-pad" 
        style={{ borderWidth: 1, marginBottom: 10, padding: 5 }} 
      />

      <Button title="Capturar" onPress={capturarDatos} />

      {mostrarDatos && (
        <View style={{ marginTop: 20 }}>
          <Text>Datos ingresados:</Text>
          <Text>ID: {id}</Text>
          <Text>Nombre: {nombre}</Text>
          <Text>Email: {email}</Text>
          <Text>Teléfono: {phone}</Text>
        </View>
      )}
    </View>
  );
}
