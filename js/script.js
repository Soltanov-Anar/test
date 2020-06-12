'use strict';

let startBtn = document.getElementById("start"),
    budgetValue = document.getElementsByClassName("budget-value")[0],
    dayBudgetValue = document.getElementsByClassName("daybudget-value")[0],
    levelValue = document.getElementsByClassName("level-value")[0],
    expensesValue = document.getElementsByClassName("expenses-value")[0],
    optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value")[0],
    incomeValue = document.getElementsByClassName("income-value")[0],
    monthSavingsValue = document.getElementsByClassName("monthsavings-value")[0],
    yearSavingsValue = document.getElementsByClassName("yearsavings-value")[0],


    expensesItem = document.getElementsByClassName("expenses-item"),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),
    incomeItem = document.querySelector(".choose-income"),
    checkSavings = document.querySelector("#savings"),
    sumValue = document.querySelector(".choose-sum"),
    percentValue = document.querySelector(".choose-percent"),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value"),
    title = document.querySelector('.title');

//7.1
console.log(startBtn);

//7.2
console.log(budgetValue, dayBudgetValue, levelValue, expensesValue,
            optionalExpensesValue, incomeValue, monthSavingsValue,
            yearSavingsValue);

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

expensesBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countBtn.disabled = true;
startBtn.disabled = false;

startBtn.addEventListener('click', function() {  
    time = prompt("Введите дату в формате YYYY-MM-DD", '2020-05-22');
    money = +prompt("Ваш бюджет на месяц?", '100');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '100');
    }

    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed(2);
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

    expensesBtn.disabled = false;
    optionalExpensesBtn.disabled = false;
    countBtn.disabled = false;
});

expensesBtn.addEventListener('click', function(){
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let QuestionFirst = expensesItem[i].value,
            QuestionSecond = expensesItem[++i].value;

        if ( typeof(QuestionFirst) === 'string'
            && typeof(QuestionFirst) != null
            && typeof(QuestionSecond) != null

            && QuestionFirst != ''
            && QuestionSecond != ''

            && QuestionFirst.length < 50
            && QuestionSecond.length < 50) {

            console.log ("done");

            appData.expenses[QuestionFirst] = QuestionSecond;
            sum += +QuestionSecond;
        } else {
            console.log ("bad result");
            i--;
        }
    }
    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function() {
    for (let i = 0; i <= optionalExpensesItem.length; i++) {
        let questionOptExpenses = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ; ';  
    }
});

countBtn.addEventListener('click', function() {
    if (appData.budget != undefined) {
    
        appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed(2);
        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100 ) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000 ) {
            levelValue.textContent = "Высокий уровень достатка";
        } else {
            levelValue.textContent = "Произошла ошибка";
        }
    } else {
        dayBudgetValue.textContent = "Произошла ошибка";
    }
});

incomeItem.addEventListener('input', function(){
        let items = incomeItem.value;

        if  ((typeof(items)) === 'string'
            && (typeof(items)) != null
            && items != '' ) {

            appData.income = items.split(', ');
            incomeValue.textContent = appData.income;
        }
});

checkSavings.addEventListener('click', function() {
    if(appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }

});

sumValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
        
            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;

            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);     
    }
});

percentValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
        
            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;

            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);     
    }
});

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};

for (let key in appData) {
    console.log('Наша программа включает в себя данные: ' + key + " -" + appData[key]);
}



   // let items = prompt('Что принесёт доп.доход? (Перечислите)', '');
   // appData.income = items.split(', ');
   // appData.income.push(prompt('Может что-то ещё?'));
   // appData.income.sort();
