$(function() {
  const id = 'emart';
  const pw = '12345612345671234';
  let userId = '';
  let userNumber = '';
  let number = '';
  const findBtn = ('.find_btn');

  $(findBtn).click(function() {
    userId = $('.user_id').val();
    userNumber = $('.user_number').val();
    number = pw.slice(0,13);

    if(userNumber == number) {
      if(userId == id) {
        alert('비밀번호는 [' + pw.slice(13,19) +'] 입니다.')
      } else {
        alert('아이디가 틀렸습니다.')
      }
    } else {
      alert('존재하지 않는 회원입니다.')
    }

    $('.user_id').val('').focus();
    $('.user_number').val('');
  })
})