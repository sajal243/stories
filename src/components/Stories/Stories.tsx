import { useEffect, useState } from 'react'
import "./Stories.css";
import { DEFAULT_TIME, IMAGES } from '../../constants/constant';

export const Stories = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    useEffect(() => {
        const intervalId:NodeJS.Timeout = setInterval(() => {
            setActiveIndex((prev) => (prev === IMAGES.length - 1 ? 0 : prev + 1));
        }, DEFAULT_TIME);

        return () => {
            clearInterval(intervalId);
        };
    }, [activeIndex]);

  return (
    <div className='root'>
        <div className='lines'>
            {IMAGES?.map((_, idx) => (<div key={idx} className={`lineParent ${idx < activeIndex ? "visited": ""}`}>
                <div className={`line ${idx === activeIndex ? 'active' : ""}`} style={{animationDuration: `${DEFAULT_TIME}ms`}}></div>
            </div>))}
        </div>
        {IMAGES[activeIndex] && (
            <div className='image'>
                <img src={IMAGES[activeIndex]} alt='image' />
                <div className='overlay'>
                    <div className='left' onClick={() => {
                        setActiveIndex((prev) => (prev === 0 ? IMAGES.length - 1 : prev - 1));
                    }}></div>
                    <div className='right' onClick={() => {
                        setActiveIndex((prev) => (prev === IMAGES.length - 1 ? 0 : prev + 1));
                    }}></div>
                </div>
            </div>
        )}
    </div>
  )
}