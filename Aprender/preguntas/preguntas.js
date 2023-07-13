const { createApp, reactive } = Vue


///////////////////////////////
// Funcion de Matematicas    //
//////////////////////////////
function matematicas() {
    const app = createApp({
        setup() {
            const state = reactive({
                preguntas: [
                    { pregunta: '¿Cuánto es 2 + 2?', respuesta: '4', opciones: ['1', '3', '4', '5'] },
                    { pregunta: '¿Cuánto es 3 + 2?', respuesta: '5', opciones: ['4', '5', '6', '7'] },
                    { pregunta: '¿Cuánto es 10 + 2?', respuesta: '12', opciones: ['11', '5', '12', '0'] },
                    { pregunta: '¿Cuánto es 37 + 2?', respuesta: '39', opciones: ['30', '39', '301', '57'] },
                    { pregunta: "¿Cuánto es 3 + 2?", respuesta: '5', opciones: ["3", "5", "7", "2"]},
                    { pregunta: "¿Cuánto es 8 - 3?", respuesta: '5', opciones: ["1", "2", "5", "6"]},
                    { pregunta: "¿Cuánto es 2 + 2?", respuesta: "4", opciones: ["1", "3", "4", "5"] },
                    { pregunta: "¿Cuánto es 3 + 2?", respuesta: "5", opciones: ["4", "5", "6", "7"] },
                    { pregunta: "¿Cuánto es 10 + 2?", respuesta: "12", opciones: ["11", "5", "12", "0"] },
                    { pregunta: "¿Cuánto es 37 + 2?", respuesta: "39", opciones: ["30", "39", "301", "57"] },
                    { pregunta: "¿Cuánto es 3 + 2?", respuesta: "5", opciones: ["3", "5", "7", "2"] },
                    { pregunta: "¿Cuánto es 8 - 3?", respuesta: "5", opciones: ["1", "2", "5", "6"] },
                    { pregunta: "¿Cuánto es 4 x 3?", respuesta: "12", opciones: ["9", "10", "12", "14"] },
                    { pregunta: "¿Cuánto es 24 ÷ 4?", respuesta: "6", opciones: ["4", "6", "8", "10"] },
                    { pregunta: "¿Cuánto es 5 + 3?", respuesta: "8", opciones: ["6", "7", "8", "9"] },
                    { pregunta: "¿Cuánto es 10 - 5?", respuesta: "5", opciones: ["2", "4", "5", "7"] },
                    { pregunta: "¿Cuánto es 6 x 2?", respuesta: "12", opciones: ["8", "10", "12", "14"] },
                    { pregunta: "¿Cuánto es 36 ÷ 6?", respuesta: "6", opciones: ["4", "6", "9", "12"] },
                    { pregunta: "¿Cuánto es 4 + 4?", respuesta: "8", opciones: ["6", "7", "8", "9"] },
                    // Agrega más preguntas aquí...
                ],
                preguntaActual: 0,
                respuesta: '',
                puntos: 0
            });

            function verificarRespuesta(opcion) {
                const pregunta = state.preguntas[state.preguntaActual];
                if (opcion === pregunta.respuesta) {
                    state.puntos++;
                    document.querySelector('.mensaje').textContent = '¡Respuesta correcta!';
                } else {
                    document.querySelector('.mensaje').textContent = 'Respuesta incorrecta. Intenta de nuevo.';
                }
                document.querySelector('.puntuacion').textContent = 'Puntuación: ' + state.puntos;
                siguientePregunta();
                // Guardar puntos en el almacenamiento local
                localStorage.setItem('puntosMatematicas', state.puntos);
            }

            function siguientePregunta() {
                state.preguntaActual++;
                if (state.preguntaActual >= state.preguntas.length) {
                    document.querySelector('.mensaje').textContent = 'Has completado todas las preguntas.';
                } else {
                    state.respuesta = '';
                    document.querySelector('.mensaje').textContent = '';
                }
            }

            return {
                state,
                verificarRespuesta,
                siguientePregunta
            };
        },
        template: `
            <div>
                <h1>Preguntas de Matemáticas</h1>
                <p>{{ state.preguntas[state.preguntaActual].pregunta }}</p>
                <div>
                    <button
                        v-for="opcion in state.preguntas[state.preguntaActual].opciones"
                        :key="opcion"
                        @click="verificarRespuesta(opcion)"
                    >
                        {{ opcion }}
                    </button>
                </div>
            </div>
        `
    });
    app.mount('#app');
}


////////////////////////////
///       Lengua         ///
////////////////////////////


