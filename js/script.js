'use strict';

let startBtn = document.getElementById("start"),
    budgetValue = document.getElementsByClassName("budget-value")[0],
    dayBudgetValue = document.getElementsByClassName("daybudget-value")[0],
    levelValue = document.getElementsByClassName("level-value")[0],
    expensesValue = document.getElementsByClassName("expenses-value")[0],
    optionalexpensesValue = document.getElementsByClassName("optionalexpenses-value")[0],
    incomeValue = document.getElementsByClassName("income-value")[0],
    monthsavingsValue = document.getElementsByClassName("monthsavings-value")[0],
    yearsavingsValue = document.getElementsByClassName("yearsavings-value")[0],


    expensesItem = document.getElementsByClassName("expenses-item"),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),
    incomeItem = document.querySelector(".choose-income"),
    checkSavings = document.querySelector("#savings"),
    sumValue = document.querySelector(".choose-sum"),
    percentValue = document.querySelector(".choose-percent"),
    yearValue = document.querySelector(".year"),
    monthValue = document.querySelector(".month"),
    dayValue = document.querySelector(".day"),
    title = document.querySelector('.title');

//7.1
console.log(startBtn);

//7.2
console.log(budgetValue, dayBudgetValue, levelValue, expensesValue,
            optionalexpensesValue, incomeValue, monthsavingsValue,
            yearsavingsValue);

//7.3
console.log(expensesItem);

//7.4
console.log(expensesBtn);
console.log(optionalExpensesBtn);
console.log(countBtn);

//7.5
console.log(optionalExpensesItem);

//7.6
console.log(incomeItem, checkSavings, sumValue,
            percentValue, yearValue, monthValue,
            dayValue);

//7.7
console.log(title);

title.style.fontSize = "24px";


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
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let QuestionFirst = prompt("Введите обязательную статью расходов в этом месяце", "");
            let QuestionSecond = prompt("Во сколько обойдется?", "");

            if ( typeof(QuestionFirst) === 'string'
                && typeof(QuestionFirst) != null
                && typeof(QuestionSecond) != null

                && QuestionFirst != ''
                && QuestionSecond != ''

                && QuestionFirst.length < 50
                && QuestionSecond.length < 50) {

                console.log ("done");

                appData.expenses[QuestionFirst] = QuestionSecond;
            } else {
                console.log ("bad result");
                i--;
            }
        }
    },
    СalculationDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed(2);
        alert ("Ваш дневной бюджет: " + appData.moneyPerDay + " rub.");
    },

    detectLevel: function () {
        if (appData.moneyPerDay < 100 ) {
            console.log ("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log ("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000 ) {
            console.log ("Высокий уровень достатка");
        } else {
            console.log ("Произошла ошибка");
        }
    },

    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?", '100');
            let percent = +prompt("Под какой процент?", '10');

            appData.monthIncome = (save/100/12*percent).toFixed(2);

            alert("Доход в месяц с Вашего депозита:" + appData.monthIncome);
        }
    },

    chooseOptExpenses: function() {
        for (let i = 1; i <= 3; i++) {
            let questionOptExpenses = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }
    },

    chooseIncome: function() {
        for (let i = 0; i < 1; i++ ) {

            let items = prompt('Что принесёт доп.доход? (Перечислите)', '');

            if  ((typeof(items)) === 'string'
                && (typeof(items)) != null
                && items != '' ) {

                appData.income = items.split(', ');
                appData.income.push(prompt('Может что-то ещё?'));
                appData.income.sort();
                } else {
                console.log("bad result");
                i--;
            }

            appData.income.forEach (function (itemmassive, i) {
                alert("Способы доп.заработка: " + (i+1) + " - " + itemmassive);
            });
        }
    },
};

for (let key in appData) {
    console.log('Наша программа включает в себя данные: ' + key + " -" + appData[key]);
}



   // let items = prompt('Что принесёт доп.доход? (Перечислите)', '');
   // appData.income = items.split(', ');
   // appData.income.push(prompt('Может что-то ещё?'));
   // appData.income.sort();
