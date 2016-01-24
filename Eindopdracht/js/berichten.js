$(document).ready(function(){

$(".addChatBericht").click(function() {
    var input = $("#inputChatBericht").val();
    
    var inputChatIsEmpty = $.trim($('#inputChatBericht').val());

    if(inputChatIsEmpty.length !== 0) {
        var chatbericht = "<div class='chatbericht_right'><div class='omschrijving'>Gino zegt: <br>"+input+"</div></div>";
        $("#berichtenvenster").append(chatbericht);

    $("#inputChatBericht").val('');
    $("#error").text('');
} else {
    $("#error").text('Het veld is niet ingevuld.');
}
});


});
