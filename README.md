# PVLI-2020-21-CUCU-PROLOGUE
PVLI UCM PROJECT 2020/21

# Desarrolladores
 - Manuel Adeliño Consuegra
 - Rodrigo Tobar Guillén 
 - Rubén González Ortiz
 - Jonathan Sebastián Andrade Gordillo

# GDD
***CUCU: PROLOGUE***

**Documento de diseño de videojuego**

*Nombre de los autores o la empresa*

*Sitio web o correo electrónico de contacto*

Versión 1.2 - 19 de septiembre de 2019

+-------------------------------+--------------------------------+
| **Resumen:**                  |                                |
+===============================+================================+
| **Géneros:** Rol.             | **Modos:** Individual          |
+-------------------------------+--------------------------------+
| **Público objetivo:** ...\    | **Plataformas:** PC, buscador. |
| *Edad, sexo, región e idioma* |                                |
+-------------------------------+--------------------------------+
| **Características:** Top Down |                                |
|                               |                                |
| Elecciones                    |                                |
+-------------------------------+--------------------------------+

**Descripción**

  ----------------------------------------
  **Logotipo y portada del juego**![][1]
  ----------------------------------------

**[1. Aspectos generales] 3**

**[2. Menús] 3**

> [2.1 Menú de inicio] 3
>
> [2.2 Menú de pausa] 3
>
> [2.3 Menú de interacción con los muñecos] 3

**[3. Configuración, interfaz y controles] 4**

> [3.1 Configuración] 4
>
> [3.2 Interfaz y control] 4

**[4. Jugabilidad] 4**

> [4.1 Mecánica] 4
>
> [4.1.1 Movimiento e interacción] 4
>
> [4.1.2 Enfrentamiento contra enemigos] 4
>
> [4.1.3 Objetos] 5
>
> [4.2 Dinámica] 5
>
> [4.2.1 Dinámica puzzles] 5
>
> [4.2.2 Dinámica muñecos] 6
>
> [4.3 Estética] 6

**[5. Contenido] 7**

> [5.1 Historia] 7
>
> [5.2 Mapa] 7
>
> [5.3.Personajes] 8
>
> [Juan] 8
>
> [Pomponina] 14
>
> [Don Lindo] 22
>
> [Agalzapo] 29

#  

# 1. Aspectos generales

Es un juego de rol con una perspectiva top-down. El personaje podrá moverse en todas direcciones. Algunas de las características claves del mismo son: el diálogo del jugador con los demás personajes, dado que la trama tendrá un peso importante en el juego, y el combate, que se basará en un sistema de minijuegos distintos entre sí basados en esquivar proyectiles.

# 2. Menús

## 2.1 Menú de inicio

-   El título del juego.

-   Botón de jugar, el cual iniciará automáticamente el juego.

## 2.2 Menú de pausa

-   Botón de salir del juego

-   Botón de seguir jugando

## 2.3 Menú de interacción con los muñecos

Este menú aparece al acercarse a un personaje y pulsar el botón de interacción

-   **Atacar**: Al darle a atacar comienza el minijuego de ataque del muñeco en cuestión.

-   **Hablar**: Las opciones del menú de combate se cambian por las distintas opciones de diálogo del personaje. P.e: Atacar → Chiste, Hablar → Halago \...

-   **Salvarle**: si los PM están a cero, al darle se acaba la pelea y perdonas al muñeco , salvándolo. Si no están a 0, aparece el minijuego y el jugador pierde su turno.

Al acabar de interaccionar con el muñeco (haberle matado o salvado) se cierra el menú. El jugador se encontrará donde interactuó con el muñeco, solo que este ya no estará ahí.![][2]

#  

# 3. Configuración, interfaz y controles

## 3.1 Configuración

Las posibilidades que tendrá el usuario a la hora de configurar el videojuego serán dos botones, uno para quitar el sonido y otro para quitar la música.

Aparecen siempre en la zona superior derecha de la pantalla.

## 3.2 Interfaz y control

No hay interfaz fuera de combate.

Interfaz dentro de combate:

Vida del personaje y vida del enemigo en la esquina superior izquierda y derecha respectivamente.

# 4. Jugabilidad

## 4.1 Mecánica 

### 4.1.1 Movimiento e interacción

El jugador se podrá mover en todas las direcciones de los ejes X Y con las teclas WASD para moverse en dirección norte, este,sur y oeste respectivamente, y la combinación de esas direcciones, completando un movimiento 8D. Por otra parte, con la tecla "E" podrá interactuar con el escenario, ya sea con objetos o personas.

### 4.1.2 Enfrentamiento contra enemigos

El jugador tendrá una barra de vida durante los combates. Tendrá X puntos de vida. Si llegan a 0, Pigmalión muere y reaparece en un punto de guardado.

Los muñecos también tendrán una barra de vida visible para el jugador. Al igual que con Pigmalión, si llega a 0 morirán. Al empezar un combate la vida del muñeco está siempre al máximo. Cuando acaba un combate, Pigmalión regenera parte de su vida (un 20% del total).

El muñeco además tendrá unos **Puntos De Persuasión** que subirán si Pigmalión selecciona las opciones adecuadas al hablar y bajarán cuando pase lo contrario. Estos puntos no serán visibles para el jugador.

El enfrentamiento tendrá dos fases, una de toma de decisiones y otra más dinámica.

La primera fase del combate consta de una toma de decisiones, nombradas en el punto 2 del documento:

**FASE 1**

**Atacar:** Cuando elijamos esta acción, aparecerá un minijuego con el que se establecerá la cantidad de daño a infligir. Aparecerá un rectángulo horizontal con dos barras verticales que se moverán desde las esquinas hasta el centro a diferente velocidad. El jugador, presionando la tecla "Espacio", parará las barras. Cuanto más cerca estén, más daño se hará.

![][3]

**Hablar:** El jugador tendrá diferentes opciones para hablar con los muñecos, en función de qué puzzles haya resuelto a lo largo del mapa, podrá elegir más opciones. Las opciones serán beneficiosas o perjudiciales. Si el jugador elige una opción mala, la segunda fase más complicada en el siguiente turno, si elige una buena, subirán los Puntos de Persuasión, una medida invisible al jugador, que cuando llegue al máximo, el combate acabará salvando al muñeco. También hay opciones que no acarrean ningún efecto.

**Salvar:** Cuando los puntos de persuasión lleguen a podrás salvar al muñeco dándole a esta opción. Se acabará el combate al instante. Si se selecciona esta opción sin haber llegado a los puntos de persuasión necesarios, el jugador perderá el turno y se pasará a la fase 2.

**FASE 2**

La segunda fase empieza cada vez que elegimos una opción en la fase uno.

En ella el jugador maneja al personaje principal y tendrá que esquivar los ataques del enemigo, perdiendo puntos de vida en caso de no conseguirlo. Cuando ésto último suceda, el jugador pierde vida y se vuelve invulnerable por 2 segundos, parpadeando.

Si el muñeco está por debajo de la mitad de la vida, esta fase se dificultará de distintas formas dependiendo del muñeco(más proyectiles, más rápidos, etc).

Si el jugador selecciona una mala opción en la opción "**Hablar**" de la fase uno, el muñeco se enfada y sus ataques harán el doble de daño en la fase dos de ese turno, lo cual se mostrará con un cambio de tono en el sprite de los ataques(el turno siguiente el daño volverá a la normalidad).

Tras esquivar todos los ataques, volveremos a la primera fase del enfrentamiento y tendremos que tomar nuevas decisiones. Los minijuegos están explicados en cada personaje.

### 4.1.3 Objetos

Se obtendrán al completar los puzzles (o parte de ellos) a lo largo del mapa y se podrán usar, una vez conseguidos, en la opción "**Hablar**".

## 4.2 Dinámica

### 4.2.1 Dinámica puzzles

En función de la toma de decisiones a la hora de hablar con los NPCs del mundo, se pueden obtener unos objetos u otros que servirán para facilitar la opción pacifista del juego, y que en función de la moralidad de la decisión que se seleccione se obtiene un objeto u otro, con distinto significado para el muñeco en el que se use.

### 4.2.2 Dinámica muñecos

La dinámica del juego estará dirigida por las decisiones que tome el jugador a la hora de enfrentarse a los enemigos.

Dentro de la batalla, el jugador tendrá la opción de, o bien matándolos a base de ataques, o bien, hablar con el fin de llegar al máximo de **Puntos De Persuasión**.

Esto diferenciará a su vez tres rutas de juego:

-   **Puppetcidal:** Matará a todos los muñecos.

-   **Pacifista:** Acabará dialogando con todos los muñecos.

-   **Normal:** Se matarán a unos muñecos y a otros no.

