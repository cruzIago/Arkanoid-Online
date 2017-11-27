# Arkanoid-Online

Practica de Juegos en Red

# Autores

Nombre: Alexander Matos Teodoro<br>
Correo: a.matost@alumnos.urjc.es<br>
Github: Swordland<br>

Nombre: Laura Rodríguez Corpas<br>
Correo: l.rodriguezcor@alumnos.urjc.es<br>
Github: pinksideofthemoon<br>

Nombre: Iago Cruz García<br>
Correo: i.cruz.2016@alumnos.urjc.es<br>
Github: cruzIago<br>

# Juego

- Juego de ruptura de bloques mediante el uso de rebotes con una pelota y una pala<br>
- Si la pelota cae, se perderá una vida con un máximo de 3<br>
- Sala de espera para unirse a partidas donde se podrá chatear<br>
- Partidas de 2 jugadores cooperativas para romper los bloques en pantalla<br>
- Puntuaciones para una tabla de clasificación<br>
- Las puntuaciones serán calculadas dependiendo del tiempo y bloques destruidos<br>

# Cliente

- Gestionará el apartado visual (bloques, pelota, pala)<br>
- Gestionará la busqueda de salas para unirse o jugar solo mediante un menú

# Servidor

- Gestiona el envio de datos entre jugadores como el chat
- Entre esos datos contaremos tambien el envio de posiciones de pala, pelota y bloques que ha golpeado el otro usuario

# Flujo
Comenzamos ejecutando el .jar, Arkanoid-Online Rest.jar para tener nuestro servidor REST encendido. Accedemos a Index.html para comenzar la partida. Cuando destruyamos todos los bloques o perdamos las bolas, habrá que introducir el nombre, que será como máximo de 3 letras, pudiendo moverse de izquierda a derecha para introducirlas. Pulsar Enter para acceder a la tabla de puntuaciones y saber si hemos sido capaces de superar algún record. Con siguiente volveremos al menu inicial.

Parte 2- Juego

Assets del juego

![1Jugador](https://github.com/cruzIago/Arkanoid-Online/blob/master/assets/1JUGADOR.png?raw=true)

![2Jugadores](https://github.com/cruzIago/Arkanoid-Online/blob/master/assets/2JUGADORES.png?raw=true)

![Background](https://github.com/cruzIago/Arkanoid-Online/blob/master/assets/BACKGROUND.png?raw=true)

![Bloques](https://github.com/cruzIago/Arkanoid-Online/blob/master/assets/Bloques.png?raw=true)

![BolaAzul](https://github.com/cruzIago/Arkanoid-Online/blob/master/assets/BolaAzul.png?raw=true)

![BolaROja](https://github.com/cruzIago/Arkanoid-Online/blob/master/assets/BolaRoja.png?raw=true)

![MapaMulti](https://github.com/cruzIago/Arkanoid-Online/blob/master/assets/Mapa%20multi.png?raw=true)
![Pala0](https://github.com/cruzIago/Arkanoid-Online/blob/master/assets/Pala0.png?raw=true)
![Pala1](https://github.com/cruzIago/Arkanoid-Online/blob/master/assets/Pala1.png?raw=true)
![Pala2](https://github.com/cruzIago/Arkanoid-Online/blob/master/assets/Pala2.png?raw=true)
![Pala3](https://github.com/cruzIago/Arkanoid-Online/blob/master/assets/Pala3.png?raw=true)
![Pala4](https://github.com/cruzIago/Arkanoid-Online/blob/master/assets/Pala4.png?raw=true)
![Pala5](https://github.com/cruzIago/Arkanoid-Online/blob/master/assets/Pala5.png?raw=true)
![background_img](https://github.com/cruzIago/Arkanoid-Online/blob/master/assets/background_ingame.png?raw=true)
![Powerups](https://github.com/cruzIago/Arkanoid-Online/blob/master/assets/powerups.png?raw=true)
![volver](https://github.com/cruzIago/Arkanoid-Online/blob/master/assets/volver.png?raw=true)

#Menú de inicio, se puede escoger entre dos opciones: Jugar solo (1 Jugador) o jugar con alguien (2 Jugadores).

![inicio](https://i.imgur.com/Qelf1OZ.png)

#Pantalla in-game del modo 1 jugador (1 Barra y 1 Bola)

![1solo](https://i.imgur.com/xLq8uIz.png)

#Pantalla in-game del modo 2 jugadores (2 Barras y 2 Bolas)

![2coop](https://i.imgur.com/64SZbij.png)
![diagrama](https://i.imgur.com/oC5YEw8.png)

#Pantalla de introducir nombre
![introducir](https://i.imgur.com/rLjSVGN.png)

#Pantalla de rankings
![leaderboard](https://i.imgur.com/Vztc2hd.png)


#Api Rest diagrama de clases
![diagramaRest](https://i.imgur.com/AcNt0Ld.png)

