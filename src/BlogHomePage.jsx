import { useState } from 'react'
import styles from './BlogHomePage.module.css'
import IntroBox from './components/introBox/IntroBox'
import BlogSection from './components/blogSection/blogSection'


function BlogHomePage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className={`${styles.box}`}>
        {/* Navigation Bar */}
      </div>
      <IntroBox />
      <hr />
      <BlogSection />
    </>
  )
}

export default BlogHomePage;














