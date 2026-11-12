import React, { useMemo, useState } from 'react';
import { Plus, Minus, ShoppingBag, CheckCircle2 } from 'lucide-react';
import './SandwichBuilder.css';

const groups = [
  { key: 'bread', title: 'Choose your bread', options: [{name:'Classic white',price:0},{name:'Wheat',price:0},{name:'Italian herbs',price:0.5}] },
  { key: 'protein', title: 'Pick your protein', options: [{name:'Roasted chicken',price:1.5},{name:'Smoked turkey',price:1.5},{name:'Ham',price:1},{name:'Plant-based',price:1}] },
  { key: 'cheese', title: 'Add cheese', options: [{name:'Swiss',price:0.5},{name:'Cheddar',price:0.5},{name:'No cheese',price:0}] },
  { key: 'sauce', title: 'Finish with a sauce', options: [{name:'House herb',price:0},{name:'Honey mustard',price:0},{name:'Chipotle',price:0.25},{name:'No sauce',price:0}] }
];
const extras = [{name:'Lettuce',price:0},{name:'Tomato',price:0},{name:'Pickles',price:0},{name:'Onion',price:0},{name:'Avocado',price:1}];
const dollars = n => `$${n.toFixed(2)}`;
export default function SandwichBuilder(){
 const [choices,setChoices]=useState({bread:'Classic white',protein:'Roasted chicken',cheese:'Swiss',sauce:'House herb'});
 const [selectedExtras,setSelectedExtras]=useState(['Lettuce','Tomato']);
 const [added,setAdded]=useState(false);
 const total=useMemo(()=>9+groups.reduce((sum,g)=>sum+(g.options.find(o=>o.name===choices[g.key])?.price||0),0)+extras.filter(e=>selectedExtras.includes(e.name)).reduce((s,e)=>s+e.price,0),[choices,selectedExtras]);
 const update=(key,value)=>{setChoices(c=>({...c,[key]:value}));setAdded(false)};
 const toggleExtra=name=>{setSelectedExtras(v=>v.includes(name)?v.filter(x=>x!==name):[...v,name]);setAdded(false)};
 return <section className="builder-section section-pad" id="builder"><div className="builder-heading"><span className="eyebrow">MAKE IT YOURS</span><h2>Build your <em>perfect sando.</em></h2><p>Choose your ingredients and watch your sandwich total update. This is an interactive menu demonstration.</p></div>
 <div className="builder-layout"><div className="builder-preview"><div className="builder-photo"><img src="/swede-sandos-react/public/images/sandwiches/personnalizedsandwich.jpg" alt="Freshly prepared sandwich"/><span className="builder-photo-tag">YOUR CREATION</span></div><div className="builder-summary"><span>YOUR SANDWICH</span><strong>{choices.protein} & {choices.cheese}</strong><small>{choices.bread} · {selectedExtras.length?selectedExtras.join(', '):'No vegetables'} · {choices.sauce}</small></div><div className="builder-total"><span>ESTIMATED PRICE</span><strong>{dollars(total)}</strong></div></div>
 <div className="builder-options">{groups.map(group=><div className="builder-group" key={group.key}><h3>{group.title}</h3><div className="builder-choice-grid">{group.options.map(option=><button key={option.name} className={choices[group.key]===option.name?'selected':''} onClick={()=>update(group.key,option.name)}><span>{option.name}</span>{option.price>0&&<small>+{dollars(option.price)}</small>}</button>)}</div></div>)}<div className="builder-group"><h3>Add vegetables & extras</h3><div className="builder-choice-grid">{extras.map(extra=><button key={extra.name} className={selectedExtras.includes(extra.name)?'selected':''} onClick={()=>toggleExtra(extra.name)}><span>{extra.name}</span>{extra.price>0&&<small>+{dollars(extra.price)}</small>}</button>)}</div></div><button className="builder-add" onClick={()=>setAdded(true)}><ShoppingBag size={17}/> Add to demo order · {dollars(total)}</button>{added&&<p className="builder-confirm" role="status"><CheckCircle2 size={17}/> Your custom sandwich has been added to this demo order. No real order is placed.</p>}</div></div>
 </section>;
}
