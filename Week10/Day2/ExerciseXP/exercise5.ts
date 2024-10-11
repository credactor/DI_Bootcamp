// Create an interface User with properties id (readonly), name, and email.
// Extend the User interface to create a PremiumUser interface with an additional optional property membershipLevel.
// Create a function printUserDetails that accepts a PremiumUser and logs the details to the console.

interface User {
    readonly id: number;
    name: string;
    email: string;
}

interface PremiumUser extends User {
    membershipLevel?: number;
}

function printUserDetails(user: PremiumUser): string {
    if (user.membershipLevel) {
    return `${user.id} ${user.name} ${user.email} ${user.membershipLevel}`;
    }
    return `${user.id} ${user.name} ${user.email}`;
}

let john = { id: 1, name: "John", email: "john@gmail.com"};
console.log(printUserDetails(john));
let jane = { id: 2, name: "Jane", email: "jane@gmail.com", membershipLevel: 2 };
console.log(printUserDetails(jane));
