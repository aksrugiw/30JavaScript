const secHand = document.querySelector('.second-hand');

function setDate() {
	const now = new Date();

	const sec = now.getSeconds();
	const secDegrees = ( sec / 60 ) * 360;
	console.log(sec);
}

setInterval(setDate, 1000);

setDate();