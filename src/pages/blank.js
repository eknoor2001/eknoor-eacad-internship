import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const NewPage = () => {
  return (
      <div>
        <title>New Page</title>
        <Link to="/">Back to Home</Link>
        <p>Hi Eknoor👋 Please accept my pull request!</p>
        <StaticImage
            alt="Smiley face image"
            src="../images/smile.png"
        />
      </div>
  )
}

export default NewPage