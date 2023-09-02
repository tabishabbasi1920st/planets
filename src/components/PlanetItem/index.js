import './index.css'

const PlanetItem = props => {
  const {eachObj} = props
  const {name, imageUrl, description} = eachObj
  return (
    <div className="planet-item-container">
      <img src={imageUrl} alt={name} className="planet-img" />
      <h1 className="planet-name">{name}</h1>
      <p className="planet-description">{description}</p>
    </div>
  )
}

export default PlanetItem
