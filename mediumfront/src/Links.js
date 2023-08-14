const Links = () => {

    return (
        <div style={{display: "flex"}}>
            <button style={{flex: 1, margin: "12px 5px"}} onClick={(e) => { window.location.href = '/' }}>Homepage</button>
            <button style={{flex: 1, margin: "12px 5px"}} onClick={(e) => { window.location.href = '/allPosts' }}>All Posts</button>
            <button style={{flex: 1, margin: "12px 5px"}} onClick={(e) => { window.location.href = '/addPost' }}>Add Post</button>
            <button style={{flex: 1, margin: "12px 5px"}} onClick={(e) => { window.location.href = '/UserSignUp' }}>Sign Up</button>
            <button style={{flex: 1, margin: "12px 5px"}} onClick={(e) => { window.location.href = '/UserLogin' }}>Log In</button>
            <button style={{flex: 1, margin: "12px 5px"}} onClick={(e) => { window.location.href = '/userProfile' }}>User Profile</button>
            <button style={{flex: 1, margin: "12px 5px"}} onClick={(e) => { window.location.href = '/userPosts' }}>My Posts</button>
            {/* <button style={{flex: 1, margin: "12px 5px"}} onClick={(e) => { window.location.href = '/allUsers' }}>All Authors</button> */}
            <button style={{flex: 1, margin: "12px 5px"}} onClick={(e) => { window.location.href = '/allTopics' }}>All Topics</button>
        </div>
    )
}

export default Links;