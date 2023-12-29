import React from 'react'
import { useDispatch } from 'react-redux';
import {removeCart} from '../redux/dataSlice';


interface CardProps {
  title: string;
  rating: number;
  description: string;
}

    const Card:React.FC<CardProps> = ({title,rating,description}) => {
      const dispatch = useDispatch();
      const handledelete=()=>{
        const productToRemove:CardProps = { title, rating, description };
        dispatch(removeCart(productToRemove));
      }
      return (
      <>
          <div className='card'>
            <img src={"https://cdn.pixabay.com/photo/2017/07/26/06/34/art-2540641_1280.png"} alt=''></img>
            <h2>Title {title}</h2>
          <h3>Description {description.slice(0,20)+"..."}</h3>
          <p>Rating: {rating}</p>
          <button onClick={handledelete}>Delete</button>
          
        </div>
        </>
      )
    }

    export default Card
