import { useState } from "react"
import { Rate } from 'antd';


const Rater = () => {

  const [value, setValue] = useState(3)

  const handleChange = value => {
    setValue(prev => value)
  }
  return (
    <span>
      <Rate onChange={handleChange} value={value} />
      {value ? <span className="ant-rate-text"></span> : ''}
    </span>
  )
}

export default Rater
