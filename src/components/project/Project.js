import './project.css'
import CodeQuiz from '../../assets/projects/code-quiz.png'
import Muvd from '../../assets/projects/muvd.png'
import PasswordGenerator from '../../assets/projects/password-generator.png'
import ProBonoPals from '../../assets/projects/pro-bono-pals.png'
import ProfileGenerator from '../../assets/projects/profile-generator.png'
import WeatherDashboard from '../../assets/projects/weather-dashboard.png'

export default function Project({ img, link }) {
    return (
        <>
            {/* <div className="project-card">
                <div className="browser">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
                <a href={link}>
                    <img src={img} className="p-img" />
                </a>
            </div> */}
            <div id="project-container">
                <img className="project-card" src={CodeQuiz} />
                <img className="project-card" src={Muvd} />
                <img className="project-card" src={PasswordGenerator} />
                <img className="project-card" src={ProBonoPals} />
                <img className="project-card" src={ProfileGenerator} />
                <img className="project-card" src={WeatherDashboard} />
            </div>
        </>
    )
}