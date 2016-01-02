(function(){

	function coolDate() { };

	

	function printDate(date, numDay) {
		numDay = numDay || 3;
		curentDate = new Date(date.getTime());
		var miniCal = new Array();
		alert('date = ' + date.getDate() + '  curentDate = ' + curentDate.getDate() + '  numDay  = ' + numDay);

		for( i = 0; i < numDay; i++) {
			miniCal.push(date.getDate());
			date.setDate(date.getDate() + 1);
		};
		alert('date = ' + date.getDate() + '  curentDate = ' + curentDate.getDate());

		printTable(miniCal);


		$('.arrow-right').on('click', function() {
			debugger;

			alert('curentDate = ' + curentDate);
			alert('numDay = ' + numDay);
			var newDate = (curentDate.getDate() - numDay);
			alert('newDate = ' + newDate);

	printDate(newDate, numDay);
		});
	};

	function printTable(arr) {
		$('.tableCalend').html('');
		$('.tableCalend').append('<tr>');
		arr.forEach(function(item) {
				$('.tableCalend').append('<td>' + item +'</td>');
		});
		$('.tableCalend').append('</tr>');
	}

	coolDate.printDate = printDate;
	coolDate.printTable = printTable;

	window.coolDate = coolDate;
}());

/*var today = new Date();

function printTable(arr) {
	$('.tableCalend').html('');
	$('.tableCalend').append('<tr>');
	arr.forEach(function(item) {
			$('.tableCalend').append('<td>' + item +'</td>');
	});
	$('.tableCalend').append('</tr>');
}

function printDate(date, numDay) {
	numDay = numDay || 3;
	curentDate = new Date(date.getTime());
	var miniCal = new Array();
	alert('date = ' + date.getDate() + '  curentDate = ' + curentDate.getDate() + '  numDay  = ' + numDay);

	for( i = 0; i < numDay; i++) {
		miniCal.push(date.getDate());
		date.setDate(date.getDate() + 1);
	};
	alert('date = ' + date.getDate() + '  curentDate = ' + curentDate.getDate());

	printTable(miniCal);


	$('.arrow-right').on('click', function() {
		debugger;

		alert('curentDate = ' + curentDate);
		alert('numDay = ' + numDay);
		var newDate = (curentDate.getDate() - numDay);
		alert('newDate = ' + newDate);

		printDate(newDate, numDay);
	});
};*/