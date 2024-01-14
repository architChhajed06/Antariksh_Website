import React from 'react'
import BlogItem from '../blogItem/BlogItem'
import styles from '../blogSection/BlogSection.module.css'

const BlogSection = () => {
  return (
    <div className={`${styles.blogSection}`}>
        {/* <div className={`${styles.blogHeading}`}>
            <h1>Astronomy</h1>
        </div> */}
        <div className={`${styles.blogsContainer}`}>
            <BlogItem link={"https://media.wired.com/photos/59268ae1af95806129f4fccf/master/w_2560%2Cc_limit/CassiniTA-680803307.jpg"}/>
            <BlogItem link={
                "https://cdn.mos.cms.futurecdn.net/GY9JBbrzsGsz2psUv6pgdV.jpg"
            }/>
            <BlogItem link={
                "https://s.abcnews.com/images/Technology/science-trip-mars-space-tourism-01-sh-llr-210724_1627160773605_hpMain_16x9_992.jpg"
            }/>
            <BlogItem link={
                "https://s.abcnews.com/images/Technology/science-trip-mars-space-tourism-01-sh-llr-210724_1627160773605_hpMain_16x9_992.jpg"
            }/>
            <BlogItem link={
                "https://s.abcnews.com/images/Technology/science-trip-mars-space-tourism-01-sh-llr-210724_1627160773605_hpMain_16x9_992.jpg"
            }/>
            <BlogItem link={
                "https://s.abcnews.com/images/Technology/science-trip-mars-space-tourism-01-sh-llr-210724_1627160773605_hpMain_16x9_992.jpg"
            }/>
            <BlogItem link={
                "https://s.abcnews.com/images/Technology/science-trip-mars-space-tourism-01-sh-llr-210724_1627160773605_hpMain_16x9_992.jpg"
            }/>
        </div>
  </div>
  )
}

export default BlogSection