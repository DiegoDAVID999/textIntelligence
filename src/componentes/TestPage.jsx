
// "use client"

// import { useState } from "react"
// import { ArrowLeft, ArrowRight, Brain, CheckCircle, Clock, Target, Zap } from "lucide-react"

// // Preguntas reales del test de inteligencias múltiples
// const preguntasReales = [
//   {
//     id: 1,
//     pregunta: "¿Cuánto valen cinco pizzas y media a dólar y medio cada pizza y media?",
//     tipo: "multiple",
//     opciones: [
//       { valor: "A", texto: "3 Dólares y Medio" },
//       { valor: "B", texto: "5 Dólares" },
//       { valor: "C", texto: "5 Dólares y medio" },
//       { valor: "D", texto: "3 Dólares" },
//     ],
//     puntuacion: { C: { LM: 2 } },
//   },
//   {
//     id: 2,
//     pregunta: "Mis amigos me buscan para aconsejar o para consultarme ciertas cosas.",
//     tipo: "sino",
//     puntuacion: { SI: { INT: 1 } },
//   },
//   {
//     id: 3,
//     pregunta: "Practico un deporte de manera frecuente.",
//     tipo: "sino",
//     puntuacion: { SI: { CK: 1 } },
//   },
//   {
//     id: 4,
//     pregunta: "Me siento bien resolviendo problemas matemáticos.",
//     tipo: "sino",
//     puntuacion: { SI: { LM: 1 } },
//   },
//   {
//     id: 5,
//     pregunta: "Creo que las personas que abrazan un Árbol:",
//     tipo: "multiple",
//     opciones: [
//       { valor: "A", texto: "Están Locas" },
//       { valor: "B", texto: "No me importa" },
//       { valor: "C", texto: "Excelente, yo también lo haría" },
//       { valor: "D", texto: "Debe tener su ciencia aunque no lo haría" },
//     ],
//     puntuacion: { A: { N: -1 }, C: { N: 1 } },
//   },
//   {
//     id: 6,
//     pregunta: "Me gusta pertenecer a Grupos de personas, Clubes, o grupos donde se interactúe con otras personas.",
//     tipo: "sino",
//     puntuacion: { SI: { INT: 1 } },
//   },
//   {
//     id: 7,
//     pregunta: "Me gusta realizar manualidades, artesanías.",
//     tipo: "sino",
//     puntuacion: { SI: { CK: 1 } },
//   },
//   {
//     id: 8,
//     pregunta: "Desde niño me encantan las matemáticas.",
//     tipo: "sino",
//     puntuacion: { SI: { LM: 1 } },
//   },
//   {
//     id: 9,
//     pregunta: "Me gusta o me gustaría tener un Jardín en mi casa.",
//     tipo: "sino",
//     puntuacion: { SI: { N: 1 } },
//   },
//   {
//     id: 10,
//     pregunta: "Siento la necesidad de hablar con personas sin importar su edad.",
//     tipo: "sino",
//     puntuacion: { SI: { INT: 1 } },
//   },
//   {
//     id: 11,
//     pregunta: "Sería feliz si en mi cumpleaños me regalaran un rompecabezas o cualquier tipo de puzzle o Lego.",
//     tipo: "sino",
//     puntuacion: { SI: { LM: 1 } },
//   },
//   {
//     id: 12,
//     pregunta: "¿Tengo la habilidad de recordar nombres de personas y lugares?",
//     tipo: "sino",
//     puntuacion: { SI: { VL: 1 } },
//   },
//   {
//     id: 13,
//     pregunta: "¿Soy de ese tipo de personas que disfruto dialogar y discutir conmigo?",
//     tipo: "sino",
//     puntuacion: { SI: { INTR: 1 } },
//   },
//   {
//     id: 14,
//     pregunta: "¿Desde niño me gustó ver, escuchar y leer acerca de la Biología y las ciencias naturales?",
//     tipo: "sino",
//     puntuacion: { SI: { N: 1 } },
//   },
//   {
//     id: 15,
//     pregunta: "Es relativamente fácil que los demás me escuchen y me entiendan, me gusta hacerlo.",
//     tipo: "multiple",
//     opciones: [
//       { valor: "A", texto: "Sí, me encanta" },
//       { valor: "B", texto: "Jamás, nadie me entiende" },
//       { valor: "C", texto: "Cuando me toca entro en pánico" },
//       { valor: "D", texto: "No, que hable otro" },
//     ],
//     puntuacion: { A: { INT: 1 } },
//   },
//   {
//     id: 16,
//     pregunta: "Nunca fue problema aprender a montar en Bicicleta o en patines.",
//     tipo: "multiple",
//     opciones: [
//       { valor: "A", texto: "Aún no monto bicicleta ni patines" },
//       { valor: "B", texto: "Me encanta hacerlo" },
//       { valor: "C", texto: "Me suena la idea, pienso hacerlo" },
//       { valor: "D", texto: "No lo voy a hacer nunca" },
//     ],
//     puntuacion: { B: { CK: 1 } },
//   },
//   {
//     id: 17,
//     pregunta: "Soy bien preguntón, me gusta investigar las cosas hasta entenderlas.",
//     tipo: "sino",
//     puntuacion: { SI: { LM: 1 } },
//   },
//   {
//     id: 18,
//     pregunta: "Cuando me siento frustrado dialogo conmigo hasta encontrar el motivo.",
//     tipo: "sino",
//     puntuacion: { SI: { INTR: 1 } },
//   },
//   {
//     id: 19,
//     pregunta: "Tengo muchos amigos.",
//     tipo: "multiple",
//     opciones: [
//       { valor: "A", texto: "Solo los del trabajo, la Universidad, el colegio" },
//       { valor: "B", texto: "Me da dificultad hacer amigos" },
//       { valor: "C", texto: "Me gustaría pero no tengo suerte en hacer amigos" },
//       { valor: "D", texto: "Tengo amigos por cantidad" },
//     ],
//     puntuacion: { D: { INT: 1 } },
//   },
//   {
//     id: 20,
//     pregunta: "Sé leer mapas con facilidad.",
//     tipo: "sino",
//     puntuacion: { SI: { VE: 1 } },
//   },
//   {
//     id: 21,
//     pregunta: "Si me dan la oportunidad puedo contar chistes e inventar historias.",
//     tipo: "sino",
//     puntuacion: { SI: { VL: 1 } },
//   },
//   {
//     id: 22,
//     pregunta: "Encuentro un interés real en lo que hablan los demás.",
//     tipo: "sino",
//     puntuacion: { SI: { INT: 1 } },
//   },
//   {
//     id: 23,
//     pregunta: "Cuando hay una discusión o debate me agrada dar mi opinión y hacerme escuchar.",
//     tipo: "sino",
//     puntuacion: { SI: { VL: 1 } },
//   },
//   {
//     id: 24,
//     pregunta: "Me gusta todo juego que tenga que ver con la Lógica.",
//     tipo: "sino",
//     puntuacion: { SI: { LM: 1 } },
//   },
//   {
//     id: 25,
//     pregunta: "Al escribir me preocupo por no cometer errores de ortografía.",
//     tipo: "sino",
//     puntuacion: { SI: { VL: 1 } },
//   },
//   {
//     id: 26,
//     pregunta: "Tengo hábitos que cuidan el planeta como reciclar.",
//     tipo: "sino",
//     puntuacion: { SI: { N: 1 } },
//   },
//   {
//     id: 27,
//     pregunta: "Me agrada ir a cumpleaños y fiestas donde pueda compartir con otras personas.",
//     tipo: "sino",
//     puntuacion: { SI: { INT: 1 } },
//   },
//   {
//     id: 28,
//     pregunta: "Puedo diferenciar géneros de música, ritmos o cantantes.",
//     tipo: "sino",
//     puntuacion: { SI: { M: 1 } },
//   },
//   {
//     id: 29,
//     pregunta: "Me agrada intentar hacer las cuentas sin la calculadora.",
//     tipo: "sino",
//     puntuacion: { SI: { LM: 1 } },
//   },
//   {
//     id: 30,
//     pregunta: "Cuando hablo me extiendo en mis explicaciones y soy muy detallista.",
//     tipo: "multiple",
//     opciones: [
//       { valor: "A", texto: "Sí, ese soy yo" },
//       { valor: "B", texto: "Nunca me pasa" },
//       { valor: "C", texto: "Quizá algunas veces" },
//       { valor: "D", texto: "Me da miedo hablar" },
//     ],
//     puntuacion: { A: { VL: 1 } },
//   },
//   {
//     id: 31,
//     pregunta: "Sé diferenciar muy bien mis emociones.",
//     tipo: "sino",
//     puntuacion: { SI: { INTR: 1 } },
//   },
//   {
//     id: 32,
//     pregunta: "Disfruto escuchando música, sin importar género o ritmo.",
//     tipo: "sino",
//     puntuacion: { SI: { M: 1 } },
//   },
//   {
//     id: 33,
//     pregunta: "Me considero una persona con alto nivel de empatía.",
//     tipo: "multiple",
//     opciones: [
//       { valor: "A", texto: "Sí, soy totalmente empático" },
//       { valor: "B", texto: "Sí aunque tengo mis límites" },
//       { valor: "C", texto: "No soy tan empático, solo lo necesario" },
//       { valor: "D", texto: "No soy para nada empático" },
//     ],
//     puntuacion: { A: { INT: 1 }, B: { INT: 0.5 }, D: { INT: -1 } },
//   },
//   {
//     id: 34,
//     pregunta: "Me gusta observar dibujos, figuras y todo tipo de imágenes en 3D.",
//     tipo: "sino",
//     puntuacion: { SI: { VE: 1 } },
//   },
//   {
//     id: 35,
//     pregunta: "Disfruto la soledad, mi tiempo a solas es muy agradable.",
//     tipo: "multiple",
//     opciones: [
//       { valor: "A", texto: "Sí, soy feliz cuando estoy a solas" },
//       { valor: "B", texto: "No me gusta para nada" },
//       { valor: "C", texto: "A veces es bueno estar a solas" },
//       { valor: "D", texto: "Cuando me toca estar a solas sufro" },
//     ],
//     puntuacion: { A: { INTR: 1 }, B: { INTR: -0.5 } },
//   },
//   {
//     id: 36,
//     pregunta: "Me agradan los juegos de palabras.",
//     tipo: "sino",
//     puntuacion: { SI: { VL: 1 } },
//   },
//   {
//     id: 37,
//     pregunta: "Mi nivel de lectura es:",
//     tipo: "multiple",
//     opciones: [
//       { valor: "A", texto: "Un libro al año" },
//       { valor: "B", texto: "Dos libros al año" },
//       { valor: "C", texto: "Un libro cada mes" },
//       { valor: "D", texto: "Un libro cada semana" },
//     ],
//     puntuacion: { D: { VL: 3 }, C: { VL: 1 } },
//   },
//   {
//     id: 38,
//     pregunta: "Me encanta la música, canto o toco un instrumento musical.",
//     tipo: "sino",
//     puntuacion: { SI: { M: 1 } },
//   },
//   {
//     id: 39,
//     pregunta: "Puedo distinguir la voz de las personas por teléfono aunque la finjan de otra manera.",
//     tipo: "sino",
//     puntuacion: { SI: { M: 1 } },
//   },
//   {
//     id: 40,
//     pregunta: "Soy bueno para participar en aeróbicos o coreografías.",
//     tipo: "multiple",
//     opciones: [
//       { valor: "A", texto: "Soy excelente" },
//       { valor: "B", texto: "No es mucho pero con práctica lo hago" },
//       { valor: "C", texto: "No es mi fuerte, casi que por obligación lo haría" },
//       { valor: "D", texto: "No es lo mío" },
//     ],
//     puntuacion: { A: { CK: 1 } },
//   },
//   {
//     id: 41,
//     pregunta: "Si tengo un día libre lo emplearía en:",
//     tipo: "multiple",
//     opciones: [
//       { valor: "A", texto: "Descanso y lleno crucigramas" },
//       { valor: "B", texto: "No hago nada, me dedico a pensar cosas sin importancia" },
//       { valor: "C", texto: "Lo dedico para hacer ejercicio" },
//       { valor: "D", texto: "Sin pensarlo salgo a bailar" },
//     ],
//     puntuacion: { A: { LM: 1 }, B: { INTR: 1 }, C: { CK: 1 }, D: { M: 1 } },
//   },
//   {
//     id: 42,
//     pregunta: "Cuando trabajo o estudio por cierto tiempo quiero salir corriendo.",
//     tipo: "sino",
//     puntuacion: { SI: { CK: 1 } },
//   },
//   {
//     id: 43,
//     pregunta: "Cuando algo me interesa investigo hasta llegar al origen y comprender la causa y efecto de las cosas.",
//     tipo: "sino",
//     puntuacion: { SI: { LM: 1 } },
//   },
//   {
//     id: 44,
//     pregunta: "Puedo imitar voces de algunas personas.",
//     tipo: "sino",
//     puntuacion: { SI: { M: 1 } },
//   },
//   {
//     id: 45,
//     pregunta: "¿Puedo relacionar la música con ciertos estados de ánimo?",
//     tipo: "sino",
//     puntuacion: { SI: { M: 1 } },
//   },
//   {
//     id: 46,
//     pregunta: "Si miro un plano de una casa o de un lugar, puedo interpretarlo en mi imaginación como real.",
//     tipo: "sino",
//     puntuacion: { SI: { VE: 1 } },
//   },
//   {
//     id: 47,
//     pregunta: "Identifico con facilidad los 4 puntos cardinales.",
//     tipo: "sino",
//     puntuacion: { SI: { VE: 1 } },
//   },
//   {
//     id: 48,
//     pregunta: "Cuando estoy en la ducha prefiero:",
//     tipo: "multiple",
//     opciones: [
//       { valor: "A", texto: "Cantar" },
//       { valor: "B", texto: "Silbar" },
//       { valor: "C", texto: "Concentrarme en bañarme" },
//       { valor: "D", texto: "Imaginar miles de cosas" },
//     ],
//     puntuacion: { A: { M: 1 }, B: { M: 1 }, C: { CK: 1 }, D: { INTR: 1 } },
//   },
//   {
//     id: 49,
//     pregunta: "Me considero una persona:",
//     tipo: "multiple",
//     opciones: [
//       { valor: "A", texto: "Totalmente independiente" },
//       { valor: "B", texto: "Soy un poco dependiente pero solo de mi pareja" },
//       { valor: "C", texto: "Soy dependiente de todos" },
//       { valor: "D", texto: "Si me siento solo me muero" },
//     ],
//     puntuacion: { A: { INTR: 1 }, D: { INTR: -1 } },
//   },
//   {
//     id: 50,
//     pregunta: "Soy amante de los animales.",
//     tipo: "sino",
//     puntuacion: { SI: { N: 1 } },
//   },
//   {
//     id: 51,
//     pregunta: "Puedo interpretar con facilidad lo que otros piensan de mí.",
//     tipo: "sino",
//     puntuacion: { SI: { INT: 1 } },
//   },
//   {
//     id: 52,
//     pregunta: "Recuerdo más fácil lo siguiente:",
//     tipo: "multiple",
//     opciones: [
//       { valor: "A", texto: "La letra de una canción" },
//       { valor: "B", texto: "La clase que dictó el profesor" },
//       { valor: "C", texto: "El último viaje que hice" },
//       { valor: "D", texto: "El nombre de la persona que conocí" },
//     ],
//     puntuacion: { A: { M: 1 }, B: { LM: 1 }, C: { VE: 1 }, D: { INT: 1 } },
//   },
//   {
//     id: 53,
//     pregunta: "Me gusta ver llover.",
//     tipo: "sino",
//     puntuacion: { SI: { N: 1 } },
//   },
//   {
//     id: 54,
//     pregunta: "Puedo aprender una canción con relativa facilidad.",
//     tipo: "sino",
//     puntuacion: { SI: { M: 1 } },
//   },
//   {
//     id: 55,
//     pregunta: "Normalmente clasifico las cosas.",
//     tipo: "sino",
//     puntuacion: { SI: { LM: 1 } },
//   },
//   {
//     id: 56,
//     pregunta: "Puedo aprender tanto de los éxitos como de los fracasos.",
//     tipo: "sino",
//     puntuacion: { SI: { INTR: 1 } },
//   },
//   {
//     id: 57,
//     pregunta: "Me gusta saltar, brincar, correr.",
//     tipo: "sino",
//     puntuacion: { SI: { CK: 1 } },
//   },
//   {
//     id: 58,
//     pregunta: "Creo que mi manera de pensar es superior a la de los demás.",
//     tipo: "sino",
//     puntuacion: { SI: { INTR: 1 } },
//   },
//   {
//     id: 59,
//     pregunta: "Tengo habilidad para dibujar casas, cosas y figuras tridimensionales.",
//     tipo: "sino",
//     puntuacion: { SI: { VE: 1 } },
//   },
//   {
//     id: 60,
//     pregunta: "Cuando suena la música la siento en mi cuerpo.",
//     tipo: "sino",
//     puntuacion: { SI: { M: 1, CK: 1 } },
//   },
//   {
//     id: 61,
//     pregunta: "Cuando dialogo conmigo llego a conclusiones exactas.",
//     tipo: "multiple",
//     opciones: [
//       { valor: "A", texto: "No dialogo conmigo" },
//       { valor: "B", texto: "Me alego y me trato mal" },
//       { valor: "C", texto: "Hablo conmigo y hasta reímos juntos" },
//       { valor: "D", texto: "Lo hago hasta en voz alta" },
//     ],
//     puntuacion: { D: { INTR: 1 } },
//   },
//   {
//     id: 62,
//     pregunta: "Me siento muy triste cuando pierdo amigos.",
//     tipo: "sino",
//     puntuacion: { SI: { INT: 1 } },
//   },
//   {
//     id: 63,
//     pregunta: "Si en un incendio hay un gato, un libro, un cuadro muy valioso y mis ahorros de toda la vida, salvo a:",
//     tipo: "multiple",
//     opciones: [
//       { valor: "A", texto: "Mis ahorros" },
//       { valor: "B", texto: "Gato" },
//       { valor: "C", texto: "El cuadro" },
//       { valor: "D", texto: "El libro" },
//     ],
//     puntuacion: { A: { LM: 1 }, B: { N: 1 }, C: { VE: 1 }, D: { VL: 1 } },
//   },
//   {
//     id: 64,
//     pregunta: "Viene un tren sin frenos y estás en el lugar donde puedes cambiar el curso. ¿A dónde lo desvías?",
//     tipo: "multiple",
//     opciones: [
//       { valor: "A", texto: "Bosque" },
//       { valor: "B", texto: "Vías del tren en subida" },
//       { valor: "C", texto: "Piano" },
//       { valor: "D", texto: "Un tablero con operaciones matemáticas" },
//     ],
//     puntuacion: { A: { N: -1 }, B: { LM: 1 }, C: { M: -1 }, D: { LM: -1 } },
//   },
//   {
//     id: 65,
//     pregunta: "Puedo percibir el estado de ánimo de una persona de acuerdo al timbre de su voz.",
//     tipo: "sino",
//     puntuacion: { SI: { M: 1 } },
//   },
//   {
//     id: 66,
//     pregunta: "Creo tener habilidad para escribir una carta.",
//     tipo: "sino",
//     puntuacion: { SI: { VL: 1 } },
//   },
//   {
//     id: 67,
//     pregunta: "Si en estos momentos todo queda oscuro, ¿puedo encontrar la salida?",
//     tipo: "sino",
//     puntuacion: { SI: { VE: 1 } },
//   },
//   {
//     id: 68,
//     pregunta: "¿Puedo entender qué enfermedad tengo y por qué me dio?",
//     tipo: "sino",
//     puntuacion: { SI: { CK: 1, INTR: 1 } },
//   },
//   {
//     id: 69,
//     pregunta: "¿Soy de ese tipo de personas que me puedo aislar del mundo por espacios determinados?",
//     tipo: "sino",
//     puntuacion: { SI: { INTR: 1 } },
//   },
//   {
//     id: 70,
//     pregunta: "¿Podría perfectamente vivir en la selva por un mes?",
//     tipo: "sino",
//     puntuacion: { SI: { N: 1 } },
//   },
//   {
//     id: 71,
//     pregunta: "¿Asisto regularmente a conciertos?",
//     tipo: "sino",
//     puntuacion: { SI: { M: 1 } },
//   },
//   {
//     id: 72,
//     pregunta: "¿Me siento atraído por la Poesía?",
//     tipo: "sino",
//     puntuacion: { SI: { VL: 1 } },
//   },
//   {
//     id: 73,
//     pregunta: "¿Creo poder elaborar un discurso?",
//     tipo: "sino",
//     puntuacion: { SI: { VL: 1 } },
//   },
//   {
//     id: 74,
//     pregunta: "¿Puedo calcular la altura del lugar donde estoy?",
//     tipo: "multiple",
//     opciones: [
//       { valor: "A", texto: "Sí soy capaz" },
//       { valor: "B", texto: "Prefiero traer un metro" },
//       { valor: "C", texto: "No creo poder hacerlo" },
//       { valor: "D", texto: "Me causa inquietud pero no acertaría" },
//     ],
//     puntuacion: { A: { VE: 1 } },
//   },
//   {
//     id: 75,
//     pregunta: "¿Me conocen por ser persona que hablo mucho?",
//     tipo: "sino",
//     puntuacion: { SI: { VL: 1 } },
//   },
//   {
//     id: 76,
//     pregunta: "Cuando estoy solo en algún lugar hago lo siguiente:",
//     tipo: "multiple",
//     opciones: [
//       { valor: "A", texto: "Pongo música" },
//       { valor: "B", texto: "Coloco la radio" },
//       { valor: "C", texto: "Aprovecho para dialogar conmigo" },
//       { valor: "D", texto: "Duermo un rato" },
//     ],
//     puntuacion: { A: { M: 1 }, B: { LM: 1 }, C: { INTR: 1 }, D: { CK: 1 } },
//   },
//   {
//     id: 77,
//     pregunta: "Recuerdo qué ropa vestía el pasado domingo.",
//     tipo: "sino",
//     puntuacion: { SI: { CK: 1, VE: 1 } },
//   },
//   {
//     id: 78,
//     pregunta: "¿En cuál de las siguientes disciplinas deportivas soy mejor?",
//     tipo: "multiple",
//     opciones: [
//       { valor: "A", texto: "Natación" },
//       { valor: "B", texto: "Fútbol" },
//       { valor: "C", texto: "Bicicleta" },
//       { valor: "D", texto: "Patinaje" },
//       { valor: "E", texto: "Bolos" },
//       { valor: "F", texto: "Tejo" },
//       { valor: "G", texto: "Voleibol" },
//     ],
//     puntuacion: { A: { VE: 1 }, B: { INT: 1 }, C: { CK: 1 }, D: { CK: 1 }, E: { LM: 1 }, F: { LM: 1 }, G: { INT: 1 } },
//   },
//   {
//     id: 79,
//     pregunta: "¿Has pensado en qué diría tu epitafio?",
//     tipo: "sino",
//     puntuacion: { SI: { INTR: 1 } },
//   },
//   {
//     id: 80,
//     pregunta: "¿Alguna vez jugaste karaoke?",
//     tipo: "sino",
//     puntuacion: { SI: { M: 1 } },
//   },
//   {
//     id: 81,
//     pregunta: "Si tu cuerpo fuera gigante, ¿en qué lo recorrerías?",
//     tipo: "multiple",
//     opciones: [
//       { valor: "A", texto: "Avión" },
//       { valor: "B", texto: "Submarino" },
//       { valor: "C", texto: "Nadando" },
//       { valor: "D", texto: "En carro" },
//       { valor: "E", texto: "En bicicleta" },
//       { valor: "F", texto: "En moto" },
//       { valor: "G", texto: "En un ovni" },
//     ],
//     puntuacion: { A: { VE: 1 }, B: { VE: 1 }, C: { VE: 1 }, D: { CK: 1 }, E: { CK: 1 }, F: { LM: 1 }, G: { INTR: 1 } },
//   },
//   {
//     id: 82,
//     pregunta: "¿Podrías visualizarte como locutor de radio o narrador deportivo?",
//     tipo: "sino",
//     puntuacion: { SI: { VL: 1 } },
//   },
//   {
//     id: 83,
//     pregunta: "¿Piensas que podrías aprender a tocar cualquier instrumento musical si te lo propones?",
//     tipo: "sino",
//     puntuacion: { SI: { M: 1 } },
//   },
//   {
//     id: 84,
//     pregunta: "Te consideras:",
//     tipo: "multiple",
//     opciones: [
//       { valor: "A", texto: "Muy inteligente, soy un genio" },
//       { valor: "B", texto: "Soy muy inteligente pero no me valoran" },
//       { valor: "C", texto: "Soy un nivel muy normal" },
//       { valor: "D", texto: "Soy un fracaso" },
//     ],
//     puntuacion: { A: { LM: 1 }, D: { INTR: -1 } },
//   },
//   {
//     id: 85,
//     pregunta: "¿Piensas en hacer algo para que el mundo sea mejor?",
//     tipo: "sino",
//     puntuacion: { SI: { N: 1 } },
//   },
// ]

