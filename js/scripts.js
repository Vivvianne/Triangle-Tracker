
function triangleTracker(params) {
    var length1 = parseInt(document.getElementById("length1").value);
    var length2 = parseInt(document.getElementById("length2").value);
    var length3 = parseInt(document.getElementById("length3").value);

    var trianglePerimeter = [length1 + length2 + length3];
    var oneSide1 = (length1 + length2);
    var oneSide2 = (length1 + length3);
    var oneSide3 = (length2 + length3);
    if(length1===length2 && length1===length3){
        alert("You've created an equilateral triangle");
    }
}