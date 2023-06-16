function buat_login() {
//delete button
    var elem = document.getElementById('x');
    elem.parentElement.removeChild(elem)

//paragraf
    var p = document.createElement('p');
    p.className = "tulisan_login"
    p.innerHTML = "silahkan login"

//memasukan p ke div
    var element = document.getElementsByTagName("div")[0];
    element.appendChild(p)

//form
    var form = document.createElement('form');
    element.appendChild(form);

//label username
    var label = document.createElement('label');
    label.innerHTML = "username"
    form.appendChild(label);
//input usernama
    var input_user = document.createElement('input')
    input_user.type = "text";
    input_user.name = "username";
    input_user.value = "ahmad e.x";

    input_user.className = "form_login";
    form.appendChild(input_user)

//label password
    var label_p = document.createElement('label');
    label_p.innerHTML = "password"
    form.appendChild(label_p);
//input password
    var input_pass = document.createElement('input')
    input_pass.type = "password";
    input_pass.name = "password";
    input_pass.className = "form_login";
    form.appendChild(input_pass)

//submit
    var sub = document.createElement("input");
    sub.type = "submit";
    sub.className = "tombol_login";
    form.appendChild(sub)
}

