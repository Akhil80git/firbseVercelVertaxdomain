import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <div className="hero">
        <h1>Welcome to Akhliesh's Portfolio</h1>
        <p>Explore my projects, skills, and journey in web development.</p>
        <a href="/projects" className="cta-btn">View Projects</a>
      </div>
    </div>
  );
};

export default Home;