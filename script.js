
$('#hide button').click(function() {
    $('#hide p').hide('slow');
})

$('#show button').click(function() {
    $('#hide p').show('slow');
})

$('#toggle button').click(function() {
    $('#toggle p').toggle();
})

$('#slide_down button').click(function(){
    $('#slide_down div').slideDown();
})

$('#fade_in button').click(function(){
    $('#fade_in p').fadeIn();
})

$('#add_class button').click(function(){
    $('#add_class p').css('background-color','gold');
})

$('#after button').click(function(){
    $('#after p').after('thing!');
})

$('#append button').click(function(){
    $('#append h1').append('-amonium!');
})

$('#text button').click(function(){
    $('#text p').text('TOO BAD! HAVE A GREAT DAY!');
})