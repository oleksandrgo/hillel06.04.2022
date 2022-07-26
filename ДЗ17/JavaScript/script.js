function validate()
{
    var name = document.getElementById("name").value;
    var a = /^[a-zA-Z]{2,20}$/;
    var email = document.getElementById("email").value;
    var b = /^([a-zA-Z_]{6,12}@(gmail\.com|ukr\.net))$/;
    var phone = document.getElementById("tel").value;
    var c = /^((380)(50|63|66|67|68|91|92|93|97|96)(\d){7})$/;
    if(!a.test(name) || !b.test(email) || !c.test(phone))
    {
        alert("Мы вас не слышим")
    }
    else 
    {
        alert("Мы вас услышали")
    }        
}