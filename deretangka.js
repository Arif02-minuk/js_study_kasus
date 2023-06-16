function deretAngka(n) {
    var hasil = " ";

    for (var x = 1; x <= n; x++){
        if (x % 3 === 0) {
            hasil += 'NIO' + " "
        } else if (x % 5 === 0) {
            hasil += "mic" + " "
        } else {
            hasil += x +" "
        }
    }
    return hasil
}

console.log(deretAngka(10))
console.log(deretAngka(20))
console.log(deretAngka(30))