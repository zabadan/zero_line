;(function(){
	var addTextArray = ['Каналья!', 'Тисяча чортів', 'Цуцик', 'Захищайтесь!'];

	function getRandomArbitary( max )
	{
	  return Math.floor( Math.random() * max );
	}

	function timer() { };

	function closeModal(el) {
		var btn = document.querySelector( '.jsClose' );
		btn.addEventListener('click', function() {
			el.style.display = 'none';
			timerModal();
		});
	};

	function timerModal(){
		var elementPopUp = document.querySelector('.popup');
		elementPopUp.style.display = 'none';
		var time = setTimeout(function () {elementPopUp.style.display = 'block'}, 2000);
		console.log ('elementPopUp = ' + elementPopUp);
		closeModal(elementPopUp);
	};

	function muveMassage() {
		var elementMassage = document.querySelector('.massage');
		var elementAddText = document.querySelector('.jsAddText');
		elementMassage.style.display = 'block';
		var currentPosition = document.documentElement.clientHeight;//Получаем текущее положение блока, который будет выплывать
		var maxPositionY = 145;
		var minPositionY = currentPosition - maxPositionY;

		var text2 = getRandomArbitary( addTextArray.length );
		elementAddText.innerHTML = addTextArray[text2];
		requestAnimationFrame(function anim(time) {
			if (minPositionY < currentPosition) {
			    currentPosition-=2.5;
			    elementMassage.style.top = currentPosition +"px";
			    requestAnimationFrame(anim);
			}
			var time = setTimeout(function () {elementMassage.style.top = minPositionY + maxPositionY +"px"}, 4000);
		});
		var btnMas = document.querySelector( '.jsClose' );
		btnMas.addEventListener('click', function() {
			elementMassage.style.display = 'none';
		});
	};

	function timerMassage() {
		setInterval(muveMassage, 5000);
		//closeModal();
	};

	function getJsPopup() {
	var elementJsPopup = document.querySelector('.jsPopup');
	alert('offsetWidth = ' + elementJsPopup.offsetWidth);

	}


	timer.timerModal = timerModal;
	timer.muveMassage = muveMassage;
	timer.timerMassage = timerMassage;
	timer.getJsPopup = getJsPopup;

	window.timer = timer;
}());


/*раз на 8 сек приходит новий меседж. меседжі беруться з масиву. використати setInterval*/