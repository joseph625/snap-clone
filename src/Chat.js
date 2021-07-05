import { Avatar } from '@material-ui/core'
import React from 'react'
import './chat.css'
import StopRoudedIcon from '@material-ui/icons/StopRounded'
import ReactTimeago from 'react-timeago'
import { selectImage } from './features/appSlice'
import { useDispatch } from 'react-redux'
import { db } from './firebase'
import { useHistory } from 'react-router-dom'
function Chat({id, username, timestamp, read, imageUrl, profilePic}) {

    const dispatch = useDispatch()
    const history = useHistory()
    const open = () =>{

        if(!read){
            dispatch(selectImage(imageUrl));
            db.collection('posts').doc(id).set(
                {
                    read: true,
                },
                {
                    merge: true
                }
            )
            history.push('/chats/view');
        }else{
            console.log("aldfjka")
        }

    }


    return (
        <div onClick={open} className='chat'>
            <Avatar src={profilePic}/>
            <div className="chat__info">
                <h4>{username}</h4>
                <p> {!read && 'Tap to view -'} <ReactTimeago date = {new Date(timestamp?.toDate())
                .toUTCString()} /> </p>
            </div>

            {!read && <StopRoudedIcon className="chat__readIcon" />}
            
        </div>
    )
}

export default Chat
