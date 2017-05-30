/*
 Написати анкету для опитування. У вас буде масив підготовлених питань та `ul`
 на сторінці, куди будуть додаватись відповіді на питання.
 Програма через prompt задавати запитання користувачу і,
 отримавши відповідь, буде створювати `li` в який буде додавати `p`
 з текстом питання та `strong` з відповіддю. Після цього цей `li` буде додано до `ul` на сторінці.

 Питань має бути від 5.
 Бажано це гарно оформити.


 - створити масив із 5 питаннями;
 - чере цикла запитати ы запитати выдповіді

*/

var question = [
    "Ваше Ім'я ?",
    "Ваше Прізвище ?",
    "Ваше попереднє місце роботи?",
    "Ваш вік ?",
    "Ваш стаж роботи ?"];

function ansv () {
    var answer = [];
    for (var i = 0; i < question.length; i++ ){
        answer[i] = prompt(question[i]);
        var questionnaire = document.getElementById("questionnaire");
        var li = document.createElement("li");
        questionnaire.appendChild(li);
        var rightQuestion = document.createTextNode("  " + question[i]);
        li.appendChild(rightQuestion);
        var strong = document.createElement("strong");
        li.appendChild(strong);
        var rightAnswer = document.createTextNode("  " + answer[i]);
        strong.appendChild(rightAnswer);
    }
}

ansv ();

