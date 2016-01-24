$(document).ready(function(){
    
        
        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#profip').attr('src', e.target.result);
                }

                reader.readAsDataURL(input.files[0]);
            }
        }

        $("#imgInp").change(function(){
            readURL(this);
        });
});


$(document).ready(function(){


$(".addBericht").click(function() {
    var input = $("#inputBericht").val();

    var inputIsEmpty = $.trim($('#inputBericht').val());

    if(inputIsEmpty.length !== 0) {
        var bericht = "<div class='bericht'><div class='omschrijving'><p> Gino van de Hoven - Netflixer </p>"+input+"</div><div class='waardering'><div class='likes'>0</div><div class=''><a href='#' class='removeBericht'>Verwijder bericht</a><button class='addLike'>LIKE!</button></div></div><div class='addComments'><input type='text' class='inputComment' placeholder='Reageer op dit bericht ..'/><button class='addComment'>Reageer op dit bericht</button></div><div class='comments'></div>";
        $("#berichten").append(bericht);
    
    $("#inputBericht").val('');
    $("#error").text('');
} else {
    $("#error").text('Het veld is niet ingevuld.');
}
});


$("body").on("click", ".addLike", function(){
    var likes = $(this).parent().siblings(".likes").text();
    likes++;
    $(this).parent().siblings(".likes").text(likes);
});


$("body").on("click", ".addComment", function(){
    var input = $(this).siblings(".inputComment").val();

    var inputCommentIsEmpty = $.trim($(this).siblings(".inputComment").val());

    if(inputCommentIsEmpty.length !== 0) {
        var comment = "<div class='comment'><div class='message'>"+input+"</div><div class='commentControl'><a href='#' class='removeComment'>Verwijder</a></div></div>";
        $(this).parent().siblings(".comments").append(comment);

        $(this).siblings(".inputComment").val('');
        $("#error").text('');
    } else {
        $("#error").text('Het veld is niet ingevuld.');
    }
});             


$("body").on("click", "a.removeComment", function(){
    $(this).closest('.comment').remove();
});



$("body").on("click", "a.removeBericht", function(){
    $(this).closest('.bericht').remove();
});

    
});


        


