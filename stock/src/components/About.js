import Link from "next/link";

const About = () => {
  return (
    <>
      <section className="about-section" id="about-section">
        <div className="about-header">
          <h3 className="h-color">Why should you choose Atom?</h3>
        </div>
        <div className="about-container">
          <div className="about-card">
            <div>
              <h4 className="h-color">⚡  Commands</h4>
              <p className="p-color">
                We have a large variety of commands for you to manage and 
                control your server with.
              </p>
              <hr />
            </div>
            <div>
              <h4 className="h-color">✉️  24/7 Support</h4>
              <p className="p-color">
                Our own support team, willing to help you out, every
                step of the way.
              </p>
              <hr />
            </div>
            <div>
              <h4 className="h-color">💸  Completely free!</h4>
              <p className="p-color">
                ..and it doesn't even cost a dime to use!
              </p>
              <hr />
            </div>
          </div>
        </div>
        <p>
          <Link href="/commands" className="h-color no-decoration">
            Check out our commands &rarr;
          </Link>
        </p>

        <section className="about-stats">
          <div className="about-stats-card">
            <h4 className="h-color">45+</h4>
            <p className="p-color">Total Servers</p>
          </div>
          <div className="about-stats-card">
            <h4 className="h-color">4,000+</h4>
            <p className="p-color">Total Users</p>
          </div>
          <div className="about-stats-card">
            <h4 className="h-color">25+</h4>
            <p className="p-color">Total Commands</p>
          </div>
        </section>
      </section>
    </>
  );
};

export default About;
