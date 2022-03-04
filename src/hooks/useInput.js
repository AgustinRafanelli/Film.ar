import { useState } from "react"

function useInput(initValue) {
  const [value, setValue] = useState("")
  if (value === "") setValue(initValue)
  const onChange = (e) =>{
    setValue(e.target.value)
  }
  return {value, onChange}
}

export default useInput