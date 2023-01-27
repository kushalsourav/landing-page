import "./Works.css";

const Works = () => {
    const data = [
        {   
            id: 1,
            title: "Free Consultation",
            icon: "fa fa-commenting",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, iste quasi illum expedita veniam qui?",
        },
        {   
            id: 2,
            title: "Your Finance Plan",
            icon: "fa fa-list-ul",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, iste quasi illum expedita veniam qui?",
        },
        {   
            id: 3,
            title: "Enjoy the Freedom",
            icon: "fa fa-heart-o",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, iste quasi illum expedita veniam qui?",
        }
    ]
  return (
    <div className="container">
        <h3 className="work-header">How it works</h3>
    <div className="grid">
        {data.map((details) => {
            return (
            <div className="work-card" key={details.id} >
                <span className="card-badge">{details.id}</span>
                <span className="card-icon"><i className={details.icon} aria-hidden="true"></i></span>
                <h4 className="card-title">{details.title}</h4>
                <p className="card-description">{details.description}</p>
            </div>
            )
        })}
    </div>
    </div>
  );
};

export default Works;