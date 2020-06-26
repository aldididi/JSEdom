//Sangat Kurang = 1
//Kurang = 2
//Cukup = 3
//Baik = 4
//Sangat Baik = 5
var autoedom = document.querySelectorAll('input[type="radio"]');
var score = 4;
for (var i = 0; i < autoedom.length; i++) {
    if (autoedom[i].value == score) {
        autoedom[i].checked = true;
    }
}
