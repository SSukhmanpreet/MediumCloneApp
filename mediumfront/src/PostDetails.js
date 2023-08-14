import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

const PostDetails = (props) => {

    const [data, setData] = useState([]);
    const { id } = useParams();
    const [temp, setTemp] = useState([1]);
    const [lists, setLists] = useState([]);
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const [user, setUser] = useState();
    const [following, setFollowing] = useState(false);
    const [liked, setLiked] = useState(false);
    const navigate = useNavigate();
    const [username, setCurrentUser] = useState("");


    useEffect(() => {

        if (props.authorization == "") {
            navigate('/userlogin');
        }
        else {
            fetch(`http://127.0.0.1:3003/details/?id=${id}`, { headers: { 'Authorization': localStorage.Authorization } }).then((res) => {
                return res.json();
            }).then((res) => {
                console.log(res);
                console.log(res.author);
                setCurrentUser(res.author);
                if (res.message != undefined) {
                    navigate('/pay');
                }
                else {
                    axios.get('http://127.0.0.1:3003/profile', {
                        headers: {
                            Authorization: localStorage.Authorization
                        }
                    }).then((res1) => {
                        console.log(res1);
                        console.log(res1.data);
                        setCurrentUser(res1.data.username);
                        for (let i = 0; i < res1.data.follows.length; i++) {
                            if (res1.data.follows[i] == res.author) {
                                setFollowing(true);
                            }
                        }

                        for (let i = 0; i < res.likes.length; i++) {
                            if (res.likes[i] == res1.data.username) {
                                setLiked(true);
                            }
                        }
                        setData([res]);
                        setComments(res.comments);

                    })
                        .catch((err) => {
                            console.log(err);
                        })

                }
            })
                .catch((error) => {

                    console.log(error);
                    if (error == "Sign up or login") {
                        navigate('/signin');
                    }
                })

            fetch(`http://127.0.0.1:3003/my_lists`, {
                headers: {
                    'Authorization': localStorage.Authorization
                }
            })
                .then(response => {
                    return response.json()
                })
                .then(response => {
                    setLists([...response]);


                })
                .catch(error => {
                    console.error('Error:', error);
                });

        }

    }, [temp])

    const toggleLike = () => {
        const ele = document.getElementById('like');
        console.log(data);
        fetch(`http://127.0.0.1:3003/like/?id=${data[0].id}`, {
            method: "POST",

            headers: {
                // 'Content-Type': 'application/json',
                // 'Accept': 'application/json',
                'Authorization': localStorage.Authorization
            }
        }).then((res) => {
            return res.json();
        }).then((res) => {
            setTemp([...temp])

        })
            .catch((error) => {
                console.log(error);
            })
        if (ele.style.backgroundColor == "red") {
            ele.style.backgroundColor = "white";
            ele.style.color = "black";

        }
        else {
            ele.style.backgroundColor = "red";
            ele.style.color = "white";
        }

    }

    const morePost = () => {
        console.log(data[0].author)
        navigate(`/Similarpost/${data[0].author}`);
    }

    const Follow = () => {
        const ele = document.getElementById("follow");
        console.log(data);
        if (data[0].author === username) {
            return;
        }
        setFollowing(!following);


        fetch(`http://127.0.0.1:3003/follow/?username=${data[0].author}`, {
            method: "POST",
            headers: {
                // 'Content-Type': 'application/json',
                // 'Accept': 'application/json',
                'Authorization': localStorage.Authorization
            }
        }).then((res) => {
            return res.json();
        }).then((res) => {

            setTemp([...temp])

        })
            .catch((error) => {
                navigate('/userlogin');
                console.log(error);
            })

        ele.innerHTML = "Following"

    }




    const Comment_post = () => {

        axios.post('http://127.0.0.1:3003/comment', {
            id: id,
            comment: comment
        },
            {
                headers: {
                    Authorization: localStorage.Authorization
                }
            }).then((res) => {
                console.log(res);
                setComments(res.data.comments);
                setComment('');
            })
            .catch((err) => {
                console.log(err);
            })
    }


    return (
        <div>
            {/* <button onClick={()=>navigate(-1)} className="back">Back</button> */}

            {
                data.map((post, idx) => {
                    return <div key={idx}>
                        <div className="post_id">
                            <h1 className="post_title">Post Title:{" "}{post.title}</h1>

                            <img src={post.image_url} width={680} height={380} ></img>
                            <p className="post_text">Post Text:{" "}{post.text}</p>
                            <p className="post_topic">Post Topic:{" "}{post.topic}</p>
                        </div>
                        <div className="like_view">
                            <button id="like" onClick={() => { toggleLike() }} style={liked ? { background: "red", color: "white" } : { background: "white", color: "black" }} className="like">Like</button>
                            <span className="show_count">{post.likes.length}</span>
                            {/* <button id="comment">Comments</button>
                <span className="show_count">{post.comments.length}</span> */}
                            <button id="views">Views</button>
                            <span className="show_count">{post.views}</span>
                            <p className="post_author">
                                <Link to={`/authorProfile/${post.author}`}>{post.author}</Link>
                                <button className="follow" id="follow" onClick={() => { Follow() }}>
                                    {following ? "Following" : "Follow"}
                                </button>
                            </p>
                            <h3>Comments :{comments.length}</h3>
                            {
                                comments.map((val) => {
                                    return <div>
                                        {val.user}: {val.comment}
                                    </div>
                                })
                            }
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <textarea rows="4" cols="50" id="comment_val" placeholder="Comment here..." onChange={(e) => { setComment(e.target.value) }} value={comment}></textarea>
                            <button onClick={() => { Comment_post() }}>Submit</button>
                        </div>
                    </div>
                })
            }
            <div style={{ margin: "20px", display: "flex" }}>
                <h4 style={{ margin: "5px" }}>Add to your library</h4>
                {
                    lists.map((list, idx) => {
                        // return <button key={idx} onClick={()=>{addtolist(list.id)}} id={list.id}>{list.name}</button>
                    })
                }
            </div>


        </div>
    )
}

