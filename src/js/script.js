let startButton = document.getElementById("start"),
    budgetValue = document.querySelector(".budget-value"),
    daybudgetValue = document.querySelector(".daybudget-value"),
    levelValue = document.querySelector(".level-value"),
    expensesValue = document.querySelector(".expenses-value"),
    optionalexpensesValue = document.querySelector(".optionalexpenses-value"),
    incomeValue = document.querySelector(".income-value"),
    monthsavingsValue = document.querySelector(".monthsavings-value"),
    yearsavingsValue = document.querySelector(".yearsavings-value"),
    expensesItem = document.getElementsByClassName("expenses-item");

let expensesItemBtn = document.getElementsByTagName("button")[0],
    optionalexpensesBtn = document.getElementsByTagName("button")[1],
    countBudgetBtn = document.getElementsByTagName("button")[2],
    optionalexpensesItem = document.getElementsByClassName("optionalexpenses-item"),
    chooseIncome = document.querySelector(".choose-income"),
    savings = document.querySelector("#savings"),
    chooseSum = document.querySelector("#sum"),
    percent = document.querySelector("#percent"),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue= document.querySelector(".day-value"),
    expenses = document.querySelector(".expenses"),
    budgetRashodvalue = document.querySelector(".budgetRashodvalue");
  

let money,time;

startButton.addEventListener("click", function(){
    time= prompt("Введите дату в формате YYYY-MM-DD");
    money = +prompt("Ваш бюджет на месяц?");
    

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
    appData.allMoney = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});
expensesItemBtn.addEventListener("click", function() {
    let sum =0;
        for ( let i =0; i < expensesItem.length; i ++) {
            let a = expensesItem[i].value,
                b = expensesItem[++i].value;
            if (typeof(a)=== "string" && (typeof(a) != null) && (typeof(b) != null) && (a != "") && (b != "") && (a.length < 55) && (b.length < 50)) {        
                console.log("done");
                appData.expenses[a] = b;
                sum+= +b;
            } else {
                i= i-1;
            }
        }
        expensesValue.textContent = sum.toFixed();    
});
optionalexpensesBtn.addEventListener("click", function(){
    for (i=0; i<=optionalexpensesItem.length; i++) {
            let opt = optionalexpensesItem[i].value;
            appData.optaonalExpenes[i]= opt;
            optionalexpensesValue.textContent += appData.optaonalExpenes[i] + " ";   
        }
});

countBudgetBtn.addEventListener("click", function(){
    if (appData.allMoney != undefined) {       
        appData.moneyPerDay = (appData.allMoney- +expensesValue.textContent/30).toFixed(1);
    daybudgetValue.textContent = appData.moneyPerDay;
    if (appData.moneyPerDay < 100) {
        levelValue.textContent = "Минимальный уровень достатка";
    }
    else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        levelValue.textContent = "Средний чупчик";
    }
    else if(appData.moneyPerDay > 2000) {
        levelValue.textContent ="Высокий";
    }
    else {
        levelValue.textContent = "Ошибочка";
    }
    } else {
        daybudgetValue.textContent = "Произошла ошибка мужик";
    }   
});

chooseIncome.addEventListener("input", function(){
    let items = chooseIncome.value;
        appData.income = items.split(", ");
        incomeValue.textContent = appData.income; 
});

savings.addEventListener("click", function(){
    if (appData.savings == true){
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});
chooseSum.addEventListener("input", function(){
    if (appData.savings == true) {
        let summ = +chooseSum.value,
            prosent = +percent.value;
            appData.monthIncome = summ/100/12*prosent;
            appData.yearIncome = summ/100*prosent;
            yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
            monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
    }
});
percent.addEventListener("input", function(){
    if (appData.savings == true) {
        let summ = +chooseSum.value,
            prosent = +percent.value;
            appData.monthIncome = summ/100/12*prosent;
            appData.yearIncome = summ/100*prosent;
            yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
            monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
    }
});

var appData = {
    allMoney: money,
    timeData: time,
    expenses: {},
    income: [],
    optaonalExpenes: {},
    savings: false,
};


