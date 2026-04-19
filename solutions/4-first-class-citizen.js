const run = (text) => {
    // BEGIN
    const takeLast = (value, numbers) => {
      let result = '';
      if (value === '' || value.length < numbers) {
        return null;
      }
      else {
        for (let i = value.length - 1; i >= value.length - numbers; i -- ) {
          result += value[i];
        }        
        return result;
      }
    }
    // END
  
    return takeLast(text, 4);
  };
  
export default run;