import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase.config';

export default function ListadoScreen({ navigation }) {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'players'), snapshot => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPlayers(data);
    });
    return () => unsub();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={players}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Detalle', { player: item })}
          >
            <Image source={{ uri: item.foto }} style={styles.foto} />
            <View style={styles.info}>
              <Text style={styles.nombre}>{item.nombre} {item.apellidos}</Text>
              <Text style={styles.detalle}>{item.posicion} · {item.edad} años · {item.altura}m</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1a1a2e' },
  card: { flexDirection: 'row', padding: 12, borderBottomWidth: 1, borderBottomColor: '#333', alignItems: 'center' },
  foto: { width: 60, height: 60, borderRadius: 30, marginRight: 12 },
  info: { flex: 1 },
  nombre: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  detalle: { color: '#aaa', fontSize: 13, marginTop: 2 },
});