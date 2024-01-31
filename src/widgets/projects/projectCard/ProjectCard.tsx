import "./ProjectCard.css"
import planet from "../../../shared/assets/icons/planet.svg"
import TwitterIcon from "../../../shared/assets/icons/TwitterIcon";
import TelegramIcon from "../../../shared/assets/icons/TelegramIcon";
import FacebookIcon from "../../../shared/assets/icons/FacebookIcon";

const ProjectCard = () => {
    return (
        <div className="card">
            <div className="card__content">
                <p>Info</p>
                <div className="planet__container">
                    <img src={planet} alt="planet" />
                </div>
                <div className="socialMedia__container">
                    <TwitterIcon />
                    <TelegramIcon />
                    <FacebookIcon />
                </div>
            </div>
            <div className="card__text">
                <div className="text__info">
                    <p className="info__name">MaxusWeb</p>
                    <p className="info__position">Designer</p>
                </div>
                <p className="text__description">
                    Id venenatis nulla nunc sodales vitae vulputate hac nec leo, nec odio. Dui vitae dictumst.
                </p>
            </div>
        </div >
    )
}

export default ProjectCard;