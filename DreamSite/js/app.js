document.getElementById('btnfm').addEventListener('click', function() {
	let orderForm = document.forms.orderForm;
	let userName = orderForm.elements.userName;
	let userPhone = orderForm.elements.phone;
	let userEmail = orderForm.elements.email;
	let userNameValue = userName.value;
	let userPhoneValue = userPhone.value
	let userEmailValue = userEmail.value
	if (userNameValue.match(/^[a-zA-Zа']{2,20}$/) === null || 
		userEmailValue.match(/^[a-zA-Z]{1,20}@{1}(\bgmail\.com|ukr\.net\b){1}$/) === null ||
		userPhoneValue.match(/^(380){1}(50|63|66|67|68|91|92|93|96|97){1}\d{7}$/) === null) {
		alert("Мы вас не слышим");
		return;
	} else {
		alert("Мы услышим вас");
	}
});