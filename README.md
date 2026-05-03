# ENDERS Equipo Basket - Producto 3

Aplicacion movil creada con React Native y Expo para consultar la plantilla de ENDERS Basket. La app muestra un listado de jugadores desde Firebase, permite abrir la ficha de cada jugador y reproduce sus videos destacados en una pantalla multimedia.

## Tecnologias

- React Native
- Expo
- Firebase Firestore
- React Navigation
- Expo AV

## Instalacion

1. Instalar dependencias:

```bash
npm install
```

2. Configurar Firebase:

```bash
cp .env.example .env
cp firebase.config.example.js firebase.config.js
```

3. Rellenar `.env` con los valores del proyecto Firebase:

```bash
EXPO_PUBLIC_FIREBASE_API_KEY=
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=
EXPO_PUBLIC_FIREBASE_PROJECT_ID=
EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
EXPO_PUBLIC_FIREBASE_APP_ID=
```

`firebase.config.js` y `.env` estan ignorados por Git para evitar subir credenciales o configuraciones locales.

## Ejecutar la app

```bash
npm start
```

Tambien se puede abrir directamente en una plataforma:

```bash
npm run android
npm run ios
npm run web
```

## Navegacion

La aplicacion usa un Stack Navigator con tres pantallas:

- `Listado`: listado de jugadores obtenido desde la coleccion `players` de Firestore.
- `Detalle`: ficha del jugador seleccionado, recibido por `route.params`.
- `Multimedia`: reproductor de videos del jugador, recibido por `route.params`.

El header superior muestra el titulo `ENDERS Basket`, mantiene el boton automatico de volver atras y anade un boton `Inicio` que vuelve siempre al listado.

## Datos esperados en Firebase

Cada documento de `players` deberia incluir, como minimo:

```js
{
  nombre: "Nombre",
  apellidos: "Apellidos",
  posicion: "Base",
  edad: 20,
  altura: 1.85,
  foto: "assets/images/jugador1.png",
  videos: ["assets/videos/jugador1/video1.mp4"]
}
```

Las rutas locales de imagen y video deben coincidir con las claves mapeadas en las pantallas. En `Multimedia` tambien se aceptan URLs remotas de video que empiecen por `http`.
