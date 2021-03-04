import React from 'react'
import "./HomeFeed.css"
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption'
import ImageIcon from '@material-ui/icons/Image';

function HomeFeed() {
    return (
        <div className='homeFeed'>
            <div className='homeFeed_inputContainer'>
                <div className='homeFeed_input'>
                    <CreateIcon />
                    <form>
                        <input type="text"/>
                        <button type="submit">Post</button>
                    </form>
                </div>
                <div className="homeFeed_inputOption">
                    <InputOption Icon={ImageIcon} title='Upload Image'/>

                </div>
            </div>
        </div>
    )
}

export default HomeFeed

