import './ProjectCard.scss'
import planet from '../../../shared/assets/icons/planet.svg'
import TwitterIcon from '../../../shared/assets/icons/TwitterIcon'
import TelegramIcon from '../../../shared/assets/icons/TelegramIcon'
import FacebookIcon from '../../../shared/assets/icons/FacebookIcon'

const ProjectCard = () => {
  return (
    <div className='card'>
      <div className='card-container'>
        <p>info</p>
        <div className='image-container'>
          <img
            src={planet}
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
          <p>MaxusWeb</p>
          <p>Designer</p>
        </div>
        <p className='text-description'>
          Id venenatis nulla nunc sodales vitae vulputate hac nec leo, nec odio. Dui vitae dictumst.
        </p>
      </div>
    </div>
  )
}

export default ProjectCard
