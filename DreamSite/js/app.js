document.getElementById('btnfm').addEventListener('click', function() {
	let orderForm = document.forms.orderForm;
	let userName = orderForm.elements.userName;
	let userPhone = orderForm.elements.phone;
	let userEmail = orderForm.elements.email;
	let userNameValue = userName.value;
	let userPhoneValue = userPhone.value
	let userEmailValue = userEmail.value
	if (userNameValue.match(/^[a-zA-Zа']{2,20}$/) === null && 
		userEmailValue.match(/^[a-zA-Z]{1,20}@{1}(\bgmail\.com|ukr\.net\b){1}$/) === null &&
		userPhoneValue.match(/^(\b38050|38063|38066|38067|38068|38091|38092|38093|38096|38097\b){1}\d{7}$/)) {
		alert("Мы вас не слышим");
		return;
	} else {
		alert("Мы услышим вас");
	}
});