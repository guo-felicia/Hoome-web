import * as React from 'react';

const EmptyReviews = () => {
    return(
        <div className="mt-4 mb-4 ms-2">
            <h2 className="mb-5">Favorites List</h2>
            <h5 className="text-info mb-2 fst-italic">The Reviews List is now Empty</h5>
            <h4 className="text-secondary">Go and Browse something you are Interested in!</h4>
        </div>

    )
}

export default function Reviews() {
    // HD here. Just the initial no data page.
    return(
        <EmptyReviews/>
    )
}