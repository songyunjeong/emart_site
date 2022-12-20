$(function() {
  const id = '1234561234567emart';
  let userNumber = '';
  let number = '';

  $('.find_btn').click(function() {
    userNumber = $('.user_number').val();
    number = id.slice(0,13);

    if(userNumber == number) {
      alert('아이디는 [' + id.slice(13,19) +'] 입니다.')
    } else {
      alert('존재하지 않는 회원입니다.')
    }

    $('.user_number').val('').focus();
  })
})