// export default function TestPage({ onComplete, onBack }) {
//   const [preguntaActual, setPreguntaActual] = useState(0)
//   const [respuestas, setRespuestas] = useState({})
//   const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null)

//   const pregunta = preguntasReales[preguntaActual]
//   const totalPreguntas = preguntasReales.length
//   const progreso = ((preguntaActual + 1) / totalPreguntas) * 100

//   const manejarRespuesta = (valor) => {
//     setRespuestaSeleccionada(valor)
//   }

//   const siguientePregunta = () => {
//     if (respuestaSeleccionada !== null) {
//       setRespuestas((prev) => ({
//         ...prev,
//         [preguntaActual]: respuestaSeleccionada,
//       }))

//       if (preguntaActual < totalPreguntas - 1) {
//         setPreguntaActual((prev) => prev + 1)
//         setRespuestaSeleccionada(null)
//       } else {
//         calcularResultados()
//       }
//     }
//   }

//   const preguntaAnterior = () => {
//     if (preguntaActual > 0) {
//       setPreguntaActual((prev) => prev - 1)
//       setRespuestaSeleccionada(respuestas[preguntaActual - 1] || null)
//     }
//   }

//   const calcularResultados = () => {
//     const puntajes = {
//       LM: 0,
//       VL: 0,
//       VE: 0,
//       N: 0,
//       M: 0,
//       INTR: 0,
//       INT: 0,
//       CK: 0,
//     }

