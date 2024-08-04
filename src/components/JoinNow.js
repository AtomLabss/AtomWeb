import Link from "next/link";

const JoinNow = () => {
  return (
    <>
      <section className="joinUs">
        <div className="h-color joinUs-header">
          <h3>Join us on our adventure</h3>
        </div>
        <div className="joinUs-para p-color">
          Invite Atom to your Discord server today!{" "}
        </div>
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
      </section>
    </>
  );
};

export default JoinNow;
