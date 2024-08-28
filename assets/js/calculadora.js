numero1 = Number(prompt("Ingresa un número"))
numero2 = Number(prompt("Ingresa otro numero"))
operacion = prompt("Escribe una operacion matematica: suma, resta, multiplicacion, division, resto, exponenciación")

if (operacion  === "suma"){
    resultado = numero1 + numero2
    console.log("La suma de "+ numero1 + " + " + numero2 + " es: " + resultado)
}else if (operacion  === "resta"){
    resultado = numero1 - numero2
    console.log("La resta de "+ numero1 + " - " + numero2 + " es: " + resultado)
}else if (operacion  === "multiplicacion"){
    resultado = numero1 * numero2
    console.log("La multiplacion de "+ numero1 + " * " + numero2 + " es: " + resultado)
}else if (operacion  === "division"){
    resultado = numero1 / numero2
    console.log("La division de "+ numero1 + " / " + numero2 + " es: " + resultado)
}else if (operacion  === "resto"){
    resultado = numero1 % numero2
    console.log("El resto de "+ numero1 + " % " + numero2 + " es: " + resultado)
}else if (operacion  === "exponenciacion"){
    resultado = numero1 ** numero2
    console.log("La exponenciacion de "+ numero1 + " ** " + numero2 + " es: " + resultado)
}else{
    console.log("Operación invalida")
}