import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import PostCard from './PostCard';

const TopPosts = () => {
    const [posts, setPosts] = useState([
        {
            id: 1,
            title: "Special Report: Extreme Heat and Human Health",
            topic: [
                "Heat",
                "Heat Wave",
                "Health",
                "Wellbeing",
                "Climate Change"
            ],
            image: "1 POAUldBjPRY5DCewGpXx8Q.webp",
            text: "Extreme heat is a clear and present danger to physical and mental health, now and increasingly into the future. In this multi-part Special Report, Wise & Well writers — physicians, research scientists, mental health experts and journalists — get beyond the news to delve deeply into several aspects of heat’s effects on the human condition, from the obvious to the unexpected. ",
            reading_time_mins: "5",
            created_at: "2023-08-03T10:22:45.693Z",
            updated_at: "2023-08-03T14:31:01.835Z",
            author_id: 1,
            author: "Robert Roy Britt",
            number_of_likes: 24,
            number_of_comments: 12
        },
        {
            id: 2,
            title: "An epilogue to my time working at Twitter",
            topic: [
                "Twitter",
                "Social Media",
                "Elon Musk",
                "Success",
                "Product Management"
            ],
            image: "maxresdefault.webp",
            text: "Like seemingly everyone on this app I have plenty of opinions about Twitter & X and figure now is a good time to open up a bit about my experience at the company.I tweeted for years into the void for the love of it like many of you, but after selling my startup to Twitter in 2020 I finally got to see it from the inside. Up close it was both amazing and terrible, like so many other companies and things in life.",
            reading_time_mins: "5",
            created_at: "2023-08-03T10:22:45.693Z",
            updated_at: "2023-08-03T14:31:01.835Z",
            author_id: 1,
            author: "Esther Crawford",
            number_of_likes: 67,
            number_of_comments: 18
        },
        {
            id: 3,
            title: "The X is dead — Long live the X?",
            topic: [
                "Twitter",
                "Social Media",
                "Elon Musk",
                "San Francisco",
                "Tbi Homepage"
            ],
            image: "1 U0yOARs1NSNjQaMAVHp5hw.webp",
            text: "“The X is gone!” screamed a text message from my partner. Overnight, a gigantic X effigy sprung up across the street, bathing our living room in pulsing white light, like a disco or fire alarm, or both. On Monday, crews removed the short-lived tribute to Elon Musk’s “new” social network, but not before making me famous — I posted a video of the short-lived installation that garnered me nearly 40 million views. On his platform, of course.",
            reading_time_mins: "7",
            created_at: "2023-08-03T10:22:45.693Z",
            updated_at: "2023-08-03T14:31:01.835Z",
            author_id: 1,
            author: "Christopher J. Beale ",
            number_of_likes: 40,
            number_of_comments: 21
        },
        {
            id: 4,
            title: "Virtual Dates; Unlocking Hearts Online",
            topic: [
                "Romance",
                "Nigeria",
                "Social Media",
                "Virtual Reality",
                "Love"
            ],
            image: "1 Z4dcIZe_0oC3sYGpTso2UA@2x.webp",
            text: "Picture this; You, comfy on your sofa, phone in one hand, and a chilled drink in the other, and you fell in love! Wait, what? Yes, love… the heart-pounding, stomach-flipping kind. But here is the twist; it all happened online! Who knew dating could be so much easier and fun, right? For introverts like me who hate dealing with awkward first dates with strangers, online dating feels like a rescue boat. These days, I get to meet amazing people and create meaningful connections without leaving the comfort of my home and guess what, I was also lucky enough to find that heart-skipping love story I’ve always dreamt of, with someone online. Isn’t that amazing? Don’t worry, I’d give you the full gist.",
            reading_time_mins: "5",
            created_at: "2023-08-03T10:22:45.693Z",
            updated_at: "2023-08-03T14:31:01.835Z",
            author_id: 1,
            author: "Ziyyah",
            number_of_likes: 52,
            number_of_comments: 24
        },
        {
            id: 5,
            title: "X Corp’s Attack On Anti-Hate Researchers Is .. Concerning",
            topic: [
                "Twitter",
                "Social Media",
                "Elon Musk",
                "X",
                "Online Hate Speech"
            ],
            image: "1 oXQpqCqnVFSFL7pULE5UGg.webp",
            text: "I really didn’t want to write about Twitter/X any more. I felt I was sort of done with the platform. But here we are again: A few days ago X Corp, Elon Musk’s company that owns what was formerly known as Twitter, filed a lawsuit against the Center for Countering Digital Hate (CCDH)¹, a non-profit organisation researching online hate, disinformation, attacks against LGBTQ+ and the spread of harmful conspiracies. The CCDH is based in London, UK, but is also registered in the US.",
            reading_time_mins: "14",
            created_at: "2023-08-03T10:22:45.693Z",
            updated_at: "2023-08-03T14:31:01.835Z",
            author_id: 1,
            author: "Wolfgang Hauptfleisch",
            number_of_likes: 35,
            number_of_comments: 41
        },
        {
            id: 6,
            title: "The One Mental Hack That Will Supercharge Your Personal Growth",
            topic: [
                "Growth Mindset",
                "Wellness",
                "Parenting",
                "Change",
                "Success"
            ],
            image: "1 mJwhdcjsDdY5XYj5rXFItw.webp",
            text: "Some readers might remember the character Stuart Smalley from Saturday Night Live. Played by former Senator Al Franken, Stuart Smalley was a soft-spoken, gentle fellow with questionable self-esteem. He had a “show” called “Daily Affirmations,” where he related stories from his life and sometimes had guests who needed positive encouragement. Smalley’s memorable tagline was, “I’m good enough, I’m smart enough, and doggone it, people like me.”",
            reading_time_mins: "8",
            created_at: "2023-08-03T10:22:45.693Z",
            updated_at: "2023-08-03T14:31:01.835Z",
            author_id: 1,
            author: "Jeffrey Banks",
            number_of_likes: 42,
            number_of_comments: 21
        },
        {
            id: 7,
            title: "Uber Ads: Accelerating the path to profitability",
            topic: [
                "Technology",
                "Marketing",
                "Product Management",
                "UX",
                "Design"
            ],
            image: "0 XFf_Jp00lS6lB-0O.webp",
            text: "Uber’s stock has gone through a roller coaster journey since their IPO in 2019. Several factors contributed to this, including lower demand during COVID lockdowns, and a highly competitive market in both ridehailing and delivery. Uber’s stock was hit hard when the market correction began in 2022, particularly given their lack of profitability. So, their first profitable quarter is a remarkable milestone for the company.",
            reading_time_mins: "5",
            created_at: "2023-08-03T10:22:45.693Z",
            updated_at: "2023-08-03T14:31:01.835Z",
            author_id: 1,
            author: "Viggy Balagopalakrishnan",
            number_of_likes: 81,
            number_of_comments: 23
        },
        {
            id: 8,
            title: "If You Can’t Take the Heat… Well, You Better Get Used to It",
            topic: [
                "Health",
                "Wellbeing",
                "Wellness",
                "Mental Health",
                "Heat"
            ],
            image: "1 H-X-VqZD_CVDXiXqtEippA.webp",
            text: "At the beginning of July, my wife and I were traveling down the east side of the Sierra Nevadas, camping in remote locales and doing some high-altitude running and hiking. With Yosemite closed due to snow left behind by a record winter, on a whim we took a side road that headed up into the nearby mountains and ended up at a delightful trio of alpine lakes, all surrounded by snow.",
            reading_time_mins: "5",
            created_at: "2023-08-03T10:22:45.693Z",
            updated_at: "2023-08-03T14:31:01.835Z",
            author_id: 1,
            author: "Robert Roy Britt",
            number_of_likes: 61,
            number_of_comments: 42
        },
        {
            id: 9,
            title: "Race Report: IronMan 70.3 Maine — Augusta",
            topic: [
                "Ironman",
                "Ironman Triathlon",
                "Ironman 70 3",
                "Fitness",
                "Health"
            ],
            image: "1 o2ie1LQd2fQfm1gHD1rqAg.webp",
            text: "My journey towards the IronMan 70.3 Maine began on January 28th, 2023, when I registered for the race. I knew I had a lot of work ahead of me, especially since swimming was entirely new to me. From scratch, I embarked on the mission to learn swimming. It was a challenging process, but with dedication and consistent practice, I gradually improved my skills in the water.",
            reading_time_mins: "3",
            created_at: "2023-08-03T10:22:45.693Z",
            updated_at: "2023-08-03T14:31:01.835Z",
            author_id: 1,
            author: "Naman Bhansali",
            number_of_likes: 12,
            number_of_comments: 14
        },
        {
            id: 10,
            title: "Simply Put Your Mind Away To Enjoy This Moment Of Peace",
            topic: [
                "Mindfulness",
                "Music",
                "Peace",
                "Wellness",
                "Wellbeing"
            ],
            image: "1 wf85_2YmQzQFN0nu9y40sw.webp",
            text: "Today, I want to share a simple practice encapsulated by the title. Its effect can be enhanced by playing some pleasant instrumental music. Choose anything smooth and voiceless that evokes calmness and keep it low to medium volume, just hovering in the background. Then, relax on a bed or a chair of your choosing. The practice is deceptively simple, so you may struggle with it at first: simply put away your thoughts to be in this moment of peace. Allow yourself to fully enjoy the atmosphere of relaxation.",
            reading_time_mins: "5",
            created_at: "2023-08-03T10:22:45.693Z",
            updated_at: "2023-08-03T14:31:01.835Z",
            author_id: 1,
            author: "René Way",
            number_of_likes: 97,
            number_of_comments: 27
        },
        {
            id: 11,
            title: "A 400-Year-Old Philosopher Solves Our Climate Change Dilemma",
            topic: [
                "Environment",
                "Climate Change",
                "Philosophy",
                "Climate Action",
                "Pascals Wager"
            ],
            image: "1 sAZIR60VnORrXE8-27g5hg.webp",
            text: "Blaise Pascal was a 17th-century French mathematician, inventor, and philosopher, born 400 years ago in Clermont-Ferrand. (You can see the above floral tribute if you visit this year.) His significant contributions to the fields of probability and game theory and physical science and philosophy of religion are all the more remarkable in that Pascal passed away at the age of 39. Pascal also invented an early digital calculator. And the roulette wheel.",
            reading_time_mins: "9",
            created_at: "2023-08-03T10:22:45.693Z",
            updated_at: "2023-08-03T14:31:01.835Z",
            author_id: 1,
            author: "Ken Honeywell",
            number_of_likes: 34,
            number_of_comments: 24
        }
    ]);
    // const [filteredPosts, setFilteredPosts] = useState([]);
    const getAllPostsData = async () => {
        const mockURL = `https://7c5df6d5-e40e-40f9-bdd2-4e8319aa7075.mock.pstmn.io`;
        const res = await fetch(`${mockURL}/posts`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();
        // console.log("data");
        // console.log(data);
        if (res.status === 404
            // || !data
        ) {
            console.log("Error 404: while getting data in home ");
        } else {
            const topPosts = data.sort(
                (p1, p2) => (p1.number_of_likes < p2.number_of_likes) ? 1 : (p1.number_of_likes > p2.number_of_likes) ? -1 : 0)
                .slice(0, 5);
            ;
            setPosts(topPosts);
        }
    };
    useEffect(() => {
        console.log("loaded");
        getAllPostsData();
    }, []);

    return (
        <div className='component-container'>
            <div><h2>Trending on Medium-Clone</h2></div>
            {posts.map((post, key) => (
                <div className='posts-container' key={post.id}>
                    <Link to={`/allposts/postDetails/${post.id}`}>
                        <PostCard key={key} {...post}></PostCard>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default TopPosts;