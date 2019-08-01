$(document).ready(function(){
    $('#addItem').click(function(){
        let input = $('input').val()
        //storing the input 
        let newRow = `<tr>
                        <td><button class="del">X</button><td>
                        <td>${input}</td>    
                    </tr>`;
    $('#row').append(newRow);                
    })

$('#row').on('click', 'button', function(){
    let row = $(this).closest('tr');
    row.remove();
})

})


