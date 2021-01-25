$(document).ready(function(){
  $('.warp_login').on('click', loginBtn);
  $('.warp_signup').on('click', signupBtn);
  $('.warp_content').on('click', contentBtn);
  $('.get_post_list').on('click', showPostlist);

  /* get user list */
  $('.get_user_list').on('click', function() {
    $.ajax({
      url: 'http://localhost:3000/user/user_list',
      success: function(result) {
        console.log(result)
      }
    })
  });

  /* get post list */
  $('.get_post_list').on('click', function() {
    $.ajax({
      url: 'http://localhost:3000/user/post_list',
      success: function(result) {
        createTable(result.data)
      }
    })
  });
  /* sign up */
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
  /* login */
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
        alert(result.data)
      }
    })
  });
  /* submit post */
  $('.submit_post').on('click', function(){
    var title = $('.title').val();
    var stitle = $('.small_title').val();
    var content = $('.content_area').val();

    $.ajax({
      url: 'http://localhost:3000/user/post',
      method: 'POST',
      dataType: 'json',
      data: {
        title: title,
        small_title: stitle,
        content: content
      },
      success: function (result){
        console.log('succeed! ', result);
      }
    })
  })
});
/* create table fuc */
function createTable(data)
{
  if(!data || !data.length) return

  var dataTitle = Object.keys(data[0]);
  var html = '';

  console.log(data)

  /* head */
  html += '<thead>';
  html += '  <tr>';
  for(var i=0; i<dataTitle.length; i++) {
    html += '    <th>' + dataTitle[i] + '</th>';
  }
  html += '  </tr>';
  html += '</thead>';
  /* head */

  /* body */
  html += '<tbody>';
  for(var j=0; j<data.length; j++) {
    html += '  <tr>';

    var dataValue = Object.values(data[j]);
    for(var k=0; k<dataValue.length; k++) {
      html += '    <td>' + dataValue[k] + '</td>';
    }
    html += '  </tr>';
  }
  html += '</tbody>';
  /* body */

  $('#post_list').empty();
  $('#post_list').append(html);
}
/* disappear post list */
function disPostlist()
{
  $('post_list_wrap').css("display", "none");
}
/* post list */
function showPostlist()
{
  $('.signup_wrap').css("display", "none");
  $('.content_wrap').css("display", "none");
  $('.login_wrap').css("display", "none");
  $('.post_list_wrap').css("display", "block");
}
/* login btn */
function loginBtn() {
  $('.post_list_wrap').css("display", "none");
  $('.signup_wrap').css("display", "none");
  $('.content_wrap').css("display", "none");
  $('.login_wrap').css("display", "block");
}
/* sign up btn */
function signupBtn() {
  $('.post_list_wrap').css("display", "none");
  $('.login_wrap').css("display", "none");
  $('.content_wrap').css("display", "none");
  $('.signup_wrap').css("display", "block");
}
/* content btn */
function contentBtn() {
  $('.content_wrap').css("display", "block");
  $('.login_wrap').css("display", "none");
  $('.signup_wrap').css("display", "none");
  $('.post_list_wrap').css("display", "none");
}