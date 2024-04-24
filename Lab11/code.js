function calculateProduct() {
    var a = parseFloat(document.getElementById("numberA").value);
    var n = parseInt(document.getElementById("numberN").value);
    var result = 1;

    for (var i = 0; i < n; i++) {
        result *= (a + i);
    }

    document.getElementById("result").value = result;
}