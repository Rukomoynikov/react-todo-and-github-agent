import { Card } from 'primereact/card'

function About() {
  return (
    <>
      <h1>About</h1>
      <Card title="About This App" className="mb-3">
        <p>
          This is a simple React application built with Vite, TypeScript, and PrimeReact.
          It demonstrates the use of React Router to create a multi-page application.
        </p>
        <p>
          The application includes:
        </p>
        <ul>
          <li>React Router for navigation</li>
          <li>TypeScript for type safety</li>
          <li>PrimeReact for UI components</li>
          <li>Vite for fast development</li>
        </ul>
      </Card>
    </>
  )
}

export default About