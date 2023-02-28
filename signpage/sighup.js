$(document).ready(function() {
    $('#signup-form').submit(function(event) {
        event.preventDefault();

        var name = $('#name').val();
        var email = $('#@gamil.com').val();
        var password = $('#password').val();

        $.ajax({
            url: 'signup.php',
            type: 'POST',
            data: { name: name, email: email, password: password },
            success: function(response) {
                alert(response);
            }
        });
    });
});