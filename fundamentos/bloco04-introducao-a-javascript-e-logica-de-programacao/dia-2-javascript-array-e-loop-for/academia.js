
function optionsMenu(number){
    switch (number) {
        case 1:
            console.log("Trybe Lanche Feliz");
            break;
        case 2:
            console.log("McTrybe");
            break;
        case 3:
            console.log("TrybeWooper");
            break;
        case 4:
            console.log("X-Trybe");
            break;
        case 5:
            console.log("Triploe Trybe com JS")
            break;
        default:
            console.log("nao temos esta opção ainda")
            break;
    }
        // Desenvolva seu código nessa função
}
module.exports = optionsMenu
optionsMenu(5)

function basalMetabolicRate(age, sex, weight, height){
    if(sex="M") {
    let BMR= (height*6.25) + (weight*9.99)- (age*4.92)-5;
    console.log("A taxa metabolica basal é:"+ BMR +" Kcal");    
    }

    if (sex="F"){
    let BMR= (height *6.25) + (81*9.99)- (36*4.92)-161;
    console.log("a taxa metabolica é:" + BMR +"Kcal");    
    }
}

module.exports = basalMetabolicRate;
basalMetabolicRate(36, "M", 81,178);
