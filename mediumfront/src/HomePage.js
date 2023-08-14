import { useEffect, useState } from "react";
import TopPosts from "./TopPosts";
import AllTopics from "./Topics";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/joy";

const HomePage = (props) => {

    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [showPosts, setShowPosts] = useState([]);
    const [toggleSave, setToggleSave] = useState(false);
    // useEffect(() => {
    //     fetch('http://127.0.0.1:3003/?page=1&books_per_page=100').then((response) => {
    //         return response.json();
    //     }).then((data) => {
    //         console.log("data usefeft");
    //         console.log(data);
    //         setPosts(data);
    //         setShowPosts(data);
    //     })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    // }, [])
    const Recommend = () => {
        if (props.authorization == "") {
            navigate('/userlogin');
        }
        else {
            fetch('http://127.0.0.1:3003/profile', {
                method: 'GET',
                headers: {
                    'Authorization': props.authorization
                }
            }).then((response) => {
                return response.json();
            }).then((profileinfo) => {

                console.log("profileinfo");
                console.log(profileinfo);
                const str1 = profileinfo.interest;
                let temp1 = posts.filter((val) => {
                    console.log(val);
                    return (val.title.toLowerCase().includes(str1) || val.topic.toLowerCase().includes(str1));
                })

                setShowPosts([...temp1]);
            })
                .catch((error) => {
                    console.log(error);
                })
        }
    }
    return (
        <>
            <Button disabled onClick={() => { Recommend() }}>Recommended Posts</Button>
            <button onClick={() => { }}>Top Posts</button>
            <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px", display: "flex", backgroundColor: "", justifyContent: "start", overflow: "auto" }}>
                <AllTopics />
            </div>
            <TopPosts />
        </>
    )
}
export default HomePage;