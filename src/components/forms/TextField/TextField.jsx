import './TextField.css' 

export const TextField = ({onChange, value}) => {
  return (
    <input type="text" className="text-field" onChange={onChange} value={value} />
  )
}