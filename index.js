const questions=[{
    'que':"Which of following is markup Language?",
    'a':"HTML",
    'b':"JAVASCRIPT",
    'c':"CSS",
    'd':"BOOTSTRAP",
    'correct':"a"
},
{
'que':"Which of following is styling Language?",
    'a':"HTML",
    'b':"JAVASCRIPT",
    'c':"CSS",
    'd':"BOOTSTRAP",
    'correct':"c"
},
{
    'que':"Which of following is interactive Language?",
    'a':"HTML",
    'b':"JAVASCRIPT",
    'c':"CSS",
    'd':"BOOTSTRAP",
    'correct':"b"
}

]

let index=0;
let total=questions.length;
let right=0,
    wrong=0;
const quebox=document.getElementById("quebox");
const optionbox=document.querySelectorAll('.options')
const loadquestion = ()=>{
    if(index===total){
        return endQuiz();
    }
    reset();
    const data=questions[index];
    quebox.innerText=` ${index+1}) ${data.que} `;
    optionbox[0].nextElementSibling.innerText= data.a; 
    optionbox[1].nextElementSibling.innerText= data.b; 
    optionbox[2].nextElementSibling.innerText= data.c; 
    optionbox[3].nextElementSibling.innerText= data.d; 
}

const submitQuiz = () =>{
    const data=questions[index];
    const ans=getAnswer();
    console.log(ans,data.correct)
    if(ans==data.correct){
        right++;
    }
    else {
        wrong++;
    }
    index++;
    loadquestion();
    return;
}

const getAnswer = () =>{
    let answer;
    optionbox.forEach(
        (input) => {
            if(input.checked){
                answer= input.value;
            }
        }
    )
    return answer;
}

const reset = ()=>{
    optionbox.forEach(
        (input) => {
            input.checked=false;
        }
    )
}

const endQuiz = () =>{
    document.getElementById("box").innerHTML=`<div style="text-align:center;">
    <h3>Thank You For Playing Quiz!</h3>
    <h2>${right} / ${total} are correct</h2>
    </div>
    `

}

loadquestion();