$(document).ready(function(){
  $('.warp_login').on('click', loginBtn);
  $('.warp_signup').on('click', signupBtn);
  $('.get_user_list').on('click', function() {
    $.ajax({
      url: 'http://localhost:3000/user/',
      success: function(result) {
        console.log(result)
      }
    })
  });


  $('.signup').on('click', function() {
    var id = $('.signup_id').val();
    var password = $('.signup_pw').val();
    var username = $('.signup_name').val();

    $.ajax({
      url: 'http://localhost:3000/user/signup',
      method: 'POST',
      dataType: 'json',
      data: {
        id: id,
        password: password,
        username: username
      },
      success: function(result) {
        console.log('succeed! ', result);
      }
    })
  });
  $('.login').on('click', function(){
    var id = $('.login_id').val();
    var password = $('.login_pw').val();

    $.ajax({
      url: 'http://localhost:3000/user/login',
      method: 'POST',
      dataType: 'json',
      data:{
        id: id,
        password: password
      },
      success: function(result) {
        console.log('succeed! ', result);
      }
    })
  });
});


function loginBtn() {
  $('.signup_wrap').css("display", "none");
  $('.login_wrap').css("display", "block");
}

function signupBtn() {
  $('.login_wrap').css("display", "none");
  $('.signup_wrap').css("display", "block");
}