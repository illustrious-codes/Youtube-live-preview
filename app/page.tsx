import "../styles/home.css";
import LivePreview from "../components/LivePreview";

export default function Home() {
  return (
    <main className="page">
      <header className="page__header">
        <span className="page__brand">Live Preview</span>
      </header>

      <div className="page__hero">
        <h1 className="page__title">Paste a live link. Watch it here.</h1>
        <p className="page__subtitle">
          Works with youtube.com/live, watch, and youtu.be links.
        </p>
      </div>

      <LivePreview />
    </main>
  );
}
