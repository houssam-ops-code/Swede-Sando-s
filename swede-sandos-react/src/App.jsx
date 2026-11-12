import React from 'react';
import { useMemo, useState, useEffect } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Menu as MenuIcon, X, MapPin, Clock3, Leaf, Heart, Users, TrendingUp, Utensils, Instagram, Facebook, Check, Sparkles, DollarSign, BarChart3, ChevronLeft, ChevronRight, Gift, RotateCcw } from 'lucide-react';
import { menu, categories } from './data/menu';
import SandwichBuilder from './components/SandwichBuilder';

const money = (value) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);

function SectionHeading({ eyebrow, title, text, light = false }) {
  return <div className={`section-heading ${light ? 'light' : ''}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [orders, setOrders] = useState(50);
  const [ticket, setTicket] = useState(10);
  const [activeSwot, setActiveSwot] = useState('Strengths');
  const [scrolled, setScrolled] = useState(false);
  const [heroSlide, setHeroSlide] = useState(0);
  const [selectedReward, setSelectedReward] = useState(null);
  const [revealedCards, setRevealedCards] = useState([]);

  useEffect(() => {
    const targets = document.querySelectorAll('main > section:not(.hero), .section-heading, .intro-copy, .intro-art, .values-strip > div, .menu-card, .difference-card, .metric-card, .team-card, .swot-box, .projection-panel, .revenue-panel');
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: 0.08, rootMargin: '0px 0px -35px 0px' });
    targets.forEach((el, index) => { el.classList.add('reveal-on-scroll'); el.style.setProperty('--delay', `${(index % 4) * 90}ms`); observer.observe(el); });
    return () => observer.disconnect();
  }, [activeCategory]);

  useEffect(() => {
    const timer = window.setInterval(() => setHeroSlide(current => (current + 1) % heroSlides.length), 6000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const filteredMenu = useMemo(() => activeCategory === 'All' ? menu : menu.filter(item => item.category === activeCategory), [activeCategory]);
  const annualRevenue = orders * ticket * 360;
  const heroSlides = [
    { kicker: 'YOUR NEXT FAVORITE LUNCH SPOT', title: <>Big flavor.<br/><em>Small-town</em><br/>prices.</>, text: 'Freshly made sandwiches, feel-good ingredients and prices that make coming back easy. Made for students. Loved by the whole community.', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1200&q=85', label: 'THE SIGNATURE SANDO', price: '$8' },
    { kicker: 'MADE YOUR WAY', title: <>Your lunch.<br/><em>Your rules.</em></>, text: 'Choose your bread, protein, cheese, vegetables and sauce. Build a sandwich that fits your appetite and your budget.', image: '/images/sandwiches/fries.avif', label: 'BUILD YOUR OWN', price: '$9' },
    { kicker: 'MORE VALUE IN EVERY BITE', title: <>Good food.<br/><em>Good value.</em></>, text: 'A satisfying sandwich, a side and a drink. A simple combo designed for busy college days.', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=85', label: 'THE LUNCH COMBO', price: '$11' }
  ];
  const rewards = [
    { id: 'golden', name: 'Golden Bite', title: '10% OFF YOUR ORDER', detail: 'Enjoy 10% off your qualifying purchase.', code: 'GOLDEN10', note: 'Valid with a qualifying purchase. One reward per transaction.' },
    { id: 'fresh', name: 'Fresh Start', title: 'FREE DRINK', detail: 'Add a complimentary fountain drink when you buy a sandwich.', code: 'FRESHDRINK', note: 'Valid with the purchase of any sandwich. One reward per transaction.' },
    { id: 'combo', name: 'Big Combo', title: 'FREE SIDE', detail: 'Get a complimentary side with the purchase of a sandwich combo.', code: 'BIGSIDE', note: 'Valid with the purchase of a sandwich combo. One reward per transaction.' }
  ];
  const navItems = [['Concept', '#concept'], ['Menu', '#menu'], ['Build a sando', '#builder'], ['Our edge', '#difference'], ['Business', '#business'], ['Contact', '#contact']];

  const closeMenu = () => setMobileOpen(false);
  const swot = {
    Strengths: ['Student-friendly price points', 'Focused sandwich and quick-meal concept', 'Local, community-first identity'],
    Weaknesses: ['New brand with no established customer base', 'Limited startup budget and kitchen capacity', 'Sales may fluctuate with the college calendar'],
    Opportunities: ['Campus partnerships and team catering', 'Loyalty offers that encourage repeat visits', 'Seasonal visitors and community events'],
    Threats: ['Food and ingredient price changes', 'Established food businesses nearby', 'A new competitor entering the market']
  };

  return <>
    <div className="announcement"><span>FRESH MADE. FAIR PRICED.</span><i /> A new kind of sandwich stop for Lindsborg</div>
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <a className="brand" href="#top" onClick={closeMenu} aria-label="Swede Sando's home" img= '/images/hero/Swede Sando Image.png'>
        {/* Replace this temporary sandwich mark with the final Swede Sando's logo. */}
        <span className="brand-mark">SS<span>’</span></span><span className="brand-name">SWEDE <b>SANDO'S</b><small>LINDSBORG, KANSAS</small></span>
      </a>
      <nav className={mobileOpen ? 'nav open' : 'nav'}>{navItems.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}<a className="nav-cta" href="#menu" onClick={closeMenu}>Explore the menu <ArrowUpRight size={15}/></a></nav>
      <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? 'Close menu' : 'Open menu'}>{mobileOpen ? <X/> : <MenuIcon/>}</button>
    </header>

    <main id="top">
      <section className="hero">
        <div className="hero-grain" />
        <div className="hero-content">
          <div className="hero-slide-copy" key={heroSlide}>
            <span className="hero-kicker"><span className="kicker-dot"/> {heroSlides[heroSlide].kicker}</span>
            <h1>{heroSlides[heroSlide].title}</h1>
            <p>{heroSlides[heroSlide].text}</p>
            <div className="hero-actions"><a className="btn btn-gold" href="#menu">Discover the menu <ArrowRight size={17}/></a><a className="text-link" href="#concept">Get to know us <ArrowDown size={16}/></a></div>
            <div className="hero-proof"><div className="proof-avatars"><span>F</span><span>+</span><span>$</span></div><div><strong>A little more local.</strong><small>A lot more delicious.</small></div></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-photo" style={{backgroundImage:`url(${heroSlides[heroSlide].image})`}} role="img" aria-label="Fresh sandwich product photography"><div className="photo-label"><span>MADE FRESH</span><b>EVERY DAY</b></div></div>
          <div className="hero-sticker"><span>GOOD FOOD</span><b>GOOD MOOD</b><span className="sticker-star">✳</span></div>
          <div className="hero-price"><small>{heroSlides[heroSlide].label}</small><strong>{heroSlides[heroSlide].price}</strong><span>STUDENT-FRIENDLY</span></div>
          <div className="hero-carousel-controls"><button aria-label="Previous slide" onClick={()=>setHeroSlide(v=>(v+heroSlides.length-1)%heroSlides.length)}><ChevronLeft/></button>{heroSlides.map((_,i)=><button key={i} className={heroSlide===i?'active':''} aria-label={`Go to slide ${i+1}`} onClick={()=>setHeroSlide(i)}/>) }<button aria-label="Next slide" onClick={()=>setHeroSlide(v=>(v+1)%heroSlides.length)}><ChevronRight/></button></div>
        </div>
        <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><div className="scroll-line"/><span>01 / 05</span></div>
      </section>

      <section className="ticker" aria-label="Our values"><div className="ticker-track">{Array.from({length: 2}).map((_, i) => <span key={i}>FRESH INGREDIENTS <b>✳</b> FAIR PRICES <b>✳</b> MADE TO ORDER <b>✳</b> LOCAL SPIRIT <b>✳</b> BIG SANDWICH ENERGY <b>✳</b></span>)}</div></section>

      <section className="intro section-pad" id="concept">
        <div className="intro-copy"><span className="eyebrow">01 / THE IDEA</span><h2>A better bite<br/>for <em>every day.</em></h2><p className="lead">Swede Sando’s is a fast-casual sandwich shop concept built around one simple idea: a great meal should be fresh, filling and affordable.</p><p>From a quick breakfast before class to a made-to-order lunch between activities, we want to make good food an easy choice. Our goal is to bring people together around honest ingredients, friendly service and prices that respect a student budget.</p><a className="under-link" href="#difference">Why Swede Sando’s? <ArrowUpRight size={16}/></a></div>
        <div className="intro-art"><div className="art-card art-card-back"><span>FRESH</span><b>IS OUR<br/>THING.</b></div><div className="art-card art-card-front"><img className="intro-food-photo" src='/images/hero/Swede Sando Image.png' alt="Freshly made sandwich with vegetables"/><span className="art-caption">BUILT FOR YOUR DAY</span></div><div className="art-spark">✳</div><div className="art-note">GOOD FOOD.<br/>NO BIG PRICE TAG.</div></div>
      </section>

      <section className="values-strip"><div><Leaf/><strong>Fresh-minded</strong><span>Ingredients chosen with care</span></div><div><DollarSign/><strong>Budget-aware</strong><span>Value in every bite</span></div><div><Heart/><strong>Community-first</strong><span>Made for our hometown</span></div><div><Clock3/><strong>Made for your day</strong><span>Quick, convenient meals</span></div></section>

      <section className="menu-section section-pad" id="menu">
        <div className="menu-top"><SectionHeading eyebrow="02 / THE MENU" title={<>Your cravings.<br/><em>Your way.</em></>} text="A little something for every appetite, from early mornings to late study sessions."/><div className="menu-side-note"><span className="note-star">✳</span><p>Good food should fit<br/>your day — and your budget.</p></div></div>
        <div className="menu-controls">{categories.map(category => <button key={category} className={activeCategory === category ? 'filter active' : 'filter'} onClick={() => setActiveCategory(category)}>{category}</button>)}</div>
        <div className="menu-grid">{filteredMenu.map((item, index) => <article className="menu-card reveal-on-scroll" key={item.id} style={{'--delay': `${index * 45}ms`}}><div className={`menu-card-art art-${item.id}`} style={{backgroundImage:`linear-gradient(0deg, #142c4966, transparent 65%), url('${item.image}')`}}><small>{item.tag}</small></div><div className="menu-card-info"><div className="menu-title-row"><h3>{item.name}</h3><strong>{money(item.price)}</strong></div><p>{item.description}</p><span className="menu-category">{item.category}</span></div></article>)}</div>
        <div className="menu-footnote"><span>* Menu shown as a concept for this business plan.</span><span>Prices are proposed estimates.</span></div>
      </section>

      <SandwichBuilder />

      <section className="combo-band"><div className="combo-image"><div className="combo-circle combo-photo" role="img" aria-label="Sandwich and drink combo"/><div className="combo-burst">THE<br/>FULL<br/>PACKAGE</div></div><div className="combo-copy"><span className="eyebrow">THE EASY CHOICE</span><h2>Make it a<br/><em>combo.</em></h2><p>Your favorite sandwich, a side and a drink — all together for <strong>$11.</strong> More lunch, less thinking.</p><a className="btn btn-dark" href="#menu">Find your combo <ArrowRight size={17}/></a></div><div className="combo-price"><small>ONE GOOD DEAL</small><strong>$11</strong><span>SANDWICH + SIDE + DRINK</span></div></section>

      <section className="rewards-section section-pad" id="surprise">
        <div className="rewards-heading"><span className="eyebrow">A LITTLE EXTRA FOR OUR CUSTOMERS</span><h2>Pick your <em>surprise.</em></h2><p>Choose one mystery card to reveal a Swede Sando’s reward. Every card has a different treat.</p></div>
        <div className="reward-cards">{rewards.map((reward,index)=><button type="button" key={reward.id} className={`reward-card ${selectedReward?.id===reward.id?'chosen':''} ${revealedCards.includes(reward.id)?'revealed':''}`} onClick={()=>{if(!selectedReward){setSelectedReward(reward);setRevealedCards([reward.id]);}}} disabled={!!selectedReward} aria-label={`Choose mystery card ${index+1}`}><span className="reward-card-inner"><span className="reward-card-front"><span className="reward-number">0{index+1}</span><Gift size={42}/><strong>SWede<br/>SANDO'S</strong><small>YOUR SURPRISE AWAITS</small></span><span className="reward-card-back"><Sparkles size={27}/><strong>{reward.title}</strong><small>{reward.name}</small></span></span></button>)}</div>
        {selectedReward ? <div className="reward-reveal" role="status"><div className="reward-reveal-icon"><Gift size={25}/></div><div><span className="eyebrow">YOU UNLOCKED</span><h3>{selectedReward.name}</h3><strong>{selectedReward.title}</strong><p>{selectedReward.detail}</p><div className="coupon-code"><span>YOUR COUPON CODE</span><b>{selectedReward.code}</b></div><small>{selectedReward.note} Present this code at checkout. This is a class-project demonstration; no real coupon is issued.</small></div><button className="reward-reset" onClick={()=>{setSelectedReward(null);setRevealedCards([]);}}><RotateCcw size={15}/> Pick again</button></div> : <p className="reward-instruction">Choose a card to reveal your reward. You can only reveal one card per visit.</p>}
        <p className="reward-terms">Rewards are illustrative promotional concepts. Redemption requires the qualifying purchase described with each offer.</p>
      </section>

      <section className="difference section-pad" id="difference"><SectionHeading eyebrow="03 / WHY WE'RE DIFFERENT" title={<>Not just another<br/><em>sandwich stop.</em></>} text="We want to earn the everyday lunch visit — not just the occasional treat."/><div className="difference-grid"><article className="difference-card"><span className="diff-number">01</span><div className="diff-icon"><Leaf size={25}/></div><h3>Fresh, made to order</h3><p>Build a meal around what you like, prepared when you order it.</p></article><article className="difference-card"><span className="diff-number">02</span><div className="diff-icon"><DollarSign size={25}/></div><h3>Student-minded value</h3><p>Approachable prices and a proposed 10% student discount with college ID.</p></article><article className="difference-card"><span className="diff-number">03</span><div className="diff-icon"><Heart size={25}/></div><h3>Rooted in community</h3><p>A welcoming local concept designed to serve students, residents and visitors.</p></article><article className="difference-card"><span className="diff-number">04</span><div className="diff-icon"><Clock3 size={25}/></div><h3>Made for busy days</h3><p>Quick breakfast, easy lunch and satisfying options to take on the go.</p></article></div></section>

      <section className="business-section" id="business"><div className="business-top"><div><span className="eyebrow eyebrow-gold">04 / THE BUSINESS CASE</span><h2>A simple idea.<br/><em>A focused plan.</em></h2><p>We are building a business around repeat visits, accessible pricing and a clear customer need.</p></div><div className="business-stamp"><span>SWede</span><b>SANDO'S</b><small>LINDSBORG · KANSAS</small></div></div>
        <div className="metrics-grid"><div className="metric-card"><span className="metric-icon"><DollarSign/></span><strong>$40,000</strong><small>PROPOSED STARTUP BUDGET</small><div className="metric-bar"><i style={{width:'100%'}}/></div></div><div className="metric-card"><span className="metric-icon"><Users/></span><strong>50–75</strong><small>DAILY ORDER TARGET</small><div className="metric-bar"><i style={{width:'72%'}}/></div></div><div className="metric-card"><span className="metric-icon"><TrendingUp/></span><strong>$180K+</strong><small>YEAR 1 REVENUE TARGET</small><div className="metric-bar"><i style={{width:'60%'}}/></div></div><div className="metric-card"><span className="metric-icon"><BarChart3/></span><strong>54</strong><small>EST. DAILY BREAK-EVEN ORDERS*</small><div className="metric-bar"><i style={{width:'72%'}}/></div></div></div>
        <div className="business-lower"><div className="revenue-panel"><div className="panel-heading"><div><span className="eyebrow eyebrow-gold">TRY THE NUMBERS</span><h3>Revenue playground</h3></div><span className="live-pill"><i/> LIVE ESTIMATE</span></div><p>Adjust daily orders and average spend to see how the annual sales estimate changes.</p><div className="slider-group"><div className="slider-label"><label htmlFor="orders">Orders per day</label><strong>{orders}</strong></div><input id="orders" type="range" min="25" max="100" step="5" value={orders} onChange={e => setOrders(Number(e.target.value))}/><div className="range-ends"><span>25 orders</span><span>100 orders</span></div></div><div className="slider-group"><div className="slider-label"><label htmlFor="ticket">Average order value</label><strong>{money(ticket)}</strong></div><input id="ticket" type="range" min="6" max="15" step="0.5" value={ticket} onChange={e => setTicket(Number(e.target.value))}/><div className="range-ends"><span>$6</span><span>$15</span></div></div><div className="revenue-result"><span>ESTIMATED ANNUAL REVENUE</span><strong>{money(annualRevenue)}</strong><small>Based on 360 operating days per year.</small></div></div>
          <div className="projection-panel"><span className="eyebrow eyebrow-gold">YEAR 1 SCENARIOS</span><h3>Two paths to growth.</h3><div className="scenario"><div className="scenario-title"><span>Conservative</span><strong>$180,000</strong></div><div className="scenario-track"><i style={{width:'60%'}}/></div><small>50 orders/day · $10 average ticket</small></div><div className="scenario"><div className="scenario-title"><span>Moderate growth</span><strong>$297,000</strong></div><div className="scenario-track"><i style={{width:'99%'}}/></div><small>75 orders/day · $11 average ticket</small></div><div className="projection-note"><Sparkles size={16}/><span>Our strategy: keep prices approachable and build revenue through consistent customer volume.</span></div></div></div>
        <div className="business-disclaimer">*Financial figures are the original team estimates supplied for this class project, not audited forecasts. The break-even and profit assumptions should be reviewed before presenting them as validated financial results.</div>
      </section>

      <section className="swot-section section-pad"><div className="swot-intro"><span className="eyebrow">A CLEAR-EYED PLAN</span><h2>Know our strengths.<br/><em>Plan for the rest.</em></h2><p>A strong pitch shows not only what could work, but also that the team understands what it must manage.</p></div><div className="swot-box"><div className="swot-tabs">{Object.keys(swot).map(item => <button key={item} className={activeSwot === item ? 'active' : ''} onClick={() => setActiveSwot(item)}>{item}</button>)}</div><div className="swot-content"><span className="swot-symbol">{activeSwot === 'Strengths' ? '✳' : activeSwot === 'Weaknesses' ? '◒' : activeSwot === 'Opportunities' ? '↗' : '△'}</span><h3>{activeSwot}</h3><ul>{swot[activeSwot].map(item => <li key={item}><Check size={16}/>{item}</li>)}</ul></div></div></section>

      <section className="team-section"><div className="team-heading"><span className="eyebrow eyebrow-gold">THE PEOPLE BEHIND THE IDEA</span><h2>Good food takes<br/><em>a good team.</em></h2><p>A focused team with clear responsibilities — from operations to customer relationships.</p></div><div className="team-grid"><article className="team-card"><div className="team-avatar">JT</div><div><h3>Jace Trancosa</h3><span>GENERAL MANAGER / OWNER</span><p>Business oversight, finances, supply chain and marketing.</p></div></article><article className="team-card"><div className="team-avatar">IN</div><div><h3>Isaiah Nunez</h3><span>OPERATIONS LEAD</span><p>Kitchen workflow, equipment, scheduling and inventory.</p></div></article><article className="team-card"><div className="team-avatar">HB</div><div><h3>Houssam Benrbib</h3><span>CUSTOMER RELATIONS LEAD</span><p>Customer experience, cashiering, social media and campus outreach.</p></div></article></div><div className="hiring-note"><Users size={18}/><span>Planned team expansion: 2–3 part-time sandwich artists.</span></div></section>

      <section className="cta-section" id="contact"><div className="cta-sun">✳</div><span className="eyebrow">YOUR NEXT GREAT LUNCH</span><h2>Come hungry.<br/><em>Leave happy.</em></h2><p>Swede Sando’s — a fresh take on the everyday sandwich, imagined for Lindsborg.</p><a className="btn btn-gold" href="#top">Back to the top <ArrowUpRight size={17}/></a><div className="cta-bottom"><span><MapPin size={15}/> Lindsborg, Kansas</span><span><Utensils size={15}/> Fresh-made sandwich concept</span></div></section>
    </main>

    <footer className="footer"><a className="brand footer-brand" href="#top"><span className="brand-mark">SS<span>’</span></span><span className="brand-name">SWEDE <b>SANDO'S</b><small>LINDSBORG, KANSAS</small></span></a><p>Fresh made. Fair priced. Made with community in mind.</p><div className="footer-social"><a href="#contact" aria-label="Instagram placeholder"><Instagram/></a><a href="#contact" aria-label="Facebook placeholder"><Facebook/></a></div><small className="footer-copy">© 2026 Swede Sando’s · Business concept created for an entrepreneurship class project.</small></footer>
  </>;
}

export default App;
