import * as React from 'react';

const EmptyFollowing = () => {
    return(
        <div className="mt-4 mb-4 ms-2">
            <h2 className="mb-5">Favorites List</h2>
            <h5 className="text-info mb-2 fst-italic">The Following List is now Empty</h5>
            <h4 className="text-secondary">Go and Find the First Person you want to Follow!</h4>
        </div>

    )
}

export default function Following() {
    // HD here. Just the initial no data page.
    return(
        <EmptyFollowing/>
    )
}