import {
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  NativeEventEmitter,
  FlatList,
  Alert,
} from "react-native";

import React, {useState} from 'react'
import { Fragment } from "react";
import { styles } from "./styles";
import { Participant } from "../../../components/Participant";
export function Home() {


  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('')

  function handleParticipantAdd() {
    if(participantName === "") return 
      if(participants.includes(participantName)) {
        return Alert.alert("Já existe esse participante na lista.")
      }

      setParticipants(prevState => [...prevState, participantName])
      setParticipantName('')
  }

  function handleParticipantRemove(name: string) {

    // return console.log(participants.filter(participant => participant != name))
    

    Alert.alert("Remover", `Remover o participante ${name}`, [
      {
        text: "Sim",
        onPress: ()=>  setParticipants(prevState=> prevState.filter(participant => participant !== name))
        // onPress: ()=> Alert.alert("Deletado")
      },
      {
        text:"Não",
        style:'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Terça, 04 de Abril de 2023</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          // keyboardType="email-address"
          onChangeText={e => setParticipantName(e)}
          value={participantName}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({item})=> (
          <Participant
          key={item}
          name={item}
          onRemove={()=> handleParticipantRemove(item)}
      />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={()=> (
          <Text style={styles.listEmptyText}>
            Adicione participantes a sua lista
          </Text>
        )}
      />
      
    </View>
  );
  
}
