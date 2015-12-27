/*var rockBand = ['Metallika', ' AC/DC', 'OffSprings',' Nirvana'];

function printArray() {
	$('.array').html('old array = ' + rockBand + '<br>');
	alert('length = ' + rockBand.length);
	alert("delete " + rockBand[rockBand.length-1] + ' :\(');
	rockBand.pop();
	$('.array').html('new array = ' + rockBand + '<br>');
	alert( rockBand.length);
	rockBand.push("Accept");
	alert("add " + rockBand[rockBand.length-1] + ' :\)');
	alert(rockBand.length);
	$('.array').html('new array = ' + rockBand + '<br>');

	for (var i = 0; i < rockBand.length; i++) {
	  alert( rockBand[i] );
	}

	rockBand.forEach(function(item) {
		alert(i + ": " + item + " (массив: " + rockBand + ")" );
	});

};


*/

var tableCap = '<tr><th>№</th><th>Name</th><th>Date</th><th>Age</th><th>Rating</th><th>Action</th></tr>';
var students = new Array();
var maxId = students.length + 1;

function refresh() {
	$('table').html('');
	$('table').html(tableCap);
	students.forEach(function(item, i) {
		item.id = i+1;
		$('.printTableStudents').append('<tr><td>' + item.id +'</td><td>' + item.name +'</td><td>' + item.date + '</td><td>' + item.age + '</td><td>' + item.rating + '</td><td><button type="button" id = '+ item.id + ' class="delStudet" >Del</button><button type="button" class="editStudet" id = '+ item.id + '>Edit</button></td></tr>');
	});
	console.log('students.length = ' + students.length + '  maxId = ' + maxId);

}

function printStudents () {
	$('.btnAdd').on('click', function() {
		var nameStudent = $('input[name="nameStudent"]').val();
		var ratingStudent = $('input[name="ratingStudent"]').val();
		var dateStudent = $('input[name="dateStudent"]').val();
		var ageStudent = $('input[name="ageStudent"]').val();

		if(nameStudent=="" || ageStudent=="" || ratingStudent=="") {
			alert('not add students');
		} else {
			students.push({id: maxId++, name: nameStudent, date: dateStudent, age: ageStudent, rating: ratingStudent});
			refresh();
			//$('.printTableStudents').append('<tr><td>' + students.length +'</td><td>' + nameStudent +'</td><td>' + dateStudent + '</td><td>' + ageStudent + '</td><td>' + ratingStudent + '</td><td><button type="button" id = '+ students.length + ' class="delStudet" >Del</button><button type="button" class="editStudet" data-id = '+ students.length + '>Edit</button></td></tr>');
			$('.tableStudents').css('display', 'block');
		};
		$('.customInput').val('');
	});

	$('.btnRefrech').on('click', function() {
		refresh();
	});

	$('.printTableStudents').on('click', '.delStudet', function() {
		if (confirm('Are you sureyou remove the student ' + students[event.target.id-1].name + '?')) {
			alert('you removed student ' + students[event.target.id-1].name);
			students.splice(event.target.id-1, 1);
			refresh();
		}
	});
	$('.printTableStudents').on('click', '.editStudet', function() {
			alert('eidt is`t work now, sorry');
	});
}
