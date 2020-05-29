let money = +prompt("Ваш бюджет на месяц?", '100');

let time = prompt("Введите дату в формате YYYY-MM-DD", '2020.05.29');


let appData = {
    budget: money,
    expenses: {},
    optionalExpenses : {},
    income: [],
    timeData: time,
    savings: false,
}

let QuestionFirst = prompt("Введите обязательную статью расходов в этом месяце");
let QuestionSecond = prompt("Во сколько обойдется?");

let DoubleQuestionFirst = prompt("Введите обязательную статью расходов в этом месяце");
let DoubleQuestionSecond = prompt("Во сколько обойдется?");

appData.expenses[QuestionFirst] = QuestionSecond;
appData.expenses[DoubleQuestionFirst] = DoubleQuestionSecond;

let final = money/30;

alert(final);

