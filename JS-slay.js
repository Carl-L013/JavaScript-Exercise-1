function yippee(){
    let gay = prompt('Would you like to use the calculator?');
    let result = document.getElementById(`divvy`);
    if (gay === 'yes' && 'Yes') {
        let x = parseInt(prompt('Insert a number:'));
        let y = parseInt(prompt('Insert another number'));
        let condition=prompt('What operation would you like to use?');
        if (condition === '+') {
            alert('You chose: Addition');
            // document.write(x + y);
            result.innerText = x + y;
        }
        else if (condition === '-') {
            alert('You chose: Subtraction');
            //document.write(x - y);
            result.innerText = x - y;
        }
        else if (condition === '*') {
            alert('You chose: Multiplcation');
            //document.write(x * y);
            result.innerText = x * y;
        }
        else if (condition === '/') {
            alert('You chose: Division');
            //document.write(x / y);
            result.innerText = x / y;
        }
        else {
            alert('Please choose a valid operation. \n Valid operations include: \n -Addition \n -Subtraction \n -Multiplcation \n -Division');
        }
    }
    else {
        alert('What are you doing here then? \n Leave.');
    }
 }
