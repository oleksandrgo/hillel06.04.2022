let name = document.querySelector("#firstname");
let phone = document.querySelector("#phone");
let email = document.querySelector("#email");
function report() {
if (/^([a-zA-Z]{2,20})$/.test(name.value) && 
	/(^(380{1})+(50|63|66|67|68|91|92|93|97|96)+[0-9]{7}$)/.test(phone.value) && 
	/(^([a-zA-Z]{6,12})+@+((gmail\.com)|(ukr\.net))$)/.test(email.value) === true) 
	{alert("Мы услышим вас");}
		else {alert("Мы вас не слышим");}
	};