//     Object.entries(respuestas).forEach(([preguntaId, valorRespuesta]) => {
//       const pregunta = preguntasReales[Number.parseInt(preguntaId)]
//       const puntuacionPregunta = pregunta.puntuacion[valorRespuesta]

//       if (puntuacionPregunta) {
//         Object.entries(puntuacionPregunta).forEach(([inteligencia, puntos]) => {
//           puntajes[inteligencia] += puntos
//         })
//       }
//     })

//     const inteligenciaPredominante = Object.entries(puntajes).reduce((a, b) =>
//       puntajes[a[0]] > puntajes[b[0]] ? a : b,
//     )[0]

//     onComplete({
//       puntajes,
//       inteligenciaPredominante,
//       respuestas,
//     })
//   }

//   return (
//     <div
//       className="min-vh-100"
//       style={{
//         background: "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)",
//         backgroundSize: "400% 400%",
//         animation: "gradientShift 15s ease infinite",
//       }}
//     >
//       <style>
//         {`
//           @keyframes gradientShift {
//             0% { background-position: 0% 50%; }
//             50% { background-position: 100% 50%; }
//             100% { background-position: 0% 50%; }
//           }
//           @keyframes float {
//             0%, 100% { transform: translateY(0px); }
//             50% { transform: translateY(-6px); }
//           }
//           @keyframes pulse {
//             0%, 100% { transform: scale(1); }
//             50% { transform: scale(1.05); }
//           }
//           @keyframes sparkle {
//             0%, 100% { opacity: 1; transform: scale(1) rotate(0deg); }
//             50% { opacity: 0.7; transform: scale(1.2) rotate(180deg); }
//           }
//           @keyframes progressGlow {
//             0%, 100% { box-shadow: 0 0 5px rgba(102, 126, 234, 0.5); }
//             50% { box-shadow: 0 0 20px rgba(102, 126, 234, 0.8); }
//           }
//           .card-hover {
//             transition: all 0.3s ease;
//           }
//           .card-hover:hover {
//             transform: translateY(-5px);
//             box-shadow: 0 15px 35px rgba(0,0,0,0.2) !important;
//           }
//           .option-card {
//             transition: all 0.3s ease;
//             cursor: pointer;
//             position: relative;
//             overflow: hidden;
//           }
//           .option-card:hover {
//             transform: translateY(-3px);
//             box-shadow: 0 10px 25px rgba(0,0,0,0.15) !important;
//           }
//           .option-card.selected {
//             transform: translateY(-3px) scale(1.02);
//             box-shadow: 0 15px 35px rgba(102, 126, 234, 0.3) !important;
//           }
//           .option-card::before {
//             content: '';
//             position: absolute;
//             top: 0;
//             left: -100%;
//             width: 100%;
//             height: 100%;
//             background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
//             transition: left 0.5s;
//           }
//           .option-card:hover::before {
//             left: 100%;
//           }
//           .floating-element {
//             animation: float 3s ease-in-out infinite;
//           }
//           .pulsing-element {
//             animation: pulse 2s ease-in-out infinite;
//           }
//           .sparkling-element {
//             animation: sparkle 2s ease-in-out infinite;
//           }
//           .progress-animated {
//             animation: progressGlow 2s ease-in-out infinite;
//           }
//           .question-number {
//             background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//             color: white;
//             border-radius: 50%;
//             width: 40px;
//             height: 40px;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             font-weight: bold;
//             box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
//           }
//           .question-number-mobile {
//             width: 35px;
//             height: 35px;
//             font-size: 14px;
//           }
//           @media (max-width: 767px) {
//             .question-number {
//               width: 35px;
//               height: 35px;
//               font-size: 14px;
//             }
//           }
//         `}
//       </style>

//       <div className="container py-3 py-md-5">
//         <div className="row justify-content-center">
//           <div className="col-12 col-md-10 col-lg-8 col-xl-8">
//             {/* Header con Progreso Espectacular */}
//             <div className="mb-4 mb-md-5">
//               <div
//                 className="card border-0 shadow-lg card-hover"
//                 style={{
//                   backdropFilter: "blur(15px)",
//                   backgroundColor: "rgba(255,255,255,0.95)",
//                   border: "2px solid rgba(255,255,255,0.3)",
//                 }}
//               >
//                 <div className="card-body p-3 p-md-4">
//                   {/* Header Superior */}
//                   <div className="d-flex justify-content-between align-items-center mb-3 mb-md-4">
//                     <div className="d-flex align-items-center">
//                       <div
//                         className="d-inline-flex align-items-center justify-content-center rounded-circle me-3 pulsing-element"
//                         style={{
//                           width: "40px",
//                           height: "40px",
//                           background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//                         }}
//                       >
//                         <Brain size={20} className="text-white" />
//                       </div>
//                       <div>
//                         <h1 className="h4 h-md-3 fw-bold text-dark mb-1">🧠 Test de Inteligencias Múltiples</h1>
//                         <small className="text-muted d-none d-sm-block">Descubre tu potencial único</small>
//                       </div>
//                     </div>

