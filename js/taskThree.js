let money = +prompt("Ваш бюджет на месяц?", '100');

let time = prompt("Введите дату в формате YYYY-MM-DD", '2020.05.29');


let appData = {
    budget: money,
    expenses: {},
    optionalExpenses : {},
    income: [],
    timeData: time,
    savings: false,
};

let i = 0;
   do {    
    let QuestionFirst = prompt("Введите обязательную статью расходов в этом месяце");
    let QuestionSecond = prompt("Во сколько обойдется?");

    if ( (typeof(QuestionFirst)) === 'string' 
        && (typeof(QuestionFirst)) != null 
        && (typeof(QuestionSecond)) != null
        
        && QuestionFirst != '' 
        && QuestionSecond != ''

        && QuestionFirst.length < 50
        && QuestionSecond.length < 50
        
        && QuestionFirst > 0 
        && QuestionSecond > 0 ) {
        
        console.log("done");

        appData.expenses[QuestionFirst] = QuestionSecond;
    } else {
        console.log("bad result");
        i--;
    }
    i++;
}
 while (i < 2);

appData.moneyPerDay = appData.budget / 30;




let final = money/30;

alert ("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100 ) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000 ) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}