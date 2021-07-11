import Textbox from "../../components/textbox/Textbox";
import {useState} from "react";
import "./Signup.css"
import axios from "axios";

/**
 * @name Signup
 * @description Container that allows users to signup
 *
 */
const Signup = () => {
    const [email, setEmail] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const [success, setSuccess] = useState();

    return (
        <form id={"signup"} onSubmit={(e) => {
            e.preventDefault();
            // send data to server
            axios.post("http://localhost:8080/users", {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password,
                    addresses: [],
            }).then( res => {
                setSuccess(true);
                setError(false);
            }).catch((err) => {
                setError(true);
                setSuccess(false);
            })
        }
        }>
            <Textbox
                value={email}
                inputID={"email"}
                inputName={"email"}
                onChangeFunc={setEmail}
                type={"text"}
            />
            <Textbox
                value={firstName}
                inputID={"firstname"}
                inputName={"firstname"}
                onChangeFunc={setFirstName}
                type={"text"}
            />
            <Textbox
                value={lastName}
                inputID={"lastname"}
                inputName={"lastname"}
                onChangeFunc={setLastName}
                type={"text"}
            />
            <Textbox
                value={password}
                inputID={"password"}
                inputName={"password"}
                onChangeFunc={setPassword}
                type={"password"}
            />
            <input type={"submit"} />
            {
                success && <p>Successfully signed up</p>
            }
            {
                error && <p>Error signing up</p>
            }
        </form>
    )
}

export default Signup