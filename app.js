let result = document.getElementById("result");
let result2 = document.getElementById("result2");

function MaFonction(...Myvalues) {
    result.innerHTML = "Bonjour ";
    for (let values of Myvalues) {
        result.innerHTML += values + ", ";
    }
    result.innerHTML = result.innerHTML.trim().slice(0, -1);
}

MaFonction("Pierre", "Paul", "Jacque");
MaFonction("Pierre", "Paul", "Jacque", "José", "Fernand");

function MonCalcul(...myNumber) {
    let somme = 0;
    for (let number of myNumber) {
        somme += number;
    }
    return parseInt(somme);
}

result2.innerHTML = MonCalcul(4,5,6,8,0,4) + "<br/>";
result2.innerHTML += MonCalcul(5,8,12) + "<br>";
result2.innerHTML += MonCalcul(5,7,3,6,2,4,0,19);

function MonCalculMultiply(...myNumber) {
    let somme = 0;
    for (let number of myNumber) {
        somme += number;
    }
    return parseInt(somme*11.76);
}
let creaDiv = document.createElement("div");
creaDiv.innerHTML += MonCalculMultiply(4,5,8,3) + "<br>";
document.body.append(creaDiv);
