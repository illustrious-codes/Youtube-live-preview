import "../styles/home.css";
import LivePreview from "../components/LivePreview";
import Image from "next/image";

export default function Home() {
  return (
    <main className="page">
      <header className="page__header">
        <Image
          className="page__logo"
          src="/images/cbinewslogo.png"
          alt="Live Preview logo"
          width={200}
          height={60}
          priority
        />
        <span className="page__brand">Live Preview</span>
      </header>

      <div className="page__hero">
        <h1 className="page__title">Paste a live link. Watch it here.</h1>
        {/* <p className="page__subtitle">Paste Your Live Link Here</p> */}
      </div>

      <LivePreview />
    </main>
  );
}
