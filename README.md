# ENDERS Equipo Basket - Producto 3

Proyecto desarrollado para el Producto 3 de la asignatura de Front-end. Consiste en una aplicacion movil creada con React Native para consultar la plantilla del equipo ENDERS Basket, reutilizando la informacion trabajada en los productos anteriores y conectandola con una base de datos Firebase.

La aplicacion permite visualizar un listado de jugadores, acceder a la ficha de detalle de cada uno y reproducir sus contenidos multimedia desde una tercera pantalla. La navegacion entre pantallas se realiza mediante un Stack Navigator.

## Funcionalidades principales

- Listado de jugadores cargado desde Firebase Firestore.
- Visualizacion del listado mediante `FlatList`.
- Filtros de busqueda por nombre, posicion y edad.
- Pantalla de detalle con la informacion del jugador seleccionado.
- Imagen del jugador con opcion de ampliacion mediante modal.
- Pantalla multimedia con reproductor de video.
- Controles de reproduccion: anterior, reproducir/pausar, siguiente, reiniciar y silenciar.
- Navegacion entre `Listado`, `Detalle` y `Multimedia`.
- Boton de inicio en el menu superior para volver al listado.
- Boton automatico de volver atras proporcionado por React Navigation.

## Tecnologias usadas

- React Native
- Expo
- JavaScript
- Firebase Firestore
- React Navigation
- Expo Video
- React Native Gesture Handler
- React Native Screens
- React Native Safe Area Context

## Estructura del proyecto

```text
producto3/
├── App.js
├── index.js
├── app.json
├── package.json
├── firebase.config.js
├── screens/
│   ├── ListadoScreen.js
│   ├── DetalleScreen.js
│   ├── MultimediaScreen.js
│   └── HomeScreen.js
├── components/
│   ├── Header.js
│   └── Footer.js
└── assets/
    ├── images/
    ├── logos/
    └── videos/
```

Las tres pantallas principales del producto son:

- `ListadoScreen.js`: muestra la plantilla del equipo con datos obtenidos desde Firebase.
- `DetalleScreen.js`: muestra la informacion completa del jugador recibido por navegacion.
- `MultimediaScreen.js`: reproduce los videos asociados al jugador seleccionado.

## Instalacion

Para instalar el proyecto es necesario tener Node.js y Expo disponibles en el entorno de trabajo.

1. Clonar el repositorio:

```bash
git clone URL_DEL_REPOSITORIO
cd producto3
```

2. Instalar las dependencias:

```bash
npm install
```

3. Crear el archivo de variables de entorno:

```bash
cp .env.example .env
```

4. Rellenar el archivo `.env` con la configuracion del proyecto Firebase:

```bash
EXPO_PUBLIC_FIREBASE_API_KEY=
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=
EXPO_PUBLIC_FIREBASE_PROJECT_ID=
EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
EXPO_PUBLIC_FIREBASE_APP_ID=
```

El archivo `.env` no debe subirse al repositorio.

## Configuracion de Firebase

La aplicacion usa Firebase Firestore como base de datos. La conexion se inicializa en `firebase.config.js` a partir de las variables definidas en `.env`.

La coleccion principal usada por la aplicacion es:

```text
players
```

Cada documento de la coleccion representa un jugador. Un ejemplo de estructura seria:

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

Los campos `foto` y `videos` pueden apuntar a recursos locales incluidos en `assets` o a URLs remotas, segun la configuracion de los datos.

## Ejecucion

Para iniciar el proyecto:

```bash
npm start
```

Tambien se puede ejecutar directamente en una plataforma concreta:

```bash
npm run expo
npm run android
npm run ios
npm run web
```

Para comprobar que compila como proyecto web de Expo:

```bash
npm run build
```

Si aparecen problemas de cache durante el desarrollo, se puede reiniciar Expo con:

```bash
npx expo start -c
```

## Navegacion de la aplicacion

La navegacion esta definida en `App.js` mediante React Navigation y un Stack Navigator.

Pantallas configuradas:

- `Listado`: pantalla inicial de la aplicacion.
- `Detalle`: pantalla de informacion del jugador seleccionado.
- `Multimedia`: pantalla de reproduccion multimedia.

Flujo de navegacion:

```text
Listado -> Detalle -> Multimedia
```

Desde el listado se envia el jugador seleccionado mediante `route.params`. La pantalla de detalle recibe este jugador y permite abrir la pantalla multimedia enviando de nuevo la misma informacion. El menu superior mantiene el titulo `ENDERS Basket`, el boton automatico para volver atras y un boton `Inicio` para regresar al listado.

## Entrega

Para la entrega del producto se debe incluir:

- Enlace al repositorio de GitHub.
- Documento DOC o PDF con la documentacion solicitada.
- Proyecto comprimido sin la carpeta `node_modules`.

El archivo `.gitignore` ya excluye `node_modules`, archivos de entorno y configuraciones locales sensibles.
