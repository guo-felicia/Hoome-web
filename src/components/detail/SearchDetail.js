import React, {useEffect} from 'react';
import {Axios} from "axios";

import {useDispatch, useSelector}
    from "react-redux";
import {findAllResults,findResultById} from "../../actions/house-actions";

function SearchDetail(props){
    // const houses = useSelector(
    //     state => state.houses);
    // const resultId = props.match.params.resultId;
    //
    // const dispatch = useDispatch();
    // useEffect(() =>
    //         findResultById(dispatch,houses),
    //     [dispatch,houses]);
    
    // useEffect(() => {
    //     Axios.get(`api/results/results_by_id?id=${resultId}`)
    //         .then(response => {
    //             setProduct(response.data[0])
    //         })
    //
    // }, [])

    return(
        <div>
            SearchDetail
        </div>
    )
}

export default SearchDetail;