//                     {/* Contador de Preguntas */}
//                     <div className="text-end">
//                       <div className="d-flex align-items-center mb-2">
//                         <div className="question-number me-2 floating-element">{preguntaActual + 1}</div>
//                         <div className="d-none d-sm-block">
//                           <div className="fw-bold text-dark">Pregunta {preguntaActual + 1}</div>
//                           <small className="text-muted">de {totalPreguntas}</small>
//                         </div>
//                         <div className="d-block d-sm-none">
//                           <div className="fw-bold text-dark small">
//                             {preguntaActual + 1}/{totalPreguntas}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Barra de Progreso Mejorada */}
//                   <div className="mb-3">
//                     <div className="d-flex justify-content-between align-items-center mb-2">
//                       <span className="small fw-semibold text-dark">Progreso del Test</span>
//                       <span className="small fw-bold" style={{ color: "#667eea" }}>
//                         {Math.round(progreso)}%
//                       </span>
//                     </div>
//                     <div
//                       className="progress progress-animated"
//                       style={{ height: "12px", borderRadius: "10px", backgroundColor: "rgba(102, 126, 234, 0.1)" }}
//                     >
//                       <div
//                         className="progress-bar"
//                         style={{
//                           width: `${progreso}%`,
//                           background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//                           borderRadius: "10px",
//                           transition: "width 0.5s ease",
//                         }}
//                       ></div>
//                     </div>
//                   </div>

//                   {/* Estadísticas Rápidas */}
//                   <div className="row g-2 g-md-3">
//                     <div className="col-4">
//                       <div className="text-center">
//                         <div className="d-flex align-items-center justify-content-center mb-1">
//                           <Target size={14} className="text-success me-1" />
//                           <small className="fw-bold text-success">{preguntaActual}</small>
//                         </div>
//                         <small className="text-muted" style={{ fontSize: "0.75rem" }}>
//                           Completadas
//                         </small>
//                       </div>
//                     </div>
//                     <div className="col-4">
//                       <div className="text-center">
//                         <div className="d-flex align-items-center justify-content-center mb-1">
//                           <Clock size={14} className="text-warning me-1" />
//                           <small className="fw-bold text-warning">{totalPreguntas - preguntaActual - 1}</small>
//                         </div>
//                         <small className="text-muted" style={{ fontSize: "0.75rem" }}>
//                           Restantes
//                         </small>
//                       </div>
//                     </div>
//                     <div className="col-4">
//                       <div className="text-center">
//                         <div className="d-flex align-items-center justify-content-center mb-1">
//                           <Zap size={14} className="text-info me-1" />
//                           <small className="fw-bold text-info">8</small>
//                         </div>
//                         <small className="text-muted" style={{ fontSize: "0.75rem" }}>
//                           Inteligencias
//                         </small>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Card de la Pregunta */}
//             <div className="mb-4 mb-md-5">
//               <div
//                 className="card border-0 shadow-lg card-hover"
//                 style={{
//                   backdropFilter: "blur(15px)",
//                   backgroundColor: "rgba(255,255,255,0.95)",
//                   border: "2px solid rgba(255,255,255,0.3)",
//                 }}
//               >
//                 <div className="card-body p-3 p-md-5">
//                   {/* Número y Pregunta */}
//                   <div className="mb-4">
//                     <div className="d-flex align-items-start mb-3">
//                       <div
//                         className="d-flex align-items-center justify-content-center rounded-circle me-3 sparkling-element"
//                         style={{
//                           width: "35px",
//                           height: "35px",
//                           background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
//                           color: "white",
//                           fontSize: "14px",
//                           fontWeight: "bold",
//                         }}
//                       >
//                         {preguntaActual + 1}
//                       </div>
//                       <div className="flex-grow-1">
//                         <h2 className="h5 h-md-4 fw-bold text-dark mb-0">Pregunta {preguntaActual + 1}</h2>
//                       </div>
//                     </div>
//                     <p className="lead text-muted mb-0" style={{ fontSize: "1rem", lineHeight: "1.6" }}>
//                       {pregunta.pregunta}
//                     </p>
//                   </div>

//                   {/* Opciones de Respuesta */}
//                   <div className="d-grid gap-3">
//                     {pregunta.tipo === "sino" ? (
//                       <>
//                         <div
//                           className={`card border-2 option-card ${respuestaSeleccionada === "SI" ? "selected" : ""}`}
//                           style={{
//                             borderColor: respuestaSeleccionada === "SI" ? "#667eea" : "rgba(0,0,0,0.1)",
//                             backgroundColor: respuestaSeleccionada === "SI" ? "rgba(102, 126, 234, 0.1)" : "white",
//                           }}
//                           onClick={() => manejarRespuesta("SI")}
//                         >
//                           <div className="card-body p-3 p-md-4 d-flex align-items-center">
//                             <div className="me-3">
//                               <div
//                                 className="d-flex align-items-center justify-content-center rounded-circle"
//                                 style={{
//                                   width: "24px",
//                                   height: "24px",
//                                   border: `2px solid ${respuestaSeleccionada === "SI" ? "#667eea" : "#dee2e6"}`,
//                                   backgroundColor: respuestaSeleccionada === "SI" ? "#667eea" : "transparent",
//                                 }}
//                               >
//                                 {respuestaSeleccionada === "SI" && <CheckCircle size={14} className="text-white" />}
//                               </div>
//                             </div>
//                             <div className="flex-grow-1">
//                               <span className="fw-semibold text-dark" style={{ fontSize: "1rem" }}>
//                                 ✅ Sí
//                               </span>
//                             </div>
//                           </div>
//                         </div>

//                         <div
//                           className={`card border-2 option-card ${respuestaSeleccionada === "NO" ? "selected" : ""}`}
//                           style={{
//                             borderColor: respuestaSeleccionada === "NO" ? "#667eea" : "rgba(0,0,0,0.1)",
//                             backgroundColor: respuestaSeleccionada === "NO" ? "rgba(102, 126, 234, 0.1)" : "white",
//                           }}
//                           onClick={() => manejarRespuesta("NO")}
//                         >
//                           <div className="card-body p-3 p-md-4 d-flex align-items-center">
//                             <div className="me-3">
//                               <div
//                                 className="d-flex align-items-center justify-content-center rounded-circle"
//                                 style={{
//                                   width: "24px",
//                                   height: "24px",
//                                   border: `2px solid ${respuestaSeleccionada === "NO" ? "#667eea" : "#dee2e6"}`,
//                                   backgroundColor: respuestaSeleccionada === "NO" ? "#667eea" : "transparent",
//                                 }}
//                               >
//                                 {respuestaSeleccionada === "NO" && <CheckCircle size={14} className="text-white" />}
//                               </div>
//                             </div>
//                             <div className="flex-grow-1">
//                               <span className="fw-semibold text-dark" style={{ fontSize: "1rem" }}>
//                                 ❌ No
//                               </span>
//                             </div>
//                           </div>
//                         </div>
//                       </>
//                     ) : (
//                       pregunta.opciones?.map((opcion, index) => (
//                         <div
//                           key={opcion.valor}
//                           className={`card border-2 option-card ${respuestaSeleccionada === opcion.valor ? "selected" : ""}`}
//                           style={{
//                             borderColor: respuestaSeleccionada === opcion.valor ? "#667eea" : "rgba(0,0,0,0.1)",
//                             backgroundColor:
//                               respuestaSeleccionada === opcion.valor ? "rgba(102, 126, 234, 0.1)" : "white",
//                             animationDelay: `${index * 0.1}s`,
//                           }}
//                           onClick={() => manejarRespuesta(opcion.valor)}
//                         >
//                           <div className="card-body p-3 p-md-4 d-flex align-items-center">
//                             <div className="me-3">
//                               <div
//                                 className="d-flex align-items-center justify-content-center rounded-circle fw-bold"
//                                 style={{
//                                   width: "32px",
//                                   height: "32px",
//                                   backgroundColor: respuestaSeleccionada === opcion.valor ? "#667eea" : "#f8f9fa",
//                                   color: respuestaSeleccionada === opcion.valor ? "white" : "#6c757d",
//                                   fontSize: "14px",
//                                 }}
//                               >
//                                 {opcion.valor}
//                               </div>
//                             </div>
//                             <div className="flex-grow-1">
//                               <span className="fw-medium text-dark" style={{ fontSize: "0.95rem" }}>
//                                 {opcion.texto}
//                               </span>
//                             </div>
//                             {respuestaSeleccionada === opcion.valor && (
//                               <div className="ms-3">
//                                 <CheckCircle size={20} className="text-success" />
//                               </div>
//                             )}
//                           </div>
//                         </div>
//                       ))
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Navegación Mejorada */}
//             <div className="d-flex justify-content-between align-items-center">
//               <button
//                 onClick={preguntaActual === 0 ? onBack : preguntaAnterior}
//                 className="btn btn-outline-light btn-lg d-flex align-items-center px-3 px-md-4 py-3 rounded-4 shadow"
//                 style={{
//                   backdropFilter: "blur(10px)",
//                   backgroundColor: "rgba(255,255,255,0.2)",
//                   border: "2px solid rgba(255,255,255,0.3)",
//                   color: "white",
//                   transition: "all 0.3s ease",
//                   fontSize: "0.9rem",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.target.style.backgroundColor = "rgba(255,255,255,0.3)"
//                   e.target.style.transform = "translateY(-2px)"
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.backgroundColor = "rgba(255,255,255,0.2)"
//                   e.target.style.transform = "translateY(0)"
//                 }}
//               >
//                 <ArrowLeft size={18} className="me-2" />
//                 <span className="fw-semibold d-none d-sm-inline">{preguntaActual === 0 ? "Volver" : "Anterior"}</span>
//                 <span className="fw-semibold d-inline d-sm-none">{preguntaActual === 0 ? "Volver" : "Ant."}</span>
//               </button>

