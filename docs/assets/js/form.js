$('#contribute-form').submit(function(event) {
    event.preventDefault();
    var form = $(this);
    var mailService = "https://xkw3a8hbx0.execute-api.us-east-1.amazonaws.com/Prod/send";
    var name = $("#name").val();
    var email = $("#email").val();
    var subjectEntered = $("#subject").val();
    var messageEntered = $("#messageEntered").val();
    form.find("#submit").fadeOut();
    $.ajax({
      url: mailService,
      data: JSON.stringify({'message':messageEntered,'subject':subjectEntered,'name':name,'email':email}),
      method: "POST",
      contentType: "application/json",
      dataType: 'json'
    }).done(function( data ) {
      form.find(".loading").fadeOut();
      form.find(".sent-message").fadeIn();
      form.trigger("reset");  
    });
   });
   $('#contribute-form input').keydown(function(event){
    $("#submit").fadeIn();
   });