import axios from 'axios';
import { useEffect, useState } from 'react';

// const UserProfile = ({ user }) => {
// const [userData, setUserData] = useState(user);
// const [userPosts, setUserPosts] = useState(user.posts);
// const [followedUsers, setFollowedUsers] = useState(user.followedUsers);
// useEffect(async () => {
//     if (localStorage.getItem('token') === "undefined") {
//         alert("Please Sign In to continue");
//         window.location.href = '/userlogin';
//     }
//     else {
//         const givingToken = localStorage.getItem('token');
//         // console.log(givingToken)
//         const response = await fetch(`/auth`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 token: givingToken,
//             })
//         })
//         const data = await response.json()
//         console.log(data.message);
//         if (response.status !== 200) {
//             alert(data.message);
//             window.location.href = '/userlogin';
//         }
//         else {
//             const res = await fetch(`/users/profile`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     token: givingToken,
//                 })
//             })
//             // console.log("after fetch profile")

//             const data = await res.json();
//             console.log("data got");
//             console.log(data);

//             if (data) {
//                 setUserData(data);
//                 setUserPosts(data.posts);
//                 setFollowedUsers(data.followedUsers);
//             } else {
//                 // console.log("no data found");
//                 alert('Please sign in again');
//                 window.location.href = '/userlogin';
//             }
//         }
//     }
// }, [])
// const handleFollowUser = (userId) => {

//     setUser((prevUser) => ({
//         ...prevUser,
//         followedUsers: [...prevUser.followedUsers, userId],
//     }));
// };

//     return (
//         <div>
//             <h2>User Profile</h2>
//             {/* Display user details */}
//             <div>
//                 <p>Username: {userData.username}</p>
//                 <p>Email: {userData.email}</p>
//                 <p>First Name: {userData.first_name}</p>
//                 <p>Last Name: {userData.last_name}</p>
//                 <p>Bio: {userData.bio}</p>
//                 <p>Profile Image: {userData.profile_image}</p>
//                 <p>Followers: {userData.followers}</p>
//                 <p>Following: {userData.following}</p>
//                 <p>Interested Topics: {userData.interested_topics}</p>
//             </div>
//             <hr />
//             <div>
//                 <button>Follow User</button>
//             </div>
//             <h2>My Posts</h2>

//             {userPosts.length === 0 ? (
//                 <p>No posts found.</p>
//             ) : (
//                 userPosts.map((post) => (
//                     <div key={post.id}>
//                         <h4>{post.title}</h4>
//                         <p>{post.text}</p>
//                     </div>
//                 ))
//             )}
//             <hr />
//             <h2>Followed Users</h2>
//             {followedUsers.length === 0 ? (
//                 <p>No users followed.</p>
//             ) : (
//                 <ul>
//                     {
//                         followedUsers.map((user, index) => (
//                             <li key={index}>
//                                 <p>User Name: {user.userName}</p>
//                             </li>
//                         ))
//                     }
//                 </ul>
//             )}
//         </div>
//     );
// };

// export default UserProfile;






import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';

