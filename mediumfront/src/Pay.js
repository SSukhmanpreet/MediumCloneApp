import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Pay = (props) => {
    const navigate = useNavigate();
    const [val, setVal] = useState(100);

    useEffect(() => {
        if (props.authorization == "") {

            navigate('/userlogin');
        }


    }, [])

    const pay = () => {



        fetch(`http://127.0.0.1:3003/pay`,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.Authorization
                },
                body: JSON.stringify({
                    amount: val
                })
            }).then((res) => {
                return res.json();
            }).then((res) => {
                console.log(res);
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
            })


    }

    return (
        <div style={{ margin: "10px" }}>
            <button onClick={() => navigate(-1)} style={{ margin: "10px", padding: "5px" }}>Back</button>
            <h1 style={{ margin: "10px 0px" }}>Daily Quota reached, Kindly pay premium to view more posts.</h1>
            <input placeholder="Enter Amount" id="amount" value={val} onChange={(e) => { setVal(e.target.value) }}></input>
            <button onClick={() => { pay(); }}>Pay</button>
        </div>
    )
}

export default Pay;