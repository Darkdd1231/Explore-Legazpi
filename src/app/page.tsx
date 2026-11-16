import Link from "next/link";
import { ArrowUpRight, Compass, MapPin, Mountain, Waves, Route, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import { provinces, destinations } from "@/lib/data";

const photos = [
  "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=85"
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="hero-overlay" />
          <div className="hero-content wrap">
            <div className="hero-copy">
              <span className="eyebrow light"><Sparkles size={14} /> DISCOVER THE HEART OF BICOL</span>
              <h1>Find your<br /><em>own kind</em> of<br />adventure.</h1>
              <p>From the iconic silhouette of Mayon to quiet coastal roads and warm local welcomes. Your next Bicol story starts here.</p>
              <div className="hero-actions">
                <Link className="button button-light" href="/explore">Explore destinations <ArrowUpRight size={17} /></Link>
                <Link className="hero-secondary" href="/road-trips">Plan a road trip <span>↗</span></Link>
              </div>
              <div className="hero-location"><MapPin size={15} /> LEGAZPI CITY, ALBAY · PHILIPPINES</div>
            </div>
            <div className="hero-stamp"><Compass size={25}/><span>THE BICOL<br/>REGION GUIDE</span></div>
          </div>
          <div className="hero-bottom"><span>01 — 06 PROVINCES</span><span>SCROLL TO EXPLORE ↓</span></div>
        </section>

        <section className="intro wrap">
          <div><span className="eyebrow">A REGION WITH MANY STORIES</span><h2>One destination.<br/><em>A thousand ways to feel alive.</em></h2></div>
          <p>Bicol is more than a place on the map. It’s volcano mornings, sea-breeze afternoons, roadside discoveries and communities that make every stop memorable.</p>
        </section>

        <section className="section wrap">
          <div className="section-heading"><div><span className="eyebrow">START YOUR JOURNEY</span><h2>Places worth the detour.</h2><p>Get inspired by some of the region’s best-known places.</p></div><Link className="text-link" href="/explore">View all destinations <ArrowUpRight size={16}/></Link></div>
          <div className="destination-grid">
            {destinations.map((d, i) => <Link href="/explore" className="destination-card" key={d.name}>
              <div className="destination-photo" style={{backgroundImage: "url(" + photos[i % photos.length] + ")"}}><span className="photo-tag">{d.type}</span><span className="photo-arrow"><ArrowUpRight size={18}/></span></div>
              <div className="destination-caption"><div><h3>{d.name}</h3><p><MapPin size={13}/> {d.place}</p></div><span className="card-number">0{i + 1}</span></div>
              <p className="destination-note">{d.note}</p>
            </Link>)}
          </div>
        </section>

        <section className="province-section">
          <div className="wrap">
            <div className="section-heading"><div><span className="eyebrow">SIX PROVINCES, ONE REGION</span><h2>Where will you go next?</h2><p>Explore the different character of every Bicol province.</p></div><span className="province-count">06 <small>PROVINCES</small></span></div>
            <div className="province-grid">
              {provinces.map((p, i) => <Link className="province-item" href="/explore" key={p.slug}><span className="province-index">0{i + 1}</span><div><h3>{p.name}</h3><p>{p.description}</p></div><ArrowUpRight size={18}/></Link>)}
            </div>
          </div>
        </section>

        <section className="roadtrip wrap">
          <div className="roadtrip-image"><div className="roadtrip-badge"><Route size={18}/> THE OPEN ROAD</div></div>
          <div className="roadtrip-copy"><span className="eyebrow">TAKE THE SCENIC ROUTE</span><h2>Make the<br/><em>journey</em> the story.</h2><p>Plan a motorcycle escape, a family drive or a trip by public transport. Find inspiration for your next route around Bicol.</p><Link className="button button-dark" href="/road-trips">Discover road trips <ArrowUpRight size={17}/></Link></div>
        </section>

        <section className="local-banner"><div className="wrap local-inner"><div><span className="eyebrow light">BUILT FOR TRAVELERS AND LOCALS</span><h2>Know a place<br/>we should know?</h2><p>Help make this guide better by sharing the places, tips and local knowledge that make Bicol special.</p></div><Link className="button button-light" href="/explore">Explore the region <ArrowUpRight size={17}/></Link></div></section>
      </main>
      <footer className="footer"><div className="wrap footer-inner"><Link href="/" className="footer-brand">EXPLORE <b>LEGAZPI</b><small>YOUR GATEWAY TO BICOL</small></Link><span>Made with care in Bicol, Philippines.</span><span>© 2026 Explore Legazpi</span></div></footer>
    </>
  );
}