import Head from "next/head";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { motion } from "framer-motion";

export default function Commands() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
    >
      <Head>
        <title>Atom - Commands</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section className="about-section">
        <nav className="accordion arrows" id="commands">
          <header className="box">
            <label htmlFor="acc-close" className="box-title h-color">
              ⚡ Commands
            </label>
          </header>

          <input type="radio" name="accordion" id="cb1" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb1">
              Utilities ⚙️
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/afk</kbd> -{" "}
                  <span className="p-color">Sets you as being AFK to other members.</span>
                </li>
                <li>
                  <kbd>/ban</kbd> -{" "}
                  <span className="p-color">Bans a member from the server.</span>
                </li>
                <li>
                  <kbd>/bulldoze</kbd> -{" "}
                  <span className="p-color">Bulldozes your server.</span>
                </li>
                <li>
                  <kbd>/filter</kbd> -{" "}
                  <span className="p-color">Filters certain types of messages via AutoMod in the server.</span>
                </li>
                <li>
                  <kbd>/kick</kbd> -{" "}
                  <span className="p-color">Kicks a member from the server.</span>
                </li>
                <li>
                  <kbd>/leave</kbd> -{" "}
                  <span className="p-color">Removes Atom from your server.</span>
                </li>
                <li>
                  <kbd>/lock</kbd> -{" "}
                  <span className="p-color">Locks the channel you run the command in.</span>
                </li>
                <li>
                  <kbd>/purge</kbd> -{" "}
                  <span className="p-color">Delete a specified number of messages out of 1 to 100.</span>
                </li>
                <li>
                  <kbd>/removetimeout</kbd> -{" "}
                  <span className="p-color">Removes a timeout from a member of the server.</span>
                </li>
                <li>
                  <kbd>/timeout</kbd> -{" "}
                  <span className="p-color">Timeouts a member in the server.</span>
                </li>
                <li>
                  <kbd>/unban</kbd> -{" "}
                  <span className="p-color">Unbans a member of the server.</span>
                </li>
                <li>
                  <kbd>/unlock</kbd> -{" "}
                  <span className="p-color">Unlocks the channel you run the command in.</span>
                </li>
                <li>
                  <kbd>/warn</kbd> -{" "}
                  <span className="p-color">Warns a member from the server.</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb2" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb2">
              Fun 😄
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/echo</kbd> -{" "}
                  <span className="p-color">Sends a message as Atom, or as another member of the server.</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb4" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb4">
              Informative 📖
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/help</kbd> -{" "}
                  <span className="p-color">Shows a list of commands and how to use them.</span>
                </li>
                <li>
                  <kbd>/ping</kbd> -{" "}
                  <span className="p-color">Shows the bot's current ping.</span>
                </li>
                <li>
                  <kbd>/tributes</kbd> -{" "}
                  <span className="p-color">Shows a list of support staff/people who helped in the development of Atom.</span>
                </li>
                <li>
                  <kbd>/vote</kbd> -{" "}
                  <span className="p-color">Allows you to vote for the bot on Top.gg.</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="acc-close" />
        </nav>
      </section>
      <Footer />
    </motion.div>
  );
}
