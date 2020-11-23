# PVLI-2020-21-CUCU-PROLOGUE
PVLI UCM PROJECT 2020/21

# Desarrolladores
 - Manuel Adeli�o Consuegra
 - Rodrigo Tobar Guill�n 
 - Rub�n Gonz�lez Ortiz
 - Jonathan Sebasti�n Andrade Gordillo

# GDD
_ **CUCU: PROLOGUE** _

**Documento de dise�o de videojuego**

_Nombre de los autores o la empresa_

_Sitio web o correo electr�nico de contacto_

Versi�n 1.2 - 19 de septiembre de 2019

| **Resumen:**
 |
| --- |
| **G�neros:** Rol. | **Modos:** Individual |
| **P�blico objetivo:** �
_Edad, sexo, regi�n e idioma_ | **Plataformas:** PC, buscador. |
| **Caracter�sticas:** Top DownElecciones |
 |

**Descripci�n**

| **Logotipo y portada del juego**![](RackMultipart20201123-4-2z5txr_html_258a858ee789ebc5.png)
 |
| --- |

**[1. Aspectos generales](#_bvx00rgx5mb3) 3**

**[2. Men�s](#_3gbeapfiu76k) 3**

[2.1 Men� de inicio](#_awj7ok6axycr) 3

[2.2 Men� de pausa](#_x7v7knmi6uv) 3

[2.3 Men� de interacci�n con los mu�ecos](#_402fn8e6solj) 3

**[3. Configuraci�n, interfaz y controles](#_14nuesxik64u) 4**

[3.1 Configuraci�n](#_l649nqloqs2c) 4

[3.2 Interfaz y control](#_ejxzbce3so9s) 4

**[4. Jugabilidad](#_m3t235jmivr1) 4**

[4.1 Mec�nica](#_jo54b75iktgg) 4

[4.1.1 Movimiento e interacci�n](#_tc33zjsp9gdi) 4

[4.1.2 Enfrentamiento contra enemigos](#_9tyu4ah5exls) 4

[4.1.3 Objetos](#_qdat5euxvgo2) 5

[4.2 Din�mica](#_13rs49fj6ajt) 5

[4.2.1 Din�mica puzzles](#_www625pwiroy) 5

[4.2.2 Din�mica mu�ecos](#_ec9vcbfganmw) 6

[4.3 Est�tica](#_2m05xtperpk5) 6

**[5. Contenido](#_6w5rpw90vzkw) 7**

[5.1 Historia](#_bvwmk4nvzsnk) 7

[5.2 Mapa](#_by7hedlif1ft) 7

[5.3.Personajes](#_9dceh1la0lrp) 8

[Juan](#_u26yumuo1mpp) 8

[Pomponina](#_7mlkoigaqmve) 14

[Don Lindo](#_no89ps4zjgg4) 22

[Agalzapo](#_8wj88qnv1a3o) 29

####


#### 1. Aspectos generales

Es un juego de rol con una perspectiva top-down. El personaje podr� moverse en todas direcciones. Algunas de las caracter�sticas claves del mismo son: el di�logo del jugador con los dem�s personajes, dado que la trama tendr� un peso importante en el juego, y el combate, que se basar� en un sistema de minijuegos distintos entre s� basados en esquivar proyectiles.

#### 2. Men�s

## 2.1 Men� de inicio

- El t�tulo del juego.
- Bot�n de jugar, el cual iniciar� autom�ticamente el juego.

## 2.2 Men� de pausa

- Bot�n de salir del juego
- Bot�n de seguir jugando

## 2.3 Men� de interacci�n con los mu�ecos

Este men� aparece al acercarse a un personaje y pulsar el bot�n de interacci�n

- **Atacar** : Al darle a atacar comienza el minijuego de ataque del mu�eco en cuesti�n.
- **Hablar** : Las opciones del men� de combate se cambian por las distintas opciones de di�logo del personaje. P.e: Atacar ? Chiste, Hablar ? Halago ...
- **Salvarle** : si los PM est�n a cero, al darle se acaba la pelea y perdonas al mu�eco , salv�ndolo. Si no est�n a 0, aparece el minijuego y el jugador pierde su turno.

Al acabar de interaccionar con el mu�eco (haberle matado o salvado) se cierra el men�. El jugador se encontrar� donde interactu� con el mu�eco, solo que este ya no estar� ah�. ![](RackMultipart20201123-4-2z5txr_html_bcea232876f54456.png)

####

#### 3. Configuraci�n, interfaz y controles

## 3.1 Configuraci�n

Las posibilidades que tendr� el usuario a la hora de configurar el videojuego ser�n dos botones, uno para quitar el sonido y otro para quitar la m�sica.

Aparecen siempre en la zona superior derecha de la pantalla.

## 3.2 Interfaz y control

No hay interfaz fuera de combate.

Interfaz dentro de combate:

Vida del personaje y vida del enemigo en la esquina superior izquierda y derecha respectivamente.

#### 4. Jugabilidad

## 4.1 Mec�nica


### 4.1.1 Movimiento e interacci�n

El jugador se podr� mover en todas las direcciones de los ejes X Y con las teclas WASD para moverse en direcci�n norte, este,sur y oeste respectivamente, y la combinaci�n de esas direcciones, completando un movimiento 8D. Por otra parte, con la tecla &quot;E&quot; podr� interactuar con el escenario, ya sea con objetos o personas.

### 4.1.2 Enfrentamiento contra enemigos

El jugador tendr� una barra de vida durante los combates. Tendr� X puntos de vida. Si llegan a 0, Pigmali�n muere y reaparece en un punto de guardado.

Los mu�ecos tambi�n tendr�n una barra de vida visible para el jugador. Al igual que con Pigmali�n, si llega a 0 morir�n. Al empezar un combate la vida del mu�eco est� siempre al m�ximo. Cuando acaba un combate, Pigmali�n regenera parte de su vida (un 20% del total).

El mu�eco adem�s tendr� unos **Puntos De Persuasi�n** que subir�n si Pigmali�n selecciona las opciones adecuadas al hablar y bajar�n cuando pase lo contrario. Estos puntos no ser�n visibles para el jugador.

El enfrentamiento tendr� dos fases, una de toma de decisiones y otra m�s din�mica.

La primera fase del combate consta de una toma de decisiones, nombradas en el punto 2 del documento:

**FASE 1**

**Atacar:** Cuando elijamos esta acci�n, aparecer� un minijuego con el que se establecer� la cantidad de da�o a infligir. Aparecer� un rect�ngulo horizontal con dos barras verticales que se mover�n desde las esquinas hasta el centro a diferente velocidad. El jugador, presionando la tecla &quot;Espacio&quot;, parar� las barras. Cuanto m�s cerca est�n, m�s da�o se har�.

![](RackMultipart20201123-4-2z5txr_html_da69638dbd5a0193.png)

**Hablar:** El jugador tendr� diferentes opciones para hablar con los mu�ecos, en funci�n de qu� puzzles haya resuelto a lo largo del mapa, podr� elegir m�s opciones. Las opciones ser�n beneficiosas o perjudiciales. Si el jugador elige una opci�n mala, la segunda fase m�s complicada en el siguiente turno, si elige una buena, subir�n los Puntos de Persuasi�n, una medida invisible al jugador, que cuando llegue al m�ximo, el combate acabar� salvando al mu�eco. Tambi�n hay opciones que no acarrean ning�n efecto.

**Salvar:** Cuando los puntos de persuasi�n lleguen a podr�s salvar al mu�eco d�ndole a esta opci�n. Se acabar� el combate al instante. Si se selecciona esta opci�n sin haber llegado a los puntos de persuasi�n necesarios, el jugador perder� el turno y se pasar� a la fase 2.

**FASE 2**

La segunda fase empieza cada vez que elegimos una opci�n en la fase uno.

En ella el jugador maneja al personaje principal y tendr� que esquivar los ataques del enemigo, perdiendo puntos de vida en caso de no conseguirlo. Cuando �sto �ltimo suceda, el jugador pierde vida y se vuelve invulnerable por 2 segundos, parpadeando.

Si el mu�eco est� por debajo de la mitad de la vida, esta fase se dificultar� de distintas formas dependiendo del mu�eco(m�s proyectiles, m�s r�pidos, etc).

Si el jugador selecciona una mala opci�n en la opci�n &quot; **Hablar**&quot; de la fase uno, el mu�eco se enfada y sus ataques har�n el doble de da�o en la fase dos de ese turno, lo cual se mostrar� con un cambio de tono en el sprite de los ataques(el turno siguiente el da�o volver� a la normalidad).

Tras esquivar todos los ataques, volveremos a la primera fase del enfrentamiento y tendremos que tomar nuevas decisiones. Los minijuegos est�n explicados en cada personaje.

### 4.1.3 Objetos

Se obtendr�n al completar los puzzles (o parte de ellos) a lo largo del mapa y se podr�n usar, una vez conseguidos, en la opci�n &quot; **Hablar**&quot;.

## 4.2 Din�mica

### 4.2.1 Din�mica puzzles

En funci�n de la toma de decisiones a la hora de hablar con los NPCs del mundo, se pueden obtener unos objetos u otros que servir�n para facilitar la opci�n pacifista del juego, y que en funci�n de la moralidad de la decisi�n que se seleccione se obtiene un objeto u otro, con distinto significado para el mu�eco en el que se use.

### 4.2.2 Din�mica mu�ecos

La din�mica del juego estar� dirigida por las decisiones que tome el jugador a la hora de enfrentarse a los enemigos.

Dentro de la batalla, el jugador tendr� la opci�n de, o bien mat�ndolos a base de ataques, o bien, hablar con el fin de llegar al m�ximo de **Puntos De Persuasi�n**.

Esto diferenciar� a su vez tres rutas de juego:

- **Puppetcidal:** Matar� a todos los mu�ecos.
- **Pacifista:** Acabar� dialogando con todos los mu�ecos.
- **Normal:** Se matar�n a unos mu�ecos y a otros no.

En **Historia** explicamos qu� sucede en funci�n de la ruta elegida por el jugador.

##

## 4.3 Est�tica

La est�tica general del juego ser� parecida a la de Undertale, con un mundo abarcable en dos dimensiones (salas sobre las que te puedes mover) y sprites de personajes (protagonista, enemigos, extras...) de cara al jugador.

El juego por fuera tendr� una est�tica de representaci�n teatral, es decir, la pantalla de juego se ver� como si fuese el escenario de una obra de teatro.

Cada una de las tres zonas en las que se divide el juego tendr� una est�tica y ambientaci�n distintas.

#### 5. Contenido

## 5.1 Historia

Pigmali�n es un dramaturgo que se gana la vida usando a unos mu�ecos que est�n vivos los cuales ha creado �l mismo. Sin embargo, un d�a estos mu�ecos deciden escaparse. Ahora Pigmali�n, furioso, tiene dos opciones, o bien, eliminarlos por desobedecerle y crear otros, o bien, encontrarles para que vuelvan y puedan continuar su vida tal y c�mo era. �Estar� dispuesto a hacer lo que sea con tal de lograr su objetivo?

Como se ha explicado en la din�mica, la historia podr� seguir las siguientes rutas:

- Ruta pacifista. En esta ruta, todos los mu�ecos vuelven al teatro a seguir viviendo con Pigmali�n. En esta ruta, aparecer� un �ltimo mu�eco, Urdemalas, que tras ver que todos sus compa�eros est�n de vuelta en el teatro, se queda tambi�n en �l.
- Ruta puppetcidal: En esta ruta, aparecer� tambi�n, Urdemalas. En este caso buscar� vengarse de Pigmali�n. Solo podr� ser eliminado, ya que el jugador no podr� hablar con �l.
- Ruta normal. En esta ruta, los mu�ecos que queden vivos, huir�n del teatro.

## 5.2 Mapa

El mapa ser� un mundo abierto, marcado por tres diferentes zonas, m�s una zona central (el teatro). Cada zona trata un solo mu�eco, as� como sus puzzles.

## ![](RackMultipart20201123-4-2z5txr_html_30ac4d51a5e0bed7.png)

##
# 5.3.Personajes

Cosas comunes a todos los personajes:

- El minijuego cambiar� de fase cuando la salud del mu�eco baja del 50%. Al elegir una opci�n de chat calificada como mala, en el siguiente minijuego el mu�eco infligir� el doble de da�o.
- En las opciones de chat, se mostrar�n solo las opciones desbloqueadas (esto va principalmente por los mu�ecos con los que se pueden desbloquear distintos objetos).
- Di�logos: Una vez seleccionada la opci�n de habla, se cambiar� el dialogo de las cuatro principales opciones a las opciones de chat de cada personaje

Dependiendo del personaje, adem�s, se podr� abrir un submen� de cosas que ofrecer que el jugador puede obtener a trav�s de quests de cada personaje

###
# Juan
 ![](RackMultipart20201123-4-2z5txr_html_125d807ad987b237.png)

DESCRIPCI�N:

Personalidad burlesca

Este mu�eco fue creado con la intenci�n de hacer comedia. No puede hablar porque fue uno de los primeros mu�ecos creados por pigmali�n. lo �nico que puede decir es &quot;Cu cu&quot;. Dependiendo de la entonaci�n que le ponga puede significar burla, amenaza, enfado....

En el juego. Adem�s de acompa�ar cada cucu con una descripci�n de la intenci�n del cucu se puede distinguir cada cucu dependiendo de la fuente de �ste.

Todos los mu�ecos le hacen burla y no es muy querido.

**Conversaciones**

Salvar:

-Pigmali�n: Menos mal que te vuelves conmigo, eres el �nico capaz de hacer re�r a la gente.

-Juan: CUCU :3

Matar:

-Pigmali�n: Fuistes de mis primeros mu�ecos, se nota lo inferior que eres. Ahora podr� rehacerte y mejorarte.

-Juan: cu cu

**INFORMACI�N**

**(Disfraz de payaso)**

-(Buena): Chiste.

-Pigmali�n. pensando(Al principio Juan se re�a por cualquier tonter�a, no se cuanto tiempo llevo sin verle sonre�r).

**(Caja de Juan)**

-(Mala): Re�rse de �l

-Pigmali�n. pensando (En el teatro siempre est�bamos ri�ndonos de �l, fuimos demasiado crueles)

**(NPC calle)**

-(Buena): Animarle

-NPC: &quot;He visto un se�or vestido raro ir direcci�n hacia el rastro estuvo un rato en la verbena, parec�a estar disfrutando como un ni�o peque�o, no paraba de reir.

**(NPC calle)**

- Info mu�ecos humanos: hay una madre con el carrito de su bebe. Al hablar con ella sale un di�logo que dice que dice que su bebe no paraba de llorar hasta que vino una persona muy rara y lo calm� jugando con �l, dici�ndole CUCU. Al preguntarle por esa persona le dice que volvi� por donde vino.

CONVERSACIONES

**Encuentro**

-Mu�eco: CU CU (con gesto de sorpresa)

-Pigmali�n: Por que te has escapado zoquete?!

-Mu�eco: cu cu

-Pigmali�n: Con que te vas a comportar as� ahora eh?

-Mu�eco: **CU CU! (le saca la lengua)**

-Pigmali�n: Pues que as� sea!

OPCIONES DE CHAT

- **(Buena): Chiste.**

Una vez seleccionada esta opci�n Pigmali�n dice al azar uno de estos:

1.

-Pigmali�n: �Sabes c�mo se queda un mago despu�s de comer? Cucu: �Pigmali�n: Magordito

2.

- Pigmali�n: �C�mo se despiden los qu�micos? -Cucu: � -Pigmali�n: �cido un placer.

3.

-Pigmali�n: �Sabes qu� le dice un .gif a un .jpg? -Cucu: � -Pigmali�n: �An�mate hombre!

- **(Mala): Re�rse de �l**

- JAJAJAJAJAJA CUCU(ri�ndose de �l)
- CU CU! \&gt;:(


**-(Buena): Animarle**

1.

- Aunque los dem�s se r�an de ti, yo s� que eres especial
- CUCU :3

2.

- La farsa no puede funcionar sin ti, eres parte de la familia
- CUCU:3

3.

- Puedo ense�arte a hablar, pero tendr�s que confiar en m�
- CUCU:3

**- (Indiferente): Dato**

1.

- �Sab�as que Los b�hos son las �nicas aves que pueden ver el color azul?
- Cucu: ??.

1.

- �Sabias que Un caracol **puede dormir por 3 a�os.?**
- Cucu: ??.

1.

- �Sab�as que Fast and Furious 8 est� disponible para Netflix EEUU pero no para Netflix ESPA�A?
- Cucu: ??.

| TABLA DE PUNTOS DE PERSUASI�N |
| --- |
| **TOTAL** | **Chiste** | **Animarle** | **Dato** | **Re�rse** |
| 100 | +10 | +15 | +0 | -5 |

**MINIJUEGO (Descripci�n de la mec�nica del mu�eco):**

![](RackMultipart20201123-4-2z5txr_html_a13d299fbdf0326e.png)

El minijuego se parece a este jefe del cuphead, sustituyendo los HA por CU que vayan en grupos de dos.

El jugador puede moverse libremente por la sala, pero si entra a la zona en la que est� el mu�eco, pierde vida. La zona del mu�eco tiene CuCus flotando y que no salen de ella, cuando el mu�eco vaya a tirar un cucu, aparece un CuCU diminuto en esta zona, que se va haciendo grande hasta alcanzar su tama�o, y en ese momento se lanza.

El mu�eco le lanzar� proyectiles, los cuales se ver�n como &quot;CU CU&quot;,

al ser lo �nico que puede decir el mu�eco. Si estos impactan en el jugador, �ste pierde vida y su personaje se vuelve invulnerable por 2 segundos, parpadeando, mientras que si impactan contra el muro de la izquierda, desaparecen. Al principio los cucus salen juntos, como en la siguiente imagen:

![](RackMultipart20201123-4-2z5txr_html_af2069744138314.png)

Pero seg�n se va avanzando en el minijuego puede lanzarlos sin que los dos CUs vayan seguidos.

![](RackMultipart20201123-4-2z5txr_html_6dde38d4c062e0b2.png)

Si se opta por atacar al mu�eco, en vez de intentar hablar y hacerle entrar en raz�n, al bajarle la mitad de la vida, aparecen uno nuevo CUCUs, que son como los primeros, uno detr�s de otro, pero estos al llegar a la pared, en vez de desaparecer, rebotan y vuelven con el mu�eco. Para diferenciar estos CUCUs de los dem�s, tendr�n una fuente distinta (la que usa el mu�eco cuando est� enfadado) y ser�n m�s lentos.

Cuando se hayan aguantado x segundos en el minijuego, desaparece todo lo que tiene que ver con �l, y se vuelve al men� de interacci�n.

Opci�n mala: x2 Da�o Juan :

## CUCU!

## **ZONA de CUCU**

![](RackMultipart20201123-4-2z5txr_html_399bc0c513c33ea4.png)

![](RackMultipart20201123-4-2z5txr_html_5cf1190cdc48f0d0.png)

Esta zona va a estar diferenciada de las dem�s porque las calles van a estar decoradas de fiesta, como esta:

Las banderillas colgando van a ser los elementos m�s representativos, adem�s de algunos NPCs vestidos de San Isidro.

1- Va a haber unas indicaciones:

- Hacia arriba: Plaza Mayor (este cartel el grande para atraer la atenci�n del jugador y que as� vaya para arriba al principio)
- Hacia abajo: Rastro
- Izquierda: Calle normal, gente comiendo

Acordarse de lo de poner la canci�n de la plaza mayor pero que suene bajo y por arriba.

2- Calle normal, un par de mesas con gente comiendo a un lado y al otro una madre con su bebe (mirar info de CUCU).

3- Plaza Mayor: (Al entrar empieza a sonar la canci�n Madrid, Madrid, MAdrid de Placido Domingo https://www.youtube.com/watch?v=KWNZ\_w3c3ls&amp;ab\_channel=Nisusline)Aqu� est� la estatua para reconocerla y al lado un par de NPC vestido de chulapos y chulapas dando circulos (bailando). Adem�s hay otros NPC mirando, al preguntarles dicen que vieron a una persona muy rara(vestido como un payaso) que estuvo un rato mirando y cogi� la calle que va al rastro. (mirar info) ![](RackMultipart20201123-4-2z5txr_html_7b8dc84d71e42986.png)

4- Calle normal, conexi�n con la zona azul.

5- Calle normal, hay una tienda de disfraces y se ven el de un payaso. Info de nariz de payaso.

6- Conexi�n con zona Morada, es el rastro. Hay un par de puestos.

Cartel con anuncio que dice que hacia el oeste hay

una funci�n de t�teres.

7- Sala de cucu. hay una peque�a carpa con

dos t�teres, uno de ellos es igual que cucu

###
# Pomponina
 ![](RackMultipart20201123-4-2z5txr_html_d7477e4c3bbf8130.png)

**CONVERSACIONES**

**POMPONINA**** :** No s� por qu� has venido hasta m�, no pienso volver contigo.

**PIGMALI�N** : No seas boba, no tienes ning�n sitio a d�nde ir.

**POMPONINA**** :** �Me da igual! encontrar� a alguien que me lleve consigo. Adem�s, seguramente ser� m�s divertido que t�.

**PIGMALI�N** : Tu sitio es aqu�, en el teatro, conmigo y tus compa�eros

**POMPONINA**** :** No me interesa el teatro, no me interesan mis compa�eros, y mucho menos me interesas t�.

**SI SE SALVA A POMPONINA:**

**POMPONINA:** Creo que despu�s de tanto tiempo al fin empezamos a entendernos. Te dar� otra oportunidad, pero m�s te vale que me trates como a la estrella que soy.

**SI SE MATA A POMPONINA:**

**POMPONINA:** No puede acabar as�...todav�a necesita�mi...ayuda...

**INFORMACI�N**

- **ESPEJO**
  - **PIGMALI�N PENSANDO** : Pomponina estaba siempre mir�ndose al espejo, le gustaba estar arreglada, y mucho m�s que le dijeran lo guapa que estaba.
- **ABANICO ROTO (PUZZLE) (DESBLOQUEA OPCI�N CHAT)**
  - **PIGMALI�N PENSANDO** : Quiz�s se podr�a arreglar en alguna parte.
- **COLLAR (PUZZLE) (DESBLOQUEA OPCI�N DE CHAT)**
  - **PIGMALI�N PENSANDO** : Le gustar� como cualquier otra joya, Pomponina es muy b�sica.
- **CAJA DE BOMBONES (PUZZLE) (DESBLOQUEA OPCI�N CHAT)**
  - **PIGMALI�N PENSANDO** : Podr�a darle estos bombones a Pomponina.
- **RAMO DE ROSAS MALO(PUZZLE) (DESBLOQUEA OPCI�N CHAT)**
  - **PIGMALI�N PENSANDO** : A Pomponina siempre le han gustado las rosas.
- **RAMO DE ROSAS (PUZZLE) (DESBLOQUEA OPCI�N CHAT)**
  - **PIGMALI�N PENSANDO** : Deber�a llev�rselo a su hijo, pero a Pomponina siempre le han gustado mucho las rosas...
- **RAMO DE ROSAS ROSAS(PUZZLE) (DESBLOQUEA OPCI�N CHAT)**
  - **PIGMALI�N PENSANDO** : Las rosas favoritas de Pomponina son las de color rosa. Estoy seguro de que le encantar�an.

**OPCIONES DE CHAT**

- **(BUENA): Halagar (desbloqueada) Se escoge aleatoriamente una opci�n. Se puede repetir.**

  - **PIGMALI�N:** �Cuidado! No debes ponerte bajo el sol
  - **POMPONINA**** :** �Se puede saber por qu� me dices eso ahora?
  - **PIGMALI�N:** Porque te derrites bomb�n
  - **POMPONINA**** :** Tendr� cuidado, a nadie le gustan los bombones derretidos

- **PIGMALI�N:** �No ser�s un compuesto de F�sforo, Erbio, Hierro, Carbono y T�ntalo?
- **POMPONINA**** :** �
- **PIGMALI�N:** Porque eres PErFeCTa
- **POMPONINA**** :** Me encantan tus halagos tan creativos aunque no los entienda.

- **PIGMALI�N:** Tanto gentile e tanto onesta pare

la donna mia quand&#39;ella altrui saluta,

ch&#39;ogne lingua deven tremando muta,

e li occhi no l&#39;ardiscon di guardare.

- **POMPONINA**** :** Come parli italiano elegante

- **(INDIFERENTE): Ordenar (desbloqueada) Se escoge aleatoriamente una opci�n. Se puede repetir.**

- **PIGMALI�N:** Vuelve a tu caja.
- **POMPONINA**** :** �No me da la gana!

- **PIGMALI�N:** Para de seguir con tus tonter�as y vuelve ya.
- **POMPONINA**** :** No quiero, no voy a seguir haci�ndote caso.

- **PIGMALI�N:** No s� a qu� est�s esperando, pero tienes que volver a ensayar.
- **POMPONINA**** :** Yo ya no voy a volver a participar en tus nefastas farsas.

- **(MALA): Amenazar (desbloqueada) Se escoge aleatoriamente una opci�n. Se puede repetir.**

  - **PIGMALI�N:** vas a tener un castigo muy gordo como no vengas conmigo
  - **POMPONINA**** :** siempre est�s igual, estoy cansada de tus castigos, no pienso volver

- **PIGMALI�N:** Como no vengas ahora mismo no te volver� a hacer regalos
- **POMPONINA**** :** Con mi belleza habr� cientos de personas que me har�n regalos mejores que los tuyos

- **PIGMALI�N:** Voy a tomar serias represalias contra ti
- **POMPONINA**** :** T� mismo, sabes que soy indispensable para ti.
- **(MUY BUENA): Ofrecer bombones (desbloquear por puzzle)**

- **PIGMALI�N:** (Ofrecer caja de bombones) Toma. Esto me lo di� una anciana a la que ayudaste para que te lo trajese.
- **POMPONINA**** :** (Lo acepta) (!) �Ha conseguido mantener el negocio?
- **PIGMALI�N:** S�, y todo gracias a t�. Esa es la raz�n por la que creo que nos podemos entender.
- **POMPONINA**** :** Gracias por tra�rmelo. (...) �De verdad no est�s enfadado?
- **PIGMALI�N:** No, de hecho nunca he estado tan orgulloso de ti como ahora.

**NOTA: Todos los ramos de rosas se llamar�n &quot;Ramo de rosas&quot; para el jugador. �ste no distinguir� los tipos de ramos por el nombre.**** - (MUY BUENA): Ofrecer ramo de rosas rosas (desbloquear por puzzle)**

- **PIGMALI�N:** (Ofrecer ramo de rosas) Pens� que una forma de disculparme
- **POMPONINA**** :** (Lo acepta) Oh, �Qu� bien! Mi abanico se me hab�a roto y necesitaba uno nuevo.

**- (BUENA): Ofrecer ramo de rosas (desbloquear por puzzle)**

- **PIGMALI�N:** (Ofrecer ramo de rosas) Te he tra�do estas rosas. Como siempre te han gustado pens� que te alegrar�an.
- **POMPONINA**** :** Ohh, son muy bonitas, quiz�s podr�amos llegar a entendernos.

**- (MALA): Ofrecer ramo de rosas malo (desbloquear por puzzle)**
- **PIGMALI�N:** (Ofrecer ramo de rosas) Te he tra�do estas rosas. Como siempre te han gustado pens� que te alegrar�an.
- **POMPONINA**** :** (Sonr�e) �Claro que me gustan! (Se enfada) �CUANDO NO SON TAN FEAS COMO ESTAS!


- **(BUENA): Ofrecer abanico**

  - **PIGMALI�N:** (Ofrecer abanico) Encontr� tu abanico roto. Como le ten�as tanto cari�o decid� ir a un anticuario para que lo reparasen.
  - **POMPONINA**** :** (Lo acepta) Ohh �qu� detalle! Muchas gracias, Pigmali�n. Parece que te importo m�s de lo que pensaba.


- **(MALA): Ofrecer collar**

  - **PIGMALI�N:** (Ofrecer collar) Te he tra�do un collar. A las chicas os encantan estas cosas, �no?
  - **POMPONINA**** :** �No! Te he dicho much�simas veces que no me gustan los collares! Si vas a tener un detalle deber�as darme algo especial para m�, no cualquier baratija que encuentres por ah�.


Se mostrar�n las tres opciones desbloqueables adem�s de un bot�n para ofrecer cosas, una vez le das al bot�n de ofrecer cosas se sustituir�n las opciones anteriores por las de ofrecer los diferentes objetos que el jugador haya recogido. En caso de que no los haya conseguido los objetos se mostrar�n en gris

| TABLA DE PUNTOS DE PERSUASI�N |
| --- |
| **TOTAL** | **Ramo rosas rosas** | **Bombones** | **Abanico** | **Ramo Rosas** | **Halagar** |
| +40 | +30 | +30 | +20 | +12 |
| **100** | **Ordenar** | **Amenazar** | **Collar** | **Ramo malo** |
 |
| 0 | -5 | -20 | -30 |


**MAPA**** - Zonas y ambientaci�n**![](RackMultipart20201123-4-2z5txr_html_412c67338296b8aa.png)
1. **Tienda de bombones.** Aqu� estar� la anciana que lleva la tienda y que nos har� un encargo.
2. **Plaza con fuente.** Tiene al hijo del de la florister�a, a un cliente de la tienda de dulces y la llave. Conecta con la zona verde ( Don Lindo)
3. **Florister�a.** Aqu� tendremos a un encargado en apuros y una llave en un florero vac�o.
4. **Calle.** Hay un cliente de la tienda de dulces. Conecta con la zona azul (Cucu)
5. **Anticuario.** Lugar donde podremos comprar algo o reparar el abanico.
6. **Casa de Pomponina.** Tiene el espejo y el caj�n donde est� el abanico.
7. **Cuarto de Pomponina.** Solo est� ella. habitaci�n despejada donde transcurre el combate.
La zona de Pomponina va a estar ambientada en la alta sociedad burguesa de la ciudad. Habr� elementos tales como farolas elegantes, �rboles y jardines cuidados, alguna fuente, etc. La gente de la zona ir�a con traje, bombines, mon�culos, vestidos, etc, a excepci�n de algunos personajes m�s humildes, los cuales est�n all� trabajando para la clase alta. ![](RackMultipart20201123-4-2z5txr_html_7cd8ba0307d6242a.png)

**PUZZLES**** -Abanico/Collar **Si vamos a casa de Pomponina, nos encontraremos con un caj�n con el que si intentamos interactuar descubriremos que est� cerrado con llave.Al ir a la plaza con fuente, se podr� apreciar un brillo leve en la fuente. Al interactuar con �l obtendremos la llave.Al abrir el caj�n, encontraremos un abanico roto. Pigmali�n pensar� que se podr�a arreglar.Si vamos al anticuario,el encargado nos dar� la opci�n de repararlo o de comprar un collar. Como Pigmali�n no lleva mucho dinero encima, solo podr� elegir una opci�n. Dependiendo de lo que elija, recibir� un objeto u otro. El collar lo podr� comprar desde el principio sin necesidad de haber encontrado nada.** -Ramo de rosas malo, ramo de rosas y ramo de rosas rosas **Al llegar a la florister�a, nos encontraremos con un dependiente que ha perdido la llave de la trastienda. Pedir� a Pigmali�n que si la ve que le avise. De todos los floreros que hay en la tienda, uno de ellos estar� vac�o. Al interactuar con �l, obtendremos la llave de la trastienda. Aqu� Pigmali�n deber� decidir si d�rsela sin m�s o pedirle un ramo de rosas a cambio. El dependiente le dir� a Pigmali�n que no se puede permitir darle un ramo de rosas porque si se entera el jefe le echar�. Si Pigmali�n insiste en que quiere el ramo, el dependiente acceder� y le dar� un ramo de rosas malo, aunque el que sea malo no se le indicar� ni a Pigmali�n ni al jugador.Si Pigmali�n decide d�rsela gratis, ya sea en la primera o en la segunda oportunidad, el encargado se lo agradecer� y ya que es tan amable, le pedir� que le lleve un ramo de rosas a su hijo, el cual tiene una cita en la fuente y se le ha olvidado. A partir de este momento Pigmali�n tiene dos opciones: entregarle el ramo al hijo o d�rselo a Pomponina. Si decide ir a la fuente y d�rselo al hijo, tendr� una conversaci�n con �l. Tras esto, si vuelve a la florister�a, el dependiente estar� tan encantado con Pigmali�n que decidir� darle el ramo de rosas rosas, el cual pagar� �l de su bolsillo por toda la ayuda que le ha dado Pigmali�n.** -Caja de bombones**
1. Si vamos a la tienda de dulces caseros nos encontraremos a una anciana que nos pedir� llevar unos pedidos a unos clientes que hay por la zona.
2. Deberemos ir a esas zonas e interactuar con los personajes que encontraremos. Al darles sus pedidos a todos, podremos volver a la tienda.
3. Al llegar, la anciana nos lo agradecer�. Pigmali�n le preguntar� por Pomponina y veremos un flashback.
**(Est� Pomponina frente al mostrador en el interior de la tienda. La anciana est� al otro lado)****POMPONINA ****:** Hola. Quer�a una caja de bombones. �Cu�nto es? **ANCIANA**** :**_(Tiene expresi�n triste y alica�da, habla en un tono apagado-Pone la caja encima del mostrador)_ Toma cielo, te la puedes quedar.**POMPONINA ****:** �Me los das as� sin m�s? Normalmente los hombres me hacen tributos por mi belleza para tratar de conquistarme, pero �por qu� me los dar�as t�? **ANCIANA**** :**_(Suelta una peque�a risa)_ �Qu� aires, se�orita! En fin, el caso es que ya nadie viene a mi tienda, y me temo que tendr� que cerrar el negocio, qu� remedio...**POMPONINA ****:** �Y por qu� ha dejado de venir la gente? �Todo parece riqu�simo! **ANCIANA**** : **El mundo avanza, y supongo que ya nadie quiere los dulces de una vieja como yo. Todo es culpa de esas dichosas m�quinas, que todo lo que producen es m�s barato y mejor que lo tradicional, o al menos eso piensan algunos. T� todav�a eres joven, pero yo he vivido mucho. El tiempo no se detiene y algunas nos quedamos estancadas en �l.** POMPONINA ****:** �Y no hay nadie que pueda ayudar? **ANCIANA**** : **Mi marido me ayudaba mucho, era la mayor alegr�a de mi mundo. Pero desgraciadamente muri� hace ya tres a�os.** POMPONINA ****:** �Pues b�scate otro! **ANCIANA**** :**_(Se r�e)_ Qu� inocente eres, chiquilla. Me recuerdas a mi de joven, cuando era guapa y estaba llena de energ�a, igual que t�. _(Pausa, suspira)_ Es imposible que encuentre a alguien que me quiera, ya estoy demasiado vieja. _(Fija su mirada en la suya, las cejas ca�das (cansancio/tristeza)_ Perm�teme darte un consejo: disfruta mientras puedas de tu juventud. Cuando pasan los a�os, la gente se olvida de t�, ya dejas de interesar a los dem�s, y si quieres sobrevivir debes dejar atr�s los deseos de libertad y de ilusi�n en los que has cre�do.**POMPONINA ****:** _(El semblante de Pomponina se torna consternado)_ **ANCIANA**** :**_(Con un tono alegre)_ Ay pero no te pongas as�, perdona si te he asustado. Solo intentaba ayudarte, pero he acabado con mis desvar�os, como siempre...**POMPONINA ****:** �Es que me parece muy triste que todo acabe as�! �C�mo algo tan bonito como es este mundo puede tornarse en algo tan fr�o y solitario? Es demasiado cruel, �tienes que ponerle un bonito final a esta triste historia! **ANCIANA**** : **No te preocupes por m�. Haz como los dem�s y d�jame con mis problemas, ya me las arreglar�, de verdad.** POMPONINA ****:** _(Mirada triste y pensativa - Despu�s se le ilumina el rostro)_ Pues yo todav�a tengo esperanza en que todo puede ir a mejor para t�. Pero me tienes que prometer que vas a seguir con la tienda una semana m�s al menos. **ANCIANA**** :**_(La mira con ternura)_ Si de verdad te hace tanta ilusi�n, est� bien. Lo har� por t�.**POMPONINA ****:** _(Llena de alegr�a)_ �Genial! Pues para que la cosa empiece bien quer�a 5 cajas de bombones. _(Saca todo el dinero que llevaba)_ **ANCIANA**** :**_(Se le contagia la ilusi�n de Pomponina, responde alegre)_ �Pero son muchas cajas para ti sola!**POMPONINA ****:** �Te aseguro que no! �Me encantan los bombones! _(Dice ri�ndose)_ **ANCIANA**** :**_(Sigue alegre)_ Est� bien. �Pues que los disfrutes mucho! �Y muchas gracias por todo!
**Fuera flashback**** ANCIANA ****:** Y as� fue como conoc� a la chica que buscas. **ANCIANA**** :**_(Sonr�e con ternura)_ Desde ese d�a empez� a venir mucha gente. Todos dec�an que la chica m�s hermosa del mundo les hab�a hablado de un sitio fant�stico y que ten�an que probarlo. Adem�s, les hab�a dado una muestra proveniente del lugar la cual les encant�.**ANCIANA ****:** Me da pena pensar que al final no pudiese probarlos. Con la de gente que ha venido, estoy segura de que les di� casi todos los bombones. _(Hace una pausa)_ �Podr�as hacerme un favor? Cuando te la encuentres, dale esta caja de bombones. Y dale las gracias de mi parte. **PIGMALI�N:** Despu�s de haberte devuelto tu negocio entiendo que quieras agradec�rselo de alguna forma. **ANCIANA**** :**_(sonr�e y niega con la cabeza)_ No le doy las gracias por eso. Se las doy por devolverme la esperanza.
1. Tras esto le podremos dar a Pomponina la caja de bombones.


**MINIJUEGO** Pomponina lanzar� abanico tornados. �stos se comportar�n como simples proyectiles que no avanzar�n en l�nea recta, sino en zig-zag ya que rebotar�n en las paredes al chocar contra ellas.Cuando Pomponina tenga la vida reducida a la mitad, lanzar� tres tornados en vez de uno, con la misma mec�nica para los tornados de los lados, siendo el del centro un proyectil que avanzar� de forma recta. ![](RackMultipart20201123-4-2z5txr_html_30f5ef67a8184dfb.png)
 ![](RackMultipart20201123-4-2z5txr_html_f96cb9aa3c22274a.png)

###
# Don Lindo
 ![](RackMultipart20201123-4-2z5txr_html_8bb31dcb53a3fd29.png)

###



**CONVERSACIONES**** PIGMALI�N: **Don Lindo, t� que eres de los mu�ecos m�s sensatos, vuelve al teatro.** DON LINDO: **No, sin el amor de Pomponina no voy a ninguna parte.** PIGMALI�N ****:** No tienes que depender de ning�n mu�eco, Don Lindo. **DON LINDO**** :** No, no y no. No me ir� a ninguna parte sin su amor, y menos contigo.
**SI SE SALVA A DON LINDO:**** DON LINDO: **Bueno, creo que mi sitio est� ah� en el teatro, haciendo la m�sica de tus farsas. En verdad lo echo de menos.** SI SE MATA A DON LINDO: ****DON LINDO:** Vaya� Creo que ahora tendr� que tocar con mi ukelele en alg�n otro lugar� Espero que Pomponina, por mucho que me duela, no est� all� vi�ndome, que se quede aqu� a salvo.
**INFORMACI�N**
- **FOTO DE POMPONINA CON UN CORAZ�N DIBUJADO:**
  - **PIGMALI�N PENSANDO:** Nunca imagin� que un mu�eco se podr�a enamorar de otro.
- **RAMO DE FLORES CON UN PAPEL QUE PONGA &quot;PARA POMPONINA&quot;:**
  - **PIGMALI�N PENSANDO:** No puedo entender c�mo uno de mis mu�ecos ha podido llegar a sentir una emoci�n tan humana.
- **GORRO (PUZZLE) (DESBLOQUEA OPCI�N CHAT)**
  - **PIGMALI�N PENSANDO:** Nunca le he regalado nada, espero que con el gorro le quite importancia a su peluca.
- **UKELELE (PUZZLE) (DESBLOQUEA OPCI�N CHAT)**
  - **PIGMALI�N PENSANDO:** Seguro que agradecer� recibir un ukelele. L�stima que el suyo lo hayan roto.
- **CARTERA: (PUZZLE) (DESBLOQUEA OPCI�N CHAT)**
  - **PIGMALI�N PENSANDO:** Tendr�a que devolv�rsela a su due�o. O puedo comprarle algo a Don Lindo. Incluso ofrecersela. A todo el mundo le gusta el dinero.
- **CORBATA: (PUZZLE) (DESBLOQUEA OPCI�N CHAT)**
  - �� **PIGMALI�N PENSANDO:** Corbata cutre, perfecta para �l.
**OPCIONES DE CHAT**
- **(BUENA): M�sica (desbloqueada) Se escoge aleatoriamente una opci�n. Se puede repetir.**

- **PIGMALI�N** : Tienes que volver conmigo, las farsas necesitan de tu m�sica.
- **DON LINDO:** �Tan importante es mi m�sica?


- **PIGMALI�N** : Vuelve al teatro y pasamos un rato tocando alg�n instrumento de los que te gustan.
- **DON LINDO:** Quiz� no sea mala idea.


- **(INDIFERENTE): Gritar (desbloqueada)**

- **PIGMALI�N:** �QUE VENGAS CONMIGO!
- **DON LINDO:** �QUE NO QUIERO!


- **(MALA): Pomponina (desbloqueada) Se escoge aleatoriamente una opci�n. Se puede repetir.**

- **PIGMALI�N** : Asume de una vez que Pomponina pasa de ti.
- **DON LINDO:** �C�mo osas!


- **PIGMALI�N:** Ya hay que ser cutre para arrastrarse tanto por Pomponina.
- **DON LINDO:** T� no eres nadie para decir c�mo conseguir los encantos de la hermosa Pomponina.


- **PIGMALI�N:** No te mereces a Pomponina, no est�s a su altura.
- **DON LINDO:** C�llate, apestoso.


- **(MALA): Persuadir (desbloqueada) Se escoge aleatoriamente una opci�n. Se puede repetir.**

- **PIGMALI�N** : Si no vienes conmigo te quitar� la peluca y te quedar�s calvo.
- **DON LINDO:** Si me voy por mi cuenta podr� comprar todas las pelucas que quiera.


- **PIGMALI�N** : Te aprecio mucho, Don Lindo, siempre fuiste una de mis creaciones m�s especiales.
- **DON LINDO:** Si me quisieses tanto me habr�as hecho con pelo, como a los dem�s.


- **PIGMALI�N:** Ponponina va a venir conmigo, se pondr� muy triste si ve que la has abandonado.
- **DON LINDO:** �Mentiroso, mentiroso! Pomponina nunca volver�a contigo, ella querr�a escaparse para vivir una vida a mi lado. No te creo.


- **(MUY BUENA) Regalar gorro (desbloquear por puzzle)**

- **PIGMALI�N:** Me han regalado un gorro, he pensado que te podr�a gustar tenerlo.
- **DON LINDO:** He de decir que esta vez tienes raz�n. �Me gusta! Gracias.


-
- **(MUY BUENA) Dar ukelele (desbloquear por puzzle)**

- **PIGMALI�N:** Siento decirte que unos gamberros han roto tu ukelele. Pero he podido conseguirte uno.
- **DON LINDO:** Gracias Pigmali�n. Sabes que significa mucho para m�.


- **(MALA) Regalar corbata(desbloquear por puzzle)**

- **PIGMALI�N:** He comprado una corbata, creo que es de tu estilo.
- **DON LINDO:** Ooh� si te soy sincero� llevaba tiempo sin ver algo tan horrible. Sigues sin saber nada de nosotros, &quot;tus mu�ecos&quot;. Decepcionante.


- **(MALA) Dar cartera (desbloquear por puzzle)**

- **PIGMALI�N:** Seguro que aceptas esta cartera con dinero para volver al teatro..
- **DON LINDO:** A ver si te das cuenta de que no todo gira en torno al dinero, garrapata sin patas.


| TABLA DE PUNTOS DE PERSUASI�N |
| --- |
| **TOTAL** | **Ukelele** | **Gorro** | **Musica** | **Gritar** |
| +50 | +40 | +12 | 0 |
| **100** | **Persuadir** | **Pomponina** | **Corbata** | **Cartera** |
| -5 | -10 | -20 | -30 |

**MAPA**
- **Zonas y ambientaci�n**
 **Plaza central.** Habr� un NPC, si interactuamos con �l, dir� que tiene fr�o. ![](RackMultipart20201123-4-2z5txr_html_1a0e6f9ed67d515b.png)
**Tienda de ropa.** Habr� un NPC al que le podremos preguntar por don Lindo. **Florister�a.** Tienda de m�sica. Podremos adquirir un ukelele. (Conecta con la zona de Pomponina) **Taberna.** El tabernero ser� quien nos lleve al flashback de Don Lindo. **Zona Residencial.** Veremos a un chaval siendo acosado por un grupo de j�venes. Tambi�n veremos otro NPC que tiene fr�o. (Conecta con la zona de Cucu) **Calle vac�a.** Una foto de Pomponina y una rotonda, sin m�s. Zona paup�rrima del mapa. **Don Lindo.**
La zona de Don Lindo estar� ambientada en un barrio pobre de Madrid, rozando la m�xima pobreza. En cuanto a est�tica, predominar�n los edificios de ladrillos y las baldosas de las calles (todo esto especificado gr�ficamente en el otro documento). Se encontrar�n numerosos grafitis en paredes.Las personas, caracterizadas por tener un punto de vista de la vida un tanto distinto a lo normal, pues aprecian cualquier detalle como el de poder comer en familia. Abro par�ntesis para decir que la vestimenta se puede resumir a vaqueros y sudaderas o ch�ndals.

**PUZZLES**** -Gorro, corbata**
1. Si hablamos con el dependiente de la tienda de ropa, le preguntaremos acerca de Don Lindo. Amablemente nos dir� que en este momento est� muy liado, va con el tiempo justo y que no nos puede ayudar, pues tiene que repartir unos gorros, de forma gratuita a los habitantes de la zona.
  - **PIGMALI�N:** Perdona, �has visto por aqu� a un tipo con traje y corbata, y que adem�s parece que lleva una peluca?
  - **DEPENDIENTE:** Me quiere sonar s�, pero ahora mismo no lo termino de recordar. Adem�s, estoy muy liado. Tengo que ordenar toda la tienda y repartir estos gorros. �Te importar�a echarme una mano con ellos? Mientras intentar� pensar en el hombre que me has dicho.
  - **PIGMALI�N:** Est� bien, �a qui�n tengo que d�rselos?
  - **DEPENDIENTE:** A cualquier persona que veas que tiene fr�o por la calle, se acerca el invierno y, si entre todos colaboramos, haremos que sea menos duro.
2. Repartiremos los gorros a los NPCs que tienen fr�o.
  - **PIGMALI�N:** Hola. Creo que este gorro es para ti.
  - **NPC CON FR�O:** Much�simas gracias. No sabes lo bien que me viene.
3. Si volvemos a la tienda, el dependiente nos dir� que Don Lindo estuvo hablando con �l, que por eso iba justo de tiempo y, sin dar detalles de la conversaci�n, nos ofrece un gorro para �l, diciendo que se la ha olvidado d�rselo a �l antes.
  - **PIGMALI�N:** Ya los he repartido.
  - **DEPENDIENTE:** �Much�simas gracias! Supongo que antes te refer�as a Don Lindo, �me equivoco?
  - **PIGMALI�N:** En absoluto.
  - **DEPENDIENTE:** Se pas� por aqu� de casualidad, estuvimos hablando,un buen rato. Me comentaba cosas de un teatro y de una mujer por la que est� muy enamorado por lo visto. Hasta toc� algo con un ukelele. Sin embargo, nos entretuvimos mucho y ha sido la causa por la que voy tan mal de tiempo. Sin darme cuenta, se me olvid� darle a �l un gorro. �Te importar�a d�rselo de mi parte? Me da pena haberme olvidado de d�rselo.
NOTA: Podemos ir a la tienda con la cartera, de esta forma compraremos una corbata.
**-Ukelele, cartera**
1. Hablando por primera vez con el Tabernero, �ste nos comentar� simplemente que Don Lindo les dej� un momento el Ukelele mientras se iba a hacer algo, no especifica el qu�. Sin embargo unos gamberros entraron a la taberna y lo rompieron.
  - **TABERNERO:** �Malditos gamberros!
  - **PIGMALI�N:** �Qu� sucede?
  - **TABERNERO:** Pues mira, vino un hombre muy majo por aqu�, como todos, con sus problemas, pero se notaba que era muy buena persona. Estuvimos charlando un rato y luego nos ameniz� el d�a tocando un poco de m�sica con un ukelele. Sin embargo, ten�a que irse y, nos pidi� que le guard�semos su ukelele, pero unos gamberros entraron y lo rompieron.
  - **PIGMALI�N:** �Menudos sinverg�enzas!
  - **TABERNERO:** Completamente. Siempre est�n haciendo de las suyas� Ojal� alguien le pare los pies alguna vez.
  - **PIGMALI�N PENSANDO:** �D�nde podr�a conseguir un ukelele nuevo? A Don Lindo no le gustar� ver que le han roto el suyo y no tener nada con lo que tocar.
2. Pigmalion si va a la tienda de m�sica, la dependiente le dir� a Pigmali�n que ahora mismo est� cerrado ya que ha perdido su cartera y no puede hacerse cargo de la tienda.
  - **PIGMALI�N:** Hola. Ven�a a comprar un�
  - **DEPENDIENTE:** �Est� cerrado!
  - **PIGMALI�N:** Pero si no es hora de cerrar.
  - **DEPENDIENTE:** �He dicho que est� cerrado! Acaban de venir unos gamberros y se han llevado mi cartera. No pienso atender a nadie.
  - **PIGMALI�N PENSANDO:** Creo que alguien deber�a pararle los pies a esos impresentables.
3. En la Zona Residencial, si interactuamos con el chaval que est� siendo acosado, espantaremos a los acosadores y el chaval te dar� la cartera de la dependiente.
  - **PIGMALI�N:** Eh vosotros, sinverg�enzas, �dejad al joven en paz!
  - (LOS GAMBERROS SE VAN)
  - **JOVEN:** Much�simas gracias buen hombre. Les he visto con una cartera que no es suya, sino de la dependiente de la tienda de m�sica.
  - **PIGMALI�N:** La has cogido de vuelta y han ido a por ti, �verdad?
  - **JOVEN:** Efectivamente. �Podr�as llev�rsela de vuelta?
4. Al volver a la tienda de m�sica, como agradecimiento, la dependiente nos regalar�.
  - **DEPENDIENTE:** �Much�simas gracias por tra�rmela de vuelta! Si te soy sincera, la daba por perdida. Toma este ukelele como agradecimiento.
NOTA: Si el jugador coge la cartera puede directamente ofrec�rsela a Don Lindo, sin devolv�rsela a la dependienta.NOTA: Si el jugador coge primero la cartera en vez de hablar antes con la dependienta, saltar� el paso 2 (directamente le dir� gracias y le dar� el ukelele)NOTA: Con el ukelele podemos volver a hablar con el Tabernero y veremos el **flashback** de Don Lindo.
**FLASHBACK**** TABERNERO: **Buenos d�as, �deseas tomar algo?** DON LINDO: **Nada que no sea el amor de Pomponina, mi querido amigo.** TABERNERO: **Bueno, amigo m�o. Su caso no es nuevo por aqu�.** DON LINDO: **Imposible, nadie ha pasado por aqu� pensando en alguien con tal magn�fica belleza.** TABERNERO: **�Y por qu� no va a por ella?** DON LINDO: **�Me has visto bien? Me hicieron mal, ni siquiera tengo pelo, me pusieron una peluca en vez de hacerme un pelo decente. Pomponina y yo no estamos a la misma altura.** TABERNERO: **Le das demasiada importancia al f�sico. Lo importante est� en el interior.** DON LINDO: **Con ella no es as� desgraciadamente.** TABERNERO: **Todos por aqu� tenemos otros problemas, pero podemos quitarles importancia un rato tomando algo. �Te pongo una cerveza? Invita la casa.** DON LINDO: **�Por qu� tanta amabilidad, si est� claro que necesit�is el dinero m�s que nadie por esta zona?** TABERNERO: **Cierto es, pero por aqu�, a pesar de todo, intentamos ayudarnos siempre que podemos.** DON LINDO: **Pero, te est�s perjudicando.** TABERNERO: **No lo niego, pero prefiero ver a mis vecinos felices, adem�s, todos por aqu� actuamos igual. Hoy por ti, ma�ana por m�. Aunque no lo voy a negar, a veces las cosas se ponen muy complicadas.** DON LINDO: **De donde vengo, hemos sido bastante ego�stas, lo intent�, pero no puede hacer que mis antiguos amigos cambiaran la mentalidad.** TABERNERO: **Aqu� la vida la vemos de una forma distinta, es as� como a pesar de las dificultades, nos intentamos apoyar todo lo posible. Es m�s, t� encajar�as muy bien aqu�, se ve que en el fondo, actuar�as como nosotros.** DON LINDO: **Nunca se me ha presentado la oportunidad all� de ayudar con algo, pues los desagradecidos de mis compa�eros no se lo merec�an. Pero si me lo permites, podr�a tocar algo con mi ukelele.** TABERNERO:**Ser�a maravilloso.(M�SICA DE UKELELE)**TABERNERO: **Eres una buena persona, seguro que esa Pomponina no se ha dado cuenta de lo que puede tener. Amigo m�o, debes hacerle saber lo que se est� perdiendo contigo.** DON LINDO: **Eso es, tengo que ir y demostr�rselo. Ahora mismo voy. �Te importa si te dejo aqu� mi ukelele?** TABERNERO:** Sin problema. Mucho �nimo amigo m�o.
**MINIJUEGO** Don Lindo atacar� a Pigmali�n lanzando dos notas musicales que rebotar�n por las cuatro paredes de la sala. Pigmali�n deber� tratar de esquivarlas para pasar de fase, lo cual suceder� despu�s de un tiempo. Mientras rebotan las dos notas, Don Lindo no har� nada m�s a menos que est� enfadado. ![](RackMultipart20201123-4-2z5txr_html_1a5e57dce309d12.png)Cuando la salud de Don Lindo baje a la mitad, adem�s de las dos notas rebotantes, usar� su mal genio para crear explosiones en la zona de pigmali�n. La zona que va a explotar se ver� como un c�rculo de un color distinto al del suelo, lo que permitir� al jugador tener tiempo para esquivarlo y que no sea arbitrario. En caso de impacto tambi�n le quitar�n vida al jugador. Estas explosiones aparecer�n durante toda la fase, pero nunca habr� dos explosiones en proceso simult�neamente, si no que se dejar� un peque�o espacio de tiempo de dos o tres segundos entre cada una. (Seg�n el tiempo de aviso con lo del c�rculo habr� que reducirlo m�s o menos). ![](RackMultipart20201123-4-2z5txr_html_102c86bda44006c4.gif)

(Al acabar con el �ltimo mu�eco:Llega paloma mensajera del duque diciendo que la obra va a empezar, que vuelva r�pido y qu� ha hecho con los mu�ecos.Pigmali�n piensa:
- Pacifista: tengo que llegar r�pido para para prepararla, es una pena que no haya encontrado a Urdemalas, me hubiera gustado que actuara)
- Puppetcidal: bueno, tendr� que hacer m�s mu�ecos.
- Normal: 2 muertos 1 vivo: No tengo ganas de hacer la obra, sin mis mu�ecos no me veo capaz de hacerla.
 1 muerto 2 vivos: Tengo que llegar r�pido para modificar la obra, me pesa no haber sido capaz de convencer a \*Insertar nombre\*


###
# Agalzapo


 (Al acabar con el �ltimo mu�eco:Llega paloma mensajera del duque diciendo que la obra va a empezar, que vuelva r�pido y qu� ha hecho con los mu�ecos.Pigmali�n piensa:
- Pacifista: tengo que llegar r�pido para prepararla, es una pena que no haya encontrado a Urdemalas, me hubiera gustado que actuara)
- Puppetcidal: bueno, tendr� que hacer m�s mu�ecos.
- Normal: 2 muertos 1 vivo: No tengo ganas de hacer la obra, sin mis mu�ecos no me veo capaz de hacerla.
 1 muerto 2 vivos: Tengo que llegar r�pido para modificar la obra, me pesa no haber sido capaz de convencer a \*Insertar nombre\*

DESCRIPCI�N: (En qu� mu�eco nos basamos, personalidad, c�mo encontrarlo)
enjuto,anguloso, con cierto aspecto clerical,peinado corto, echado hacia atr�s, rostro fino, afeitado, agudo,inteligente ,cejas mefistofelicas, ojos vivisimos, redondos y hundidos, nariz descarnada, aguile�a, boca sutil y astuta. Va muy sencillo, de oscuro.
Es el mu�eco m�s complicado y dif�cil que Pigmali�n ha hecho, es el que m�s se acerca a un humano, pero el hacerle tan real provoc� que la mente de Urdemalas se fuera haciendo m�s diab�lica progresivamente.


Urdemalas es el �ltimo mu�eco, y no est� en ninguna zona del mapa. Aparece en el teatro si se ha hecho la ruta salvadora o la puppetcidal.
- Salvadora: Al enterarse de que Pigmali�n ha decidido salvar a todos los mu�ecos, decide volver al teatro y seguir actuando.
- Puppetcidal: Al enterarse de que Pigmali�n ha matado a todos sus compa�eros, decide volver a vengarse.
- Normal: Urdemalas, al enterarse de que algunos mu�ecos han muerto, decide huir.

INFORMACI�N-Pigmali�n : �Parece que se me han escapado los mu�ecos! **�l** seguro que ya ha escapado, pero al resto a�n puedo alcanzarlos.-Al matar al primer mu�eco: Si \*inserte nombre\* est� tan agresivo, no me imagino de lo que **�l** es capaz.


-Final de juego neutral: 1- Cuadro de texto donde salga : \*Urdemalas escap�\* 2- Pigmali�n : Me alivia pensar que no me he cruzado con **Urdemalas** pero a la vez me atormenta saber que anda por ah� suelto.
**CONVERSACIONES**
- **Neutral :** A�os m�s tarde� \*Escena con Pigmali�n en su casa (como en un sue�o)\* \*Suena toc toc toc\* \*Entra Urdemalas en casa\*Pigmalion : !Pigmalion : �C�mo has entrado / �Que haces aqu�?Urdemalas : Vengo a vengar a mis compa�eros\*Urdemalas pega un tiro con la escopeta, y justo cuando suena el sonido del disparo, Pigmalion se despierta\*\*Suena toc toc toc de nuevo\* - **Salvadora:**
- URDEMALAS: At�nito me encuentro, de que alguien como t�, despu�s de todo este tiempo y todo lo que nos has hecho, nos hayas por fin entendido.
- Pigmali�n : �Urdemalas! �Por ti estaba pregunt�ndome!. Me alegro de que este bien
- Urdemalas: Lo cierto es que estaba decidido a irme. Pero despu�s de ver c�mo tratabas a mi compa�eros, creo que te dar� una segunda oportunidad.
- Pero no la vuelvas a cagar, **�entendido?** (Cara siniestra) \*Tira la escopeta\*
(basuras o texto)- **Puppetcidal:** - Urdemalas: despu�s de todo lo que hemos hecho por ti, de lo que hemos tragado, encima nos cazas como si de ganado nos tratasemos. �Es que no significamos nada para ti? Me las vas a pagar. **OPCIONES DE CHAT**
No hay opciones de chat.En caso de que el jugador elija esta opci�n, se mostrar� un mensaje diciendo:-Ya es muy tarde para hacer esoEl mensaje puede salir en pantalla como dicho por urdemalas o dicho por nadie.
MINIJUEGO La batalla se divide en tres fases:
(Los disparos se destruir�n en colisi�n con una pared o con el jugador.)(Urdemalas al ser m�s inteligente puede combinar diferentes ataques)
En la primera fase, urdemalas utiliza los ataques de sus compa�eros mu�ecos en su primera fase.En la segunda fase, Urdemalas utiliza los ataques de sus compa�eros mu�ecos en su segunda fase.Veanse sus esquemas y descripciones detalladas en 4.3.1 en sus respectivas descripciones.
 ![](RackMultipart20201123-4-2z5txr_html_18c6a245451e690a.png)Urdemalas en su tercera fase, y al verse al borde de su muerte, saca la escopeta, con la cual tiene tres modos de disparo, entre los cuales ir� alternando.
-Disparo concentrado, munici�n slug.Este ser� dos disparos r�pidos hacia el jugador y de da�o aumentado. Apuntando a la posici�n en la que se encuentre Pigmali�n a la hora de disparar cada cartucho. ![](RackMultipart20201123-4-2z5txr_html_7dfc3038fedd916e.png)-PerdigonesUrdemalas dispara la escopeta, disparando numerosos perdigones en un cono ![](RackMultipart20201123-4-2z5txr_html_81e66590e7a30534.png)
-Disparos que rebotanUrdemalas dispara tres proyectiles, uno en linea recta hacia el jugador y otros dos en cono (uno a cada lado del disparo central). Los disparos en cono rebotar�n en las paredes un n�mero limitado de veces.

 ![](RackMultipart20201123-4-2z5txr_html_c04c7f64ba28ae96.png)
**Referencias**


- _El Se�or De Pigmali�n, Jacinto Grau (1921)_
- _Undertale, Toby Fox (2015)_
- _Cuphead, StudioMDHR (2017)_




**IDEAS POST CLASE VIERNES**
Los cambios generales aceptados tras la clase de PVLI son:Un mundo abierto conexo el cual se sigue componiendo por pantallas est�ticas que a su vez est�n recogidas en zonas. Cada zona est� relacionada con un mu�eco, por lo que habr� personajes y objetos relacionados con cada mu�eco �nica y exclusivamente en su zona. Sin embargo, ahora las zonas tendr�n conexiones entre s�, y el jugador podr� ir a por los mu�ecos en cualquier orden. Otro cambio al mundo es que va a tener cambios en su interior, va a ser din�mico. Los mu�ecos habr�n tenido impacto en los lugares por los que han pasado, as� como en sus habitantes. A medida que avancemos el mundo ir� evolucionando.
Moralidad: se va a profundizar en la moralidad y la narrativa. El jugador podr� interactuar mucho m�s con los personajes y la historia y podr� fijarse en ciertos detalles que nos hablar�n sobre los mu�ecos. A medida que el jugador tome decisiones, su aspecto cambiar�.

El foco principal de la historia ser� la dualidad moral por parte del jugador.El mapa estar� &quot;dividido&quot; en zonas , en general interconectadas entre ellas.Los mu�ecos habr�n tenido un impacto en la zona sobre la que hayan pasado, y habr�n elementos y personajes que dar�n a notar c�mo ellos han pasado por ah�.El punto de estos elementos ser� el diluir la barrera entre mu�ecos y humanos, con el fin de no dejar muy claro al jugador que opciones morales elegir, adem�s de proporcionar informaci�n acerca del mu�eco que haya en esa zona, lo cual ayudar� al jugador dentro de la batalla a elegir las opciones correctas de di�logo.A lo largo del mapa, adem�s de (a lo mejor) puzzles, habr�n mini decisiones morales. Estas pueden ser, por ejemplo, dependientes de las respuestas que el jugador de a ciertos npcs o mini eventos donde el jugador pueda hacer algo para hacer el bien o simplemente dejarlo pasar e ignorarlo. Dentro de estos podemos hacer que la mayor�a sean irrelevantes, y sean introducidos solo para darle m�s vida al mundo y darle al jugador m�s sensaci�n de inmersi�n, y otros pocos donde las decisiones que tomes si que afecten al desarrollo del juego y a su final.
Este duelo moral (lo que m�s pesa son las decisiones tomadas con los mu�ecos) se ver� reflejado en las vestimentas de Pigmali�n, ya que, cada vez que el jugador mate a un mu�eco, su ropa se ver� un poco m�s sucia, desarreglada y tambi�n pueden meterse cambios en la forma de caminar del protagonista y en la paleta de colores del mundo (podemos hacer que el mundo se vea un poco m�s descolorido cada vez, con filtros), mientras que si el jugador decide llevar una ruta buena, se puede hacer lo contrario.Lo mismo con el tema del p�blico; si matas a mucho la gente est� descontenta/ se va y si salvas a m�s la gente est� m�s contenta o se va aumentando (esto depende de si lo hacemos in-game o en html).
Manejo de los finales con diagramas de estado, donde est� bien explicado qu� decisiones llevan a cierto final.
Los finales que tenemos hasta ahora me parecen bien:Genocida: todos muertos, pelea final.(matas a todos y pasas del mundo)Neutral: Salvas a unos y a los que salvas huyen(neutro)Pacifista: Todos los mu�ecos vuelven contigo y hay final feliz(salvas a todos y haces todos los eventos morales)
Ahora que hay m�s elementos dentro del juego, se pueden meter m�s interacciones o incluso que npcs act�en antes y despu�s de una batalla, por ejemplo, que despu�s de matar a cucu en caso de que se haya hecho aparezca un ni�o corriendo llorando diciendo que se divert�a mucho con el.
Remodelar los elementos que dan info acerca de los mu�ecos para adaptarlos al mundo