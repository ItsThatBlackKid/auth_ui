const axios = require("axios");
const {useState} = require("react");
const {useEffect} = require("react");

/**
 * @name Verify
 * @description Verify container that handles email verification against api
 *
 *
 */
const  Verify = () => {
    const [loading, setLoading] = useState(false)
    const [verified, setVerified] = useState(false)
    const [error, setError] = useState("");

    // check the token against the backend and sets state accordingly.
    useEffect(() => {
        setLoading(true);

        let search = window.location.search;
        let params = new URLSearchParams(search);
        let token = params.get('token');

        axios.get('http://localhost:8080/users/verify', {
            params: {
                token: token
            }
        }).then(res => {
            setVerified(true);
            setLoading(false);
        }).catch(err => {
            setLoading(false);
            console.log(err)
            setError("Sorry, it appears this token is invalid")
        })
    },[]);



    return <>
        <h1>Email Verification</h1>
        {
            loading && <p>Loading...</p>
        }
        {
            verified && <p>Successfully verified</p>
        }
        {
            (error !== "") && <p>{error}</p>
        }
    </>
}

export default Verify;