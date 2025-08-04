import React from "react";

/*
    TODO:
    Add inputs for 
    - Lookup all possible profiles for social medias or accounts that people would like to share
*/

function Card() {
    return (
        <div>
            <form
                action="submit"
                className="grid grid-cols-1 grid-rows-auto gap-2 mt-5"
            >
                <input
                    type="text"
                    placeholder="Link to LinkedIn"
                    className="px-5 border-1 rounded-sm h-10"
                />
                <input
                    type="text"
                    placeholder="Link to Youtube"
                    className="px-5 border-1 rounded-sm h-10"
                />
                <input
                    type="text"
                    placeholder="Link to Instagram"
                    className="px-5 border-1 rounded-sm h-10"
                />
                <input
                    type="text"
                    placeholder="Link to Facebook"
                    className="px-5 border-1 rounded-sm h-10"
                />
                <input
                    type="text"
                    placeholder="Link to Snapchat"
                    className="px-5 border-1 rounded-sm h-10"
                />

                <button
                    type="submit"
                    className="inline-block rounded-sm border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden"
                >
                    Fire It Up
                </button>
                <button
                    type="submit"
                    className="inline-block rounded-sm border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden"
                >
                    Check out the others!
                </button>
            </form>
        </div>
    );
}

export default Card;
