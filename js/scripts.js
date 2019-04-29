
function triangleTracker(params) {
    var length1 = parseFloat(document.getElementById("length1").value);//allow integers and decimals 
    var length2 = parseFloat(document.getElementById("length2").value);
    var length3 = parseFloat(document.getElementById("length3").value);
    
    var trianglePerimeter = [length1 + length2 + length3];
    var oneSide1 = (length1 + length2);
    var oneSide2 = (length1 + length3);
    var oneSide3 = (length2 + length3);

    
    if(isNaN(length1+length2+length3) ||length1*length2*length3 ===0){
        alert("Enter a valid input");
    }
    
    else if (oneSide1<=length3 || oneSide2<=length2 || oneSide3<=length1){
        alert("Sorry, not a triangle. Try Again.");
    }

    else if(length1===length2 && length1===length3){
        alert("You've created an equilateral triangle.");
    }
    else if (length1===length2 && length1!==length3){
        alert("Great! You've created an Issosceles triangle.");
    }
    else if (length2===length3 && length1!==length2){
        alert("Good! You've also created an Issosceles triangle.");
    }
    else if (length1!==length2 && length1!==length3) {
        alert("Wow! You've created a scalene traingle.");
    }
    else {
        alert("Sorry! Not a triangle. Try again.")
    }
    
}