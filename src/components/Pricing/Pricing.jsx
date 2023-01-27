import "./Pricing.css";

const Pricing = () => {
    const data = [
        {
            id: 1,
            type: "basic",
            price: "free , forever",
            time : "1 hour consultation",
            live: "no live support",
            email: "3x Email consultation",
            priority: "no priority hotline"
        },
        {
            id: 2,
            type: "normal",
            price: "18.5$, per month",
            time : "16 hour consultation",
            live: "3x live support",
            email: "4hrs Email consultation",
            priority: "no priority hotline"
        }, 
        {
            id: 3,
            type: "premium",
            price: "36.5$, per month",
            time : "unlimited consultation",
            live: "unlimited live support",
            email: "unlimited Email consultation",
            priority: "priority hotline"
        }
    ]
  return (
    <div className="container">
        <h2 className="pricing-header">Affrodable Prices</h2>
        <div className="grid">
        {
            data.map((details) => {
                return(
                    <div className="pricing-card" key={details.id}  >
                    <h4 className="pricing-title">{details.type}</h4>
                    <span className="pricing-price">{details.price}</span>
                    <div className="pricing-list">
                        <span className="pricing-items">{details.time}</span>
                        <span className="pricing-items">{details.email}</span>
                        <span className="pricing-items">{details.live}</span>
                        <span className="pricing-items">{details.priority}</span>
                    </div>
                    <button className="pricing-button">select now</button>
                  </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default Pricing;