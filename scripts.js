let itens = 0;

function checkItems() {
    const button = document.querySelector(".bottom-bar .button");
    const message = button.querySelector("span");
    
    if (itens === 3) {
        message.innerHTML = "Fechar pedido";
        button.classList.add("selected")
    }else{
        message.innerHTML = "Selecione os 3 itens para fechar o pedido";
        button.classList.remove("selected")
    }

}

function selectMeal(option){
    const meal = option.querySelector("h1");
    const comp_meal = option.querySelector("h2");
    const price = option.querySelector("h3");
    
    const selected = document.querySelector(".meal .selected");

    if (option.classList.contains("selected")) {
        option.classList.remove('selected');
        itens--;
    }else{
        if (selected !== null) {
            selected.classList.remove('selected');
            itens--;
        }
    
        option.classList.add("selected");
        itens++;
    }
    checkItems();
}

function selectDrink(option){
    const drink = option.querySelector("h1");
    const comp_drink = option.querySelector("h2");
    const price = option.querySelector("h3");
    
    const selected = document.querySelector(".drink .selected");

    if (option.classList.contains("selected")) {
        option.classList.remove('selected');
        itens--;
    }else{
        if (selected !== null) {
            selected.classList.remove('selected');
            itens--;
        }
    
        option.classList.add("selected");
        itens++;
    }
    checkItems();
}


function selectDessert(option){
    const dessert = option.querySelector("h1");
    const comp_dessert = option.querySelector("h2");
    const price = option.querySelector("h3");
    
    const selected = document.querySelector(".dessert .selected");
    
    if (option.classList.contains("selected")) {
        option.classList.remove('selected');
        itens--;
    }else{
        if (selected !== null) {
            selected.classList.remove('selected');
            itens--;
        }
    
        option.classList.add("selected");
        itens++;
    }
    checkItems();
}