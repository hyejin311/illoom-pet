// const main = document.querySelector('#main');
// const qna = document.querySelector('#qna');
// const endPoint = 4;
// const result= document.querySelector('#result');

// function goResult(){
//     qna.style.WebkitAnimation="fadeOut 1s";
//     qna.style.animation="fadeOut 1s";

//     setTimeout(()=>{
//         result.style.WebkitAnimation="fadeIn 1s";
//         result.style.animation="fadeIn 1s";

//     setTimeout(()=>{
//         main.style.display = "none";
//         qna.style.display="block";
//         },450)
// });
// }

// function addAnswer(answerText,qIndex){
//     let a = document.querySelector('.answerBox');
//     let answer = document.createElement('button');
//     answer.classList.add('answerList');
//     answer.classList.add('fadeIn');
//     a.appendChild(answer);
//     answer.innerHTML= answerText;

//     answer.addEventListener("click", function(){
//     let children = document.querySelectorAll('.answerList');
//     for(let i = 0; i < children.length; i++){
//         children[i].disabled = true;
//         children[i].style.WebkitAnimation="fadeOut 0.5s";
//         children[i].style.animation="fadeOut 0.5s";
//     }
//     setTimeout(()=>{
//         for(let i = 0; i < children.length; i++){
//             children[i].style.display ='none';
//     }
//     goNext(++qIndex);
// },450)
// }, false);
// }

// function goNext(qIndex){
//     if(qIndex+1 === endPoint){
//         goResult();
//         return;
//     }
//     let q= document.querySelector('.qBox');
//     q.innerHTML = qnaList[qIndex].q;
//     for(let i in qnaList[qIndex].a){
//         addAnswer(qnaList[qIndex].a[i].answer,qIndex);
//     }
//     let status= document.querySelector('.statusBar');
//     status.style.width= (100/endPoint) * (qIndex+1) + '%';
// }

// function begin(){
//     main.style.WebkitAnimation="fadeOut 1s";
//     main.style.animation="fadeOut 1s";

//     setTimeout(()=>{
//         qna.style.WebkitAnimation="fadeIn 1s";
//         qna.style.animation="fadeIn 1s";

//     setTimeout(()=>{
//         main.style.display = "none";
//         qna.style.display="block";
//         },450)

//         let qIndex= 0;
//         goNext(qIndex);
//     },450);
// }

const main = document.querySelector('#main');
const qna = document.querySelector('#qna');

// 1.버튼 생성 후 클릭 이벤트 추가
// 2.생성 한 버튼에 답변 리스트 넣기 -> answerList에 
// 3.버튼 클릭 시 기존 질/답은 비활성화 되고 화면에서 숨겨진 다음에
// 4.다음 질문+답변버튼 화면에 출력 (goNext(++qIdx))
function addAnswer(answerText,qIdx){
  var a = document.querySelector('.answerBox');
  var answer = document.createElement('button');
  answer.classList.add('answerList');
  a.appendChild(answer);
  answer.innerHTML = answerText;

  answer.addEventListener('click',function(){
    var children = document.querySelectorAll('.answerList');
    for(let i = 0; i < children.length; i++){
      children[i].disabled = true;
      children[i].style.display = 'none';
    }
    goNext(++qIdx);
  },false);
}

// 질문,답변 리스트 가져와서 addAnswer에 넘겨주기 
function goNext(qIdx){
  var q = document.querySelector('.qBox');
  q.innerHTML = qnaList[qIdx].q;
  for(let i in qnaList[qIdx].a){
    addAnswer(qnaList[qIdx].a[i].answer,qIdx);
  }
}

// 창 전환 
function begin(){
  main.style.WebkitAnimation = 'fadeOut 1s';
  main.style.Animation = 'fadeOut 1s'
  setTimeout(()=>{
    qna.style.WebkitAnimation = 'fadeIn 1s';
    qna.style.Animation = 'fadeIn 1s';
    setTimeout(()=>{
      main.style.display = 'none';
      qna.style.display = 'block';
    },250);
    let qIdx = 0;
    goNext(qIdx);
  },250);
}