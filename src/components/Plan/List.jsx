import React ,{useState} from 'react'

const List = () => {
    const classes = useStyles();
    const [type,setType] = useState('restaurants');
    const [rating,setRating] = useState('');

    return ( <div>

 <div className={classes.container}>
         <div variant='h4'>Restaurants, Hotels & Attractions aound you</div>
         <div className={classes.div}>
           <leble>Type</leble>
           <select value={type} onChange={(e) => setType(e.target.value)}>
              <div value="restaurants">Restaurants</div>
              <div value="hotels">Hotels</div>
              <div value="attractions">Attractions</div>             
           </select>
          </div>
          <div className={classes.div}>
           <label>Rating</label>
           <select value={rating} onChange={(e) => setRating(e.target.value)}>
              <div value={0}>All</div>
              <div value={3}>Above 3.0</div>
              <div value={4}>Above 4.0</div>
              <div value={4.5}>Above 4.5</div>
           </select>
          </div>
     </div>


    </div> );
}
 
export default List;