
;(function(){

	function coolDate() { };

	function printDate(date, numDay) {
		numDay = numDay || 3;
		var nextDate = new Date(date.getTime());
		var previosDate = new Date(date.getTime());
		nextDate.setDate(nextDate.getDate() + numDay);
		previosDate.setDate(previosDate.getDate() - numDay);
		var miniCal = new Array();

		for( i = 0; i < numDay; i++) {
			miniCal.push(date.getDate());
			date.setDate(date.getDate() + 1);
		};
		printTable(miniCal);

		$('.arrow-left').on('click', function() {
			printDate(previosDate, numDay);
		});
		$('.arrow-right').on('click', function() {
			printDate(nextDate, numDay);
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
