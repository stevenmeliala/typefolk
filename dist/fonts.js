/* Unicode transformations: unmapped characters are always preserved. */
(function(root){
 const alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
 function range(start,length){return Array.from({length},(_,i)=>String.fromCodePoint(start+i)).join('')}
 function mapped(upper,lower,digits='0123456789') {const chars=Array.from(upper+lower+digits);return text=>Array.from(text,c=>{const i=alphabet.indexOf(c);return i<0?c:chars[i]}).join('')}
 function mathematical(u,l,d){return mapped(range(u,26),range(l,26),d?range(d,10):undefined)}
 const styles=[
 {id:'bold',name:'Bold',category:'bold',popular:true,convert:mathematical(0x1d400,0x1d41a,0x1d7ce)},
 {id:'italic',name:'Italic',category:'elegant',convert:mapped(range(0x1d434,26),'𝑎𝑏𝑐𝑑𝑒𝑓𝑔ℎ𝑖𝑗𝑘𝑙𝑚𝑛𝑜𝑝𝑞𝑟𝑠𝑡𝑢𝑣𝑤𝑥𝑦𝑧')},
 {id:'bold-italic',name:'Bold italic',category:'bold',convert:mathematical(0x1d468,0x1d482)},
 {id:'script',name:'Script',category:'elegant',popular:true,convert:mapped('𝒜ℬ𝒞𝒟ℰℱ𝒢ℋℐ𝒥𝒦ℒℳ𝒩𝒪𝒫𝒬ℛ𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵','𝒶𝒷𝒸𝒹ℯ𝒻ℊ𝒽𝒾𝒿𝓀𝓁𝓂𝓃ℴ𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏')},
 {id:'bold-script',name:'Bold script',category:'elegant',convert:mathematical(0x1d4d0,0x1d4ea)},
 {id:'double-struck',name:'Double-struck',category:'playful',convert:mapped('𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ',range(0x1d552,26),range(0x1d7d8,10))},
 {id:'sans',name:'Sans serif',category:'minimal',convert:mathematical(0x1d5a0,0x1d5ba,0x1d7e2)},
 {id:'sans-bold',name:'Sans bold',category:'bold',convert:mathematical(0x1d5d4,0x1d5ee,0x1d7ec)},
 {id:'sans-italic',name:'Sans italic',category:'minimal',convert:mathematical(0x1d608,0x1d622)},
 {id:'sans-bold-italic',name:'Sans bold italic',category:'bold',convert:mathematical(0x1d63c,0x1d656)},
 {id:'monospace',name:'Monospace',category:'minimal',convert:mathematical(0x1d670,0x1d68a,0x1d7f6)},
 {id:'gothic',name:'Gothic',category:'elegant',convert:mapped('𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ',range(0x1d51e,26))},
 {id:'bold-gothic',name:'Bold gothic',category:'bold',convert:mathematical(0x1d56c,0x1d586)},
 {id:'circled',name:'Circled',category:'playful',convert:mapped(range(0x24b6,26),range(0x24d0,26),'⓪①②③④⑤⑥⑦⑧⑨')},
 {id:'wide',name:'Full width',category:'playful',convert:mathematical(0xff21,0xff41,0xff10)},
 {id:'underline',name:'Underlined',category:'minimal',convert:text=>Array.from(text,c=>/[A-Za-z0-9]/.test(c)?c+'\u0332':c).join('')},
 {id:'strike',name:'Strikethrough',category:'playful',convert:text=>Array.from(text,c=>/[A-Za-z0-9]/.test(c)?c+'\u0336':c).join('')},
 {id:'spaced',name:'Letter spaced',category:'minimal',convert:text=>Array.from(text,c=>/[A-Za-z0-9]/.test(c)?c+'\u2009':c).join('')}
 ];
 root.Typefolk={styles};
})(typeof window==='undefined'?globalThis:window);
