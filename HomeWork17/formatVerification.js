function verifyFields() {
    var name = document.getElementById("name2").value;
    var nameRegex = /^[a-zA-Z]{2,20}$/;
    var phone = document.getElementById("Phone2").value;
    var phoneRegex = /^((380)(50|63|66|67|68|91|92|93|97|96)(\d){7})$/;
    var email = document.getElementById("Email2").value;
    var emailRegex = /^([a-zA-Z]{6,12}@(gmail\.com|ukr\.net))$/;

    if(nameRegex.test(name) && emailRegex.test(email) && phoneRegex.test(phone))
    {
        alert("Мы вас услышали")
    }
    else
    {
        alert("Мы вас не слышим")
    }
}

    