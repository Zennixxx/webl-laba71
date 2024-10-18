$(document).ready(function(){
    function getRandomJoke() {

        jQuery.ajax({
            url: 'jokes.txt',
            dataType: 'text',
            success: function(data) {
                let jokes = data.split('\n');
                let randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
                $('#joke-display').text(randomJoke);
            },
            error: function() {
                $('#joke-display').text('Не вдалося завантажити жарти!');
            }
        });
    }
    $('#get-joke').on('click', function() {
        getRandomJoke();
    });
});
