import React, { useEffect } from 'react'
import styles from '../blogItem/Blog2.module.css'
import { AiFillLike } from "react-icons/ai";
import { GoHeartFill } from "react-icons/go";
import { SlLike } from "react-icons/sl";
import { IoPersonSharp } from "react-icons/io5";
import { FaShareSquare } from "react-icons/fa";
import { useState } from 'react';


const BlogItem = (props) => {
    const [color, setColor] = useState("grey");
    const [likePressed, setLikePressed] = useState(false);
    const source = props.link;



    function isLikePressed(){
        if(likePressed){
            setColor("red");
        }
        else{
            setColor("grey");
        }
    }



    useEffect(isLikePressed, [likePressed])
  return (
    <div className={`${styles.blogItem}`}>



        <div className={`${styles.blogImgContainer}`}>

            <img src={`${source}`}/>

        </div>


        <div className={`${styles.blogInfoContainer}`}>
            <h2 className={`${styles.blogTitleContainer}`}>
                Scientists Found Water On Mars! This could lead to new discoveries such as microbes and life
            </h2>
            <div className={`${styles.blogDesc}`}>
            <div className={`${styles.readDesc}`}>
                For decades, measurements of the universe's expansion have suggested a disparity, which threatens to break cosmology as we know it. The James Webb Space Telescope is looking at it. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum ad nisi vel blanditiis neque earum non id et aliquid ipsum.
            </div>
            <div className={`${styles.readMorelink}`}>Read More</div>
            </div>
            <div className={`${styles.blogMetaDet}`}
            >
                <div className={`${styles.likeContainer}`} onClick={()=>{setLikePressed(!likePressed)}}>
                    <GoHeartFill size={23} color={color}/>
                </div>
                <div className={`${styles.likeCountContainer}`}>
                    32k
                </div>
                <div className={`${styles.authorNameContainer}`}>
                    <div className={`${styles.authorBox}`}>
                        <div className={`${styles.logoNameContainer}`}>
                            <IoPersonSharp />
                            Bhupendra Jogi
                        </div>
                    </div>
                </div>
                <div className={`${styles.dateContainer}`}>
                    Nov 15, 2023
                </div>
                <div className={`${styles.shareContainer}`}>
                    <FaShareSquare color='#69b4cc' size={23}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogItem