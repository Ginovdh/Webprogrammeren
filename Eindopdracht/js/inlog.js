var i =0;

function inloggen() {

	var gb = myform.elements["gb"].value;
	var ww = myform.elements["ww"].value;
	var gnArray = ["Hekman", "Koning", "ErikHekman", "ThijsWaardenburg", "Ronald", 
	"RonaldVanEssen", "Gino"]

	for(var j=0; j<gnArray.length; j++){
		if(gb == gnArray[j] && ww == "qwerty"){
		location.href="timeline.html";
		}	
	}
			
	if(gb == ""){
		document.getElementById("bericht").innerHTML = "U heeft uw gebruikersnaam niet ingevuld."
		}
	else if(ww == ""){
		document.getElementById("bericht").innerHTML = "U heeft uw wachtwoord niet ingevuld."
		}
	else{
		document.getElementById("bericht").innerHTML = "Uw gebruikersnaam en/of wachtwoord is niet juist."
		$("div").effect("shake");
		i++;
	}
		
	if(i>2){
		document.getElementById("bericht").innerHTML = "U heeft 3x een verkeerd gebruikersnaam en/of wachtwoord ingevuld, u moet 3 minuten wachten."
		$("button").hide();
		$("input").prop('disabled', true);
	}
};
