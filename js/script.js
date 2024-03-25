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
}, 4000);

//스크롤 애니메이션
window.onscroll = function() {
	let height = window.pageYOffset;
	console.log('스크롤 높이: ', height);
	
	//sec1 
	const blurBox = document.querySelector('.blur_box');
	if(height > 800 && height < 1700){
		blurBox.style.width = '0rem';
	}else{
		blurBox.style.width = '20rem';
	}

	//sec4
	const sec4Bg = document.querySelector('.sec4_bg');
	if(height > 3350 && height < 4500){
		sec4Bg.style.filter = 'blur(0px)';
		sec4Bg.style.backgroundSize = '100% 100%';
		sec4Bg.style.backgroundPosition = 'center';
	}else{
		sec4Bg.style.filter = 'blur(30px)';
		sec4Bg.style.backgroundSize = '150% 150%';
		sec4Bg.style.backgroundPosition = 'right top';
	}
}