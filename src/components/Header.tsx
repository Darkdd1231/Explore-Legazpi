"use client";
import Link from "next/link";
import { useState } from "react";
import { Compass, Menu, X, ArrowUpRight } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="header-inner wrap">
        <Link href="/" className="brand"><span className="brand-icon"><Compass size={22}/></span><span>EXPLORE <b>LEGAZPI</b><small>YOUR GATEWAY TO BICOL</small></span></Link>
        <nav className="desktop-nav"><Link href="/explore">Destinations</Link><Link href="/road-trips">Road trips</Link><Link href="/transportation">Getting around</Link><Link href="/map">Map</Link></nav>
        <Link className="header-cta" href="/explore">Start exploring <ArrowUpRight size={15}/></Link>
        <button className="mobile-toggle" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
      </div>
      {open && <nav className="mobile-nav"><Link onClick={() => setOpen(false)} href="/explore">Destinations</Link><Link onClick={() => setOpen(false)} href="/road-trips">Road trips</Link><Link onClick={() => setOpen(false)} href="/transportation">Getting around</Link><Link onClick={() => setOpen(false)} href="/map">Map</Link></nav>}
    </header>
  );
}