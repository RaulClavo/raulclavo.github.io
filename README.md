# Juego en Vivo — Welcome Day UCJC (Club ARISE)

Este proyecto es una página web interactiva desarrollada para el Welcome Day de la Universidad Camilo José Cela (UCJC), organizada por el grupo estudiantil **ARISE**.

## Descripción

La web permite a los asistentes participar en un juego en tiempo real, donde dos jugadores pueden controlar sus movimientos en un tablero virtual, mientras el resto de participantes pueden observar como espectadores. El modo de juego se decide por votación entre los jugadores, eligiendo entre:

- **Modo 1:** Un solo tablero compartido por ambos jugadores.
- **Modo 2:** Dos tableros independientes, uno para cada jugador.

El objetivo es avanzar por el tablero y llegar a la casilla de meta. Los controles permiten avanzar y girar, y cada jugador puede planificar su ruta antes de ejecutarla.

## Características

- **Lobby:** Muestra el estado actual de la partida y los jugadores conectados.
- **Votación de modo:** Los jugadores votan el modo de juego antes de empezar.
- **Control de jugador:** Cada jugador puede añadir señales (avanzar, girar) y ejecutar su ruta.
- **Visualización en vivo:** Los espectadores pueden ver el desarrollo de la partida en tiempo real.
- **Sincronización:** Todos los movimientos y estados se sincronizan usando Firebase Realtime Database.
- **Gestión de partida:** La partida se cancela automáticamente si algún jugador abandona.

## Tecnologías

- **HTML, CSS y JavaScript**
- **Firebase Realtime Database** para la sincronización en tiempo real

## Uso

1. Abre la página web.
2. Haz clic en "Unirse" para participar como jugador (máximo 2 jugadores).
3. Si ya hay 2 jugadores, entrarás como espectador.
4. Vota el modo de juego y espera a que ambos jugadores voten.
5. Usa los controles para planificar y ejecutar tu ruta en el tablero.
6. Observa el desarrollo de la partida en tiempo real.

## Créditos

Desarrollado por el grupo estudiantil **ARISE** para el Welcome Day de la UCJC.

---
¡Esperamos que disfrutes del juego y te diviertas!