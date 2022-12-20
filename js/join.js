// like_food_info click_event (관심 카테고리 FOOD)
const likeFoodNo = document.getElementById('like_food_no');

likeFoodNo.addEventListener('click', function() {
  for(let i=1; i<=16; i++) {
    let likeFood = document.getElementById('like_food' + i);

    if(likeFoodNo.checked) {
      likeFood.checked = false;
    } else {
      likeFoodNo.checked = true;
    }
  }
})

for(let i=1; i<=16; i++) {
  let likeFood = document.getElementById('like_food' + i);

  likeFood.addEventListener('click', function() {
    if(likeFood.checked) {
      likeFoodNo.checked = false;
    } else if(document.getElementById('like_food1').checked == false &&
              document.getElementById('like_food2').checked == false &&
              document.getElementById('like_food3').checked == false &&
              document.getElementById('like_food4').checked == false &&
              document.getElementById('like_food5').checked == false &&
              document.getElementById('like_food6').checked == false &&
              document.getElementById('like_food7').checked == false &&
              document.getElementById('like_food8').checked == false &&
              document.getElementById('like_food9').checked == false &&
              document.getElementById('like_food10').checked == false &&
              document.getElementById('like_food11').checked == false &&
              document.getElementById('like_food12').checked == false &&
              document.getElementById('like_food13').checked == false &&
              document.getElementById('like_food14').checked == false &&
              document.getElementById('like_food15').checked == false &&
              document.getElementById('like_food16').checked == false) {
      likeFoodNo.checked = true;
    }
  })
}


// like_life_info click_event (관심 카테고리 LIFE)
const likeLifeNo = document.getElementById('like_life_no');

likeLifeNo.addEventListener('click', function() {
  for(let i=1; i<=13; i++) {
    let likeLife = document.getElementById('like_life' + i);

    if(likeLifeNo.checked) {
      likeLife.checked = false;
    } else {
      likeLifeNo.checked = true;
    }
  }
})

for(let i=1; i<=13; i++) {
  let likeLife = document.getElementById('like_life' + i);

  likeLife.addEventListener('click', function() {
    if(likeLife.checked) {
      likeLifeNo.checked = false;
    } else if(document.getElementById('like_life1').checked == false &&
              document.getElementById('like_life2').checked == false &&
              document.getElementById('like_life3').checked == false &&
              document.getElementById('like_life4').checked == false &&
              document.getElementById('like_life5').checked == false &&
              document.getElementById('like_life6').checked == false &&
              document.getElementById('like_life7').checked == false &&
              document.getElementById('like_life8').checked == false &&
              document.getElementById('like_life9').checked == false &&
              document.getElementById('like_life10').checked == false &&
              document.getElementById('like_life11').checked == false &&
              document.getElementById('like_life12').checked == false &&
              document.getElementById('like_life13').checked == false) {
      likeLifeNo.checked = true;
    }
  })
}


// #all_chk #chk click_event (가입 약관 동의)
const allChk = document.getElementById('all_chk');
const chk1 = document.getElementById('chk1');
const chk2 = document.getElementById('chk2');
const chk3 = document.getElementById('chk3');

allChk.addEventListener('click', function() {
  if(allChk.checked) {
    chk1.checked = true;
    chk2.checked = true;
    chk3.checked = true;
  } else {
    chk1.checked = false;
    chk2.checked = false;
    chk3.checked = false;
  }
})
chk1.addEventListener('click', function() {
  if(chk1.checked == false) {
    allChk.checked = false;
  } else if(chk2.checked && chk3.checked) {
    allChk.checked = true;
  }
})
chk2.addEventListener('click', function() {
  if(chk2.checked == false) {
    allChk.checked = false;
  } else if(chk1.checked && chk3.checked) {
    allChk.checked = true;
  }
})
chk3.addEventListener('click', function() {
  if(chk3.checked == false) {
    allChk.checked = false;
  } else if(chk1.checked && chk2.checked) {
    allChk.checked = true;
  }
})





$(function() {
  // #id_check_btn click_event (아이디 중복확인 버튼)
  let userId = '';
  let idData = '';
  let userPw = '';
  let userPwRe = '';

  $('#id_chk_btn').click(function() {
    userId = $('#user_id').val();
    idData = new Array('greencomputer', 'redcomputer', 'bluecomputer', 'yellowcomputer', 'blackcomputer');

    for(let i in idData) {
      if(userId == idData[i]) {
        alert('사용할 수 없는 아이디 입니다.');
        $('#user_id').val('').focus();
        break;
      } else if(i == 4) {
        alert('사용가능한 아이디입니다.')
        $('#user_pw').focus();
      } 
    }
  })


  // #pw_chk_btn click_event (비밀번호 재확인 버튼)
  $('#pw_chk_btn').click(function() {
    userPw = $('#user_pw').val();
    userPwRe = $('#user_pw_re').val();

    if(userPw == userPwRe) {
      alert('사용할 수 있습니다. 비밀번호가 일치합니다.');
    } else {
      alert('사용할 수 없습니다. 비밀번호가 다릅니다.');
    }
  })


  //.join_btn click_event (회원가입 버튼)
  $('.join_btn').click(function() {
    alert('회원가입 되었습니다.')
  })
})