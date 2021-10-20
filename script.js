let section = document.querySelector('.products-cards')
let moreProducts = document.querySelector('.more')

let currentPage = 2

//Data request
fetch(`https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1`)
    .then((res) => res.json())
    .then((json) => productInfo(json.products));



//Creating cards and entering details
const productInfo = (info) => {

    for (let i = 0; i < info.length; i++) {

        const div = document.createElement('div')
        div.setAttribute('class', 'card')
        section.appendChild(div)

        let image = document.createElement('img')
        image.setAttribute('class', 'card-image')
        div.appendChild(image)
        image.src = `https:${info[i].image}`

        const productName = document.createElement('p')
        productName.setAttribute('class', 'product-name')
        div.appendChild(productName)
        productName.innerHTML = info[i].name;

        const productDescription = document.createElement('p')
        productDescription.setAttribute('class', 'product-description')
        div.appendChild(productDescription)
        productDescription.innerHTML = info[i].description

        const oldPrice = document.createElement('p')
        oldPrice.setAttribute('class', 'old-price')
        div.appendChild(oldPrice)
        oldPrice.innerHTML = `De: R$${info[i].oldPrice}.00`.toString().replace(".", ",")

        const price = document.createElement('p')
        price.setAttribute('class', 'price')
        div.appendChild(price)
        price.innerHTML = `Por: R$${info[i].price}.00`.toString().replace(".", ",")

        const installments = document.createElement('p')
        installments.setAttribute('class', 'installments')
        div.appendChild(installments)
        let installmentsValue = parseFloat(info[i].installments.value)
        installments.innerHTML = `ou ${info[i].installments.count}x de R$${installmentsValue}0`.toString().replace(".", ",")

        const buyButton = document.createElement('button')
        buyButton.setAttribute('class', 'buy-button')
        buyButton.innerText = 'Comprar'
        div.appendChild(buyButton)

        console.log(info.length)

    }
}


//More products
moreProducts.addEventListener('click', () => {
    fetch(`https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${currentPage}`)
    .then((res) => res.json())
    .then((json) => productInfo(json.products));
    currentPage++
})


const isValidCPF = (number) => {
    if (typeof cpf !== "string") return false
    cpf = cpf.replace(/[\s.-]*/igm, '')
    
    if (cpf.length !== 11 || !Array.from(cpf).filter(e => e !== cpf[0]).length) {
        return false
  }

    let sum;
    let rest;
    sum = 0;
    if (number == "00000000000") return false;

    for (i=1; i<=9; i++) sum = sum + parseInt(number.substring(i-1, i)) * (11 - i);
    rest = (sum * 10) % 11;

    if ((rest == 10) || (rest == 11))  rest = 0;
    if (rest != parseInt(number.substring(9, 10)) ) return false;

    sum = 0;
    for (i = 1; i <= 10; i++) sum = sum + parseInt(number.substring(i-1, i)) * (12 - i);
    rest = (sum * 10) % 11;

    if ((rest == 10) || (rest == 11))  rest = 0;
    if (rest != parseInt(number.substring(10, 11) ) ) return false;
    return true;
}