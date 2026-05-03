import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Video, ResizeMode } from "expo-av";

const videoMap = {
  'assets/videos/jugador1/video1.mp4': require('../assets/videos/jugador1/video1.mp4'),
  'assets/videos/jugador2/video1.mp4': require('../assets/videos/jugador2/video1.mp4'),
  'assets/videos/jugador3/video1.mp4': require('../assets/videos/jugador3/video1.mp4'),
  'assets/videos/jugador4/video1.mp4': require('../assets/videos/jugador4/video1.mp4'),
  'assets/videos/jugador5/video1.mp4': require('../assets/videos/jugador5/video1.mp4'),
};

export default function MultimediaScreen({ route, navigation }) {
  const [currentIndex, setCurrentIndex] = useState(route.params?.videoIndex ?? 0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);

  if (!route.params?.player) {
    return (
      <View style={styles.container}>
        <Text style={{ color: '#fff', textAlign: 'center', marginTop: 40 }}>
          No se ha seleccionado ningún jugador.
        </Text>
      </View>
    );
  }

  const { player } = route.params;
  const videos = player.videos || [];
  const currentVideoSource = videoMap[videos[currentIndex]];

  useEffect(() => {
    setIsPlaying(false);
  }, [currentIndex]);

  const handlePlayPause = async () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      await videoRef.current.pauseAsync();
    } else {
      await videoRef.current.playAsync();
    }
    setIsPlaying(!isPlaying);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < videos.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const handleMute = async () => {
    if (!videoRef.current) return;
    await videoRef.current.setIsMutedAsync(!isMuted);
    setIsMuted(!isMuted);
  };

  const handleRestart = async () => {
    if (!videoRef.current) return;
    await videoRef.current.setPositionAsync(0);
    await videoRef.current.playAsync();
    setIsPlaying(true);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>

      <Text style={styles.titulo}>Highlights</Text>
      <Text style={styles.jugador}>{player.nombre} {player.apellidos}</Text>
      <Text style={styles.contador}>Vídeo {currentIndex + 1} de {videos.length}</Text>

      <View style={styles.reproductorContainer}>
        {currentVideoSource ? (
          <Video
            ref={videoRef}
            key={currentIndex}
            source={currentVideoSource}
            style={styles.video}
            resizeMode={ResizeMode.CONTAIN}
            isLooping={false}
            isMuted={isMuted}
            onPlaybackStatusUpdate={status => {
              if (status.isLoaded) setIsPlaying(status.isPlaying);
            }}
          />
        ) : (
          <View style={styles.sinVideo}>
            <Text style={styles.sinVideoTexto}>Vídeo no disponible</Text>
          </View>
        )}
      </View>

      <View style={styles.botonesGrid}>

        <TouchableOpacity
          style={[styles.boton, currentIndex === 0 && styles.botonDesactivado]}
          onPress={handlePrev}
          disabled={currentIndex === 0}
        >
          <Text style={styles.textoBoton}>⏮ Anterior</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.boton, styles.botonPrincipal]} onPress={handlePlayPause}>
          <Text style={styles.textoBoton}>{isPlaying ? '⏸ Pausar' : '▶ Reproducir'}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.boton, currentIndex === videos.length - 1 && styles.botonDesactivado]}
          onPress={handleNext}
          disabled={currentIndex === videos.length - 1}
        >
          <Text style={styles.textoBoton}>Siguiente ⏭</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boton} onPress={handleRestart}>
          <Text style={styles.textoBoton}>↺ Reiniciar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boton} onPress={handleMute}>
          <Text style={styles.textoBoton}>{isMuted ? '🔊 Sonido' : '🔇 Silenciar'}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botonSecundario} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.textoSecundario}>🏠 Volver al inicio</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1a1a2e' },
  content: { padding: 16, paddingBottom: 40 },
  titulo: { color: '#e94560', fontSize: 28, fontWeight: '900', textAlign: 'center', marginTop: 10 },
  jugador: { color: '#fff', fontSize: 16, textAlign: 'center', marginTop: 4 },
  contador: { color: '#aaa', fontSize: 13, textAlign: 'center', marginTop: 2, marginBottom: 12 },
  reproductorContainer: { width: '100%', height: 220, backgroundColor: '#000', borderRadius: 12, overflow: 'hidden', marginBottom: 16 },
  video: { width: '100%', height: '100%' },
  sinVideo: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  sinVideoTexto: { color: '#aaa', fontSize: 14 },
  botonesGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, justifyContent: 'center' },
  boton: { backgroundColor: '#16213e', borderWidth: 1, borderColor: '#e94560', paddingVertical: 12, paddingHorizontal: 16, borderRadius: 10 },
  botonPrincipal: { backgroundColor: '#e94560' },
  botonDesactivado: { opacity: 0.3 },
  textoBoton: { color: '#fff', fontWeight: 'bold', fontSize: 13 },
  botonSecundario: { borderWidth: 1, borderColor: '#aaa', paddingVertical: 12, paddingHorizontal: 16, borderRadius: 10 },
  textoSecundario: { color: '#aaa', fontWeight: 'bold' },
});