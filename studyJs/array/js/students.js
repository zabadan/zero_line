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
}

function sortRefresh() {
	$('table').html('');
	$('table').html(tableCap);
	students.forEach(function(item, i) {
		$('.printTableStudents').append('<tr><td>' + item.id +'</td><td>' + item.name +'</td><td>' + item.date + '</td><td>' + item.age + '</td><td>' + item.rating + '</td><td><button type="button" id = '+ item.id + ' class="delStudet" >Del</button><button type="button" class="editStudet" id = '+ item.id + '>Edit</button></td></tr>');
	});
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
			$('.winEdit').css('display', 'block');
			$('input[name="editNameStudent"]').val(students[event.target.id-1].name);
			$('input[name="editAgeStudent"]').val(students[event.target.id-1].age);
			$('input[name="editRatingStudent"]').val(students[event.target.id-1].rating);
			$('input[name="editDateStudent"]').val(students[event.target.id-1].date);
			tmpId = event.target.id-1;
			$('.btnConfirm').on('click', function() {
				nameStudent = $('input[name="editNameStudent"]').val();
				ratingStudent = $('input[name="editRatingStudent"]').val();
				ageStudent = $('input[name="editAgeStudent"]').val();
				dateStudent = $('input[name="editDateStudent"]').val();
				if(nameStudent=="" || ageStudent=="" || ratingStudent=="") {
					alert('Fill in the form correctly!');
					} else {
						students.splice(tmpId, 1, {id: tmpId, name: nameStudent, date: dateStudent, age: ageStudent, rating: ratingStudent});
						console.log('event.target.id-1 = ' + tmpId);
						console.log('current students = ' + students[tmpId].id, students[tmpId].name);
						refresh();
						$('.winEdit').css('display', 'none');
					};
			});

	});

	$('.close').on('click', function() {
			$('.winEdit').css('display', 'none');
	});

	$('.sort').on('change', function() {
	    function compareById (a, b) {
	    	/*console.log('a.id = ' + a.id + '. b.id = ' + b.id);*/
	    	return a.id - b.id;
 		}

	    function compareByName (a, b) {
	    	/*console.log('a.name = ' + a.name + '. b.name = ' + b.name);*/
	    	return a.name - b.name;
 		}

	    function compareByDate (a, b) {
	    	/*console.log('a.date = ' + a.date + '. b.date = ' + b.date);*/
	    	return a.date - b.date;
 		}

		function compareByAge (a, b) {
	    	/*console.log('a.age = ' + a.age + '. b.age = ' + b.age);*/
	    	return a.age - b.age;
	 	}

	    function compareByRating (a, b) {
	    	/*console.log('a.rating = ' + a.rating + '. b.rating = ' + b.rating);*/
	    	return  b.rating - a.rating;
		}

		sortSselect = $('select').val();
		switch(sortSselect){
			case 'id':
		 		students.sort(compareById);
			    break;
			case 'name':
		 		students.sort(compareByName);
			    break;
			case 'date':
			    students.sort(compareByDate);
			    break;
			case 'age':
			    students.sort(compareByAge);
			    break;
			case 'rating':
			    students.sort(compareByRating);
			    break;
		};
		sortRefresh();
	});
}