En **Historia** explicamos qué sucede en función de la ruta elegida por el jugador.

## 

##  4.3 Estética

La estética general del juego será parecida a la de Undertale, con un mundo abarcable en dos dimensiones (salas sobre las que te puedes mover) y sprites de personajes (protagonista, enemigos, extras\...) de cara al jugador.

El juego por fuera tendrá una estética de representación teatral, es decir, la pantalla de juego se verá como si fuese el escenario de una obra de teatro.

Cada una de las tres zonas en las que se divide el juego tendrá una estética y ambientación distintas.

# 5. Contenido

## 5.1 Historia

Pigmalión es un dramaturgo que se gana la vida usando a unos muñecos que están vivos los cuales ha creado él mismo. Sin embargo, un día estos muñecos deciden escaparse. Ahora Pigmalión, furioso, tiene dos opciones, o bien, eliminarlos por desobedecerle y crear otros, o bien, encontrarles para que vuelvan y puedan continuar su vida tal y cómo era. ¿Estará dispuesto a hacer lo que sea con tal de lograr su objetivo?

Como se ha explicado en la dinámica, la historia podrá seguir las siguientes rutas:

-   Ruta pacifista. En esta ruta, todos los muñecos vuelven al teatro a seguir viviendo con Pigmalión. En esta ruta, aparecerá un último muñeco, Urdemalas, que tras ver que todos sus compañeros están de vuelta en el teatro, se queda también en él.

-   Ruta puppetcidal: En esta ruta, aparecerá también, Urdemalas. En este caso buscará vengarse de Pigmalión. Solo podrá ser eliminado, ya que el jugador no podrá hablar con él.

-   Ruta normal. En esta ruta, los muñecos que queden vivos, huirán del teatro.

## 5.2 Mapa

El mapa será un mundo abierto, marcado por tres diferentes zonas, más una zona central (el teatro). Cada zona trata un solo muñeco, así como sus puzzles.

## ![][4] 

## 5.3.Personajes

Cosas comunes a todos los personajes:

-   Minijuego. El minijuego cambiará de fase cuando la salud del muñeco baja del 50%. Al elegir una opción de chat calificada como mala, en el siguiente minijuego el muñeco infligirá el doble de daño.

-   Objetos. En las opciones de chat, se mostrarán solo las opciones desbloqueadas (esto va principalmente por los muñecos con los que se pueden desbloquear distintos objetos).

-   Diálogos: Una vez seleccionada la opción de habla, se cambiará el dialogo de las cuatro principales opciones a las opciones de chat de cada personaje

Dependiendo del personaje, además, se podrá abrir un submenú de cosas que ofrecer que el jugador puede obtener a través de quests de cada personaje

###  Juan![][5]

> DESCRIPCIÓN:

Personalidad burlesca

Este muñeco fue creado con la intención de hacer comedia. No puede hablar porque fue uno de los primeros muñecos creados por pigmalión. lo único que puede decir es "Cu cu". Dependiendo de la entonación que le ponga puede significar burla, amenaza, enfado\....

> En el juego. Además de acompañar cada cucu con una descripción de la intención del cucu se puede distinguir cada cucu dependiendo de la fuente de éste.
>
> Todos los muñecos le hacen burla y no es muy querido.

**Conversaciones**

Salvar:

-Pigmalión: Menos mal que te vuelves conmigo, eres el único capaz de hacer reír a la gente.

-Juan: CUCU :3

Matar:

-Pigmalión: Fuistes de mis primeros muñecos, se nota lo inferior que eres. Ahora podré rehacerte y mejorarte.

-Juan: cu cu

**INFORMACIÓN**

**(Disfraz de payaso)**

-(Buena): Chiste.

-Pigmalión. pensando(Al principio Juan se reía por cualquier tontería, no se cuanto tiempo llevo sin verle sonreír).

**(Caja de Juan)**

-(Mala): Reírse de él

-Pigmalión. pensando (En el teatro siempre estábamos riéndonos de él, fuimos demasiado crueles)

**(NPC calle)**

-(Buena): Animarle

-NPC: "He visto un señor vestido raro ir dirección hacia el rastro estuvo un rato en la verbena, parecía estar disfrutando como un niño pequeño, no paraba de reir.

**(NPC calle)**

\- Info muñecos humanos: hay una madre con el carrito de su bebe. Al hablar con ella sale un diálogo que dice que dice que su bebe no paraba de llorar hasta que vino una persona muy rara y lo calmó jugando con él, diciéndole CUCU. Al preguntarle por esa persona le dice que volvió por donde vino.

CONVERSACIONES

**Encuentro**

-Muñeco: CU CU (con gesto de sorpresa)

-Pigmalión: Por que te has escapado zoquete?!

-Muñeco: cu cu

-Pigmalión: Con que te vas a comportar así ahora eh?

-Muñeco: **CU CU! (le saca la lengua)**

-Pigmalión: Pues que así sea!

OPCIONES DE CHAT

\- **(Buena): Chiste.**

Una vez seleccionada esta opción Pigmalión dice al azar uno de estos:

1\.

-Pigmalión: ¿Sabes cómo se queda un mago después de comer? Cucu: ...Pigmalión: Magordito

2\.

\- Pigmalión: ¿Cómo se despiden los químicos? -Cucu: ... -Pigmalión: Ácido un placer.

3\.

-Pigmalión: ¿Sabes qué le dice un .gif a un .jpg? -Cucu: ... -Pigmalión: ¡Anímate hombre!

\- **(Mala): Reírse de él**

-   JAJAJAJAJAJA CUCU(riéndose de él)

