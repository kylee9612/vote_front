import React, {useState} from "react";
import axios from "axios";

import Swal from "sweetalert2";

function Alert() {
    const handleAlert = () => {
        axios.get('/api/test/test1')
            .then(function (json) {
                console.log(json);
                // Swal.fire({
                //     title: "알림",
                //     html:"["+json.code+"]"+ json.message
                // })
            })
            .catch(json => {
                console.log(json)
            })

    }
    return (
        <div>
            <h1 onClick={handleAlert}>123123</h1>
        </div>
    );
}

export default Alert;