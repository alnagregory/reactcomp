

import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'
import Button from './components/Button'
import Form from './components/Form'

function App() {

  function showMessage() {
    alert("Button Clicked!")
  }

  return (
    <div>

      <Header />

      <h2>CARDS</h2>

      <Card
        title="HTML"
        description="Used for webpage structure"
      />

      <Card
        title="CSS"
        description="Used for styling webpages"
      />

      <Card
        title="React"
        description="JavaScript library for UI"
      />

      <h2>BUTTON</h2>

      <Button
        text="Click Here"
        clickFunction={showMessage}
      />

      <h2>Form Component</h2>

      <Form />

      <Footer />

    </div>
  )
}

export default App