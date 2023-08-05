import React from "react";
import PostItem from "./PostItem";
import FilterSearch from "./FiterSearch";
import AddPost from "./AddPost";
import EditPost from "./EditPost";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const StyledGridContainer = styled(Grid)`
  padding: 20px;
  gap: 20px;
`;
const StyledRow = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const ShowAllPosts = ({ user }) => {
  // Fetch all posts from the API
  const [topics, setTopics] = useState([]);
  const [posts, setPosts] = useState([
    {
      id: "1",
      title: "Special Report: Extreme Heat and Human Health",
      topic: ["Heat", "Heat Wave", "Health", "Wellbeing", "Climate Change"],
      image: "https://developers.google.com/speed/webp/gallery2",
      text: "Extreme heat is a clear and present danger to physical and mental health, now and increasingly into the future. In this multi-part Special Report, Wise & Well writers — physicians, research scientists, mental health experts and journalists — get beyond the news to delve deeply into several aspects of heat’s effects on the human condition, from the obvious to the unexpected. ",
      reading_time_mins: "5",
      created_at: "2023-08-03T10:22:45.693Z",
      updated_at: "2023-08-03T14:31:01.835Z",
      author_id: 1,
      author: "Robert Roy Britt",
      number_of_likes: 24,
      number_of_comments: 12,
    },
    {
      id: "2",
      title: "An epilogue to my time working at Twitter",
      topic: [
        "Twitter",
        "Social Media",
        "Elon Musk",
        "Success",
        "Product Management",
      ],
      image: "Type of blob or we will decide later",
      text: "Like seemingly everyone on this app I have plenty of opinions about Twitter & X and figure now is a good time to open up a bit about my experience at the company.I tweeted for years into the void for the love of it like many of you, but after selling my startup to Twitter in 2020 I finally got to see it from the inside. Up close it was both amazing and terrible, like so many other companies and things in life.",
      reading_time_mins: "5",
      created_at: "2023-08-03T10:22:45.693Z",
      updated_at: "2023-08-03T14:31:01.835Z",
      author_id: 1,
      author: "Esther Crawford",
      number_of_likes: 67,
      number_of_comments: 18,
    },
    {
      id: "3",
      title: "The X is dead — Long live the X?",
      topic: [
        "Twitter",
        "Social Media",
        "Elon Musk",
        "San Francisco",
        "Tbi Homepage",
      ],
      image: "Type of blob or we will decide later",
      text: "“The X is gone!” screamed a text message from my partner. Overnight, a gigantic X effigy sprung up across the street, bathing our living room in pulsing white light, like a disco or fire alarm, or both. On Monday, crews removed the short-lived tribute to Elon Musk’s “new” social network, but not before making me famous — I posted a video of the short-lived installation that garnered me nearly 40 million views. On his platform, of course.",
      reading_time_mins: "7",
      created_at: "2023-08-03T10:22:45.693Z",
      updated_at: "2023-08-03T14:31:01.835Z",
      author_id: 1,
      author: "Christopher J. Beale ",
      number_of_likes: 40,
      number_of_comments: 21,
    },
    {
      id: "4",
      title: "Virtual Dates; Unlocking Hearts Online",
      topic: ["Romance", "Nigeria", "Social Media", "Virtual Reality", "Love"],
      image: "Type of blob or we will decide later",
      text: "Picture this; You, comfy on your sofa, phone in one hand, and a chilled drink in the other, and you fell in love! Wait, what? Yes, love… the heart-pounding, stomach-flipping kind. But here is the twist; it all happened online! Who knew dating could be so much easier and fun, right? For introverts like me who hate dealing with awkward first dates with strangers, online dating feels like a rescue boat. These days, I get to meet amazing people and create meaningful connections without leaving the comfort of my home and guess what, I was also lucky enough to find that heart-skipping love story I’ve always dreamt of, with someone online. Isn’t that amazing? Don’t worry, I’d give you the full gist.",
      reading_time_mins: "5",
      created_at: "2023-08-03T10:22:45.693Z",
      updated_at: "2023-08-03T14:31:01.835Z",
      author_id: 1,
      author: "Ziyyah",
      number_of_likes: 52,
      number_of_comments: 24,
    },
    {
      id: "5",
      title: "X Corp’s Attack On Anti-Hate Researchers Is .. Concerning",
      topic: [
        "Twitter",
        "Social Media",
        "Elon Musk",
        "X",
        "Online Hate Speech",
      ],
      image: "Type of blob or we will decide later",
      text: "I really didn’t want to write about Twitter/X any more. I felt I was sort of done with the platform. But here we are again: A few days ago X Corp, Elon Musk’s company that owns what was formerly known as Twitter, filed a lawsuit against the Center for Countering Digital Hate (CCDH)¹, a non-profit organisation researching online hate, disinformation, attacks against LGBTQ+ and the spread of harmful conspiracies. The CCDH is based in London, UK, but is also registered in the US.",
      reading_time_mins: "14",
      created_at: "2023-08-03T10:22:45.693Z",
      updated_at: "2023-08-03T14:31:01.835Z",
      author_id: 1,
      author: "Wolfgang Hauptfleisch",
      number_of_likes: 35,
      number_of_comments: 41,
    },
    {
      id: "6",
      title: "The One Mental Hack That Will Supercharge Your Personal Growth",
      topic: ["Growth Mindset", "Wellness", "Parenting", "Change", "Success"],
      image: "Type of blob or we will decide later",
      text: "Some readers might remember the character Stuart Smalley from Saturday Night Live. Played by former Senator Al Franken, Stuart Smalley was a soft-spoken, gentle fellow with questionable self-esteem. He had a “show” called “Daily Affirmations,” where he related stories from his life and sometimes had guests who needed positive encouragement. Smalley’s memorable tagline was, “I’m good enough, I’m smart enough, and doggone it, people like me.”",
      reading_time_mins: "8",
      created_at: "2023-08-03T10:22:45.693Z",
      updated_at: "2023-08-03T14:31:01.835Z",
      author_id: 1,
      author: "Jeffrey Banks",
      number_of_likes: 42,
      number_of_comments: 21,
    },
    {
      id: "7",
      title: "Uber Ads: Accelerating the path to profitability",
      topic: ["Technology", "Marketing", "Product Management", "UX", "Design"],
      image: "Type of blob or we will decide later",
      text: "Uber’s stock has gone through a roller coaster journey since their IPO in 2019. Several factors contributed to this, including lower demand during COVID lockdowns, and a highly competitive market in both ridehailing and delivery. Uber’s stock was hit hard when the market correction began in 2022, particularly given their lack of profitability. So, their first profitable quarter is a remarkable milestone for the company.",
      reading_time_mins: "5",
      created_at: "2023-08-03T10:22:45.693Z",
      updated_at: "2023-08-03T14:31:01.835Z",
      author_id: 1,
      author: "Viggy Balagopalakrishnan",
      number_of_likes: 81,
      number_of_comments: 23,
    },
    {
      id: "8",
      title: "If You Can’t Take the Heat… Well, You Better Get Used to It",
      topic: ["Health", "Wellbeing", "Wellness", "Mental Health", "Heat"],
      image: "Type of blob or we will decide later",
      text: "At the beginning of July, my wife and I were traveling down the east side of the Sierra Nevadas, camping in remote locales and doing some high-altitude running and hiking. With Yosemite closed due to snow left behind by a record winter, on a whim we took a side road that headed up into the nearby mountains and ended up at a delightful trio of alpine lakes, all surrounded by snow.",
      reading_time_mins: "5",
      created_at: "2023-08-03T10:22:45.693Z",
      updated_at: "2023-08-03T14:31:01.835Z",
      author_id: 1,
      author: "Robert Roy Britt",
      number_of_likes: 61,
      number_of_comments: 42,
    },
    {
      id: "9",
      title: "Race Report: IronMan 70.3 Maine — Augusta",
      topic: [
        "Ironman",
        "Ironman Triathlon",
        "Ironman 70 3",
        "Fitness",
        "Health",
      ],
      image: "Type of blob or we will decide later",
      text: "My journey towards the IronMan 70.3 Maine began on January 28th, 2023, when I registered for the race. I knew I had a lot of work ahead of me, especially since swimming was entirely new to me. From scratch, I embarked on the mission to learn swimming. It was a challenging process, but with dedication and consistent practice, I gradually improved my skills in the water.",
      reading_time_mins: "3",
      created_at: "2023-08-03T10:22:45.693Z",
      updated_at: "2023-08-03T14:31:01.835Z",
      author_id: 1,
      author: "Naman Bhansali",
      number_of_likes: 12,
      number_of_comments: 14,
    },
    {
      id: "10",
      title: "Simply Put Your Mind Away To Enjoy This Moment Of Peace",
      topic: ["Mindfulness", "Music", "Peace", "Wellness", "Wellbeing"],
      image: "Type of blob or we will decide later",
      text: "Today, I want to share a simple practice encapsulated by the title. Its effect can be enhanced by playing some pleasant instrumental music. Choose anything smooth and voiceless that evokes calmness and keep it low to medium volume, just hovering in the background. Then, relax on a bed or a chair of your choosing. The practice is deceptively simple, so you may struggle with it at first: simply put away your thoughts to be in this moment of peace. Allow yourself to fully enjoy the atmosphere of relaxation.",
      reading_time_mins: "5",
      created_at: "2023-08-03T10:22:45.693Z",
      updated_at: "2023-08-03T14:31:01.835Z",
      author_id: 1,
      author: "René Way",
      number_of_likes: 97,
      number_of_comments: 27,
    },
    {
      id: "11",
      title: "A 400-Year-Old Philosopher Solves Our Climate Change Dilemma",
      topic: [
        "Environment",
        "Climate Change",
        "Philosophy",
        "Climate Action",
        "Pascals Wager",
      ],
      image: "Type of blob or we will decide later",
      text: "Blaise Pascal was a 17th-century French mathematician, inventor, and philosopher, born 400 years ago in Clermont-Ferrand. (You can see the above floral tribute if you visit this year.) His significant contributions to the fields of probability and game theory and physical science and philosophy of religion are all the more remarkable in that Pascal passed away at the age of 39. Pascal also invented an early digital calculator. And the roulette wheel.",
      reading_time_mins: "9",
      created_at: "2023-08-03T10:22:45.693Z",
      updated_at: "2023-08-03T14:31:01.835Z",
      author_id: 1,
      author: "Ken Honeywell",
      number_of_likes: 34,
      number_of_comments: 24,
    },
  ]);
  const [filterBy, setFilterBy] = useState("");
  // 'author', 'date', 'likes', 'comments'
  const [searchInput, setSearchInput] = useState("");
  const [editingPost, setEditingPost] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const getAllPosts = async () => {
    fetch(`https://52e49f36-7a43-4897-8fc0-b87cb414e40b.mock.pstmn.io/posts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log("in then");
        console.log(response);
        if (!response.ok) {
          // console.log("response not ok");
          // console.log(response);
          throw new Error(
            "Network response was not ok. Could not fetch data for that resource"
          );
        }
        // console.log("response ok");
        // console.log(response);
        return response.json();
      })
      .then((data) => {
        // const data = res.json();
        console.log("data");
        console.log(data);
        console.log(data[1].number_of_comments);
        setPosts(data);
        const topicsArray = data.reduce((topics, post) => {
          return topics.concat(post.topic);
        }, []);
        // Create a Set to store distinct strings
        const uniqueTopicsSet = new Set(topicsArray);
        // Convert the Set back to an array using the spread operator
        const uniqueTopicsArray = [...uniqueTopicsSet];
        const sortedTopics = [...uniqueTopicsArray].sort();
        setTopics(sortedTopics);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  useEffect(() => {
    console.log("loaded");
    getAllPosts();
  }, []);
  // Sort the posts by likes and comments
  const sortByLikes = () => {
    setPosts((prevPosts) =>
      prevPosts.slice().sort((a, b) => b.number_of_likes - a.number_of_likes)
    );
  };

  const sortByComments = () => {
    setPosts((prevPosts) =>
      prevPosts
        .slice()
        .sort((a, b) => b.number_of_comments - a.number_of_comments)
    );
  };
  const handleSortByChange = (event) => {
    const sortBy = event.target.value;
    if (sortBy === "likes") {
      sortByLikes();
    } else if (sortBy === "comments") {
      sortByComments();
    }
  };

  // Function to handle filtering posts
  const handleFilter = (event) => {
    setFilterBy(event.target.value);
  };

  // Function to handle searching posts
  const handleSearch = (event) => {
    setSearchInput(event.target.value);
  };
  // Function to handle adding a new post
  const handleAddPost = (newPost) => {
    setPosts((prevPosts) => [
      ...prevPosts,
      {
        ...newPost,
        id: Date.now(),
      },
    ]);
  };

  // Filter and search the posts based on user input
  const filteredPosts = posts?.filter((post) => {
    if (filterBy === "title" && searchInput) {
      return post.title.toLowerCase()?.includes(searchInput.toLowerCase());
    } else if (filterBy === "author" && searchInput) {
      return post.author.toLowerCase()?.includes(searchInput.toLowerCase());
    } else if (filterBy === "date" && searchInput) {
      return post.created_at.includes(searchInput);
    } else if (filterBy === "likes" && searchInput) {
      return post.number_of_likes.toString()?.includes(searchInput);
    } else if (filterBy === "comments" && searchInput) {
      return post.number_of_comments.toString()?.includes(searchInput);
    }
    return true; // If no filter is applied or no search input, show all posts
  });

  // Function to handle editing form opening
  const handleEditPost = (post) => {
    setEditingPost(post);
    setIsEditing(true);
  };

  // Function to handle editing form closing
  const handleCloseEditForm = () => {
    setEditingPost(null);
    setIsEditing(false);
  };

  // Function to handle updating a post
  const handleUpdatePost = (updatedPost) => {
    setPosts((prevPosts) =>
      prevPosts?.map((post) =>
        post.id === updatedPost.id ? { ...post, ...updatedPost } : post
      )
    );
    handleCloseEditForm();
  };
  const handleDeletePost = (postId) => {
    setPosts((prevPosts) => prevPosts?.filter((post) => post.id !== postId));
  };
  useEffect(() => {
    console.log(posts);
  });
  return (
    <div>
      <StyledRow>
        {/* <h1>Show All Posts</h1> */}
        {/* Add New Post Form
        <AddPost onAddPost={handleAddPost} /> */}
        {/* Edit Post Form */}
        <a href="/add"></a>
        {/* {isEditing && (
          <EditPost
            post={editingPost}
            onUpdatePost={handleUpdatePost}
            onCloseEditForm={handleCloseEditForm}
          />
        )} */}
        {/* Filter and Search */}
        <FormControl variant="outlined">
          <InputLabel></InputLabel>
          <Select value="" onChange={handleSortByChange}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="likes">Likes</MenuItem>
            <MenuItem value="comments">Comments</MenuItem>
          </Select>
        </FormControl>
        <FilterSearch handleFilter={handleFilter} handleSearch={handleSearch} />
      </StyledRow>
      {/* Display filtered posts */}
      {filteredPosts?.map((post) => (
        <>
          <PostItem
            key={post.id}
            post={post}
            onDeletePost={() => handleDeletePost(post.id)}
            onEditPost={handleEditPost}
            isEditing={isEditing}
          />
        </>
      ))}
    </div>
  );
};

export default ShowAllPosts;
