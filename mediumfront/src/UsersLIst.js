import { useEffect, useState } from "react";

const UsersList = () => {
    //getting data
    // const [userData, setUserData] = useState([]);
    // const getUserData = async () => {
    //     const res = await fetch(`/getAllUsers`, {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     });

    //     const data = await res.json();
    //     if (res.status === 404 || !data) {
    //         alert(`Error in fetching data from database`);
    //         console.log(`Error in fetching data from database`);
    //     } else {
    //         console.log(`data obtained from database`);
    //         setUserData(data);
    //     }
    // }

    //useeffect to get data once page loads
    useEffect(() => {
        console.log("LOADED");
        // getUserData();
    }, [])

    return (
        <div>
            <h1>All Users List</h1>
        </div>
    )


}
export default UsersList;