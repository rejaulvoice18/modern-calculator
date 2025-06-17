 // function to show the buttons value in the display
 function appendValue(val){
    document.getElementById('displayResult').value += val;
}

// function to clear the display
function clearDisplay() {
    document.getElementById('displayResult').value = '';
}

// function to calculate the input value
function equal() {
    const result = document.getElementById('displayResult').value;
    try{
        const total = Function('"use strict"; return (' + result + ')')();
        // it works like eval()
        document.getElementById('displayResult').value = total;
    }catch{
        document.getElementById('displayResult').value = "Error"
    }
}