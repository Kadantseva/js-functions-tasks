// BEGIN
const getGirlFriends = (users) => {
    const friends = users.map((user) => user.friends).flat();
    const filteredGirlFriends = friends.filter((friend) => friend.gender === 'female');
    return filteredGirlFriends;
};

export default getGirlFriends;
// END