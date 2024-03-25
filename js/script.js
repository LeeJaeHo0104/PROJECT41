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

//sec1 
window.onscroll = function() {
	let height = window.pageYOffset;
	console.log('스크롤 높이: ', height);
	
	const blurBox = document.querySelector('.blur_box');
	if(height > 800){
		blurBox.style.width = '0rem';
	}

}