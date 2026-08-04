const increaseButtonEl = document.querySelector(".counter__button--increase");
const decreaseButtonEl = document.querySelector(".counter__button--decrease");
const counterValueEl = document.querySelector(".counter__value");
const resetButtonEl = document.querySelector(".counter__reset-button");


function incrementCounter() {
     //get current value of the counter
    const currentValue = counterValueEl.textContent;

    //convert value to number type
    const currentValueAsNumber = +currentValue;

    //increment by 1
    const newValue = currentValueAsNumber + 1;

    //set counter element with the new value
    counterValueEl.textContent = newValue;
}

function decrementCounter() {
    //get current value of the counter
    const currentValue = counterValueEl.textContent;

    //convert value to number type
    const currentValueAsNumber = +currentValue;

    //decrement by 1
    let newValue = currentValueAsNumber - 1;

    //check if the new value is less than 0
    if (newValue < 0) {
        //if it is, set the new value to 0
        newValue = 0;
    }

    //set counter element with the new value
    counterValueEl.textContent = newValue;
}

increaseButtonEl.addEventListener("click", incrementCounter);


decreaseButtonEl.addEventListener("click", decrementCounter);


resetButtonEl.addEventListener("click", function(){
    //set counter element with the new value  
    counterValueEl.textContent = 0;
});

document.addEventListener("keydown", incrementCounter); 

