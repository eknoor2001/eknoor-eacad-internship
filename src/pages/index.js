// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'


// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I made this as part of my EAcad internship, week 1.</p>
      <StaticImage
        alt="My Picture"
        src="https://yt3.ggpht.com/pCk1gpdqAAdqiqexfZdmkyxRxO04eEV5JLw3kzNfreP5RPWqmO66bkjRuf4gA7F-ihskQ_Pz=s900-c-k-c0x00ffffff-no-rj"
      />
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage