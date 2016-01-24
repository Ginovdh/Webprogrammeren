function nieuwAccount(){
    $("#nieuwAccount").effect("shake");
    var vn = myForm.elements["vn"].value;
    var an = myForm.elements["an"].value;
    var gb = myForm.elements["gb"].value;
    var mail = myForm.elements["mail"].value;
    var ww = myForm.elements["ww"].value;
    var hww = myForm.elements["hww"].value;
    var gbArray = ["Gino", "Hekman", "Koning", "ErikHekman", "ThijsWaardenburg", "Ronald", "RonaldVanEssen"];



    for(var i = 0; i < gbArray.length; i++){

        if (gb == gbArray[i]) {
           
            gb = "correct"
        };

        if (gb == "correct") {
            document.getElementById('antwoord').innerHTML = "De gebruikersnaam is al in gebruik, kies een nieuwe gebruikersnaam."
        }
    }

        
        if (vn == "") {
            document.getElementById('antwoord').innerHTML = "U heeft uw  voornaam niet ingevuld"
        }
        if (an == "") {
            document.getElementById('antwoord').innerHTML = "U heeft uw  achternaam niet ingevuld"
        }
        if (gb == "") {
            document.getElementById('antwoord').innerHTML = "U heeft uw  gebruikersnaam niet ingevuld"
        }
        if (ww == "") {
            document.getElementById('antwoord').innerHTML = "U heeft uw  wachtwoord niet ingevuld"
        }
        if (hww == "") {
            document.getElementById('antwoord').innerHTML = "U heeft uw  wachtwoord niet herhaald"
        }



        
        if (ww === hww) {}  
            else{
                document.getElementById('antwoord').innerHTML = "Uw wachtwoord komt niet overeen"
            }
            if (vn == "Gino" && an == "Hoven" && gb == "correct" && ww == "test" && hww == "test" ) {
                location.href="timeline.html";
            }

        
}
$(document).ready(function(){
    
        
        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#profib').attr('src', e.target.result);
                }

                reader.readAsDataURL(input.files[0]);
            }
        }

        $("#imgInp").change(function(){
            readURL(this);
        });
});