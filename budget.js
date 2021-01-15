

var totalBudget, expenses, income, month, currentDate, date, totalIncome, clearBudget, key

clearBudget = false
totalBudget = 0;
totalIncome = 0
currentIncome = 0
incomeArr = []
expensesArr = []
function Income(description, value) {
    this.description = description
    this.value = value
};

function Expense(description, value, valuePercent) {
    this.description = description
    this.value = value
    this.valuePercent = valuePercent
};
expenses = 0;
date = new Date()
month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
currentDate = month[date.getMonth()] + ' ' + date.getFullYear()

document.querySelector('.budget__title--month').textContent = currentDate
document.querySelector('.budget__value').textContent = '+0.00';
document.querySelector('.budget__income--value').textContent = '+0.00';
document.querySelector('.budget__expenses--value').textContent = '-0.00';
document.querySelector('.budget__expenses--percentage').textContent = '---';
var button = document.querySelector('.add__btn')
var option = document.querySelector('.add__type')
var optionDefault = document.querySelector('.add__type').value
var description = document.querySelector('.add__description').value
var sum = document.querySelector('.add__value').value




button.addEventListener('click', function () {
    if (option.value == "inc") {
        var description = document.querySelector('.add__description').value
        var sum = document.querySelector('.add__value').value

        addIncome(description, sum)
        
    } else if (option.value == "exp") {

        var description = document.querySelector('.add__description').value
        var sum = document.querySelector('.add__value').value
        subExpenses(description, sum)

    }

})









function addIncome(description, value) {
    this.description = description,
        this.value = Number(value)

    totalIncome += this.value
    currentIncome = totalIncome



    incomeArr.push(new Income(this.description, this.value))


    document.querySelector('.budget__value').textContent = '+' + currentIncome.toLocaleString();
    document.querySelector('.budget__income--value').textContent = '+' + totalIncome.toLocaleString();



    template(incomeArr, 'income')



}












function subExpenses(description, value, valuePercent) {
    this.description = description,
        this.value = Number(value)
    this.valuePercent = Number(valuePercent)


    currentIncome -= this.value
    expenses += this.value


    var totalPercent = (expenses * 100) / totalIncome
    var valuePercent = (value * 100) / totalIncome


    expensesArr.push(new Expense(this.description, this.value, valuePercent))

    if (currentIncome > 0) {
        document.querySelector('.budget__value').textContent = '+' + currentIncome.toLocaleString();
    } else {
        document.querySelector('.budget__value').textContent = currentIncome.toLocaleString();
    }

    document.querySelector('.budget__expenses--value').textContent = '-' + expenses.toLocaleString();
    document.querySelector('.budget__expenses--percentage').textContent = totalPercent.toLocaleString() + "%";

    template(expensesArr, 'expenses')







}


var incomeList = document.querySelector('.income__list')
var expenseList = document.querySelector('.expenses__list')

const template = (array, text) => {

    var i

    i = array.length - 1
    

    const markUp =   `  <div class="item clearfix" id="${text}-${i}">
                             <div class="item__description">${array[i].description}</div>
                             <div class="right clearfix">
                                <div class="item__value">+ ${array[i].value}</div>
                                ${(text === 'expenses')?
                                    `<div class="item__percentage"> 
                                        ${(array[i].valuePercent.toFixed(1)).toLocaleString()}% </div>` : ""}
                               
                                <div class="item__delete">
                                    <button  onclick="${()=>deduct(array[i])}" class="item__delete--btn">
                                        <i class="ion-ios-close-outline"></i>
                                    </button>
                                </div>
                             </div>
                        </div>`;


        if(text === 'income'){
            incomeList.insertAdjacentHTML('beforeend', markUp);
        }

        if(text === 'expenses'){
            expenseList.insertAdjacentHTML('beforeend', markUp);
        }
    
       
}

function deduct (i){

    console.log(i)
}




// function template(array, text) {

//     var i

//     i = array.length - 1


//     var incomeList = document.querySelector('.' + text + '__list')
//     var div1 = document.createElement("div");
//     div1.setAttribute('id', 'income-' + i);
//     div1.setAttribute('class', 'item clearfix');
//     incomeList.appendChild(div1)

//     var div2 = document.createElement("div");
//     div2.setAttribute('class', 'item__description');
//     div2.textContent = array[i].description
//     div1.appendChild(div2)

//     var div3 = document.createElement("div");
//     div3.setAttribute('class', 'right clearfix');
//     div1.appendChild(div3)


//     var div4 = document.createElement("div");
//     div4.setAttribute('class', 'item__value');

//     div4.textContent = ((text == 'expenses') ? '- ' : '+ ') + array[i].value.toLocaleString()
//     div3.appendChild(div4)


//     if (text == 'expenses') {

//         var percentage = document.createElement("div");
//         percentage.setAttribute('class', 'item__percentage');

//         answer = array[i].valuePercent.toFixed(1)
//         percentage.textContent = answer.toLocaleString() + '%'

//         div3.appendChild(percentage)

//     }




//     var div5 = document.createElement("div");
//     div5.setAttribute('class', 'item__delete');
//     div3.appendChild(div5)


//     var button = document.createElement("button")

//     div5.appendChild(button)
//     button.setAttribute('class', 'item__delete--btn');
//     var span = document.createElement("i")
//     span.setAttribute('class', 'ion-ios-close-outline');
//     button.setAttribute('id', i);
//     button.appendChild(span)



// }

















