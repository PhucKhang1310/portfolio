import "../styles/Biography.css";
const Biography = () => {
  return (
    <div className="biography">
        <div className="bio-container">
          <div className="bio-grid">
            <div className="bio-left">
              <div className="bio-title">Khang Phuc Nguyen</div>
              <div className="bio-subtitle">FPT University, HCM Campus</div>
            </div>
          </div>
          <div className="bio-grid">
            <div className="bio-left">
              <div className="bio-text">
                Hello! I'm Khang, a passionate software developer with a knack for
                creating innovative solutions. I specialize in full-stack
                development, and I'm always eager to learn new technologies and
                improve my skills.
                <br />
                When I'm not coding, you can find me exploring the latest tech
                trends or working on personal projects. Let's connect and build
                something amazing together!
              </div>
            </div>
            <div className="bio-right">
              <div className="bio-image">
                <img className="bio-img" src="./man.jpg" alt="Khang Phuc Nguyen" />
                <div className="bio-image-tagline">AiTA Lab, Dept. of Computing Fundamentals</div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Biography;
