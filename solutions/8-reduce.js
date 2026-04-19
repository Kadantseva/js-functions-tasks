// BEGIN
const groupBy = (students, key) => {
        return students.reduce((accumulator, currentObject) => {
            let keys = currentObject[key];
            if (!accumulator[keys]) {
            accumulator[keys] = [];
            }
            accumulator[keys].push(currentObject);
            return accumulator;
        }, {});
};

export default groupBy;
// END