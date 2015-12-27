function my_primitive_alert() {
	var rabbit = 2;
  	for (var i = 1; i <= rabbit; i++) {
  		alert( i + ' кролик!');
  	}
}

function my_object_alert() {
	system = {name: "Dino", age: 38};
	console.log(system);
	console.log(system.name);
}

function my_check_age() {
	var user1 = {name: 'Lolita', age: 14}
	var user2 = {name: 'Nabokov', age: 32}

	var user = user2;
	chek_age = 16;
	console.log('user.name = ', user.name)
	if (chek_age>=user.age) {
		alert ('I do not show ads!')
	} else {
		alert ('hi '+ user.name + '. see advertisement. You are ' + user.age);
	}
}

function my_rating(rat) {
	switch (rat) {
		case 1:
		case 2:
		case 3:
		case 4:
			document.write("<h3>Незадовільно!!</h3>");
			return 2;
			break;
		case 5:
		case 6:
		case 7:
			document.write("<h3>Задовільно!!</h3>");
			return 3;
			break;
		case 8:
		case 9:
			document.write("<h3>Непогано!!</h3>");
			return 4;

			break;
		case 10:
		case 11:
		case 12:
			document.write("<h3>Відмінно!!</h3>");
			return 5;

			break;
		default:
			document.write("<h3>Кого ви тут зібралися надурити?</h3>");
			return NaN;
			break;
	}
} 



function isInteger(num) {
    if (num-Math.floor(num)==0) {
    	console.log('num = ' + num + '; Math.floor(num) = ' + Math.floor(num))
        return true;
    }
    else
        return false;
}


var year = 12;


function deposit(money, term) {
	if (!isInteger(money) || !isInteger(term) || money < 0 || term < 0) {
		alert ('Сумма та термін мають бути цілими числами більшими за нуль');
		return;
	};
	var interest1 = .19;
	var interest3 = .2;
	var interest6 = .22;
	var interest12 = .25;
	

	/*document.write("<h1>Депозитний калькулятор</h1>");*/
	document.write("<h3>Ви розмістили</h3>" + money + " грн. Строком на " + term + "/" + year +" року");
	document.write("<h3>Ваш прибуток складає:</h3>");
	switch (term) {
		case 1:
			document.write(money*interest1/year*term + " грн.");
			break;
		case 2:
		case 3:
			document.write(money*interest3/year*term + " грн.");
			break;
		case 4:
		case 5:
		case 6:
			document.write(money*interest6/year*term + " грн.");
			break;
		default:
			document.write(money*interest12/year*term + " грн.");
			break;
	}
}

/*function findHello (str) {
	str = str.toLowerCase();
	document.write(str);
	console.log(str.indexOf("привіт"));
}
*/

var Deposits = {
    'standart': {
        name: 'Standart',
        term: {
            1: .1,
            2: .1,
            3: .1,
            4: .15,
            5: .15,
            6: .15,
            7: .17,
            8: .17,
            9: .17,
            10: .20,
            11: .20,
            12: .20
        }
    },
    'nestandart': {
        name: 'neStandart',
        term: {
        	1: .12,
            2: .12,
            3: .12,
            4: .17,
            5: .17,
            6: .17,
            7: .19,
            8: .19,
            9: .17,
            10: .22,
            11: .22,
            12: .22
        }
    }
};

function calculate (term, money, percent) {
	$('.result').html("<h3>Ваш чистий прибуток складє:</h3>" + money*percent/year*term + " грн.");
}

function repenkoDeposite() {
	$('.send-btn').on('click', function() {
		var formNameDeposit = $('select[name = "deposit"]').val();
		var formTermDeposit = $('#termDeposit').val();
		var formMoneyDeposit = $('#moneyDeposite').val();
		console.log('formNameDeposit = ' + formNameDeposit);
		console.log('formTermDeposit = ' + formTermDeposit);
		console.log('formMoneyDeposit = ' + formMoneyDeposit);

		console.log('Deposits[formNameDeposit].name = ' + Deposits[formNameDeposit].name);
		console.log('Deposits[formNameDeposit].term[formTermDeposit] = ' + Deposits[formNameDeposit].term[formTermDeposit]);

	calculate(formTermDeposit, formMoneyDeposit, Deposits[formNameDeposit].term[formTermDeposit])
	});
}
