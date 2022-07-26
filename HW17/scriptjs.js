let Name =document.getElementById('Name');
let MobilePhone = document.getElementById('MobilePhone');
let Email = document.getElementById('Email');
const CHECKNAME = /^[a-zA-Z]{2,20}$/;
const CHECKMOBILEPHONE = /^380+(50|63|66|67|68|91|92|93|97|96)+\d{7}$/;
const CHECKEMAIL = /^([a-zA-Z]{6,12})+@+(gmail\.com|ukr\.net)$/;
function PressToWin()
{
    if (CHECKNAME.test(Name.value) && CHECKMOBILEPHONE.test(MobilePhone.value) && CHECKEMAIL.test(Email.value) === true)
    {
        alert("OK: We will call you!");
    }
    else
    {
        alert("Fail: Entered data is not valid!");
    }
}