function lengua() {
    const app = createApp({
        setup() {
            const state = reactive({
                preguntas: [
                    { pregunta: '¿Cuántal es una vocal?', respuesta: 'A', opciones: ['P', 'G', 'A', 'T'] },
                    { pregunta: '¿Cual son las cinco vocales ?', respuesta: 'A,E,I,O,U', opciones: ['A,E,I,O,U', 'B,C,D,F,G', 'M,N,L,P,Q', 'R,S,T,V,X'] },
                    { pregunta: '¿Cual es la ultima letra del abecedario?', respuesta: 'Z', opciones: ['Z', 'Y', 'X', 'W'] },
                    { pregunta: '¿Que es una silaba?', respuesta: 'Una palabra', opciones: ['Un color', 'Un sonido', 'Una letra', 'Una palabra'] },
                    { pregunta: '¿Cuantas silabas tiene la palabra "gato"?', respuesta: '2', opciones: ['2', '3', '4', '5'] },
                    { pregunta: '¿Cual es el opuesto de "grande"?', respuesta: 'Pequeño', opciones: ['Pequeño', 'Rapido', 'Alto', 'Fuerte'] },
                    { pregunta: '¿Puedes darme un ejemplo de una palabra que rime con "sol"?', respuesta: 'Flor', opciones: ['Perro', 'Gato', 'Flor', 'Sol']},
                    { pregunta: '¿Que es un sustantivo?', respuesta: 'Una persona, animal, cosa o lugar', opciones: ['Una accion', 'Un lugar', 'Una persona, animal, cosa o lugar', 'Un color']},
                    { pregunta: '¿Que es un verbo?', respuesta: 'Una accion', opciones: ['Una fruta', 'Una accion', 'Un numero', 'Un objeto']},
                    { pregunta: '¿Que palabra inicia con la letra "M"?', respuesta: 'Mesa', opciones: ['Pato', 'Lapiz', 'Manzana', 'Mesa']},
                    { pregunta: '¿Que es un sinonimo ?', respuesta: 'Una palabra similar en significado', opciones: ['Una pregunta', 'Una rima', 'Una palabra opuesta', 'Una palabra similar en significado']},
                    { pregunta: '¿Cual es el color del cielo durante el dia?', respuesta: 'Azul', opciones: ['Verde', 'Azul', 'Rojo', 'Amarillo']},
                    { pregunta: '¿Cual es el color del sol ?', respuesta: 'Amarillo', opciones: ['Blanco', 'Negro', 'Amarillo', 'Morado']},
                    { pregunta: '¿Que es una pregunta ?', respuesta: 'Una expresion para buscar informacion', opciones: ['Una afirmacion', 'Un numero', 'Un tipo de comida', 'Una expresion para buscar informacion']},
                    { pregunta: '¿Cual es el animal mas grande del mundo?', respuesta: 'Ballena azul', opciones: ['Elefante', 'Leon', 'Ballena azul', 'Caballo']},
                    //{ pregunta: '¿ ?', respuesta: '', opciones: ['', '', '', '']},
                    //{ pregunta: '¿ ?', respuesta: '', opciones: ['', '', '', '']},
                    //{ pregunta: '¿ ?', respuesta: '', opciones: ['', '', '', '']},
                    //{ pregunta: '¿ ?', respuesta: '', opciones: ['', '', '', '']},
                    //{ pregunta: '¿ ?', respuesta: '', opciones: ['', '', '', '']},






                    // Agrega más preguntas aquí... { pregunta: '¿ ?', respuesta: '', opciones: ['', '', '', '']},
                ],
                preguntaActual: 0,
                respuesta: '',
                puntos: 0
            });

            function verificarRespuesta(opcion) {
                const pregunta = state.preguntas[state.preguntaActual];
                if (opcion === pregunta.respuesta) {
                    state.puntos++;
                    document.querySelector('.mensaje').textContent = '¡Respuesta correcta!';
                } else {
                    document.querySelector('.mensaje').textContent = 'Respuesta incorrecta. Intenta de nuevo.';
                }
                document.querySelector('.puntuacion').textContent = 'Puntuación: ' + state.puntos;
                siguientePregunta();
                // Guardar puntos en el almacenamiento local
                localStorage.setItem('puntosLengua', state.puntos);
            }

            function siguientePregunta() {
                state.preguntaActual++;
                if (state.preguntaActual >= state.preguntas.length) {
                    document.querySelector('.mensaje').textContent = 'Has completado todas las preguntas.';
                } else {
                    state.respuesta = '';
                    document.querySelector('.mensaje').textContent = '';
                }
            }

            return {
                state,
                verificarRespuesta,
                siguientePregunta
            };
        },
        template: `
            <div>
                <h1>Preguntas de Lenguaje</h1>
                <p>{{ state.preguntas[state.preguntaActual].pregunta }}</p>
                <div>
                    <button
                        v-for="opcion in state.preguntas[state.preguntaActual].opciones"
                        :key="opcion"
                        @click="verificarRespuesta(opcion)"
                    >
                        {{ opcion }}
                    </button>
                </div>
            </div>
        `
    });
    app.mount('#app');
}

