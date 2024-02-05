$(document).ready(() => {
    $('form').submit((e) => {
        e.preventDefault();
        
        let taskName = $('#task-name').val()
        
        $(`<li>${taskName}</li>`).appendTo('ul')

        $('#task-name').val('')
    })
    
    $(".task-list").on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
})