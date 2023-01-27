import team1 from "../../assets/img/team1.jpeg";
import team2 from "../../assets/img/team2.jpg";
import team3 from "../../assets/img/team3.jpg";
import team4 from "../../assets/img/team4.jpg";
import "./Team.css"

const Team = () => {
    const data = [
        {
            id: 1,
            name: "John Doe",
            position: "company ceo",
            image: team1,
            emailIcon: "fa fa-envelope-o",
            twiiterIcon: "fa fa-twitter",
            linkedinIcon: "fa fa-linkedin"
        },
        {
            id: 2,
            name: "Marks Roberto",
            position: "Investment Specialist",
            image: team2,
            emailIcon: "fa fa-envelope-o",
            twiiterIcon: "fa fa-twitter",
            linkedinIcon: "fa fa-linkedin"
        },
        {
            id: 3,
            name: "Levi Masters",
            position: "Head Of Marketing",
            image: team3,
            emailIcon: "fa fa-envelope-o",
            twiiterIcon: "fa fa-twitter",
            linkedinIcon: "fa fa-linkedin"
        },
        {
            id: 4,
            name: "Lisa Haley",
            position: "Customer Support",
            image: team4,
            emailIcon: "fa fa-envelope-o",
            twiiterIcon: "fa fa-twitter",
            linkedinIcon: "fa fa-linkedin"
        }
    ]
  return (
    <div className="container">
        <h3 className="team-header">Our Team</h3>
        <div className="grid-1-4">
     {data.map((team) => {
        return(
            <div className="team-card" key={team.id}>
            <div className="team-img" style={{backgroundImage: `url(${team.image})`}}>
            </div>
            <div className="team-details">
                  <h5 className="team-name">{team.name}</h5>
                  <p className="team-position">{team.position}</p>
                <div className="team-items">
                     <span className="team-icon"><i className={team.emailIcon} aria-hidden="true"></i></span>
                     <span className="team-icon"><i className={team.linkedinIcon} aria-hidden="true"></i></span>
                     <span className="team-icon"><i className={team.twiiterIcon} aria-hidden="true"></i></span>
                </div>
            </div>
          </div>
        )
     })}
    </div>
    </div>
  );
};

export default Team;