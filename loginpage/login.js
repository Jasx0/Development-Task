$(document).ready(function() {
    $('#login-form').submit(function(event) {
      event.preventDefault();
      
      var username = $('name').val();
      var password = $('password').val();
      
      $.ajax({
        url: 'login.php',
        method: 'POST',
        data: {
          username: username,
          password: password
        },
        success: function(response) {
          if (response === 'success') {
            localStorage.setItem('username', username);
            window.location.href = 'profile.html';
          } else {
            alert('Invalid username or password!');
          }
        },
        error: function(jqXHR, textStatus, errorThrown) {
          alert('Error: ' + textStatus + ' - ' + errorThrown);
        }
      });
    });
  });