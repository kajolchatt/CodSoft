let input = document.getElementById("inputBox")
let buttons = document.querySelectorAll('button')
let string = "";
let arr = Array.from(buttons);//The querySelectorAll() method returns a NodeList, which is similar to an array but lacks some array methods (like forEach, map, etc.). By converting it to an array using Array.from()

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string);
            input.value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = ""
            input.value = string;
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1)
            input.value = string
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})