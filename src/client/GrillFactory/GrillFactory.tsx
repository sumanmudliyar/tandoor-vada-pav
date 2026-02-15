import { grillFactoryMenu } from '../../data/grillFactoryMenu'
import "./index.css"

const GrillFactory = () => {
  return (
 <div className="container">
      {/* Header */}

      <header className="header">
        <h1>Grill Factory</h1>
        <p>Available on Swiggy & Zomato</p>
        {/* <span>📞 90222717467</span> */}
      </header>
      

      {/* Sections */}
      {grillFactoryMenu.map((section) => (
        <div
          key={section.title}
          className="section"
        >
          <h2>{section.title}</h2>

          {section.items.map((item: any) => (
            <div
              key={item.name}
              className="item-row"
            >
              <span className="item-name">{item.name}</span>
              <span className="price">
                ₹{item.price}
              </span>

              {item.description && (
      <p className="description">
        {item.description}
      </p>
    )}
            </div>
          ))}
        </div>
      ))}
    </div>  
    
  )
}

export default GrillFactory