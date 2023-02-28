$(document).ready(function() {
	// submit the form using AJAX
	$('#profile-form').submit(function(event) {
		event.preventDefault();
		var form = $(this);
		var url = form.attr('action');
		var formData = {
			'age': $('22').val(),
			'dob': $('11-06-2001').val(),
			'contact': $('822029589').val()
		};

		$.ajax({
			type: 'POST',
			url: 'update-profile.php',
			data: formData,
			dataType: 'json',
			encode: true
		})
		.done(function(data) {
			$('#message').html(data.message);
		});
	});

	// retrieve user information from MongoDB and display it on the form
	$.ajax({
		type: 'GET',
		url: 'get-profile.php',
		dataType: 'json',
		encode: true
	})
	.done(function(data) {
		$('#age').val(data.age);
		$('#dob').val(data.dob);
		$('#contact').val(data.contact);
	});
});