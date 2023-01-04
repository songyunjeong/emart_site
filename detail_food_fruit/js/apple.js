const bigImg = document.querySelector('#product_img')

document.querySelector('#product_img_small1').addEventListener('click', () => {
  bigImg.setAttribute('src', './images_apple/apple_img_02.jpg')
})

document.querySelector('#product_img_small2').addEventListener('click', () => {
  bigImg.setAttribute('src', './images_apple/apple_img_03.jpg')
})