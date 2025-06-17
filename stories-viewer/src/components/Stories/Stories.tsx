import React, { act, useEffect, useState } from 'react'
import "./Stories.css";
import { DEFAULT_TIME, IMAGES } from '../../constants/constant';

export const Stories = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            if(activeIndex === IMAGES.length - 1){
                setActiveIndex(0);
            }
            else{
                setActiveIndex((prev) => prev + 1);
            }
        }, DEFAULT_TIME);

        return () => clearInterval(intervalId);
    }, [activeIndex]);

    console.log("active index", activeIndex)
  return (
    <div className='root'>
        <div className='lines'>
            {IMAGES?.map((_, idx) => (<div className='lineParent' style={{width: `${500/IMAGES.length}px`}}>
                <div className='line'></div>
            </div>))}
        </div>
        {IMAGES[activeIndex] && (
            <div className='image'>
                <img src={IMAGES[activeIndex]} alt='image' />
                <div className='overlay'>
                    <div className='left' onClick={() => {
                        if(activeIndex === 0){
                            setActiveIndex(IMAGES.length - 1);
                        }
                        else{
                            setActiveIndex((prev) => prev - 1)
                        }
                    }}></div>
                    <div className='right' onClick={() => {
                        if(activeIndex === IMAGES.length - 1){
                            setActiveIndex(0);
                        }
                        else{
                            setActiveIndex((prev) => prev + 1)
                        }
                    }}></div>
                </div>
            </div>
        )}
    </div>
  )
}