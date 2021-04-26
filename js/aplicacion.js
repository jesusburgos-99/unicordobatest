

const questionNumber = document.querySelector(".numero-preguntas");
const questionText = document.querySelector(".texto-preguntas");
const optionContainer = document.querySelector(".opciones-contenedor");

let questionCounter= 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions= [];

function setAvailableQuestions(){
    const totalQuestion = quiz.length;
    for(let i=0; i<totalQuestion; i++){
        availableQuestions.push(quiz[i])
    } 
}
//establecemos el número de pregunta, la pregunta y las opciones
function getNewQuestion(){


    //establecer numero de pregunta
    questionNumber.innerHTML = "Pregunta " + (questionCounter + 1) + " de " + quiz.length;

//establecer texto de la pregunta
// obtenemos el cuestionario aleatorio
const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length )]
currentQuestion = questionIndex;
questionText.innerHTML = currentQuestion.q;
//obtener la posición de 'questionIndex' en 'AvaliableQuestion'
const index1= availableQuestions.indexOf(questionIndex)
//se remueve el 'quesyionIndex' de el 'avaliableQuestion Array', para que no se repita la pregunta 
availableQuestions.splice(index1,1);

//establecer opciones
//obtenemos la longitud de las opciones
const optionLen = currentQuestion.options.length
//empujar la opción en avaliableOptions Array
for(let i=0; i<optionLen; i++ ){
    availableOptions.push(i)
}
//creando opciones en HTML
for(let i=0; i<optionLen; i++){
const option = document.createElement("div");
option.innerHTML = currentQuestion.options[i];
option.id= i;
option.className = "option";
optionContainer.appendChild(option)
}


questionCounter++
}

function siguiente(){
    if(questionCounter === quiz.length){
        console.log("Test perdido")
    }
    else{
        getNewQuestion();
    }
}

window.onload= function(){
    //primero estableceremos todas las preguntas en avaliableQuestions Array
    setAvailableQuestions();
    //segundo llamaremos a getNewQuestion(); fuction
    getNewQuestion();
}
