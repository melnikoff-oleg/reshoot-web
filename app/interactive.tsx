"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { faqItems, testimonials } from "@/lib/site-content.mjs";

export function AgeGate() {
  const [open, setOpen] = useState(false);
  const confirmButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setOpen(localStorage.getItem("reshoot-age-confirmed") !== "true");
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    confirmButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="age-backdrop" role="presentation">
      <section className="age-dialog" role="dialog" aria-modal="true" aria-labelledby="age-title">
        <Image src="/brand/reshoot-logo.svg" alt="ReShoot" width={116} height={48} unoptimized />
        <span className="age-label">ADULT EDUCATION · 18+</span>
        <h2 id="age-title">Before we continue</h2>
        <p>
          This site provides safety-focused educational content about firearms
          for adults. It does not sell firearms, ammunition, parts, or
          instructions for illegal modifications.
        </p>
        <div className="age-actions">
          <button
            ref={confirmButtonRef}
            type="button"
            className="button button-primary"
            onClick={() => {
              localStorage.setItem("reshoot-age-confirmed", "true");
              setOpen(false);
            }}
          >
            I am 18 or older
          </button>
          <a href="https://www.google.com">Leave this site</a>
        </div>
      </section>
    </div>
  );
}

export function CookieNotice() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setOpen(localStorage.getItem("reshoot-cookie-choice") === null);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  if (!open) return null;

  const choose = (choice: "necessary" | "all") => {
    localStorage.setItem("reshoot-cookie-choice", choice);
    setOpen(false);
  };

  return (
    <aside className="cookie-notice" aria-label="Cookie notice">
      <div>
        <strong>Your privacy, your choice.</strong>
        <p>
          We use essential storage for age and cookie preferences. Optional
          analytics should load only with consent. <a href="/cookie-policy">Details</a>
        </p>
      </div>
      <div className="cookie-actions">
        <button onClick={() => choose("necessary")}>Necessary only</button>
        <button className="cookie-accept" onClick={() => choose("all")}>Accept all</button>
      </div>
    </aside>
  );
}

type BackgroundVideoProps = {
  className: string;
  src: string;
  poster: string;
  label: string;
  preload?: "none" | "metadata";
};

export function BackgroundVideo({
  className,
  src,
  poster,
  label,
  preload = "none",
}: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    const syncPlayback = () => {
      if (media.matches || !visible) {
        videoRef.current?.pause();
      } else {
        void videoRef.current?.play().catch(() => undefined);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        syncPlayback();
      },
      { rootMargin: "180px 0px", threshold: 0.08 },
    );

    if (videoRef.current) observer.observe(videoRef.current);
    media.addEventListener("change", syncPlayback);
    return () => {
      observer.disconnect();
      media.removeEventListener("change", syncPlayback);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      src={src}
      poster={poster}
      loop
      muted
      playsInline
      preload={preload}
      aria-label={label}
    />
  );
}

export function CoursePreviewVideo() {
  return (
    <BackgroundVideo
      className="topics-video"
      src="/brand/reshoot-36-topics.mp4"
      poster="/brand/reshoot-36-topics-poster.webp"
      label="Animated preview of the 36 course topics"
    />
  );
}

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [video, setVideo] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const item = testimonials[active];

  useEffect(() => {
    if (video === null) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setVideo(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    const frame = requestAnimationFrame(() => closeButtonRef.current?.focus());
    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      previousFocus?.focus();
    };
  }, [video]);

  return (
    <section className="testimonials section-pad" id="reviews">
      <div className="shell testimonial-grid">
        <div className="testimonial-intro">
          <span className="section-kicker section-kicker-light">Video testimonials</span>
          <h2>Four people. Four real videos.</h2>
          <p>Pick a person and watch their story.</p>
          <div className="testimonial-nav" aria-label="Choose a testimonial">
            {testimonials.map((testimonial, index) => (
              <button
                type="button"
                key={testimonial.name}
                aria-label={`Show ${testimonial.name} testimonial`}
                aria-pressed={active === index}
                onClick={() => setActive(index)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                {testimonial.name}
              </button>
            ))}
          </div>
        </div>

        <article className="testimonial-card">
          <button
            type="button"
            className="testimonial-photo"
            onClick={() => setVideo(active)}
            aria-label={`Play ${item.name} video testimonial`}
          >
            <Image src={item.image} alt={item.name} fill sizes="(max-width: 760px) 100vw, 360px" unoptimized />
            <span className="testimonial-video-badge">Video testimonial</span>
            <span className="testimonial-play-cta" aria-hidden="true">
              <span className="testimonial-play-icon">▶</span>
              <span>Play {item.name}’s video</span>
            </span>
          </button>
          <div className="testimonial-quote">
            <span className="quote-mark" aria-hidden="true">“</span>
            <blockquote>{item.quote}</blockquote>
            <div>
              <div className="testimonial-person">
                <strong>{item.name}</strong>
                <span>{item.context}</span>
              </div>
              <button
                type="button"
                className="testimonial-inline-play"
                onClick={() => setVideo(active)}
              >
                <span aria-hidden="true">▶</span> Play full video
              </button>
            </div>
          </div>
        </article>
      </div>

      {video !== null && (
        <div className="video-modal" role="dialog" aria-modal="true" aria-label={`${testimonials[video].name} video testimonial`}>
          <button type="button" className="modal-backdrop" onClick={() => setVideo(null)} aria-label="Close testimonial video" />
          <div className="modal-player">
            <button ref={closeButtonRef} type="button" className="modal-close" onClick={() => setVideo(null)} aria-label="Close video">×</button>
            <video
              src={testimonials[video].videoSrc}
              poster={testimonials[video].image}
              controls
              autoPlay
              playsInline
              preload="metadata"
              aria-label={`${testimonials[video].name} testimonial`}
            >
              Your browser does not support video playback.
            </video>
          </div>
        </div>
      )}
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="faq-section section-pad" aria-label="Frequently asked questions">
      <div className="shell faq-grid">
        <div className="faq-intro">
          <span className="section-kicker">Questions, answered</span>
          <h2>A few useful answers.</h2>
          <p>
            Still unsure? Email <a href="mailto:reshootcommunity@gmail.com">reshootcommunity@gmail.com</a>.
          </p>
        </div>
        <div className="faq-list">
          {faqItems.map((item, index) => {
            const expanded = index === open;
            return (
              <article className={expanded ? "faq-item faq-item-open" : "faq-item"} key={item.question}>
                <h3>
                  <button
                    aria-expanded={expanded}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() => setOpen(expanded ? null : index)}
                  >
                    <span>{item.question}</span>
                    <b aria-hidden="true">{expanded ? "−" : "+"}</b>
                  </button>
                </h3>
                {expanded && <p id={`faq-panel-${index}`}>{item.answer}</p>}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function MobileEnrollBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 650);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <aside className={visible ? "mobile-enroll mobile-enroll-visible" : "mobile-enroll"} aria-label="Course enrollment shortcut">
      <div><strong>$49.99</strong><span>6 months access</span></div>
      <a href="#pricing">Choose package <span aria-hidden="true">↑</span></a>
    </aside>
  );
}
