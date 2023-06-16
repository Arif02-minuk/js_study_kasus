function panggilNestedArray(value) {
    let hasil1 = [];
    let hasil2 = [];
    let hasil3 = [];
    let hasil4 = [];

    for (var i = 0; i < value.length; i++){
        hasil1.push(value[i][0]);
        hasil1.push(value[i][1]);
        hasil1.push(value[i][2]);
        hasil1.push(value[i][3]);
    }
    console.log(hasil1, hasil2, hasil3, hasil4);
}

var nestedArray = [
  [1, 2, 3, 4],
  ["Mark Zuckerberg", "Elon Musk", "Bill Gates", "Steve Jobs"],
  ["Facebook", "Tesla", "Microsoft", "Apple"],
];

panggilNestedArray(nestedArray);
