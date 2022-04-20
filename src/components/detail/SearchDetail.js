import React from 'react';
import {useLocation, useParams} from "react-router-dom";
import '../../style/DetailPage.css'
import StarIcon from "@material-ui/icons/Star";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ThingsToKnow from "./ThingsToKnow";

const SearchDetail = () => {
    const location = useLocation();
    const house = location.state.house;
    
    return (
        <div className='detail'>
            <h2 className='bg'>{house.name}</h2>
            
            {/*TITLE*/}
            <div className="searchResult__stars rating">
                <StarIcon className="searchResult__star"/>
                <p>{house.rating}</p>
                <p className='middle_dot'> · </p>
                <p>{house.reviewsCount} reviews</p>
                <p className='middle_dot'> · </p>
                <p>{house.address}</p>
                <div className="heart">
                    <FavoriteBorderIcon/>
                    <p className='heart_text'>save</p>
                </div>
            
            </div>
            
            {/*Main contents*/}
            <div className="row main">
                <div className="info">
                    <h2 className='banner_title'>
                        {house.type} hosted by our friendly host
                    </h2>
                    <img className="avatar" src={house.hostThumbnail} alt="Avatar"/>
                    <p>{"Beds: " + house.beds + "  ·  Bedrooms: " + house.bedrooms + "  ·  Bathrooms: " + house.bathrooms}</p>
                    <p>___</p>
                    <h3 className='banner_title'>Amenities</h3>
                    <ul>
                        {house.previewAmenities.map((item) =>
                            <li>
                                {item}
                            </li>
                        )}
                    </ul>
                    <h3 className='banner_title'>Neighborhood</h3>
                    {house.neighborhood}
                
                </div>
                <div className='image-block'>
                    {house.images.map((image) => <div className='column'>
                        <img className='img' src={image}/>
                    </div>)}
                </div>
            </div>
            
            {/*Things to Know*/}
            <ThingsToKnow/>
        
        </div>);
};

export default SearchDetail;

// const SearchDetail = () => {
//     const [houseDetail, setHouseDetail] = useState({});
//     const searchId = useParams();
//     const API_KEY =`7a2781c7a8msh9bcc2f46e40f15cp13108ejsnd4d34bb1cfc4`
//     console.log(searchId)
//
//     const URL = `https://airbnb13.p.rapidapi.com/search-location/?rapidapi-key=${API_KEY}`
//     const fetchResultById = async () => {
//       const response = await  axios(`${URL}=${searchId}`)
//         setHouseDetail(response.data)
//     }
//
//     useEffect(() => {
//         fetchResultById();
//     }, [fetchResultById]);
//
//     return (
//         <div>
//             <h1>SearchDetail</h1>
//         </div>
//     );
// };
//
// export default SearchDetail;


// function SearchDetail(props){
//     // const houses = useSelector(
//     //     state => state.houses);
//     const resultId = props.match.params.id;
//     //
//     // const dispatch = useDispatch();
//     // useEffect(() =>
//     //         findResultById(dispatch,houses),
//     //     [dispatch,houses]);
//
//     // useEffect(() => {
//     //     Axios.get(`api/results/results_by_id?id=${resultId}`)
//     //         .then(response => {
//     //             setProduct(response.data[0])
//     //         })
//     //
//     // }, [])
//
//     return(
//         <div>
//             SearchDetail
//         </div>
//     )
// }
//
// export default SearchDetail;
