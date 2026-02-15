import { AuraaMenu } from '../../data/auraaMenu';
import "./index.css"

const Auraa = () => {
  return (
 <div className="container">
      {/* Header */}

      <header className="header">
        <h1>Auraa</h1>
        <p>Available on Swiggy & Zomato</p>
        {/* <span>📞 90222717467</span> */}
      </header>
      

      {/* Sections */}
      {AuraaMenu.map((section) => (
        <div
          key={section.title}
          className="section"
        >
          <h2>{section.title}</h2>

          {section.items.map((item: any) => (
            <div 
                className="main-item-row">
            <div
              key={item.name}
              className="item-row"
            >
              <span className="item-name">{item.name}</span>
              <span className="price">
                ₹{item.price}
              </span>

              
            </div>

            <div>
                {item.description && (
      <p className="description">
        {item.description}
      </p>
    )}
            </div>

            </div>
          ))}
        </div>
      ))}
    </div>    )
}

export default Auraa