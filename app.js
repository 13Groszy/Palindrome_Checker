let checkPalindrome =()=>{
//selectors
    const typedValue = document.querySelector('#input').value.split('');
    const resultText = document.querySelector("#result");

//Upper case prevent from checks - everything what is typed go to lower case
    let toLowCase = typedValue.map(function(val){
        return val.toLowerCase();
    })

//Turning array to string again
    const lowCase = toLowCase.join("");
    const reversed = toLowCase.reverse().join("");

//Check if value is not empty
if (reversed.length === 0) {
    resultText.innerHTML = "Please type in the text"
} else if(reversed.length === 1) {
    resultText.innerHTML = "Please type in longer text"
} else{
     //Simple check and returning result
     if(reversed === lowCase){
        resultText.innerHTML = "It is a palindrome"
    }else{
        resultText.innerHTML = "It is not a palindrome"
    }
}
}