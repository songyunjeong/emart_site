$(function() {
  let id = 'emart';
  let pw = '1234';

  let userId = '';
  let userPw = '';
  let count = 0;
  

  $('.btn').click(function() {
    for(let i=1; ; i++) {
      userId = $('#user_id').val();
      userPw = $('#user_pw').val();

      count++;      
      let chance = 5 - count;
      
      if(id == userId && pw == userPw) {
        alert(userId + '님 환영합니다.');
        window.close();
        break;
      } else if(id == userId) {
        if(count === 5) {
          alert('계정보호 되었습니다. 고객센터에 문의하세요.');
          window.close();
        } else {
          alert('비밀번호가 틀렸습니다. ' + chance + '회 남음. (5회 오류 시 계정보호 처리됨.)');
        }
        break;
      } else {
        alert('정보가 없습니다.');
        $('#user_id').val('').focus();
        $('#user_pw').val('');
        break;
      }      
    }
  }) //.btn_login click_event
})