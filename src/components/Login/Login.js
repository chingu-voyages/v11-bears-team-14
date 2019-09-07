import React from 'react';

import { checkUsernameAvailability } from '../../util/createQuery';

function Login() {

    const doLogin = async () => {
        console.log(" doLogin ::");
    }

    return (
        <div>
            <h1>LOGIN CONTAINER</h1>
            <button onClick={doLogin} className="btn btn-primary">Click Me!</button>
        </div>
    );
}

export default Login;
