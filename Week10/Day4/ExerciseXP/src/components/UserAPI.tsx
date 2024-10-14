import React, { useState, useEffect } from "react";

interface DataModel {
    id: number,
    first_name: string,
    last_name: string,
}

const UserAPI: React.FC = () => {
    const [userData, setUserData] = useState<DataModel[]>([]);
    useEffect(() => {
        fetch('https://random-data-api.com/api/users/random_user')
            .then(response => response.json())
            .then(data => setUserData(data));
    }, []);

    return (
        <div>
            {userData && (
                <div>
                    <h2>User Information</h2>
                    <p>id: {userData.id}</p>
                    <p>
                        Name: {userData.first_name} {userData.last_name}
                    </p>                    
                </div>
            )}
        </div>
    )
}

export default UserAPI;