import * as React from 'react';

const EmptyFollowers = () => {
    return(
        <div className="mt-4 mb-4 ms-2">
            <h2 className="mb-5">Favorites List</h2>
            <h5 className="text-info mb-2 fst-italic">The Followers List is now Empty</h5>
        </div>

    )
}

export default function Followers() {
    // HD here. Just the initial no data page.
    return(
        <EmptyFollowers/>
    )
}