//               <button
//                 onClick={siguientePregunta}
//                 disabled={respuestaSeleccionada === null}
//                 className="btn btn-lg fw-bold px-3 px-md-5 py-3 py-md-4 rounded-4 shadow-lg position-relative overflow-hidden"
//                 style={{
//                   background:
//                     respuestaSeleccionada !== null
//                       ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
//                       : "linear-gradient(135deg, #6c757d 0%, #495057 100%)",
//                   border: "none",
//                   color: "white",
//                   fontSize: "0.9rem",
//                   minWidth: "150px",
//                   transition: "all 0.3s ease",
//                   opacity: respuestaSeleccionada !== null ? 1 : 0.6,
//                 }}
//                 onMouseEnter={(e) => {
//                   if (respuestaSeleccionada !== null) {
//                     e.target.style.transform = "translateY(-3px) scale(1.02)"
//                     e.target.style.boxShadow = "0 20px 40px rgba(102, 126, 234, 0.4)"
//                   }
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.transform = "translateY(0) scale(1)"
//                   e.target.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)"
//                 }}
//               >
//                 <span className="me-2">{preguntaActual === totalPreguntas - 1 ? "🎯" : "🚀"}</span>
//                 <span className="d-none d-sm-inline">
//                   {preguntaActual === totalPreguntas - 1 ? "Finalizar Test" : "Siguiente"}
//                 </span>
//                 <span className="d-inline d-sm-none">
//                   {preguntaActual === totalPreguntas - 1 ? "Finalizar" : "Sig."}
//                 </span>
//                 <ArrowRight size={18} className="ms-2" />
//               </button>
//             </div>

//             {/* Mensaje de Motivación */}
//             {preguntaActual > 0 && preguntaActual % 10 === 0 && (
//               <div className="text-center mt-4">
//                 <div
//                   className="bg-white rounded-4 p-3 shadow-lg floating-element d-inline-block"
//                   style={{
//                     backdropFilter: "blur(15px)",
//                     backgroundColor: "rgba(255,255,255,0.9)",
//                   }}
//                 >
//                   <small className="text-muted fst-italic">
//                     🌟 ¡Excelente progreso! Ya has completado {preguntaActual} preguntas 🌟
//                   </small>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, Brain, CheckCircle, Clock, Target, Zap } from "lucide-react"

