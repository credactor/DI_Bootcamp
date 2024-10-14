import React from "react";
interface UserProps {
    name?: string;
    age?: number;
}
  
const UserCard: React.FC<UserProps> = ({ name, age = 'unknown' }) => {
    return <h1>Hello, {name} {age}!</h1>;
};
  
export default UserCard;