let section = document.querySelector('.products-cards')
let moreProducts = document.querySelector('.more')

let currentPage = 1
const url = `https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${currentPage}`

//Data request
fetch(url)
    .then((res) => res.json())
    .then((json) => productInfo(json.products));
    


//Creating cards and entering details
const productInfo = (info) => {
    
    for(let i = 0; i < info.length; i++){

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
        installments.innerHTML = `ou ${info[i].installments.count}x de R$${info[i].installments.value}0`.toString().replace(".", ",")
        
        const buyButton = document.createElement('button')
        buyButton.setAttribute('class', 'buy-button')
        buyButton.innerText = 'Comprar'
        div.appendChild(buyButton)

        console.log(info.length)

    }
}


