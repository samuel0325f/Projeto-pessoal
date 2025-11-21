function medidas(raio){
    let pi = 3.16 ;
    let area = raio * raio * pi;
    let perimetro = 2 * raio * pi;
    alert (`O perimetro é de ${perimetro}, e a área é de ${area}`);
}
medidas(8);