-   CU CU! \>:(

**-(Buena): Animarle**

1.  

-   Aunque los demás se rían de ti, yo sé que eres especial

-   CUCU :3

2\.

-   La farsa no puede funcionar sin ti, eres parte de la familia

-   CUCU:3

3\.

-   Puedo enseñarte a hablar, pero tendrás que confiar en mí

-   CUCU:3

**- (Indiferente): Dato**

1.  

-   ¿Sabías que Los búhos son las únicas aves que pueden ver el color azul?

-   Cucu: 👍.

    1.  

```{=html}
<!-- -->
```
-   ¿Sabias que Un caracol **puede dormir por 3 años.?**

-   Cucu: 👍.

    1.  

```{=html}
<!-- -->
```
-   ¿Sabías que Fast and Furious 8 está disponible para Netflix EEUU pero no para Netflix ESPAÑA?

-   Cucu: 👍.

  TABLA DE PUNTOS DE PERSUASIÓN                                          
  ------------------------------- ------------ -------------- ---------- ------------
  **TOTAL**                       **Chiste**   **Animarle**   **Dato**   **Reírse**
  100                             +10          +15            +0         -5

**MINIJUEGO (Descripción de la mecánica del muñeco):**

![][6]

El minijuego se parece a este jefe del cuphead, sustituyendo los HA por CU que vayan en grupos de dos.

El jugador puede moverse libremente por la sala, pero si entra a la zona en la que está el muñeco, pierde vida. La zona del muñeco tiene CuCus flotando y que no salen de ella, cuando el muñeco vaya a tirar un cucu, aparece un CuCU diminuto en esta zona, que se va haciendo grande hasta alcanzar su tamaño, y en ese momento se lanza.

El muñeco le lanzará proyectiles, los cuales se verán como "CU CU",

al ser lo único que puede decir el muñeco. Si estos impactan en el jugador, éste pierde vida y su personaje se vuelve invulnerable por 2 segundos, parpadeando, mientras que si impactan contra el muro de la izquierda, desaparecen. Al principio los cucus salen juntos, como en la siguiente imagen:

![][7]

Pero según se va avanzando en el minijuego puede lanzarlos sin que los dos CUs vayan seguidos.

![][8]

Si se opta por atacar al muñeco, en vez de intentar hablar y hacerle entrar en razón, al bajarle la mitad de la vida, aparecen uno nuevo CUCUs, que son como los primeros, uno detrás de otro, pero estos al llegar a la pared, en vez de desaparecer, rebotan y vuelven con el muñeco. Para diferenciar estos CUCUs de los demás, tendrán una fuente distinta (la que usa el muñeco cuando está enfadado) y serán más lentos.

Cuando se hayan aguantado x segundos en el minijuego, desaparece todo lo que tiene que ver con él, y se vuelve al menú de interacción.

Opción mala: x2 Daño Juan : CUCU!

**ZONA de CUCU**

![][9]

![][10]

Esta zona va a estar diferenciada de las demás porque las calles van a estar decoradas de fiesta, como esta:

Las banderillas colgando van a ser los elementos más representativos, además de algunos NPCs vestidos de San Isidro.

1- Va a haber unas indicaciones:

-   Hacia arriba: Plaza Mayor (este cartel el grande para atraer la atención del jugador y que así vaya para arriba al principio)

-   Hacia abajo: Rastro

-   Izquierda: Calle normal, gente comiendo

Acordarse de lo de poner la canción de la plaza mayor pero que suene bajo y por arriba.

2- Calle normal, un par de mesas con gente comiendo a un lado y al otro una madre con su bebe (mirar info de CUCU).

3- Plaza Mayor: (Al entrar empieza a sonar la canción Madrid, Madrid, MAdrid de Placido Domingo https://www.youtube.com/watch?v=KWNZ_w3c3ls&ab_channel=Nisusline)Aquí está la estatua para reconocerla y al lado un par de NPC vestido de chulapos y chulapas dando circulos (bailando). Además hay otros NPC mirando, al preguntarles dicen que vieron a una persona muy rara(vestido como un payaso) que estuvo un rato mirando y cogió la calle que va al rastro. (mirar info)![][11]

4- Calle normal, conexión con la zona azul.

5- Calle normal, hay una tienda de disfraces y se ven el de un payaso. Info de nariz de payaso.

6- Conexión con zona Morada, es el rastro. Hay un par de puestos.

Cartel con anuncio que dice que hacia el oeste hay

una función de títeres.

7- Sala de cucu. hay una pequeña carpa con

dos títeres, uno de ellos es igual que cucu

###  Pomponina![][12]

**CONVERSACIONES**

**[POMPONINA]{.ul}:** No sé por qué has venido hasta mí, no pienso volver contigo.

**[PIGMALIÓN]{.ul}**: No seas boba, no tienes ningún sitio a dónde ir.

**[POMPONINA]{.ul}:** ¡Me da igual! encontraré a alguien que me lleve consigo. Además, seguramente será más divertido que tú.

**[PIGMALIÓN]{.ul}**: Tu sitio es aquí, en el teatro, conmigo y tus compañeros

**[POMPONINA]{.ul}:** No me interesa el teatro, no me interesan mis compañeros, y mucho menos me interesas tú.

**SI SE SALVA A POMPONINA:**

**[POMPONINA:]{.ul}** Creo que después de tanto tiempo al fin empezamos a entendernos. Te daré otra oportunidad, pero más te vale que me trates como a la estrella que soy.

**SI SE MATA A POMPONINA:**

**[POMPONINA:]{.ul}** No puede acabar así\...todavía necesita...mi\...ayuda\...

**INFORMACIÓN**

-   **ESPEJO**

    -   **[PIGMALIÓN PENSANDO]{.ul}**: Pomponina estaba siempre mirándose al espejo, le gustaba estar arreglada, y mucho más que le dijeran lo guapa que estaba.

-   **ABANICO ROTO (PUZZLE) (DESBLOQUEA OPCIÓN CHAT)**

    -   **[PIGMALIÓN PENSANDO]{.ul}**: Quizás se podría arreglar en alguna parte.

-   **COLLAR (PUZZLE) (DESBLOQUEA OPCIÓN DE CHAT)**

    -   **[PIGMALIÓN PENSANDO]{.ul}**: Le gustará como cualquier otra joya, Pomponina es muy básica.

-   **CAJA DE BOMBONES (PUZZLE) (DESBLOQUEA OPCIÓN CHAT)**

    -   **[PIGMALIÓN PENSANDO]{.ul}**: Podría darle estos bombones a Pomponina.

-   **RAMO DE ROSAS MALO(PUZZLE) (DESBLOQUEA OPCIÓN CHAT)**

    -   **[PIGMALIÓN PENSANDO]{.ul}**: A Pomponina siempre le han gustado las rosas.

-   **RAMO DE ROSAS (PUZZLE) (DESBLOQUEA OPCIÓN CHAT)**

    -   **[PIGMALIÓN PENSANDO]{.ul}**: Debería llevárselo a su hijo, pero a Pomponina siempre le han gustado mucho las rosas\...

-   **RAMO DE ROSAS ROSAS(PUZZLE) (DESBLOQUEA OPCIÓN CHAT)**

    -   **[PIGMALIÓN PENSANDO]{.ul}**: Las rosas favoritas de Pomponina son las de color rosa. Estoy seguro de que le encantarían.

**OPCIONES DE CHAT**

-   **(BUENA): Halagar (desbloqueada) Se escoge aleatoriamente una opción. Se puede repetir.**

    -   **[PIGMALIÓN:]{.ul}** ¡Cuidado! No debes ponerte bajo el sol

    -   **[POMPONINA]{.ul}:** ¿Se puede saber por qué me dices eso ahora?

    -   **[PIGMALIÓN:]{.ul}**Porque te derrites bombón

    -   **[POMPONINA]{.ul}:** Tendré cuidado, a nadie le gustan los bombones derretidos

    -   **[PIGMALIÓN:]{.ul}** ¿No serás un compuesto de Fósforo, Erbio, Hierro, Carbono y Tántalo?

    -   **[POMPONINA]{.ul}:** ...

    -   **[PIGMALIÓN:]{.ul}** Porque eres PErFeCTa

    -   **[POMPONINA]{.ul}:** Me encantan tus halagos tan creativos aunque no los entienda.

    -   **[PIGMALIÓN:]{.ul}** Tanto gentile e tanto onesta pare

> la donna mia quand'ella altrui saluta,
>
> ch'ogne lingua deven tremando muta,
>
> e li occhi no l'ardiscon di guardare.

-   **[POMPONINA]{.ul}:** Come parli italiano elegante

```{=html}
<!-- -->
```
-   **(INDIFERENTE): Ordenar (desbloqueada) Se escoge aleatoriamente una opción. Se puede repetir.**

    -   **[PIGMALIÓN:]{.ul}** Vuelve a tu caja.

    -   **[POMPONINA]{.ul}:** ¡No me da la gana!

    -   **[PIGMALIÓN:]{.ul}** Para de seguir con tus tonterías y vuelve ya.

    -   **[POMPONINA]{.ul}:** No quiero, no voy a seguir haciéndote caso.

    -   **[PIGMALIÓN:]{.ul}** No sé a qué estás esperando, pero tienes que volver a ensayar.

    -   **[POMPONINA]{.ul}:** Yo ya no voy a volver a participar en tus nefastas farsas.

```{=html}
<!-- -->
```
-   **(MALA): Amenazar (desbloqueada) Se escoge aleatoriamente una opción. Se puede repetir.**

    -   **[PIGMALIÓN:]{.ul}** vas a tener un castigo muy gordo como no vengas conmigo

    -   **[POMPONINA]{.ul}:** siempre estás igual, estoy cansada de tus castigos, no pienso volver

    -   **[PIGMALIÓN:]{.ul}** Como no vengas ahora mismo no te volveré a hacer regalos

    -   **[POMPONINA]{.ul}:** Con mi belleza habrá cientos de personas que me harán regalos mejores que los tuyos

    -   **[PIGMALIÓN:]{.ul}** Voy a tomar serias represalias contra ti

    -   **[POMPONINA]{.ul}:** Tú mismo, sabes que soy indispensable para ti.

-   **(MUY BUENA): Ofrecer bombones (desbloquear por puzzle)**

    -   **[PIGMALIÓN:]{.ul}** (Ofrecer caja de bombones) Toma. Esto me lo dió una anciana a la que ayudaste para que te lo trajese.

    -   **[POMPONINA]{.ul}:** (Lo acepta) (!) ¿Ha conseguido mantener el negocio?

    -   **[PIGMALIÓN:]{.ul}** Sí, y todo gracias a tí. Esa es la razón por la que creo que nos podemos entender.

    -   **[POMPONINA]{.ul}:** Gracias por traérmelo. (\...) ¿De verdad no estás enfadado?

    -   **[PIGMALIÓN:]{.ul}** No, de hecho nunca he estado tan orgulloso de ti como ahora.

**NOTA: Todos los ramos de rosas se llamarán "Ramo de rosas" para el jugador. Éste no distinguirá los tipos de ramos por el nombre.**

**- (MUY BUENA): Ofrecer ramo de rosas rosas (desbloquear por puzzle)**

-   **[PIGMALIÓN:]{.ul}** (Ofrecer ramo de rosas) Pensé que una forma de disculparme

-   **[POMPONINA]{.ul}:** (Lo acepta) Oh, ¡Qué bien! Mi abanico se me había roto y necesitaba uno nuevo.

**- (BUENA): Ofrecer ramo de rosas (desbloquear por puzzle)**

-   **[PIGMALIÓN:]{.ul}** (Ofrecer ramo de rosas) Te he traído estas rosas. Como siempre te han gustado pensé que te alegrarían.

-   **[POMPONINA]{.ul}:** Ohh, son muy bonitas, quizás podríamos llegar a entendernos.

**- (MALA): Ofrecer ramo de rosas malo (desbloquear por puzzle)**

-   **[PIGMALIÓN:]{.ul}** (Ofrecer ramo de rosas) Te he traído estas rosas. Como siempre te han gustado pensé que te alegrarían.

-   **[POMPONINA]{.ul}:** (Sonríe) ¡Claro que me gustan! (Se enfada) ¡CUANDO NO SON TAN FEAS COMO ESTAS!

-   **(BUENA): Ofrecer abanico**

    -   **[PIGMALIÓN:]{.ul}** (Ofrecer abanico) Encontré tu abanico roto. Como le tenías tanto cariño decidí ir a un anticuario para que lo reparasen.

    -   **[POMPONINA]{.ul}:** (Lo acepta) Ohh ¡qué detalle! Muchas gracias, Pigmalión. Parece que te importo más de lo que pensaba.

-   **(MALA): Ofrecer collar**

    -   **[PIGMALIÓN:]{.ul}** (Ofrecer collar) Te he traído un collar. A las chicas os encantan estas cosas, ¿no?

    -   **[POMPONINA]{.ul}:** ¡No! Te he dicho muchísimas veces que no me gustan los collares! Si vas a tener un detalle deberías darme algo especial para mí, no cualquier baratija que encuentres por ahí.

Se mostrarán las tres opciones desbloqueables además de un botón para ofrecer cosas, una vez le das al botón de ofrecer cosas se sustituirán las opciones anteriores por las de ofrecer los diferentes objetos que el jugador haya recogido. En caso de que no los haya conseguido los objetos se mostrarán en gris

  TABLA DE PUNTOS DE PERSUASIÓN                                                                        
  ------------------------------- ---------------------- -------------- ------------- ---------------- -------------
  **TOTAL**                       **Ramo rosas rosas**   **Bombones**   **Abanico**   **Ramo Rosas**   **Halagar**
                                  +40                    +30            +30           +20              +12
  **100**                         **Ordenar**            **Amenazar**   **Collar**    **Ramo malo**    
                                  0                      -5             -20           -30              

**MAPA**

**- Zonas y ambientación**

![][13]

1.  **Tienda de bombones.** Aquí estará la anciana que lleva la tienda y que nos hará un encargo.

2.  **Plaza con fuente.** Tiene al hijo del de la floristería, a un cliente de la tienda de dulces y la llave. Conecta con la zona verde ( Don Lindo)

3.  **Floristería.** Aquí tendremos a un encargado en apuros y una llave en un florero vacío.

4.  **Calle.** Hay un cliente de la tienda de dulces. Conecta con la zona azul (Cucu)

5.  **Anticuario.** Lugar donde podremos comprar algo o reparar el abanico.

6.  **Casa de Pomponina.** Tiene el espejo y el cajón donde está el abanico.

7.  **Cuarto de Pomponina.** Solo está ella. habitación despejada donde transcurre el combate.

La zona de Pomponina va a estar ambientada en la alta sociedad burguesa de la ciudad. Habrá elementos tales como farolas elegantes, árboles y jardines cuidados, alguna fuente, etc. La gente de la zona iría con traje, bombines, monóculos, vestidos, etc, a excepción de algunos personajes más humildes, los cuales están allí trabajando para la clase alta.

![][14]

**PUZZLES**

**-Abanico/Collar**

1.Si vamos a casa de Pomponina, nos encontraremos con un cajón con el que si intentamos interactuar descubriremos que está cerrado con llave.

2.Al ir a la plaza con fuente, se podrá apreciar un brillo leve en la fuente. Al interactuar con él obtendremos la llave.

3.Al abrir el cajón, encontraremos un abanico roto. Pigmalión pensará que se podría arreglar.

4.Si vamos al anticuario,el encargado nos dará la opción de repararlo o de comprar un collar. Como Pigmalión no lleva mucho dinero encima, solo podrá elegir una opción. Dependiendo de lo que elija, recibirá un objeto u otro. El collar lo podrá comprar desde el principio sin necesidad de haber encontrado nada.

**-Ramo de rosas malo, ramo de rosas y ramo de rosas rosas**

1\. Al llegar a la floristería, nos encontraremos con un dependiente que ha perdido la llave de la trastienda. Pedirá a Pigmalión que si la ve que le avise.

2\. De todos los floreros que hay en la tienda, uno de ellos estará vacío. Al interactuar con él, obtendremos la llave de la trastienda.

3\. Aquí Pigmalión deberá decidir si dársela sin más o pedirle un ramo de rosas a cambio. El dependiente le dirá a Pigmalión que no se puede permitir darle un ramo de rosas porque si se entera el jefe le echará. Si Pigmalión insiste en que quiere el ramo, el dependiente accederá y le dará un ramo de rosas malo, aunque el que sea malo no se le indicará ni a Pigmalión ni al jugador.

Si Pigmalión decide dársela gratis, ya sea en la primera o en la segunda oportunidad, el encargado se lo agradecerá y ya que es tan amable, le pedirá que le lleve un ramo de rosas a su hijo, el cual tiene una cita en la fuente y se le ha olvidado.

4\. A partir de este momento Pigmalión tiene dos opciones: entregarle el ramo al hijo o dárselo a Pomponina. Si decide ir a la fuente y dárselo al hijo, tendrá una conversación con él.

5\. Tras esto, si vuelve a la floristería, el dependiente estará tan encantado con Pigmalión que decidirá darle el ramo de rosas rosas, el cual pagará él de su bolsillo por toda la ayuda que le ha dado Pigmalión.

**-Caja de bombones**

1.  Si vamos a la tienda de dulces caseros nos encontraremos a una anciana que nos pedirá llevar unos pedidos a unos clientes que hay por la zona.

2.  Deberemos ir a esas zonas e interactuar con los personajes que encontraremos. Al darles sus pedidos a todos, podremos volver a la tienda.

3.  Al llegar, la anciana nos lo agradecerá. Pigmalión le preguntará por Pomponina y veremos un flashback.

**(Está Pomponina frente al mostrador en el interior de la tienda. La anciana está al otro lado)**

**[POMPONINA]{.ul}:** Hola. Quería una caja de bombones. ¿Cuánto es?

**[ANCIANA]{.ul}:** *(Tiene expresión triste y alicaída, habla en un tono apagado-Pone la caja encima del mostrador)* Toma cielo, te la puedes quedar.

**[POMPONINA]{.ul}:** ¿Me los das así sin más? Normalmente los hombres me hacen tributos por mi belleza para tratar de conquistarme, pero ¿por qué me los darías tú?

**[ANCIANA]{.ul}:** *(Suelta una pequeña risa)* ¡Qué aires, señorita! En fin, el caso es que ya nadie viene a mi tienda, y me temo que tendré que cerrar el negocio, qué remedio\...

**[POMPONINA]{.ul}:** ¿Y por qué ha dejado de venir la gente? ¡Todo parece riquísimo!

**[ANCIANA]{.ul}:** El mundo avanza, y supongo que ya nadie quiere los dulces de una vieja como yo. Todo es culpa de esas dichosas máquinas, que todo lo que producen es más barato y mejor que lo tradicional, o al menos eso piensan algunos. Tú todavía eres joven, pero yo he vivido mucho. El tiempo no se detiene y algunas nos quedamos estancadas en él.

**[POMPONINA]{.ul}:** ¿Y no hay nadie que pueda ayudar?

**[ANCIANA]{.ul}:** Mi marido me ayudaba mucho, era la mayor alegría de mi mundo. Pero desgraciadamente murió hace ya tres años.

**[POMPONINA]{.ul}:** ¡Pues búscate otro!

**[ANCIANA]{.ul}:** *(Se ríe)* Qué inocente eres, chiquilla. Me recuerdas a mi de joven, cuando era guapa y estaba llena de energía, igual que tú. *(Pausa, suspira)* Es imposible que encuentre a alguien que me quiera, ya estoy demasiado vieja. *(Fija su mirada en la suya, las cejas caídas (cansancio/tristeza)* Permíteme darte un consejo: disfruta mientras puedas de tu juventud. Cuando pasan los años, la gente se olvida de tí, ya dejas de interesar a los demás, y si quieres sobrevivir debes dejar atrás los deseos de libertad y de ilusión en los que has creído.

**[POMPONINA]{.ul}:** *(El semblante de Pomponina se torna consternado)*

**[ANCIANA]{.ul}:** *(Con un tono alegre)* Ay pero no te pongas así, perdona si te he asustado. Solo intentaba ayudarte, pero he acabado con mis desvaríos, como siempre\...

**[POMPONINA]{.ul}:** ¡Es que me parece muy triste que todo acabe así! ¿Cómo algo tan bonito como es este mundo puede tornarse en algo tan frío y solitario? Es demasiado cruel, ¡tienes que ponerle un bonito final a esta triste historia!

**[ANCIANA]{.ul}:** No te preocupes por mí. Haz como los demás y déjame con mis problemas, ya me las arreglaré, de verdad.

**[POMPONINA]{.ul}:** *(Mirada triste y pensativa - Después se le ilumina el rostro)* Pues yo todavía tengo esperanza en que todo puede ir a mejor para tí. Pero me tienes que prometer que vas a seguir con la tienda una semana más al menos.

**[ANCIANA]{.ul}:** *(La mira con ternura)* Si de verdad te hace tanta ilusión, está bien. Lo haré por tí.

**[POMPONINA]{.ul}:** *(Llena de alegría)* ¡Genial! Pues para que la cosa empiece bien quería 5 cajas de bombones. *(Saca todo el dinero que llevaba)*

**[ANCIANA]{.ul}:** *(Se le contagia la ilusión de Pomponina, responde alegre)* ¡Pero son muchas cajas para ti sola!

**[POMPONINA]{.ul}:** ¡Te aseguro que no! ¡Me encantan los bombones! *(Dice riéndose)*

**[ANCIANA]{.ul}:** *(Sigue alegre)* Está bien. ¡Pues que los disfrutes mucho! ¡Y muchas gracias por todo!

**Fuera flashback**

**[ANCIANA]{.ul}:** Y así fue como conocí a la chica que buscas.

**[ANCIANA]{.ul}:** *(Sonríe con ternura)* Desde ese día empezó a venir mucha gente. Todos decían que la chica más hermosa del mundo les había hablado de un sitio fantástico y que tenían que probarlo. Además, les había dado una muestra proveniente del lugar la cual les encantó.

**[ANCIANA]{.ul}:** Me da pena pensar que al final no pudiese probarlos. Con la de gente que ha venido, estoy segura de que les dió casi todos los bombones. *(Hace una pausa)* ¿Podrías hacerme un favor? Cuando te la encuentres, dale esta caja de bombones. Y dale las gracias de mi parte.

**[PIGMALIÓN:]{.ul}** Después de haberte devuelto tu negocio entiendo que quieras agradecérselo de alguna forma.

**[ANCIANA]{.ul}:** *(sonríe y niega con la cabeza)* No le doy las gracias por eso. Se las doy por devolverme la esperanza.

4.  Tras esto le podremos dar a Pomponina la caja de bombones.

**MINIJUEGO**

Pomponina lanzará abanico tornados. Éstos se comportarán como simples proyectiles que no avanzarán en línea recta, sino en zig-zag ya que rebotarán en las paredes al chocar contra ellas.

Cuando Pomponina tenga la vida reducida a la mitad, lanzará tres tornados en vez de uno, con la misma mecánica para los tornados de los lados, siendo el del centro un proyectil que avanzará de forma recta.\
![][15]![][16]

### Don Lindo![][17]

### 

**CONVERSACIONES**

**[PIGMALIÓN:]{.ul}** Don Lindo, tú que eres de los muñecos más sensatos, vuelve al teatro.

**[DON LINDO:]{.ul}** No, sin el amor de Pomponina no voy a ninguna parte.

**[PIGMALIÓN]{.ul}:** No tienes que depender de ningún muñeco, Don Lindo.

**[DON LINDO]{.ul}:** No, no y no. No me iré a ninguna parte sin su amor, y menos contigo.

**SI SE SALVA A DON LINDO:**

**[DON LINDO:]{.ul}** Bueno, creo que mi sitio está ahí en el teatro, haciendo la música de tus farsas. En verdad lo echo de menos.

**SI SE MATA A DON LINDO:**

**[DON LINDO:]{.ul}** Vaya... Creo que ahora tendré que tocar con mi ukelele en algún otro lugar... Espero que Pomponina, por mucho que me duela, no esté allí viéndome, que se quede aquí... a salvo.

**INFORMACIÓN**

-   **FOTO DE POMPONINA CON UN CORAZÓN DIBUJADO:**

    -   **[PIGMALIÓN PENSANDO:]{.ul}** Nunca imaginé que un muñeco se podría enamorar de otro.

-   **RAMO DE FLORES CON UN PAPEL QUE PONGA "PARA POMPONINA":**

    -   **[PIGMALIÓN PENSANDO:]{.ul}** No puedo entender cómo uno de mis muñecos ha podido llegar a sentir una emoción tan humana.

-   **GORRO (PUZZLE) (DESBLOQUEA OPCIÓN CHAT)**

    -   **[PIGMALIÓN PENSANDO:]{.ul}** Nunca le he regalado nada, espero que con el gorro le quite importancia a su peluca.

-   **UKELELE (PUZZLE) (DESBLOQUEA OPCIÓN CHAT)**

    -   **[PIGMALIÓN PENSANDO:]{.ul}** Seguro que agradecerá recibir un ukelele. Lástima que el suyo lo hayan roto.

-   **CARTERA: (PUZZLE) (DESBLOQUEA OPCIÓN CHAT)**

    -   **[PIGMALIÓN PENSANDO:]{.ul}** Tendría que devolvérsela a su dueño. O puedo comprarle algo a Don Lindo. Incluso ofrecersela. A todo el mundo le gusta el dinero.

-   **CORBATA: (PUZZLE) (DESBLOQUEA OPCIÓN CHAT)**

    -   ºº**[PIGMALIÓN PENSANDO:]{.ul}** Corbata cutre, perfecta para él.

**OPCIONES DE CHAT**

-   **(BUENA): Música (desbloqueada) Se escoge aleatoriamente una opción. Se puede repetir.**

    -   **[PIGMALIÓN]{.ul}**: Tienes que volver conmigo, las farsas necesitan de tu música.

    -   **[DON LINDO:]{.ul}** ¿Tan importante es mi música?

    -   **[PIGMALIÓN]{.ul}**: Vuelve al teatro y pasamos un rato tocando algún instrumento de los que te gustan.

    -   **[DON LINDO:]{.ul}** Quizá no sea mala idea.

```{=html}
<!-- -->
```
-   **(INDIFERENTE): Gritar (desbloqueada)**

    -   **[PIGMALIÓN:]{.ul}** ¡QUE VENGAS CONMIGO!

    -   **[DON LINDO:]{.ul}** ¡QUE NO QUIERO!

```{=html}
<!-- -->
```
-   **(MALA): Pomponina (desbloqueada) Se escoge aleatoriamente una opción. Se puede repetir.**

    -   **[PIGMALIÓN]{.ul}**: Asume de una vez que Pomponina pasa de ti.

    -   **[DON LINDO:]{.ul}** ¡Cómo osas!

    -   **[PIGMALIÓN:]{.ul}** Ya hay que ser cutre para arrastrarse tanto por Pomponina.

    -   **[DON LINDO:]{.ul}** Tú no eres nadie para decir cómo conseguir los encantos de la hermosa Pomponina.

    -   **[PIGMALIÓN:]{.ul}** No te mereces a Pomponina, no estás a su altura.

    -   **[DON LINDO:]{.ul}** Cállate, apestoso.

-   **(MALA): Persuadir (desbloqueada) Se escoge aleatoriamente una opción. Se puede repetir.**

    -   **[PIGMALIÓN]{.ul}**: Si no vienes conmigo te quitaré la peluca y te quedarás calvo.

    -   **[DON LINDO:]{.ul}** Si me voy por mi cuenta podré comprar todas las pelucas que quiera.

    -   **[PIGMALIÓN]{.ul}**: Te aprecio mucho, Don Lindo, siempre fuiste una de mis creaciones más especiales.

    -   **[DON LINDO:]{.ul}** Si me quisieses tanto me habrías hecho con pelo, como a los demás.

    -   **[PIGMALIÓN:]{.ul}** Ponponina va a venir conmigo, se pondrá muy triste si ve que la has abandonado.

    -   **[DON LINDO:]{.ul}** ¡Mentiroso, mentiroso! Pomponina nunca volvería contigo, ella querría escaparse para vivir una vida a mi lado. No te creo.

```{=html}
<!-- -->
```
-   **(MUY BUENA) Regalar gorro (desbloquear por puzzle)**

    -   **[PIGMALIÓN:]{.ul}** Me han regalado un gorro, he pensado que te podría gustar tenerlo.

    -   **[DON LINDO:]{.ul}** He de decir que esta vez tienes razón. ¡Me gusta! Gracias.

```{=html}
<!-- -->
```
-   

-   **(MUY BUENA) Dar ukelele (desbloquear por puzzle)**

    -   **[PIGMALIÓN:]{.ul}** Siento decirte que unos gamberros han roto tu ukelele. Pero he podido conseguirte uno.

    -   **[DON LINDO:]{.ul}** Gracias Pigmalión. Sabes que significa mucho para mí.

-   **(MALA) Regalar corbata(desbloquear por puzzle)**

    -   **[PIGMALIÓN:]{.ul}** He comprado una corbata, creo que es de tu estilo.

    -   **[DON LINDO:]{.ul}** Ooh... si te soy sincero... llevaba tiempo sin ver algo tan horrible. Sigues sin saber nada de nosotros, "tus muñecos". Decepcionante.

-   **(MALA) Dar cartera (desbloquear por puzzle)**

    -   **[PIGMALIÓN:]{.ul}** Seguro que aceptas esta cartera con dinero para volver al teatro..

    -   **[DON LINDO:]{.ul}** A ver si te das cuenta de que no todo gira en torno al dinero, garrapata sin patas.

  TABLA DE PUNTOS DE PERSUASIÓN                                                 
  ------------------------------- --------------- --------------- ------------- -------------
  **TOTAL**                       **Ukelele**     **Gorro**       **Musica**    **Gritar**
                                  +50             +40             +12           0
  **100**                         **Persuadir**   **Pomponina**   **Corbata**   **Cartera**
                                  -5              -10             -20           -30

**MAPA**

-   **Zonas y ambientación**

> **Plaza central.** Habrá un NPC, si interactuamos con él, dirá que tiene frío.![][18]
>
> **Tienda de ropa.** Habrá un NPC al que le podremos preguntar por don Lindo.
>
> **Floristería.** Tienda de música. Podremos adquirir un ukelele. (Conecta con la zona de Pomponina)
>
> **Taberna.** El tabernero será quien nos lleve al flashback de Don Lindo.
>
> **Zona Residencial.** Veremos a un chaval siendo acosado por un grupo de jóvenes. También veremos otro NPC que tiene frío. (Conecta con la zona de Cucu)
>
> **Calle vacía.** Una foto de Pomponina y una rotonda, sin más. Zona paupérrima del mapa.
>
> **Don Lindo.**

La zona de Don Lindo estará ambientada en un barrio pobre de Madrid, rozando la máxima pobreza.

En cuanto a estética, predominarán los edificios de ladrillos y las baldosas de las calles (todo esto especificado gráficamente en el otro documento). Se encontrarán numerosos grafitis en paredes.

Las personas, caracterizadas por tener un punto de vista de la vida un tanto distinto a lo normal, pues aprecian cualquier detalle como el de poder comer en familia. Abro paréntesis para decir que la vestimenta se puede resumir a vaqueros y sudaderas o chándals.

**PUZZLES**

**-Gorro, corbata**

1.  Si hablamos con el dependiente de la tienda de ropa, le preguntaremos acerca de Don Lindo. Amablemente nos dirá que en este momento está muy liado, va con el tiempo justo y que no nos puede ayudar, pues tiene que repartir unos gorros, de forma gratuita a los habitantes de la zona.

    -   **[PIGMALIÓN:]{.ul}** Perdona, ¿has visto por aquí a un tipo con traje y corbata, y que además parece que lleva una peluca?

    -   **[DEPENDIENTE:]{.ul}** Me quiere sonar sí, pero ahora mismo no lo termino de recordar. Además, estoy muy liado. Tengo que ordenar toda la tienda y repartir estos gorros. ¿Te importaría echarme una mano con ellos? Mientras intentaré pensar en el hombre que me has dicho.

    -   **[PIGMALIÓN:]{.ul}** Está bien, ¿a quién tengo que dárselos?

    -   **[DEPENDIENTE:]{.ul}** A cualquier persona que veas que tiene frío por la calle, se acerca el invierno y, si entre todos colaboramos, haremos que sea menos duro.

2.  Repartiremos los gorros a los NPCs que tienen frío.

    -   **[PIGMALIÓN:]{.ul}** Hola. Creo que este gorro es para ti.

    -   **[NPC CON FRÍO:]{.ul}** Muchísimas gracias. No sabes lo bien que me viene.

3.  Si volvemos a la tienda, el dependiente nos dirá que Don Lindo estuvo hablando con él, que por eso iba justo de tiempo y, sin dar detalles de la conversación, nos ofrece un gorro para él, diciendo que se la ha olvidado dárselo a él antes.

    -   **[PIGMALIÓN:]{.ul}** Ya los he repartido.

    -   **[DEPENDIENTE:]{.ul}** ¡Muchísimas gracias! Supongo que antes te referías a Don Lindo, ¿me equivoco?

    -   **[PIGMALIÓN:]{.ul}** En absoluto.

    -   **[DEPENDIENTE:]{.ul}** Se pasó por aquí de casualidad, estuvimos hablando,un buen rato. Me comentaba cosas de un teatro y de una mujer por la que está muy enamorado por lo visto. Hasta tocó algo con un ukelele. Sin embargo, nos entretuvimos mucho y ha sido la causa por la que voy tan mal de tiempo. Sin darme cuenta, se me olvidó darle a él un gorro. ¿Te importaría dárselo de mi parte? Me da pena haberme olvidado de dárselo.

NOTA: Podemos ir a la tienda con la cartera, de esta forma compraremos una corbata.

**-Ukelele, cartera**

1.  Hablando por primera vez con el Tabernero, éste nos comentará simplemente que Don Lindo les dejó un momento el Ukelele mientras se iba a hacer algo, no especifica el qué. Sin embargo unos gamberros entraron a la taberna y lo rompieron.

    -   **[TABERNERO:]{.ul}** ¡Malditos gamberros!

    -   **[PIGMALIÓN:]{.ul}** ¿Qué sucede?

    -   **[TABERNERO:]{.ul}** Pues mira, vino un hombre muy majo por aquí, como todos, con sus problemas, pero se notaba que era muy buena persona. Estuvimos charlando un rato y luego nos amenizó el día tocando un poco de música con un ukelele. Sin embargo, tenía que irse y, nos pidió que le guardásemos su ukelele, pero unos gamberros entraron y lo rompieron.

    -   **[PIGMALIÓN:]{.ul}** ¡Menudos sinvergüenzas!

    -   **[TABERNERO:]{.ul}** Completamente. Siempre están haciendo de las suyas... Ojalá alguien le pare los pies alguna vez.

    -   **[PIGMALIÓN PENSANDO:]{.ul}** ¿Dónde podría conseguir un ukelele nuevo? A Don Lindo no le gustará ver que le han roto el suyo y no tener nada con lo que tocar.

2.  Pigmalion si va a la tienda de música, la dependiente le dirá a Pigmalión que ahora mismo está cerrado ya que ha perdido su cartera y no puede hacerse cargo de la tienda.

    -   **[PIGMALIÓN:]{.ul}** Hola. Venía a comprar un...

    -   **[DEPENDIENTE:]{.ul}** ¡Está cerrado!

    -   **[PIGMALIÓN:]{.ul}** Pero si no es hora de cerrar.

    -   **[DEPENDIENTE:]{.ul}** ¡He dicho que está cerrado! Acaban de venir unos gamberros y se han llevado mi cartera. No pienso atender a nadie.

    -   **[PIGMALIÓN PENSANDO:]{.ul}** Creo que alguien debería pararle los pies a esos impresentables.

3.  En la Zona Residencial, si interactuamos con el chaval que está siendo acosado, espantaremos a los acosadores y el chaval te dará la cartera de la dependiente.

    -   **[PIGMALIÓN:]{.ul}** Eh vosotros, sinvergüenzas, ¡dejad al joven en paz!

    -   (LOS GAMBERROS SE VAN)

    -   **[JOVEN:]{.ul}** Muchísimas gracias buen hombre. Les he visto con una cartera que no es suya, sino de la dependiente de la tienda de música.

    -   **[PIGMALIÓN:]{.ul}** La has cogido de vuelta y han ido a por ti, ¿verdad?

    -   **[JOVEN:]{.ul}** Efectivamente. ¿Podrías llevársela de vuelta?

4.  Al volver a la tienda de música, como agradecimiento, la dependiente nos regalará.

    -   **[DEPENDIENTE:]{.ul}** ¡Muchísimas gracias por traérmela de vuelta! Si te soy sincera, la daba por perdida. Toma este ukelele como agradecimiento.

NOTA: Si el jugador coge la cartera puede directamente ofrecérsela a Don Lindo, sin devolvérsela a la dependienta.

NOTA: Si el jugador coge primero la cartera en vez de hablar antes con la dependienta, saltará el paso 2 (directamente le dirá gracias y le dará el ukelele)

NOTA: Con el ukelele podemos volver a hablar con el Tabernero y veremos el **flashback** de Don Lindo.

**FLASHBACK**

**[TABERNERO:]{.ul}** Buenos días, ¿deseas tomar algo?

**[DON LINDO:]{.ul}** Nada que no sea el amor de Pomponina, mi querido amigo.

**[TABERNERO:]{.ul}** Bueno, amigo mío. Su caso no es nuevo por aquí.

**[DON LINDO:]{.ul}** Imposible, nadie ha pasado por aquí pensando en alguien con tal magnífica belleza.

**[TABERNERO:]{.ul}** ¿Y por qué no va a por ella?

**[DON LINDO:]{.ul}** ¿Me has visto bien? Me hicieron mal, ni siquiera tengo pelo, me pusieron una peluca en vez de hacerme un pelo decente. Pomponina y yo no estamos a la misma altura.

**[TABERNERO:]{.ul}** Le das demasiada importancia al físico. Lo importante está en el interior.

**[DON LINDO:]{.ul}** Con ella no es así desgraciadamente.

**[TABERNERO:]{.ul}** Todos por aquí tenemos otros problemas, pero podemos quitarles importancia un rato tomando algo. ¿Te pongo una cerveza? Invita la casa.

**[DON LINDO:]{.ul}** ¿Por qué tanta amabilidad, si está claro que necesitáis el dinero más que nadie por esta zona?

**[TABERNERO:]{.ul}** Cierto es, pero por aquí, a pesar de todo, intentamos ayudarnos siempre que podemos.

**[DON LINDO:]{.ul}** Pero, te estás perjudicando.

**[TABERNERO:]{.ul}** No lo niego, pero prefiero ver a mis vecinos felices, además, todos por aquí actuamos igual. Hoy por ti, mañana por mí. Aunque no lo voy a negar, a veces las cosas se ponen muy complicadas.

**[DON LINDO:]{.ul}** De donde vengo, hemos sido bastante egoístas, lo intenté, pero no puede hacer que mis antiguos amigos cambiaran la mentalidad.

**[TABERNERO:]{.ul}** Aquí la vida la vemos de una forma distinta, es así como a pesar de las dificultades, nos intentamos apoyar todo lo posible. Es más, tú encajarías muy bien aquí, se ve que en el fondo, actuarías como nosotros.

**[DON LINDO:]{.ul}** Nunca se me ha presentado la oportunidad allí de ayudar con algo, pues los desagradecidos de mis compañeros no se lo merecían. Pero si me lo permites, podría tocar algo con mi ukelele.

**[TABERNERO:]{.ul}** Sería maravilloso.

(MÚSICA DE UKELELE)

**[TABERNERO:]{.ul}** Eres una buena persona, seguro que esa Pomponina no se ha dado cuenta de lo que puede tener. Amigo mío, debes hacerle saber lo que se está perdiendo contigo.

**[DON LINDO:]{.ul}** Eso es, tengo que ir y demostrárselo. Ahora mismo voy. ¿Te importa si te dejo aquí mi ukelele?

**[TABERNERO:]{.ul}** Sin problema. Mucho ánimo amigo mío.

**MINIJUEGO**

Don Lindo atacará a Pigmalión lanzando dos notas musicales que rebotarán por las cuatro paredes de la sala. Pigmalión deberá tratar de esquivarlas para pasar de fase, lo cual sucederá después de un tiempo. Mientras rebotan las dos notas, Don Lindo no hará nada más a menos que esté enfadado. ![][19]

Cuando la salud de Don Lindo baje a la mitad, además de las dos notas rebotantes, usará su mal genio para crear explosiones en la zona de pigmalión. La zona que va a explotar se verá como un círculo de un color distinto al del suelo, lo que permitirá al jugador tener tiempo para esquivarlo y que no sea arbitrario. En caso de impacto también le quitarán vida al jugador. Estas explosiones aparecerán durante toda la fase, pero nunca habrá dos explosiones en proceso simultáneamente, si no que se dejará un pequeño espacio de tiempo de dos o tres segundos entre cada una. (Según el tiempo de aviso con lo del círculo habrá que reducirlo más o menos).![][20]

(Al acabar con el último muñeco:

Llega paloma mensajera del duque diciendo que la obra va a empezar, que vuelva rápido y qué ha hecho con los muñecos.

Pigmalión piensa:

-   Pacifista: tengo que llegar rápido para para prepararla, es una pena que no haya encontrado a Urdemalas, me hubiera gustado que actuara)

-   Puppetcidal: bueno, tendré que hacer más muñecos.

-   Normal: 2 muertos 1 vivo: No tengo ganas de hacer la obra, sin mis muñecos no me veo capaz de hacerla.

> 1 muerto 2 vivos: Tengo que llegar rápido para modificar la obra, me pesa no haber sido capaz de convencer a \*Insertar nombre\*

### Agalzapo

> (Al acabar con el último muñeco:

Llega paloma mensajera del duque diciendo que la obra va a empezar, que vuelva rápido y qué ha hecho con los muñecos.

Pigmalión piensa:

-   Pacifista: tengo que llegar rápido para prepararla, es una pena que no haya encontrado a Urdemalas, me hubiera gustado que actuara)

-   Puppetcidal: bueno, tendré que hacer más muñecos.

-   Normal: 2 muertos 1 vivo: No tengo ganas de hacer la obra, sin mis muñecos no me veo capaz de hacerla.

> 1 muerto 2 vivos: Tengo que llegar rápido para modificar la obra, me pesa no haber sido capaz de convencer a \*Insertar nombre\*

DESCRIPCIÓN: (En qué muñeco nos basamos, personalidad, cómo encontrarlo)

enjuto,anguloso, con cierto aspecto clerical,peinado corto, echado hacia atrás, rostro fino, afeitado, agudo,inteligente ,cejas mefistofelicas, ojos vivisimos, redondos y hundidos, nariz descarnada, aguileña, boca sutil y astuta. Va muy sencillo, de oscuro.

Es el muñeco más complicado y difícil que Pigmalión ha hecho, es el que más se acerca a un humano, pero el hacerle tan real provocó que la mente de Urdemalas se fuera haciendo más diabólica progresivamente.

Urdemalas es el último muñeco, y no está en ninguna zona del mapa. Aparece en el teatro si se ha hecho la ruta salvadora o la puppetcidal.

-   Salvadora: Al enterarse de que Pigmalión ha decidido salvar a todos los muñecos, decide volver al teatro y seguir actuando.

-   Puppetcidal: Al enterarse de que Pigmalión ha matado a todos sus compañeros, decide volver a vengarse.

-   Normal: Urdemalas, al enterarse de que algunos muñecos han muerto, decide huir.

INFORMACIÓN

-Pigmalión : ¡Parece que se me han escapado los muñecos!

**Él** seguro que ya ha escapado, pero al resto aún puedo alcanzarlos.

-Al matar al primer muñeco: Si \*inserte nombre\* está tan agresivo, no me imagino de lo que **Él** es capaz.

-Final de juego neutral:

1- Cuadro de texto donde salga : \*Urdemalas escapó\*

2- Pigmalión : Me alivia pensar que no me he cruzado con **Urdemalas** pero a la vez me atormenta saber que anda por ahí suelto.

**CONVERSACIONES**

\-**Neutral :**

Años más tarde...

\*Escena con Pigmalión en su casa (como en un sueño)\*

\*Suena toc toc toc\*

\*Entra Urdemalas en casa\*

Pigmalion : !

Pigmalion : ¿Cómo has entrado / ¿Que haces aquí?

Urdemalas : Vengo a vengar a mis compañeros

> \*Urdemalas pega un tiro con la escopeta, y justo cuando suena el sonido del disparo, Pigmalion se despierta\*

\*Suena toc toc toc de nuevo\*

\- **Salvadora:**

-   URDEMALAS: Atónito me encuentro, de que alguien como tú, después de todo este tiempo y todo lo que nos has hecho, nos hayas por fin entendido.

-   Pigmalión : ¡Urdemalas! ¡Por ti estaba preguntándome!. Me alegro de que este bien

-   Urdemalas: Lo cierto es que estaba decidido a irme. Pero después de ver cómo tratabas a mi compañeros, creo que te daré una segunda oportunidad.

-   Pero no la vuelvas a cagar, **¿entendido?** (Cara siniestra) \*Tira la escopeta\*

(basuras o texto)

\- **Puppetcidal:**

\- Urdemalas: después de todo lo que hemos hecho por ti, de lo que hemos tragado, encima nos cazas como si de ganado nos tratasemos. ¿Es que no significamos nada para ti? Me las vas a pagar.

**OPCIONES DE CHAT**

> No hay opciones de chat.
>
> En caso de que el jugador elija esta opción, se mostrará un mensaje diciendo:
>
> -Ya es muy tarde para hacer eso
>
> El mensaje puede salir en pantalla como dicho por urdemalas o dicho por nadie.

MINIJUEGO

La batalla se divide en tres fases:

(Los disparos se destruirán en colisión con una pared o con el jugador.)

(Urdemalas al ser más inteligente puede combinar diferentes ataques)

En la primera fase, urdemalas utiliza los ataques de sus compañeros muñecos en su primera fase.

En la segunda fase, Urdemalas utiliza los ataques de sus compañeros muñecos en su segunda fase.

Veanse sus esquemas y descripciones detalladas en 4.3.1 en sus respectivas descripciones.

![][21]

Urdemalas en su tercera fase, y al verse al borde de su muerte, saca la escopeta, con la cual tiene tres modos de disparo, entre los cuales irá alternando.

-Disparo concentrado, munición slug.

Este será dos disparos rápidos hacia el jugador y de daño aumentado. Apuntando a la posición en la que se encuentre Pigmalión a la hora de disparar cada cartucho.

![][22]

-Perdigones

Urdemalas dispara la escopeta, disparando numerosos perdigones en un cono

![][23]

-Disparos que rebotan

Urdemalas dispara tres proyectiles, uno en linea recta hacia el jugador y otros dos en cono (uno a cada lado del disparo central). Los disparos en cono rebotarán en las paredes un número limitado de veces.

![][24]

**Referencias**

-   *El Señor De Pigmalión, Jacinto Grau (1921)*

-   *Undertale, Toby Fox (2015)*

-   *Cuphead, StudioMDHR (2017)*

**IDEAS POST CLASE VIERNES**

Los cambios generales aceptados tras la clase de PVLI son:

Un mundo abierto conexo el cual se sigue componiendo por pantallas estáticas que a su vez están recogidas en zonas. Cada zona está relacionada con un muñeco, por lo que habrá personajes y objetos relacionados con cada muñeco única y exclusivamente en su zona. Sin embargo, ahora las zonas tendrán conexiones entre sí, y el jugador podrá ir a por los muñecos en cualquier orden.

Otro cambio al mundo es que va a tener cambios en su interior, va a ser dinámico. Los muñecos habrán tenido impacto en los lugares por los que han pasado, así como en sus habitantes. A medida que avancemos el mundo irá evolucionando.

Moralidad: se va a profundizar en la moralidad y la narrativa. El jugador podrá interactuar mucho más con los personajes y la historia y podrá fijarse en ciertos detalles que nos hablarán sobre los muñecos. A medida que el jugador tome decisiones, su aspecto cambiará.

El foco principal de la historia será la dualidad moral por parte del jugador.

El mapa estará "dividido" en zonas , en general interconectadas entre ellas.

Los muñecos habrán tenido un impacto en la zona sobre la que hayan pasado, y habrán elementos y personajes que darán a notar cómo ellos han pasado por ahí.

El punto de estos elementos será el diluir la barrera entre muñecos y humanos, con el fin de no dejar muy claro al jugador que opciones morales elegir, además de proporcionar información acerca del muñeco que haya en esa zona, lo cual ayudará al jugador dentro de la batalla a elegir las opciones correctas de diálogo.

A lo largo del mapa, además de (a lo mejor) puzzles, habrán mini decisiones morales. Estas pueden ser, por ejemplo, dependientes de las respuestas que el jugador de a ciertos npcs o mini eventos donde el jugador pueda hacer algo para hacer el bien o simplemente dejarlo pasar e ignorarlo. Dentro de estos podemos hacer que la mayoría sean irrelevantes, y sean introducidos solo para darle más vida al mundo y darle al jugador más sensación de inmersión, y otros pocos donde las decisiones que tomes si que afecten al desarrollo del juego y a su final.

Este duelo moral (lo que más pesa son las decisiones tomadas con los muñecos) se verá reflejado en las vestimentas de Pigmalión, ya que, cada vez que el jugador mate a un muñeco, su ropa se verá un poco más sucia, desarreglada y también pueden meterse cambios en la forma de caminar del protagonista y en la paleta de colores del mundo (podemos hacer que el mundo se vea un poco más descolorido cada vez, con filtros), mientras que si el jugador decide llevar una ruta buena, se puede hacer lo contrario.

Lo mismo con el tema del público; si matas a mucho la gente está descontenta/ se va y si salvas a más la gente está más contenta o se va aumentando (esto depende de si lo hacemos in-game o en html).

Manejo de los finales con diagramas de estado, donde esté bien explicado qué decisiones llevan a cierto final.

Los finales que tenemos hasta ahora me parecen bien:

Genocida: todos muertos, pelea final.(matas a todos y pasas del mundo)

Neutral: Salvas a unos y a los que salvas huyen(neutro)

Pacifista: Todos los muñecos vuelven contigo y hay final feliz(salvas a todos y haces todos los eventos morales)

Ahora que hay más elementos dentro del juego, se pueden meter más interacciones o incluso que npcs actúen antes y después de una batalla, por ejemplo, que después de matar a cucu en caso de que se haya hecho aparezca un niño corriendo llorando diciendo que se divertía mucho con el.

Remodelar los elementos que dan info acerca de los muñecos para adaptarlos al mundo

  [1]: media/image19.png {width="4.583333333333333in" height="4.583333333333333in"}
  [1. Aspectos generales]: #aspectos-generales
  [2. Menús]: #menús
  [2.1 Menú de inicio]: #menú-de-inicio
  [2.2 Menú de pausa]: #menú-de-pausa
  [2.3 Menú de interacción con los muñecos]: #menú-de-interacción-con-los-muñecos
  [3. Configuración, interfaz y controles]: #configuración-interfaz-y-controles
  [3.1 Configuración]: #configuración
  [3.2 Interfaz y control]: #interfaz-y-control
  [4. Jugabilidad]: #jugabilidad
  [4.1 Mecánica]: #mecánica
  [4.1.1 Movimiento e interacción]: #movimiento-e-interacción
  [4.1.2 Enfrentamiento contra enemigos]: #enfrentamiento-contra-enemigos
  [4.1.3 Objetos]: #objetos
  [4.2 Dinámica]: #dinámica
  [4.2.1 Dinámica puzzles]: #dinámica-puzzles
  [4.2.2 Dinámica muñecos]: #dinámica-muñecos
  [4.3 Estética]: #estética
  [5. Contenido]: #contenido
  [5.1 Historia]: #historia
  [5.2 Mapa]: #mapa
  [5.3.Personajes]: #personajes
  [Juan]: #juan
  [Pomponina]: #pomponina
  [Don Lindo]: #don-lindo
  [Agalzapo]: #agalzapo
  [2]: media/image16.png {width="4.837849956255468in" height="2.057292213473316in"}
  [3]: media/image11.png {width="5.354166666666667in" height="1.0729166666666667in"}
  [4]: media/image5.png {width="5.739583333333333in" height="4.5625in"}
  [5]: media/image22.png {width="2.776042213473316in" height="2.776042213473316in"}
  [6]: media/image13.png {width="2.3906255468066493in" height="1.3938692038495188in"}
  [7]: media/image4.png {width="6.267716535433071in" height="2.9166666666666665in"}
  [8]: media/image23.png {width="6.283464566929134in" height="2.9166666666666665in"}
  [9]: media/image10.png {width="6.239583333333333in" height="4.489583333333333in"}
  [10]: media/image14.png {width="3.0052088801399823in" height="2.2514107611548555in"}
  [11]: media/image6.png {width="3.4583333333333335in" height="3.1354166666666665in"}
  [12]: media/image3.png {width="2.2098917322834644in" height="2.2098917322834644in"}
  [13]: media/image8.png {width="6.283464566929134in" height="2.9027777777777777in"}
  [14]: media/image9.png {width="4.592817147856518in" height="3.4427088801399823in"}
  [15]: media/image20.png {width="6.283464566929134in" height="2.75in"}
  [16]: media/image15.png {width="6.283464566929134in" height="2.75in"}
  [17]: media/image18.png {width="2.3022069116360453in" height="2.30869094488189in"}
  [18]: media/image1.png {width="6.187623578302712in" height="4.242312992125984in"}
  [19]: media/image24.png {width="3.832338145231846in" height="1.8385422134733158in"}
  [20]: media/image12.gif {width="0.2656255468066492in" height="0.2808038057742782in"}
  [21]: media/image17.png {width="6.267716535433071in" height="2.6944444444444446in"}
  [22]: media/image2.png {width="6.267716535433071in" height="3.0694444444444446in"}
  [23]: media/image21.png {width="6.267716535433071in" height="2.888888888888889in"}
  [24]: media/image7.png {width="6.267716535433071in" height="2.763888888888889in"}
