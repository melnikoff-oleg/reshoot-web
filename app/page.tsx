import type { Metadata } from "next";
import Image from "next/image";
import {
  courseStats,
  curriculumGroups,
  firstWins,
  offers,
  proofPoints,
  socialClips,
  valueCards,
} from "@/lib/site-content.mjs";
import {
  AgeGate,
  BackgroundVideo,
  CookieNotice,
  CoursePreviewVideo,
  Faq,
  MobileEnrollBar,
  Testimonials,
} from "./interactive";

export const metadata: Metadata = {
  title: "ReShoot.Start: Pistol Basics for Beginners",
  description:
    "Learn firearm safety, pistol fundamentals, and confident range-ready habits through 36 clear topics, 71 visual videos, and 20 guided exercises.",
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "ReShoot.Start: Pistol Basics for Beginners",
  description:
    "A safety-first digital course covering firearm fundamentals, pistol mechanics, responsible handling, and beginner practice.",
  provider: {
    "@type": "Organization",
    name: "ReShoot",
    url: "https://reshootonline.org",
  },
  offers: offers.map((offer) => ({
    "@type": "Offer",
    name: `${offer.name} package`,
    price: offer.price,
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: offer.checkoutHref,
  })),
};

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />

      <header className="site-header">
        <div className="shell header-inner">
          <a className="brand" href="#top" aria-label="ReShoot home">
            <Image
              src="/brand/reshoot-logo.svg"
              alt="ReShoot"
              width={128}
              height={52}
              priority
              unoptimized
            />
          </a>
          <nav className="main-nav" aria-label="Main navigation">
            <a href="#outcome">What you’ll learn</a>
            <a href="#curriculum">Course</a>
            <a href="#dmitrii">Dmitrii</a>
            <a href="#reviews">Reviews</a>
          </nav>
          <a className="button button-small button-outline" href="#pricing">
            See packages
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <div className="eyebrow-chip">
                <span className="status-dot" aria-hidden="true" />
                Beginner-first. Safety-focused. 100% online.
              </div>
              <h1>
                Go from curious to confident
                <span>before your first trip to the range.</span>
              </h1>
              <p className="hero-lede">
                Learn pistol safety and the basics from European Champion
                Dmitrii Stafura. Get 36 clear topics, 71 short videos, and 20
                guided exercises.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#pricing">
                  Start learning for $49.99
                  <ArrowIcon />
                </a>
                <a className="text-link" href="#curriculum">
                  See exactly what’s inside <span aria-hidden="true">↓</span>
                </a>
              </div>
              <ul className="trust-list" aria-label="Course reassurance">
                <li>Instant access after payment</li>
                <li>Most lessons take 10–15 minutes</li>
                <li>No firearm needed to begin</li>
              </ul>
              <p className="safety-note">
                Adults 18+ only. Digital education only. No firearms,
                ammunition, or physical products are sold.
              </p>
            </div>

            <div className="hero-media" aria-label="Dmitrii demonstrating at a professional range">
              <div className="hero-video-frame">
                <BackgroundVideo
                  className="hero-background-video"
                  src="/brand/hero-range.mp4"
                  poster="/brand/hero-range-poster.webp"
                  label="Dmitrii Stafura shooting demonstration"
                  preload="metadata"
                />
              </div>
              <div className="media-proof media-proof-top">
                <strong>15+ years</strong>
                <span>coaching beginners</span>
              </div>
              <div className="media-proof media-proof-bottom">
                <strong>8,500+</strong>
                <span>people trained</span>
              </div>
            </div>
          </div>
        </section>

        <section className="proof-band" aria-label="ReShoot track record">
          <div className="shell proof-grid">
            {proofPoints.map((point) => (
              <div className="proof-stat" key={point.label}>
                <strong>{point.value}</strong>
                <span>{point.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section-pad audience-section" id="outcome">
          <div className="shell">
            <div className="section-heading section-heading-split">
              <div>
                <span className="section-kicker">The confidence gap</span>
                <h2>Interest is easy. Knowing where to start is the hard part.</h2>
              </div>
              <p>
                A feed gives you random tips. This course puts the basics in the
                right order, so you always know what to learn next.
              </p>
            </div>

            <div className="outcome-content">
              <div
                className="confidence-visual"
                aria-label="Dmitrii Stafura and the course's clear learning path"
              >
                <div className="confidence-photo">
                  <Image
                    src="/brand/confidence-guide.webp"
                    alt="Dmitrii Stafura at the outdoor range"
                    fill
                    sizes="(max-width: 900px) 100vw, 40vw"
                    unoptimized
                  />
                  <div className="confidence-visual-copy">
                    <span>One clear path</span>
                    <strong>Safety first. Skills next.</strong>
                    <small>36 topics, in the right order.</small>
                  </div>
                </div>
              </div>

              <div className="value-grid">
                {valueCards.map((card) => (
                  <article className="value-card" key={card.title}>
                    <div className="value-icon">
                      <Image src={card.icon} alt="" width={64} height={64} unoptimized />
                    </div>
                    <span>{card.eyebrow}</span>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="quick-win section-pad">
          <div className="shell quick-win-grid">
            <div className="quick-win-intro">
              <span className="section-kicker section-kicker-light">Your first evening</span>
              <h2>Learn something useful tonight.</h2>
              <p>
                Pick one question. Finish one short lesson. Leave with a clear
                answer.
              </p>
              <div className="quick-win-time">
                <strong>10–15</strong>
                <span>minutes per lesson</span>
              </div>
            </div>
            <ol className="first-wins">
              {firstWins.map((win, index) => (
                <li key={win}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{win}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="social-proof-section section-pad">
          <div className="shell social-proof-grid">
            <div className="social-proof-copy">
              <span className="section-kicker">You already know his style</span>
              <h2>The fun teaching you know, now in one clear course.</h2>
              <p>
                Short videos grab attention. The course puts the best lessons
                in order.
              </p>
              <div className="channel-pills">
                <a href="https://www.youtube.com/@reshoot./shorts" target="_blank" rel="noreferrer">
                  YouTube · 348K
                </a>
                <a href="https://www.instagram.com/reshoot.us/" target="_blank" rel="noreferrer">
                  Instagram · 42K
                </a>
              </div>
            </div>
            <div className="clip-stack">
              {socialClips.map((clip, index) => (
                <a
                  className={`clip-card clip-card-${index + 1}`}
                  href={clip.href}
                  target="_blank"
                  rel="noreferrer"
                  key={clip.title}
                >
                  <Image src={clip.image} alt={clip.title} fill sizes="(max-width: 760px) 42vw, 220px" unoptimized />
                  <span className="clip-play" aria-hidden="true">▶</span>
                  <span className="clip-meta">
                    <strong>{clip.metric}</strong>
                    <small>{clip.title}</small>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="curriculum section-pad" id="curriculum">
          <div className="shell">
            <div className="section-heading section-heading-split curriculum-heading">
              <div>
                <span className="section-kicker">Inside ReShoot.Start</span>
                <h2>36 topics, in the right order.</h2>
              </div>
              <div className="course-counts" aria-label="Course contents">
                <div><strong>{courseStats.topics}</strong><span>topics</span></div>
                <div><strong>{courseStats.videos}</strong><span>visual videos</span></div>
                <div><strong>{courseStats.exercises}</strong><span>exercises</span></div>
              </div>
            </div>

            <div className="curriculum-grid">
              <div className="topics-video-card">
                <CoursePreviewVideo />
                <div className="topics-video-caption">
                  <span>Real course preview</span>
                  <strong>36 topics. See the system.</strong>
                </div>
              </div>
              <div className="curriculum-list">
                {curriculumGroups.map((group) => (
                  <article key={group.number}>
                    <span>{group.number}</span>
                    <div>
                      <h3>{group.title}</h3>
                      <p>{group.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="authority section-pad" id="dmitrii">
          <div className="shell authority-grid">
            <div className="authority-media">
              <BackgroundVideo
                className="author-background-video"
                src="/brand/author-range.mp4"
                poster="/brand/author-range-poster.webp"
                label="Dmitrii Stafura, ReShoot course author"
              />
              <span className="authority-tag">COURSE AUTHOR</span>
            </div>
            <div className="authority-copy">
              <span className="section-kicker">Learn from the real thing</span>
              <h2>Dmitrii Stafura</h2>
              <p className="authority-lede">
                A champion shooter, working coach, and founder of three
                professional clubs. He has trained more than 8,500 people.
              </p>
              <ul className="credential-list">
                <li>
                  <strong>European Champion</strong>
                  <span>25m Standard Pistol Men Junior, Belgrade 2005</span>
                </li>
                <li>
                  <strong>World Championship team gold</strong>
                  <span>25m Standard Pistol Men Junior, Zagreb 2006</span>
                </li>
                <li>
                  <strong>Continuous professional practice since 2009</strong>
                  <span>More than 8,500 people trained through his clubs</span>
                </li>
              </ul>
              <a
                className="record-link"
                href="https://www.issf-sports.org/athletes/SHRUSM0910198701"
                target="_blank"
                rel="noreferrer"
              >
                View the ISSF athlete record <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        <Testimonials />

        <section className="pricing section-pad" id="pricing">
          <div className="shell">
            <div className="pricing-heading">
              <span className="section-kicker section-kicker-light">Choose your access</span>
              <h2>Choose the support you want.</h2>
              <p>
                One payment. Instant online access.
              </p>
            </div>
            <div className="pricing-grid">
              {offers.map((offer) => (
                <article
                  className={`price-card ${offer.id === "premium" ? "price-card-featured" : ""}`}
                  key={offer.id}
                >
                  {offer.id === "premium" && <span className="popular-tag">BEST FOR FEEDBACK</span>}
                  <div className="price-card-top">
                    <span>{offer.kicker}</span>
                    <h3>{offer.name}</h3>
                    <div className="price">
                      <sup>$</sup>
                      <strong>{offer.price.toFixed(2)}</strong>
                      <small>USD · one payment</small>
                    </div>
                  </div>
                  <ul>
                    {offer.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <a className="button button-price" href={offer.checkoutHref}>
                    Choose {offer.name}
                    <ArrowIcon />
                  </a>
                </article>
              ))}
            </div>
            <p className="pricing-note">
              Refund rules vary by location and progress. This course is not a
              license or certification.
            </p>
          </div>
        </section>

        <Faq />

        <section className="final-cta section-pad">
          <div className="shell final-cta-card">
            <div>
              <span className="section-kicker section-kicker-light">Start with one clear lesson</span>
              <h2>You need the right first step.</h2>
            </div>
            <div className="final-cta-action">
              <a className="button button-inverse" href="#pricing">
                See the packages <ArrowIcon />
              </a>
              <span>From $49.99 · Instant online access</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-grid">
          <div className="footer-brand">
            <Image src="/brand/reshoot-logo.svg" alt="ReShoot" width={132} height={54} unoptimized />
            <p>Safety-first firearm education for adults.</p>
            <p>ReShoot is a brand operated by GO PEP, LLC.</p>
          </div>
          <div>
            <strong>Course</strong>
            <a href="#outcome">What you’ll learn</a>
            <a href="#curriculum">Curriculum</a>
            <a href="#pricing">Pricing</a>
          </div>
          <div>
            <strong>Legal</strong>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/cookie-policy">Cookie Policy</a>
            <a href="/terms-and-conditions">Terms & Conditions</a>
          </div>
          <div>
            <strong>Contact</strong>
            <a href="mailto:reshootcommunity@gmail.com">reshootcommunity@gmail.com</a>
            <a href="tel:+13025653567">+1 (302) 565-3567</a>
            <span>Newark, Delaware, USA</span>
          </div>
        </div>
        <div className="shell footer-bottom">
          <span>© 2026 ReShoot. All rights reserved.</span>
          <span>Adults 18+ · Lawful, educational use only</span>
        </div>
      </footer>

      <AgeGate />
      <CookieNotice />
      <MobileEnrollBar />
    </>
  );
}
