const smallestDivisor = (num) => {
    // BEGIN
    const iter = (counter, acc) => {
      if (acc === 1) {
          return 1;    
        }
      if (acc % counter === 0) {
          return counter;        
        } 
      if (counter === acc) {
          return num;        
        }
      return iter(counter + 1, acc);
    };
  return iter(2, num);
    // END
  };
  
export default smallestDivisor;
  