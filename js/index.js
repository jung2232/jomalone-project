const btnClick = document.querySelector('.toggle-btn');
const menuShow = document.querySelector('header .mobile');
let toggleState = false;



btnClick.addEventListener('click', ()=>{
    toggleState = !toggleState;
    //togglestate가 참이면
    if(toggleState){
        btnClick.classList.add('active');
        menuShow.classList.add('active');
    } else {
        btnClick.classList.remove('active');
        menuShow.classList.remove('active');
    }
})

// main-swiper 
new Swiper(".main-swiper .swiper", {
  direction: 'horizontal',
  loop: true,
  autoplay : {
      delay : 3000
  },
  navigation: {
    nextEl: ".main-swiper .swiper-next",
    prevEl: ".main-swiper .swiper-prev",
  },
});


// // skroll-spy -----------------------------
// //Masgic Scroll---------------------
// const spyEls = document.querySelectorAll("section.scroll-spy");
// //forEach -> 배열함수
// spyEls.forEach(function (spyEl) {
//     new ScrollMagic.Scene({
//             triggerElement: spyEl, //보여질 부분 감지할 요소 지정
//             triggerHook: 0.8, //0.8초 동안 훅이 실행됨
//         })
//         //토글 할 요소 생성 및 제거
//         //.setClassToggle(토글 할 요소, "넣었다 뺐다 할 class 이름 생성")
//         .setClassToggle(spyEl, "show")
//         .addTo(new ScrollMagic.Controller());
// });



new Swiper('.best-item .swiper', {
    direction: 'horizontal', //방향
    loop: true, //무한반복
    autoplay : true, //자동시작
    slidesPerView: 4, //한 번에 보여지는 슬라이드 개수
    spaceBetween: 10, //슬라이드와 슬라이드 간격
    navigation : {
        prevEl : ".best-item .swiper-prev",
        nextEl : ".best-item .swiper-next"
    },
    breakpoints: { //반응형 조건 속성
    320: { //320 이상일 경우
      slidesPerView: 2, //레이아웃 1열
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3, //레이아웃 2열
      spaceBetween: 30
    },
    1300: {
      slidesPerView: 4, //레이아웃 3열
      spaceBetween: 40
    },
  }
});


function showMroe(){
  // 더보기로 보여줄 요소를 변수에 저장
  const hide = document.querySelectorAll('.hide');

  // 배열로 변경하고 3개씩 배열로 쪼개서 보이기
  // .from => .hide 배열로 변경
  // slice(0,4) => 3개씩 배열을 쪼개기
  const first = Array.from(hide).slice(0,3);
  first.forEach(item => {
      item.classList.remove('hide');
  });
  if(hide.length <= 3) {
      hideMoreBtn();
  }
}

function hideMoreBtn() {
  document.getElementById('moreBtn').classList.add('hide');
}