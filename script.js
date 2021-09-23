let itens = document.querySelectorAll('.percentage-item');
let inputs = document.querySelectorAll("input"); 
let buttonReset = document.querySelector('.reset');
let percentage = 0;
let billValue = 0;
let peopleNumber = 0;

function selectedPercentage() {
    
    itens.forEach(item => {

        item.addEventListener("click", () => {
            itens.forEach(item => {
                item.classList.remove("selected");
            });

            item.classList.toggle('selected');

            getData();
            calculateTip();
        });

});
}

function getData() {
    itens.forEach(item => {
        if(item.classList[item.classList.length -1] === 'selected') {
            if(item.classList[1] === 'custom'){
                percentage = item.value;
            }else{
                percentage = item.innerHTML.split('');
                percentage.splice(percentage.length -1);
                
                percentage = Number(percentage.join(''));
            }
        }
    });
    
    inputs.forEach(input => {
        if(input.name === 'bill'){
            billValue = Number(input.value);
        }
        
        if(input.name === 'people'){
            peopleNumber = Number(input.value);
        }
    })
}

function calculateTip() {
    if(percentage === 0 || billValue === 0 || peopleNumber === 0){
        console.log('Error');
        buttonReset.classList.add('disabled');
    }else{
        let tipAmount = 0;
        let total = 0;
        
        total = (billValue / 100) * percentage;
        tipAmount = total / peopleNumber;
        
        
        document.getElementsByClassName('result-tip-amount')[0].innerHTML = `$${tipAmount.toFixed(2)}`;
        document.getElementsByClassName('result-total')[0].innerHTML = `$${total}`;
        
        buttonReset.classList.remove('disabled');
    }
};

function reset() {
    buttonReset.addEventListener('click', () => {
        window.location.reload();
    });
}


inputs.forEach(input => {
    input.addEventListener('change', () => {
        getData();
        calculateTip();
    })
});

reset();
selectedPercentage();




