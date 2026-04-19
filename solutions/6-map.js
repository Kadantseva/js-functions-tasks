// BEGIN
const getChildren = (lists) => {
    const names = lists.map((list) => list.children);
    return names.flat();
};

export default getChildren;
// END