import React, { useState } from 'react'
import "./HomeFeed.css"
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption'
import ImageIcon from '@material-ui/icons/Image';
import CheckIcon from '@material-ui/icons/Check';
import Post from './Post'


function HomeFeed() {

    const [posts, setPosts] = useState([]);

    const sendPost = e => {
        e.preventDefault();
    }

    return (
        <div className='homeFeed'>
            <div className='homeFeed_inputContainer'>
                <div className='homeFeed_input'>
                    <CreateIcon />
                    <form>
                        <input type="text"/>
                        <button onClick={sendPost} type="submit">Post</button>
                    </form>
                </div>
                <div className="homeFeed_inputOption">
                    <InputOption Icon={ImageIcon} title='Upload Image'/>
                    <InputOption Icon={CheckIcon} title='Promotion'/>
                </div>
            </div>

            {/* Posts */}
            {posts.map((post) => (
                <Post />
            ))}
            <Post name='karol' description='this is a test' message='hello'/>

        </div>
    )
}

export default HomeFeed

