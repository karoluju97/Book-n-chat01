import { Avatar } from "@material-ui/core";
import React from 'react';
import './Post.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import InputOption from './InputOption'
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import BookIcon from '@material-ui/icons/Book';

function Post({ name, description, message, photoUrl }) {
    return (
        <div className='Post'>
            <div className="post_header">
                <Avatar />
                <div className="post_info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="past_body">
                <p>{message}</p>
            </div> 

            <div className="post_buttons">
                <InputOption Icon={ThumbUpIcon} title="Like" />    
                <InputOption Icon={CommentIcon} title="Comment" />    
                <InputOption Icon={ShareIcon} title="Share" />    
                <InputOption Icon={BookIcon} title="Bookmark" />    
            </div>           
        </div>
    )
}

export default Post