export default PostDetails;


// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import PostCard from './PostCard';

// const PostDetails = ({ posts }) => {
//   // const { id } = useParams();
//   // console.log("id");
//   // console.log(id);

//   // const [currentPost, setCurrentPost] = useState(
//   //   // {} ||
//   //   posts.find(x => x.id === id));
//   // console.log(posts.find(x => x.id === id));
//   // console.log(currentPost);
//   // const randomData = [];
//   // for (var i = 0; i < posts.length; i++) {
//   //   randomData[i] = posts[i];
//   // }
//   // const [arrProd, setArrProd] = useState(
//   //   randomData.sort(() => 0.5 - Math.random())
//   // );
//   const [data, setData] = useState([]);
//   const [temp, setTemp] = useState([1]);
//   const [lists, setLists] = useState([]);
//   const [comment, setComment] = useState("");
//   const [comments, setComments] = useState([]);
//   const [user, setUser] = useState();
//   const [following, setFollowing] = useState(false);
//   const [liked, setLiked] = useState(false);
//   const navigate = useNavigate();
//   const getPostData = async () => {
//     fetch(`http://127.0.0.1:3003/details/?id=${id}`, { headers: { 'Authorization': localStorage.Authorization } }).then((res) => {
//       return res.json();
//     }).then((res) => {
//       console.log(res);
//       console.log(res.author);
//       if (res.message != undefined) {
//         navigate('/pay');
//       }
//       else {


//         axios.get('http://127.0.0.1:3003/profile', {
//           headers: {
//             Authorization: localStorage.Authorization
//           }
//         }).then((res1) => {
//           console.log(res1);

//           for (let i = 0; i < res1.data.follows.length; i++) {
//             if (res1.data.follows[i] == res.author) {
//               setFollowing(true);
//             }
//           }

//           for (let i = 0; i < res.likes.length; i++) {
//             if (res.likes[i] == res1.data.username) {
//               setLiked(true);
//             }
//           }
//           setData([res]);
//           setComments(res.comments);

//         })
//           .catch((err) => {
//             console.log(err);
//           })

//       }
//     })
//       .catch((error) => {

//         console.log(error);
//         if (error == "Sign up or login") {
//           navigate('/userlogin');
//         }
//       })
//   };

//   useEffect(() => {
//     // if(props.authorization=="")
//     // {
//     //     navigate('/userlogin');
//     // }
//     // else{}

//     getPostData();
//     //uncomment if you have set the api
//     // if (localStorage.getItem('token') === "undefined") {
//     //     alert("Please Sign In to continue");
//     //     window.location.href = '/userLogin';
//     // }
//     // else {
//     //     const givingToken = localStorage.getItem('token');
//     //     console.log("givingToken");
//     //     console.log(givingToken);
//     //     const response = await fetch(`/auth`, {
//     //         method: 'POST',
//     //         headers: {
//     //             'Content-Type': 'application/json',
//     //         },
//     //         body: JSON.stringify({
//     //             token: givingToken,
//     //         })
//     //     })
//     //     const data = await response.json()
//     //     // console.log(data.message)
//     //     if (response.status !== 200) {
//     //         alert(data.message)
//     //         window.location.href = '/userLogin'
//     //     }
//     // }
//   }, []);

//   return (
//     <div className='component-container'>
//       <div className='posts-container' key={currentPost.id}>
//         <h1 className='postHeading'>{currentPost.title}</h1>
//         <p className='postuser'>user: {currentPost.user}</p>
//         <p className='postDate'>Date: {currentPost.date}</p>
//         <img className='postimage' src={'/' + currentPost.image} alt="image here"></img>
//         <p className='postText'>Text: {currentPost.text}</p>
//         <p className='postTopic'>Topic: {currentPost.topic + " "}</p>
//         <p className='postTopic'>Reading Time: {currentPost.reading_time_mins + " mins"}</p>
//         <br />
//         <button className='postLike-button'>Likes: {currentPost.likes}</button>
//         <button className='postComments-button'>Comments: {currentPost.comments}</button>
//       </div >
//       <hr />
//       <div>
//         <h2>Similar Posts:</h2>
//         {arrProd.slice(0, 4).map((post, key) => (
//           <div className='posts-container' key={post.id}>
//             <PostCard key={key} {...post}></PostCard>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default PostDetails;