export default function UserProfile({ user }) {
    const [userData, setUserData] = useState(user);
    const [userPosts, setUserPosts] = useState(user.posts);
    const [followedUsers, setFollowedUsers] = useState(user.followedUsers);
    // useEffect(async () => {
    //     if (localStorage.getItem('token') === "undefined") {
    //         alert("Please Sign In to continue");
    //         window.location.href = '/userlogin';
    //     }
    //     else {
    //         const givingToken = localStorage.getItem('token');
    //         // console.log(givingToken)
    //         const response = await fetch(`/auth`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 token: givingToken,
    //             })
    //         })
    //         const data = await response.json()
    //         console.log(data.message);
    //         if (response.status !== 200) {
    //             alert(data.message);
    //             window.location.href = '/userlogin';
    //         }
    //         else {
    //             const res = await fetch(`/users/profile`, {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //                 body: JSON.stringify({
    //                     token: givingToken,
    //                 })
    //             })
    //             // console.log("after fetch profile")

    //             const data = await res.json();
    //             console.log("data got");
    //             console.log(data);

    //             if (data) {
    //                 setUserData(data);
    //                 setUserPosts(data.posts);
    //                 setFollowedUsers(data.followedUsers);
    //             } else {
    //                 // console.log("no data found");
    //                 alert('Please sign in again');
    //                 window.location.href = '/userlogin';
    //             }
    //         }
    //     }
    // }, [])
    // const handleFollowUser = (userId) => {

    //     setUser((prevUser) => ({
    //         ...prevUser,
    //         followedUsers: [...prevUser.followedUsers, userId],
    //     }));
    // };

    return (
        <Box
            sx={{
                width: '100%',
                position: 'relative',
                overflow: { xs: 'auto', sm: 'initial' },
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    display: 'block',
                    width: '1px',
                    // bgcolor: 'warning.300',
                    left: '500px',
                    top: '-24px',
                    bottom: '-24px',
                    '&::before': {
                        top: '4px',
                        // content: '"vertical"',
                        display: 'block',
                        position: 'absolute',
                        right: '0.5rem',
                        color: 'text.tertiary',
                        fontSize: 'sm',
                        fontWeight: 'lg',
                    },
                    '&::after': {
                        top: '4px',
                        // content: '"horizontal"',
                        display: 'block',
                        position: 'absolute',
                        left: '0.5rem',
                        color: 'text.tertiary',
                        fontSize: 'sm',
                        fontWeight: 'lg',
                    },
                }}
            />
            <Card
                orientation="horizontal"
                sx={{
                    width: '100%',
                    flexWrap: 'wrap',
                    [`& > *`]: {
                        '--stack-point': '500px',
                        minWidth:
                            'clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)',
                    },
                    // make the card resizable for demo
                    overflow: 'auto',
                    //   resize: 'horizontal',
                }}
            >
                <AspectRatio ratio="1" maxHeight={500} sx={{ minWidth: 182, flex: 1 }}>
                    <img
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                        srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                        loading="lazy"
                        alt=""
                    />
                </AspectRatio>
                <CardContent>
                    <Typography fontSize="xl" fontWeight="lg">
                        {userData.first_name + " " + userData.last_name}
                    </Typography>
                    <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                        {userData.username}
                    </Typography>
                    <Sheet
                        sx={{
                            bgcolor: 'background.level1',
                            borderRadius: 'sm',
                            p: 1.5,
                            my: 1.5,
                            display: 'flex',
                            gap: 2,
                            '& > div': { flex: 1 },
                        }}
                    >
                        <div>
                            <Typography level="body-xs" fontWeight="lg">
                                Bio
                            </Typography>
                            <Typography fontWeight="lg">{userData.bio}</Typography>
                        </div>
                    </Sheet>
                    <Sheet
                        sx={{
                            bgcolor: 'background.level1',
                            borderRadius: 'sm',
                            p: 1.5,
                            my: 1.5,
                            display: 'flex',
                            gap: 2,
                            '& > div': { flex: 1 },
                        }}
                    >
                        <div>
                            <Typography level="body-xs" fontWeight="lg">
                                Articles
                            </Typography>
                            <Typography fontWeight="lg">34</Typography>
                        </div>
                        <div>
                            <Typography level="body-xs" fontWeight="lg">
                                Followers
                            </Typography>
                            <Typography fontWeight="lg">{userData.followers}</Typography>
                        </div>
                        <div>
                            <Typography level="body-xs" fontWeight="lg">
                                Following
                            </Typography>
                            <Typography fontWeight="lg">{userData.following}</Typography>
                        </div>
                        <div>
                            <Typography level="body-xs" fontWeight="lg">
                                Topics
                            </Typography>
                            <Typography fontWeight="lg">{userData.interested_topics}</Typography>
                        </div>
                    </Sheet>
                    <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 } }}>
                        <Button onClick={(e) => { window.location.href = '/userPosts' }} variant="outlined" color="neutral">
                            My Posts
                        </Button>
                        <Button variant="solid" color="primary">
                            Follow
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}
