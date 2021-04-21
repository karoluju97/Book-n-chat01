import React from "react";
import "./Sidebar.css";

function Sidebar() {

    const recentSearches = (topic) => (
        <div className="sidebar_recentSearches">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>

    )

    return(
        <div className="sidebar">
            <p>Recent Searches</p>
            {recentSearches("Harry Potter and the Goblet of Fire")}
            {recentSearches("Shingeki no Kyojin")} 
            {recentSearches("I am Zlatan Ibrahimovic")} 
            {recentSearches("Marvel Comics")}
            {recentSearches("DC Comics")}
        </div> 
        );
}

export default Sidebar;