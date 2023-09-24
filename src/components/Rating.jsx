import React from 'react'
import {AiFillStar , AiOutlineStar} from 'react-icons/ai';

export default function Rating({rating , onClick, style}) {
  return (
    <div>
        {
            [...Array(5)].map((_,i) => <span key = {i} onClick = {() => onClick(i)} style = {style}>
                
                {rating > i ? 
                    <AiFillStar size = {15} />
                : 
                    <AiOutlineStar size = {15} />
                }
            </span>)
        }
    </div>
  )
}
