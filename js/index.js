function check_radiobuttons(){

    var radios = document.getElementsByName("daddy");
    for (var i = 0, len = radios.length; i < len; i++) {
        if (radios[i].checked) {
            return true;
        }
     }
    return false;
}

function check_checkboxes(){

    var checkboxes = document.getElementsByName("nicknames");
    for (var i = 0, len = checkboxes.length; i < len; i++) {
        if (checkboxes[i].checked) {
            return true;
        }
     }
    return false;
}

function check_user_generated_nickname(){
    var nickname = document.nickname_form.user_generated.value;

    if (nickname == null || nickname ==""){
        return false;
    }
    else return true;
}

function success_submit(){
    ss.innerHTML="bye bye";
    setTimeout("kk()",1000);

}

function validate_form(){
    console.log('validate form')
    var radio = check_radiobuttons();
    var checkboxes = check_checkboxes();
    var nickname = check_user_generated_nickname();
    if (!radio){
        alert("You must select one of the choices for 'daddy'!");
        return false;
    }
    else if (!checkboxes){
        alert("You must select at least one of the choices for 'nicknames'!");
        return false;
    }
    else if (!nickname){
        alert("You can't leave the user_generated_nickname field blank!");
        return false;
    }
    else return true;   
}