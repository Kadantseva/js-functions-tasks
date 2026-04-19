// BEGIN
const convert = (...data) => {
    let result = [];
    let res = [];
    let currentDate = new Date();
    if (data.length === 0) {
        return result;
    } else {
            for (const el of data) {
                const [first, second, three] = el;
                res = [second === 12 ? 1 : second +1, three, second === 12 ? first +  
                     1 : first];
                currentDate = new Date(res);
                result.push(currentDate.toDateString());
                } 
                return result;
    }
};

export default convert;
// END