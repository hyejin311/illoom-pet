const QList =[
    {
        q:"Q1. 우리집 고양이는 어떤 타입인가요?",
        a:[
            {answer :'a. 느긋하고 여유가 가득한 야생성이 낮거나 노묘인 고양이'}
            ,
            {answer :'b. 똥꼬발랄이라는 말로 표현할 수 없는 높은 곳을 좋아하는 활동적인 고양이'}
            ]
},
{
    q:"Q2. 우리집 고양이의 성격을 알려주세요!",
    a:[
        {answer :'a. 우리 좀 시간을 가지자.. 언제까지냐면 계속 나는야 독립적인 멋장이 고양이'}
        ,
        {answer :'b. 집사가 뭐하면 꼭 와서 확인해야 한다 집사야 뭐하냥 기웃기웃 고양이'}
        ]
},
{
    q:"Q3. 우리집 고양이는 주로 어떤 시간을 즐기나요?",
    a:[
        {answer :'a. 고양이 OTT 플랫폼 무료 이용권 구독  높은 곳에 올라가 창 밖 구경하는 시간'},
        {answer :'b. 집사는 왜 맨날 저 네모난 화면만 보는거냥 일하는 집사 구경하는 시간'},
        {answer :'c. 집사 내 옆으로 온다 실시 집사와 함께 느긋히 휴식하는 시간'},
        {answer :'d. 고롱고롱 크어어어 푹신한 곳에서 조용히 휴식하는 시간'}
        ]
},
{
    q:"Q4. 우리집 고양이만의 아늑한 공간",
    a:[
        {answer :'a. 집사와 고양이가 함께 사용하는 실용적인 공간'},
        {answer :'b. 고양이는 잘 때도 귀여우니까 조용하고 아늑한 고양이만의 공간'},
        {answer :'c. 요리조리 볼 수 있는 탁 트인 시야의 공간'},
        {answer :'d. 집사도 고양이도 행복한 투명해먹이 있는 공간'}
    ]
}
]

const ResultAlgo=[
    //101,1
    {
        img: "../img/page_01-2/product01.png",
        name: "책장캣타워(1200폭 6단)_쿠션형",
        desc: "실용적인데 예쁘기까지 한 집사와 고양이가 함께 쓰는 책장 캣타워",
    },
    //102,2
    {
        img: "../img/page_01-2/product15.png",
        name: "커스텀 캣타워(L)_콘도형",
        desc: "지붕 있는 콘도가 있어 아늑함까지 잡은 콘도형 커스텀 캣타워",
    },
    //103,3
    {
        img: "../img/page_01-2/product15.png",
        name: "커스텀 캣타워(H)_가드형",
        desc: "높은 곳 + 탁 트인 시야 = 스트레스 제로! 가드형 커스텀 캣타워",
    },
    //104,4
    {
        img: "../img/page_01-2/product13.png",
        name: "커스텀 캣타워(L)_투명해먹형",
        desc: "고양이도 집사도 모두 행복한 투명해먹형 커스텀 캣타워",
    }
]


//점수 결과 계획 (극단적으로 4개로 줄이기)
//맨 마지막 1번 질문 선택 -> ReaultAlgo[0]
//맨 마지막 2번 질문 선택 -> ReaultAlgo[1]
//맨 마지막 3번 질문 선택 -> ReaultAlgo[2]
//맨 마지막 4번 질문 선택 -> ReaultAlgo[3]


// 1번째 계획
//마지막 질문 4개 명명 -> createElement ('p') 만들기 -> innerHTML 로 ResultAlgo 배열[0] 삽입
const P1 = document.querySelector('.score1');
const P2 = document.querySelector('.score2');
const P3 = document.querySelector('.score3');
const P4 = document.querySelector('.score4');
const Divresult = document.getElementById('result');

// P1.onClick(()=>{result1})

const result1 = ()=>{
    Divresult.createElement('p');
    Divresult.innerHTML=
    // `${ResultAlgo}.[0].img
    // ${ResultAlgo}.[0].name
    // ${ResultAlgo}.[0].desc`;
    `
    <img src="../img/page_01-2/product01.png" alt="1">
    책장캣타워(1200폭 6단)_쿠션형
    실용적인데 예쁘기까지 한 집사와 고양이가 함께 쓰는 책장 캣타워
    <`
}


//1번은 왜 안될까?
//console.log 창 확인해보면 p 요소 생기지 않았음. 그러니 당연히 innerHTML 도 먹히지 않았음.
//어디에서 어떤 문제가 발생했는지 파악할 필요 있다


//----------------------
// 2번째 계획
// 명명한 마지막 질문 4개의 data-num 값 가져오기 -> switch 문으로 내보내기

//문제는 switch 문에서 어떻게 값을 저장하고, 다다음 페이지로 넘어갔을 때 보이게 할지
const P1_value= document.querySelector('.score1').getAttribute('data-num');
console.log(P1_value);


switch(Scorenum){
case '1': document.write('1번');
break;
case '2': document.write('2번');
break;
case '3': document.write('3번');
break;
default:
case '4': document.write('4번');
}

let Scorenum = prompt('1번이면 1,2번이면 2, 3번 선택은 3,4는 4');




// function Result1(){
//     Result1.innerHTML='';
//     if()
//     Divresult.createElement('p');
// }

// const Result1 = document.querySelector('.result1');
// Result1.innerHTML=
// `${ResultAlgo}.[0].{img}`

// function Score101(val=''){
//     Result.innerHTML='';
//     const Test= QList.forEach(QList=>{
//         if(val() === 1,0,0,100){
//             const Div = document.createElement('div');
//         Div.innerHTML=
//         `<div><img src=${ResultAlgo.img} alt=""></div>
//          <div>${ResultAlgo.name}</div>
//          <div>${ResultAlgo.desc}</div>`
//          Result.appendChild(Div);
//         }
//     })
// }

// Score101('');



//내가 선택한 선택지 중 includes(op1,op100)

// function Mychoice1(){
//     Result.innerHTML='';
//     const Test= QList.forEach(QList=>{
//         if(QList.score.val() === 1,0,0,100){
//             const Div = document.createElement('div');
//         Div.innerHTML=
//         `<div><img src=${ResultAlgo.img} alt=""></div>
//          <div>${ResultAlgo.name}</div>
//          <div>${ResultAlgo.desc}</div>`
//          Result.appendChild(Div);
//         }
//     })
// }
// Mychoice1();