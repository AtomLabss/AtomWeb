import Link from "next/link";
import Image from "next/image";
import botOnlineStatus from "../utils/images/botStatus.svg";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer className="footer">
        <div className="footer-sec1">
          <div className="footer-header">
            <ul>
              <li>
                <Link className="h-color" href="/">
                  Atom
                </Link>
                <span
                  style={{
                    fontSize: "12px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  className="p-color"
                >
                  <Image
                    src={botOnlineStatus}
                    width={20}
                    height={20}
                    alt="online-status"
                    className="onlineStatus"
                  />{" "}
                  Atom is online!
                </span>
              </li>
            </ul>
          </div>
          <div className="footer-items">
            <ul>
              <li>
                <Link className="p-color" href="/commands">
                  /commands
                </Link>
              </li>
              <li>
                <Link className="p-color" href="#">
                  /support
                </Link>
              </li>
              <li>
                <Link className="p-color" href="#">
                  /discord
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-sec2">
          <hr />
          <div>
            <p className="p-color">
              Created with ❤️ by{" "}
              <Link
                href="https://github.com/AtomLabss"
                className="h-color no-decoration"
              >
                AtomLabs
              </Link>
            </p>
            <p className="p-color">
              template by{" "}
              <Link
                href="https://github.com/preetsuthar17"
                className="h-color no-decoration"
              >
                Preet Suthar
              </Link>
            </p>
          </div>
          <div className="footer-sec2-link">
            <Link className="p-color no-decoration" href="#">
              /support
            </Link>
            <Link
              target="_blank"
              className="p-color no-decoration"
              href="https://github.com/AtomLabss/AtomWeb"
            >
              /source-code
            </Link>
            <Link className="p-color no-decoration" href="#">
              /privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
