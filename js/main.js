// lnb_brand mouseover_event
const brand = $('.lnb02 .brand');
const brandSheet = $('.lnb02 .brand_sheet');

brand.mouseover(function() {
  brandSheet.css('display', 'block');
})
brand.mouseout(function() {
  brandSheet.css('display', 'none');
})
brandSheet.mouseover(function() {
  brandSheet.css('display', 'block');
})
brandSheet.mouseout(function() {
  brandSheet.css('display', 'none');
})


// delivery mouseover_event
const delivery = $('.header03 .delivery a');
const deliverySheet = $('.header03 .delivery_sheet');

delivery.mouseover(function() {
  deliverySheet.css('display', 'block');
})
delivery.mouseout(function() {
  deliverySheet.css('display', 'none');
})
deliverySheet.mouseover(function() {
  deliverySheet.css('display', 'block');
})
deliverySheet.mouseout(function() {
  deliverySheet.css('display', 'none');
})



// obanjang_box date_object
const time = $('.obanjang_box .sub_title span');

function timer() {
  let d = new Date();

  let hour = String(d.getHours()).padStart(2, '0');
  let minute = String(d.getMinutes()).padStart(2, '0');
  let second = String(d.getSeconds()).padStart(2, '0');
  
  time.text(hour + ':' + minute + ':' + second);
}

timer();
setInterval(timer, 1000);


// top_btn click_event
const topBtn = $('.top_btn');

topBtn.click(function() {
  $('html, body').stop().animate({scrollTop: 0}, 1000);
})