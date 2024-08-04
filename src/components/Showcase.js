import Link from "next/link";
import { motion } from "framer-motion";

const Showcase = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
    >
      <main className="showcase">
        <h1 className="showcase-header h-color">Atom</h1>
        <h2 className="showcase-header-text h-color">
          The one, and only Discord bot you'll ever need!
        </h2>
        <p className="showcase-para p-color">
          Atom is a multipurpose Discord bot packed full of features, with more on the way!
        </p>
        <p className="showcase-para p-color">
          ..and it doesn't even cost a dime!
        </p>

        {/* <span className="p-color">Atom is online!</span> */}
        <div className="showcase-btn">
          <button className="btn">
            <Link className="h-color no-decoration" href="https://discord.com/oauth2/authorize?client_id=1251621836064686223&scope=bot&permissions=1099511627775">
              Invite
            </Link>
          </button>

          <button className="btn">
            <Link className="h-color no-decoration" href="https://atomgg.ddns.net/discord">
              Join Atom Support
            </Link>
          </button>
        </div>
      </main>
    </motion.div>
  );
};

export default Showcase;
