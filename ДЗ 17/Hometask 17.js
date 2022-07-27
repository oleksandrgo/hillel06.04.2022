var name = document.getElementById('name');
var phone = document.getElementById('phone');
var email = document.getElementById('email');
var re1 = /^([A-Za-z]{2,20})$/;
var re2 = /^(380 (50|63|66|67|68|91|92|93|97|96) \d{7})$;/;
var re3 = /^([A-Za-z]{6,12})+@(gmail\.com|ukr\.net)$/;

function MyChecking()
{
if (re1.test(name.value) && re2.test(phone.value) && re3.test(email.value)===true) 
{
alert ("We hear you");
}
else 
{
	alert("We don`t hear you");
}
}



