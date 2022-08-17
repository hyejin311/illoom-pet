const QList =[
    {
        q:"Q1. 우리집 고양이는 어떤 타입인가요?",
        a:[
            {answer :'a. 느긋하고 여유가 가득한 야생성이 낮거나 노묘인 고양이',
            score:1,}
            ,
            {answer :'b. 똥꼬발랄이라는 말로 표현할 수 없는 높은 곳을 좋아하는 활동적인 고양이',
            score:2,}
            ]
},
{
    q:"Q2. 우리집 고양이의 성격을 알려주세요!",
    a:[
        {answer :'a. 우리 좀 시간을 가지자.. 언제까지냐면 계속 나는야 독립적인 멋장이 고양이',score:0,}
        ,
        {answer :'b. 집사가 뭐하면 꼭 와서 확인해야 한다 집사야 뭐하냥 기웃기웃 고양이',score:0,}
        ]
},
{
    q:"Q3. 우리집 고양이는 주로 어떤 시간을 즐기나요?",
    a:[
        {answer :'a. 고양이 OTT 플랫폼 무료 이용권 구독  높은 곳에 올라가 창 밖 구경하는 시간',score:0,},
        {answer :'b. 집사는 왜 맨날 저 네모난 화면만 보는거냥 일하는 집사 구경하는 시간',score:0,},
        {answer :'c. 집사 내 옆으로 온다 실시 집사와 함께 느긋히 휴식하는 시간',score:0,},
        {answer :'d. 고롱고롱 크어어어 푹신한 곳에서 조용히 휴식하는 시간',score:0,}
        ]
},
{
    q:"Q4. 우리집 고양이만의 아늑한 공간",
    a:[
        {answer :'a. 집사와 고양이가 함께 사용하는 실용적인 공간',
        score:100,},
        {answer :'b. 고양이는 잘 때도 귀여우니까 조용하고 아늑한 고양이만의 공간',
        score:80,},
        {answer :'c. 요리조리 볼 수 있는 탁 트인 시야의 공간',
        score:40,},
        {answer :'d. 집사도 고양이도 행복한 투명해먹이 있는 공간',
        score:20}
    ]
}
]

const ResultAlgo=[
    {
        img: "../img/page_01-2/product01.png",
        name: "책장캣타워(1200폭 6단)_쿠션형",
        desc: "실용적인데 예쁘기까지 한 집사와 고양이가 함께 쓰는 책장 캣타워",
    },
    {
        img: "../img/page_01-2/product15.png",
        name: "커스텀 캣타워(L)_콘도형",
        desc: "지붕 있는 콘도가 있어 아늑함까지 잡은 콘도형 커스텀 캣타워",
    },
    {
        img: "../img/page_01-2/product15.png",
        name: "커스텀 캣타워(H)_가드형",
        desc: "높은 곳 + 탁 트인 시야 = 스트레스 제로! 가드형 커스텀 캣타워",
    },
    {
        img: "../img/page_01-2/product13.png",
        name: "커스텀 캣타워(L)_투명해먹형",
        desc: "고양이도 집사도 모두 행복한 투명해먹형 커스텀 캣타워",
    }
]

//0 0점 획득
// 0 > 100 => 101 결과 발표[0]

// let answer100= new Array[Sco0, Sco100];
// let answer50= new Array[Sco0, Sco50];
// let answer20= new Array[Sco0, Sco20];
// let answer10= new Array[Sco0, Sco10];

// let answer101= new Array[Sco1, Sco100];
// let answer51= new Array[Sco1, Sco50];
// let answer21= new Array[Sco1, Sco20];
// let answer11= new Array[Sco1, Sco10];

// if(answer100 === '')

// let myanswer = new Array[];

let op1= QList.forEach(QList=>{
    QList[0].a[0].score.val();
});

let op2= QList.forEach(QList=>{
    QList[0].a[1].score.val();
});

let op100= QList.forEach(QList=>{
    QList[3].a[0].score.val();
});

let op80= QList.forEach(QList=>{
    QList[3].a[1].score.val();
});

let op40= QList.forEach(QList=>{
    QList[3].a[2].score.val();
});

let op20= QList.forEach(QList=>{
    QList[3].a[3].score.val();
});

const Result = document.getElementById('result');

op1.addEventListner("click",(e)=>{
    op1.val(1);
});

op100.addEventListner("click",(e)=>{
    op100.val(100);
});

// op2.addEventListner("click",(e)=>{
//     QList.q[0].a[1].score.val();
// });

// op100.addEventListner("click",(e)=>{
//     QList.q[3].a[0].score.val();
// });

// op80.addEventListner("click",(e)=>{
//     QList.q[3].a[1].score.val();
// });

// op40.addEventListner("click",(e)=>{
//     QList.q[3].a[2].score.val();
// });

// op20.addEventListner("click",(e)=>{
//     QList.q[3].a[3].score.val();
// });

// function Answer1(score){
//  if(score.val() == 1,100){
//     Result.innerHTML="";
//     const Div= document.createElement('div');
//     Div.innerHTML=
//     `<div>
//     <img src="${ResultAlgo.img}"alt=""></div>
//     <div>${ResultAlgo.name}</div>
//     <div>${ResultAlgo.desc}</div>
//     `
//     Result.appendChild(Div);
//  }
// }

// Answer1(score);


function Score101(val=''){
    Result.innerHTML='';
    const Test= QList.forEach(QList=>{
        if(val() === 1,0,0,100){
            const Div = document.createElement('div');
        Div.innerHTML=
        `<div><img src=${ResultAlgo.img} alt=""></div>
         <div>${ResultAlgo.name}</div>
         <div>${ResultAlgo.desc}</div>`
         Result.appendChild(Div);
        }
    })
}

Score101('');



//내가 선택한 선택지 중 includes(op1,op100)

function Mychoice1(){
    Result.innerHTML='';
    const Test= QList.forEach(QList=>{
        if(QList.score.val() === 1,0,0,100){
            const Div = document.createElement('div');
        Div.innerHTML=
        `<div><img src=${ResultAlgo.img} alt=""></div>
         <div>${ResultAlgo.name}</div>
         <div>${ResultAlgo.desc}</div>`
         Result.appendChild(Div);
        }
    })
}
Mychoice1();