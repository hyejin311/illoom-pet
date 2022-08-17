const ProductArray=[
    {
        id:"01",
        name:"책장캣타워(1200폭 6단)_쿠션형(온라인몰 전용)",
        price:"499,000",
    },
    {
        id:"02",
        name:"책장캣타워(1200폭 6단)_기본형(온라인몰 전용)",
        price:"399,000",
    },
    {
        id:"03",
        name:"펫 3인 SET(패브릭)(온라인몰 전용)",
        price:"1,099,000",
    },
    {
        id:"04",
        name:"데스크스텝(온라인몰 전용)",
        price:"159,000",
    },
    {
        id:"05",
        name:"해먹 소파테이블(온라인몰 전용)",
        price:"199,000",
    },
    {
        id:"06",
        name:"커스텀 캣타워(H)_콘도형_(온라인몰 전용)",
        price:"499,000",
    },
    {
        id:"07",
        name:"펫 2인 SET(패브릭)(온라인몰 전용)",
        price:"999,000",
    },
    {
        id:"08",
        name:"데스크스텝 책상 세트(온라인몰 전용)",
        price:"241,000",
    },
    {
        id:"09",
        name:"계단형 숨숨집 SET(오픈형)(온라인몰 전용)",
        price:"176,000",
    },
    {
        id:"10",
        name:"커스텀 캣타워 (H)_가드형(온라인몰 전용)",
        price:"619,000",
    },
    {
        id:"11",
        name:"1400폭 데스크스텝 책상 세트(온라인몰 전용)",
        price:"519,000",
    },
    {
        id:"12",
        name:"계단형 숨숨집 SET(도어형)(온라인몰 전용)",
        price:"199,000",
    },
    {
        id:"13",
        name:"커스텀 캣타워 (L)_투명해먹형(온라인몰 전용)",
        price:"599,000",
    },
    {
        id:"14",
        name:"1200폭 데스크스텝 책상 세트(온라인몰 전용)",
        price:"449,000",
    },
    {
        id:"15",
        name:"커스텀 캣타워 (L)_콘도형(온라인몰 전용)",
        price:"649,000",
    },
    {
        id:"16",
        name:"커스텀 캣타워 (L)_투명해먹형(슬라이드 포함)(온라인몰 전용)",
        price:"729,000",
    },
    {
        id:"17",
        name:"펫스텝(패브릭)",
        price:"99,000",
    }
]

//List 선언
const List= document.querySelector('#list');

//함수
function showList(val=''){
    //1. 준비 : 꽂아넣을 List의 빈 요소 삽입
    List.innerHTML='';
    //2. ProductArray배열 .forEach로 돌리고
    const Bee = ProductArray.forEach(ProductArray=>{
    //3. 만약 name 값에 includes(val)과 일치한다면
        if(ProductArray.name.includes(val)){
    //4. const li 만들어 createElement 새 요소 만들어 준비하기
            const li= document.createElement('li');
    //5. 작은 li에 백틱으로 콘텐츠 만들기
        li.innerHTML=
        `<p>${ProductArray.name}</p>
        <p>${ProductArray.price}</p>`
    //6. 큰 List 안에 작은 li apependChild 로 삽입
        List.appendChild(li);
    }
        })
}

showList('');

const searchInput= document.getElementById('search');
const searchBtn= document.getElementById('searchBtn');

searchBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    List.style.display="block";
    const val = searchInput.value;
    showList(val);
})

searchInput.addEventListener("blur",(e)=>{
    e.preventDefault();
    List.style.display="none";
    const val = searchInput.value;
    showList();
})

// 시도
// searchBtn.addEventListener('click', (event) => {
//         event.preventDefault();
//     List.style.display="block";
//     const val = searchInput.value;
//     showList();
// });

// searchInput.addEventListener('blur', (event) => {
//         event.preventDefault();
//     List.style.display= 'none';
//   });