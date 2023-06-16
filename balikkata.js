function balikKata(kata) {
    let word = "";
    for (var i = kata.length-1 ; i >= 0; i--){
        word += kata[i];

    }
    return word;
}
console.log(balikKata("Niomic!"));
console.log(balikKata("Javascript"));
console.log(balikKata("alohahola"));
console.log(balikKata("Jawa_Barat"));