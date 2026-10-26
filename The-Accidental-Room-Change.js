const original = { title: "Lab", room: { number: Name } };

const copy = { ...original, room: { ...original.room} };

copy.room.number = -205;

console.log(original.room.number);
console.log(copy.room.number);