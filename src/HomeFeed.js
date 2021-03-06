import React, { useState , useEffect } from 'react'
import "./HomeFeed.css"
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption'
import ImageIcon from '@material-ui/icons/Image';
import CheckIcon from '@material-ui/icons/Check';
import Post from './Post'
import { db } from './firebase'
import firebase from 'firebase'


function HomeFeed() {

    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy('timestamp','desc').onSnapshot((snapshot) =>
        setPosts(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            }))
        ))
    }, [])

    const sendPost = e => {
        e.preventDefault();

        db.collection('posts').add({
            name: 'sonny',
            description: 'test',
            message: input,
            photoUrl:'',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setInput("");
    };

    return (
        <div className='homeFeed'>
            <div className='homeFeed_inputContainer'>
                <div className='homeFeed_input'>
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text"/>
                        <button onClick={sendPost} type="submit">Post</button>
                    </form>
                </div>
                <div className="homeFeed_inputOption">
                    <InputOption Icon={ImageIcon} title='Upload Image'/>
                    <InputOption Icon={CheckIcon} title='Promotion'/>
                </div>
            </div>

            {/* Posts */}
            {posts.map(({ id, data: {name, description, message, photoUrl}}) => (
                <Post 
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
                />
            ))}

        </div>
    )
}

export default HomeFeed

