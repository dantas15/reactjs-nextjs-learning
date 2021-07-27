import './styles.css'

const TextInput = ({searchValue, handleChange}) => {
  return (
    <input 
      className="text-input"
      onChange={handleChange}
      value={searchValue}
      type="search"
      placeholder="Search here"
    />
  )
}

export { TextInput }