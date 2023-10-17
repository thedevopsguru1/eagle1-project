import http from "k6/http";
import { group, check, sleep } from "k6";

const BASE_URL = `${__ENV.CI_ENVIRONMENT_URL}/`;
// Sleep duration between successive requests.
// You might want to edit the value of this variable or remove calls to the sleep function on the script.
const SLEEP_DURATION = 0.1;
// Global variables should be initialized.

//import exec from 'k6/execution';
// export function setup() {
//     // register a new user and authenticate via a Bearer token.
//     const body = JSON.stringify({
//         email: `user${exec.vu.idInTest}@email.com`,
//         username: `user${exec.vu.idInTest}`,
//         password: "password",
//     });

//     const params = {
//         headers: { 
//             'Content-Type': 'application/json'
//         },
//     };
//     const request = http.post(`${BASE_URL}/api/users/register`, body, params);

//     check(request, { "OK":      (r) => r.status === 200 });
//     check(request, { "Created": (r) => r.status === 201 });

//     return authToken;
// }

export default function(authToken) {

    group("root tests", () => {   

        // Request No. 1
        {
            let request = http.get(BASE_URL);

            check(request, {
                "Success|OK": (r) => r.status === 200
            });
        }
    });
};
