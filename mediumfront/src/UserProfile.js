import axios from 'axios';
import { useEffect, useState } from 'react';
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { useNavigate } from 'react-router-dom';

export default function UserProfile(props) {

  const navigate = useNavigate();

  const [user, setUser] = useState([]);

  useEffect(() => {
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
      }).then((data) => {

        console.log("data");
        console.log(data);
        setUser([data]);
      })
        .catch((error) => {
          console.log(error);
          alert("NO USER FOUND");
          if (error == "Sign up or login") {
            navigate('/userlogin');
          }

        })
    }
  }, [])

  const saveChanges = (x1, x2, x3) => {
    axios.patch('http://127.0.0.1:3003/profile_edit', {
      name: x1,
      speciality: x3,
      interest: x2
    }, {
      headers: {
        Authorization: localStorage.Authorization
      }
    }).then((data) => {

      console.log("Saving the changes", data);
    })
      .catch((error) => {
        console.log(error);
      })
  }


  const Edit = () => {
    const btn = document.getElementById("p_edit");
    let name = document.getElementById("p_name").children[0];
    let interest = document.getElementById("p_interest").children[0];
    let speciality = document.getElementById("p_speciality").children[0];

    if (btn.innerHTML == "Edit") {
      btn.innerHTML = "Save";
      name.contentEditable = true;
      name.style.border = "2px solid black";
      interest.style.border = "2px solid black";
      speciality.style.border = "2px solid black";
      interest.contentEditable = true;
      speciality.contentEditable = true;
    }
    else {
      name.contentEditable = false;
      name.style.border = "white";
      interest.style.border = "white";
      speciality.style.border = "white";
      interest.contentEditable = false;
      speciality.contentEditable = false;

      let x1 = name.innerHTML.replaceAll('&nbsp;', ' ');
      let x3 = interest.innerHTML.replaceAll('&nbsp;', ' ');;
      let x4 = speciality.innerHTML.replaceAll('&nbsp;', ' ');;

      saveChanges(x1, x3, x4);
      btn.innerHTML = "Edit";
    }
  }
  return (
    <div style={{ margin: "20px" }}>
      <h2 style={{ margin: "10px", textAlign: "center" }}>Your Profile</h2>
      {
        user.map((item, idx) => {
          return <Box
            sx={{
              width: '100%',
              position: 'relative',
              overflow: { xs: 'auto', sm: 'initial' },
            }}
            key={idx}
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
                <Typography id="p_name" fontSize="xl" fontWeight="lg">
                  Fullname: <span>{item.name}</span>
                </Typography>
                <Typography id="p_username" level="body-sm" fontWeight="lg" textColor="text.tertiary">
                  Username: <span>{item.username}</span>
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
                      Interests
                    </Typography>
                    <Typography id="p_interest" fontWeight="lg"><span>{item.interest}</span></Typography>
                  </div>
                  <div>
                    <Typography level="body-xs" fontWeight="lg">
                      Speciality
                    </Typography>
                    <Typography id="p_speciality" fontWeight="lg"><span>{item.speciality}</span></Typography>
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
                    <Typography fontWeight="lg">{item.articles.length}</Typography>
                  </div>
                  <div>
                    <Typography level="body-xs" fontWeight="lg">
                      Followers
                    </Typography>
                    <Typography fontWeight="lg">{item.follows.length}</Typography>
                  </div>
                </Sheet>
                <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 } }}>
                  <Button onClick={(e) => { navigate('/userPosts') }} variant="outlined" color="neutral">
                    My Posts
                  </Button>
                  <Button onClick={() => { Edit() }} id="p_edit" variant="solid" color="primary">
                    Edit
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        })
      }
    </div>
  );
}
