import Link from "next/link";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Notes", href: "#notes" },
  { label: "Selected work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const notes = [
  {
    date: "12.08.2025",
    title: "A small field guide to paying attention",
    excerpt:
      "On keeping a notebook, noticing the edges of a system, and making room for the useful surprise.",
  },
  {
    date: "28.05.2025",
    title: "The long way around is sometimes the short way home",
    excerpt:
      "A reflection on patient work, imperfect prototypes, and the quiet momentum of showing up.",
  },
  {
    date: "03.02.2025",
    title: "Three questions for a better brief",
    excerpt:
      "Before making anything new, ask what it should change, who it is for, and what can stay simple.",
  },
];

const work = [
  {
    year: "2025",
    title: "Common Ground",
    type: "Essay collection",
    description:
      "A series of short essays about shared places, public imagination, and the details that make a neighborhood feel like home.",
    links: ["Read introduction", "View index"],
  },
  {
    year: "2024",
    title: "Signal / Noise",
    type: "Independent study",
    description:
      "A visual archive exploring how people make sense of too much information — through diagrams, conversations, and found language.",
    links: ["Project notes", "Selected images"],
  },
  {
    year: "2023",
    title: "The Listening Room",
    type: "Community workshop",
    description:
      "A six-week workshop for curious generalists who wanted to turn observations into useful, generous work.",
    links: ["Workshop outline", "Participant notes"],
  },
];

const principles = [
  ["01", "Stay curious", "Ask one more question before reaching for an answer."],
  ["02", "Make it useful", "Good work should leave a person, place, or idea a little stronger."],
  ["03", "Keep the door open", "The best ideas get better when they have somewhere to go."],
];

export default function Home() {
  return (
    <main className="site-shell" id="home">
      <aside className="sidebar" aria-label="Primary navigation">
        <Link className="wordmark" href="#home" aria-label="Milo Hart home">
          <span className="wordmark-mark">MH</span>
          <span>Milo Hart</span>
        </Link>
        <p className="sidebar-kicker">Writer, builder, and curious observer.</p>
        <nav className="side-nav">
          {navItems.map((item, index) => (
            <Link className={index === 0 ? "active" : ""} href={item.href} key={item.href}>
              <span className="nav-index">0{index + 1}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="sidebar-footer">
          <span className="status-dot" /> Available for thoughtful collaborations
          <span className="fiction-note">Fictional profile / design study</span>
        </div>
      </aside>

      <div className="content-column">
        <header className="mobile-header">
          <Link className="wordmark" href="#home">
            <span className="wordmark-mark">MH</span>
            <span>Milo Hart</span>
          </Link>
          <span className="mobile-label">Profile / 01</span>
        </header>

        <section className="hero section-block" aria-labelledby="intro-title">
          <div className="eyebrow"><span className="eyebrow-line" /> Profile / 01</div>
          <h1 id="intro-title">Milo<br /><em>Hart</em></h1>
          <div className="hero-grid">
            <p className="hero-lede">
              I write about people, places, and the useful space between an idea and the world it wants to enter.
            </p>
            <div className="hero-meta">
              <p>Independent writer and project-maker based between <Link href="#about">Lisbon and everywhere else</Link>.</p>
              <div className="link-row">
                <Link href="#work">Selected work ↗</Link>
                <Link href="#contact">Say hello ↗</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="statement section-block" aria-label="Milo's practice">
          <div className="section-label"><span>What I do</span><span className="label-rule" /></div>
          <p className="statement-copy">
            I help thoughtful teams find the clearest version of what they are trying to say — then build the conditions for that idea to travel. My practice moves between writing, research, workshops, and small experiments.
          </p>
          <div className="principles-grid">
            {principles.map(([number, title, copy]) => (
              <div className="principle" key={number}>
                <span className="principle-number">{number}</span>
                <h2>{title}</h2>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-block" id="notes" aria-labelledby="notes-title">
          <div className="section-heading-row">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" /> Archive / 02</div>
              <h2 id="notes-title" className="section-title">Notes</h2>
            </div>
            <span className="section-count">03 entries</span>
          </div>
          <div className="notes-list">
            {notes.map((note) => (
              <article className="note-item" key={note.title}>
                <time>{note.date}</time>
                <div>
                  <Link href="#contact" className="item-title">{note.title} <span>↗</span></Link>
                  <p>{note.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
          <Link className="text-link" href="#contact">Browse the complete archive <span>↗</span></Link>
        </section>

        <section className="section-block" id="work" aria-labelledby="work-title">
          <div className="section-heading-row">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" /> Selected / 03</div>
              <h2 id="work-title" className="section-title">Selected work</h2>
            </div>
            <span className="section-count">2019—25</span>
          </div>
          <div className="work-list">
            {work.map((project) => (
              <article className="work-item" key={project.title}>
                <span className="work-year">{project.year}</span>
                <div className="work-body">
                  <div className="work-title-row">
                    <h3>{project.title}</h3>
                    <span className="work-type">{project.type}</span>
                  </div>
                  <p>{project.description}</p>
                  <div className="resource-links">
                    {project.links.map((link) => <Link href="#contact" key={link}>{link} ↗</Link>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section section-block" id="about" aria-labelledby="about-title">
          <div className="section-heading-row">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" /> Context / 04</div>
              <h2 id="about-title" className="section-title">About</h2>
            </div>
          </div>
          <div className="about-grid">
            <p className="about-lede">A short biography of a fictional person, deliberately left open enough to become someone new.</p>
            <div className="about-copy">
              <p>Milo Hart is a writer, facilitator, and independent project-maker. His work begins with listening: to a room, a community, a half-formed question, or the shape of a problem that has not found its language yet.</p>
              <p>He has worked across publishing, education, and culture, collaborating with small teams who care about making useful things with care. He is currently collecting field notes for a book about attention.</p>
              <p className="muted-copy">This page is a fictional profile created as a design study. Names, projects, and biographical details are invented.</p>
            </div>
          </div>
        </section>

        <footer className="footer section-block" id="contact">
          <div className="eyebrow"><span className="eyebrow-line" /> Contact / 05</div>
          <div className="footer-grid">
            <h2>Have a good<br /><em>question?</em></h2>
            <div className="footer-contact">
              <p>I like thoughtful notes, interesting problems, and invitations to look at something from a different angle.</p>
              <Link className="email-link" href="mailto:hello@example.com">hello@example.com <span>↗</span></Link>
              <div className="social-links">
                <Link href="#home">Instagram</Link>
                <Link href="#home">Are.na</Link>
                <Link href="#home">LinkedIn</Link>
              </div>
            </div>
          </div>
          <div className="footer-bottom"><span>© 2025 Milo Hart</span><span>Built with care / 01</span></div>
        </footer>
      </div>
    </main>
  );
}
