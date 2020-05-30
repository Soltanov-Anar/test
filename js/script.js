'use strict';

let money;
let time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '100');
    time = prompt("Введите дату в формате YYYY-MM-DD", '2020.05.29');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '100');
    }
}

start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses : {},
    income: [],
    timeData: time,
    savings: true,
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++ ) {
    
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
    
    }
}

chooseExpenses();

function СalculationDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(2);
    alert("Ваш дневной бюджет:" + appData.moneyPerDay + " rub.");
}

СalculationDayBudget()

function detectLevel() {
    if (appData.moneyPerDay < 100 ) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000 ) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}

detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?", '100');
        let percent = +prompt("Под какой процент?", '10');

        appData.monthIncome = (save/100/12*percent).toFixed(2);
        alert("Доход в месяц с Вашего депозита:" + appData.monthIncome);
    }
}

checkSavings();

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++ ) {
        
        let chooseOptExpensesFirst = prompt("Статья необязательных расходов", '');
    
        if ( (typeof(chooseOptExpensesFirst)) === 'string' 
            && (typeof(chooseOptExpensesFirst)) != null        
            && chooseOptExpensesFirst != '' 
            && chooseOptExpensesFirst.length < 50
            && chooseOptExpensesFirst > 0 ) { 
            
            appData.optionalExpenses[i] = chooseOptExpensesFirst;
        } else {
            console.log("bad result");
            i--;
        }
            console.log(appData.optionalExpenses);
    }
}

chooseOptExpenses();