/////////////////
/// Geografia ///
/////////////////

function geografia() {
    const app = createApp({
        setup() {
            const state = reactive({
                preguntas: [
                    { pregunta: '¿Algunas Personas Consideran que hay seis continentes ?', respuesta: 'si', opciones: ['si', 'no'] },
                    { pregunta: '¿Qué es un mapa?', respuesta: 'es una representacion planade la Tierra o de una parte de ella', opciones: ['es una representacion planade la Tierra o de una parte de ella', 'No es nada'] },
                    { pregunta: '¿Cuál es el océano más grande?', respuesta: 'Océano Pacífico', opciones: ['Océano Pacífico', 'Oceano Azul', 'America', 'El Sol'] },
                    { pregunta: '¿Cual es el continente mas poblado ?', respuesta: 'Asia', opciones: ['Asia', 'Africa', 'Europa', 'America']},
                    { pregunta: '¿Cual es el pais mas grande del mundo por area?', respuesta: 'Rusia', opciones: ['China', 'Estados Unidos', 'Rusia', 'Brasil']},
                    { pregunta: '¿Cual es la capital de Francia ?', respuesta: 'Paris', opciones: ['Londres', 'Madrid', 'Roma', 'Paris']},
                    { pregunta: '¿Cual es el rio mas largo del mundo ?', respuesta: 'Amazonas', opciones: ['Amazonas', 'Nilo', 'Misisipi', 'Yangtse']},
                    { pregunta: '¿Cual es el desierto mas grande del mundo?', respuesta: 'Sahara', opciones: ['Sahara', 'Gobi', 'Kalahari', 'Atacama']},
                    { pregunta: '¿Cual es la montana mas alta del mundo?', respuesta: 'Everest', opciones: ['Everest', 'Kilimanjaro', 'Aconcagua', 'Mont Blanc']},
                    { pregunta: '¿Cual es el pais conocido como "la Tierra de los Canguros" ?', respuesta: 'Australia', opciones: ['Canada', 'Australia', 'India', 'Mexico']},
                    { pregunta: '¿Cual es el continente donde se encuentra Egipto ?', respuesta: 'Africa', opciones: ['Africa', 'Europa', 'Asia', 'America']},
                    { pregunta: '¿Cual es la capital de Espana?', respuesta: 'Madrid', opciones: ['Madrid', 'Barcelona', 'Roma', 'Berlin']},
                    { pregunta: '¿Cual es el pais vecino de Estados Unidos al sur?', respuesta: 'MEXICO', opciones: ['MEXICO', 'CANADA', 'BRASIL', 'ARGENTINA']},
                    { pregunta: '¿Cual es el oceano que bana las costas de Brasil?', respuesta: 'Atlantico', opciones: ['Atlantico', 'indico', 'Pacifico', 'Artico']},
                    { pregunta: '¿Cual es el pais mas pequeno del mundo?', respuesta: 'Vaticano', opciones: ['Rusia', 'China', 'Vaticano', 'Francia']},
                    { pregunta: '¿Cual es el continente donde se encuentra India?', respuesta: 'Asia', opciones: ['Africa', 'Europa', 'Asia', 'America']},
                    { pregunta: '¿Cual es el lagomas profundo del mundo?', respuesta: 'Lago Baikal', opciones: ['Lago Baikal', 'Lago Victoria', 'Lago Superior', 'Lago Titicaca']},
                    { pregunta: '¿Cual es la capital de Argentina?', respuesta: 'Buenos Aires', opciones: ['Buenos Aires', 'Santiago', 'Rio de Janeiro', 'Lima']},
                    //                    { pregunta: '¿ ?', respuesta: '', opciones: ['', '', '', '']},
                    //                    { pregunta: '¿ ?', respuesta: '', opciones: ['', '', '', '']},
                    //                    { pregunta: '¿ ?', respuesta: '', opciones: ['', '', '', '']},








                    // Agrega más preguntas aquí...
                ],
                preguntaActual: 0,
                respuesta: '',
                puntos: 0
            });

            function verificarRespuesta(opcion) {
                const pregunta = state.preguntas[state.preguntaActual];
                if (opcion === pregunta.respuesta) {
                    state.puntos++;
                    document.querySelector('.mensaje').textContent = '¡Respuesta correcta!';
                } else {
                    document.querySelector('.mensaje').textContent = 'Respuesta incorrecta. Intenta de nuevo.';
                }
                document.querySelector('.puntuacion').textContent = 'Puntuación: ' + state.puntos;
                siguientePregunta();
                // Guardar puntos en el almacenamiento local
                localStorage.setItem('puntosGeografia', state.puntos);
            }

            function siguientePregunta() {
                state.preguntaActual++;
                if (state.preguntaActual >= state.preguntas.length) {
                    document.querySelector('.mensaje').textContent = 'Has completado todas las preguntas.';
                } else {
                    state.respuesta = '';
                    document.querySelector('.mensaje').textContent = '';
                }
            }

            return {
                state,
                verificarRespuesta,
                siguientePregunta
            };
        },
        template: `
            <div>
                <h1>Preguntas de Geografia</h1>
                <p>{{ state.preguntas[state.preguntaActual].pregunta }}</p>
                <div>
                    <button
                        v-for="opcion in state.preguntas[state.preguntaActual].opciones"
                        :key="opcion"
                        @click="verificarRespuesta(opcion)"
                    >
                        {{ opcion }}
                    </button>
                </div>
            </div>
        `
    });
    app.mount('#app');
}
function ingles() {
    const app = createApp({
        setup() {
            const state = reactive({
                preguntas: [
                    { pregunta: '¿Cómo se escribe 1 en Inglés?', respuesta: 'one', opciones: ['on', 'one', 'uan', 'guan'] },
                    { pregunta: '¿Cómo se escribe 15 en Inglés?', respuesta: 'fifteen', opciones: ['fiveteen', 'fiveten', 'fifteen', 'fiften'] },
                    { pregunta: '¿Cómo se escribe 55 en Inglés?', respuesta: 'fifty-five', opciones: ['fivety-five', 'faity-five', 'fifty-five', 'fifty-fai'] },
                    { pregunta: '¿Cómo se escribe 100 en Inglés?', respuesta: 'one hundred', opciones: ['one hundred', 'on hundred', 'uan hundred', 'guan hundred'] },
                    { pregunta: '¿Cómo se escribe Lápiz en Inglés?', respuesta: 'pencil', opciones: ['pen', 'penzil', 'pensel', 'pencil'] },
                    { pregunta: '¿Cómo se escribe Pegamento en Inglés?', respuesta: 'glue', opciones: ['wlue', 'glu', 'glue', 'flue'] },
                    { pregunta: '¿Cómo se escribe Regla en Inglés?', respuesta: 'ruler', opciones: ['ruler', 'ruller', 'uler', 'rruler'] },
                    { pregunta: '¿Cómo se escribe Libro en Inglés?', respuesta: 'book', opciones: ['vook', 'buuk', 'book', 'buck'] },
                    { pregunta: '¿Cómo se escribe Rojo en Inglés?', respuesta: 'red', opciones: ['black', 'white', 'pink', 'red'] },
                    { pregunta: '¿Cómo se escribe Naranja en Inglés?', respuesta: 'orange', opciones: ['red', 'orange', 'blue', 'purple'] },
                    { pregunta: '¿Cómo se escribe Verde en Inglés?', respuesta: 'green', opciones: ['red', 'orenge', 'yellow','green']},
                    { pregunta: '¿Cómo se escribe Marrón en Inglés?', respuesta: 'brown', opciones: ['pink', 'black', 'brown', 'red'] },
                    // Agrega más preguntas aquí...
                ],
                preguntaActual: 0,
                respuesta: '',
                puntos: 0
            });

            function verificarRespuesta(opcion) {
                const pregunta = state.preguntas[state.preguntaActual];
                if (opcion === pregunta.respuesta) {
                    state.puntos++;
                    document.querySelector('.mensaje').textContent = '¡Respuesta correcta!';
                } else {
                    document.querySelector('.mensaje').textContent = 'Respuesta incorrecta. Intenta de nuevo.';
                }
                document.querySelector('.puntuacion').textContent = 'Puntuación: ' + state.puntos;
                siguientePregunta();
                // Guardar puntos en el almacenamiento local
                localStorage.setItem('puntosGeografia', state.puntos);
            }

            function siguientePregunta() {
                state.preguntaActual++;
                if (state.preguntaActual >= state.preguntas.length) {
                    document.querySelector('.mensaje').textContent = 'Has completado todas las preguntas.';
                } else {
                    state.respuesta = '';
                    document.querySelector('.mensaje').textContent = '';
                }
            }

            return {
                state,
                verificarRespuesta,
                siguientePregunta
            };
        },
        template: `
            <div>
                <h1>Preguntas de Inglés</h1>
                <p>{{ state.preguntas[state.preguntaActual].pregunta }}</p>
                <div>
                    <button
                        v-for="opcion in state.preguntas[state.preguntaActual].opciones"
                        :key="opcion"
                        @click="verificarRespuesta(opcion)"
                    >
                        {{ opcion }}
                    </button>
                </div>
            </div>
        `
    });
    app.mount('#app');
}