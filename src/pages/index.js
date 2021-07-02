// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1>My First Gatsby site!</h1>
      <Link to="/about">About Me</Link>
      <p>I made this as part of my EAcad internship, week 1.</p>
      <Link to="/blank">New Page</Link>
      <p>I have added a new page for you. Hope you like it!</p>
      
    </main>
  )
}

// Step 3: Export your component
export default IndexPage