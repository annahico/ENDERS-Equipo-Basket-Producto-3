import React, { useState } from 'react';
import {
  View, Text, Image, ScrollView, TouchableOpacity,
  Modal, StyleSheet, Dimensions
} from 'react-native';

const imageMap = {
  'assets/images/jugador1.png': require('../assets/images/jugador1.png'),
  'assets/images/jugador2.png': require('../assets/images/jugador2.png'),
  'assets/images/jugador3.png': require('../assets/images/jugador3.png'),
  'assets/images/jugador4.png': require('../assets/images/jugador4.png'),
  'assets/images/jugador5.png': require('../assets/images/jugador5.png'),
  'assets/images/jugador6.png': require('../assets/images/jugador6.png'),
  'assets/images/jugador7.png': require('../assets/images/jugador7.png'),
  'assets/images/jugador8.png': require('../assets/images/jugador8.png'),
  'assets/images/jugador9.png': require('../assets/images/jugador9.png'),
  'assets/images/jugador10.png': require('../assets/images/jugador10.png'),
};

export default function DetalleScreen({ route, navigation }) {
  const { player } = route.params;
  const [zoomVisible, setZoomVisible] = useState(false);

  const fotoSource = imageMap[player.foto] || { uri: player.foto };

  return (
    <ScrollView style={styles.container}>

      {/* Foto con zoom */}
      <TouchableOpacity onPress={() => setZoomVisible(true)}>
        <Image source={fotoSource} style={styles.foto} />
        <Text style={styles.zoomHint}>Toca la foto para ampliar</Text>
      </TouchableOpacity>

      {/* Modal zoom */}
      <Modal visible={zoomVisible} transparent animationType="fade">
        <TouchableOpacity style={styles.modalOverlay} onPress={() => setZoomVisible(false)}>
          <Image source={fotoSource} style={styles.fotoZoom} resizeMode="contain" />
          <Text style={styles.cerrarZoom}>Toca para cerrar</Text>
        </TouchableOpacity>
      </Modal>

      <View style={styles.infoContainer}>
        <Text style={styles.nombre}>{player.nombre} {player.apellidos}</Text>

        {/* Ficha técnica */}
        <Text style={styles.seccionTitulo}>Ficha técnica</Text>
        <View style={styles.card}>
          <View style={styles.fila}>
            <Text style={styles.label}>Posición</Text>
            <Text style={styles.valor}>{player.posicion}</Text>
          </View>
          <View style={styles.separador} />
          <View style={styles.fila}>
            <Text style={styles.label}>Edad</Text>
            <Text style={styles.valor}>{player.edad} años</Text>
          </View>
          <View style={styles.separador} />
          <View style={styles.fila}>
            <Text style={styles.label}>Altura</Text>
            <Text style={styles.valor}>{player.altura} m</Text>
          </View>
        </View>

        {/* Vídeos */}
        {player.videos && player.videos.length > 0 && (
          <View>
            <Text style={styles.seccionTitulo}>Highlights</Text>
            <View style={styles.card}>
              {player.videos.map((video, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.videoItem}
                  onPress={() => navigation.navigate('Multimedia', { player, videoIndex: index })}
                >
                  <Text style={styles.videoIcono}>▶</Text>
                  <View style={styles.videoInfo}>
                    <Text style={styles.videoTitulo}>Vídeo {index + 1}</Text>
                    <Text style={styles.videoRuta} numberOfLines={1}>{video}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>

            <TouchableOpacity
              style={styles.botonMultimedia}
              onPress={() => navigation.navigate('Multimedia', { player, videoIndex: 0 })}
            >
              <Text style={styles.botonTexto}>▶ Ver todos los highlights</Text>
            </TouchableOpacity>
          </View>
        )}

      </View>
    </ScrollView>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1a1a2e' },
  foto: { width: '100%', height: 300, resizeMode: 'cover' },
  zoomHint: { color: '#e94560', textAlign: 'center', fontSize: 12, marginTop: 4 },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.9)', justifyContent: 'center', alignItems: 'center' },
  fotoZoom: { width: width, height: width },
  cerrarZoom: { color: '#fff', marginTop: 16, fontSize: 13 },
  infoContainer: { padding: 20 },
  nombre: { color: '#fff', fontSize: 26, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' },
  seccionTitulo: { color: '#e94560', fontSize: 14, fontWeight: 'bold', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 },
  card: { backgroundColor: '#16213e', borderRadius: 12, padding: 16, marginBottom: 20 },
  fila: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8 },
  separador: { height: 1, backgroundColor: '#333' },
  label: { color: '#aaa', fontSize: 15 },
  valor: { color: '#e94560', fontSize: 15, fontWeight: 'bold' },
  videoItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#333' },
  videoIcono: { color: '#e94560', fontSize: 20, marginRight: 12 },
  videoInfo: { flex: 1 },
  videoTitulo: { color: '#fff', fontSize: 14, fontWeight: 'bold' },
  videoRuta: { color: '#aaa', fontSize: 11, marginTop: 2 },
  botonMultimedia: { backgroundColor: '#e94560', borderRadius: 10, padding: 14, alignItems: 'center', marginBottom: 20 },
  botonTexto: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});