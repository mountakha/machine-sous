
var historique = JSON.parse(localStorage.getItem("historique") || "[]");
console.log(historique);
function machineASous(){
	/* Récupération du crédit et du score. Il est fait à chaque fois
	car cela change en fonction des images qui ont été affichées au
	tirage précédent */
	var creditJoueur = document.getElementById("credit").value;
	var highscore = document.getElementById("highscore").value;
   

	
	// Création de 4 chiffres aléatoires de 1 à 4
	var w = Math.floor(Math.random()*4);
	var x = Math.floor(Math.random()*4);
	var y = Math.floor(Math.random()*4);
    var z = Math.floor(Math.random()*4);
	
	// Modification de la source des images à l'aide des 4 nombres aléatoires
	document.getElementById("img_sous_1").src = 'img_' + w + '.png';
	document.getElementById("img_sous_2").src = 'img_' + x + '.png';
	document.getElementById("img_sous_3").src = 'img_' + y + '.png';
    document.getElementById("img_sous_4").src = 'img_' + z + '.png';
    
    document.getElementById("img_sous_1").className = "fadeInDown animated";
    document.getElementById("img_sous_2").className = "fadeInDown animated";
    document.getElementById("img_sous_3").className = "fadeInDown animated";
    document.getElementById("img_sous_4").className = "fadeInDown animated";
    
    setTimeout(function(){
        var i = 0
        if(i=1){
        if(document.getElementById("img_sous_1").className == "fadeInDown animated"){
    document.getElementById("img_sous_1").removeAttribute("class");
	document.getElementById("img_sous_2").removeAttribute("class");
	document.getElementById("img_sous_3").removeAttribute("class");
    document.getElementById("img_sous_4").removeAttribute("class");
    }}
        i++;
    },1100);
	
	// Le joueur perd 1 crédit a chaque GO
	creditJoueur -= 1;
   	
   
    
    historique.push(
    {
    	w : w ,
		x : x ,
		y : y ,
		z : z
    });
    localStorage.setItem("historique",JSON.stringify(historique));
    
    console.log('localStorage.getItem("historique")',localStorage.getItem("historique"));
    
    
    

            
            
            //4 signes égaux
	if(w == x && x == y  && y == z){
	   creditJoueur+= 11;
        alert('Jackpot + 10 crédits');
	}else 
	// 3 signes égaux
	if(w == x && x == y || w == x && x == z || x == y && y == z|| y == z && z == w){
		creditJoueur += 6;
	}else 
	
	// 2 signes égaux
	if(w == x || w == y || w == z || x == y || x == z || y == z){
		creditJoueur += 0;
       
	}else
    
    if(w != x && w != y && w != z && x != y && x != z && y != z){
        creditJoueur -= 10
    }else
        

	if(creditJoueur > highscore){
		highscore = creditJoueur;
	}
    
    if(creditJoueur <= 0){
        $("button[id='spin']").attr("disabled", "disabled")
       alert('Plus de crédits');

    }

	document.getElementById("credit").value = creditJoueur;
	document.getElementById("highscore").value = highscore;

    
    
}
