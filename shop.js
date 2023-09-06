/*déclaration des variables*/
let prix=document.querySelectorAll(".price")
let nombreChoisi=document.querySelectorAll(".product-number")
let addition=document.getElementById("addition")
let add=document.querySelectorAll(".add")
let minus=document.querySelectorAll(".minus")

calcul()

/*permet, pour le nombre d'éléments dans le tableau prix(on part du postulat 
qu'il y autant d'éléments dans le tableau prix que dans le tableau nombreChoisi), 
de multiplier la quantité (.product-number) par le prix (.price) 
puis d'y additionner le résultat total. Permet ensuite d'afficher 
le résultat dans le span situé dans le HTML*/
function calcul(){
    let resultat=0
    for(let i=0; i<prix.length; i++){
        let prixEnCours=parseFloat(nombreChoisi[i].innerHTML)*parseFloat(prix[i].innerHTML);
        resultat+=prixEnCours
    }
    addition.innerHTML=resultat.toFixed(2);
}



/*Pour le bouton plus*/
add.forEach(element => {
    element.addEventListener("click", function(e){
        let parent=e.target.closest(".quantity");
        let destination=parent.querySelector(".product-number");
        let montant=parseFloat(destination.innerHTML);
        montant++;
        destination.innerHTML=montant;
        console.log(typeof(destination.innerHTML));
        calcul();
    })
})

/*pour le bouton moins*/
minus.forEach(element => {
    element.addEventListener("click", function(e){
            let parent=e.target.closest(".quantity");
            let destination=parent.querySelector(".product-number");
            let montant=parseFloat(destination.innerHTML);
            if (montant>0){
                montant--;
                destination.innerHTML=montant;
                calcul();
            }
    })
})