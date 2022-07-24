var form = document.querySelector('.formValidation');
var submitBtn = form.querySelector('.submitBtn');
var yourName = form.querySelector('#yourName');
var email = form.querySelector('#email');
var phoneNumber = form.querySelector('#phoneNumber');

form.addEventListener('submit', function (event) {
	event.preventDefault();
	console.log('clicked on submit');
	console.log('Your name: ', yourName.value);
	console.log('E-mail: ', email.value);
	console.log('Phone Number: ', phoneNumber.value);
let validYourName;
	if (/^([a-zA-Z]{2,20})$/.test(yourName.value)) 
		{validYourName = true;} 
	else {validYourName = false;} 
	console.log(validYourName);

	
	if (/(^([a-zA-Z]{6,12})+@+((gmail\.com)|(ukr\.net))$)/.test(email.value))
		  {validEmail = true;}
	 else {validEmail = false;}
     console.log(validEmail);
	

	if (/(^(380{1})+(50|63|66|67|68|91|92|93|97|96)+[0-9]{7}$)/.test(phoneNumber.value))
	      {validPhoneNumber = true;}
	 else {validPhoneNumber = false;}
     console.log(validPhoneNumber);


if (validYourName && validEmail && validPhoneNumber === true) {
    alert("We will hear you");	
} 
else {alert("We don't hear you");}


});










/*let age = prompt ('Enter your age', );

if (age>=18 && age <=60) 
	alert("Вы ввели верный возраст");
if (age<18) 
    alert("Ваш возраст мал");
if (age>60)
	alert("Вы стары для этого сайта!))");*/
		

