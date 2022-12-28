import applePear from "./fruit_data.js";

const productBox = document.querySelector('.product_box')

for(let i=0; i<applePear.length; i++) {
  let productLi = document.createElement('li')
  productLi.setAttribute('class', 'product')

  let productLink = document.createElement('a')
  productLink.setAttribute('href', applePear[i].link)
  productLi.appendChild(productLink)

  let img = document.createElement('div')
  let imgImg = document.createElement('img')
  img.setAttribute('class', 'img')
  img.appendChild(imgImg)
  imgImg.setAttribute('src', applePear[i].img)
  productLink.appendChild(img)

  let text = document.createElement('ul')
  text.setAttribute('class', 'text')
  productLi.appendChild(text)

  let emartLi = document.createElement('li')
  let emartLiText = document.createTextNode(applePear[i].logo)
  emartLi.setAttribute('class', 'emart_mall')
  emartLi.appendChild(emartLiText)
  text.appendChild(emartLi)

  if(applePear[i].delivery != 0) {
    let deliveryLi = document.createElement('li')
    let deliveryLiText = document.createTextNode(applePear[i].delivery)
    deliveryLi.setAttribute('class', 'delivery')
    deliveryLi.appendChild(deliveryLiText)
    text.appendChild(deliveryLi)
  }

  let freshLi = document.createElement('li')
  let freshLiText = document.createTextNode(applePear[i].fresh)
  freshLi.setAttribute('class', 'fresh')
  freshLi.appendChild(freshLiText)
  text.appendChild(freshLi)

  let emartFreshLi = document.createElement('li')
  let emartFreshLiText = document.createTextNode(applePear[i].emartFresh)
  emartFreshLi.setAttribute('class', 'emart_fresh')
  emartFreshLi.appendChild(emartFreshLiText)
  text.appendChild(emartFreshLi)

  let nameLi = document.createElement('li')
  let nameLiText = document.createTextNode(applePear[i].name)
  nameLi.appendChild(nameLiText)
  text.appendChild(nameLi)

  let priceLi = document.createElement('li')
  let priceLiText = document.createTextNode(applePear[i].price)
  priceLi.setAttribute('class', 'price')
  priceLi.appendChild(priceLiText)
  text.appendChild(priceLi)

  let wonLi = document.createElement('li')
  let wonLiText = document.createTextNode(applePear[i].won)
  wonLi.setAttribute('class', 'won')
  wonLi.appendChild(wonLiText)
  text.appendChild(wonLi)

  let saleLi = document.createElement('li')
  let saleLiText = document.createTextNode(applePear[i].sale)
  saleLi.setAttribute('class', 'sale')
  saleLi.appendChild(saleLiText)
  text.appendChild(saleLi)

  let saleWonLi = document.createElement('li')
  let saleWonLiText = document.createTextNode(applePear[i].saleWon)
  saleWonLi.setAttribute('class', 'sale_won')
  saleWonLi.appendChild(saleWonLiText)
  text.appendChild(saleWonLi)

  productBox.appendChild(productLi)

  imgImg.addEventListener('mouseover', () => {
    imgImg.setAttribute('src', applePear[i].imgOn)
  })
  imgImg.addEventListener('mouseout', () => {
    imgImg.setAttribute('src', applePear[i].img)
  })
}