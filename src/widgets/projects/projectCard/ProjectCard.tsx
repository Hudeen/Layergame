import './ProjectCard.scss'
import planet from '../../../shared/assets/icons/planet.svg'
import TwitterIcon from '../../../shared/assets/icons/TwitterIcon'
import TelegramIcon from '../../../shared/assets/icons/TelegramIcon'
import FacebookIcon from '../../../shared/assets/icons/FacebookIcon'
interface ProjectCardProps {
  image: string
  name: string
  role: string
  description: string

}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, name, role, description }) => {
  return (
    <div className='card'>
      <div className='card-container'>
        <p>info</p>
        <div className='image-container'>
          <img
            src={image}
            alt='planet'
          />
        </div>
        <div className='social-media'>
          <TwitterIcon />
          <TelegramIcon />
          <FacebookIcon />
        </div>
      </div>
      <div className='card-text'>
        <div className='text-info'>
          <p>{name}</p>
          <p>{role}</p>
        </div>
        <p className='text-description'>
          {description}
        </p>
      </div>
    </div>
  )
}

export default ProjectCard
