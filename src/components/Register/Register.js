import React from 'react';
import { checkUsernameAvailability } from '../../util/createQuery';
import { async } from 'q';

function Register() {

    const checkAvailableUsername = async () => {
        console.log(" checkAvailableUsername ");
    }

    return (
        <div>
            <h1>REGISTER CONTAINER</h1>
            <button onClick={checkAvailableUsername}>Click Me!</button>
        </div>
    );
}

export default Register;
