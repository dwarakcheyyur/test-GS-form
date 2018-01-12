var $form = $('form.contactForm'),
    url = 'https://script.google.com/a/education.cloudreign.in/macros/s/AKfycbxHiX2zzZwsPJtNmsiCWgCG-GvjHNaQwClAeswvlUr5FgZRPZ4/exec'

$('#submit').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject(),
    success: function(msg){
        console.log("success");
    }
  })
})