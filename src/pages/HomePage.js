import './css/HomePage.css'
import CustomNav from '../components/CustomNav';
import TypingAnimation from '../components/TypingAnimation';

function HomePage() {
    return (
        <div className="Home">
            <div className="header">
                <CustomNav></CustomNav>
                <div className="header-main">
                    <div class="main-flex">
                        <div className="flex-text">
                            <h1>Hi, I'm Matt.</h1>
                            <p>I'm a CS student at the Queensland University of Technology. I have a passion for programming and all things tech.</p>
                        </div>
                        <TypingAnimation className="flex-typewriter"></TypingAnimation>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default HomePage;
