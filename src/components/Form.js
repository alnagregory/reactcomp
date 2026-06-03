import { useState } from "react"

function Form() {

  const [name, setName] = useState("")

  function handleSubmit(event) {
    event.preventDefault()
    alert("Submitted: " + name)
  }

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button type="submit">
        Submit
      </button>

    </form>
  )
}

export default Form