// Preguntas reales del test de inteligencias múltiples
const preguntasReales = [
  {
    id: 1,
    pregunta: "¿Cuánto valen cinco pizzas y media a dólar y medio cada pizza y media?",
    tipo: "multiple",
    opciones: [
      { valor: "A", texto: "3 Dólares y Medio" },
      { valor: "B", texto: "5 Dólares" },
      { valor: "C", texto: "5 Dólares y medio" },
      { valor: "D", texto: "3 Dólares" },
    ],
    puntuacion: { C: { LM: 2 } },
  },
  {
    id: 2,
    pregunta: "Mis amigos me buscan para aconsejar o para consultarme ciertas cosas.",
    tipo: "sino",
    puntuacion: { SI: { INT: 1 } },
  },
  {
    id: 3,
    pregunta: "Practico un deporte de manera frecuente.",
    tipo: "sino",
    puntuacion: { SI: { CK: 1 } },
  },
  {
    id: 4,
    pregunta: "Me siento bien resolviendo problemas matemáticos.",
    tipo: "sino",
    puntuacion: { SI: { LM: 1 } },
  },
  {
    id: 5,
    pregunta: "Creo que las personas que abrazan un Árbol:",
    tipo: "multiple",
    opciones: [
      { valor: "A", texto: "Están Locas" },
      { valor: "B", texto: "No me importa" },
      { valor: "C", texto: "Excelente, yo también lo haría" },
      { valor: "D", texto: "Debe tener su ciencia aunque no lo haría" },
    ],
    puntuacion: { A: { N: -1 }, C: { N: 1 } },
  },
  {
    id: 6,
    pregunta: "Me gusta pertenecer a Grupos de personas, Clubes, o grupos donde se interactúe con otras personas.",
    tipo: "sino",
    puntuacion: { SI: { INT: 1 } },
  },
  {
    id: 7,
    pregunta: "Me gusta realizar manualidades, artesanías.",
    tipo: "sino",
    puntuacion: { SI: { CK: 1 } },
  },
  {
    id: 8,
    pregunta: "Desde niño me encantan las matemáticas.",
    tipo: "sino",
    puntuacion: { SI: { LM: 1 } },
  },
  {
    id: 9,
    pregunta: "Me gusta o me gustaría tener un Jardín en mi casa.",
    tipo: "sino",
    puntuacion: { SI: { N: 1 } },
  },
  {
    id: 10,
    pregunta: "Siento la necesidad de hablar con personas sin importar su edad.",
    tipo: "sino",
    puntuacion: { SI: { INT: 1 } },
  },
  {
    id: 11,
    pregunta: "Sería feliz si en mi cumpleaños me regalaran un rompecabezas o cualquier tipo de puzzle o Lego.",
    tipo: "sino",
    puntuacion: { SI: { LM: 1 } },
  },
  {
    id: 12,
    pregunta: "¿Tengo la habilidad de recordar nombres de personas y lugares?",
    tipo: "sino",
    puntuacion: { SI: { VL: 1 } },
  },
  {
    id: 13,
    pregunta: "¿Soy de ese tipo de personas que disfruto dialogar y discutir conmigo?",
    tipo: "sino",
    puntuacion: { SI: { INTR: 1 } },
  },
  {
    id: 14,
    pregunta: "¿Desde niño me gustó ver, escuchar y leer acerca de la Biología y las ciencias naturales?",
    tipo: "sino",
    puntuacion: { SI: { N: 1 } },
  },
  {
    id: 15,
    pregunta: "Es relativamente fácil que los demás me escuchen y me entiendan, me gusta hacerlo.",
    tipo: "multiple",
    opciones: [
      { valor: "A", texto: "Sí, me encanta" },
      { valor: "B", texto: "Jamás, nadie me entiende" },
      { valor: "C", texto: "Cuando me toca entro en pánico" },
      { valor: "D", texto: "No, que hable otro" },
    ],
    puntuacion: { A: { INT: 1 } },
  },
  {
    id: 16,
    pregunta: "Nunca fue problema aprender a montar en Bicicleta o en patines.",
    tipo: "multiple",
    opciones: [
      { valor: "A", texto: "Aún no monto bicicleta ni patines" },
      { valor: "B", texto: "Me encanta hacerlo" },
      { valor: "C", texto: "Me suena la idea, pienso hacerlo" },
      { valor: "D", texto: "No lo voy a hacer nunca" },
    ],
    puntuacion: { B: { CK: 1 } },
  },
  {
    id: 17,
    pregunta: "Soy bien preguntón, me gusta investigar las cosas hasta entenderlas.",
    tipo: "sino",
    puntuacion: { SI: { LM: 1 } },
  },
  {
    id: 18,
    pregunta: "Cuando me siento frustrado dialogo conmigo hasta encontrar el motivo.",
    tipo: "sino",
    puntuacion: { SI: { INTR: 1 } },
  },
  {
    id: 19,
    pregunta: "Tengo muchos amigos.",
    tipo: "multiple",
    opciones: [
      { valor: "A", texto: "Solo los del trabajo, la Universidad, el colegio" },
      { valor: "B", texto: "Me da dificultad hacer amigos" },
      { valor: "C", texto: "Me gustaría pero no tengo suerte en hacer amigos" },
      { valor: "D", texto: "Tengo amigos por cantidad" },
    ],
    puntuacion: { D: { INT: 1 } },
  },
  {
    id: 20,
    pregunta: "Sé leer mapas con facilidad.",
    tipo: "sino",
    puntuacion: { SI: { VE: 1 } },
  },
  {
    id: 21,
    pregunta: "Si me dan la oportunidad puedo contar chistes e inventar historias.",
    tipo: "sino",
    puntuacion: { SI: { VL: 1 } },
  },
  {
    id: 22,
    pregunta: "Encuentro un interés real en lo que hablan los demás.",
    tipo: "sino",
    puntuacion: { SI: { INT: 1 } },
  },
  {
    id: 23,
    pregunta: "Cuando hay una discusión o debate me agrada dar mi opinión y hacerme escuchar.",
    tipo: "sino",
    puntuacion: { SI: { VL: 1 } },
  },
  {
    id: 24,
    pregunta: "Me gusta todo juego que tenga que ver con la Lógica.",
    tipo: "sino",
    puntuacion: { SI: { LM: 1 } },
  },
  {
    id: 25,
    pregunta: "Al escribir me preocupo por no cometer errores de ortografía.",
    tipo: "sino",
    puntuacion: { SI: { VL: 1 } },
  },
  {
    id: 26,
    pregunta: "Tengo hábitos que cuidan el planeta como reciclar.",
    tipo: "sino",
    puntuacion: { SI: { N: 1 } },
  },
  {
    id: 27,
    pregunta: "Me agrada ir a cumpleaños y fiestas donde pueda compartir con otras personas.",
    tipo: "sino",
    puntuacion: { SI: { INT: 1 } },
  },
  {
    id: 28,
    pregunta: "Puedo diferenciar géneros de música, ritmos o cantantes.",
    tipo: "sino",
    puntuacion: { SI: { M: 1 } },
  },
  {
    id: 29,
    pregunta: "Me agrada intentar hacer las cuentas sin la calculadora.",
    tipo: "sino",
    puntuacion: { SI: { LM: 1 } },
  },
  {
    id: 30,
    pregunta: "Cuando hablo me extiendo en mis explicaciones y soy muy detallista.",
    tipo: "multiple",
    opciones: [
      { valor: "A", texto: "Sí, ese soy yo" },
      { valor: "B", texto: "Nunca me pasa" },
      { valor: "C", texto: "Quizá algunas veces" },
      { valor: "D", texto: "Me da miedo hablar" },
    ],
    puntuacion: { A: { VL: 1 } },
  },
  {
    id: 31,
    pregunta: "Sé diferenciar muy bien mis emociones.",
    tipo: "sino",
    puntuacion: { SI: { INTR: 1 } },
  },
  {
    id: 32,
    pregunta: "Disfruto escuchando música, sin importar género o ritmo.",
    tipo: "sino",
    puntuacion: { SI: { M: 1 } },
  },
  {
    id: 33,
    pregunta: "Me considero una persona con alto nivel de empatía.",
    tipo: "multiple",
    opciones: [
      { valor: "A", texto: "Sí, soy totalmente empático" },
      { valor: "B", texto: "Sí aunque tengo mis límites" },
      { valor: "C", texto: "No soy tan empático, solo lo necesario" },
      { valor: "D", texto: "No soy para nada empático" },
    ],
    puntuacion: { A: { INT: 1 }, B: { INT: 0.5 }, D: { INT: -1 } },
  },
  {
    id: 34,
    pregunta: "Me gusta observar dibujos, figuras y todo tipo de imágenes en 3D.",
    tipo: "sino",
    puntuacion: { SI: { VE: 1 } },
  },
  {
    id: 35,
    pregunta: "Disfruto la soledad, mi tiempo a solas es muy agradable.",
    tipo: "multiple",
    opciones: [
      { valor: "A", texto: "Sí, soy feliz cuando estoy a solas" },
      { valor: "B", texto: "No me gusta para nada" },
      { valor: "C", texto: "A veces es bueno estar a solas" },
      { valor: "D", texto: "Cuando me toca estar a solas sufro" },
    ],
    puntuacion: { A: { INTR: 1 }, B: { INTR: -0.5 } },
  },
  {
    id: 36,
    pregunta: "Me agradan los juegos de palabras.",
    tipo: "sino",
    puntuacion: { SI: { VL: 1 } },
  },
  {
    id: 37,
    pregunta: "Mi nivel de lectura es:",
    tipo: "multiple",
    opciones: [
      { valor: "A", texto: "Un libro al año" },
      { valor: "B", texto: "Dos libros al año" },
      { valor: "C", texto: "Un libro cada mes" },
      { valor: "D", texto: "Un libro cada semana" },
    ],
    puntuacion: { D: { VL: 3 }, C: { VL: 1 } },
  },
  {
    id: 38,
    pregunta: "Me encanta la música, canto o toco un instrumento musical.",
    tipo: "sino",
    puntuacion: { SI: { M: 1 } },
  },
  {
    id: 39,
    pregunta: "Puedo distinguir la voz de las personas por teléfono aunque la finjan de otra manera.",
    tipo: "sino",
    puntuacion: { SI: { M: 1 } },
  },
  {
    id: 40,
    pregunta: "Soy bueno para participar en aeróbicos o coreografías.",
    tipo: "multiple",
    opciones: [
      { valor: "A", texto: "Soy excelente" },
      { valor: "B", texto: "No es mucho pero con práctica lo hago" },
      { valor: "C", texto: "No es mi fuerte, casi que por obligación lo haría" },
      { valor: "D", texto: "No es lo mío" },
    ],
    puntuacion: { A: { CK: 1 } },
  },
  {
    id: 41,
    pregunta: "Si tengo un día libre lo emplearía en:",
    tipo: "multiple",
    opciones: [
      { valor: "A", texto: "Descanso y lleno crucigramas" },
      { valor: "B", texto: "No hago nada, me dedico a pensar cosas sin importancia" },
      { valor: "C", texto: "Lo dedico para hacer ejercicio" },
      { valor: "D", texto: "Sin pensarlo salgo a bailar" },
    ],
    puntuacion: { A: { LM: 1 }, B: { INTR: 1 }, C: { CK: 1 }, D: { M: 1 } },
  },
  {
    id: 42,
    pregunta: "Cuando trabajo o estudio por cierto tiempo quiero salir corriendo.",
    tipo: "sino",
    puntuacion: { SI: { CK: 1 } },
  },
  {
    id: 43,
    pregunta: "Cuando algo me interesa investigo hasta llegar al origen y comprender la causa y efecto de las cosas.",
    tipo: "sino",
    puntuacion: { SI: { LM: 1 } },
  },
  {
    id: 44,
    pregunta: "Puedo imitar voces de algunas personas.",
    tipo: "sino",
    puntuacion: { SI: { M: 1 } },
  },
  {
    id: 45,
    pregunta: "¿Puedo relacionar la música con ciertos estados de ánimo?",
    tipo: "sino",
    puntuacion: { SI: { M: 1 } },
  },
  {
    id: 46,
    pregunta: "Si miro un plano de una casa o de un lugar, puedo interpretarlo en mi imaginación como real.",
    tipo: "sino",
    puntuacion: { SI: { VE: 1 } },
  },
  {
    id: 47,
    pregunta: "Identifico con facilidad los 4 puntos cardinales.",
    tipo: "sino",
    puntuacion: { SI: { VE: 1 } },
  },
  {
    id: 48,
    pregunta: "Cuando estoy en la ducha prefiero:",
    tipo: "multiple",
    opciones: [
      { valor: "A", texto: "Cantar" },
      { valor: "B", texto: "Silbar" },
      { valor: "C", texto: "Concentrarme en bañarme" },
      { valor: "D", texto: "Imaginar miles de cosas" },
    ],
    puntuacion: { A: { M: 1 }, B: { M: 1 }, C: { CK: 1 }, D: { INTR: 1 } },
  },
  {
    id: 49,
    pregunta: "Me considero una persona:",
    tipo: "multiple",
    opciones: [
      { valor: "A", texto: "Totalmente independiente" },
      { valor: "B", texto: "Soy un poco dependiente pero solo de mi pareja" },
      { valor: "C", texto: "Soy dependiente de todos" },
      { valor: "D", texto: "Si me siento solo me muero" },
    ],
    puntuacion: { A: { INTR: 1 }, D: { INTR: -1 } },
  },
  {
    id: 50,
    pregunta: "Soy amante de los animales.",
    tipo: "sino",
    puntuacion: { SI: { N: 1 } },
  },
  {
    id: 51,
    pregunta: "Puedo interpretar con facilidad lo que otros piensan de mí.",
    tipo: "sino",
    puntuacion: { SI: { INT: 1 } },
  },
  {
    id: 52,
    pregunta: "Recuerdo más fácil lo siguiente:",
    tipo: "multiple",
    opciones: [
      { valor: "A", texto: "La letra de una canción" },
      { valor: "B", texto: "La clase que dictó el profesor" },
      { valor: "C", texto: "El último viaje que hice" },
      { valor: "D", texto: "El nombre de la persona que conocí" },
    ],
    puntuacion: { A: { M: 1 }, B: { LM: 1 }, C: { VE: 1 }, D: { INT: 1 } },
  },
  {
    id: 53,
    pregunta: "Me gusta ver llover.",
    tipo: "sino",
    puntuacion: { SI: { N: 1 } },
  },
  {
    id: 54,
    pregunta: "Puedo aprender una canción con relativa facilidad.",
    tipo: "sino",
    puntuacion: { SI: { M: 1 } },
  },
  {
    id: 55,
    pregunta: "Normalmente clasifico las cosas.",
    tipo: "sino",
    puntuacion: { SI: { LM: 1 } },
  },
  {
    id: 56,
    pregunta: "Puedo aprender tanto de los éxitos como de los fracasos.",
    tipo: "sino",
    puntuacion: { SI: { INTR: 1 } },
  },
  {
    id: 57,
    pregunta: "Me gusta saltar, brincar, correr.",
    tipo: "sino",
    puntuacion: { SI: { CK: 1 } },
  },
  {
    id: 58,
    pregunta: "Creo que mi manera de pensar es superior a la de los demás.",
    tipo: "sino",
    puntuacion: { SI: { INTR: 1 } },
  },
  {
    id: 59,
    pregunta: "Tengo habilidad para dibujar casas, cosas y figuras tridimensionales.",
    tipo: "sino",
    puntuacion: { SI: { VE: 1 } },
  },
  {
    id: 60,
    pregunta: "Cuando suena la música la siento en mi cuerpo.",
    tipo: "sino",
    puntuacion: { SI: { M: 1, CK: 1 } },
  },
  {
    id: 61,
    pregunta: "Cuando dialogo conmigo llego a conclusiones exactas.",
    tipo: "multiple",
    opciones: [
      { valor: "A", texto: "No dialogo conmigo" },
      { valor: "B", texto: "Me alego y me trato mal" },
      { valor: "C", texto: "Hablo conmigo y hasta reímos juntos" },
      { valor: "D", texto: "Lo hago hasta en voz alta" },
    ],
    puntuacion: { D: { INTR: 1 } },
  },
  {
    id: 62,
    pregunta: "Me siento muy triste cuando pierdo amigos.",
    tipo: "sino",
    puntuacion: { SI: { INT: 1 } },
  },
  {
    id: 63,
    pregunta: "Si en un incendio hay un gato, un libro, un cuadro muy valioso y mis ahorros de toda la vida, salvo a:",
    tipo: "multiple",
    opciones: [
      { valor: "A", texto: "Mis ahorros" },
      { valor: "B", texto: "Gato" },
      { valor: "C", texto: "El cuadro" },
      { valor: "D", texto: "El libro" },
    ],
    puntuacion: { A: { LM: 1 }, B: { N: 1 }, C: { VE: 1 }, D: { VL: 1 } },
  },
  {
    id: 64,
    pregunta: "Viene un tren sin frenos y estás en el lugar donde puedes cambiar el curso. ¿A dónde lo desvías?",
    tipo: "multiple",
    opciones: [
      {
        valor: "A",
        texto: "Bosque",
        imagen: "https://media.istockphoto.com/id/1446199740/es/foto/camino-a-trav%C3%A9s-de-un-bosque-iluminado-por-el-sol.jpg?s=612x612&w=0&k=20&c=VI1ZnEqvIyLh0M8J_7pcwWRWgfJ4sZHaOc5B_9QKix0=",
        descripcion: "Hacia un área natural con árboles",
      },
      {
        valor: "B",
        texto: "Vías del tren en subida",
        imagen: "https://img.freepik.com/fotos-premium/imagen-caminar-sobre-vias-tren-puente-sobre-agua_501731-2676.jpg?w=826",
        descripcion: "Hacia una pendiente que lo detenga",
      },
      {
        valor: "C",
        texto: "Piano",
        imagen: "https://www.coachhousepianos.co.uk/wp-content/uploads/2022/07/Yamaha-DGB1-Disklavier-Enspire-scaled-2-600x600.jpg",
        descripcion: "Hacia un piano gigante",
      },
      {
        valor: "D",
        texto: "Un tablero con operaciones matemáticas",
        imagen: "https://www.epasatiempos.es/img/fb-math-board-games-icon.png",
        descripcion: "Hacia un tablero lleno de números",
      },
    ],
    puntuacion: { A: { N: -1 }, B: { LM: 1 }, C: { M: -1 }, D: { LM: -1 } },
  },
  {
    id: 65,
    pregunta: "Puedo percibir el estado de ánimo de una persona de acuerdo al timbre de su voz.",
    tipo: "sino",
    puntuacion: { SI: { M: 1 } },
  },
  {
    id: 66,
    pregunta: "Creo tener habilidad para escribir una carta.",
    tipo: "sino",
    puntuacion: { SI: { VL: 1 } },
  },
  {
    id: 67,
    pregunta: "Si en estos momentos todo queda oscuro, ¿puedo encontrar la salida?",
    tipo: "sino",
    puntuacion: { SI: { VE: 1 } },
  },
  {
    id: 68,
    pregunta: "¿Puedo entender qué enfermedad tengo y por qué me dio?",
    tipo: "sino",
    puntuacion: { SI: { CK: 1, INTR: 1 } },
  },
  {
    id: 69,
    pregunta: "¿Soy de ese tipo de personas que me puedo aislar del mundo por espacios determinados?",
    tipo: "sino",
    puntuacion: { SI: { INTR: 1 } },
  },
  {
    id: 70,
    pregunta: "¿Podría perfectamente vivir en la selva por un mes?",
    tipo: "sino",
    puntuacion: { SI: { N: 1 } },
  },
  {
    id: 71,
    pregunta: "¿Asisto regularmente a conciertos?",
    tipo: "sino",
    puntuacion: { SI: { M: 1 } },
  },
  {
    id: 72,
    pregunta: "¿Me siento atraído por la Poesía?",
    tipo: "sino",
    puntuacion: { SI: { VL: 1 } },
  },
  {
    id: 73,
    pregunta: "¿Creo poder elaborar un discurso?",
    tipo: "sino",
    puntuacion: { SI: { VL: 1 } },
  },
  {
    id: 74,
    pregunta: "¿Puedo calcular la altura del lugar donde estoy?",
    tipo: "multiple",
    opciones: [
      { valor: "A", texto: "Sí soy capaz" },
      { valor: "B", texto: "Prefiero traer un metro" },
      { valor: "C", texto: "No creo poder hacerlo" },
      { valor: "D", texto: "Me causa inquietud pero no acertaría" },
    ],
    puntuacion: { A: { VE: 1 } },
  },
  {
    id: 75,
    pregunta: "¿Me conocen por ser persona que hablo mucho?",
    tipo: "sino",
    puntuacion: { SI: { VL: 1 } },
  },
  {
    id: 76,
    pregunta: "Cuando estoy solo en algún lugar hago lo siguiente:",
    tipo: "multiple",
    opciones: [
      { valor: "A", texto: "Pongo música" },
      { valor: "B", texto: "Coloco la radio" },
      { valor: "C", texto: "Aprovecho para dialogar conmigo" },
      { valor: "D", texto: "Duermo un rato" },
    ],
    puntuacion: { A: { M: 1 }, B: { LM: 1 }, C: { INTR: 1 }, D: { CK: 1 } },
  },
  {
    id: 77,
    pregunta: "Recuerdo qué ropa vestía el pasado domingo.",
    tipo: "sino",
    puntuacion: { SI: { CK: 1, VE: 1 } },
  },
  {
    id: 78,
    pregunta: "¿En cuál de las siguientes disciplinas deportivas soy mejor?",
    tipo: "multiple",
    opciones: [
      { valor: "A", texto: "Natación" },
      { valor: "B", texto: "Fútbol" },
      { valor: "C", texto: "Bicicleta" },
      { valor: "D", texto: "Patinaje" },
      { valor: "E", texto: "Bolos" },
      { valor: "F", texto: "Tejo" },
      { valor: "G", texto: "Voleibol" },
    ],
    puntuacion: { A: { VE: 1 }, B: { INT: 1 }, C: { CK: 1 }, D: { CK: 1 }, E: { LM: 1 }, F: { LM: 1 }, G: { INT: 1 } },
  },
  {
    id: 79,
    pregunta: "¿Has pensado en qué diría tu epitafio?",
    tipo: "sino",
    puntuacion: { SI: { INTR: 1 } },
  },
  {
    id: 80,
    pregunta: "¿Alguna vez jugaste karaoke?",
    tipo: "sino",
    puntuacion: { SI: { M: 1 } },
  },
  {
    id: 81,
    pregunta: "Si tu cuerpo fuera gigante, ¿en qué lo recorrerías?",
    tipo: "multiple",
    opciones: [
      { valor: "A", texto: "Avión" },
      { valor: "B", texto: "Submarino" },
      { valor: "C", texto: "Nadando" },
      { valor: "D", texto: "En carro" },
      { valor: "E", texto: "En bicicleta" },
      { valor: "F", texto: "En moto" },
      { valor: "G", texto: "En un ovni" },
    ],
    puntuacion: { A: { VE: 1 }, B: { VE: 1 }, C: { VE: 1 }, D: { CK: 1 }, E: { CK: 1 }, F: { LM: 1 }, G: { INTR: 1 } },
  },
  {
    id: 82,
    pregunta: "¿Podrías visualizarte como locutor de radio o narrador deportivo?",
    tipo: "sino",
    puntuacion: { SI: { VL: 1 } },
  },
  {
    id: 83,
    pregunta: "¿Piensas que podrías aprender a tocar cualquier instrumento musical si te lo propones?",
    tipo: "sino",
    puntuacion: { SI: { M: 1 } },
  },
  {
    id: 84,
    pregunta: "Te consideras:",
    tipo: "multiple",
    opciones: [
      { valor: "A", texto: "Muy inteligente, soy un genio" },
      { valor: "B", texto: "Soy muy inteligente pero no me valoran" },
      { valor: "C", texto: "Soy un nivel muy normal" },
      { valor: "D", texto: "Soy un fracaso" },
    ],
    puntuacion: { A: { LM: 1 }, D: { INTR: -1 } },
  },
  {
    id: 85,
    pregunta: "¿Piensas en hacer algo para que el mundo sea mejor?",
    tipo: "sino",
    puntuacion: { SI: { N: 1 } },
  },
]

