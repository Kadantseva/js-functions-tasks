import _ from 'lodash';

// BEGIN
const takeOldest = (data, number = 1) => {
    data = _.sortBy(data, function(data){
        return Date.parse(data.birthday);
    });

return data.slice(0,number)
};

export default takeOldest;
// END