import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export function LegalPage({ children }: { children: ReactNode }) {
  return (
    <main className="legal-page">
      <div className="legal-shell">
        <header className="legal-header">
          <Link href="/" aria-label="Back to ReShoot home">
            <Image src="/brand/reshoot-logo.svg" alt="ReShoot" width={116} height={48} unoptimized />
          </Link>
          <Link href="/">← Back to course</Link>
        </header>
        <article className="legal-content">{children}</article>
      </div>
    </main>
  );
}
