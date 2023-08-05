// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const SavedPosts = () => {
//   const [savedPosts, setSavedPosts] = useState([]);

//   useEffect(async () => {
//     const mockURL = `https://52e49f36-7a43-4897-8fc0-b87cb414e40b.mock.pstmn.io`;
//     const response = await fetch(`${mockURL}/users`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       withCredentials: true,
//       body: JSON.stringify(formData),
//     });
//     const data = await response.json();
//     console.log(data);
//     if (response.ok) {
//       localStorage.setItem("token", data.access_token);

//       console.log(data.message);
//       navigate("/userProfile");
//     } else {
//       alert(data.message);
//     }
//   }, []);

//   return (
//     <div>
//       <h2>Saved Posts</h2>
//       {savedPosts.map((post) => (
//         <div key={post.id}>
//           <h4>{post.title}</h4>
//           <p>{post.text}</p>
//           <p>Likes: {post.likes}</p>
//           <p>Comments: {post.comments}</p>
//           <p>Views: {post.views}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SavedPosts;