export default function TestPage({ onComplete, onBack }) {
  const [preguntaActual, setPreguntaActual] = useState(0)
  const [respuestas, setRespuestas] = useState({})
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null)

  const pregunta = preguntasReales[preguntaActual]
  const totalPreguntas = preguntasReales.length
  const progreso = ((preguntaActual + 1) / totalPreguntas) * 100

  const manejarRespuesta = (valor) => {
    setRespuestaSeleccionada(valor)
  }

  const siguientePregunta = () => {
    if (respuestaSeleccionada !== null) {
      setRespuestas((prev) => ({
        ...prev,
        [preguntaActual]: respuestaSeleccionada,
      }))

      if (preguntaActual < totalPreguntas - 1) {
        setPreguntaActual((prev) => prev + 1)
        setRespuestaSeleccionada(null)
      } else {
        calcularResultados()
      }
    }
  }

  const preguntaAnterior = () => {
    if (preguntaActual > 0) {
      setPreguntaActual((prev) => prev - 1)
      setRespuestaSeleccionada(respuestas[preguntaActual - 1] || null)
    }
  }

  const calcularResultados = () => {
    const puntajes = {
      LM: 0,
      VL: 0,
      VE: 0,
      N: 0,
      M: 0,
      INTR: 0,
      INT: 0,
      CK: 0,
    }

    Object.entries(respuestas).forEach(([preguntaId, valorRespuesta]) => {
      const pregunta = preguntasReales[Number.parseInt(preguntaId)]
      const puntuacionPregunta = pregunta.puntuacion[valorRespuesta]

      if (puntuacionPregunta) {
        Object.entries(puntuacionPregunta).forEach(([inteligencia, puntos]) => {
          puntajes[inteligencia] += puntos
        })
      }
    })

    const inteligenciaPredominante = Object.entries(puntajes).reduce((a, b) =>
      puntajes[a[0]] > puntajes[b[0]] ? a : b,
    )[0]

    onComplete({
      puntajes,
      inteligenciaPredominante,
      respuestas,
    })
  }

  return (
    <div
      className="min-vh-100"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)",
        backgroundSize: "400% 400%",
        animation: "gradientShift 15s ease infinite",
      }}
    >
      <style>
        {`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-6px); }
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          @keyframes sparkle {
            0%, 100% { opacity: 1; transform: scale(1) rotate(0deg); }
            50% { opacity: 0.7; transform: scale(1.2) rotate(180deg); }
          }
          @keyframes progressGlow {
            0%, 100% { box-shadow: 0 0 5px rgba(102, 126, 234, 0.5); }
            50% { box-shadow: 0 0 20px rgba(102, 126, 234, 0.8); }
          }
          .card-hover {
            transition: all 0.3s ease;
          }
          .card-hover:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 35px rgba(0,0,0,0.2) !important;
          }
          .option-card {
            transition: all 0.3s ease;
            cursor: pointer;
            position: relative;
            overflow: hidden;
          }
          .option-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.15) !important;
          }
          .option-card.selected {
            transform: translateY(-3px) scale(1.02);
            box-shadow: 0 15px 35px rgba(102, 126, 234, 0.3) !important;
          }
          .option-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.5s;
          }
          .option-card:hover::before {
            left: 100%;
          }
          .floating-element {
            animation: float 3s ease-in-out infinite;
          }
          .pulsing-element {
            animation: pulse 2s ease-in-out infinite;
          }
          .sparkling-element {
            animation: sparkle 2s ease-in-out infinite;
          }
          .progress-animated {
            animation: progressGlow 2s ease-in-out infinite;
          }
          .question-number {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
          }
          .question-number-mobile {
            width: 35px;
            height: 35px;
            font-size: 14px;
          }
          @media (max-width: 767px) {
            .question-number {
              width: 35px;
              height: 35px;
              font-size: 14px;
            }
          }
        `}
      </style>

      <div className="container py-3 py-md-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-8">
            {/* Header con Progreso Espectacular */}
            <div className="mb-4 mb-md-5">
              <div
                className="card border-0 shadow-lg card-hover"
                style={{
                  backdropFilter: "blur(15px)",
                  backgroundColor: "rgba(255,255,255,0.95)",
                  border: "2px solid rgba(255,255,255,0.3)",
                }}
              >
                <div className="card-body p-3 p-md-4">
                  {/* Header Superior */}
                  <div className="d-flex justify-content-between align-items-center mb-3 mb-md-4">
                    <div className="d-flex align-items-center">
                      <div
                        className="d-inline-flex align-items-center justify-content-center rounded-circle me-3 pulsing-element"
                        style={{
                          width: "40px",
                          height: "40px",
                          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        }}
                      >
                        <Brain size={20} className="text-white" />
                      </div>
                      <div>
                        <h1 className="h4 h-md-3 fw-bold text-dark mb-1">🧠 Test de Inteligencias Múltiples</h1>
                        <small className="text-muted d-none d-sm-block">Descubre tu potencial único</small>
                      </div>
                    </div>

                    {/* Contador de Preguntas */}
                    <div className="text-end">
                      <div className="d-flex align-items-center mb-2">
                        <div className="question-number me-2 floating-element">{preguntaActual + 1}</div>
                        <div className="d-none d-sm-block">
                          <div className="fw-bold text-dark">Pregunta {preguntaActual + 1}</div>
                          <small className="text-muted">de {totalPreguntas}</small>
                        </div>
                        <div className="d-block d-sm-none">
                          <div className="fw-bold text-dark small">
                            {preguntaActual + 1}/{totalPreguntas}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Barra de Progreso Mejorada */}
                  <div className="mb-3">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="small fw-semibold text-dark">Progreso del Test</span>
                      <span className="small fw-bold" style={{ color: "#667eea" }}>
                        {Math.round(progreso)}%
                      </span>
                    </div>
                    <div
                      className="progress progress-animated"
                      style={{ height: "12px", borderRadius: "10px", backgroundColor: "rgba(102, 126, 234, 0.1)" }}
                    >
                      <div
                        className="progress-bar"
                        style={{
                          width: `${progreso}%`,
                          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                          borderRadius: "10px",
                          transition: "width 0.5s ease",
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Estadísticas Rápidas */}
                  <div className="row g-2 g-md-3">
                    <div className="col-4">
                      <div className="text-center">
                        <div className="d-flex align-items-center justify-content-center mb-1">
                          <Target size={14} className="text-success me-1" />
                          <small className="fw-bold text-success">{preguntaActual}</small>
                        </div>
                        <small className="text-muted" style={{ fontSize: "0.75rem" }}>
                          Completadas
                        </small>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="text-center">
                        <div className="d-flex align-items-center justify-content-center mb-1">
                          <Clock size={14} className="text-warning me-1" />
                          <small className="fw-bold text-warning">{totalPreguntas - preguntaActual - 1}</small>
                        </div>
                        <small className="text-muted" style={{ fontSize: "0.75rem" }}>
                          Restantes
                        </small>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="text-center">
                        <div className="d-flex align-items-center justify-content-center mb-1">
                          <Zap size={14} className="text-info me-1" />
                          <small className="fw-bold text-info">8</small>
                        </div>
                        <small className="text-muted" style={{ fontSize: "0.75rem" }}>
                          Inteligencias
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card de la Pregunta */}
            <div className="mb-4 mb-md-5">
              <div
                className="card border-0 shadow-lg card-hover"
                style={{
                  backdropFilter: "blur(15px)",
                  backgroundColor: "rgba(255,255,255,0.95)",
                  border: "2px solid rgba(255,255,255,0.3)",
                }}
              >
                <div className="card-body p-3 p-md-5">
                  {/* Número y Pregunta */}
                  <div className="mb-3">
                    <div className="d-flex align-items-start mb-3">
                      <div
                        className="d-flex align-items-center justify-content-center rounded-circle me-3 sparkling-element"
                        style={{
                          width: "35px",
                          height: "35px",
                          background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                          color: "white",
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        {preguntaActual + 1}
                      </div>
                      <div className="flex-grow-1">
                        <h2 className="h5 h-md-4 fw-bold text-dark mb-0">Pregunta {preguntaActual + 1}</h2>
                      </div>
                    </div>
                    <p className="lead text-muted mb-0" style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                      {pregunta.pregunta}
                    </p>
                  </div>

                  {/* Opciones de Respuesta */}
                  <div className="d-grid gap-3">
                    {pregunta.tipo === "sino" ? (
                      <>
                        <div
                          className={`card border-2 option-card ${respuestaSeleccionada === "SI" ? "selected" : ""}`}
                          style={{
                            borderColor: respuestaSeleccionada === "SI" ? "#667eea" : "rgba(0,0,0,0.1)",
                            backgroundColor: respuestaSeleccionada === "SI" ? "rgba(102, 126, 234, 0.1)" : "white",
                          }}
                          onClick={() => manejarRespuesta("SI")}
                        >
                          <div className="card-body p-3 p-md-4 d-flex align-items-center">
                            <div className="me-3">
                              <div
                                className="d-flex align-items-center justify-content-center rounded-circle"
                                style={{
                                  width: "24px",
                                  height: "24px",
                                  border: `2px solid ${respuestaSeleccionada === "SI" ? "#667eea" : "#dee2e6"}`,
                                  backgroundColor: respuestaSeleccionada === "SI" ? "#667eea" : "transparent",
                                }}
                              >
                                {respuestaSeleccionada === "SI" && <CheckCircle size={14} className="text-white" />}
                              </div>
                            </div>
                            <div className="flex-grow-1">
                              <span className="fw-semibold text-dark" style={{ fontSize: "1rem" }}>
                                ✅ Sí
                              </span>
                            </div>
                          </div>
                        </div>

                        <div
                          className={`card border-2 option-card ${respuestaSeleccionada === "NO" ? "selected" : ""}`}
                          style={{
                            borderColor: respuestaSeleccionada === "NO" ? "#667eea" : "rgba(0,0,0,0.1)",
                            backgroundColor: respuestaSeleccionada === "NO" ? "rgba(102, 126, 234, 0.1)" : "white",
                          }}
                          onClick={() => manejarRespuesta("NO")}
                        >
                          <div className="card-body p-3 p-md-4 d-flex align-items-center">
                            <div className="me-3">
                              <div
                                className="d-flex align-items-center justify-content-center rounded-circle"
                                style={{
                                  width: "24px",
                                  height: "24px",
                                  border: `2px solid ${respuestaSeleccionada === "NO" ? "#667eea" : "#dee2e6"}`,
                                  backgroundColor: respuestaSeleccionada === "NO" ? "#667eea" : "transparent",
                                }}
                              >
                                {respuestaSeleccionada === "NO" && <CheckCircle size={14} className="text-white" />}
                              </div>
                            </div>
                            <div className="flex-grow-1">
                              <span className="fw-semibold text-dark" style={{ fontSize: "1rem" }}>
                                ❌ No
                              </span>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      pregunta.opciones?.map((opcion, index) => (
                        <div
                          key={opcion.valor}
                          className={`card border-2 option-card ${respuestaSeleccionada === opcion.valor ? "selected" : ""}`}
                          style={{
                            borderColor: respuestaSeleccionada === opcion.valor ? "#667eea" : "rgba(0,0,0,0.1)",
                            backgroundColor:
                              respuestaSeleccionada === opcion.valor ? "rgba(102, 126, 234, 0.1)" : "white",
                            animationDelay: `${index * 0.1}s`,
                          }}
                          onClick={() => manejarRespuesta(opcion.valor)}
                        >
                          <div className="card-body p-3 p-md-4 d-flex align-items-center">
                            <div className="me-3">
                              <div
                                className="d-flex align-items-center justify-content-center rounded-circle fw-bold"
                                style={{
                                  width: "32px",
                                  height: "32px",
                                  backgroundColor: respuestaSeleccionada === opcion.valor ? "#667eea" : "#f8f9fa",
                                  color: respuestaSeleccionada === opcion.valor ? "white" : "#6c757d",
                                  fontSize: "14px",
                                }}
                              >
                                {opcion.valor}
                              </div>
                            </div>

                            {/* Imagen visual para pregunta 64 */}
                            {pregunta.id === 64 && opcion.imagen && (
                              <div className="me-3">
                                <img
                                  src={opcion.imagen || "/placeholder.svg"}
                                  alt={opcion.texto}
                                  className="rounded-3"
                                  style={{
                                    width: "80px",
                                    height: "70px",
                                    objectFit: "cover",
                                    backgroundColor:
                                      respuestaSeleccionada === opcion.valor ? "rgba(102, 126, 234, 0.2)" : "#f8f9fa",
                                  }}
                                />
                              </div>
                            )}

                            <div className="flex-grow-1">
                              <span className="fw-medium text-dark" style={{ fontSize: "0.95rem" }}>
                                {opcion.texto}
                              </span>
                              {/* Descripción adicional para pregunta 64 */}
                              {pregunta.id === 64 && opcion.descripcion && (
                                <div className="mt-1">
                                  <small className="text-muted">{opcion.descripcion}</small>
                                </div>
                              )}
                            </div>

                            {respuestaSeleccionada === opcion.valor && (
                              <div className="ms-3">
                                <CheckCircle size={20} className="text-success" />
                              </div>
                            )}
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Navegación Mejorada */}
            <div className="d-flex justify-content-between align-items-center">
              <button
                onClick={preguntaActual === 0 ? onBack : preguntaAnterior}
                className="btn btn-outline-light btn-lg d-flex align-items-center px-3 px-md-4 py-3 rounded-4 shadow"
                style={{
                  backdropFilter: "blur(10px)",
                  backgroundColor: "rgba(255,255,255,0.2)",
                  border: "2px solid rgba(255,255,255,0.3)",
                  color: "white",
                  transition: "all 0.3s ease",
                  fontSize: "0.9rem",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "rgba(255,255,255,0.3)"
                  e.target.style.transform = "translateY(-2px)"
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "rgba(255,255,255,0.2)"
                  e.target.style.transform = "translateY(0)"
                }}
              >
                <ArrowLeft size={18} className="me-2" />
                <span className="fw-semibold d-none d-sm-inline">{preguntaActual === 0 ? "Volver" : "Anterior"}</span>
                <span className="fw-semibold d-inline d-sm-none">{preguntaActual === 0 ? "Volver" : "Ant."}</span>
              </button>

              <button
                onClick={siguientePregunta}
                disabled={respuestaSeleccionada === null}
                className="btn btn-lg fw-bold px-3 px-md-5 py-3 py-md-4 rounded-4 shadow-lg position-relative overflow-hidden"
                style={{
                  background:
                    respuestaSeleccionada !== null
                      ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                      : "linear-gradient(135deg, #6c757d 0%, #495057 100%)",
                  border: "none",
                  color: "white",
                  fontSize: "0.9rem",
                  minWidth: "150px",
                  transition: "all 0.3s ease",
                  opacity: respuestaSeleccionada !== null ? 1 : 0.6,
                }}
                onMouseEnter={(e) => {
                  if (respuestaSeleccionada !== null) {
                    e.target.style.transform = "translateY(-3px) scale(1.02)"
                    e.target.style.boxShadow = "0 20px 40px rgba(102, 126, 234, 0.4)"
                  }
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0) scale(1)"
                  e.target.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)"
                }}
              >
                <span className="me-2">{preguntaActual === totalPreguntas - 1 ? "🎯" : "🚀"}</span>
                <span className="d-none d-sm-inline">
                  {preguntaActual === totalPreguntas - 1 ? "Finalizar Test" : "Siguiente"}
                </span>
                <span className="d-inline d-sm-none">
                  {preguntaActual === totalPreguntas - 1 ? "Finalizar" : "Sig."}
                </span>
                <ArrowRight size={18} className="ms-2" />
              </button>
            </div>

            {/* Mensaje de Motivación */}
            {preguntaActual > 0 && preguntaActual % 10 === 0 && (
              <div className="text-center mt-4">
                <div
                  className="bg-white rounded-4 p-3 shadow-lg floating-element d-inline-block"
                  style={{
                    backdropFilter: "blur(15px)",
                    backgroundColor: "rgba(255,255,255,0.9)",
                  }}
                >
                  <small className="text-muted fst-italic">
                    🌟 ¡Excelente progreso! Ya has completado {preguntaActual} preguntas 🌟
                  </small>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
