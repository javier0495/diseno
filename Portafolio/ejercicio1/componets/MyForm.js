import React, { useState } from 'react';
import { StyleSheet, Text, Button, View, TextInput } from 'react-native';

export default function MyForm(){
      const [text, setText] = useState('');
      const [displayText, setDisplayText] = useState('');
    
      const handlePress = () => {
        setDisplayText(text);
        setText('');
      };
    return(
          <View style={styles.container}>
              <TextInput
                style={styles.input}
                placeholder="Type Something"
                value={text}
                onChangeText={setText}
              />
              <Button title="Click Me!" onPress={handlePress} />
              <Text style={styles.resultText}>Text to Show: {displayText}</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
    },
    input: {
      width: '80%',
      height: 40,
      borderWidth: 1,
      borderColor: 'gray',
      marginBottom: 16,
      paddingLeft: 8,
    },
    resultText: {
      marginTop: 16,
      padding:16,
    },
  });