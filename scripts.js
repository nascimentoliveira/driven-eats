let itens = 0;
let foodOrder = [[], [], []]

function checkItems() {
    const button = document.querySelector(".bottom-bar button");
    const message = button.querySelector("span");
    
    if (itens === 3) {
        message.innerHTML = "Fechar pedido";
        button.classList.add("selected");
    } else {
        message.innerHTML = "Selecione os 3 itens para fechar o pedido";
        button.classList.remove("selected");
    }

}

function selectMeal(option) {

    const selected = document.querySelector(".meal .selected");

    foodOrder[0][0] = option.querySelector("h1").innerHTML;
    foodOrder[0][1] = option.querySelector("h2").innerHTML;
    foodOrder[0][2] = option.querySelector("h3").innerHTML;

    if (option.classList.contains("selected")) {
        option.classList.remove('selected');
        itens--;
    } else {

        if (selected !== null) {
            selected.classList.remove('selected');
            itens--;
        }
        option.classList.add("selected");
        itens++;
    }
    checkItems();
}

function selectDrink(option) {

    const selected = document.querySelector(".drink .selected");

    foodOrder[1][0] = option.querySelector("h1").innerHTML;
    foodOrder[1][1] = option.querySelector("h2").innerHTML;
    foodOrder[1][2] = option.querySelector("h3").innerHTML;
    
    if (option.classList.contains("selected")) {
        option.classList.remove('selected');
        itens--;
    } else {

        if (selected !== null) {
            selected.classList.remove('selected');
            itens--;
        }
        option.classList.add("selected");
        itens++;
    }
    checkItems();
}

function selectDessert(option) {

    const selected = document.querySelector(".dessert .selected");

    foodOrder[2][0] = option.querySelector("h1").innerHTML;
    foodOrder[2][1] = option.querySelector("h2").innerHTML;
    foodOrder[2][2] = option.querySelector("h3").innerHTML;
    
    if (option.classList.contains("selected")) {
        option.classList.remove('selected');
        itens--;
    } else {

        if (selected !== null) {
            selected.classList.remove('selected');
            itens--;
        }
        option.classList.add("selected");
        itens++;
    }
    checkItems();
}

function priceCalculator(){
    price1 = Number(foodOrder[0][2].slice(2).replace(',', '.'));
    price2 = Number(foodOrder[1][2].slice(2).replace(',', '.'));
    price3 = Number(foodOrder[2][2].slice(2).replace(',', '.'));
    price = price1 + price2 + price3;
    return "R$ " + price.toFixed(2).replace('.', ',');
}

function resume() {
    if (itens === 3) {
        const site = document.querySelector(".checkout");
        site.classList.add("resume");
        let itens = site.querySelector(".resume-itens :nth-child(2)");
       
        itens.querySelector("h2").innerHTML = foodOrder[0][1];
        itens.querySelector("h3").innerHTML = foodOrder[0][2];
        itens = site.querySelector(".resume-itens :nth-child(3)");
        itens.querySelector("h2").innerHTML = foodOrder[1][1];
        itens.querySelector("h3").innerHTML = foodOrder[1][2];     
        itens = site.querySelector(".resume-itens :nth-child(4)");
        itens.querySelector("h2").innerHTML = foodOrder[2][1];
        itens.querySelector("h3").innerHTML = foodOrder[2][2];
        itens = site.querySelector(".resume-itens :nth-child(5)");
        itens.querySelector("h1:nth-child(2)").innerHTML = priceCalculator();
    }
}

function revision(){
    const site = document.querySelector(".checkout");
    site.classList.remove("resume");
}

function request(){
    let name = prompt("Qual é o seu nome?");
    let address = prompt("Qual é o seu endereço?");

    if (name === null){
        name = "Não informado";
    }

    if (address === null){
        address = "Não informado";
    }

    let str = `Olá, gostaria de fazer o pedido:\n`;
    str += `- Prato: ${foodOrder[0][0] + " - " + foodOrder[0][1]}\n`;
    str += `- Bebida: ${foodOrder[1][0] + " - " + foodOrder[1][1]}\n`;
    str += `- Sobremesa: ${foodOrder[2][0] + " - " + foodOrder[2][1]}\n`;
    str += `Total: ${priceCalculator()}\n\n`;
    str += `Nome: ${name}\n`;
    str += `Endereço: ${address}\n`;
    const a = document.querySelector(".checkout a");
    a.target="_blank"
    a.href="https://wa.me/?text=" + encodeURIComponent(str);
}
