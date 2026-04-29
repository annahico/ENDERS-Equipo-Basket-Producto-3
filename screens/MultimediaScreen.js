import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function MultimediaScreen({ navigation }) {
  const [reproduciendo, setReproduciendo] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Multimedia</Text>

      <View style={styles.card}>
        <Text style={styles.subtitulo}>Zona multimedia del jugador</Text>

        <View style={styles.reproductor}>
          <Image
            style={styles.imagen}
            source={{
              uri: "https://images.unsplash.com/photo-1546519638-68e109498ffc",
            }}
          />

          <Text style={styles.estado}>
            {reproduciendo ? "Contenido en reproducción" : "Contenido pausado"}
          </Text>
        </View>

        <Text style={styles.descripcion}>
          En esta pantalla se muestra el contenido multimedia relacionado con el
          equipo y sus jugadores. Esta zona simula un reproductor con botones de
          interacción para reproducir, pausar y volver a la pantalla principal.
        </Text>

        <View style={styles.botonesFila}>
          <TouchableOpacity
            style={styles.boton}
            onPress={() => setReproduciendo(true)}
          >
            <Text style={styles.textoBoton}>▶ Reproducir</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.boton}
            onPress={() => setReproduciendo(false)}
          >
            <Text style={styles.textoBoton}>⏸ Pausar</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.botonSecundario}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.textoSecundario}>Volver al inicio</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D90429",
    padding: 20,
    alignItems: "center",
  },

  titulo: {
    color: "#EDF2F4",
    fontSize: 32,
    fontWeight: "900",
    marginTop: 30,
    marginBottom: 25,
  },

  card: {
    width: "100%",
    maxWidth: 520,
    backgroundColor: "#2B2D42",
    borderRadius: 18,
    padding: 20,
    alignItems: "center",
  },

  subtitulo: {
    color: "#EDF2F4",
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 18,
    textAlign: "center",
  },

  reproductor: {
    width: "100%",
    backgroundColor: "#1a1a2e",
    borderRadius: 18,
    padding: 18,
    alignItems: "center",
    marginBottom: 20,
  },

  imagen: {
    width: 250,
    height: 250,
    borderRadius: 125,
    borderWidth: 4,
    borderColor: "#e94560",
    marginBottom: 14,
  },

  estado: {
    color: "#e94560",
    fontSize: 16,
    fontWeight: "700",
  },

  descripcion: {
    color: "#EDF2F4",
    fontSize: 16,
    textAlign: "center",
    lineHeight: 23,
    marginBottom: 20,
  },

  botonesFila: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 14,
    flexWrap: "wrap",
    justifyContent: "center",
  },

  boton: {
    backgroundColor: "#e94560",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
  },

  textoBoton: {
    color: "#ffffff",
    fontWeight: "bold",
  },

  botonSecundario: {
    borderWidth: 1,
    borderColor: "#EDF2F4",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 12,
  },

  textoSecundario: {
    color: "#EDF2F4",
    fontWeight: "bold",
  },
});