//팝업창 닫기
$('.close').on('click', function(){
	$('.popup').fadeOut(800);
})

//배너
const slide = $('div[class*="slide1"], div[class*="slide2"], div[class*="slide3"]');
console.log('slide: ', slide);
let idx = 0;

function slideFn() {
	slide.removeClass('on');
	slide.eq(idx).addClass('on');
	idx++;
	if (idx == slide.length) {
		idx = 0;
	}
}
setInterval(() => {
	slideFn();
}, 3000);

//sec3 숫자 증가 애니메이션 중단 변수
let play = false;

//스크롤 애니메이션
window.onscroll = function() {
	let height = window.pageYOffset;
	console.log('스크롤 높이: ', height);
	
	//sec1 
	const sec1Sub = document.querySelector('.sec1 .sub_title');
	const sec1Main = document.querySelector('.sec1 .section_title');
	const sec1Btn = document.querySelector('.sec1 .view_btn');
	if(height > 400 && height < 1300){
		sec1Sub.style.opacity = '1';
		sec1Sub.style.transform = 'translateY(0)';
		sec1Main.style.opacity = '1';
		sec1Main.style.transform = 'translateY(0)';
		sec1Btn.style.opacity = '1';
		sec1Btn.style.transform = 'translateY(0)';
	}else{
		sec1Sub.style.opacity = '0';
		sec1Sub.style.transform = 'translateY(5rem)';
		sec1Main.style.opacity = '0';
		sec1Main.style.transform = 'translateY(5rem)';
		sec1Btn.style.opacity = '0';
		sec1Btn.style.transform = 'translateY(5rem)';
	}

	const blurBox = document.querySelector('.blur_box');
	if(height > 800 && height < 1700){
		blurBox.style.width = '0rem';
	}else{
		blurBox.style.width = '20rem';
	}


	//sec2
	const sec2Main = document.querySelector('.sec2 .section_title');
	if(height > 1300 && height < 2100){
		sec2Main.style.opacity = '1';
		sec2Main.style.transform = 'translateY(0)';
	}else{
		sec2Main.style.opacity = '0';
		sec2Main.style.transform = 'translateY(5rem)';
	}

	//sec3
	const sec3Sub = document.querySelector('.sec3 .sub_title');
	const sec3Main = document.querySelector('.sec3 .section_title');

	if(height > 2300 && height < 3200){
		sec3Sub.style.opacity = '1';
		sec3Sub.style.transform = 'translateY(0)';
		sec3Main.style.opacity = '1';
		sec3Main.style.transform = 'translateY(0)';
	}else{
		sec3Sub.style.opacity = '0';
		sec3Sub.style.transform = 'translateY(5rem)';
		sec3Main.style.opacity = '0';
		sec3Main.style.transform = 'translateY(5rem)';
	}

	//sec3 숫자 증가 애니메이션
	const country = document.querySelector('#country');
	const money = document.querySelector('#money');
	const people = document.querySelector('#people');
	let countC = 0;
	let countM = 0;
	let countP = 0;

	if (!play && height > 2400) {
		play = true;
		let countingC = setInterval(function () {
			if (countC == 14) {
				clearInterval(countingC);
				return false;
			}
			countC += 1;
			country.innerHTML = new Intl.NumberFormat().format(countC);
		}, 50);
		let countingM = setInterval(function () {
			if (countM == 130) {
				clearInterval(countingM);
				return false;
			}
			countM += 1;
			money.innerHTML = new Intl.NumberFormat().format(countM);
		}, 10);
		let countingP = setInterval(function () {
			if (countP == 5300) {
				clearInterval(countingP);
				return false;
			}
			countP += 10;
			people.innerHTML = new Intl.NumberFormat().format(countP);
		}, 1);
	}



		//sec4
		const sec4Bg = document.querySelector('.sec4_bg');
		if(height > 3400 && height < 4500){
			sec4Bg.style.filter = 'blur(0px)';
			sec4Bg.style.backgroundSize = '100% 100%';
			sec4Bg.style.backgroundPosition = 'center';
		}else{
			sec4Bg.style.filter = 'blur(30px)';
			sec4Bg.style.backgroundSize = '150% 150%';
			sec4Bg.style.backgroundPosition = 'right top';
		}
	}