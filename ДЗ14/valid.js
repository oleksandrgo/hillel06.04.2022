 function validate() {
            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;
            var phone = document.getElementById("phone").value;
            
            let nameRegexp = new RegExp(/^[a-zA-Z]{2,20}$/)
            let emailRegexp = new RegExp(/^[a-zA-Z]{6,12}@(?:gmail\.com|ukr\.net)$/)
            let phoneRegexp = new RegExp(/(^\+?380(?:50|63|66|67|68|91|92|93|97|96)\d{7}$)/)

            let valid = nameRegexp.exec(name) && emailRegexp.exec(email) && phoneRegexp.exec(phone)

            if (valid) {
                alert("Мы услышим вас")
            } else {
                alert("Мы вас не слышим")
            }

            return true;
        }