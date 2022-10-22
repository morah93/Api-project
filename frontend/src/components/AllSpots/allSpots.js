import {  useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAllSpots } from "../../store/spots";
import "./allSpots.css";
// import spotReducer from "../../store/spots";

//Get All Spots Home
// get all spots will be displayed in home
const AllSpots = (spot) => {
  const dispatch = useDispatch();
  let allSpots = useSelector((state) => state.spot.allSpots); //useSelector for the state being used to attain info
  let allSpotsArr;
    // = Object.values(allSpots) // attained info in array

  //create function for currentSpot
  // console.log("this is all spots", allSpots, allSpotsArr)
  useEffect(() => {
    console.log('----------------useEffect')
    dispatch(getAllSpots())
  }, [])

  if (allSpots) {
   allSpotsArr = Object.values(allSpots)
  }
  // const user = useSelector(state => state.session.user);
  // if (!allSpotsArr.length) return null;

  return (
    <>
      <div className="outerSpotContainer">
      <ul>
          {
            allSpotsArr &&
          allSpotsArr.map(spot => (
            <div className="spotCard">
              <NavLink to={`/spots/${spot.id}`}>
              <img className="spotImg" src={spot?.previewImage} />
              </NavLink>
              <div className="allSpotsInfo">
              <div>{spot?.name}</div>
              <div>{spot?.address}</div>
              <div>{spot?.city}</div>
              <div>{spot?.state}</div>
              <div>{spot?.description}</div>
              <div>{spot?.avgRating}</div>
              <div>{spot?.price}</div>
              </div>
            </div>
          ))
        }
      </ul>
      </div>
    </>
  );
};

export default AllSpots;