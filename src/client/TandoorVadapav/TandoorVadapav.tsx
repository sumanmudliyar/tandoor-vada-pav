import { menuData } from '../../data/menuData'
import "./index.css"


const TandoorVadapav = () => {
  return (
 <div className="container">
      {/* Header */}
      

      <header className="header">
        <h1>Tandoor Vada Pav</h1>
        <p>Available on Swiggy & Zomato</p>
        <span>📞 90222717467</span>
      </header>

      {/* Sections */}
      {menuData.map((section) => (
        <div
          key={section.title}
          className="section"
        >
          <h2>{section.title}</h2>

          {section.items.map((item) => (
            <div
              key={item.name}
              className="item-row"
            >
              <span>{item.name}</span>
              <span className="price">
                ₹{item.price}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>  )
}

export default TandoorVadapav