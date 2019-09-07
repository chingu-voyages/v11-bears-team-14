import gql from 'graphql-tag';
import client from "./apollo-config";

export function checkUsernameAvailability({ username }) {
    return (
        client.query({
            query: gql`
                query {
                    usernameAvailability(username:"${username}"){
                        availability
                    }
                }
            `,
        })
    )
}