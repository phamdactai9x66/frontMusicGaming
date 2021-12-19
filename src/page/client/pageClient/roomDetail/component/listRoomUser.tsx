import React, { useEffect, useState, useRef } from 'react'
import { Avatar, Badge } from "@mui/material";
import { styled } from '@mui/material/styles';
import roomUser from "api/roomUser";
import { HandleGet, tranFormDataId } from "component/MethodCommon"
import { RouteComponentProps, withRouter } from "react-router-dom";
import { variableCommon } from "component/variableCommon"
import userApi from "api/useApi"
import { io } from "socket.io-client";
interface ListRoomUserIF<T> extends RouteComponentProps {

}
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

const ListRoomUser: React.FC<ListRoomUserIF<any>> = ({ match, ...props }) => {
    const [userRoom, setUserRoom] = useState({ display: true, data: [] });
    const [renderUser, setrenderUser] = useState<number>(0)
    const saveUser = useRef<any>(null)
    const server = variableCommon.localhost;
    useEffect(() => {
        io(server).on("joined", (date: number) => {
            if (date) {
                setrenderUser(date);
            }
        });
    }, [])
    // console.log('xin chao')

    useEffect(() => {
        (async () => {
            const { data } = await userApi.getAll({});
            saveUser.current = tranFormDataId<any[]>(data);
        })()

    }, [])
    useEffect(() => {
        (async () => {
            // if (!userRoom.display) return
            const idRoom = (match.params as any).idRoom;
            const [data, error] = await HandleGet(roomUser.getAll, { _idRoom: idRoom })
            if (error || data.status === variableCommon.statusF) return;
            setTimeout(() => {
                setUserRoom({ display: true, data: data.data })
            }, 1500);
        })()
        return () => {
            // setUserRoom(value => ({ ...value, display: false }))
        }
    }, [renderUser])
    const listUserInRoom = () => {
        // console.log(userRoom.data)
        return userRoom.data.map((current: any, index: number) => {
            const findUser = saveUser.current?.[current?.id_User];
            return (<div>
                <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot"
                    key={index}
                >
                    <Avatar alt="Remy Sharp" src={findUser?.avatar} />
                </StyledBadge>

            </div>)
        })
    }
    return (
        <>
            {listUserInRoom()}
        </>
    )
}

export default withRouter(ListRoomUser)
