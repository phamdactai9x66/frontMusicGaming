import React, { useEffect } from 'react'
import { io } from "socket.io-client";

const TestSocket = () => {
    let server = "http://localhost:5000";
    useEffect(() => {
        io(server).on("Output", (data) => {
            console.log(data)
            // setlistMessage({ display: true, data: [...listMessage.data, { ...data, role: 1 }] })
        });
    }, [])


    const testRealTime = () => {
        io(server).emit("test1", { firstName: "thang", lastName: "pham dac" });
    }

    return (
        <>
            <button onClick={testRealTime}>test1</button>
        </>
    )
}

export default TestSocket
