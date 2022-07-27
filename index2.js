/**
 * Created by User on 7/20/2022.
 */
'use strict'

/*Сделать валидацию для вашей формы
 1. Имя (Длина 2 - 20 только английские)
 2. Емейл проверить что там длина 6 -12 символов(англиские) до @ и потом почта gmail.com или ukr.net
 3. Мобильный телефон 380 + 50|63|66|67|68|91|92|93|97| 96 + 7 digits

 В итоге мы должны получить alert c сообщением "Мы услышим вас" или "Мы вас не слышим"*/

// let email = document.querySelector("#email");
// let name = document.querySelector("#name");
// let tel = document.querySelector("#telephone");
// function valid() {
//     if(/^([A-Za-z0-9]+){6,12}&&\@&&(gmail\.com|ukr\.net)$/.test(email.value)&&
//         (/^[A-Za-z]{2,20}$/).test(name.value)&&
//     /^((380)&&(50|63|66|67|68|91|92|93|97|96)&&(\d){7})$/.test(tel.value) === true) {
//         alert("Ми почуємо Вас");
//     }
//     else {
//         alert ("Ми Вас не чуємо");
//          }
//
// }


function valid () {
    let email = document.querySelector("#email").value;
        let emailRegExp =  /^([a-zA-Z]{6,12}@(gmail\.com|ukr\.net))$/;

    let name = document.querySelector("#name").value;
        let nameRegExp = /^[a-zA-Z]{2,20}$/;

    let tel = document.querySelector("#telephone").value;
        let telRegExp =  /^((380)(50|63|66|67|68|91|92|93|97|96)(\d){7})$/;
     if (emailRegExp.test(email) && nameRegExp.test(name) && telRegExp.test(tel)) {
         alert ("Ми почуємо Вас");
     } else {
         alert ("Ми Вас не чуємо");
     }
}




