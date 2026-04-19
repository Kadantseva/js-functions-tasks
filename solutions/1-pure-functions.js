// BEGIN
const isEven = (number) => {
    let j = 0;
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
             j++;
            } 
         }         
    return (j === 0) && (number >= 2);
};

const sayPrimeOrNot = (value) => {
 const result = isEven(value) ? 'yes' : 'no';
 console.log(result);
};

export default sayPrimeOrNot;
// END