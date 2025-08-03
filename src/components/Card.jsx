import React from "react";

/*
    TODO:
    Add inputs for 
    - Lookup all possible profiles for social medias or accounts that people would like to share
    - Linkedin
    - Youtube
    - Instagram
    - Facebook
    - Snapchat
*/

function Card() {
    return (
        <div>
            <form action="submit">
                <input
                    type="text"
                    placeholder="Link to Youtube"
                    className="border-1"
                />
            </form>
        </div>
    );
}

export default Card;
