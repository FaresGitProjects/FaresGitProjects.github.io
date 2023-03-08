import{f as gy,h as yy,b as vy,Q as Br}from"./QBtn.633ccf22.js";import{c as Ac,f as wy,d as Iy}from"./render.4b1c7ecc.js";import{c as J,h as Fe,g as Sd,r as He,S as _y,w as by,j as Ty,W as Ey,o as Sy,k as yl,_ as ky,Z as Ay,v as ua,x as vl,y as Qe,z as Ce,A as vt,$ as Cy,a0 as Dy,a1 as Ny,a2 as Ry,C as la,B as wl}from"./index.2726331d.js";import{u as kd,b as Ad,Q as Il,e as xy,c as ps,T as _l,s as bl,m as ha,k as Py,f as Oy,i as My,j as Tl,l as El}from"./QScrollObserver.6ec2bb1d.js";import{Q as Ly}from"./QPage.5a0025d5.js";var Sl=Ac({name:"QAvatar",props:{...gy,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(n,{slots:e}){const t=yy(n),r=J(()=>"q-avatar"+(n.color?` bg-${n.color}`:"")+(n.textColor?` text-${n.textColor} q-chip--colored`:"")+(n.square===!0?" q-avatar--square":n.rounded===!0?" rounded-borders":"")),i=J(()=>n.fontSize?{fontSize:n.fontSize}:null);return()=>{const s=n.icon!==void 0?[Fe(vy,{name:n.icon})]:void 0;return Fe("div",{class:r.value,style:t.value},[Fe("div",{class:"q-avatar__content row flex-center overflow-hidden",style:i.value},wy(e.default,s))])}}});const Fy={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},da={xs:2,sm:4,md:8,lg:16,xl:24};var Vy=Ac({name:"QSeparator",props:{...kd,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(n){const e=Sd(),t=Ad(n,e.proxy.$q),r=J(()=>n.vertical===!0?"vertical":"horizontal"),i=J(()=>` q-separator--${r.value}`),s=J(()=>n.inset!==!1?`${i.value}-${Fy[n.inset]}`:""),o=J(()=>`q-separator${i.value}${s.value}`+(n.color!==void 0?` bg-${n.color}`:"")+(t.value===!0?" q-separator--dark":"")),a=J(()=>{const c={};if(n.size!==void 0&&(c[n.vertical===!0?"width":"height"]=n.size),n.spaced!==!1){const u=n.spaced===!0?`${da.md}px`:n.spaced in da?`${da[n.spaced]}px`:n.spaced,l=n.vertical===!0?["Left","Right"]:["Top","Bottom"];c[`margin${l[0]}`]=c[`margin${l[1]}`]=u}return c});return()=>Fe("hr",{class:o.value,style:a.value,"aria-orientation":r.value})}});const kl=["vertical","horizontal"],fa={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},Al={prevent:!0,mouse:!0,mouseAllDir:!0},Cl=n=>n>=250?50:Math.ceil(n/5);var Uy=Ac({name:"QScrollArea",props:{...kd,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(n,{slots:e,emit:t}){const r=He(!1),i=He(!1),s=He(!1),o={vertical:He(0),horizontal:He(0)},a={vertical:{ref:He(null),position:He(0),size:He(0)},horizontal:{ref:He(null),position:He(0),size:He(0)}},{proxy:c}=Sd(),u=Ad(n,c.$q);let l,h;const d=He(null),m=J(()=>"q-scrollarea"+(u.value===!0?" q-scrollarea--dark":""));a.vertical.percentage=J(()=>{const k=a.vertical.size.value-o.vertical.value;if(k<=0)return 0;const P=ps(a.vertical.position.value/k,0,1);return Math.round(P*1e4)/1e4}),a.vertical.thumbHidden=J(()=>(n.visible===null?s.value:n.visible)!==!0&&r.value===!1&&i.value===!1||a.vertical.size.value<=o.vertical.value+1),a.vertical.thumbStart=J(()=>a.vertical.percentage.value*(o.vertical.value-a.vertical.thumbSize.value)),a.vertical.thumbSize=J(()=>Math.round(ps(o.vertical.value*o.vertical.value/a.vertical.size.value,Cl(o.vertical.value),o.vertical.value))),a.vertical.style=J(()=>({...n.thumbStyle,...n.verticalThumbStyle,top:`${a.vertical.thumbStart.value}px`,height:`${a.vertical.thumbSize.value}px`})),a.vertical.thumbClass=J(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.vertical.barClass=J(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),a.horizontal.percentage=J(()=>{const k=a.horizontal.size.value-o.horizontal.value;if(k<=0)return 0;const P=ps(Math.abs(a.horizontal.position.value)/k,0,1);return Math.round(P*1e4)/1e4}),a.horizontal.thumbHidden=J(()=>(n.visible===null?s.value:n.visible)!==!0&&r.value===!1&&i.value===!1||a.horizontal.size.value<=o.horizontal.value+1),a.horizontal.thumbStart=J(()=>a.horizontal.percentage.value*(o.horizontal.value-a.horizontal.thumbSize.value)),a.horizontal.thumbSize=J(()=>Math.round(ps(o.horizontal.value*o.horizontal.value/a.horizontal.size.value,Cl(o.horizontal.value),o.horizontal.value))),a.horizontal.style=J(()=>({...n.thumbStyle,...n.horizontalThumbStyle,[c.$q.lang.rtl===!0?"right":"left"]:`${a.horizontal.thumbStart.value}px`,width:`${a.horizontal.thumbSize.value}px`})),a.horizontal.thumbClass=J(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.horizontal.barClass=J(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const g=J(()=>a.vertical.thumbHidden.value===!0&&a.horizontal.thumbHidden.value===!0?n.contentStyle:n.contentActiveStyle),b=[[_l,k=>{ce(k,"vertical")},void 0,{vertical:!0,...Al}]],D=[[_l,k=>{ce(k,"horizontal")},void 0,{horizontal:!0,...Al}]];function B(){const k={};return kl.forEach(P=>{const G=a[P];k[P+"Position"]=G.position.value,k[P+"Percentage"]=G.percentage.value,k[P+"Size"]=G.size.value,k[P+"ContainerSize"]=o[P].value}),k}const q=_y(()=>{const k=B();k.ref=c,t("scroll",k)},0);function M(k,P,G){if(kl.includes(k)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(k==="vertical"?bl:ha)(d.value,P,G)}function ie({height:k,width:P}){let G=!1;o.vertical.value!==k&&(o.vertical.value=k,G=!0),o.horizontal.value!==P&&(o.horizontal.value=P,G=!0),G===!0&&ds()}function H({position:k}){let P=!1;a.vertical.position.value!==k.top&&(a.vertical.position.value=k.top,P=!0),a.horizontal.position.value!==k.left&&(a.horizontal.position.value=k.left,P=!0),P===!0&&ds()}function j({height:k,width:P}){a.horizontal.size.value!==P&&(a.horizontal.size.value=P,ds()),a.vertical.size.value!==k&&(a.vertical.size.value=k,ds())}function ce(k,P){const G=a[P];if(k.isFirst===!0){if(G.thumbHidden.value===!0)return;h=G.position.value,i.value=!0}else if(i.value!==!0)return;k.isFinal===!0&&(i.value=!1);const an=fa[P],ms=o[P].value,fy=(G.size.value-ms)/(ms-G.thumbSize.value),my=k.distance[an.dist],py=h+(k.direction===an.dir?1:-1)*my*fy;gl(py,P)}function tt(k,P){const G=a[P];if(G.thumbHidden.value!==!0){const an=k[fa[P].offset];if(an<G.thumbStart.value||an>G.thumbStart.value+G.thumbSize.value){const ms=an-G.thumbSize.value/2;gl(ms/o[P].value*G.size.value,P)}G.ref.value!==null&&G.ref.value.dispatchEvent(new MouseEvent(k.type,k))}}function Ur(k){tt(k,"vertical")}function ca(k){tt(k,"horizontal")}function ds(){r.value===!0?clearTimeout(l):r.value=!0,l=setTimeout(()=>{r.value=!1},n.delay),n.onScroll!==void 0&&q()}function gl(k,P){d.value[fa[P].scroll]=k}function hy(){s.value=!0}function dy(){s.value=!1}let fs=null;return by(()=>c.$q.lang.rtl,k=>{d.value!==null&&ha(d.value,Math.abs(a.horizontal.position.value)*(k===!0?-1:1))}),Ty(()=>{fs={top:a.vertical.position.value,left:a.horizontal.position.value}}),Ey(()=>{if(fs===null)return;const k=d.value;k!==null&&(ha(k,fs.left),bl(k,fs.top))}),Sy(q.cancel),Object.assign(c,{getScrollTarget:()=>d.value,getScroll:B,getScrollPosition:()=>({top:a.vertical.position.value,left:a.horizontal.position.value}),getScrollPercentage:()=>({top:a.vertical.percentage.value,left:a.horizontal.percentage.value}),setScrollPosition:M,setScrollPercentage(k,P,G){M(k,P*(a[k].size.value-o[k].value)*(k==="horizontal"&&c.$q.lang.rtl===!0?-1:1),G)}}),()=>Fe("div",{class:m.value,onMouseenter:hy,onMouseleave:dy},[Fe("div",{ref:d,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:n.tabindex!==void 0?n.tabindex:void 0},[Fe("div",{class:"q-scrollarea__content absolute",style:g.value},Iy(e.default,[Fe(Il,{debounce:0,onResize:j})])),Fe(xy,{axis:"both",onScroll:H})]),Fe(Il,{debounce:0,onResize:ie}),Fe("div",{class:a.vertical.barClass.value,style:[n.barStyle,n.verticalBarStyle],"aria-hidden":"true",onMousedown:Ur}),Fe("div",{class:a.horizontal.barClass.value,style:[n.barStyle,n.horizontalBarStyle],"aria-hidden":"true",onMousedown:ca}),yl(Fe("div",{ref:a.vertical.ref,class:a.vertical.thumbClass.value,style:a.vertical.style.value,"aria-hidden":"true"}),b),yl(Fe("div",{ref:a.horizontal.ref,class:a.horizontal.thumbClass.value,style:a.horizontal.style.value,"aria-hidden":"true"}),D)])}});function yt(n,e){if(e.length<n)throw new TypeError(n+" argument"+(n>1?"s":"")+" required, but only "+e.length+" present")}function As(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?As=function(t){return typeof t}:As=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},As(n)}function De(n){yt(1,arguments);var e=Object.prototype.toString.call(n);return n instanceof Date||As(n)==="object"&&e==="[object Date]"?new Date(n.getTime()):typeof n=="number"||e==="[object Number]"?new Date(n):((typeof n=="string"||e==="[object String]")&&typeof console!="undefined"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}var By={};function qy(){return By}function Dl(n){var e=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return e.setUTCFullYear(n.getFullYear()),n.getTime()-e.getTime()}function Cs(n,e){yt(2,arguments);var t=De(n),r=De(e),i=t.getTime()-r.getTime();return i<0?-1:i>0?1:i}function $y(n,e){yt(2,arguments);var t=De(n),r=De(e),i=t.getFullYear()-r.getFullYear(),s=t.getMonth()-r.getMonth();return i*12+s}function zy(n,e){return yt(2,arguments),De(n).getTime()-De(e).getTime()}var Nl={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}},jy="trunc";function Gy(n){return n?Nl[n]:Nl[jy]}function Wy(n){yt(1,arguments);var e=De(n);return e.setHours(23,59,59,999),e}function Ky(n){yt(1,arguments);var e=De(n),t=e.getMonth();return e.setFullYear(e.getFullYear(),t+1,0),e.setHours(23,59,59,999),e}function Hy(n){yt(1,arguments);var e=De(n);return Wy(e).getTime()===Ky(e).getTime()}function Qy(n,e){yt(2,arguments);var t=De(n),r=De(e),i=Cs(t,r),s=Math.abs($y(t,r)),o;if(s<1)o=0;else{t.getMonth()===1&&t.getDate()>27&&t.setDate(30),t.setMonth(t.getMonth()-i*s);var a=Cs(t,r)===-i;Hy(De(n))&&s===1&&Cs(n,r)===1&&(a=!1),o=i*(s-Number(a))}return o===0?0:o}function Yy(n,e,t){yt(2,arguments);var r=zy(n,e)/1e3;return Gy(t==null?void 0:t.roundingMethod)(r)}var Xy={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Jy=function(e,t,r){var i,s=Xy[e];return typeof s=="string"?i=s:t===1?i=s.one:i=s.other.replace("{{count}}",t.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+i:i+" ago":i},Zy=Jy;function ma(n){return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.width?String(e.width):n.defaultWidth,r=n.formats[t]||n.formats[n.defaultWidth];return r}}var ev={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},tv={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},nv={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},rv={date:ma({formats:ev,defaultWidth:"full"}),time:ma({formats:tv,defaultWidth:"full"}),dateTime:ma({formats:nv,defaultWidth:"full"})},iv=rv,sv={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},ov=function(e,t,r,i){return sv[e]},av=ov;function qr(n){return function(e,t){var r=t!=null&&t.context?String(t.context):"standalone",i;if(r==="formatting"&&n.formattingValues){var s=n.defaultFormattingWidth||n.defaultWidth,o=t!=null&&t.width?String(t.width):s;i=n.formattingValues[o]||n.formattingValues[s]}else{var a=n.defaultWidth,c=t!=null&&t.width?String(t.width):n.defaultWidth;i=n.values[c]||n.values[a]}var u=n.argumentCallback?n.argumentCallback(e):e;return i[u]}}var cv={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},uv={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},lv={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},hv={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},dv={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},fv={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},mv=function(e,t){var r=Number(e),i=r%100;if(i>20||i<10)switch(i%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},pv={ordinalNumber:mv,era:qr({values:cv,defaultWidth:"wide"}),quarter:qr({values:uv,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:qr({values:lv,defaultWidth:"wide"}),day:qr({values:hv,defaultWidth:"wide"}),dayPeriod:qr({values:dv,defaultWidth:"wide",formattingValues:fv,defaultFormattingWidth:"wide"})},gv=pv;function $r(n){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.width,i=r&&n.matchPatterns[r]||n.matchPatterns[n.defaultMatchWidth],s=e.match(i);if(!s)return null;var o=s[0],a=r&&n.parsePatterns[r]||n.parsePatterns[n.defaultParseWidth],c=Array.isArray(a)?vv(a,function(h){return h.test(o)}):yv(a,function(h){return h.test(o)}),u;u=n.valueCallback?n.valueCallback(c):c,u=t.valueCallback?t.valueCallback(u):u;var l=e.slice(o.length);return{value:u,rest:l}}}function yv(n,e){for(var t in n)if(n.hasOwnProperty(t)&&e(n[t]))return t}function vv(n,e){for(var t=0;t<n.length;t++)if(e(n[t]))return t}function wv(n){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.match(n.matchPattern);if(!r)return null;var i=r[0],s=e.match(n.parsePattern);if(!s)return null;var o=n.valueCallback?n.valueCallback(s[0]):s[0];o=t.valueCallback?t.valueCallback(o):o;var a=e.slice(i.length);return{value:o,rest:a}}}var Iv=/^(\d+)(th|st|nd|rd)?/i,_v=/\d+/i,bv={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Tv={any:[/^b/i,/^(a|c)/i]},Ev={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Sv={any:[/1/i,/2/i,/3/i,/4/i]},kv={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Av={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Cv={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Dv={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Nv={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Rv={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},xv={ordinalNumber:wv({matchPattern:Iv,parsePattern:_v,valueCallback:function(e){return parseInt(e,10)}}),era:$r({matchPatterns:bv,defaultMatchWidth:"wide",parsePatterns:Tv,defaultParseWidth:"any"}),quarter:$r({matchPatterns:Ev,defaultMatchWidth:"wide",parsePatterns:Sv,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:$r({matchPatterns:kv,defaultMatchWidth:"wide",parsePatterns:Av,defaultParseWidth:"any"}),day:$r({matchPatterns:Cv,defaultMatchWidth:"wide",parsePatterns:Dv,defaultParseWidth:"any"}),dayPeriod:$r({matchPatterns:Nv,defaultMatchWidth:"any",parsePatterns:Rv,defaultParseWidth:"any"})},Pv=xv,Ov={code:"en-US",formatDistance:Zy,formatLong:iv,formatRelative:av,localize:gv,match:Pv,options:{weekStartsOn:0,firstWeekContainsDate:1}},Mv=Ov;function Cd(n,e){if(n==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n}function Lv(n){return Cd({},n)}var Rl=1440,Fv=2520,pa=43200,Vv=86400;function Uv(n,e,t){var r,i;yt(2,arguments);var s=qy(),o=(r=(i=t==null?void 0:t.locale)!==null&&i!==void 0?i:s.locale)!==null&&r!==void 0?r:Mv;if(!o.formatDistance)throw new RangeError("locale must contain formatDistance property");var a=Cs(n,e);if(isNaN(a))throw new RangeError("Invalid time value");var c=Cd(Lv(t),{addSuffix:Boolean(t==null?void 0:t.addSuffix),comparison:a}),u,l;a>0?(u=De(e),l=De(n)):(u=De(n),l=De(e));var h=Yy(l,u),d=(Dl(l)-Dl(u))/1e3,m=Math.round((h-d)/60),g;if(m<2)return t!=null&&t.includeSeconds?h<5?o.formatDistance("lessThanXSeconds",5,c):h<10?o.formatDistance("lessThanXSeconds",10,c):h<20?o.formatDistance("lessThanXSeconds",20,c):h<40?o.formatDistance("halfAMinute",0,c):h<60?o.formatDistance("lessThanXMinutes",1,c):o.formatDistance("xMinutes",1,c):m===0?o.formatDistance("lessThanXMinutes",1,c):o.formatDistance("xMinutes",m,c);if(m<45)return o.formatDistance("xMinutes",m,c);if(m<90)return o.formatDistance("aboutXHours",1,c);if(m<Rl){var b=Math.round(m/60);return o.formatDistance("aboutXHours",b,c)}else{if(m<Fv)return o.formatDistance("xDays",1,c);if(m<pa){var D=Math.round(m/Rl);return o.formatDistance("xDays",D,c)}else if(m<Vv)return g=Math.round(m/pa),o.formatDistance("aboutXMonths",g,c)}if(g=Qy(l,u),g<12){var B=Math.round(m/pa);return o.formatDistance("xMonths",B,c)}else{var q=g%12,M=Math.floor(g/12);return q<3?o.formatDistance("aboutXYears",M,c):q<9?o.formatDistance("overXYears",M,c):o.formatDistance("almostXYears",M+1,c)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dd=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Bv=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Nd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,u=c?n[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,m=u&63;c||(m=64,o||(d=64)),r.push(t[l],t[h],t[d],t[m])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Dd(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Bv(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const u=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),u!==64){const m=a<<4&240|u>>2;if(r.push(m),h!==64){const g=u<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},qv=function(n){const e=Dd(n);return Nd.encodeByteArray(e,!0)},Vs=function(n){return qv(n).replace(/\./g,"")},Rd=function(n){try{return Nd.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Us(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!$v(t)||(n[t]=Us(n[t],e[t]));return n}function $v(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zv(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Z())}function Cc(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function jv(){return typeof self=="object"&&self.self===self}function xd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Dc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Pd(){const n=Z();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Gv(){return!Cc()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function pi(){try{return typeof indexedDB=="object"}catch{return!1}}function Wv(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}function Kv(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv=()=>Kv().__FIREBASE_DEFAULTS__,Qv=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Yv=()=>{if(typeof document=="undefined")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Rd(n[1]);return e&&JSON.parse(e)},Od=()=>{try{return Hv()||Qv()||Yv()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Xv=()=>{var n;return(n=Od())===null||n===void 0?void 0:n.config},Jv=n=>{var e;return(e=Od())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ew(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[Vs(JSON.stringify(t)),Vs(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw="FirebaseError";class Me extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=tw,Object.setPrototypeOf(this,Me.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Un.prototype.create)}}class Un{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?nw(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Me(i,a,r)}}function nw(n,e){return n.replace(rw,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const rw=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xl(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function iw(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Va(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(Pl(s)&&Pl(o)){if(!Va(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Pl(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function tr(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Zr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Md(n,e){const t=new sw(n,e);return t.subscribe.bind(t)}class sw{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");ow(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=ga),i.error===void 0&&(i.error=ga),i.complete===void 0&&(i.complete=ga);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ow(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ga(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(n){return n&&n._delegate?n._delegate:n}class ft{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Zv;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(uw(e))try{this.getOrInitializeService({instanceIdentifier:un})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=un){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=un){return this.instances.has(e)}getOptions(e=un){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(!!r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:cw(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=un){return this.component?this.component.multipleInstances?e:un:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cw(n){return n===un?void 0:n}function uw(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new aw(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc=[];var V;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(V||(V={}));const Ld={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},hw=V.INFO,dw={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},fw=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=dw[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fo{constructor(e){this.name=e,this._logLevel=hw,this._logHandler=fw,this._userLogHandler=null,Nc.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in V))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ld[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...e),this._logHandler(this,V.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...e),this._logHandler(this,V.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,V.INFO,...e),this._logHandler(this,V.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,V.WARN,...e),this._logHandler(this,V.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...e),this._logHandler(this,V.ERROR,...e)}}function mw(n){Nc.forEach(e=>{e.setLogLevel(n)})}function pw(n,e){for(const t of Nc){let r=null;e&&e.level&&(r=Ld[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(i,s,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");s>=(r!=null?r:i.logLevel)&&n({level:V[s].toLowerCase(),message:a,args:o,type:i.name})}}}const gw=(n,e)=>e.some(t=>n instanceof t);let Ol,Ml;function yw(){return Ol||(Ol=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vw(){return Ml||(Ml=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fd=new WeakMap,Ua=new WeakMap,Vd=new WeakMap,ya=new WeakMap,Rc=new WeakMap;function ww(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(Bt(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Fd.set(t,n)}).catch(()=>{}),Rc.set(e,n),e}function Iw(n){if(Ua.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Ua.set(n,e)}let Ba={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ua.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Vd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Bt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function _w(n){Ba=n(Ba)}function bw(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(va(this),e,...t);return Vd.set(r,e.sort?e.sort():[e]),Bt(r)}:vw().includes(n)?function(...e){return n.apply(va(this),e),Bt(Fd.get(this))}:function(...e){return Bt(n.apply(va(this),e))}}function Tw(n){return typeof n=="function"?bw(n):(n instanceof IDBTransaction&&Iw(n),gw(n,yw())?new Proxy(n,Ba):n)}function Bt(n){if(n instanceof IDBRequest)return ww(n);if(ya.has(n))return ya.get(n);const e=Tw(n);return e!==n&&(ya.set(n,e),Rc.set(e,n)),e}const va=n=>Rc.get(n);function Ew(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=Bt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Bt(o.result),c.oldVersion,c.newVersion,Bt(o.transaction))}),t&&o.addEventListener("blocked",()=>t()),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Sw=["get","getKey","getAll","getAllKeys","count"],kw=["put","add","delete","clear"],wa=new Map;function Ll(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(wa.get(e))return wa.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=kw.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Sw.includes(t)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),i&&c.done]))[0]};return wa.set(e,s),s}_w(n=>({...n,get:(e,t,r)=>Ll(e,t)||n.get(e,t,r),has:(e,t)=>!!Ll(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Cw(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Cw(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qa="@firebase/app",Fl="0.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=new fo("@firebase/app"),Dw="@firebase/app-compat",Nw="@firebase/analytics-compat",Rw="@firebase/analytics",xw="@firebase/app-check-compat",Pw="@firebase/app-check",Ow="@firebase/auth",Mw="@firebase/auth-compat",Lw="@firebase/database",Fw="@firebase/database-compat",Vw="@firebase/functions",Uw="@firebase/functions-compat",Bw="@firebase/installations",qw="@firebase/installations-compat",$w="@firebase/messaging",zw="@firebase/messaging-compat",jw="@firebase/performance",Gw="@firebase/performance-compat",Ww="@firebase/remote-config",Kw="@firebase/remote-config-compat",Hw="@firebase/storage",Qw="@firebase/storage-compat",Yw="@firebase/firestore",Xw="@firebase/firestore-compat",Jw="firebase",Zw="9.15.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t="[DEFAULT]",eI={[qa]:"fire-core",[Dw]:"fire-core-compat",[Rw]:"fire-analytics",[Nw]:"fire-analytics-compat",[Pw]:"fire-app-check",[xw]:"fire-app-check-compat",[Ow]:"fire-auth",[Mw]:"fire-auth-compat",[Lw]:"fire-rtdb",[Fw]:"fire-rtdb-compat",[Vw]:"fire-fn",[Uw]:"fire-fn-compat",[Bw]:"fire-iid",[qw]:"fire-iid-compat",[$w]:"fire-fcm",[zw]:"fire-fcm-compat",[jw]:"fire-perf",[Gw]:"fire-perf-compat",[Ww]:"fire-rc",[Kw]:"fire-rc-compat",[Hw]:"fire-gcs",[Qw]:"fire-gcs-compat",[Yw]:"fire-fst",[Xw]:"fire-fst-compat","fire-js":"fire-js",[Jw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt=new Map,gi=new Map;function Bs(n,e){try{n.container.addComponent(e)}catch(t){kn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ud(n,e){n.container.addOrOverwriteComponent(e)}function jt(n){const e=n.name;if(gi.has(e))return kn.debug(`There were multiple attempts to register component ${e}.`),!1;gi.set(e,n);for(const t of zt.values())Bs(t,n);return!0}function Bd(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function tI(n,e,t=$t){Bd(n,e).clearInstance(t)}function nI(){gi.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},bt=new Un("app","Firebase",rI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ft("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=Zw;function xc(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:$t,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw bt.create("bad-app-name",{appName:String(i)});if(t||(t=Xv()),!t)throw bt.create("no-options");const s=zt.get(i);if(s){if(Va(t,s.options)&&Va(r,s.config))return s;throw bt.create("duplicate-app",{appName:i})}const o=new lw(i);for(const c of gi.values())o.addComponent(c);const a=new iI(t,r,o);return zt.set(i,a),a}function sI(n=$t){const e=zt.get(n);if(!e&&n===$t)return xc();if(!e)throw bt.create("no-app",{appName:n});return e}function oI(){return Array.from(zt.values())}async function qd(n){const e=n.name;zt.has(e)&&(zt.delete(e),await Promise.all(n.container.getProviders().map(t=>t.delete())),n.isDeleted=!0)}function lt(n,e,t){var r;let i=(r=eI[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kn.warn(a.join(" "));return}jt(new ft(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function $d(n,e){if(n!==null&&typeof n!="function")throw bt.create("invalid-log-argument");pw(n,e)}function zd(n){mw(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI="firebase-heartbeat-database",cI=1,yi="firebase-heartbeat-store";let Ia=null;function jd(){return Ia||(Ia=Ew(aI,cI,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(yi)}}}).catch(n=>{throw bt.create("idb-open",{originalErrorMessage:n.message})})),Ia}async function uI(n){try{return(await jd()).transaction(yi).objectStore(yi).get(Gd(n))}catch(e){if(e instanceof Me)kn.warn(e.message);else{const t=bt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});kn.warn(t.message)}}}async function Vl(n,e){try{const r=(await jd()).transaction(yi,"readwrite");return await r.objectStore(yi).put(e,Gd(n)),r.done}catch(t){if(t instanceof Me)kn.warn(t.message);else{const r=bt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});kn.warn(r.message)}}}function Gd(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI=1024,hI=30*24*60*60*1e3;class dI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new mI(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ul();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=hI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ul(),{heartbeatsToSend:t,unsentEntries:r}=fI(this._heartbeatsCache.heartbeats),i=Vs(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ul(){return new Date().toISOString().substring(0,10)}function fI(n,e=lI){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Bl(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Bl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class mI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pi()?Wv().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await uI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Bl(n){return Vs(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pI(n){jt(new ft("platform-logger",e=>new Aw(e),"PRIVATE")),jt(new ft("heartbeat",e=>new dI(e),"PRIVATE")),lt(qa,Fl,n),lt(qa,Fl,"esm2017"),lt("fire-js","")}pI("");var gI=Object.freeze(Object.defineProperty({__proto__:null,SDK_VERSION:Bn,_DEFAULT_ENTRY_NAME:$t,_addComponent:Bs,_addOrOverwriteComponent:Ud,_apps:zt,_clearComponents:nI,_components:gi,_getProvider:Bd,_registerComponent:jt,_removeServiceInstance:tI,deleteApp:qd,getApp:sI,getApps:oI,initializeApp:xc,onLog:$d,registerVersion:lt,setLogLevel:zd,FirebaseError:Me},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(e,t){this._delegate=e,this.firebase=t,Bs(e,new ft("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),qd(this._delegate)))}_getService(e,t=$t){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=$t){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Bs(this._delegate,e)}_addOrOverwriteComponent(e){Ud(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},ql=new Un("app-compat","Firebase",vI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wI(n){const e={},t={__esModule:!0,initializeApp:s,app:i,registerVersion:lt,setLogLevel:zd,onLog:$d,apps:null,SDK_VERSION:Bn,INTERNAL:{registerComponent:a,removeApp:r,useAsService:c,modularAPIs:gI}};t.default=t,Object.defineProperty(t,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||$t,!xl(e,u))throw ql.create("no-app",{appName:u});return e[u]}i.App=n;function s(u,l={}){const h=xc(u,l);if(xl(e,h.name))return e[h.name];const d=new n(h,t);return e[h.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const l=u.name,h=l.replace("-compat","");if(jt(u)&&u.type==="PUBLIC"){const d=(m=i())=>{if(typeof m[h]!="function")throw ql.create("invalid-app-argument",{appName:l});return m[h]()};u.serviceProps!==void 0&&Us(d,u.serviceProps),t[h]=d,n.prototype[h]=function(...m){return this._getService.bind(this,l).apply(this,u.multipleInstances?m:[])}}return u.type==="PUBLIC"?t[h]:null}function c(u,l){return l==="serverAuth"?null:l}return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(){const n=wI(yI);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:Wd,extendNamespace:e,createSubscribe:Md,ErrorFactory:Un,deepExtend:Us});function e(t){Us(n,t)}return n}const II=Wd();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $l=new fo("@firebase/app-compat"),_I="@firebase/app-compat",bI="0.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TI(n){lt(_I,bI,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(jv()&&self.firebase!==void 0){$l.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const n=self.firebase.SDK_VERSION;n&&n.indexOf("LITE")>=0&&$l.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const qn=II;TI();var EI="firebase",SI="9.15.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qn.registerVersion(EI,SI,"app-compat");function Pc(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}const zr={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Qn={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kI(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function Kd(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const AI=kI,CI=Kd,Hd=new Un("auth","Firebase",Kd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl=new fo("@firebase/auth");function Ds(n,...e){zl.logLevel<=V.ERROR&&zl.error(`Auth (${Bn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(n,...e){throw Oc(n,...e)}function Te(n,...e){return Oc(n,...e)}function Qd(n,e,t){const r=Object.assign(Object.assign({},CI()),{[e]:t});return new Un("auth","Firebase",r).create(e,{appName:n.name})}function Sr(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Se(n,"argument-error"),Qd(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Oc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Hd.create(n,...e)}function w(n,e,...t){if(!n)throw Oc(e,...t)}function at(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ds(e),new Error(e)}function et(n,e){n||at(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl=new Map;function je(n){et(n instanceof Function,"Expected a class definition");let e=jl.get(n);return e?(et(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,jl.set(n,e),e)}function DI(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(je);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Mc(){return Gl()==="http:"||Gl()==="https:"}function Gl(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NI(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Mc()||xd()||"connection"in navigator)?navigator.onLine:!0}function RI(){if(typeof navigator=="undefined")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,t){this.shortDelay=e,this.longDelay=t,et(t>e,"Short delay should be less than long delay!"),this.isMobile=zv()||Dc()}get(){return NI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(n,e){et(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;at("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;at("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;at("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI=new qi(3e4,6e4);function de(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function ve(n,e,t,r,i={}){return Xd(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Er(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),Yd.fetch()(Jd(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function Xd(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},xI),e);try{const i=new OI(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ei(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ei(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ei(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw ei(n,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Qd(n,l,u);Se(n,l)}}catch(i){if(i instanceof Me)throw i;Se(n,"network-request-failed")}}async function At(n,e,t,r,i={}){const s=await ve(n,e,t,r,i);return"mfaPendingCredential"in s&&Se(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Jd(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Lc(n.config,i):`${n.config.apiScheme}://${i}`}class OI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Te(this.auth,"network-request-failed")),PI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ei(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Te(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MI(n,e){return ve(n,"POST","/v1/accounts:delete",e)}async function LI(n,e){return ve(n,"POST","/v1/accounts:update",e)}async function FI(n,e){return ve(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(n){if(!!n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function VI(n,e=!1){const t=C(n),r=await t.getIdToken(e),i=mo(r);w(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:si(_a(i.auth_time)),issuedAtTime:si(_a(i.iat)),expirationTime:si(_a(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function _a(n){return Number(n)*1e3}function mo(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Ds("JWT malformed, contained fewer than 3 sections"),null;try{const i=Rd(t);return i?JSON.parse(i):(Ds("Failed to decode base64 JWT payload"),null)}catch(i){return Ds("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function UI(n){const e=mo(n);return w(e,"internal-error"),w(typeof e.exp!="undefined","internal-error"),w(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Et(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Me&&BI(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function BI({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=si(this.lastLoginAt),this.creationTime=si(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wi(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Et(n,FI(t,{idToken:r}));w(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?jI(s.providerUserInfo):[],a=zI(n.providerData,o),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Zd(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(n,h)}async function $I(n){const e=C(n);await wi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zI(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function jI(n){return n.map(e=>{var{providerId:t}=e,r=Pc(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GI(n,e){const t=await Xd(n,{},async()=>{const r=Er({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=Jd(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Yd.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){w(e.idToken,"internal-error"),w(typeof e.idToken!="undefined","internal-error"),w(typeof e.refreshToken!="undefined","internal-error");const t="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):UI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return w(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await GI(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new Ii;return r&&(w(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(w(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(w(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ii,this.toJSON())}_performRefresh(){return at("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(n,e){w(typeof n=="string"||typeof n=="undefined","internal-error",{appName:e})}class _n{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Pc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Zd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Et(this,this.stsTokenManager.getToken(this.auth,e));return w(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return VI(this,e)}reload(){return $I(this)}_assign(e){this!==e&&(w(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new _n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){w(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await wi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Et(this,MI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,c,u,l;const h=(r=t.displayName)!==null&&r!==void 0?r:void 0,d=(i=t.email)!==null&&i!==void 0?i:void 0,m=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=t.photoURL)!==null&&o!==void 0?o:void 0,b=(a=t.tenantId)!==null&&a!==void 0?a:void 0,D=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,B=(u=t.createdAt)!==null&&u!==void 0?u:void 0,q=(l=t.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:M,emailVerified:ie,isAnonymous:H,providerData:j,stsTokenManager:ce}=t;w(M&&ce,e,"internal-error");const tt=Ii.fromJSON(this.name,ce);w(typeof M=="string",e,"internal-error"),xt(h,e.name),xt(d,e.name),w(typeof ie=="boolean",e,"internal-error"),w(typeof H=="boolean",e,"internal-error"),xt(m,e.name),xt(g,e.name),xt(b,e.name),xt(D,e.name),xt(B,e.name),xt(q,e.name);const Ur=new _n({uid:M,auth:e,email:d,emailVerified:ie,displayName:h,isAnonymous:H,photoURL:g,phoneNumber:m,tenantId:b,stsTokenManager:tt,createdAt:B,lastLoginAt:q});return j&&Array.isArray(j)&&(Ur.providerData=j.map(ca=>Object.assign({},ca))),D&&(Ur._redirectEventId=D),Ur}static async _fromIdTokenResponse(e,t,r=!1){const i=new Ii;i.updateFromServerResponse(t);const s=new _n({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await wi(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ef.type="NONE";const cr=ef;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(n,e,t){return`firebase:${n}:${e}:${t}`}class rr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=bn(this.userKey,i.apiKey,s),this.fullPersistenceKey=bn("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_n._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new rr(je(cr),e,r);const i=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||je(cr);const o=bn(r,e.config.apiKey,e.name);let a=null;for(const u of t)try{const l=await u._get(o);if(l){const h=_n._fromJSON(e,l);u!==s&&(a=h),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new rr(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new rr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(rf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(tf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sf(e))return"Blackberry";if(of(e))return"Webos";if(Fc(e))return"Safari";if((e.includes("chrome/")||nf(e))&&!e.includes("edge/"))return"Chrome";if($i(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function tf(n=Z()){return/firefox\//i.test(n)}function Fc(n=Z()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function nf(n=Z()){return/crios\//i.test(n)}function rf(n=Z()){return/iemobile/i.test(n)}function $i(n=Z()){return/android/i.test(n)}function sf(n=Z()){return/blackberry/i.test(n)}function of(n=Z()){return/webos/i.test(n)}function kr(n=Z()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function WI(n=Z()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function KI(n=Z()){var e;return kr(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function HI(){return Pd()&&document.documentMode===10}function af(n=Z()){return kr(n)||$i(n)||of(n)||sf(n)||/windows phone/i.test(n)||rf(n)}function QI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(n,e=[]){let t;switch(n){case"Browser":t=Wl(Z());break;case"Worker":t=`${Wl(Z())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Bn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e,t,r){this.app=e,this.heartbeatServiceProvider=t,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kl(this),this.idTokenSubscription=new Kl(this),this.beforeStateQueue=new YI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Hd,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=je(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await rr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return w(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await wi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=RI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?C(e):null;return t&&w(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&w(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(je(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Un("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&je(e)||this._popupRedirectResolver;w(t,this,"argument-error"),this.redirectPersistenceManager=await rr.create(this,[je(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return w(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,r,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return w(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(t["X-Firebase-Client"]=r),t}}function ge(n){return C(n)}class Kl{constructor(e){this.auth=e,this.observer=null,this.addObserver=Md(t=>this.observer=t)}get next(){return w(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function JI(n,e,t){const r=ge(n);w(r._canInitEmulator,r,"emulator-config-failed"),w(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=uf(e),{host:o,port:a}=ZI(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||e_()}function uf(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function ZI(n){const e=uf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Hl(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Hl(o)}}}function Hl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function e_(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return at("not implemented")}_getIdTokenResponse(e){return at("not implemented")}_linkToIdToken(e,t){return at("not implemented")}_getReauthenticationResolver(e){return at("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lf(n,e){return ve(n,"POST","/v1/accounts:resetPassword",de(n,e))}async function hf(n,e){return ve(n,"POST","/v1/accounts:update",e)}async function t_(n,e){return ve(n,"POST","/v1/accounts:update",de(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n_(n,e){return At(n,"POST","/v1/accounts:signInWithPassword",de(n,e))}async function po(n,e){return ve(n,"POST","/v1/accounts:sendOobCode",de(n,e))}async function r_(n,e){return po(n,e)}async function i_(n,e){return po(n,e)}async function s_(n,e){return po(n,e)}async function o_(n,e){return po(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a_(n,e){return At(n,"POST","/v1/accounts:signInWithEmailLink",de(n,e))}async function c_(n,e){return At(n,"POST","/v1/accounts:signInWithEmailLink",de(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i extends Ar{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new _i(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new _i(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if((t==null?void 0:t.email)&&(t==null?void 0:t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return n_(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return a_(e,{email:this._email,oobCode:this._password});default:Se(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return hf(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return c_(e,{idToken:t,email:this._email,oobCode:this._password});default:Se(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tt(n,e){return At(n,"POST","/v1/accounts:signInWithIdp",de(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_="http://localhost";class mt extends Ar{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new mt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Se("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Pc(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new mt(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Tt(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Tt(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Tt(e,t)}buildRequest(){const e={requestUri:u_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Er(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l_(n,e){return ve(n,"POST","/v1/accounts:sendVerificationCode",de(n,e))}async function h_(n,e){return At(n,"POST","/v1/accounts:signInWithPhoneNumber",de(n,e))}async function d_(n,e){const t=await At(n,"POST","/v1/accounts:signInWithPhoneNumber",de(n,e));if(t.temporaryProof)throw ei(n,"account-exists-with-different-credential",t);return t}const f_={USER_NOT_FOUND:"user-not-found"};async function m_(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return At(n,"POST","/v1/accounts:signInWithPhoneNumber",de(n,t),f_)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends Ar{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Tn({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Tn({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return h_(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return d_(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return m_(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new Tn({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p_(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function g_(n){const e=tr(Zr(n)).link,t=e?tr(Zr(e)).deep_link_id:null,r=tr(Zr(n)).deep_link_id;return(r?tr(Zr(r)).link:null)||r||t||e||n}class go{constructor(e){var t,r,i,s,o,a;const c=tr(Zr(e)),u=(t=c.apiKey)!==null&&t!==void 0?t:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,h=p_((i=c.mode)!==null&&i!==void 0?i:null);w(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=g_(e);try{return new go(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(){this.providerId=Zt.PROVIDER_ID}static credential(e,t){return _i._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=go.parseLink(t);return w(r,"argument-error"),_i._fromEmailAndCode(e,r.code,r.tenantId)}}Zt.PROVIDER_ID="password";Zt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Zt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends Ct{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class ir extends Cr{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return w("providerId"in t&&"signInMethod"in t,"argument-error"),mt._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return w(e.idToken||e.accessToken,"argument-error"),mt._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return ir.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return ir.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!t&&!s||!a)return null;try{return new ir(a)._credential({idToken:t,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt extends Cr{constructor(){super("facebook.com")}static credential(e){return mt._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nt.credentialFromTaggedObject(e)}static credentialFromError(e){return nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nt.credential(e.oauthAccessToken)}catch{return null}}}nt.FACEBOOK_SIGN_IN_METHOD="facebook.com";nt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt extends Cr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return mt._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return rt.credential(t,r)}catch{return null}}}rt.GOOGLE_SIGN_IN_METHOD="google.com";rt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it extends Cr{constructor(){super("github.com")}static credential(e){return mt._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return it.credential(e.oauthAccessToken)}catch{return null}}}it.GITHUB_SIGN_IN_METHOD="github.com";it.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_="http://localhost";class ur extends Ar{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Tt(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Tt(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Tt(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=t;return!r||!i||!s||r!==i?null:new ur(r,s)}static _create(e,t){return new ur(e,t)}buildRequest(){return{requestUri:y_,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_="saml.";class qs extends Ct{constructor(e){w(e.startsWith(v_),"argument-error"),super(e)}static credentialFromResult(e){return qs.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return qs.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=ur.fromJSON(e);return w(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return ur._create(r,t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends Cr{constructor(){super("twitter.com")}static credential(e,t){return mt._fromParams({providerId:st.PROVIDER_ID,signInMethod:st.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return st.credentialFromTaggedObject(e)}static credentialFromError(e){return st.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return st.credential(t,r)}catch{return null}}}st.TWITTER_SIGN_IN_METHOD="twitter.com";st.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function df(n,e){return At(n,"POST","/v1/accounts:signUp",de(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await _n._fromIdTokenResponse(e,r,i),o=Ql(r);return new Xe({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Ql(r);return new Xe({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Ql(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w_(n){var e;const t=ge(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Xe({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await df(t,{returnSecureToken:!0}),i=await Xe._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s extends Me{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,$s.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new $s(e,t,r,i)}}function ff(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?$s._fromErrorAndOperation(n,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mf(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I_(n,e){const t=C(n);await yo(!0,t,e);const{providerUserInfo:r}=await LI(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),i=mf(r||[]);return t.providerData=t.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function Vc(n,e,t=!1){const r=await Et(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Xe._forOperation(n,"link",r)}async function yo(n,e,t){await wi(e);const r=mf(e.providerData),i=n===!1?"provider-already-linked":"no-such-provider";w(r.has(t)===n,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pf(n,e,t=!1){const{auth:r}=n,i="reauthenticate";try{const s=await Et(n,ff(r,i,e,n),t);w(s.idToken,r,"internal-error");const o=mo(s.idToken);w(o,r,"internal-error");const{sub:a}=o;return w(n.uid===a,r,"user-mismatch"),Xe._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Se(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gf(n,e,t=!1){const r="signIn",i=await ff(n,r,e),s=await Xe._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function vo(n,e){return gf(ge(n),e)}async function yf(n,e){const t=C(n);return await yo(!1,t,e.providerId),Vc(t,e)}async function vf(n,e){return pf(C(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function __(n,e){return At(n,"POST","/v1/accounts:signInWithCustomToken",de(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b_(n,e){const t=ge(n),r=await __(t,{token:e,returnSecureToken:!0}),i=await Xe._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Uc._fromServerResponse(e,t):Se(e,"internal-error")}}class Uc extends wo{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Uc(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(n,e,t){var r;w(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),w(typeof t.dynamicLinkDomain=="undefined"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(w(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(w(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T_(n,e,t){const r=C(n),i={requestType:"PASSWORD_RESET",email:e};t&&Io(r,i,t),await i_(r,i)}async function E_(n,e,t){await lf(C(n),{oobCode:e,newPassword:t})}async function S_(n,e){await t_(C(n),{oobCode:e})}async function wf(n,e){const t=C(n),r=await lf(t,{oobCode:e}),i=r.requestType;switch(w(i,t,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":w(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":w(r.mfaInfo,t,"internal-error");default:w(r.email,t,"internal-error")}let s=null;return r.mfaInfo&&(s=wo._fromServerResponse(ge(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function k_(n,e){const{data:t}=await wf(C(n),e);return t.email}async function A_(n,e,t){const r=ge(n),i=await df(r,{returnSecureToken:!0,email:e,password:t}),s=await Xe._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function C_(n,e,t){return vo(C(n),Zt.credential(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D_(n,e,t){const r=C(n),i={requestType:"EMAIL_SIGNIN",email:e};w(t.handleCodeInApp,r,"argument-error"),t&&Io(r,i,t),await s_(r,i)}function N_(n,e){const t=go.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function R_(n,e,t){const r=C(n),i=Zt.credentialWithLink(e,t||vi());return w(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),vo(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x_(n,e){return ve(n,"POST","/v1/accounts:createAuthUri",de(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P_(n,e){const t=Mc()?vi():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:i}=await x_(C(n),r);return i||[]}async function O_(n,e){const t=C(n),r=await n.getIdToken(),i={requestType:"VERIFY_EMAIL",idToken:r};e&&Io(t.auth,i,e);const{email:s}=await r_(t.auth,i);s!==n.email&&await n.reload()}async function M_(n,e,t){const r=C(n),i=await n.getIdToken(),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:i,newEmail:e};t&&Io(r.auth,s,t);const{email:o}=await o_(r.auth,s);o!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L_(n,e){return ve(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F_(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=C(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Et(r,L_(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function V_(n,e){return If(C(n),e,null)}function U_(n,e){return If(C(n),null,e)}async function If(n,e,t){const{auth:r}=n,s={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(s.email=e),t&&(s.password=t);const o=await Et(n,hf(r,s));await n._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B_(n){var e,t;if(!n)return null;const{providerId:r}=n,i=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},s=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(n==null?void 0:n.idToken)){const o=(t=(e=mo(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new sr(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new q_(s,i);case"github.com":return new $_(s,i);case"google.com":return new z_(s,i);case"twitter.com":return new j_(s,i,n.screenName||null);case"custom":case"anonymous":return new sr(s,null);default:return new sr(s,r,i)}}class sr{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class _f extends sr{constructor(e,t,r,i){super(e,t,r),this.username=i}}class q_ extends sr{constructor(e,t){super(e,"facebook.com",t)}}class $_ extends _f{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class z_ extends sr{constructor(e,t){super(e,"google.com",t)}}class j_ extends _f{constructor(e,t,r){super(e,"twitter.com",t,r)}}function G_(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:B_(t)}class gn{constructor(e,t,r){this.type=e,this.credential=t,this.auth=r}static _fromIdtoken(e,t){return new gn("enroll",e,t)}static _fromMfaPendingCredential(e){return new gn("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return gn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return gn._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=ge(e),i=t.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>wo._fromServerResponse(r,a));w(i.mfaPendingCredential,r,"internal-error");const o=gn._fromMfaPendingCredential(i.mfaPendingCredential);return new Bc(o,s,async a=>{const c=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:c.idToken,refreshToken:c.refreshToken});switch(t.operationType){case"signIn":const l=await Xe._fromIdTokenResponse(r,t.operationType,u);return await r._updateCurrentUser(l.user),l;case"reauthenticate":return w(t.user,r,"internal-error"),Xe._forOperation(t.user,t.operationType,u);default:Se(r,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function W_(n,e){var t;const r=C(n),i=e;return w(e.customData.operationType,r,"argument-error"),w((t=i.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,r,"argument-error"),Bc._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K_(n,e){return ve(n,"POST","/v2/accounts/mfaEnrollment:start",de(n,e))}function H_(n,e){return ve(n,"POST","/v2/accounts/mfaEnrollment:finalize",de(n,e))}function Q_(n,e){return ve(n,"POST","/v2/accounts/mfaEnrollment:withdraw",de(n,e))}class qc{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>wo._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new qc(e)}async getSession(){return gn._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){const r=e,i=await this.getSession(),s=await Et(this.user,r._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,r=await this.user.getIdToken(),i=await Et(this.user,Q_(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==t),await this.user._updateTokensIfNecessary(i);try{await this.user.reload()}catch(s){if((s==null?void 0:s.code)!=="auth/user-token-expired")throw s}}}const ba=new WeakMap;function Y_(n){const e=C(n);return ba.has(e)||ba.set(e,qc._fromUser(e)),ba.get(e)}const zs="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(zs,"1"),this.storage.removeItem(zs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X_(){const n=Z();return Fc(n)||kr(n)}const J_=1e3,Z_=10;class Tf extends bf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=X_()&&QI(),this.fallbackToPolling=af(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);HI()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Z_):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},J_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Tf.type="LOCAL";const $c=Tf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef extends bf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ef.type="SESSION";const An=Ef;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eb(n){return Promise.all(n.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new _o(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(t.origin,s)),c=await eb(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_o.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=zi("",20);i.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(l),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(){return window}function nb(n){le().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(){return typeof le().WorkerGlobalScope!="undefined"&&typeof le().importScripts=="function"}async function rb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ib(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function sb(){return zc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sf="firebaseLocalStorageDb",ob=1,js="firebaseLocalStorage",kf="fbase_key";class ji{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function bo(n,e){return n.transaction([js],e?"readwrite":"readonly").objectStore(js)}function ab(){const n=indexedDB.deleteDatabase(Sf);return new ji(n).toPromise()}function $a(){const n=indexedDB.open(Sf,ob);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(js,{keyPath:kf})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(js)?e(r):(r.close(),await ab(),e(await $a()))})})}async function Yl(n,e,t){const r=bo(n,!0).put({[kf]:e,value:t});return new ji(r).toPromise()}async function cb(n,e){const t=bo(n,!1).get(e),r=await new ji(t).toPromise();return r===void 0?null:r.value}function Xl(n,e){const t=bo(n,!0).delete(e);return new ji(t).toPromise()}const ub=800,lb=3;class Af{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $a(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>lb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_o._getInstance(sb()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await rb(),!this.activeServiceWorker)return;this.sender=new tb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((t=r[0])===null||t===void 0?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ib()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $a();return await Yl(e,zs,"1"),await Xl(e,zs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Yl(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>cb(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Xl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=bo(i,!1).getAll();return new ji(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ub)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Af.type="LOCAL";const bi=Af;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hb(n,e){return ve(n,"POST","/v2/accounts/mfaSignIn:start",de(n,e))}function db(n,e){return ve(n,"POST","/v2/accounts/mfaSignIn:finalize",de(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fb(n){return(await ve(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mb(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Cf(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Te("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",mb().appendChild(r)})}function Df(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pb=500,gb=6e4,gs=1e12;class yb{constructor(e){this.auth=e,this.counter=gs,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new vb(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||gs;(t=this._widgets.get(r))===null||t===void 0||t.delete(),this._widgets.delete(r)}getResponse(e){var t;const r=e||gs;return((t=this._widgets.get(r))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const r=e||gs;return(t=this._widgets.get(r))===null||t===void 0||t.execute(),""}}class vb{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;w(i,"argument-error",{appName:t}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=wb(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},gb)},pb))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function wb(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta=Df("rcb"),Ib=new qi(3e4,6e4),_b="https://www.google.com/recaptcha/api.js?";class bb{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=le().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return w(Tb(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(le().grecaptcha):new Promise((r,i)=>{const s=le().setTimeout(()=>{i(Te(e,"network-request-failed"))},Ib.get());le()[Ta]=()=>{le().clearTimeout(s),delete le()[Ta];const a=le().grecaptcha;if(!a){i(Te(e,"internal-error"));return}const c=a.render;a.render=(u,l)=>{const h=c(u,l);return this.counter++,h},this.hostLanguage=t,r(a)};const o=`${_b}?${Er({onload:Ta,render:"explicit",hl:t})}`;Cf(o).catch(()=>{clearTimeout(s),i(Te(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=le().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Tb(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class Eb{async load(e){return new yb(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf="recaptcha",Sb={theme:"light",type:"image"};class kb{constructor(e,t=Object.assign({},Sb),r){this.parameters=t,this.type=Nf,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=ge(r),this.isInvisible=this.parameters.size==="invisible",w(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;w(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Eb:new bb,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(i=>{const s=o=>{!o||(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){w(!this.parameters.sitekey,this.auth,"argument-error"),w(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),w(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=le()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){w(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){w(Mc()&&!zc(),this.auth,"internal-error"),await Ab(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await fb(this.auth);w(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return w(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Ab(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Tn._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Cb(n,e,t){const r=ge(n),i=await To(r,e,C(t));return new jc(i,s=>vo(r,s))}async function Db(n,e,t){const r=C(n);await yo(!1,r,"phone");const i=await To(r.auth,e,C(t));return new jc(i,s=>yf(r,s))}async function Nb(n,e,t){const r=C(n),i=await To(r.auth,e,C(t));return new jc(i,s=>vf(r,s))}async function To(n,e,t){var r;const i=await t.verify();try{w(typeof i=="string",n,"argument-error"),w(t.type===Nf,n,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return w(o.type==="enroll",n,"internal-error"),(await K_(n,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{w(o.type==="signin",n,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return w(a,n,"missing-multi-factor-info"),(await hb(n,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await l_(n,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{t._reset()}}async function Rb(n,e){await Vc(C(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.providerId=Ze.PROVIDER_ID,this.auth=ge(e)}verifyPhoneNumber(e,t){return To(this.auth,e,C(t))}static credential(e,t){return Tn._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Ze.credentialFromTaggedObject(t)}static credentialFromError(e){return Ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?Tn._fromTokenResponse(t,r):null}}Ze.PROVIDER_ID="phone";Ze.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(n,e){return e?je(e):(w(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc extends Ar{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Tt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Tt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Tt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function xb(n){return gf(n.auth,new Gc(n),n.bypassAuthState)}function Pb(n){const{auth:e,user:t}=n;return w(t,e,"internal-error"),pf(t,new Gc(n),n.bypassAuthState)}async function Ob(n){const{auth:e,user:t}=n;return w(t,e,"internal-error"),Vc(t,new Gc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xb;case"linkViaPopup":case"linkViaRedirect":return Ob;case"reauthViaPopup":case"reauthViaRedirect":return Pb;default:Se(this.auth,"internal-error")}}resolve(e){et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mb=new qi(2e3,1e4);async function Lb(n,e,t){const r=ge(n);Sr(n,e,Ct);const i=$n(r,t);return new wt(r,"signInViaPopup",e,i).executeNotNull()}async function Fb(n,e,t){const r=C(n);Sr(r.auth,e,Ct);const i=$n(r.auth,t);return new wt(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function Vb(n,e,t){const r=C(n);Sr(r.auth,e,Ct);const i=$n(r.auth,t);return new wt(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class wt extends Rf{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,wt.currentPopupAction&&wt.currentPopupAction.cancel(),wt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return w(e,this.auth,"internal-error"),e}async onExecution(){et(this.filter.length===1,"Popup operations only handle one event");const e=zi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Te(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Te(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Te(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Mb.get())};e()}}wt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ub="pendingRedirect",oi=new Map;class Bb extends Rf{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=oi.get(this.auth._key());if(!e){try{const r=await qb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}oi.set(this.auth._key(),e)}return this.bypassAuthState||oi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qb(n,e){const t=Pf(e),r=xf(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}async function Wc(n,e){return xf(n)._set(Pf(e),"true")}function $b(){oi.clear()}function Kc(n,e){oi.set(n._key(),e)}function xf(n){return je(n._redirectPersistence)}function Pf(n){return bn(Ub,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zb(n,e,t){return jb(n,e,t)}async function jb(n,e,t){const r=ge(n);Sr(n,e,Ct);const i=$n(r,t);return await Wc(i,r),i._openRedirect(r,e,"signInViaRedirect")}function Gb(n,e,t){return Wb(n,e,t)}async function Wb(n,e,t){const r=C(n);Sr(r.auth,e,Ct);const i=$n(r.auth,t);await Wc(i,r.auth);const s=await Of(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function Kb(n,e,t){return Hb(n,e,t)}async function Hb(n,e,t){const r=C(n);Sr(r.auth,e,Ct);const i=$n(r.auth,t);await yo(!1,r,e.providerId),await Wc(i,r.auth);const s=await Of(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function Qb(n,e){return await ge(n)._initializationPromise,Eo(n,e,!1)}async function Eo(n,e,t=!1){const r=ge(n),i=$n(r,e),o=await new Bb(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function Of(n){const e=zi(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yb=10*60*1e3;class Mf{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Xb(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Lf(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Te(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Yb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jl(e))}saveEventToCache(e){this.cachedEventUids.add(Jl(e)),this.lastProcessedEventTime=Date.now()}}function Jl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Lf({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Xb(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Lf(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ff(n,e={}){return ve(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Zb=/^https?/;async function eT(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Ff(n);for(const t of e)try{if(tT(t))return}catch{}Se(n,"unauthorized-domain")}function tT(n){const e=vi(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!Zb.test(t))return!1;if(Jb.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nT=new qi(3e4,6e4);function Zl(){const n=le().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function rT(n){return new Promise((e,t)=>{var r,i,s;function o(){Zl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zl(),t(Te(n,"network-request-failed"))},timeout:nT.get()})}if(!((i=(r=le().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=le().gapi)===null||s===void 0)&&s.load)o();else{const a=Df("iframefcb");return le()[a]=()=>{gapi.load?o():t(Te(n,"network-request-failed"))},Cf(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw Ns=null,e})}let Ns=null;function iT(n){return Ns=Ns||rT(n),Ns}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sT=new qi(5e3,15e3),oT="__/auth/iframe",aT="emulator/auth/iframe",cT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lT(n){const e=n.config;w(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Lc(e,aT):`https://${n.config.authDomain}/${oT}`,r={apiKey:e.apiKey,appName:n.name,v:Bn},i=uT.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Er(r).slice(1)}`}async function hT(n){const e=await iT(n),t=le().gapi;return w(t,n,"internal-error"),e.open({where:document.body,url:lT(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cT,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Te(n,"network-request-failed"),a=le().setTimeout(()=>{s(o)},sT.get());function c(){le().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fT=500,mT=600,pT="_blank",gT="http://localhost";class eh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yT(n,e,t,r=fT,i=mT){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},dT),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Z().toLowerCase();t&&(a=nf(u)?pT:t),tf(u)&&(e=e||gT,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[m,g])=>`${d}${m}=${g},`,"");if(KI(u)&&a!=="_self")return vT(e||"",a),new eh(null);const h=window.open(e||"",a,l);w(h,n,"popup-blocked");try{h.focus()}catch{}return new eh(h)}function vT(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wT="__/auth/handler",IT="emulator/auth/handler";function za(n,e,t,r,i,s){w(n.config.authDomain,n,"auth-domain-config-required"),w(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Bn,eventId:i};if(e instanceof Ct){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",iw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(s||{}))o[c]=u}if(e instanceof Cr){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${_T(n)}?${Er(a).slice(1)}`}function _T({config:n}){return n.emulator?Lc(n,IT):`https://${n.authDomain}/${wT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea="webStorageSupport";class bT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=An,this._completeRedirectFn=Eo,this._overrideRedirectResult=Kc}async _openPopup(e,t,r,i){var s;et((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=za(e,t,r,vi(),i);return yT(e,o,zi())}async _openRedirect(e,t,r,i){return await this._originValidation(e),nb(za(e,t,r,vi(),i)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(et(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await hT(e),r=new Mf(e);return t.register("authEvent",i=>(w(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ea,{type:Ea},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ea];o!==void 0&&t(!!o),Se(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=eT(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return af()||Fc()||kr()}}const TT=bT;class ET{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return at("unexpected MultiFactorSessionType")}}}class Hc extends ET{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Hc(e)}_finalizeEnroll(e,t,r){return H_(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return db(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Vf{constructor(){}static assertion(e){return Hc._fromCredential(e)}}Vf.FACTOR_ID="phone";var th="@firebase/auth",nh="0.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);!t||(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){w(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kT(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function AT(n){jt(new ft("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,c)=>{w(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),w(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cf(n)},l=new XI(a,c,u);return DI(l,t),l})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),jt(new ft("auth-internal",e=>{const t=ge(e.getProvider("auth").getImmediate());return(r=>new ST(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),lt(th,nh,kT(n)),lt(th,nh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT=5*60;Jv("authIdTokenMaxAge");AT("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT=2e3;async function NT(n,e,t){var r;const{BuildInfo:i}=Cn();et(e.sessionId,"AuthEvent did not contain a session ID");const s=await MT(e.sessionId),o={};return kr()?o.ibi=i.packageName:$i()?o.apn=i.packageName:Se(n,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,za(n,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function RT(n){const{BuildInfo:e}=Cn(),t={};kr()?t.iosBundleId=e.packageName:$i()?t.androidPackageName=e.packageName:Se(n,"operation-not-supported-in-this-environment"),await Ff(n,t)}function xT(n){const{cordova:e}=Cn();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(n):i=e.InAppBrowser.open(n,WI()?"_blank":"_system","location=yes"),t(i)})})}async function PT(n,e,t){const{cordova:r}=Cn();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function c(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function u(){a||(a=window.setTimeout(()=>{o(Te(n,"redirect-cancelled-by-user"))},DT))}function l(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(c),document.addEventListener("resume",u,!1),$i()&&document.addEventListener("visibilitychange",l,!1),i=()=>{e.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}})}finally{i()}}function OT(n){var e,t,r,i,s,o,a,c,u,l;const h=Cn();w(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),w(typeof((t=h==null?void 0:h.BuildInfo)===null||t===void 0?void 0:t.packageName)!="undefined",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),w(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),w(typeof((c=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),w(typeof((l=(u=h==null?void 0:h.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||l===void 0?void 0:l.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function MT(n){const e=LT(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(i=>i.toString(16).padStart(2,"0")).join("")}function LT(n){if(et(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder!="undefined")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT=20;class VT extends Mf{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function UT(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:$T(),postBody:null,tenantId:n.tenantId,error:Te(n,"no-auth-event")}}function BT(n,e){return ja()._set(Ga(n),e)}async function rh(n){const e=await ja()._get(Ga(n));return e&&await ja()._remove(Ga(n)),e}function qT(n,e){var t,r;const i=jT(e);if(i.includes("/__/auth/callback")){const s=Rs(i),o=s.firebaseError?zT(decodeURIComponent(s.firebaseError)):null,a=(r=(t=o==null?void 0:o.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],c=a?Te(a):null;return c?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:i,postBody:null}}return null}function $T(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<FT;t++){const r=Math.floor(Math.random()*e.length);n.push(e.charAt(r))}return n.join("")}function ja(){return je($c)}function Ga(n){return bn("authEvent",n.config.apiKey,n.name)}function zT(n){try{return JSON.parse(n)}catch{return null}}function jT(n){const e=Rs(n),t=e.link?decodeURIComponent(e.link):void 0,r=Rs(t).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Rs(i).link||i||r||t||n}function Rs(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return tr(t.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT=500;class WT{constructor(){this._redirectPersistence=An,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Eo,this._overrideRedirectResult=Kc}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new VT(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Se(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,i){OT(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),$b(),await this._originValidation(e);const o=UT(e,r,i);await BT(e,o);const a=await NT(e,o,t),c=await xT(a);return PT(e,s,c)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=RT(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Cn(),o=setTimeout(async()=>{await rh(e),t.onEvent(ih())},GT),a=async l=>{clearTimeout(o);const h=await rh(e);let d=null;h&&(l==null?void 0:l.url)&&(d=qT(h,l.url)),t.onEvent(d||ih())};typeof r!="undefined"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const c=i,u=`${s.packageName.toLowerCase()}://`;Cn().handleOpenURL=async l=>{if(l.toLowerCase().startsWith(u)&&a({url:l}),typeof c=="function")try{c(l)}catch(h){console.error(h)}}}}const KT=WT;function ih(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Te("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HT(n,e){ge(n)._logFramework(e)}var QT="@firebase/auth-compat",YT="0.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XT=1e3;function ai(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function JT(){return ai()==="http:"||ai()==="https:"}function Uf(n=Z()){return!!((ai()==="file:"||ai()==="ionic:"||ai()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function ZT(){return Dc()||Cc()}function eE(){return Pd()&&(document==null?void 0:document.documentMode)===11}function tE(n=Z()){return/Edge\/\d+/.test(n)}function nE(n=Z()){return eE()||tE(n)}function Bf(){try{const n=self.localStorage,e=zi();if(n)return n.setItem(e,"1"),n.removeItem(e),nE()?pi():!0}catch{return Qc()&&pi()}return!1}function Qc(){return typeof global!="undefined"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Sa(){return(JT()||xd()||Uf())&&!ZT()&&Bf()&&!Qc()}function qf(){return Uf()&&typeof document!="undefined"}async function rE(){return qf()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},XT);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function iE(){return typeof window!="undefined"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze={LOCAL:"local",NONE:"none",SESSION:"session"},jr=w,$f="persistence";function sE(n,e){if(jr(Object.values(ze).includes(e),n,"invalid-persistence-type"),Dc()){jr(e!==ze.SESSION,n,"unsupported-persistence-type");return}if(Cc()){jr(e===ze.NONE,n,"unsupported-persistence-type");return}if(Qc()){jr(e===ze.NONE||e===ze.LOCAL&&pi(),n,"unsupported-persistence-type");return}jr(e===ze.NONE||Bf(),n,"unsupported-persistence-type")}async function Wa(n){await n._initializationPromise;const e=zf(),t=bn($f,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistence())}function oE(n,e){const t=zf();if(!t)return[];const r=bn($f,n,e);switch(t.getItem(r)){case ze.NONE:return[cr];case ze.LOCAL:return[bi,An];case ze.SESSION:return[An];default:return[]}}function zf(){var n;try{return((n=iE())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE=w;class Vt{constructor(){this.browserResolver=je(TT),this.cordovaResolver=je(KT),this.underlyingResolver=null,this._redirectPersistence=An,this._completeRedirectFn=Eo,this._overrideRedirectResult=Kc}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,r,i)}async _openRedirect(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,r,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return qf()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return aE(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await rE();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jf(n){return n.unwrap()}function cE(n){return n.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uE(n){return Gf(n)}function lE(n,e){var t;const r=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new hE(n,W_(n,e))}else if(r){const i=Gf(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function Gf(n){const{_tokenResponse:e}=n instanceof Me?n.customData:n;if(!e)return null;if(!(n instanceof Me)&&"temporaryProof"in e&&"phoneNumber"in e)return Ze.credentialFromResult(n);const t=e.providerId;if(!t||t===zr.PASSWORD)return null;let r;switch(t){case zr.GOOGLE:r=rt;break;case zr.FACEBOOK:r=nt;break;case zr.GITHUB:r=it;break;case zr.TWITTER:r=st;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return!s&&!o&&!i&&!a?null:a?t.startsWith("saml.")?ur._create(t,a):mt._fromParams({providerId:t,signInMethod:t,pendingToken:a,idToken:i,accessToken:s}):new ir(t).credential({idToken:i,accessToken:s,rawNonce:c})}return n instanceof Me?r.credentialFromError(n):r.credentialFromResult(n)}function Ve(n,e){return e.catch(t=>{throw t instanceof Me&&lE(n,t),t}).then(t=>{const r=t.operationType,i=t.user;return{operationType:r,credential:uE(t),additionalUserInfo:G_(t),user:It.getOrCreate(i)}})}async function Ka(n,e){const t=await e;return{verificationId:t.verificationId,confirm:r=>Ve(n,t.confirm(r))}}class hE{constructor(e,t){this.resolver=t,this.auth=cE(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Ve(jf(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this._delegate=e,this.multiFactor=Y_(e)}static getOrCreate(e){return It.USER_MAP.has(e)||It.USER_MAP.set(e,new It(e)),It.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Ve(this.auth,yf(this._delegate,e))}async linkWithPhoneNumber(e,t){return Ka(this.auth,Db(this._delegate,e,t))}async linkWithPopup(e){return Ve(this.auth,Vb(this._delegate,e,Vt))}async linkWithRedirect(e){return await Wa(ge(this.auth)),Kb(this._delegate,e,Vt)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Ve(this.auth,vf(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return Ka(this.auth,Nb(this._delegate,e,t))}reauthenticateWithPopup(e){return Ve(this.auth,Fb(this._delegate,e,Vt))}async reauthenticateWithRedirect(e){return await Wa(ge(this.auth)),Gb(this._delegate,e,Vt)}sendEmailVerification(e){return O_(this._delegate,e)}async unlink(e){return await I_(this._delegate,e),this}updateEmail(e){return V_(this._delegate,e)}updatePassword(e){return U_(this._delegate,e)}updatePhoneNumber(e){return Rb(this._delegate,e)}updateProfile(e){return F_(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return M_(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}It.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr=w;class Ha{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Gr(r,"invalid-api-key",{appName:e.name}),Gr(r,"invalid-api-key",{appName:e.name});const i=typeof window!="undefined"?Vt:void 0;this._delegate=t.initialize({options:{persistence:dE(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(AI),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?It.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){JI(this._delegate,e,t)}applyActionCode(e){return S_(this._delegate,e)}checkActionCode(e){return wf(this._delegate,e)}confirmPasswordReset(e,t){return E_(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return Ve(this._delegate,A_(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return P_(this._delegate,e)}isSignInWithEmailLink(e){return N_(this._delegate,e)}async getRedirectResult(){Gr(Sa(),this._delegate,"operation-not-supported-in-this-environment");const e=await Qb(this._delegate,Vt);return e?Ve(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){HT(this._delegate,e)}onAuthStateChanged(e,t,r){const{next:i,error:s,complete:o}=sh(e,t,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,t,r){const{next:i,error:s,complete:o}=sh(e,t,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,t){return D_(this._delegate,e,t)}sendPasswordResetEmail(e,t){return T_(this._delegate,e,t||void 0)}async setPersistence(e){sE(this._delegate,e);let t;switch(e){case ze.SESSION:t=An;break;case ze.LOCAL:t=await je(bi)._isAvailable()?bi:$c;break;case ze.NONE:t=cr;break;default:return Se("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Ve(this._delegate,w_(this._delegate))}signInWithCredential(e){return Ve(this._delegate,vo(this._delegate,e))}signInWithCustomToken(e){return Ve(this._delegate,b_(this._delegate,e))}signInWithEmailAndPassword(e,t){return Ve(this._delegate,C_(this._delegate,e,t))}signInWithEmailLink(e,t){return Ve(this._delegate,R_(this._delegate,e,t))}signInWithPhoneNumber(e,t){return Ka(this._delegate,Cb(this._delegate,e,t))}async signInWithPopup(e){return Gr(Sa(),this._delegate,"operation-not-supported-in-this-environment"),Ve(this._delegate,Lb(this._delegate,e,Vt))}async signInWithRedirect(e){return Gr(Sa(),this._delegate,"operation-not-supported-in-this-environment"),await Wa(this._delegate),zb(this._delegate,e,Vt)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return k_(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Ha.Persistence=ze;function sh(n,e,t){let r=n;typeof n!="function"&&({next:r,error:e,complete:t}=n);const i=r;return{next:o=>i(o&&It.getOrCreate(o)),error:e,complete:t}}function dE(n,e){const t=oE(n,e);if(typeof self!="undefined"&&!t.includes(bi)&&t.push(bi),typeof window!="undefined")for(const r of[$c,An])t.includes(r)||t.push(r);return t.includes(cr)||t.push(cr),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(){this.providerId="phone",this._delegate=new Ze(jf(qn.auth()))}static credential(e,t){return Ze.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}Yc.PHONE_SIGN_IN_METHOD=Ze.PHONE_SIGN_IN_METHOD;Yc.PROVIDER_ID=Ze.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE=w;class mE{constructor(e,t,r=qn.app()){var i;fE((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new kb(e,t,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pE="auth-compat";function gE(n){n.INTERNAL.registerComponent(new ft(pE,e=>{const t=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Ha(t,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Qn.EMAIL_SIGNIN,PASSWORD_RESET:Qn.PASSWORD_RESET,RECOVER_EMAIL:Qn.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Qn.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Qn.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Qn.VERIFY_EMAIL}},EmailAuthProvider:Zt,FacebookAuthProvider:nt,GithubAuthProvider:it,GoogleAuthProvider:rt,OAuthProvider:ir,SAMLAuthProvider:qs,PhoneAuthProvider:Yc,PhoneMultiFactorGenerator:Vf,RecaptchaVerifier:mE,TwitterAuthProvider:st,Auth:Ha,AuthCredential:Ar,Error:Me}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(QT,YT)}gE(qn);var yE=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},E,Xc=Xc||{},N=yE||self;function Gs(){}function So(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function Gi(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function vE(n){return Object.prototype.hasOwnProperty.call(n,ka)&&n[ka]||(n[ka]=++wE)}var ka="closure_uid_"+(1e9*Math.random()>>>0),wE=0;function IE(n,e,t){return n.call.apply(n.bind,arguments)}function _E(n,e,t){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(e,i)}}return function(){return n.apply(e,arguments)}}function Ne(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ne=IE:Ne=_E,Ne.apply(null,arguments)}function ys(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var r=t.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function Ae(n,e){function t(){}t.prototype=e.prototype,n.X=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function en(){this.s=this.s,this.o=this.o}var bE=0;en.prototype.s=!1;en.prototype.na=function(){!this.s&&(this.s=!0,this.M(),bE!=0)&&vE(this)};en.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Wf=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function Jc(n){const e=n.length;if(0<e){const t=Array(e);for(let r=0;r<e;r++)t[r]=n[r];return t}return[]}function oh(n,e){for(let t=1;t<arguments.length;t++){const r=arguments[t];if(So(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function Re(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}Re.prototype.h=function(){this.defaultPrevented=!0};var TE=function(){if(!N.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{N.addEventListener("test",Gs,e),N.removeEventListener("test",Gs,e)}catch{}return n}();function Ws(n){return/^[\s\xa0]*$/.test(n)}var ah=String.prototype.trim?function(n){return n.trim()}:function(n){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(n)[1]};function Aa(n,e){return n<e?-1:n>e?1:0}function ko(){var n=N.navigator;return n&&(n=n.userAgent)?n:""}function ot(n){return ko().indexOf(n)!=-1}function Zc(n){return Zc[" "](n),n}Zc[" "]=Gs;function EE(n){var e=AE;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=n(9)}var SE=ot("Opera"),lr=ot("Trident")||ot("MSIE"),Kf=ot("Edge"),Qa=Kf||lr,Hf=ot("Gecko")&&!(ko().toLowerCase().indexOf("webkit")!=-1&&!ot("Edge"))&&!(ot("Trident")||ot("MSIE"))&&!ot("Edge"),kE=ko().toLowerCase().indexOf("webkit")!=-1&&!ot("Edge");function Qf(){var n=N.document;return n?n.documentMode:void 0}var Ks;e:{var Ca="",Da=function(){var n=ko();if(Hf)return/rv:([^\);]+)(\)|;)/.exec(n);if(Kf)return/Edge\/([\d\.]+)/.exec(n);if(lr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(kE)return/WebKit\/(\S+)/.exec(n);if(SE)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Da&&(Ca=Da?Da[1]:""),lr){var Na=Qf();if(Na!=null&&Na>parseFloat(Ca)){Ks=String(Na);break e}}Ks=Ca}var AE={};function CE(){return EE(function(){let n=0;const e=ah(String(Ks)).split("."),t=ah("9").split("."),r=Math.max(e.length,t.length);for(let o=0;n==0&&o<r;o++){var i=e[o]||"",s=t[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;n=Aa(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Aa(i[2].length==0,s[2].length==0)||Aa(i[2],s[2]),i=i[3],s=s[3]}while(n==0)}return 0<=n})}var Ya;if(N.document&&lr){var ch=Qf();Ya=ch||parseInt(Ks,10)||void 0}else Ya=void 0;var DE=Ya;function Ti(n,e){if(Re.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(Hf){e:{try{Zc(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:NE[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Ti.X.h.call(this)}}Ae(Ti,Re);var NE={2:"touch",3:"pen",4:"mouse"};Ti.prototype.h=function(){Ti.X.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Wi="closure_listenable_"+(1e6*Math.random()|0),RE=0;function xE(n,e,t,r,i){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!r,this.ha=i,this.key=++RE,this.ba=this.ea=!1}function Ao(n){n.ba=!0,n.listener=null,n.proxy=null,n.src=null,n.ha=null}function eu(n,e,t){for(const r in n)e.call(t,n[r],r,n)}function Yf(n){const e={};for(const t in n)e[t]=n[t];return e}const uh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Xf(n,e){let t,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(t in r)n[t]=r[t];for(let s=0;s<uh.length;s++)t=uh[s],Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}}function Co(n){this.src=n,this.g={},this.h=0}Co.prototype.add=function(n,e,t,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=Ja(n,e,r,i);return-1<o?(e=n[o],t||(e.ea=!1)):(e=new xE(e,this.src,s,!!r,i),e.ea=t,n.push(e)),e};function Xa(n,e){var t=e.type;if(t in n.g){var r=n.g[t],i=Wf(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Ao(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function Ja(n,e,t,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.ba&&s.listener==e&&s.capture==!!t&&s.ha==r)return i}return-1}var tu="closure_lm_"+(1e6*Math.random()|0),Ra={};function Jf(n,e,t,r,i){if(r&&r.once)return em(n,e,t,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Jf(n,e[s],t,r,i);return null}return t=iu(t),n&&n[Wi]?n.N(e,t,Gi(r)?!!r.capture:!!r,i):Zf(n,e,t,!1,r,i)}function Zf(n,e,t,r,i,s){if(!e)throw Error("Invalid event type");var o=Gi(i)?!!i.capture:!!i,a=ru(n);if(a||(n[tu]=a=new Co(n)),t=a.add(e,t,r,o,s),t.proxy)return t;if(r=PE(),t.proxy=r,r.src=n,r.listener=t,n.addEventListener)TE||(i=o),i===void 0&&(i=!1),n.addEventListener(e.toString(),r,i);else if(n.attachEvent)n.attachEvent(nm(e.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return t}function PE(){function n(t){return e.call(n.src,n.listener,t)}const e=OE;return n}function em(n,e,t,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)em(n,e[s],t,r,i);return null}return t=iu(t),n&&n[Wi]?n.O(e,t,Gi(r)?!!r.capture:!!r,i):Zf(n,e,t,!0,r,i)}function tm(n,e,t,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)tm(n,e[s],t,r,i);else r=Gi(r)?!!r.capture:!!r,t=iu(t),n&&n[Wi]?(n=n.i,e=String(e).toString(),e in n.g&&(s=n.g[e],t=Ja(s,t,r,i),-1<t&&(Ao(s[t]),Array.prototype.splice.call(s,t,1),s.length==0&&(delete n.g[e],n.h--)))):n&&(n=ru(n))&&(e=n.g[e.toString()],n=-1,e&&(n=Ja(e,t,r,i)),(t=-1<n?e[n]:null)&&nu(t))}function nu(n){if(typeof n!="number"&&n&&!n.ba){var e=n.src;if(e&&e[Wi])Xa(e.i,n);else{var t=n.type,r=n.proxy;e.removeEventListener?e.removeEventListener(t,r,n.capture):e.detachEvent?e.detachEvent(nm(t),r):e.addListener&&e.removeListener&&e.removeListener(r),(t=ru(e))?(Xa(t,n),t.h==0&&(t.src=null,e[tu]=null)):Ao(n)}}}function nm(n){return n in Ra?Ra[n]:Ra[n]="on"+n}function OE(n,e){if(n.ba)n=!0;else{e=new Ti(e,this);var t=n.listener,r=n.ha||n.src;n.ea&&nu(n),n=t.call(r,e)}return n}function ru(n){return n=n[tu],n instanceof Co?n:null}var xa="__closure_events_fn_"+(1e9*Math.random()>>>0);function iu(n){return typeof n=="function"?n:(n[xa]||(n[xa]=function(e){return n.handleEvent(e)}),n[xa])}function ye(){en.call(this),this.i=new Co(this),this.P=this,this.I=null}Ae(ye,en);ye.prototype[Wi]=!0;ye.prototype.removeEventListener=function(n,e,t,r){tm(this,n,e,t,r)};function Ee(n,e){var t,r=n.I;if(r)for(t=[];r;r=r.I)t.push(r);if(n=n.P,r=e.type||e,typeof e=="string")e=new Re(e,n);else if(e instanceof Re)e.target=e.target||n;else{var i=e;e=new Re(r,n),Xf(e,i)}if(i=!0,t)for(var s=t.length-1;0<=s;s--){var o=e.g=t[s];i=vs(o,r,!0,e)&&i}if(o=e.g=n,i=vs(o,r,!0,e)&&i,i=vs(o,r,!1,e)&&i,t)for(s=0;s<t.length;s++)o=e.g=t[s],i=vs(o,r,!1,e)&&i}ye.prototype.M=function(){if(ye.X.M.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],r=0;r<t.length;r++)Ao(t[r]);delete n.g[e],n.h--}}this.I=null};ye.prototype.N=function(n,e,t,r){return this.i.add(String(n),e,!1,t,r)};ye.prototype.O=function(n,e,t,r){return this.i.add(String(n),e,!0,t,r)};function vs(n,e,t,r){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==t){var a=o.listener,c=o.ha||o.src;o.ea&&Xa(n.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var su=N.JSON.stringify;function ME(){var n=sm;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class LE{constructor(){this.h=this.g=null}add(e,t){const r=rm.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}}var rm=new class{constructor(n,e){this.i=n,this.j=e,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}(()=>new FE,n=>n.reset());class FE{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function VE(n){N.setTimeout(()=>{throw n},0)}function im(n,e){Za||UE(),ec||(Za(),ec=!0),sm.add(n,e)}var Za;function UE(){var n=N.Promise.resolve(void 0);Za=function(){n.then(BE)}}var ec=!1,sm=new LE;function BE(){for(var n;n=ME();){try{n.h.call(n.g)}catch(t){VE(t)}var e=rm;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}ec=!1}function Do(n,e){ye.call(this),this.h=n||1,this.g=e||N,this.j=Ne(this.lb,this),this.l=Date.now()}Ae(Do,ye);E=Do.prototype;E.ca=!1;E.R=null;E.lb=function(){if(this.ca){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-n):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ee(this,"tick"),this.ca&&(ou(this),this.start()))}};E.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ou(n){n.ca=!1,n.R&&(n.g.clearTimeout(n.R),n.R=null)}E.M=function(){Do.X.M.call(this),ou(this),delete this.g};function au(n,e,t){if(typeof n=="function")t&&(n=Ne(n,t));else if(n&&typeof n.handleEvent=="function")n=Ne(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:N.setTimeout(n,e||0)}function om(n){n.g=au(()=>{n.g=null,n.i&&(n.i=!1,om(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class qE extends en{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:om(this)}M(){super.M(),this.g&&(N.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ei(n){en.call(this),this.h=n,this.g={}}Ae(Ei,en);var lh=[];function am(n,e,t,r){Array.isArray(t)||(t&&(lh[0]=t.toString()),t=lh);for(var i=0;i<t.length;i++){var s=Jf(e,t[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function cm(n){eu(n.g,function(e,t){this.g.hasOwnProperty(t)&&nu(e)},n),n.g={}}Ei.prototype.M=function(){Ei.X.M.call(this),cm(this)};Ei.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function No(){this.g=!0}No.prototype.Aa=function(){this.g=!1};function $E(n,e,t,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+t+`
`+o})}function zE(n,e,t,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+t+`
`+s+" "+o})}function nr(n,e,t,r){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+GE(n,t)+(r?" "+r:"")})}function jE(n,e){n.info(function(){return"TIMEOUT: "+e})}No.prototype.info=function(){};function GE(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var r=t[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return su(t)}catch{return e}}var zn={},hh=null;function Ro(){return hh=hh||new ye}zn.Pa="serverreachability";function um(n){Re.call(this,zn.Pa,n)}Ae(um,Re);function Si(n){const e=Ro();Ee(e,new um(e))}zn.STAT_EVENT="statevent";function lm(n,e){Re.call(this,zn.STAT_EVENT,n),this.stat=e}Ae(lm,Re);function Oe(n){const e=Ro();Ee(e,new lm(e,n))}zn.Qa="timingevent";function hm(n,e){Re.call(this,zn.Qa,n),this.size=e}Ae(hm,Re);function Ki(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return N.setTimeout(function(){n()},e)}var xo={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},dm={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function cu(){}cu.prototype.h=null;function dh(n){return n.h||(n.h=n.i())}function fm(){}var Hi={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function uu(){Re.call(this,"d")}Ae(uu,Re);function lu(){Re.call(this,"c")}Ae(lu,Re);var tc;function Po(){}Ae(Po,cu);Po.prototype.g=function(){return new XMLHttpRequest};Po.prototype.i=function(){return{}};tc=new Po;function Qi(n,e,t,r){this.l=n,this.j=e,this.m=t,this.U=r||1,this.S=new Ei(this),this.O=WE,n=Qa?125:void 0,this.T=new Do(n),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new mm}function mm(){this.i=null,this.g="",this.h=!1}var WE=45e3,nc={},Hs={};E=Qi.prototype;E.setTimeout=function(n){this.O=n};function rc(n,e,t){n.K=1,n.v=Mo(St(e)),n.s=t,n.P=!0,pm(n,null)}function pm(n,e){n.F=Date.now(),Yi(n),n.A=St(n.v);var t=n.A,r=n.U;Array.isArray(r)||(r=[String(r)]),Tm(t.i,"t",r),n.C=0,t=n.l.H,n.h=new mm,n.g=jm(n.l,t?e:null,!n.s),0<n.N&&(n.L=new qE(Ne(n.La,n,n.g),n.N)),am(n.S,n.g,"readystatechange",n.ib),e=n.H?Yf(n.H):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.da(n.A,n.u,n.s,e)):(n.u="GET",n.g.da(n.A,n.u,null,e)),Si(),$E(n.j,n.u,n.A,n.m,n.U,n.s)}E.ib=function(n){n=n.target;const e=this.L;e&&_t(n)==3?e.l():this.La(n)};E.La=function(n){try{if(n==this.g)e:{const l=_t(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||Qa||this.g&&(this.h.h||this.g.fa()||gh(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?Si(3):Si(2)),Oo(this);var t=this.g.aa();this.Y=t;t:if(gm(this)){var r=gh(this.g);n="";var i=r.length,s=_t(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){yn(this),ci(this);var o="";break t}this.h.i=new N.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,n+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=t==200,zE(this.j,this.u,this.A,this.m,this.U,l,t),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ws(a)){var u=a;break t}}u=null}if(t=u)nr(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ic(this,t);else{this.i=!1,this.o=3,Oe(12),yn(this),ci(this);break e}}this.P?(ym(this,l,o),Qa&&this.i&&l==3&&(am(this.S,this.T,"tick",this.hb),this.T.start())):(nr(this.j,this.m,o,null),ic(this,o)),l==4&&yn(this),this.i&&!this.I&&(l==4?Bm(this.l,this):(this.i=!1,Yi(this)))}else t==400&&0<o.indexOf("Unknown SID")?(this.o=3,Oe(12)):(this.o=0,Oe(13)),yn(this),ci(this)}}}catch{}finally{}};function gm(n){return n.g?n.u=="GET"&&n.K!=2&&n.l.Da:!1}function ym(n,e,t){let r=!0,i;for(;!n.I&&n.C<t.length;)if(i=KE(n,t),i==Hs){e==4&&(n.o=4,Oe(14),r=!1),nr(n.j,n.m,null,"[Incomplete Response]");break}else if(i==nc){n.o=4,Oe(15),nr(n.j,n.m,t,"[Invalid Chunk]"),r=!1;break}else nr(n.j,n.m,i,null),ic(n,i);gm(n)&&i!=Hs&&i!=nc&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,Oe(16),r=!1),n.i=n.i&&r,r?0<t.length&&!n.$&&(n.$=!0,e=n.l,e.g==n&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+t.length),yu(e),e.K=!0,Oe(11))):(nr(n.j,n.m,t,"[Invalid Chunked Response]"),yn(n),ci(n))}E.hb=function(){if(this.g){var n=_t(this.g),e=this.g.fa();this.C<e.length&&(Oo(this),ym(this,n,e),this.i&&n!=4&&Yi(this))}};function KE(n,e){var t=n.C,r=e.indexOf(`
`,t);return r==-1?Hs:(t=Number(e.substring(t,r)),isNaN(t)?nc:(r+=1,r+t>e.length?Hs:(e=e.substr(r,t),n.C=r+t,e)))}E.cancel=function(){this.I=!0,yn(this)};function Yi(n){n.V=Date.now()+n.O,vm(n,n.O)}function vm(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Ki(Ne(n.gb,n),e)}function Oo(n){n.B&&(N.clearTimeout(n.B),n.B=null)}E.gb=function(){this.B=null;const n=Date.now();0<=n-this.V?(jE(this.j,this.A),this.K!=2&&(Si(),Oe(17)),yn(this),this.o=2,ci(this)):vm(this,this.V-n)};function ci(n){n.l.G==0||n.I||Bm(n.l,n)}function yn(n){Oo(n);var e=n.L;e&&typeof e.na=="function"&&e.na(),n.L=null,ou(n.T),cm(n.S),n.g&&(e=n.g,n.g=null,e.abort(),e.na())}function ic(n,e){try{var t=n.l;if(t.G!=0&&(t.g==n||sc(t.h,n))){if(!n.J&&sc(t.h,n)&&t.G==3){try{var r=t.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!t.u){if(t.g)if(t.g.F+3e3<n.F)Xs(t),Vo(t);else break e;gu(t),Oe(18)}}else t.Ba=i[1],0<t.Ba-t.T&&37500>i[2]&&t.L&&t.A==0&&!t.v&&(t.v=Ki(Ne(t.cb,t),6e3));if(1>=km(t.h)&&t.ja){try{t.ja()}catch{}t.ja=void 0}}else vn(t,11)}else if((n.J||t.g==n)&&Xs(t),!Ws(e))for(i=t.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(t.T=u[0],u=u[1],t.G==2)if(u[0]=="c"){t.I=u[1],t.ka=u[2];const l=u[3];l!=null&&(t.ma=l,t.j.info("VER="+t.ma));const h=u[4];h!=null&&(t.Ca=h,t.j.info("SVER="+t.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,t.J=r,t.j.info("backChannelRequestTimeoutMs_="+r)),r=t;const m=n.g;if(m){const g=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.h;s.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(hu(s,s.h),s.h=null))}if(r.D){const b=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;b&&(r.za=b,Q(r.F,r.D,b))}}t.G=3,t.l&&t.l.xa(),t.$&&(t.P=Date.now()-n.F,t.j.info("Handshake RTT: "+t.P+"ms")),r=t;var o=n;if(r.sa=zm(r,r.H?r.ka:null,r.V),o.J){Am(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&(Oo(a),Yi(a)),r.g=o}else Vm(r);0<t.i.length&&Uo(t)}else u[0]!="stop"&&u[0]!="close"||vn(t,7);else t.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?vn(t,7):pu(t):u[0]!="noop"&&t.l&&t.l.wa(u),t.A=0)}}Si(4)}catch{}}function HE(n){if(n.W&&typeof n.W=="function")return n.W();if(typeof Map!="undefined"&&n instanceof Map||typeof Set!="undefined"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(So(n)){for(var e=[],t=n.length,r=0;r<t;r++)e.push(n[r]);return e}e=[],t=0;for(r in n)e[t++]=n[r];return e}function QE(n){if(n.oa&&typeof n.oa=="function")return n.oa();if(!n.W||typeof n.W!="function"){if(typeof Map!="undefined"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set!="undefined"&&n instanceof Set)){if(So(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const r in n)e[t++]=r;return e}}}function wm(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(So(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=QE(n),r=HE(n),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],t&&t[s],n)}var Im=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function YE(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var r=n[t].indexOf("="),i=null;if(0<=r){var s=n[t].substring(0,r);i=n[t].substring(r+1)}else s=n[t];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function En(n,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof En){this.h=e!==void 0?e:n.h,Qs(this,n.j),this.s=n.s,this.g=n.g,Ys(this,n.m),this.l=n.l,e=n.i;var t=new ki;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),fh(this,t),this.o=n.o}else n&&(t=String(n).match(Im))?(this.h=!!e,Qs(this,t[1]||"",!0),this.s=ti(t[2]||""),this.g=ti(t[3]||"",!0),Ys(this,t[4]),this.l=ti(t[5]||"",!0),fh(this,t[6]||"",!0),this.o=ti(t[7]||"")):(this.h=!!e,this.i=new ki(null,this.h))}En.prototype.toString=function(){var n=[],e=this.j;e&&n.push(ni(e,mh,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(ni(e,mh,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(ni(t,t.charAt(0)=="/"?ZE:JE,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",ni(t,t0)),n.join("")};function St(n){return new En(n)}function Qs(n,e,t){n.j=t?ti(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function Ys(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function fh(n,e,t){e instanceof ki?(n.i=e,n0(n.i,n.h)):(t||(e=ni(e,e0)),n.i=new ki(e,n.h))}function Q(n,e,t){n.i.set(e,t)}function Mo(n){return Q(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function ti(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function ni(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,XE),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function XE(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var mh=/[#\/\?@]/g,JE=/[#\?:]/g,ZE=/[#\?]/g,e0=/[#\?@]/g,t0=/#/g;function ki(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function tn(n){n.g||(n.g=new Map,n.h=0,n.i&&YE(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}E=ki.prototype;E.add=function(n,e){tn(this),this.i=null,n=Dr(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function _m(n,e){tn(n),e=Dr(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function bm(n,e){return tn(n),e=Dr(n,e),n.g.has(e)}E.forEach=function(n,e){tn(this),this.g.forEach(function(t,r){t.forEach(function(i){n.call(e,i,r,this)},this)},this)};E.oa=function(){tn(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let r=0;r<e.length;r++){const i=n[r];for(let s=0;s<i.length;s++)t.push(e[r])}return t};E.W=function(n){tn(this);let e=[];if(typeof n=="string")bm(this,n)&&(e=e.concat(this.g.get(Dr(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};E.set=function(n,e){return tn(this),this.i=null,n=Dr(this,n),bm(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};E.get=function(n,e){return n?(n=this.W(n),0<n.length?String(n[0]):e):e};function Tm(n,e,t){_m(n,e),0<t.length&&(n.i=null,n.g.set(Dr(n,e),Jc(t)),n.h+=t.length)}E.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var r=e[t];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function Dr(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function n0(n,e){e&&!n.j&&(tn(n),n.i=null,n.g.forEach(function(t,r){var i=r.toLowerCase();r!=i&&(_m(this,r),Tm(this,i,t))},n)),n.j=e}var r0=class{constructor(n,e){this.h=n,this.g=e}};function Em(n){this.l=n||i0,N.PerformanceNavigationTiming?(n=N.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(N.g&&N.g.Ga&&N.g.Ga()&&N.g.Ga().$b),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var i0=10;function Sm(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function km(n){return n.h?1:n.g?n.g.size:0}function sc(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function hu(n,e){n.g?n.g.add(e):n.h=e}function Am(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}Em.prototype.cancel=function(){if(this.i=Cm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Cm(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.D);return e}return Jc(n.i)}function du(){}du.prototype.stringify=function(n){return N.JSON.stringify(n,void 0)};du.prototype.parse=function(n){return N.JSON.parse(n,void 0)};function s0(){this.g=new du}function o0(n,e,t){const r=t||"";try{wm(n,function(i,s){let o=i;Gi(i)&&(o=su(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function a0(n,e){const t=new No;if(N.Image){const r=new Image;r.onload=ys(ws,t,r,"TestLoadImage: loaded",!0,e),r.onerror=ys(ws,t,r,"TestLoadImage: error",!1,e),r.onabort=ys(ws,t,r,"TestLoadImage: abort",!1,e),r.ontimeout=ys(ws,t,r,"TestLoadImage: timeout",!1,e),N.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else e(!1)}function ws(n,e,t,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Xi(n){this.l=n.ac||null,this.j=n.jb||!1}Ae(Xi,cu);Xi.prototype.g=function(){return new Lo(this.l,this.j)};Xi.prototype.i=function(n){return function(){return n}}({});function Lo(n,e){ye.call(this),this.D=n,this.u=e,this.m=void 0,this.readyState=fu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ae(Lo,ye);var fu=0;E=Lo.prototype;E.open=function(n,e){if(this.readyState!=fu)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,Ai(this)};E.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.D||N).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};E.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ji(this)),this.readyState=fu};E.Wa=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Ai(this)),this.g&&(this.readyState=3,Ai(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof N.ReadableStream!="undefined"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Dm(this)}else n.text().then(this.Va.bind(this),this.ga.bind(this))};function Dm(n){n.j.read().then(n.Ta.bind(n)).catch(n.ga.bind(n))}E.Ta=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?Ji(this):Ai(this),this.readyState==3&&Dm(this)}};E.Va=function(n){this.g&&(this.response=this.responseText=n,Ji(this))};E.Ua=function(n){this.g&&(this.response=n,Ji(this))};E.ga=function(){this.g&&Ji(this)};function Ji(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Ai(n)}E.setRequestHeader=function(n,e){this.v.append(n,e)};E.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};E.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function Ai(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Lo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var c0=N.JSON.parse;function te(n){ye.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Nm,this.K=this.L=!1}Ae(te,ye);var Nm="",u0=/^https?$/i,l0=["POST","PUT"];E=te.prototype;E.Ka=function(n){this.L=n};E.da=function(n,e,t,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+n);e=e?e.toUpperCase():"GET",this.H=n,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():tc.g(),this.C=this.u?dh(this.u):dh(tc),this.g.onreadystatechange=Ne(this.Ha,this);try{this.F=!0,this.g.open(e,String(n),!0),this.F=!1}catch(s){ph(this,s);return}if(n=t||"",t=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)t.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())t.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(t.keys()).find(s=>s.toLowerCase()=="content-type"),i=N.FormData&&n instanceof N.FormData,!(0<=Wf(l0,e))||r||i||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of t)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Pm(this),0<this.B&&((this.K=h0(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ne(this.qa,this)):this.A=au(this.qa,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){ph(this,s)}};function h0(n){return lr&&CE()&&typeof n.timeout=="number"&&n.ontimeout!==void 0}E.qa=function(){typeof Xc!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ee(this,"timeout"),this.abort(8))};function ph(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,Rm(n),Fo(n)}function Rm(n){n.D||(n.D=!0,Ee(n,"complete"),Ee(n,"error"))}E.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,Ee(this,"complete"),Ee(this,"abort"),Fo(this))};E.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Fo(this,!0)),te.X.M.call(this)};E.Ha=function(){this.s||(this.F||this.v||this.l?xm(this):this.fb())};E.fb=function(){xm(this)};function xm(n){if(n.h&&typeof Xc!="undefined"&&(!n.C[1]||_t(n)!=4||n.aa()!=2)){if(n.v&&_t(n)==4)au(n.Ha,0,n);else if(Ee(n,"readystatechange"),_t(n)==4){n.h=!1;try{const a=n.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var r;if(r=a===0){var i=String(n.H).match(Im)[1]||null;if(!i&&N.self&&N.self.location){var s=N.self.location.protocol;i=s.substr(0,s.length-1)}r=!u0.test(i?i.toLowerCase():"")}t=r}if(t)Ee(n,"complete"),Ee(n,"success");else{n.m=6;try{var o=2<_t(n)?n.g.statusText:""}catch{o=""}n.j=o+" ["+n.aa()+"]",Rm(n)}}finally{Fo(n)}}}}function Fo(n,e){if(n.g){Pm(n);const t=n.g,r=n.C[0]?Gs:null;n.g=null,n.C=null,e||Ee(n,"ready");try{t.onreadystatechange=r}catch{}}}function Pm(n){n.g&&n.K&&(n.g.ontimeout=null),n.A&&(N.clearTimeout(n.A),n.A=null)}function _t(n){return n.g?n.g.readyState:0}E.aa=function(){try{return 2<_t(this)?this.g.status:-1}catch{return-1}};E.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};E.Sa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),c0(e)}};function gh(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.J){case Nm:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}E.Ea=function(){return this.m};E.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Om(n){let e="";return eu(n,function(t,r){e+=r,e+=":",e+=t,e+=`\r
`}),e}function mu(n,e,t){e:{for(r in t){var r=!1;break e}r=!0}r||(t=Om(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):Q(n,e,t))}function Wr(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function Mm(n){this.Ca=0,this.i=[],this.j=new No,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Wr("failFast",!1,n),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Wr("baseRetryDelayMs",5e3,n),this.bb=Wr("retryDelaySeedMs",1e4,n),this.$a=Wr("forwardChannelMaxRetries",2,n),this.ta=Wr("forwardChannelRequestTimeoutMs",2e4,n),this.ra=n&&n.xmlHttpFactory||void 0,this.Da=n&&n.Zb||!1,this.J=void 0,this.H=n&&n.supportsCrossDomainXhr||!1,this.I="",this.h=new Em(n&&n.concurrentRequestLimit),this.Fa=new s0,this.O=n&&n.fastHandshake||!1,this.N=n&&n.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=n&&n.Xb||!1,n&&n.Aa&&this.j.Aa(),n&&n.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&n&&n.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}E=Mm.prototype;E.ma=8;E.G=1;function pu(n){if(Lm(n),n.G==3){var e=n.U++,t=St(n.F);Q(t,"SID",n.I),Q(t,"RID",e),Q(t,"TYPE","terminate"),Zi(n,t),e=new Qi(n,n.j,e,void 0),e.K=2,e.v=Mo(St(t)),t=!1,N.navigator&&N.navigator.sendBeacon&&(t=N.navigator.sendBeacon(e.v.toString(),"")),!t&&N.Image&&(new Image().src=e.v,t=!0),t||(e.g=jm(e.l,null),e.g.da(e.v)),e.F=Date.now(),Yi(e)}$m(n)}function Vo(n){n.g&&(yu(n),n.g.cancel(),n.g=null)}function Lm(n){Vo(n),n.u&&(N.clearTimeout(n.u),n.u=null),Xs(n),n.h.cancel(),n.m&&(typeof n.m=="number"&&N.clearTimeout(n.m),n.m=null)}function Uo(n){Sm(n.h)||n.m||(n.m=!0,im(n.Ja,n),n.C=0)}function d0(n,e){return km(n.h)>=n.h.j-(n.m?1:0)?!1:n.m?(n.i=e.D.concat(n.i),!0):n.G==1||n.G==2||n.C>=(n.Za?0:n.$a)?!1:(n.m=Ki(Ne(n.Ja,n,e),qm(n,n.C)),n.C++,!0)}E.Ja=function(n){if(this.m)if(this.m=null,this.G==1){if(!n){this.U=Math.floor(1e5*Math.random()),n=this.U++;const i=new Qi(this,this.j,n,void 0);let s=this.s;if(this.S&&(s?(s=Yf(s),Xf(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,t=0;t<this.i.length;t++){t:{var r=this.i[t];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=t;break e}if(e===4096||t===this.i.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=Fm(this,i,e),t=St(this.F),Q(t,"RID",n),Q(t,"CVER",22),this.D&&Q(t,"X-HTTP-Session-Id",this.D),Zi(this,t),s&&(this.N?e="headers="+encodeURIComponent(String(Om(s)))+"&"+e:this.o&&mu(t,this.o,s)),hu(this.h,i),this.Ya&&Q(t,"TYPE","init"),this.O?(Q(t,"$req",e),Q(t,"SID","null"),i.Z=!0,rc(i,t,null)):rc(i,t,e),this.G=2}}else this.G==3&&(n?yh(this,n):this.i.length==0||Sm(this.h)||yh(this))};function yh(n,e){var t;e?t=e.m:t=n.U++;const r=St(n.F);Q(r,"SID",n.I),Q(r,"RID",t),Q(r,"AID",n.T),Zi(n,r),n.o&&n.s&&mu(r,n.o,n.s),t=new Qi(n,n.j,t,n.C+1),n.o===null&&(t.H=n.s),e&&(n.i=e.D.concat(n.i)),e=Fm(n,t,1e3),t.setTimeout(Math.round(.5*n.ta)+Math.round(.5*n.ta*Math.random())),hu(n.h,t),rc(t,r,e)}function Zi(n,e){n.ia&&eu(n.ia,function(t,r){Q(e,r,t)}),n.l&&wm({},function(t,r){Q(e,r,t)})}function Fm(n,e,t){t=Math.min(n.i.length,t);var r=n.l?Ne(n.l.Ra,n.l,n):null;e:{var i=n.i;let s=-1;for(;;){const o=["count="+t];s==-1?0<t?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<t;c++){let u=i[c].h;const l=i[c].g;if(u-=s,0>u)s=Math.max(0,i[c].h-100),a=!1;else try{o0(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return n=n.i.splice(0,t),e.D=n,r}function Vm(n){n.g||n.u||(n.Z=1,im(n.Ia,n),n.A=0)}function gu(n){return n.g||n.u||3<=n.A?!1:(n.Z++,n.u=Ki(Ne(n.Ia,n),qm(n,n.A)),n.A++,!0)}E.Ia=function(){if(this.u=null,Um(this),this.$&&!(this.K||this.g==null||0>=this.P)){var n=2*this.P;this.j.info("BP detection timer enabled: "+n),this.B=Ki(Ne(this.eb,this),n)}};E.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Oe(10),Vo(this),Um(this))};function yu(n){n.B!=null&&(N.clearTimeout(n.B),n.B=null)}function Um(n){n.g=new Qi(n,n.j,"rpc",n.Z),n.o===null&&(n.g.H=n.s),n.g.N=0;var e=St(n.sa);Q(e,"RID","rpc"),Q(e,"SID",n.I),Q(e,"CI",n.L?"0":"1"),Q(e,"AID",n.T),Q(e,"TYPE","xmlhttp"),Zi(n,e),n.o&&n.s&&mu(e,n.o,n.s),n.J&&n.g.setTimeout(n.J);var t=n.g;n=n.ka,t.K=1,t.v=Mo(St(e)),t.s=null,t.P=!0,pm(t,n)}E.cb=function(){this.v!=null&&(this.v=null,Vo(this),gu(this),Oe(19))};function Xs(n){n.v!=null&&(N.clearTimeout(n.v),n.v=null)}function Bm(n,e){var t=null;if(n.g==e){Xs(n),yu(n),n.g=null;var r=2}else if(sc(n.h,e))t=e.D,Am(n.h,e),r=1;else return;if(n.G!=0){if(n.pa=e.Y,e.i)if(r==1){t=e.s?e.s.length:0,e=Date.now()-e.F;var i=n.C;r=Ro(),Ee(r,new hm(r,t)),Uo(n)}else Vm(n);else if(i=e.o,i==3||i==0&&0<n.pa||!(r==1&&d0(n,e)||r==2&&gu(n)))switch(t&&0<t.length&&(e=n.h,e.i=e.i.concat(t)),i){case 1:vn(n,5);break;case 4:vn(n,10);break;case 3:vn(n,6);break;default:vn(n,2)}}}function qm(n,e){let t=n.Xa+Math.floor(Math.random()*n.bb);return n.l||(t*=2),t*e}function vn(n,e){if(n.j.info("Error code "+e),e==2){var t=null;n.l&&(t=null);var r=Ne(n.kb,n);t||(t=new En("//www.google.com/images/cleardot.gif"),N.location&&N.location.protocol=="http"||Qs(t,"https"),Mo(t)),a0(t.toString(),r)}else Oe(2);n.G=0,n.l&&n.l.va(e),$m(n),Lm(n)}E.kb=function(n){n?(this.j.info("Successfully pinged google.com"),Oe(2)):(this.j.info("Failed to ping google.com"),Oe(1))};function $m(n){if(n.G=0,n.la=[],n.l){const e=Cm(n.h);(e.length!=0||n.i.length!=0)&&(oh(n.la,e),oh(n.la,n.i),n.h.i.length=0,Jc(n.i),n.i.length=0),n.l.ua()}}function zm(n,e,t){var r=t instanceof En?St(t):new En(t,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Ys(r,r.m);else{var i=N.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new En(null,void 0);r&&Qs(s,r),e&&(s.g=e),i&&Ys(s,i),t&&(s.l=t),r=s}return t=n.D,e=n.za,t&&e&&Q(r,t,e),Q(r,"VER",n.ma),Zi(n,r),r}function jm(n,e,t){if(e&&!n.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Da&&!n.ra?new te(new Xi({jb:!0})):new te(n.ra),e.Ka(n.H),e}function Gm(){}E=Gm.prototype;E.xa=function(){};E.wa=function(){};E.va=function(){};E.ua=function(){};E.Ra=function(){};function Js(){if(lr&&!(10<=Number(DE)))throw Error("Environmental error: no available transport.")}Js.prototype.g=function(n,e){return new We(n,e)};function We(n,e){ye.call(this),this.g=new Mm(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(n?n["X-WebChannel-Client-Profile"]=e.ya:n={"X-WebChannel-Client-Profile":e.ya}),this.g.S=n,(n=e&&e.Yb)&&!Ws(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ws(e)&&(this.g.D=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Nr(this)}Ae(We,ye);We.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var n=this.g,e=this.l,t=this.h||void 0;Oe(0),n.V=e,n.ia=t||{},n.L=n.Y,n.F=zm(n,null,n.V),Uo(n)};We.prototype.close=function(){pu(this.g)};We.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=su(n),n=t);e.i.push(new r0(e.ab++,n)),e.G==3&&Uo(e)};We.prototype.M=function(){this.g.l=null,delete this.j,pu(this.g),delete this.g,We.X.M.call(this)};function Wm(n){uu.call(this);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}Ae(Wm,uu);function Km(){lu.call(this),this.status=1}Ae(Km,lu);function Nr(n){this.g=n}Ae(Nr,Gm);Nr.prototype.xa=function(){Ee(this.g,"a")};Nr.prototype.wa=function(n){Ee(this.g,new Wm(n))};Nr.prototype.va=function(n){Ee(this.g,new Km)};Nr.prototype.ua=function(){Ee(this.g,"b")};Js.prototype.createWebChannel=Js.prototype.g;We.prototype.send=We.prototype.u;We.prototype.open=We.prototype.m;We.prototype.close=We.prototype.close;xo.NO_ERROR=0;xo.TIMEOUT=8;xo.HTTP_ERROR=6;dm.COMPLETE="complete";fm.EventType=Hi;Hi.OPEN="a";Hi.CLOSE="b";Hi.ERROR="c";Hi.MESSAGE="d";ye.prototype.listen=ye.prototype.N;te.prototype.listenOnce=te.prototype.O;te.prototype.getLastError=te.prototype.Oa;te.prototype.getLastErrorCode=te.prototype.Ea;te.prototype.getStatus=te.prototype.aa;te.prototype.getResponseJson=te.prototype.Sa;te.prototype.getResponseText=te.prototype.fa;te.prototype.send=te.prototype.da;te.prototype.setWithCredentials=te.prototype.Ka;var f0=function(){return new Js},m0=function(){return Ro()},Pa=xo,p0=dm,g0=zn,vh={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},y0=Xi,Is=fm,v0=te;const wh="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}me.UNAUTHENTICATED=new me(null),me.GOOGLE_CREDENTIALS=new me("google-credentials-uid"),me.FIRST_PARTY=new me("first-party-uid"),me.MOCK_USER=new me("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rr="9.15.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt=new fo("@firebase/firestore");function oc(){return Gt.logLevel}function w0(n){Gt.setLogLevel(n)}function v(n,...e){if(Gt.logLevel<=V.DEBUG){const t=e.map(vu);Gt.debug(`Firestore (${Rr}): ${n}`,...t)}}function se(n,...e){if(Gt.logLevel<=V.ERROR){const t=e.map(vu);Gt.error(`Firestore (${Rr}): ${n}`,...t)}}function hr(n,...e){if(Gt.logLevel<=V.WARN){const t=e.map(vu);Gt.warn(`Firestore (${Rr}): ${n}`,...t)}}function vu(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(n="Unexpected state"){const e=`FIRESTORE (${Rr}) INTERNAL ASSERTION FAILED: `+n;throw se(e),new Error(e)}function S(n,e){n||T()}function I0(n,e){n||T()}function _(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class y extends Me{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(me.UNAUTHENTICATED))}shutdown(){}}class b0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class T0{constructor(e){this.t=e,this.currentUser=me.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const i=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let s=new pe;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new pe,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{v("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(v("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new pe)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(v("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(S(typeof r.accessToken=="string"),new Hm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return S(e===null||typeof e=="string"),new me(e)}}class E0{constructor(e,t,r,i){this.h=e,this.l=t,this.m=r,this.g=i,this.type="FirstParty",this.user=me.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(S(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class S0{constructor(e,t,r,i){this.h=e,this.l=t,this.m=r,this.g=i}getToken(){return Promise.resolve(new E0(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable(()=>t(me.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class k0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class A0{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){const r=s=>{s.error!=null&&v("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,v("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{v("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):v("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(S(typeof t.token=="string"),this.A=t.token,new k0(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C0(n){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=C0(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function R(n,e){return n<e?-1:n>e?1:0}function dr(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function Ym(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new y(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new y(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new y(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new y(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return X.fromMillis(Date.now())}static fromDate(e){return X.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new X(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?R(this.nanoseconds,e.nanoseconds):R(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.timestamp=e}static fromTimestamp(e){return new A(e)}static min(){return new A(new X(0,0))}static max(){return new A(new X(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,t,r){t===void 0?t=0:t>e.length&&T(),r===void 0?r=e.length-t:r>e.length-t&&T(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ci.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ci?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class F extends Ci{construct(e,t,r){return new F(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new y(p.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new F(t)}static emptyPath(){return new F([])}}const D0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class oe extends Ci{construct(e,t,r){return new oe(e,t,r)}static isValidIdentifier(e){return D0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),oe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new oe(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new y(p.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new y(p.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new y(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new y(p.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new oe(t)}static emptyPath(){return new oe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e){this.path=e}static fromPath(e){return new I(F.fromString(e))}static fromName(e){return new I(F.fromString(e).popFirst(5))}static empty(){return new I(F.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&F.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return F.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new I(new F(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}}function ac(n){return n.fields.find(e=>e.kind===2)}function ln(n){return n.fields.filter(e=>e.kind!==2)}Xm.UNKNOWN_ID=-1;class N0{constructor(e,t){this.fieldPath=e,this.kind=t}}class Zs{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Zs(0,Ke.min())}}function Jm(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=A.fromTimestamp(r===1e9?new X(t+1,0):new X(t,r));return new Ke(i,I.empty(),e)}function Zm(n){return new Ke(n.readTime,n.key,-1)}class Ke{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Ke(A.min(),I.empty(),-1)}static max(){return new Ke(A.max(),I.empty(),-1)}}function wu(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=I.comparator(n.documentKey,e.documentKey),t!==0?t:R(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class tp{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nn(n){if(n.code!==p.FAILED_PRECONDITION||n.message!==ep)throw n;v("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&T(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new f((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof f?t:f.resolve(t)}catch(t){return f.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):f.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):f.reject(t)}static resolve(e){return new f((t,r)=>{t(e)})}static reject(e){return new f((t,r)=>{r(e)})}static waitFor(e){return new f((t,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&t()},c=>r(c))}),o=!0,s===i&&t()})}static or(e){let t=f.resolve(!1);for(const r of e)t=t.next(i=>i?f.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new f((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;t(e[u]).next(l=>{o[u]=l,++a,a===s&&r(o)},l=>i(l))}})}static doWhile(e,t){return new f((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.P=new pe,this.transaction.oncomplete=()=>{this.P.resolve()},this.transaction.onabort=()=>{t.error?this.P.reject(new ui(e,t.error)):this.P.resolve()},this.transaction.onerror=r=>{const i=Iu(r.target.error);this.P.reject(new ui(e,i))}}static open(e,t,r,i){try{return new Bo(t,e.transaction(i,r))}catch(s){throw new ui(t,s)}}get v(){return this.P.promise}abort(e){e&&this.P.reject(e),this.aborted||(v("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}V(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new x0(t)}}class Je{constructor(e,t,r){this.name=e,this.version=t,this.S=r,Je.D(Z())===12.2&&se("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return v("SimpleDb","Removing database:",e),hn(window.indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!pi())return!1;if(Je.N())return!0;const e=Z(),t=Je.D(e),r=0<t&&t<10,i=Je.k(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static N(){var e;return typeof process!="undefined"&&((e=process.env)===null||e===void 0?void 0:e.O)==="YES"}static M(e,t){return e.store(t)}static D(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static k(e){const t=e.match(/Android ([\d.]+)/i),r=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async F(e){return this.db||(v("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{r(new ui(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new y(p.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new y(p.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new ui(e,o))},i.onupgradeneeded=s=>{v("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.S.$(o,i.transaction,s.oldVersion,this.version).next(()=>{v("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=t=>this.B(t)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.F(e);const a=Bo.open(this.db,e,s?"readonly":"readwrite",r),c=i(a).next(u=>(a.V(),u)).catch(u=>(a.abort(u),f.reject(u))).toPromise();return c.catch(()=>{}),await a.v,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(v("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class R0{constructor(e){this.q=e,this.U=!1,this.K=null}get isDone(){return this.U}get G(){return this.K}set cursor(e){this.q=e}done(){this.U=!0}j(e){this.K=e}delete(){return hn(this.q.delete())}}class ui extends y{constructor(e,t){super(p.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function rn(n){return n.name==="IndexedDbTransactionError"}class x0{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(v("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(v("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),hn(r)}add(e){return v("SimpleDb","ADD",this.store.name,e,e),hn(this.store.add(e))}get(e){return hn(this.store.get(e)).next(t=>(t===void 0&&(t=null),v("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return v("SimpleDb","DELETE",this.store.name,e),hn(this.store.delete(e))}count(){return v("SimpleDb","COUNT",this.store.name),hn(this.store.count())}W(e,t){const r=this.options(e,t);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.H(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new f((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}J(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new f((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}Y(e,t){v("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.X=!1;const i=this.cursor(r);return this.H(i,(s,o,a)=>a.delete())}Z(e,t){let r;t?r=e:(r={},t=e);const i=this.cursor(r);return this.H(i,t)}tt(e){const t=this.cursor({});return new f((r,i)=>{t.onerror=s=>{const o=Iu(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}H(e,t){const r=[];return new f((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const c=new R0(a),u=t(a.primaryKey,a.value,c);if(u instanceof f){const l=u.catch(h=>(c.done(),f.reject(h)));r.push(l)}c.isDone?i():c.G===null?a.continue():a.continue(c.G)}}).next(()=>f.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.X?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function hn(n){return new f((e,t)=>{n.onsuccess=r=>{const i=r.target.result;e(i)},n.onerror=r=>{const i=Iu(r.target.error);t(i)}})}let Ih=!1;function Iu(n){const e=Je.D(Z());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new y("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Ih||(Ih=!0,setTimeout(()=>{throw r},0)),r}}return n}class P0{constructor(e,t){this.asyncQueue=e,this.et=t,this.task=null}start(){this.nt(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}nt(e){v("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{v("IndexBackiller",`Documents written: ${await this.et.st()}`)}catch(t){rn(t)?v("IndexBackiller","Ignoring IndexedDB error during index backfill: ",t):await nn(t)}await this.nt(6e4)})}}class O0{constructor(e,t){this.localStore=e,this.persistence=t}async st(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.it(t,e))}it(e,t){const r=new Set;let i=t,s=!0;return f.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return v("IndexBackiller",`Processing collection: ${o}`),this.rt(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>t-i)}rt(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ot(i,s)).next(a=>(v("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}ot(e,t){let r=e;return t.changes.forEach((i,s)=>{const o=Zm(s);wu(o,r)>0&&(r=o)}),new Ke(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>t.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Be.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(e,t,r,i,s,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Wt{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Wt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Wt&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _h(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function jn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function np(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function es(n){return n==null}function Di(n){return n===0&&1/n==-1/0}function rp(n){return typeof n=="number"&&Number.isInteger(n)&&!Di(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L0(){return typeof atob!="undefined"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new he(t)}static fromUint8Array(e){const t=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new he(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return R(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}he.EMPTY_BYTE_STRING=new he("");const F0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Kt(n){if(S(!!n),typeof n=="string"){let e=0;const t=F0.exec(n);if(S(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ee(n.seconds),nanos:ee(n.nanos)}}function ee(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Dn(n){return typeof n=="string"?he.fromBase64String(n):he.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function ip(n){const e=n.mapValue.fields.__previous_value__;return _u(e)?ip(e):e}function Ni(n){const e=Kt(n.mapValue.fields.__local_write_time__.timestampValue);return new X(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},xs={nullValue:"NULL_VALUE"};function Nn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?_u(n)?4:sp(n)?9007199254740991:10:T()}function pt(n,e){if(n===e)return!0;const t=Nn(n);if(t!==Nn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ni(n).isEqual(Ni(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Kt(r.timestampValue),o=Kt(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,i){return Dn(r.bytesValue).isEqual(Dn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,i){return ee(r.geoPointValue.latitude)===ee(i.geoPointValue.latitude)&&ee(r.geoPointValue.longitude)===ee(i.geoPointValue.longitude)}(n,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return ee(r.integerValue)===ee(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=ee(r.doubleValue),o=ee(i.doubleValue);return s===o?Di(s)===Di(o):isNaN(s)&&isNaN(o)}return!1}(n,e);case 9:return dr(n.arrayValue.values||[],e.arrayValue.values||[],pt);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(_h(s)!==_h(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!pt(s[a],o[a])))return!1;return!0}(n,e);default:return T()}}function Ri(n,e){return(n.values||[]).find(t=>pt(t,e))!==void 0}function Ht(n,e){if(n===e)return 0;const t=Nn(n),r=Nn(e);if(t!==r)return R(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return R(n.booleanValue,e.booleanValue);case 2:return function(i,s){const o=ee(i.integerValue||i.doubleValue),a=ee(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return bh(n.timestampValue,e.timestampValue);case 4:return bh(Ni(n),Ni(e));case 5:return R(n.stringValue,e.stringValue);case 6:return function(i,s){const o=Dn(i),a=Dn(s);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=R(o[c],a[c]);if(u!==0)return u}return R(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,s){const o=R(ee(i.latitude),ee(s.latitude));return o!==0?o:R(ee(i.longitude),ee(s.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Ht(o[c],a[c]);if(u)return u}return R(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Ut.mapValue&&s===Ut.mapValue)return 0;if(i===Ut.mapValue)return 1;if(s===Ut.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=s.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=R(a[l],u[l]);if(h!==0)return h;const d=Ht(o[a[l]],c[u[l]]);if(d!==0)return d}return R(a.length,u.length)}(n.mapValue,e.mapValue);default:throw T()}}function bh(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return R(n,e);const t=Kt(n),r=Kt(e),i=R(t.seconds,r.seconds);return i!==0?i:R(t.nanos,r.nanos)}function fr(n){return cc(n)}function cc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(r){const i=Kt(r);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?Dn(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,I.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=cc(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${cc(r.fields[a])}`;return s+"}"}(n.mapValue):T();var e,t}function Rn(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function uc(n){return!!n&&"integerValue"in n}function xi(n){return!!n&&"arrayValue"in n}function Th(n){return!!n&&"nullValue"in n}function Eh(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ps(n){return!!n&&"mapValue"in n}function li(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return jn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=li(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=li(n.arrayValue.values[t]);return e}return Object.assign({},n)}function sp(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function V0(n){return"nullValue"in n?xs:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Rn(Wt.empty(),I.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:T()}function U0(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Rn(Wt.empty(),I.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?Ut:T()}function Sh(n,e){const t=Ht(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function kh(n,e){const t=Ht(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,t){this.position=e,this.inclusive=t}}function Ah(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=I.comparator(I.fromName(o.referenceValue),t.key):r=Ht(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ch(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!pt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{}class O extends op{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new B0(e,t,r):t==="array-contains"?new z0(e,r):t==="in"?new mp(e,r):t==="not-in"?new j0(e,r):t==="array-contains-any"?new G0(e,r):new O(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new q0(e,r):new $0(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Ht(t,this.value)):t!==null&&Nn(this.value)===Nn(t)&&this.matchesComparison(Ht(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return T()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class $ extends op{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new $(e,t)}matches(e){return mr(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(t=>t.isInequality());return e!==null?e.field:null}lt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function mr(n){return n.op==="and"}function lc(n){return n.op==="or"}function ap(n){return cp(n)&&mr(n)}function cp(n){for(const e of n.filters)if(e instanceof $)return!1;return!0}function up(n){if(n instanceof O)return n.field.canonicalString()+n.op.toString()+fr(n.value);{const e=n.filters.map(t=>up(t)).join(",");return`${n.op}(${e})`}}function lp(n,e){return n instanceof O?function(t,r){return r instanceof O&&t.op===r.op&&t.field.isEqual(r.field)&&pt(t.value,r.value)}(n,e):n instanceof $?function(t,r){return r instanceof $&&t.op===r.op&&t.filters.length===r.filters.length?t.filters.reduce((i,s,o)=>i&&lp(s,r.filters[o]),!0):!1}(n,e):void T()}function hp(n,e){const t=n.filters.concat(e);return $.create(t,n.op)}function dp(n){return n instanceof O?function(e){return`${e.field.canonicalString()} ${e.op} ${fr(e.value)}`}(n):n instanceof $?function(e){return e.op.toString()+" {"+e.getFilters().map(dp).join(" ,")+"}"}(n):"Filter"}class B0 extends O{constructor(e,t,r){super(e,t,r),this.key=I.fromName(r.referenceValue)}matches(e){const t=I.comparator(e.key,this.key);return this.matchesComparison(t)}}class q0 extends O{constructor(e,t){super(e,"in",t),this.keys=fp("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class $0 extends O{constructor(e,t){super(e,"not-in",t),this.keys=fp("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function fp(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>I.fromName(r.referenceValue))}class z0 extends O{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return xi(t)&&Ri(t.arrayValue,this.value)}}class mp extends O{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ri(this.value.arrayValue,t)}}class j0 extends O{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ri(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Ri(this.value.arrayValue,t)}}class G0 extends O{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!xi(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ri(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,t="asc"){this.field=e,this.dir=t}}function W0(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e,t){this.comparator=e,this.root=t||_e.EMPTY}insert(e,t){return new ne(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,_e.BLACK,null,null))}remove(e){return new ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,_e.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _s(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _s(this.root,e,this.comparator,!1)}getReverseIterator(){return new _s(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _s(this.root,e,this.comparator,!0)}}class _s{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class _e{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r!=null?r:_e.RED,this.left=i!=null?i:_e.EMPTY,this.right=s!=null?s:_e.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new _e(e!=null?e:this.key,t!=null?t:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return _e.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return _e.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,_e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,_e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw T();const e=this.left.check();if(e!==this.right.check())throw T();return e+(this.isRed()?0:1)}}_e.EMPTY=null,_e.RED=!0,_e.BLACK=!1;_e.EMPTY=new class{constructor(){this.size=0}get key(){throw T()}get value(){throw T()}get color(){throw T()}get left(){throw T()}get right(){throw T()}copy(n,e,t,r,i){return this}insert(n,e,t){return new _e(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.comparator=e,this.data=new ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Dh(this.data.getIterator())}getIteratorFrom(e){return new Dh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof z)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new z(this.comparator);return t.data=e,t}}class Dh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Yn(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.fields=e,e.sort(oe.comparator)}static empty(){return new Ge([])}unionWith(e){let t=new z(oe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ge(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return dr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.value=e}static empty(){return new be({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ps(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=li(t)}setAll(e){let t=oe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=li(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());Ps(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return pt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Ps(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){jn(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new be(li(this.value))}}function pp(n){const e=[];return jn(n.fields,(t,r)=>{const i=new oe([t]);if(Ps(r)){const s=pp(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ge(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new W(e,0,A.min(),A.min(),A.min(),be.empty(),0)}static newFoundDocument(e,t,r,i){return new W(e,1,t,A.min(),r,i,0)}static newNoDocument(e,t){return new W(e,2,t,A.min(),A.min(),be.empty(),0)}static newUnknownDocument(e,t){return new W(e,3,t,A.min(),A.min(),be.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(A.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=be.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=be.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=A.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof W&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new W(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function hc(n,e=null,t=[],r=[],i=null,s=null,o=null){return new K0(n,e,t,r,i,s,o)}function xn(n){const e=_(n);if(e.ft===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>up(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),es(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>fr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>fr(r)).join(",")),e.ft=t}return e.ft}function ts(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!W0(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!lp(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Ch(n.startAt,e.startAt)&&Ch(n.endAt,e.endAt)}function eo(n){return I.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function to(n,e){return n.filters.filter(t=>t instanceof O&&t.field.isEqual(e))}function Nh(n,e,t){let r=xs,i=!0;for(const s of to(n,e)){let o=xs,a=!0;switch(s.op){case"<":case"<=":o=V0(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=xs}Sh({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];Sh({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function Rh(n,e,t){let r=Ut,i=!0;for(const s of to(n,e)){let o=Ut,a=!0;switch(s.op){case">=":case">":o=U0(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Ut}kh({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];kh({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function gp(n,e,t,r,i,s,o,a){return new Dt(n,e,t,r,i,s,o,a)}function xr(n){return new Dt(n)}function xh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function bu(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function qo(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function Tu(n){return n.collectionGroup!==null}function Sn(n){const e=_(n);if(e.dt===null){e.dt=[];const t=qo(e),r=bu(e);if(t!==null&&r===null)t.isKeyField()||e.dt.push(new or(t)),e.dt.push(new or(oe.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new or(oe.keyField(),s))}}}return e.dt}function $e(n){const e=_(n);if(!e._t)if(e.limitType==="F")e._t=hc(e.path,e.collectionGroup,Sn(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const s of Sn(e)){const o=s.dir==="desc"?"asc":"desc";t.push(new or(s.field,o))}const r=e.endAt?new Qt(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Qt(e.startAt.position,e.startAt.inclusive):null;e._t=hc(e.path,e.collectionGroup,t,e.filters,e.limit,r,i)}return e._t}function dc(n,e){e.getFirstInequalityField(),qo(n);const t=n.filters.concat([e]);return new Dt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function no(n,e,t){return new Dt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ns(n,e){return ts($e(n),$e(e))&&n.limitType===e.limitType}function yp(n){return`${xn($e(n))}|lt:${n.limitType}`}function fc(n){return`Query(target=${function(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(r=>dp(r)).join(", ")}]`),es(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>fr(r)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>fr(r)).join(",")),`Target(${t})`}($e(n))}; limitType=${n.limitType})`}function Eu(n,e){return e.isFoundDocument()&&function(t,r){const i=r.key.path;return t.collectionGroup!==null?r.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(i):I.isDocumentKey(t.path)?t.path.isEqual(i):t.path.isImmediateParentOf(i)}(n,e)&&function(t,r){for(const i of Sn(t))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(n,e)&&function(t,r){for(const i of t.filters)if(!i.matches(r))return!1;return!0}(n,e)&&function(t,r){return!(t.startAt&&!function(i,s,o){const a=Ah(i,s,o);return i.inclusive?a<=0:a<0}(t.startAt,Sn(t),r)||t.endAt&&!function(i,s,o){const a=Ah(i,s,o);return i.inclusive?a>=0:a>0}(t.endAt,Sn(t),r))}(n,e)}function vp(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function wp(n){return(e,t)=>{let r=!1;for(const i of Sn(n)){const s=H0(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function H0(n,e,t){const r=n.field.isKeyField()?I.comparator(e.key,t.key):function(i,s,o){const a=s.data.field(i),c=o.data.field(i);return a!==null&&c!==null?Ht(a,c):T()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return T()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ip(n,e){if(n.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Di(e)?"-0":e}}function _p(n){return{integerValue:""+n}}function bp(n,e){return rp(e)?_p(e):Ip(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(){this._=void 0}}function Q0(n,e,t){return n instanceof pr?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(t,e):n instanceof Pn?Ep(n,e):n instanceof On?Sp(n,e):function(r,i){const s=Tp(r,i),o=Ph(s)+Ph(r.gt);return uc(s)&&uc(r.gt)?_p(o):Ip(r.yt,o)}(n,e)}function Y0(n,e,t){return n instanceof Pn?Ep(n,e):n instanceof On?Sp(n,e):t}function Tp(n,e){return n instanceof gr?uc(t=e)||function(r){return!!r&&"doubleValue"in r}(t)?e:{integerValue:0}:null;var t}class pr extends $o{}class Pn extends $o{constructor(e){super(),this.elements=e}}function Ep(n,e){const t=kp(e);for(const r of n.elements)t.some(i=>pt(i,r))||t.push(r);return{arrayValue:{values:t}}}class On extends $o{constructor(e){super(),this.elements=e}}function Sp(n,e){let t=kp(e);for(const r of n.elements)t=t.filter(i=>!pt(i,r));return{arrayValue:{values:t}}}class gr extends $o{constructor(e,t){super(),this.yt=e,this.gt=t}}function Ph(n){return ee(n.integerValue||n.doubleValue)}function kp(n){return xi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,t){this.field=e,this.transform=t}}function X0(n,e){return n.field.isEqual(e.field)&&function(t,r){return t instanceof Pn&&r instanceof Pn||t instanceof On&&r instanceof On?dr(t.elements,r.elements,pt):t instanceof gr&&r instanceof gr?pt(t.gt,r.gt):t instanceof pr&&r instanceof pr}(n.transform,e.transform)}class J0{constructor(e,t){this.version=e,this.transformResults=t}}class Y{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Y}static exists(e){return new Y(void 0,e)}static updateTime(e){return new Y(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Os(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class zo{}function Ap(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Or(n.key,Y.none()):new Pr(n.key,n.data,Y.none());{const t=n.data,r=be.empty();let i=new z(oe.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Nt(n.key,r,new Ge(i.toArray()),Y.none())}}function Z0(n,e,t){n instanceof Pr?function(r,i,s){const o=r.value.clone(),a=Mh(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(n,e,t):n instanceof Nt?function(r,i,s){if(!Os(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Mh(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(Cp(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(n,e,t):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,t)}function hi(n,e,t,r){return n instanceof Pr?function(i,s,o,a){if(!Os(i.precondition,s))return o;const c=i.value.clone(),u=Lh(i.fieldTransforms,a,s);return c.setAll(u),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),null}(n,e,t,r):n instanceof Nt?function(i,s,o,a){if(!Os(i.precondition,s))return o;const c=Lh(i.fieldTransforms,a,s),u=s.data;return u.setAll(Cp(i)),u.setAll(c),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(l=>l.field))}(n,e,t,r):function(i,s,o){return Os(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(n,e,t)}function eS(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=Tp(r.transform,i||null);s!=null&&(t===null&&(t=be.empty()),t.set(r.field,s))}return t||null}function Oh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,r){return t===void 0&&r===void 0||!(!t||!r)&&dr(t,r,(i,s)=>X0(i,s))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Pr extends zo{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Nt extends zo{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Cp(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Mh(n,e,t){const r=new Map;S(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Y0(o,a,t[i]))}return r}function Lh(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,Q0(s,o,e))}return r}class Or extends zo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Su extends zo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue,L;function Dp(n){switch(n){default:return T();case p.CANCELLED:case p.UNKNOWN:case p.DEADLINE_EXCEEDED:case p.RESOURCE_EXHAUSTED:case p.INTERNAL:case p.UNAVAILABLE:case p.UNAUTHENTICATED:return!1;case p.INVALID_ARGUMENT:case p.NOT_FOUND:case p.ALREADY_EXISTS:case p.PERMISSION_DENIED:case p.FAILED_PRECONDITION:case p.ABORTED:case p.OUT_OF_RANGE:case p.UNIMPLEMENTED:case p.DATA_LOSS:return!0}}function Np(n){if(n===void 0)return se("GRPC error has no .code"),p.UNKNOWN;switch(n){case ue.OK:return p.OK;case ue.CANCELLED:return p.CANCELLED;case ue.UNKNOWN:return p.UNKNOWN;case ue.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case ue.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case ue.INTERNAL:return p.INTERNAL;case ue.UNAVAILABLE:return p.UNAVAILABLE;case ue.UNAUTHENTICATED:return p.UNAUTHENTICATED;case ue.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case ue.NOT_FOUND:return p.NOT_FOUND;case ue.ALREADY_EXISTS:return p.ALREADY_EXISTS;case ue.PERMISSION_DENIED:return p.PERMISSION_DENIED;case ue.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case ue.ABORTED:return p.ABORTED;case ue.OUT_OF_RANGE:return p.OUT_OF_RANGE;case ue.UNIMPLEMENTED:return p.UNIMPLEMENTED;case ue.DATA_LOSS:return p.DATA_LOSS;default:return T()}}(L=ue||(ue={}))[L.OK=0]="OK",L[L.CANCELLED=1]="CANCELLED",L[L.UNKNOWN=2]="UNKNOWN",L[L.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",L[L.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",L[L.NOT_FOUND=5]="NOT_FOUND",L[L.ALREADY_EXISTS=6]="ALREADY_EXISTS",L[L.PERMISSION_DENIED=7]="PERMISSION_DENIED",L[L.UNAUTHENTICATED=16]="UNAUTHENTICATED",L[L.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",L[L.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",L[L.ABORTED=10]="ABORTED",L[L.OUT_OF_RANGE=11]="OUT_OF_RANGE",L[L.UNIMPLEMENTED=12]="UNIMPLEMENTED",L[L.INTERNAL=13]="INTERNAL",L[L.UNAVAILABLE=14]="UNAVAILABLE",L[L.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){jn(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return np(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS=new ne(I.comparator);function qe(){return nS}const Rp=new ne(I.comparator);function ri(...n){let e=Rp;for(const t of n)e=e.insert(t.key,t);return e}function xp(n){let e=Rp;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function ct(){return di()}function Pp(){return di()}function di(){return new sn(n=>n.toString(),(n,e)=>n.isEqual(e))}const rS=new ne(I.comparator),iS=new z(I.comparator);function x(...n){let e=iS;for(const t of n)e=e.add(t);return e}const sS=new z(R);function jo(){return sS}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,ss.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new is(A.min(),i,jo(),qe(),x())}}class ss{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ss(r,t,x(),x(),x())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,t,r,i){this.It=e,this.removedTargetIds=t,this.key=r,this.Tt=i}}class Op{constructor(e,t){this.targetId=e,this.Et=t}}class Mp{constructor(e,t,r=he.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Fh{constructor(){this.At=0,this.Rt=Uh(),this.bt=he.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=x(),t=x(),r=x();return this.Rt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:T()}}),new ss(this.bt,this.Pt,e,t,r)}xt(){this.vt=!1,this.Rt=Uh()}Nt(e,t){this.vt=!0,this.Rt=this.Rt.insert(e,t)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class oS{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=qe(),this.qt=Vh(),this.Ut=new z(R)}Kt(e){for(const t of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(t,e.Tt):this.Qt(t,e.key,e.Tt);for(const t of e.removedTargetIds)this.Qt(t,e.key,e.Tt)}jt(e){this.forEachTarget(e,t=>{const r=this.Wt(t);switch(e.state){case 0:this.zt(t)&&r.Dt(e.resumeToken);break;case 1:r.Mt(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.Mt(),r.Vt||this.removeTarget(t);break;case 3:this.zt(t)&&(r.Ft(),r.Dt(e.resumeToken));break;case 4:this.zt(t)&&(this.Ht(t),r.Dt(e.resumeToken));break;default:T()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach((r,i)=>{this.zt(i)&&t(i)})}Jt(e){const t=e.targetId,r=e.Et.count,i=this.Yt(t);if(i){const s=i.target;if(eo(s))if(r===0){const o=new I(s.path);this.Qt(t,o,W.newNoDocument(o,A.min()))}else S(r===1);else this.Xt(t)!==r&&(this.Ht(t),this.Ut=this.Ut.add(t))}}Zt(e){const t=new Map;this.Bt.forEach((s,o)=>{const a=this.Yt(o);if(a){if(s.current&&eo(a.target)){const c=new I(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,W.newNoDocument(c,e))}s.St&&(t.set(o,s.Ct()),s.xt())}});let r=x();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Yt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Lt.forEach((s,o)=>o.setReadTime(e));const i=new is(e,t,this.Ut,this.Lt,r);return this.Lt=qe(),this.qt=Vh(),this.Ut=new z(R),i}Gt(e,t){if(!this.zt(e))return;const r=this.te(e,t.key)?2:0;this.Wt(e).Nt(t.key,r),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}Qt(e,t,r){if(!this.zt(e))return;const i=this.Wt(e);this.te(e,t)?i.Nt(t,1):i.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),r&&(this.Lt=this.Lt.insert(t,r))}removeTarget(e){this.Bt.delete(e)}Xt(e){const t=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let t=this.Bt.get(e);return t||(t=new Fh,this.Bt.set(e,t)),t}ee(e){let t=this.qt.get(e);return t||(t=new z(R),this.qt=this.qt.insert(e,t)),t}zt(e){const t=this.Yt(e)!==null;return t||v("WatchChangeAggregator","Detected inactive target",e),t}Yt(e){const t=this.Bt.get(e);return t&&t.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new Fh),this.$t.getRemoteKeysForTarget(e).forEach(t=>{this.Qt(e,t,null)})}te(e,t){return this.$t.getRemoteKeysForTarget(e).has(t)}}function Vh(){return new ne(I.comparator)}function Uh(){return new ne(I.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),cS=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),uS=(()=>({and:"AND",or:"OR"}))();class lS{constructor(e,t){this.databaseId=e,this.wt=t}}function yr(n,e){return n.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Lp(n,e){return n.wt?e.toBase64():e.toUint8Array()}function hS(n,e){return yr(n,e.toTimestamp())}function ae(n){return S(!!n),A.fromTimestamp(function(e){const t=Kt(e);return new X(t.seconds,t.nanos)}(n))}function ku(n,e){return function(t){return new F(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function Fp(n){const e=F.fromString(n);return S(Wp(e)),e}function Pi(n,e){return ku(n.databaseId,e.path)}function ht(n,e){const t=Fp(e);if(t.get(1)!==n.databaseId.projectId)throw new y(p.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new y(p.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new I(Up(t))}function mc(n,e){return ku(n.databaseId,e)}function Vp(n){const e=Fp(n);return e.length===4?F.emptyPath():Up(e)}function Oi(n){return new F(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Up(n){return S(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Bh(n,e,t){return{name:Pi(n,e),fields:t.value.mapValue.fields}}function Bp(n,e,t){const r=ht(n,e.name),i=ae(e.updateTime),s=e.createTime?ae(e.createTime):A.min(),o=new be({mapValue:{fields:e.fields}}),a=W.newFoundDocument(r,i,s,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function dS(n,e){return"found"in e?function(t,r){S(!!r.found),r.found.name,r.found.updateTime;const i=ht(t,r.found.name),s=ae(r.found.updateTime),o=r.found.createTime?ae(r.found.createTime):A.min(),a=new be({mapValue:{fields:r.found.fields}});return W.newFoundDocument(i,s,o,a)}(n,e):"missing"in e?function(t,r){S(!!r.missing),S(!!r.readTime);const i=ht(t,r.missing),s=ae(r.readTime);return W.newNoDocument(i,s)}(n,e):T()}function fS(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:T()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,u){return c.wt?(S(u===void 0||typeof u=="string"),he.fromBase64String(u||"")):(S(u===void 0||u instanceof Uint8Array),he.fromUint8Array(u||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?p.UNKNOWN:Np(c.code);return new y(u,c.message||"")}(o);t=new Mp(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ht(n,r.document.name),s=ae(r.document.updateTime),o=r.document.createTime?ae(r.document.createTime):A.min(),a=new be({mapValue:{fields:r.document.fields}}),c=W.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];t=new Ms(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ht(n,r.document),s=r.readTime?ae(r.readTime):A.min(),o=W.newNoDocument(i,s),a=r.removedTargetIds||[];t=new Ms([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ht(n,r.document),s=r.removedTargetIds||[];t=new Ms([],s,i,null)}else{if(!("filter"in e))return T();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new tS(i),o=r.targetId;t=new Op(o,s)}}return t}function Mi(n,e){let t;if(e instanceof Pr)t={update:Bh(n,e.key,e.value)};else if(e instanceof Or)t={delete:Pi(n,e.key)};else if(e instanceof Nt)t={update:Bh(n,e.key,e.data),updateMask:wS(e.fieldMask)};else{if(!(e instanceof Su))return T();t={verify:Pi(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof pr)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Pn)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof On)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof gr)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw T()}(0,r))),e.precondition.isNone||(t.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:hS(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:T()}(n,e.precondition)),t}function pc(n,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?Y.updateTime(ae(i.updateTime)):i.exists!==void 0?Y.exists(i.exists):Y.none()}(e.currentDocument):Y.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)S(o.setToServerValue==="REQUEST_TIME"),a=new pr;else if("appendMissingElements"in o){const u=o.appendMissingElements.values||[];a=new Pn(u)}else if("removeAllFromArray"in o){const u=o.removeAllFromArray.values||[];a=new On(u)}else"increment"in o?a=new gr(s,o.increment):T();const c=oe.fromServerFormat(o.fieldPath);return new rs(c,a)}(n,i)):[];if(e.update){e.update.name;const i=ht(n,e.update.name),s=new be({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new Ge(c.map(u=>oe.fromServerFormat(u)))}(e.updateMask);return new Nt(i,s,o,t,r)}return new Pr(i,s,t,r)}if(e.delete){const i=ht(n,e.delete);return new Or(i,t)}if(e.verify){const i=ht(n,e.verify);return new Su(i,t)}return T()}function mS(n,e){return n&&n.length>0?(S(e!==void 0),n.map(t=>function(r,i){let s=r.updateTime?ae(r.updateTime):ae(i);return s.isEqual(A.min())&&(s=ae(i)),new J0(s,r.transformResults||[])}(t,e))):[]}function qp(n,e){return{documents:[mc(n,e.path)]}}function $p(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=mc(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=mc(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return Gp($.create(c,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:Jn(l.field),direction:gS(l.dir)}}(u))}(e.orderBy);s&&(t.structuredQuery.orderBy=s);const o=function(c,u){return c.wt||es(u)?u:{value:u}}(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function zp(n){let e=Vp(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){S(r===1);const l=t.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let s=[];t.where&&(s=function(l){const h=jp(l);return h instanceof $&&ap(h)?h.getFilters():[h]}(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(l=>function(h){return new or(Zn(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;t.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,es(h)?null:h}(t.limit));let c=null;t.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new Qt(d,h)}(t.startAt));let u=null;return t.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new Qt(d,h)}(t.endAt)),gp(e,i,o,s,a,"F",c,u)}function pS(n,e){const t=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return T()}}(0,e.purpose);return t==null?null:{"goog-listen-tags":t}}function jp(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Zn(e.unaryFilter.field);return O.create(t,"==",{doubleValue:NaN});case"IS_NULL":const r=Zn(e.unaryFilter.field);return O.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Zn(e.unaryFilter.field);return O.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Zn(e.unaryFilter.field);return O.create(s,"!=",{nullValue:"NULL_VALUE"});default:return T()}}(n):n.fieldFilter!==void 0?function(e){return O.create(Zn(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return T()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return $.create(e.compositeFilter.filters.map(t=>jp(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return T()}}(e.compositeFilter.op))}(n):T()}function gS(n){return aS[n]}function yS(n){return cS[n]}function vS(n){return uS[n]}function Jn(n){return{fieldPath:n.canonicalString()}}function Zn(n){return oe.fromServerFormat(n.fieldPath)}function Gp(n){return n instanceof O?function(e){if(e.op==="=="){if(Eh(e.value))return{unaryFilter:{field:Jn(e.field),op:"IS_NAN"}};if(Th(e.value))return{unaryFilter:{field:Jn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Eh(e.value))return{unaryFilter:{field:Jn(e.field),op:"IS_NOT_NAN"}};if(Th(e.value))return{unaryFilter:{field:Jn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Jn(e.field),op:yS(e.op),value:e.value}}}(n):n instanceof $?function(e){const t=e.getFilters().map(r=>Gp(r));return t.length===1?t[0]:{compositeFilter:{op:vS(e.op),filters:t}}}(n):T()}function wS(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Wp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=qh(e)),e=IS(n.get(t),e);return qh(e)}function IS(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function qh(n){return n+""}function ut(n){const e=n.length;if(S(e>=2),e===2)return S(n.charAt(0)===""&&n.charAt(1)===""),F.emptyPath();const t=e-2,r=[];let i="";for(let s=0;s<e;){const o=n.indexOf("",s);switch((o<0||o>t)&&T(),n.charAt(o+1)){case"":const a=n.substring(s,o);let c;i.length===0?c=a:(i+=a,c=i,i=""),r.push(c);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:T()}s=o+2}return new F(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(n,e){return[n,Le(e)]}function Kp(n,e,t){return[n,Le(e),t]}const _S={},bS=["prefixPath","collectionGroup","readTime","documentId"],TS=["prefixPath","collectionGroup","documentId"],ES=["collectionGroup","readTime","prefixPath","documentId"],SS=["canonicalId","targetId"],kS=["targetId","path"],AS=["path","targetId"],CS=["collectionId","parent"],DS=["indexId","uid"],NS=["uid","sequenceNumber"],RS=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],xS=["indexId","uid","orderedDocumentKey"],PS=["userId","collectionPath","documentId"],OS=["userId","collectionPath","largestBatchId"],MS=["userId","collectionGroup","largestBatchId"],Hp=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],LS=[...Hp,"documentOverlays"],Qp=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Yp=Qp,FS=[...Yp,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc extends tp{constructor(e,t){super(),this.se=e,this.currentSequenceNumber=t}}function we(n,e){const t=_(n);return Je.M(t.se,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Z0(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=hi(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=hi(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Pp();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(i.key)?null:a;const c=Ap(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(A.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),x())}isEqual(e){return this.batchId===e.batchId&&dr(this.mutations,e.mutations,(t,r)=>Oh(t,r))&&dr(this.baseMutations,e.baseMutations,(t,r)=>Oh(t,r))}}class Cu{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){S(e.mutations.length===r.length);let i=rS;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Cu(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,t,r,i,s=A.min(),o=A.min(),a=he.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new qt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(e){this.ie=e}}function VS(n,e){let t;if(e.document)t=Bp(n.ie,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=I.fromSegments(e.noDocument.path),i=Ln(e.noDocument.readTime);t=W.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return T();{const r=I.fromSegments(e.unknownDocument.path),i=Ln(e.unknownDocument.version);t=W.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(r){const i=new X(r[0],r[1]);return A.fromTimestamp(i)}(e.readTime)),t}function zh(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:ro(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,s){return{name:Pi(i,s.key),fields:s.data.value.mapValue.fields,updateTime:yr(i,s.version.toTimestamp()),createTime:yr(i,s.createTime.toTimestamp())}}(n.ie,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Mn(e.version)};else{if(!e.isUnknownDocument())return T();r.unknownDocument={path:t.path.toArray(),version:Mn(e.version)}}return r}function ro(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Mn(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Ln(n){const e=new X(n.seconds,n.nanoseconds);return A.fromTimestamp(e)}function dn(n,e){const t=(e.baseMutations||[]).map(s=>pc(n.ie,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>pc(n.ie,s)),i=X.fromMillis(e.localWriteTimeMs);return new Au(e.batchId,i,t,r)}function ii(n){const e=Ln(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Ln(n.lastLimboFreeSnapshotVersion):A.min();let r;var i;return n.query.documents!==void 0?(S((i=n.query).documents.length===1),r=$e(xr(Vp(i.documents[0])))):r=function(s){return $e(zp(s))}(n.query),new qt(r,n.targetId,0,n.lastListenSequenceNumber,e,t,he.fromBase64String(n.resumeToken))}function Jp(n,e){const t=Mn(e.snapshotVersion),r=Mn(e.lastLimboFreeSnapshotVersion);let i;i=eo(e.target)?qp(n.ie,e.target):$p(n.ie,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:xn(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Nu(n){const e=zp({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?no(e,e.limit,"L"):e}function Oa(n,e){return new Du(e.largestBatchId,pc(n.ie,e.overlayMutation))}function jh(n,e){const t=e.path.lastSegment();return[n,Le(e.path.popLast()),t]}function Gh(n,e,t,r){return{indexId:n,uid:e.uid||"",sequenceNumber:t,readTime:Mn(r.readTime),documentKey:Le(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{getBundleMetadata(e,t){return Wh(e).get(t).next(r=>{if(r)return{id:(i=r).bundleId,createTime:Ln(i.createTime),version:i.version};var i})}saveBundleMetadata(e,t){return Wh(e).put({bundleId:(r=t).id,createTime:Mn(ae(r.createTime)),version:r.version});var r}getNamedQuery(e,t){return Kh(e).get(t).next(r=>{if(r)return{name:(i=r).name,query:Nu(i.bundledQuery),readTime:Ln(i.readTime)};var i})}saveNamedQuery(e,t){return Kh(e).put(function(r){return{name:r.name,readTime:Mn(ae(r.readTime)),bundledQuery:r.bundledQuery}}(t))}}function Wh(n){return we(n,"bundles")}function Kh(n){return we(n,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,t){this.yt=e,this.userId=t}static re(e,t){const r=t.uid||"";return new Go(e,r)}getOverlay(e,t){return Kr(e).get(jh(this.userId,t)).next(r=>r?Oa(this.yt,r):null)}getOverlays(e,t){const r=ct();return f.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){const i=[];return r.forEach((s,o)=>{const a=new Du(t,o);i.push(this.oe(e,a))}),f.waitFor(i)}removeOverlaysForBatchId(e,t,r){const i=new Set;t.forEach(o=>i.add(Le(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Kr(e).Y("collectionPathOverlayIndex",a))}),f.waitFor(s)}getOverlaysForCollection(e,t,r){const i=ct(),s=Le(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Kr(e).W("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const u=Oa(this.yt,c);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,t,r,i){const s=ct();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Kr(e).Z({index:"collectionGroupOverlayIndex",range:a},(c,u,l)=>{const h=Oa(this.yt,u);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>s)}oe(e,t){return Kr(e).put(function(r,i,s){const[o,a,c]=jh(i,s.mutation.key);return{userId:i,collectionPath:a,documentId:c,collectionGroup:s.mutation.key.getCollectionGroup(),largestBatchId:s.largestBatchId,overlayMutation:Mi(r.ie,s.mutation)}}(this.yt,this.userId,t))}}function Kr(n){return we(n,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(){}ue(e,t){this.ce(e,t),t.ae()}ce(e,t){if("nullValue"in e)this.he(t,5);else if("booleanValue"in e)this.he(t,10),t.le(e.booleanValue?1:0);else if("integerValue"in e)this.he(t,15),t.le(ee(e.integerValue));else if("doubleValue"in e){const r=ee(e.doubleValue);isNaN(r)?this.he(t,13):(this.he(t,15),Di(r)?t.le(0):t.le(r))}else if("timestampValue"in e){const r=e.timestampValue;this.he(t,20),typeof r=="string"?t.fe(r):(t.fe(`${r.seconds||""}`),t.le(r.nanos||0))}else if("stringValue"in e)this.de(e.stringValue,t),this._e(t);else if("bytesValue"in e)this.he(t,30),t.we(Dn(e.bytesValue)),this._e(t);else if("referenceValue"in e)this.me(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.he(t,45),t.le(r.latitude||0),t.le(r.longitude||0)}else"mapValue"in e?sp(e)?this.he(t,Number.MAX_SAFE_INTEGER):(this.ge(e.mapValue,t),this._e(t)):"arrayValue"in e?(this.ye(e.arrayValue,t),this._e(t)):T()}de(e,t){this.he(t,25),this.pe(e,t)}pe(e,t){t.fe(e)}ge(e,t){const r=e.fields||{};this.he(t,55);for(const i of Object.keys(r))this.de(i,t),this.ce(r[i],t)}ye(e,t){const r=e.values||[];this.he(t,50);for(const i of r)this.ce(i,t)}me(e,t){this.he(t,37),I.fromName(e).path.forEach(r=>{this.he(t,60),this.pe(r,t)})}he(e,t){e.le(t)}_e(e){e.le(2)}}fn.Ie=new fn;function BS(n){if(n===0)return 8;let e=0;return n>>4==0&&(e+=4,n<<=4),n>>6==0&&(e+=2,n<<=2),n>>7==0&&(e+=1),e}function Hh(n){const e=64-function(t){let r=0;for(let i=0;i<8;++i){const s=BS(255&t[i]);if(r+=s,s!==8)break}return r}(n);return Math.ceil(e/8)}class qS{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Te(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ee(r.value),r=t.next();this.Ae()}Re(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.be(r.value),r=t.next();this.Pe()}ve(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ee(r);else if(r<2048)this.Ee(960|r>>>6),this.Ee(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ee(480|r>>>12),this.Ee(128|63&r>>>6),this.Ee(128|63&r);else{const i=t.codePointAt(0);this.Ee(240|i>>>18),this.Ee(128|63&i>>>12),this.Ee(128|63&i>>>6),this.Ee(128|63&i)}}this.Ae()}Ve(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.be(r);else if(r<2048)this.be(960|r>>>6),this.be(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.be(480|r>>>12),this.be(128|63&r>>>6),this.be(128|63&r);else{const i=t.codePointAt(0);this.be(240|i>>>18),this.be(128|63&i>>>12),this.be(128|63&i>>>6),this.be(128|63&i)}}this.Pe()}Se(e){const t=this.De(e),r=Hh(t);this.Ce(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}xe(e){const t=this.De(e),r=Hh(t);this.Ce(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}Ne(){this.ke(255),this.ke(255)}Oe(){this.Me(255),this.Me(255)}reset(){this.position=0}seed(e){this.Ce(e.length),this.buffer.set(e,this.position),this.position+=e.length}Fe(){return this.buffer.slice(0,this.position)}De(e){const t=function(i){const s=new DataView(new ArrayBuffer(8));return s.setFloat64(0,i,!1),new Uint8Array(s.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}Ee(e){const t=255&e;t===0?(this.ke(0),this.ke(255)):t===255?(this.ke(255),this.ke(0)):this.ke(t)}be(e){const t=255&e;t===0?(this.Me(0),this.Me(255)):t===255?(this.Me(255),this.Me(0)):this.Me(e)}Ae(){this.ke(0),this.ke(1)}Pe(){this.Me(0),this.Me(1)}ke(e){this.Ce(1),this.buffer[this.position++]=e}Me(e){this.Ce(1),this.buffer[this.position++]=~e}Ce(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class $S{constructor(e){this.$e=e}we(e){this.$e.Te(e)}fe(e){this.$e.ve(e)}le(e){this.$e.Se(e)}ae(){this.$e.Ne()}}class zS{constructor(e){this.$e=e}we(e){this.$e.Re(e)}fe(e){this.$e.Ve(e)}le(e){this.$e.xe(e)}ae(){this.$e.Oe()}}class Hr{constructor(){this.$e=new qS,this.Be=new $S(this.$e),this.Le=new zS(this.$e)}seed(e){this.$e.seed(e)}qe(e){return e===0?this.Be:this.Le}Fe(){return this.$e.Fe()}reset(){this.$e.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,t,r,i){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=i}Ue(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new mn(this.indexId,this.documentKey,this.arrayValue,r)}}function Pt(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=Qh(n.arrayValue,e.arrayValue),t!==0?t:(t=Qh(n.directionalValue,e.directionalValue),t!==0?t:I.comparator(n.documentKey,e.documentKey)))}function Qh(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ke=e.orderBy,this.Ge=[];for(const t of e.filters){const r=t;r.isInequality()?this.Qe=r:this.Ge.push(r)}}je(e){S(e.collectionGroup===this.collectionId);const t=ac(e);if(t!==void 0&&!this.We(t))return!1;const r=ln(e);let i=0,s=0;for(;i<r.length&&this.We(r[i]);++i);if(i===r.length)return!0;if(this.Qe!==void 0){const o=r[i];if(!this.ze(this.Qe,o)||!this.He(this.Ke[s++],o))return!1;++i}for(;i<r.length;++i){const o=r[i];if(s>=this.Ke.length||!this.He(this.Ke[s++],o))return!1}return!0}We(e){for(const t of this.Ge)if(this.ze(t,e))return!0;return!1}ze(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}He(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zp(n){var e,t;if(S(n instanceof O||n instanceof $),n instanceof O){if(n instanceof mp){const i=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>O.create(n.field,"==",s)))||[];return $.create(i,"or")}return n}const r=n.filters.map(i=>Zp(i));return $.create(r,n.op)}function GS(n){if(n.getFilters().length===0)return[];const e=wc(Zp(n));return S(eg(e)),yc(e)||vc(e)?[e]:e.getFilters()}function yc(n){return n instanceof O}function vc(n){return n instanceof $&&ap(n)}function eg(n){return yc(n)||vc(n)||function(e){if(e instanceof $&&lc(e)){for(const t of e.getFilters())if(!yc(t)&&!vc(t))return!1;return!0}return!1}(n)}function wc(n){if(S(n instanceof O||n instanceof $),n instanceof O)return n;if(n.filters.length===1)return wc(n.filters[0]);const e=n.filters.map(r=>wc(r));let t=$.create(e,n.op);return t=io(t),eg(t)?t:(S(t instanceof $),S(mr(t)),S(t.filters.length>1),t.filters.reduce((r,i)=>Ru(r,i)))}function Ru(n,e){let t;return S(n instanceof O||n instanceof $),S(e instanceof O||e instanceof $),t=n instanceof O?e instanceof O?function(r,i){return $.create([r,i],"and")}(n,e):Yh(n,e):e instanceof O?Yh(e,n):function(r,i){if(S(r.filters.length>0&&i.filters.length>0),mr(r)&&mr(i))return hp(r,i.getFilters());const s=lc(r)?r:i,o=lc(r)?i:r,a=s.filters.map(c=>Ru(c,o));return $.create(a,"or")}(n,e),io(t)}function Yh(n,e){if(mr(e))return hp(e,n.getFilters());{const t=e.filters.map(r=>Ru(n,r));return $.create(t,"or")}}function io(n){if(S(n instanceof O||n instanceof $),n instanceof O)return n;const e=n.getFilters();if(e.length===1)return io(e[0]);if(cp(n))return n;const t=e.map(i=>io(i)),r=[];return t.forEach(i=>{i instanceof O?r.push(i):i instanceof $&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:$.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(){this.Je=new xu}addToCollectionParentIndex(e,t){return this.Je.add(t),f.resolve()}getCollectionParents(e,t){return f.resolve(this.Je.getEntries(t))}addFieldIndex(e,t){return f.resolve()}deleteFieldIndex(e,t){return f.resolve()}getDocumentsMatchingTarget(e,t){return f.resolve(null)}getIndexType(e,t){return f.resolve(0)}getFieldIndexes(e,t){return f.resolve([])}getNextCollectionGroupToUpdate(e){return f.resolve(null)}getMinOffset(e,t){return f.resolve(Ke.min())}getMinOffsetFromCollectionGroup(e,t){return f.resolve(Ke.min())}updateCollectionGroup(e,t,r){return f.resolve()}updateIndexEntries(e,t){return f.resolve()}}class xu{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new z(F.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new z(F.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs=new Uint8Array(0);class KS{constructor(e,t){this.user=e,this.databaseId=t,this.Ye=new xu,this.Xe=new sn(r=>xn(r),(r,i)=>ts(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Ye.has(t)){const r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.Ye.add(t)});const s={collectionId:r,parent:Le(i)};return Xh(e).put(s)}return f.resolve()}getCollectionParents(e,t){const r=[],i=IDBKeyRange.bound([t,""],[Ym(t),""],!1,!0);return Xh(e).W(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;r.push(ut(o.parent))}return r})}addFieldIndex(e,t){const r=Ts(e),i=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(t);delete i.indexId;const s=r.add(i);if(t.indexState){const o=Yr(e);return s.next(a=>{o.put(Gh(a,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const r=Ts(e),i=Yr(e),s=Qr(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){const r=Qr(e);let i=!0;const s=new Map;return f.forEach(this.Ze(t),o=>this.tn(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=x();const a=[];return f.forEach(s,(c,u)=>{var l;v("IndexedDbIndexManager",`Using index ${l=c,`id=${l.indexId}|cg=${l.collectionGroup}|f=${l.fields.map(M=>`${M.fieldPath}:${M.kind}`).join(",")}`} to execute ${xn(t)}`);const h=function(M,ie){const H=ac(ie);if(H===void 0)return null;for(const j of to(M,H.fieldPath))switch(j.op){case"array-contains-any":return j.value.arrayValue.values||[];case"array-contains":return[j.value]}return null}(u,c),d=function(M,ie){const H=new Map;for(const j of ln(ie))for(const ce of to(M,j.fieldPath))switch(ce.op){case"==":case"in":H.set(j.fieldPath.canonicalString(),ce.value);break;case"not-in":case"!=":return H.set(j.fieldPath.canonicalString(),ce.value),Array.from(H.values())}return null}(u,c),m=function(M,ie){const H=[];let j=!0;for(const ce of ln(ie)){const tt=ce.kind===0?Nh(M,ce.fieldPath,M.startAt):Rh(M,ce.fieldPath,M.startAt);H.push(tt.value),j&&(j=tt.inclusive)}return new Qt(H,j)}(u,c),g=function(M,ie){const H=[];let j=!0;for(const ce of ln(ie)){const tt=ce.kind===0?Rh(M,ce.fieldPath,M.endAt):Nh(M,ce.fieldPath,M.endAt);H.push(tt.value),j&&(j=tt.inclusive)}return new Qt(H,j)}(u,c),b=this.en(c,u,m),D=this.en(c,u,g),B=this.nn(c,u,d),q=this.sn(c.indexId,h,b,m.inclusive,D,g.inclusive,B);return f.forEach(q,M=>r.J(M,t.limit).next(ie=>{ie.forEach(H=>{const j=I.fromSegments(H.documentKey);o.has(j)||(o=o.add(j),a.push(j))})}))}).next(()=>a)}return f.resolve(null)})}Ze(e){let t=this.Xe.get(e);return t||(e.filters.length===0?t=[e]:t=GS($.create(e.filters,"and")).map(r=>hc(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.Xe.set(e,t),t)}sn(e,t,r,i,s,o,a){const c=(t!=null?t.length:1)*Math.max(r.length,s.length),u=c/(t!=null?t.length:1),l=[];for(let h=0;h<c;++h){const d=t?this.rn(t[h/u]):bs,m=this.on(e,d,r[h%u],i),g=this.un(e,d,s[h%u],o),b=a.map(D=>this.on(e,d,D,!0));l.push(...this.createRange(m,g,b))}return l}on(e,t,r,i){const s=new mn(e,I.empty(),t,r);return i?s:s.Ue()}un(e,t,r,i){const s=new mn(e,I.empty(),t,r);return i?s.Ue():s}tn(e,t){const r=new jS(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.je(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let r=2;const i=this.Ze(t);return f.forEach(i,s=>this.tn(e,s).next(o=>{o?r!==0&&o.fields.length<function(a){let c=new z(oe.comparator),u=!1;for(const l of a.filters)for(const h of l.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?u=!0:c=c.add(h.field));for(const l of a.orderBy)l.field.isKeyField()||(c=c.add(l.field));return c.size+(u?1:0)}(s)&&(r=1):r=0})).next(()=>function(s){return s.limit!==null}(t)&&i.length>1&&r===2?1:r)}cn(e,t){const r=new Hr;for(const i of ln(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=r.qe(i.kind);fn.Ie.ue(s,o)}return r.Fe()}rn(e){const t=new Hr;return fn.Ie.ue(e,t.qe(0)),t.Fe()}an(e,t){const r=new Hr;return fn.Ie.ue(Rn(this.databaseId,t),r.qe(function(i){const s=ln(i);return s.length===0?0:s[s.length-1].kind}(e))),r.Fe()}nn(e,t,r){if(r===null)return[];let i=[];i.push(new Hr);let s=0;for(const o of ln(e)){const a=r[s++];for(const c of i)if(this.hn(t,o.fieldPath)&&xi(a))i=this.ln(i,o,a);else{const u=c.qe(o.kind);fn.Ie.ue(a,u)}}return this.fn(i)}en(e,t,r){return this.nn(e,t,r.position)}fn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].Fe();return t}ln(e,t,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const c=new Hr;c.seed(a.Fe()),fn.Ie.ue(o,c.qe(t.kind)),s.push(c)}return s}hn(e,t){return!!e.filters.find(r=>r instanceof O&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=Ts(e),i=Yr(e);return(t?r.W("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.W()).next(s=>{const o=[];return f.forEach(s,a=>i.get([a.indexId,this.uid]).next(c=>{o.push(function(u,l){const h=l?new Zs(l.sequenceNumber,new Ke(Ln(l.readTime),new I(ut(l.documentKey)),l.largestBatchId)):Zs.empty(),d=u.fields.map(([m,g])=>new N0(oe.fromServerFormat(m),g));return new Xm(u.indexId,u.collectionGroup,d,h)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:R(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const i=Ts(e),s=Yr(e);return this.dn(e).next(o=>i.W("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>f.forEach(a,c=>s.put(Gh(c.indexId,this.user,o,r)))))}updateIndexEntries(e,t){const r=new Map;return f.forEach(t,(i,s)=>{const o=r.get(i.collectionGroup);return(o?f.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),f.forEach(a,c=>this._n(e,i,c).next(u=>{const l=this.wn(s,c);return u.isEqual(l)?f.resolve():this.mn(e,s,c,u,l)}))))})}gn(e,t,r,i){return Qr(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.an(r,t.key),documentKey:t.key.path.toArray()})}yn(e,t,r,i){return Qr(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.an(r,t.key),t.key.path.toArray()])}_n(e,t,r){const i=Qr(e);let s=new z(Pt);return i.Z({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.an(r,t)])},(o,a)=>{s=s.add(new mn(r.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>s)}wn(e,t){let r=new z(Pt);const i=this.cn(t,e);if(i==null)return r;const s=ac(t);if(s!=null){const o=e.data.field(s.fieldPath);if(xi(o))for(const a of o.arrayValue.values||[])r=r.add(new mn(t.indexId,e.key,this.rn(a),i))}else r=r.add(new mn(t.indexId,e.key,bs,i));return r}mn(e,t,r,i,s){v("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(a,c,u,l,h){const d=a.getIterator(),m=c.getIterator();let g=Yn(d),b=Yn(m);for(;g||b;){let D=!1,B=!1;if(g&&b){const q=u(g,b);q<0?B=!0:q>0&&(D=!0)}else g!=null?B=!0:D=!0;D?(l(b),b=Yn(m)):B?(h(g),g=Yn(d)):(g=Yn(d),b=Yn(m))}}(i,s,Pt,a=>{o.push(this.gn(e,t,r,a))},a=>{o.push(this.yn(e,t,r,a))}),f.waitFor(o)}dn(e){let t=1;return Yr(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,a)=>Pt(o,a)).filter((o,a,c)=>!a||Pt(o,c[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Pt(o,e),c=Pt(o,t);if(a===0)i[0]=e.Ue();else if(a>0&&c<0)i.push(o),i.push(o.Ue());else if(c>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.pn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,bs,[]],c=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,bs,[]];s.push(IDBKeyRange.bound(a,c))}return s}pn(e,t){return Pt(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Jh)}getMinOffset(e,t){return f.mapArray(this.Ze(t),r=>this.tn(e,r).next(i=>i||T())).next(Jh)}}function Xh(n){return we(n,"collectionParents")}function Qr(n){return we(n,"indexEntries")}function Ts(n){return we(n,"indexConfiguration")}function Yr(n){return we(n,"indexState")}function Jh(n){S(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;wu(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new Ke(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Ue{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Ue(e,Ue.DEFAULT_COLLECTION_PERCENTILE,Ue.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(n,e,t){const r=n.store("mutations"),i=n.store("documentMutations"),s=[],o=IDBKeyRange.only(t.batchId);let a=0;const c=r.Z({range:o},(l,h,d)=>(a++,d.delete()));s.push(c.next(()=>{S(a===1)}));const u=[];for(const l of t.mutations){const h=Kp(e,l.key.path,t.batchId);s.push(i.delete(h)),u.push(l.key)}return f.waitFor(s).next(()=>u)}function so(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw T();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ue.DEFAULT_COLLECTION_PERCENTILE=10,Ue.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ue.DEFAULT=new Ue(41943040,Ue.DEFAULT_COLLECTION_PERCENTILE,Ue.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ue.DISABLED=new Ue(-1,0,0);class Wo{constructor(e,t,r,i){this.userId=e,this.yt=t,this.indexManager=r,this.referenceDelegate=i,this.In={}}static re(e,t,r,i){S(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Wo(s,t,r,i)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Ot(e).Z({index:"userMutationsIndex",range:r},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,i){const s=er(e),o=Ot(e);return o.add({}).next(a=>{S(typeof a=="number");const c=new Au(a,t,r,i),u=function(d,m,g){const b=g.baseMutations.map(B=>Mi(d.ie,B)),D=g.mutations.map(B=>Mi(d.ie,B));return{userId:m,batchId:g.batchId,localWriteTimeMs:g.localWriteTime.toMillis(),baseMutations:b,mutations:D}}(this.yt,this.userId,c),l=[];let h=new z((d,m)=>R(d.canonicalString(),m.canonicalString()));for(const d of i){const m=Kp(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(u)),l.push(s.put(m,_S))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.In[a]=c.keys()}),f.waitFor(l).next(()=>c)})}lookupMutationBatch(e,t){return Ot(e).get(t).next(r=>r?(S(r.userId===this.userId),dn(this.yt,r)):null)}Tn(e,t){return this.In[t]?f.resolve(this.In[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const i=r.keys();return this.In[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Ot(e).Z({index:"userMutationsIndex",range:i},(o,a,c)=>{a.userId===this.userId&&(S(a.batchId>=r),s=dn(this.yt,a)),c.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Ot(e).Z({index:"userMutationsIndex",range:t,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Ot(e).W("userMutationsIndex",t).next(r=>r.map(i=>dn(this.yt,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=Ls(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return er(e).Z({range:i},(o,a,c)=>{const[u,l,h]=o,d=ut(l);if(u===this.userId&&t.path.isEqual(d))return Ot(e).get(h).next(m=>{if(!m)throw T();S(m.userId===this.userId),s.push(dn(this.yt,m))});c.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new z(R);const i=[];return t.forEach(s=>{const o=Ls(this.userId,s.path),a=IDBKeyRange.lowerBound(o),c=er(e).Z({range:a},(u,l,h)=>{const[d,m,g]=u,b=ut(m);d===this.userId&&s.path.isEqual(b)?r=r.add(g):h.done()});i.push(c)}),f.waitFor(i).next(()=>this.En(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1,s=Ls(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new z(R);return er(e).Z({range:o},(c,u,l)=>{const[h,d,m]=c,g=ut(d);h===this.userId&&r.isPrefixOf(g)?g.length===i&&(a=a.add(m)):l.done()}).next(()=>this.En(e,a))}En(e,t){const r=[],i=[];return t.forEach(s=>{i.push(Ot(e).get(s).next(o=>{if(o===null)throw T();S(o.userId===this.userId),r.push(dn(this.yt,o))}))}),f.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return tg(e.se,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.An(t.batchId)}),f.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}An(e){delete this.In[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return f.resolve();const r=IDBKeyRange.lowerBound([this.userId]),i=[];return er(e).Z({range:r},(s,o,a)=>{if(s[0]===this.userId){const c=ut(s[1]);i.push(c)}else a.done()}).next(()=>{S(i.length===0)})})}containsKey(e,t){return ng(e,this.userId,t)}Rn(e){return rg(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function ng(n,e,t){const r=Ls(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return er(n).Z({range:s,X:!0},(a,c,u)=>{const[l,h,d]=a;l===e&&h===i&&(o=!0),u.done()}).next(()=>o)}function Ot(n){return we(n,"mutations")}function er(n){return we(n,"documentMutations")}function rg(n){return we(n,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Fn(0)}static vn(){return new Fn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(e,t){this.referenceDelegate=e,this.yt=t}allocateTargetId(e){return this.Vn(e).next(t=>{const r=new Fn(t.highestTargetId);return t.highestTargetId=r.next(),this.Sn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Vn(e).next(t=>A.fromTimestamp(new X(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Vn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.Vn(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.Sn(e,i)))}addTargetData(e,t){return this.Dn(e,t).next(()=>this.Vn(e).next(r=>(r.targetCount+=1,this.Cn(t,r),this.Sn(e,r))))}updateTargetData(e,t){return this.Dn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Xn(e).delete(t.targetId)).next(()=>this.Vn(e)).next(r=>(S(r.targetCount>0),r.targetCount-=1,this.Sn(e,r)))}removeTargets(e,t,r){let i=0;const s=[];return Xn(e).Z((o,a)=>{const c=ii(a);c.sequenceNumber<=t&&r.get(c.targetId)===null&&(i++,s.push(this.removeTargetData(e,c)))}).next(()=>f.waitFor(s)).next(()=>i)}forEachTarget(e,t){return Xn(e).Z((r,i)=>{const s=ii(i);t(s)})}Vn(e){return ed(e).get("targetGlobalKey").next(t=>(S(t!==null),t))}Sn(e,t){return ed(e).put("targetGlobalKey",t)}Dn(e,t){return Xn(e).put(Jp(this.yt,t))}Cn(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Vn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=xn(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Xn(e).Z({range:i,index:"queryTargetsIndex"},(o,a,c)=>{const u=ii(a);ts(t,u.target)&&(s=u,c.done())}).next(()=>s)}addMatchingKeys(e,t,r){const i=[],s=Lt(e);return t.forEach(o=>{const a=Le(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),f.waitFor(i)}removeMatchingKeys(e,t,r){const i=Lt(e);return f.forEach(t,s=>{const o=Le(s.path);return f.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,t){const r=Lt(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),i=Lt(e);let s=x();return i.Z({range:r,X:!0},(o,a,c)=>{const u=ut(o[1]),l=new I(u);s=s.add(l)}).next(()=>s)}containsKey(e,t){const r=Le(t.path),i=IDBKeyRange.bound([r],[Ym(r)],!1,!0);let s=0;return Lt(e).Z({index:"documentTargetsIndex",X:!0,range:i},([o,a],c,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}ne(e,t){return Xn(e).get(t).next(r=>r?ii(r):null)}}function Xn(n){return we(n,"targets")}function ed(n){return we(n,"targetGlobal")}function Lt(n){return we(n,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td([n,e],[t,r]){const i=R(n,t);return i===0?R(e,r):i}class QS{constructor(e){this.xn=e,this.buffer=new z(td),this.Nn=0}kn(){return++this.Nn}On(e){const t=[e,this.kn()];if(this.buffer.size<this.xn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();td(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class YS{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Mn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Fn(6e4)}stop(){this.Mn&&(this.Mn.cancel(),this.Mn=null)}get started(){return this.Mn!==null}Fn(e){v("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Mn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Mn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){rn(t)?v("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await nn(t)}await this.Fn(3e5)})}}class XS{constructor(e,t){this.$n=e,this.params=t}calculateTargetCount(e,t){return this.$n.Bn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return f.resolve(Be.at);const r=new QS(t);return this.$n.forEachTarget(e,i=>r.On(i.sequenceNumber)).next(()=>this.$n.Ln(e,i=>r.On(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.$n.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.$n.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(v("LruGarbageCollector","Garbage collection skipped; disabled"),f.resolve(Zh)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(v("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Zh):this.qn(e,t))}getCacheSize(e){return this.$n.getCacheSize(e)}qn(e,t){let r,i,s,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(v("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,t))).next(h=>(s=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),oc()<=V.DEBUG&&v("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-l}ms`),f.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e,t){this.db=e,this.garbageCollector=function(r,i){return new XS(r,i)}(this,t)}Bn(e){const t=this.Un(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}Un(e){let t=0;return this.Ln(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Ln(e,t){return this.Kn(e,(r,i)=>t(i))}addReference(e,t,r){return Es(e,r)}removeReference(e,t,r){return Es(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return Es(e,t)}Gn(e,t){return function(r,i){let s=!1;return rg(r).tt(o=>ng(r,o,i).next(a=>(a&&(s=!0),f.resolve(!a)))).next(()=>s)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Kn(e,(o,a)=>{if(a<=t){const c=this.Gn(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,A.min()),Lt(e).delete([0,Le(o.path)])))});i.push(c)}}).next(()=>f.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return Es(e,t)}Kn(e,t){const r=Lt(e);let i,s=Be.at;return r.Z({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:u})=>{o===0?(s!==Be.at&&t(new I(ut(i)),s),s=u,i=c):s=Be.at}).next(()=>{s!==Be.at&&t(new I(ut(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Es(n,e){return Lt(n).put(function(t,r){return{targetId:0,path:Le(t.path),sequenceNumber:r}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(){this.changes=new sn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,W.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?f.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(e){this.yt=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return cn(e).put(r)}removeEntry(e,t,r){return cn(e).delete(function(i,s){const o=i.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],ro(s),o[o.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.Qn(e,r)))}getEntry(e,t){let r=W.newInvalidDocument(t);return cn(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Xr(t))},(i,s)=>{r=this.jn(t,s)}).next(()=>r)}Wn(e,t){let r={size:0,document:W.newInvalidDocument(t)};return cn(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Xr(t))},(i,s)=>{r={document:this.jn(t,s),size:so(s)}}).next(()=>r)}getEntries(e,t){let r=qe();return this.zn(e,t,(i,s)=>{const o=this.jn(i,s);r=r.insert(i,o)}).next(()=>r)}Hn(e,t){let r=qe(),i=new ne(I.comparator);return this.zn(e,t,(s,o)=>{const a=this.jn(s,o);r=r.insert(s,a),i=i.insert(s,so(o))}).next(()=>({documents:r,Jn:i}))}zn(e,t,r){if(t.isEmpty())return f.resolve();let i=new z(id);t.forEach(c=>i=i.add(c));const s=IDBKeyRange.bound(Xr(i.first()),Xr(i.last())),o=i.getIterator();let a=o.getNext();return cn(e).Z({index:"documentKeyIndex",range:s},(c,u,l)=>{const h=I.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&id(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?l.j(Xr(a)):l.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getAllFromCollection(e,t,r){const i=[t.popLast().toArray(),t.lastSegment(),ro(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],s=[t.popLast().toArray(),t.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return cn(e).W(IDBKeyRange.bound(i,s,!0)).next(o=>{let a=qe();for(const c of o){const u=this.jn(I.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);a=a.insert(u.key,u)}return a})}getAllFromCollectionGroup(e,t,r,i){let s=qe();const o=rd(t,r),a=rd(t,Ke.max());return cn(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,u,l)=>{const h=this.jn(I.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(h.key,h),s.size===i&&l.done()}).next(()=>s)}newChangeBuffer(e){return new ek(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return nd(e).get("remoteDocumentGlobalKey").next(t=>(S(!!t),t))}Qn(e,t){return nd(e).put("remoteDocumentGlobalKey",t)}jn(e,t){if(t){const r=VS(this.yt,t);if(!(r.isNoDocument()&&r.version.isEqual(A.min())))return r}return W.newInvalidDocument(e)}}function sg(n){return new ZS(n)}class ek extends ig{constructor(e,t){super(),this.Yn=e,this.trackRemovals=t,this.Xn=new sn(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const t=[];let r=0,i=new z((s,o)=>R(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.Xn.get(s);if(t.push(this.Yn.removeEntry(e,s,a.readTime)),o.isValidDocument()){const c=zh(this.Yn.yt,o);i=i.add(s.path.popLast()),r+=so(c)-a.size,t.push(this.Yn.addEntry(e,s,c))}else if(r-=a.size,this.trackRemovals){const c=zh(this.Yn.yt,o.convertToNoDocument(A.min()));t.push(this.Yn.addEntry(e,s,c))}}),i.forEach(s=>{t.push(this.Yn.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.Yn.updateMetadata(e,r)),f.waitFor(t)}getFromCache(e,t){return this.Yn.Wn(e,t).next(r=>(this.Xn.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.Yn.Hn(e,t).next(({documents:r,Jn:i})=>(i.forEach((s,o)=>{this.Xn.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function nd(n){return we(n,"remoteDocumentGlobal")}function cn(n){return we(n,"remoteDocumentsV14")}function Xr(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function rd(n,e){const t=e.documentKey.path.toArray();return[n,ro(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function id(n,e){const t=n.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=R(t[s],r[s]),i)return i;return i=R(t.length,r.length),i||(i=R(t[t.length-2],r[r.length-2]),i||R(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&hi(r.mutation,i,Ge.empty(),X.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,x()).next(()=>r))}getLocalViewOfDocuments(e,t,r=x()){const i=ct();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=ri();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=ct();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,x()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,i){let s=qe();const o=di(),a=di();return t.forEach((c,u)=>{const l=r.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof Nt)?s=s.insert(u.key,u):l!==void 0&&(o.set(u.key,l.mutation.getFieldMask()),hi(l.mutation,u,l.mutation.getFieldMask(),X.now()))}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,l)=>o.set(u,l)),t.forEach((u,l)=>{var h;return a.set(u,new tk(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const r=di();let i=new ne((o,a)=>o-a),s=x();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let l=r.get(c)||Ge.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(i.get(a.batchId)||x()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=Pp();l.forEach(d=>{if(!s.has(d)){const m=Ap(t.get(d),r.get(d));m!==null&&h.set(d,m),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return f.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r){return function(i){return I.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Tu(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r):this.getDocumentsMatchingCollectionQuery(e,t,r)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):f.resolve(ct());let a=-1,c=s;return o.next(u=>f.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?f.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,x())).next(l=>({batchId:a,changes:xp(l)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new I(t)).next(r=>{let i=ri();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r){const i=t.collectionGroup;let s=ri();return this.indexManager.getCollectionParents(e,i).next(o=>f.forEach(o,a=>{const c=function(u,l){return new Dt(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(t,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(u=>{u.forEach((l,h)=>{s=s.insert(l,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,t.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId))).next(s=>{s.forEach((a,c)=>{const u=c.getKey();i.get(u)===null&&(i=i.insert(u,W.newInvalidDocument(u)))});let o=ri();return i.forEach((a,c)=>{const u=s.get(a);u!==void 0&&hi(u.mutation,c,Ge.empty(),X.now()),Eu(t,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,t){return f.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var r;return this.Zn.set(t.id,{id:(r=t).id,version:r.version,createTime:ae(r.createTime)}),f.resolve()}getNamedQuery(e,t){return f.resolve(this.ts.get(t))}saveNamedQuery(e,t){return this.ts.set(t.name,function(r){return{name:r.name,query:Nu(r.bundledQuery),readTime:ae(r.readTime)}}(t)),f.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(){this.overlays=new ne(I.comparator),this.es=new Map}getOverlay(e,t){return f.resolve(this.overlays.get(t))}getOverlays(e,t){const r=ct();return f.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.oe(e,t,s)}),f.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),f.resolve()}getOverlaysForCollection(e,t,r){const i=ct(),s=t.length+1,o=new I(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return f.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new ne((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let l=s.get(u.largestBatchId);l===null&&(l=ct(),s=s.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=ct(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return f.resolve(a)}oe(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Du(t,r));let s=this.es.get(t);s===void 0&&(s=x(),this.es.set(t,s)),this.es.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(){this.ns=new z(fe.ss),this.rs=new z(fe.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,t){const r=new fe(e,t);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.cs(new fe(e,t))}hs(e,t){e.forEach(r=>this.removeReference(r,t))}ls(e){const t=new I(new F([])),r=new fe(t,e),i=new fe(t,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const t=new I(new F([])),r=new fe(t,e),i=new fe(t,e+1);let s=x();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new fe(e,0),r=this.ns.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class fe{constructor(e,t){this.key=e,this._s=t}static ss(e,t){return I.comparator(e.key,t.key)||R(e._s,t._s)}static os(e,t){return R(e._s,t._s)||I.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this.gs=new z(fe.ss)}checkEmpty(e){return f.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Au(s,t,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new fe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return f.resolve(o)}lookupMutationBatch(e,t){return f.resolve(this.ys(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.ps(r),s=i<0?0:i;return f.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return f.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return f.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new fe(t,0),i=new fe(t,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),f.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new z(R);return t.forEach(i=>{const s=new fe(i,0),o=new fe(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),f.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;I.isDocumentKey(s)||(s=s.child(""));const o=new fe(new I(s),0);let a=new z(R);return this.gs.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c._s)),!0)},o),f.resolve(this.Is(a))}Is(e){const t=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){S(this.Ts(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return f.forEach(t.mutations,i=>{const s=new fe(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,t){const r=new fe(t,0),i=this.gs.firstAfterOrEqual(r);return f.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,f.resolve()}Ts(e,t){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(e){this.Es=e,this.docs=new ne(I.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return f.resolve(r?r.document.mutableCopy():W.newInvalidDocument(t))}getEntries(e,t){let r=qe();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():W.newInvalidDocument(i))}),f.resolve(r)}getAllFromCollection(e,t,r){let i=qe();const s=new I(t.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!t.isPrefixOf(a.path))break;a.path.length>t.length+1||wu(Zm(c),r)<=0||(i=i.insert(c.key,c.mutableCopy()))}return f.resolve(i)}getAllFromCollectionGroup(e,t,r,i){T()}As(e,t){return f.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new ok(this)}getSize(e){return f.resolve(this.size)}}class ok extends ig{constructor(e){super(),this.Yn=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),f.waitFor(t)}getFromCache(e,t){return this.Yn.getEntry(e,t)}getAllFromCache(e,t){return this.Yn.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(e){this.persistence=e,this.Rs=new sn(t=>xn(t),ts),this.lastRemoteSnapshotVersion=A.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Pu,this.targetCount=0,this.vs=Fn.Pn()}forEachTarget(e,t){return this.Rs.forEach((r,i)=>t(i)),f.resolve()}getLastRemoteSnapshotVersion(e){return f.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return f.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),f.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.bs&&(this.bs=t),f.resolve()}Dn(e){this.Rs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.vs=new Fn(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.Dn(t),this.targetCount+=1,f.resolve()}updateTargetData(e,t){return this.Dn(t),f.resolve()}removeTargetData(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,f.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),f.waitFor(s).next(()=>i)}getTargetCount(e){return f.resolve(this.targetCount)}getTargetData(e,t){const r=this.Rs.get(t)||null;return f.resolve(r)}addMatchingKeys(e,t,r){return this.Ps.us(t,r),f.resolve()}removeMatchingKeys(e,t,r){this.Ps.hs(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),f.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Ps.ls(t),f.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Ps.ds(t);return f.resolve(r)}containsKey(e,t){return f.resolve(this.Ps.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e,t){this.Vs={},this.overlays={},this.Ss=new Be(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new ak(this),this.indexManager=new WS,this.remoteDocumentCache=function(r){return new sk(r)}(r=>this.referenceDelegate.xs(r)),this.yt=new Xp(t),this.Ns=new nk(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new rk,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Vs[e.toKey()];return r||(r=new ik(t,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,t,r){v("MemoryPersistence","Starting transaction:",e);const i=new ck(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Os(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ms(e,t){return f.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,t)))}}class ck extends tp{constructor(e){super(),this.currentSequenceNumber=e}}class Ko{constructor(e){this.persistence=e,this.Fs=new Pu,this.$s=null}static Bs(e){return new Ko(e)}get Ls(){if(this.$s)return this.$s;throw T()}addReference(e,t,r){return this.Fs.addReference(r,t),this.Ls.delete(r.toString()),f.resolve()}removeReference(e,t,r){return this.Fs.removeReference(r,t),this.Ls.add(r.toString()),f.resolve()}markPotentiallyOrphaned(e,t){return this.Ls.add(t.toString()),f.resolve()}removeTarget(e,t){this.Fs.ls(t.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}ks(){this.$s=new Set}Os(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return f.forEach(this.Ls,r=>{const i=I.fromPath(r);return this.qs(e,i).next(s=>{s||t.removeEntry(i,A.min())})}).next(()=>(this.$s=null,t.apply(e)))}updateLimboDocument(e,t){return this.qs(e,t).next(r=>{r?this.Ls.delete(t.toString()):this.Ls.add(t.toString())})}xs(e){return 0}qs(e,t){return f.or([()=>f.resolve(this.Fs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ms(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(e){this.yt=e}$(e,t,r,i){const s=new Bo("createOrUpgrade",t);r<1&&i>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",$h,{unique:!0}),a.createObjectStore("documentMutations")}(e),sd(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=f.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),sd(e)),o=o.next(()=>function(a){const c=a.store("targetGlobal"),u={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:A.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",u)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,c){return c.store("mutations").W().next(u=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",$h,{unique:!0});const l=c.store("mutations"),h=u.map(d=>l.put(d));return f.waitFor(h)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Us(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Ks(s)))),r<7&&i>=7&&(o=o.next(()=>this.Gs(s))),r<8&&i>=8&&(o=o.next(()=>this.Qs(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.js(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(a){const c=a.createObjectStore("documentOverlays",{keyPath:PS});c.createIndex("collectionPathOverlayIndex",OS,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",MS,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(a){const c=a.createObjectStore("remoteDocumentsV14",{keyPath:bS});c.createIndex("documentKeyIndex",TS),c.createIndex("collectionGroupIndex",ES)}(e)).next(()=>this.Ws(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.zs(e,s))),r<15&&i>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:DS}).createIndex("sequenceNumberIndex",NS,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:RS}).createIndex("documentKeyIndex",xS,{unique:!1})}(e))),o}Ks(e){let t=0;return e.store("remoteDocuments").Z((r,i)=>{t+=so(i)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Us(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.W().next(i=>f.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.W("userMutationsIndex",o).next(a=>f.forEach(a,c=>{S(c.userId===s.userId);const u=dn(this.yt,c);return tg(e,s.userId,u).next(()=>{})}))}))}Gs(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Z((o,a)=>{const c=new F(o),u=function(l){return[0,Le(l)]}(c);s.push(t.get(u).next(l=>l?f.resolve():(h=>t.put({targetId:0,path:Le(h),sequenceNumber:i.highestListenSequenceNumber}))(c)))}).next(()=>f.waitFor(s))})}Qs(e,t){e.createObjectStore("collectionParents",{keyPath:CS});const r=t.store("collectionParents"),i=new xu,s=o=>{if(i.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:Le(c)})}};return t.store("remoteDocuments").Z({X:!0},(o,a)=>{const c=new F(o);return s(c.popLast())}).next(()=>t.store("documentMutations").Z({X:!0},([o,a,c],u)=>{const l=ut(a);return s(l.popLast())}))}js(e){const t=e.store("targets");return t.Z((r,i)=>{const s=ii(i),o=Jp(this.yt,s);return t.put(o)})}Ws(e,t){const r=t.store("remoteDocuments"),i=[];return r.Z((s,o)=>{const a=t.store("remoteDocumentsV14"),c=(u=o,u.document?new I(F.fromString(u.document.name).popFirst(5)):u.noDocument?I.fromSegments(u.noDocument.path):u.unknownDocument?I.fromSegments(u.unknownDocument.path):T()).path.toArray();var u;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const l={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(l))}).next(()=>f.waitFor(i))}zs(e,t){const r=t.store("mutations"),i=sg(this.yt),s=new ag(Ko.Bs,this.yt.ie);return r.W().next(o=>{const a=new Map;return o.forEach(c=>{var u;let l=(u=a.get(c.userId))!==null&&u!==void 0?u:x();dn(this.yt,c).keys().forEach(h=>l=l.add(h)),a.set(c.userId,l)}),f.forEach(a,(c,u)=>{const l=new me(u),h=Go.re(this.yt,l),d=s.getIndexManager(l),m=Wo.re(l,this.yt,d,s.referenceDelegate);return new og(i,m,h,d).recalculateAndSaveOverlaysForDocumentKeys(new gc(t,Be.at),c).next()})})}}function sd(n){n.createObjectStore("targetDocuments",{keyPath:kS}).createIndex("documentTargetsIndex",AS,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",SS,{unique:!0}),n.createObjectStore("targetGlobal")}const Ma="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Ou{constructor(e,t,r,i,s,o,a,c,u,l,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.Hs=s,this.window=o,this.document=a,this.Js=u,this.Ys=l,this.Xs=h,this.Ss=null,this.Ds=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.ti=null,this.ei=null,this.ni=Number.NEGATIVE_INFINITY,this.si=d=>Promise.resolve(),!Ou.C())throw new y(p.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new JS(this,i),this.ii=t+"main",this.yt=new Xp(c),this.ri=new Je(this.ii,this.Xs,new uk(this.yt)),this.Cs=new HS(this.referenceDelegate,this.yt),this.remoteDocumentCache=sg(this.yt),this.Ns=new US,this.window&&this.window.localStorage?this.oi=this.window.localStorage:(this.oi=null,l===!1&&se("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ui().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new y(p.FAILED_PRECONDITION,Ma);return this.ci(),this.ai(),this.hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Cs.getHighestSequenceNumber(e))}).then(e=>{this.Ss=new Be(e,this.Js)}).then(()=>{this.Ds=!0}).catch(e=>(this.ri&&this.ri.close(),Promise.reject(e)))}li(e){return this.si=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Hs.enqueueAndForget(async()=>{this.started&&await this.ui()}))}ui(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Ss(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(e).next(t=>{t||(this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)))})}).next(()=>this.di(e)).next(t=>this.isPrimary&&!t?this._i(e).next(()=>!1):!!t&&this.wi(e).next(()=>!0))).catch(e=>{if(rn(e))return v("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return v("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Hs.enqueueRetryable(()=>this.si(e)),this.isPrimary=e})}fi(e){return Jr(e).get("owner").next(t=>f.resolve(this.mi(t)))}gi(e){return Ss(e).delete(this.clientId)}async yi(){if(this.isPrimary&&!this.pi(this.ni,18e5)){this.ni=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=we(t,"clientMetadata");return r.W().next(i=>{const s=this.Ii(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return f.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.oi)for(const t of e)this.oi.removeItem(this.Ti(t.clientId))}}hi(){this.ei=this.Hs.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ui().then(()=>this.yi()).then(()=>this.hi()))}mi(e){return!!e&&e.ownerId===this.clientId}di(e){return this.Ys?f.resolve(!0):Jr(e).get("owner").next(t=>{if(t!==null&&this.pi(t.leaseTimestampMs,5e3)&&!this.Ei(t.ownerId)){if(this.mi(t)&&this.networkEnabled)return!0;if(!this.mi(t)){if(!t.allowTabSynchronization)throw new y(p.FAILED_PRECONDITION,Ma);return!1}}return!(!this.networkEnabled||!this.inForeground)||Ss(e).W().next(r=>this.Ii(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&v("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Ds=!1,this.Ai(),this.ei&&(this.ei.cancel(),this.ei=null),this.Ri(),this.bi(),await this.ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new gc(e,Be.at);return this._i(t).next(()=>this.gi(t))}),this.ri.close(),this.Pi()}Ii(e,t){return e.filter(r=>this.pi(r.updateTimeMs,t)&&!this.Ei(r.clientId))}vi(){return this.runTransaction("getActiveClients","readonly",e=>Ss(e).W().next(t=>this.Ii(t,18e5).map(r=>r.clientId)))}get started(){return this.Ds}getMutationQueue(e,t){return Wo.re(e,this.yt,t,this.referenceDelegate)}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new KS(e,this.yt.ie.databaseId)}getDocumentOverlayCache(e){return Go.re(this.yt,e)}getBundleCache(){return this.Ns}runTransaction(e,t,r){v("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=(o=this.Xs)===15?FS:o===14?Yp:o===13?Qp:o===12?LS:o===11?Hp:void T();var o;let a;return this.ri.runTransaction(e,i,s,c=>(a=new gc(c,this.Ss?this.Ss.next():Be.at),t==="readwrite-primary"?this.fi(a).next(u=>!!u||this.di(a)).next(u=>{if(!u)throw se(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)),new y(p.FAILED_PRECONDITION,ep);return r(a)}).next(u=>this.wi(a).next(()=>u)):this.Vi(a).next(()=>r(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}Vi(e){return Jr(e).get("owner").next(t=>{if(t!==null&&this.pi(t.leaseTimestampMs,5e3)&&!this.Ei(t.ownerId)&&!this.mi(t)&&!(this.Ys||this.allowTabSynchronization&&t.allowTabSynchronization))throw new y(p.FAILED_PRECONDITION,Ma)})}wi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Jr(e).put("owner",t)}static C(){return Je.C()}_i(e){const t=Jr(e);return t.get("owner").next(r=>this.mi(r)?(v("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):f.resolve())}pi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(se(`Detected an update time that is in the future: ${e} > ${r}`),!1))}ci(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ti=()=>{this.Hs.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.ui()))},this.document.addEventListener("visibilitychange",this.ti),this.inForeground=this.document.visibilityState==="visible")}Ri(){this.ti&&(this.document.removeEventListener("visibilitychange",this.ti),this.ti=null)}ai(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Zs=()=>{this.Ai(),Gv()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Hs.enterRestrictedMode(!0),this.Hs.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Zs))}bi(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ei(e){var t;try{const r=((t=this.oi)===null||t===void 0?void 0:t.getItem(this.Ti(e)))!==null;return v("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return se("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Ai(){if(this.oi)try{this.oi.setItem(this.Ti(this.clientId),String(Date.now()))}catch(e){se("Failed to set zombie client id.",e)}}Pi(){if(this.oi)try{this.oi.removeItem(this.Ti(this.clientId))}catch{}}Ti(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Jr(n){return we(n,"owner")}function Ss(n){return we(n,"clientMetadata")}function Mu(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Si=r,this.Di=i}static Ci(e,t){let r=x(),i=x();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Lu(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(){this.xi=!1}initialize(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}getDocumentsMatchingQuery(e,t,r,i){return this.ki(e,t).next(s=>s||this.Oi(e,t,i,r)).next(s=>s||this.Mi(e,t))}ki(e,t){if(xh(t))return f.resolve(null);let r=$e(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=no(t,null,"F"),r=$e(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=x(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.Fi(t,a);return this.$i(t,u,o,c.readTime)?this.ki(e,no(t,null,"F")):this.Bi(e,u,t,c)}))})))}Oi(e,t,r,i){return xh(t)||i.isEqual(A.min())?this.Mi(e,t):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(t,s);return this.$i(t,o,r,i)?this.Mi(e,t):(oc()<=V.DEBUG&&v("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),fc(t)),this.Bi(e,o,t,Jm(i,-1)))})}Fi(e,t){let r=new z(wp(e));return t.forEach((i,s)=>{Eu(e,s)&&(r=r.add(s))}),r}$i(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mi(e,t){return oc()<=V.DEBUG&&v("QueryEngine","Using full collection scan to execute query:",fc(t)),this.Ni.getDocumentsMatchingQuery(e,t,Ke.min())}Bi(e,t,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lk{constructor(e,t,r,i){this.persistence=e,this.Li=t,this.yt=i,this.qi=new ne(R),this.Ui=new sn(s=>xn(s),ts),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new og(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.qi))}}function ug(n,e,t,r){return new lk(n,e,t,r)}async function lg(n,e){const t=_(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.Qi(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=x();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of s){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return t.localDocuments.getDocuments(r,c).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function hk(n,e){const t=_(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=f.resolve();return h.forEach(m=>{d=d.next(()=>u.getEntry(a,m)).next(g=>{const b=c.docVersions.get(m);S(b!==null),g.version.compareTo(b)<0&&(l.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),u.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=x();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function hg(n){const e=_(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Cs.getLastRemoteSnapshotVersion(t))}function dk(n,e){const t=_(n),r=e.snapshotVersion;let i=t.qi;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.Gi.newChangeBuffer({trackRemovals:!0});i=t.qi;const a=[];e.targetChanges.forEach((l,h)=>{const d=i.get(h);if(!d)return;a.push(t.Cs.removeMatchingKeys(s,l.removedDocuments,h).next(()=>t.Cs.addMatchingKeys(s,l.addedDocuments,h)));let m=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?m=m.withResumeToken(he.EMPTY_BYTE_STRING,A.min()).withLastLimboFreeSnapshotVersion(A.min()):l.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(l.resumeToken,r)),i=i.insert(h,m),function(g,b,D){return g.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(d,m,l)&&a.push(t.Cs.updateTargetData(s,m))});let c=qe(),u=x();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(dg(s,o,e.documentUpdates).next(l=>{c=l.Wi,u=l.zi})),!r.isEqual(A.min())){const l=t.Cs.getLastRemoteSnapshotVersion(s).next(h=>t.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return f.waitFor(a).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(t.qi=i,s))}function dg(n,e,t){let r=x(),i=x();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=qe();return t.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(A.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):v("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Wi:o,zi:i}})}function fk(n,e){const t=_(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function vr(n,e){const t=_(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Cs.getTargetData(r,e).next(s=>s?(i=s,f.resolve(i)):t.Cs.allocateTargetId(r).next(o=>(i=new qt(e,o,0,r.currentSequenceNumber),t.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.qi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.qi=t.qi.insert(r.targetId,r),t.Ui.set(e,r.targetId)),r})}async function wr(n,e,t){const r=_(n),i=r.qi.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!rn(o))throw o;v("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.qi=r.qi.remove(e),r.Ui.delete(i.target)}function oo(n,e,t){const r=_(n);let i=A.min(),s=x();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=_(a),h=l.Ui.get(u);return h!==void 0?f.resolve(l.qi.get(h)):l.Cs.getTargetData(c,u)}(r,o,$e(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,t?i:A.min(),t?s:x())).next(a=>(pg(r,vp(e),a),{documents:a,Hi:s})))}function fg(n,e){const t=_(n),r=_(t.Cs),i=t.qi.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>r.ne(s,e).next(o=>o?o.target:null))}function mg(n,e){const t=_(n),r=t.Ki.get(e)||A.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.Gi.getAllFromCollectionGroup(i,e,Jm(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(pg(t,e,i),i))}function pg(n,e,t){let r=n.Ki.get(e)||A.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.Ki.set(e,r)}async function mk(n,e,t,r){const i=_(n);let s=x(),o=qe();for(const u of t){const l=e.Ji(u.metadata.name);u.document&&(s=s.add(l));const h=e.Yi(u);h.setReadTime(e.Xi(u.metadata.readTime)),o=o.insert(l,h)}const a=i.Gi.newChangeBuffer({trackRemovals:!0}),c=await vr(i,function(u){return $e(xr(F.fromString(`__bundle__/docs/${u}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>dg(u,a,o).next(l=>(a.apply(u),l)).next(l=>i.Cs.removeMatchingKeysForTargetId(u,c.targetId).next(()=>i.Cs.addMatchingKeys(u,s,c.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,l.Wi,l.zi)).next(()=>l.Wi)))}async function pk(n,e,t=x()){const r=await vr(n,$e(Nu(e.bundledQuery))),i=_(n);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=ae(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Ns.saveNamedQuery(s,e);const a=r.withResumeToken(he.EMPTY_BYTE_STRING,o);return i.qi=i.qi.insert(a.targetId,a),i.Cs.updateTargetData(s,a).next(()=>i.Cs.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Cs.addMatchingKeys(s,t,r.targetId)).next(()=>i.Ns.saveNamedQuery(s,e))})}function od(n,e){return`firestore_clients_${n}_${e}`}function ad(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function La(n,e){return`firestore_targets_${n}_${e}`}class ao{constructor(e,t,r,i){this.user=e,this.batchId=t,this.state=r,this.error=i}static Zi(e,t,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new y(i.error.code,i.error.message))),o?new ao(e,t,i.state,s):(se("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class fi{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Zi(e,t){const r=JSON.parse(t);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new y(r.error.code,r.error.message))),s?new fi(e,r.state,i):(se("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class co{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Zi(e,t){const r=JSON.parse(t);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=jo();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=rp(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new co(e,s):(se("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Fu{constructor(e,t){this.clientId=e,this.onlineState=t}static Zi(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Fu(t.clientId,t.onlineState):(se("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Ic{constructor(){this.activeTargetIds=jo()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Fa{constructor(e,t,r,i,s){this.window=e,this.Hs=t,this.persistenceKey=r,this.sr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ir=this.rr.bind(this),this.ur=new ne(R),this.started=!1,this.cr=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ar=od(this.persistenceKey,this.sr),this.hr=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.ur=this.ur.insert(this.sr,new Ic),this.lr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.dr=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this._r=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.wr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.mr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.ir)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.vi();for(const r of e){if(r===this.sr)continue;const i=this.getItem(od(this.persistenceKey,r));if(i){const s=co.Zi(r,i);s&&(this.ur=this.ur.insert(s.clientId,s))}}this.gr();const t=this.storage.getItem(this.wr);if(t){const r=this.yr(t);r&&this.pr(r)}for(const r of this.cr)this.rr(r);this.cr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.hr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ir(this.ur)}isActiveQueryTarget(e){let t=!1;return this.ur.forEach((r,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Tr(e,"pending")}updateMutationState(e,t,r){this.Tr(e,t,r),this.Er(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(La(this.persistenceKey,e));if(r){const i=fi.Zi(e,r);i&&(t=i.state)}}return this.Ar.er(e),this.gr(),t}removeLocalQueryTarget(e){this.Ar.nr(e),this.gr()}isLocalQueryTarget(e){return this.Ar.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(La(this.persistenceKey,e))}updateQueryState(e,t,r){this.Rr(e,t,r)}handleUserChange(e,t,r){t.forEach(i=>{this.Er(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.br(e)}notifyBundleLoaded(e){this.Pr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ir),this.removeItem(this.ar),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return v("SharedClientState","READ",e,t),t}setItem(e,t){v("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){v("SharedClientState","REMOVE",e),this.storage.removeItem(e)}rr(e){const t=e;if(t.storageArea===this.storage){if(v("SharedClientState","EVENT",t.key,t.newValue),t.key===this.ar)return void se("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Hs.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.lr.test(t.key)){if(t.newValue==null){const r=this.vr(t.key);return this.Vr(r,null)}{const r=this.Sr(t.key,t.newValue);if(r)return this.Vr(r.clientId,r)}}else if(this.dr.test(t.key)){if(t.newValue!==null){const r=this.Dr(t.key,t.newValue);if(r)return this.Cr(r)}}else if(this._r.test(t.key)){if(t.newValue!==null){const r=this.Nr(t.key,t.newValue);if(r)return this.kr(r)}}else if(t.key===this.wr){if(t.newValue!==null){const r=this.yr(t.newValue);if(r)return this.pr(r)}}else if(t.key===this.hr){const r=function(i){let s=Be.at;if(i!=null)try{const o=JSON.parse(i);S(typeof o=="number"),s=o}catch(o){se("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(t.newValue);r!==Be.at&&this.sequenceNumberHandler(r)}else if(t.key===this.mr){const r=this.Or(t.newValue);await Promise.all(r.map(i=>this.syncEngine.Mr(i)))}}}else this.cr.push(t)})}}get Ar(){return this.ur.get(this.sr)}gr(){this.setItem(this.ar,this.Ar.tr())}Tr(e,t,r){const i=new ao(this.currentUser,e,t,r),s=ad(this.persistenceKey,this.currentUser,e);this.setItem(s,i.tr())}Er(e){const t=ad(this.persistenceKey,this.currentUser,e);this.removeItem(t)}br(e){const t={clientId:this.sr,onlineState:e};this.storage.setItem(this.wr,JSON.stringify(t))}Rr(e,t,r){const i=La(this.persistenceKey,e),s=new fi(e,t,r);this.setItem(i,s.tr())}Pr(e){const t=JSON.stringify(Array.from(e));this.setItem(this.mr,t)}vr(e){const t=this.lr.exec(e);return t?t[1]:null}Sr(e,t){const r=this.vr(e);return co.Zi(r,t)}Dr(e,t){const r=this.dr.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return ao.Zi(new me(s),i,t)}Nr(e,t){const r=this._r.exec(e),i=Number(r[1]);return fi.Zi(i,t)}yr(e){return Fu.Zi(e)}Or(e){return JSON.parse(e)}async Cr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Fr(e.batchId,e.state,e.error);v("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}kr(e){return this.syncEngine.$r(e.targetId,e.state,e.error)}Vr(e,t){const r=t?this.ur.insert(e,t):this.ur.remove(e),i=this.Ir(this.ur),s=this.Ir(r),o=[],a=[];return s.forEach(c=>{i.has(c)||o.push(c)}),i.forEach(c=>{s.has(c)||a.push(c)}),this.syncEngine.Br(o,a).then(()=>{this.ur=r})}pr(e){this.ur.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ir(e){let t=jo();return e.forEach((r,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class gg{constructor(){this.Lr=new Ic,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,t,r){this.qr[e]=t}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Ic,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{Ur(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){v("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){v("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.oo=t+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,t,r,i,s){const o=this.ho(e,t);v("RestConnection","Sending: ",o,r);const a={};return this.lo(a,i,s),this.fo(e,o,a,r).then(c=>(v("RestConnection","Received: ",c),c),c=>{throw hr("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",r),c})}_o(e,t,r,i,s,o){return this.ao(e,t,r,i,s)}lo(e,t,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Rr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ho(e,t){const r=yk[e];return`${this.oo}/v1/${t}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,t,r,i){return new Promise((s,o)=>{const a=new v0;a.setWithCredentials(!0),a.listenOnce(p0.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Pa.NO_ERROR:const u=a.getResponseJson();v("Connection","XHR received:",JSON.stringify(u)),s(u);break;case Pa.TIMEOUT:v("Connection",'RPC "'+e+'" timed out'),o(new y(p.DEADLINE_EXCEEDED,"Request time out"));break;case Pa.HTTP_ERROR:const l=a.getStatus();if(v("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const m=function(g){const b=g.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(b)>=0?b:p.UNKNOWN}(d.status);o(new y(m,d.message))}else o(new y(p.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new y(p.UNAVAILABLE,"Connection failed."));break;default:T()}}finally{v("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(i);a.send(t,"POST",c,r,15)})}wo(e,t,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=f0(),o=m0(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new y0({})),this.lo(a.initMessageHeaders,t,r),a.encodeInitMessageHeaders=!0;const c=i.join("");v("Connection","Creating WebChannel: "+c,a);const u=s.createWebChannel(c,a);let l=!1,h=!1;const d=new vk({Hr:g=>{h?v("Connection","Not sending because WebChannel is closed:",g):(l||(v("Connection","Opening WebChannel transport."),u.open(),l=!0),v("Connection","WebChannel sending:",g),u.send(g))},Jr:()=>u.close()}),m=(g,b,D)=>{g.listen(b,B=>{try{D(B)}catch(q){setTimeout(()=>{throw q},0)}})};return m(u,Is.EventType.OPEN,()=>{h||v("Connection","WebChannel transport opened.")}),m(u,Is.EventType.CLOSE,()=>{h||(h=!0,v("Connection","WebChannel transport closed"),d.io())}),m(u,Is.EventType.ERROR,g=>{h||(h=!0,hr("Connection","WebChannel transport errored:",g),d.io(new y(p.UNAVAILABLE,"The operation could not be completed")))}),m(u,Is.EventType.MESSAGE,g=>{var b;if(!h){const D=g.data[0];S(!!D);const B=D,q=B.error||((b=B[0])===null||b===void 0?void 0:b.error);if(q){v("Connection","WebChannel received error:",q);const M=q.status;let ie=function(j){const ce=ue[j];if(ce!==void 0)return Np(ce)}(M),H=q.message;ie===void 0&&(ie=p.INTERNAL,H="Unknown error status: "+M+" with message "+q.message),h=!0,d.io(new y(ie,H)),u.close()}else v("Connection","WebChannel received:",D),d.ro(D)}}),m(o,g0.STAT_EVENT,g=>{g.stat===vh.PROXY?v("Connection","Detected buffering proxy"):g.stat===vh.NOPROXY&&v("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(){return typeof window!="undefined"?window:null}function Fs(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(n){return new lS(n,!0)}class Vu{constructor(e,t,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=t,this.mo=r,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const t=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,t-r);i>0&&v("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(e,t,r,i,s,o,a,c){this.Hs=e,this.vo=r,this.Vo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Vu(e,t)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,t){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():t&&t.code===p.RESOURCE_EXHAUSTED?(se(t.toString()),se("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):t&&t.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),t=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.So===t&&this.Go(r,i)},r=>{e(()=>{const i=new y(p.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(i)})})}Go(e,t){const r=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.Qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return v("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return t=>{this.Hs.enqueueAndForget(()=>this.So===e?t():(v("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ik extends vg{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.yt=s}jo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.xo.reset();const t=fS(this.yt,e),r=function(i){if(!("targetChange"in i))return A.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?A.min():s.readTime?ae(s.readTime):A.min()}(e);return this.listener.Wo(t,r)}zo(e){const t={};t.database=Oi(this.yt),t.addTarget=function(i,s){let o;const a=s.target;return o=eo(a)?{documents:qp(i,a)}:{query:$p(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=Lp(i,s.resumeToken):s.snapshotVersion.compareTo(A.min())>0&&(o.readTime=yr(i,s.snapshotVersion.toTimestamp())),o}(this.yt,e);const r=pS(this.yt,e);r&&(t.labels=r),this.Bo(t)}Ho(e){const t={};t.database=Oi(this.yt),t.removeTarget=e,this.Bo(t)}}class _k extends vg{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.yt=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(S(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const t=mS(e.writeResults,e.commitTime),r=ae(e.commitTime);return this.listener.Zo(r,t)}return S(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Oi(this.yt),this.Bo(e)}Xo(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Mi(this.yt,r))};this.Bo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bk extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.yt=i,this.nu=!1}su(){if(this.nu)throw new y(p.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,t,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.ao(e,t,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new y(p.UNKNOWN,i.toString())})}_o(e,t,r,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection._o(e,t,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new y(p.UNKNOWN,s.toString())})}terminate(){this.nu=!0}}class Tk{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(se(t),this.ou=!1):v("OnlineStateTracker",t)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.Ur(o=>{r.enqueueAndForget(async()=>{on(this)&&(v("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=_(a);c._u.add(4),await Mr(c),c.gu.set("Unknown"),c._u.delete(4),await as(c)}(this))})}),this.gu=new Tk(r,i)}}async function as(n){if(on(n))for(const e of n.wu)await e(!0)}async function Mr(n){for(const e of n.wu)await e(!1)}function Ho(n,e){const t=_(n);t.du.has(e.targetId)||(t.du.set(e.targetId,e),qu(t)?Bu(t):Fr(t).ko()&&Uu(t,e))}function Li(n,e){const t=_(n),r=Fr(t);t.du.delete(e),r.ko()&&wg(t,e),t.du.size===0&&(r.ko()?r.Fo():on(t)&&t.gu.set("Unknown"))}function Uu(n,e){n.yu.Ot(e.targetId),Fr(n).zo(e)}function wg(n,e){n.yu.Ot(e),Fr(n).Ho(e)}function Bu(n){n.yu=new oS({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>n.du.get(e)||null}),Fr(n).start(),n.gu.uu()}function qu(n){return on(n)&&!Fr(n).No()&&n.du.size>0}function on(n){return _(n)._u.size===0}function Ig(n){n.yu=void 0}async function Sk(n){n.du.forEach((e,t)=>{Uu(n,e)})}async function kk(n,e){Ig(n),qu(n)?(n.gu.hu(e),Bu(n)):n.gu.set("Unknown")}async function Ak(n,e,t){if(n.gu.set("Online"),e instanceof Mp&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.du.delete(o),r.yu.removeTarget(o))}(n,e)}catch(r){v("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await uo(n,r)}else if(e instanceof Ms?n.yu.Kt(e):e instanceof Op?n.yu.Jt(e):n.yu.jt(e),!t.isEqual(A.min()))try{const r=await hg(n.localStore);t.compareTo(r)>=0&&await function(i,s){const o=i.yu.Zt(s);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.du.get(c);u&&i.du.set(c,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const c=i.du.get(a);if(!c)return;i.du.set(a,c.withResumeToken(he.EMPTY_BYTE_STRING,c.snapshotVersion)),wg(i,a);const u=new qt(c.target,a,1,c.sequenceNumber);Uu(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(r){v("RemoteStore","Failed to raise snapshot:",r),await uo(n,r)}}async function uo(n,e,t){if(!rn(e))throw e;n._u.add(1),await Mr(n),n.gu.set("Offline"),t||(t=()=>hg(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{v("RemoteStore","Retrying IndexedDB access"),await t(),n._u.delete(1),await as(n)})}function _g(n,e){return e().catch(t=>uo(n,t,e))}async function Lr(n){const e=_(n),t=Yt(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;Ck(e);)try{const i=await fk(e.localStore,r);if(i===null){e.fu.length===0&&t.Fo();break}r=i.batchId,Dk(e,i)}catch(i){await uo(e,i)}bg(e)&&Tg(e)}function Ck(n){return on(n)&&n.fu.length<10}function Dk(n,e){n.fu.push(e);const t=Yt(n);t.ko()&&t.Yo&&t.Xo(e.mutations)}function bg(n){return on(n)&&!Yt(n).No()&&n.fu.length>0}function Tg(n){Yt(n).start()}async function Nk(n){Yt(n).eu()}async function Rk(n){const e=Yt(n);for(const t of n.fu)e.Xo(t.mutations)}async function xk(n,e,t){const r=n.fu.shift(),i=Cu.from(r,e,t);await _g(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Lr(n)}async function Pk(n,e){e&&Yt(n).Yo&&await async function(t,r){if(i=r.code,Dp(i)&&i!==p.ABORTED){const s=t.fu.shift();Yt(t).Mo(),await _g(t,()=>t.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Lr(t)}var i}(n,e),bg(n)&&Tg(n)}async function ud(n,e){const t=_(n);t.asyncQueue.verifyOperationInProgress(),v("RemoteStore","RemoteStore received new credentials");const r=on(t);t._u.add(3),await Mr(t),r&&t.gu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t._u.delete(3),await as(t)}async function _c(n,e){const t=_(n);e?(t._u.delete(2),await as(t)):e||(t._u.add(2),await Mr(t),t.gu.set("Unknown"))}function Fr(n){return n.pu||(n.pu=function(e,t,r){const i=_(e);return i.su(),new Ik(t,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,r)}(n.datastore,n.asyncQueue,{Yr:Sk.bind(null,n),Zr:kk.bind(null,n),Wo:Ak.bind(null,n)}),n.wu.push(async e=>{e?(n.pu.Mo(),qu(n)?Bu(n):n.gu.set("Unknown")):(await n.pu.stop(),Ig(n))})),n.pu}function Yt(n){return n.Iu||(n.Iu=function(e,t,r){const i=_(e);return i.su(),new _k(t,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,r)}(n.datastore,n.asyncQueue,{Yr:Nk.bind(null,n),Zr:Pk.bind(null,n),tu:Rk.bind(null,n),Zo:xk.bind(null,n)}),n.wu.push(async e=>{e?(n.Iu.Mo(),await Lr(n)):(await n.Iu.stop(),n.fu.length>0&&(v("RemoteStore",`Stopping write stream with ${n.fu.length} pending writes`),n.fu=[]))})),n.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new pe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,a=new $u(e,t,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new y(p.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vr(n,e){if(se("AsyncQueue",`${e}: ${n}`),rn(n))return new y(p.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e){this.comparator=e?(t,r)=>e(t,r)||I.comparator(t.key,r.key):(t,r)=>I.comparator(t.key,r.key),this.keyedMap=ri(),this.sortedSet=new ne(this.comparator)}static emptySet(e){return new ar(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ar)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new ar;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(){this.Tu=new ne(I.comparator)}track(e){const t=e.doc.key,r=this.Tu.get(t);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(t,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(t):e.type===1&&r.type===2?this.Tu=this.Tu.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):T():this.Tu=this.Tu.insert(t,e)}Eu(){const e=[];return this.Tu.inorderTraversal((t,r)=>{e.push(r)}),e}}class Ir{constructor(e,t,r,i,s,o,a,c,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new Ir(e,t,ar.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ns(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{constructor(){this.Au=void 0,this.listeners=[]}}class Mk{constructor(){this.queries=new sn(e=>yp(e),ns),this.onlineState="Unknown",this.Ru=new Set}}async function zu(n,e){const t=_(n),r=e.query;let i=!1,s=t.queries.get(r);if(s||(i=!0,s=new Ok),i)try{s.Au=await t.onListen(r)}catch(o){const a=Vr(o,`Initialization of query '${fc(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,s),s.listeners.push(e),e.bu(t.onlineState),s.Au&&e.Pu(s.Au)&&Gu(t)}async function ju(n,e){const t=_(n),r=e.query;let i=!1;const s=t.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return t.queries.delete(r),t.onUnlisten(r)}function Lk(n,e){const t=_(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const a of o.listeners)a.Pu(i)&&(r=!0);o.Au=i}}r&&Gu(t)}function Fk(n,e,t){const r=_(n),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(t);r.queries.delete(e)}function Gu(n){n.Ru.forEach(e=>{e.next()})}class Wu{constructor(e,t,r){this.query=e,this.vu=t,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ir(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),t=!0):this.Cu(e,this.onlineState)&&(this.xu(e),t=!0),this.Su=e,t}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),t=!0),t}Cu(e,t){if(!e.fromCache)return!0;const r=t!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const t=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}xu(e){e=Ir.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk{constructor(e,t){this.ku=e,this.byteLength=t}Ou(){return"metadata"in this.ku}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e){this.yt=e}Ji(e){return ht(this.yt,e)}Yi(e){return e.metadata.exists?Bp(this.yt,e.document,!1):W.newNoDocument(this.Ji(e.metadata.name),this.Xi(e.metadata.readTime))}Xi(e){return ae(e)}}class Uk{constructor(e,t,r){this.Mu=e,this.localStore=t,this.yt=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Eg(e)}Fu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.ku.namedQuery)this.queries.push(e.ku.namedQuery);else if(e.ku.documentMetadata){this.documents.push({metadata:e.ku.documentMetadata}),e.ku.documentMetadata.exists||++t;const r=F.fromString(e.ku.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.ku.document&&(this.documents[this.documents.length-1].document=e.ku.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}$u(e){const t=new Map,r=new hd(this.yt);for(const i of e)if(i.metadata.queries){const s=r.Ji(i.metadata.name);for(const o of i.metadata.queries){const a=(t.get(o)||x()).add(s);t.set(o,a)}}return t}async complete(){const e=await mk(this.localStore,new hd(this.yt),this.documents,this.Mu.id),t=this.$u(this.documents);for(const r of this.queries)await pk(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Bu:this.collectionGroups,Lu:e}}}function Eg(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(e){this.key=e}}class kg{constructor(e){this.key=e}}class Ag{constructor(e,t){this.query=e,this.qu=t,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=x(),this.mutatedKeys=x(),this.Gu=wp(e),this.Qu=new ar(this.Gu)}get ju(){return this.qu}Wu(e,t){const r=t?t.zu:new ld,i=t?t.Qu:this.Qu;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,h)=>{const d=i.get(l),m=Eu(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),b=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let D=!1;d&&m?d.data.isEqual(m.data)?g!==b&&(r.track({type:3,doc:m}),D=!0):this.Hu(d,m)||(r.track({type:2,doc:m}),D=!0,(c&&this.Gu(m,c)>0||u&&this.Gu(m,u)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),D=!0):d&&!m&&(r.track({type:1,doc:d}),D=!0,(c||u)&&(a=!0)),D&&(m?(o=o.add(m),s=b?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{Qu:o,zu:r,$i:a,mutatedKeys:s}}Hu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const s=e.zu.Eu();s.sort((u,l)=>function(h,d){const m=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return T()}};return m(h)-m(d)}(u.type,l.type)||this.Gu(u.doc,l.doc)),this.Ju(r);const o=t?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,s.length!==0||c?{snapshot:new Ir(this.query,e.Qu,i,s,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new ld,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(t=>this.qu=this.qu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.qu=this.qu.delete(t)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=x(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const t=[];return e.forEach(r=>{this.Ku.has(r)||t.push(new kg(r))}),this.Ku.forEach(r=>{e.has(r)||t.push(new Sg(r))}),t}tc(e){this.qu=e.Hi,this.Ku=x();const t=this.Wu(e.documents);return this.applyChanges(t,!0)}ec(){return Ir.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class Bk{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class qk{constructor(e){this.key=e,this.nc=!1}}class $k{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new sn(a=>yp(a),ns),this.rc=new Map,this.oc=new Set,this.uc=new ne(I.comparator),this.cc=new Map,this.ac=new Pu,this.hc={},this.lc=new Map,this.fc=Fn.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function zk(n,e){const t=Xu(n);let r,i;const s=t.ic.get(e);if(s)r=s.targetId,t.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const o=await vr(t.localStore,$e(e));t.isPrimaryClient&&Ho(t.remoteStore,o);const a=t.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Ku(t,e,r,a==="current",o.resumeToken)}return i}async function Ku(n,e,t,r,i){n._c=(h,d,m)=>async function(g,b,D,B){let q=b.view.Wu(D);q.$i&&(q=await oo(g.localStore,b.query,!1).then(({documents:H})=>b.view.Wu(H,q)));const M=B&&B.targetChanges.get(b.targetId),ie=b.view.applyChanges(q,g.isPrimaryClient,M);return bc(g,b.targetId,ie.Xu),ie.snapshot}(n,h,d,m);const s=await oo(n.localStore,e,!0),o=new Ag(e,s.Hi),a=o.Wu(s.documents),c=ss.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),u=o.applyChanges(a,n.isPrimaryClient,c);bc(n,t,u.Xu);const l=new Bk(e,t,o);return n.ic.set(e,l),n.rc.has(t)?n.rc.get(t).push(e):n.rc.set(t,[e]),u.snapshot}async function jk(n,e){const t=_(n),r=t.ic.get(e),i=t.rc.get(r.targetId);if(i.length>1)return t.rc.set(r.targetId,i.filter(s=>!ns(s,e))),void t.ic.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(r.targetId),t.sharedClientState.isActiveQueryTarget(r.targetId)||await wr(t.localStore,r.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(r.targetId),Li(t.remoteStore,r.targetId),_r(t,r.targetId)}).catch(nn)):(_r(t,r.targetId),await wr(t.localStore,r.targetId,!0))}async function Gk(n,e,t){const r=Ju(n);try{const i=await function(s,o){const a=_(s),c=X.now(),u=o.reduce((d,m)=>d.add(m.key),x());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let m=qe(),g=x();return a.Gi.getEntries(d,u).next(b=>{m=b,m.forEach((D,B)=>{B.isValidDocument()||(g=g.add(D))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,m)).next(b=>{l=b;const D=[];for(const B of o){const q=eS(B,l.get(B.key).overlayedDocument);q!=null&&D.push(new Nt(B.key,q,pp(q.value.mapValue),Y.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,D,o)}).next(b=>{h=b;const D=b.applyToLocalDocumentSet(l,g);return a.documentOverlayCache.saveOverlays(d,b.batchId,D)})}).then(()=>({batchId:h.batchId,changes:xp(l)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let c=s.hc[s.currentUser.toKey()];c||(c=new ne(R)),c=c.insert(o,a),s.hc[s.currentUser.toKey()]=c}(r,i.batchId,t),await Rt(r,i.changes),await Lr(r.remoteStore)}catch(i){const s=Vr(i,"Failed to persist write");t.reject(s)}}async function Cg(n,e){const t=_(n);try{const r=await dk(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.cc.get(s);o&&(S(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?S(o.nc):i.removedDocuments.size>0&&(S(o.nc),o.nc=!1))}),await Rt(t,r,e)}catch(r){await nn(r)}}function dd(n,e,t){const r=_(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.ic.forEach((s,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=_(s);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.bu(o)&&(c=!0)}),c&&Gu(a)}(r.eventManager,e),i.length&&r.sc.Wo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Wk(n,e,t){const r=_(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.cc.get(e),s=i&&i.key;if(s){let o=new ne(I.comparator);o=o.insert(s,W.newNoDocument(s,A.min()));const a=x().add(s),c=new is(A.min(),new Map,new z(R),o,a);await Cg(r,c),r.uc=r.uc.remove(s),r.cc.delete(e),Yu(r)}else await wr(r.localStore,e,!1).then(()=>_r(r,e,t)).catch(nn)}async function Kk(n,e){const t=_(n),r=e.batch.batchId;try{const i=await hk(t.localStore,e);Qu(t,r,null),Hu(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Rt(t,i)}catch(i){await nn(i)}}async function Hk(n,e,t){const r=_(n);try{const i=await function(s,o){const a=_(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(S(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(r.localStore,e);Qu(r,e,t),Hu(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Rt(r,i)}catch(i){await nn(i)}}async function Qk(n,e){const t=_(n);on(t.remoteStore)||v("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const o=_(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(t.localStore);if(r===-1)return void e.resolve();const i=t.lc.get(r)||[];i.push(e),t.lc.set(r,i)}catch(r){const i=Vr(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function Hu(n,e){(n.lc.get(e)||[]).forEach(t=>{t.resolve()}),n.lc.delete(e)}function Qu(n,e,t){const r=_(n);let i=r.hc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.hc[r.currentUser.toKey()]=i}}function _r(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.rc.get(e))n.ic.delete(r),t&&n.sc.wc(r,t);n.rc.delete(e),n.isPrimaryClient&&n.ac.ls(e).forEach(r=>{n.ac.containsKey(r)||Dg(n,r)})}function Dg(n,e){n.oc.delete(e.path.canonicalString());const t=n.uc.get(e);t!==null&&(Li(n.remoteStore,t),n.uc=n.uc.remove(e),n.cc.delete(t),Yu(n))}function bc(n,e,t){for(const r of t)r instanceof Sg?(n.ac.addReference(r.key,e),Yk(n,r)):r instanceof kg?(v("SyncEngine","Document no longer in limbo: "+r.key),n.ac.removeReference(r.key,e),n.ac.containsKey(r.key)||Dg(n,r.key)):T()}function Yk(n,e){const t=e.key,r=t.path.canonicalString();n.uc.get(t)||n.oc.has(r)||(v("SyncEngine","New document in limbo: "+t),n.oc.add(r),Yu(n))}function Yu(n){for(;n.oc.size>0&&n.uc.size<n.maxConcurrentLimboResolutions;){const e=n.oc.values().next().value;n.oc.delete(e);const t=new I(F.fromString(e)),r=n.fc.next();n.cc.set(r,new qk(t)),n.uc=n.uc.insert(t,r),Ho(n.remoteStore,new qt($e(xr(t.path)),r,2,Be.at))}}async function Rt(n,e,t){const r=_(n),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,c)=>{o.push(r._c(c,e,t).then(u=>{if((u||t)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const l=Lu.Ci(c.targetId,u);s.push(l)}}))}),await Promise.all(o),r.sc.Wo(i),await async function(a,c){const u=_(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>f.forEach(c,h=>f.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>f.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!rn(l))throw l;v("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.qi.get(h),m=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(m);u.qi=u.qi.insert(h,g)}}}(r.localStore,s))}async function Xk(n,e){const t=_(n);if(!t.currentUser.isEqual(e)){v("SyncEngine","User change. New user:",e.toKey());const r=await lg(t.localStore,e);t.currentUser=e,function(i,s){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new y(p.CANCELLED,s))})}),i.lc.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Rt(t,r.ji)}}function Jk(n,e){const t=_(n),r=t.cc.get(e);if(r&&r.nc)return x().add(r.key);{let i=x();const s=t.rc.get(e);if(!s)return i;for(const o of s){const a=t.ic.get(o);i=i.unionWith(a.view.ju)}return i}}async function Zk(n,e){const t=_(n),r=await oo(t.localStore,e.query,!0),i=e.view.tc(r);return t.isPrimaryClient&&bc(t,e.targetId,i.Xu),i}async function eA(n,e){const t=_(n);return mg(t.localStore,e).then(r=>Rt(t,r))}async function tA(n,e,t,r){const i=_(n),s=await function(o,a){const c=_(o),u=_(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",l=>u.Tn(l,a).next(h=>h?c.localDocuments.getDocuments(l,h):f.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await Lr(i.remoteStore):t==="acknowledged"||t==="rejected"?(Qu(i,e,r||null),Hu(i,e),function(o,a){_(_(o).mutationQueue).An(a)}(i.localStore,e)):T(),await Rt(i,s)):v("SyncEngine","Cannot apply mutation batch with id: "+e)}async function nA(n,e){const t=_(n);if(Xu(t),Ju(t),e===!0&&t.dc!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),i=await fd(t,r.toArray());t.dc=!0,await _c(t.remoteStore,!0);for(const s of i)Ho(t.remoteStore,s)}else if(e===!1&&t.dc!==!1){const r=[];let i=Promise.resolve();t.rc.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(_r(t,o),wr(t.localStore,o,!0))),Li(t.remoteStore,o)}),await i,await fd(t,r),function(s){const o=_(s);o.cc.forEach((a,c)=>{Li(o.remoteStore,c)}),o.ac.fs(),o.cc=new Map,o.uc=new ne(I.comparator)}(t),t.dc=!1,await _c(t.remoteStore,!1)}}async function fd(n,e,t){const r=_(n),i=[],s=[];for(const o of e){let a;const c=r.rc.get(o);if(c&&c.length!==0){a=await vr(r.localStore,$e(c[0]));for(const u of c){const l=r.ic.get(u),h=await Zk(r,l);h.snapshot&&s.push(h.snapshot)}}else{const u=await fg(r.localStore,o);a=await vr(r.localStore,u),await Ku(r,Ng(u),o,!1,a.resumeToken)}i.push(a)}return r.sc.Wo(s),i}function Ng(n){return gp(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function rA(n){const e=_(n);return _(_(e.localStore).persistence).vi()}async function iA(n,e,t,r){const i=_(n);if(i.dc)return void v("SyncEngine","Ignoring unexpected query state notification.");const s=i.rc.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await mg(i.localStore,vp(s[0])),a=is.createSynthesizedRemoteEventForCurrentChange(e,t==="current",he.EMPTY_BYTE_STRING);await Rt(i,o,a);break}case"rejected":await wr(i.localStore,e,!0),_r(i,e,r);break;default:T()}}async function sA(n,e,t){const r=Xu(n);if(r.dc){for(const i of e){if(r.rc.has(i)){v("SyncEngine","Adding an already active target "+i);continue}const s=await fg(r.localStore,i),o=await vr(r.localStore,s);await Ku(r,Ng(s),o.targetId,!1,o.resumeToken),Ho(r.remoteStore,o)}for(const i of t)r.rc.has(i)&&await wr(r.localStore,i,!1).then(()=>{Li(r.remoteStore,i),_r(r,i)}).catch(nn)}}function Xu(n){const e=_(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Cg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Jk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Wk.bind(null,e),e.sc.Wo=Lk.bind(null,e.eventManager),e.sc.wc=Fk.bind(null,e.eventManager),e}function Ju(n){const e=_(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Kk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Hk.bind(null,e),e}function oA(n,e,t){const r=_(n);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(h,d){const m=_(h),g=ae(d.createTime);return m.persistence.runTransaction("hasNewerBundle","readonly",b=>m.Ns.getBundleMetadata(b,d.id)).then(b=>!!b&&b.createTime.compareTo(g)>=0)}(i.localStore,a))return await s.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(Eg(a));const c=new Uk(a,i.localStore,s.yt);let u=await s.mc();for(;u;){const h=await c.Fu(u);h&&o._updateProgress(h),u=await s.mc()}const l=await c.complete();return await Rt(i,l.Lu,void 0),await function(h,d){const m=_(h);return m.persistence.runTransaction("Save bundle","readwrite",g=>m.Ns.saveBundleMetadata(g,d))}(i.localStore,a),o._completeWith(l.progress),Promise.resolve(l.Bu)}catch(a){return hr("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(r,e,t).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class Rg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=os(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,t){return null}Ec(e,t){return null}Ic(e){return ug(this.persistence,new cg,e.initialUser,this.yt)}yc(e){return new ag(Ko.Bs,this.yt)}gc(e){return new gg}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class xg extends Rg{constructor(e,t,r){super(),this.Ac=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ac.initialize(this,e),await Ju(this.Ac.syncEngine),await Lr(this.Ac.remoteStore),await this.persistence.li(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Ic(e){return ug(this.persistence,new cg,e.initialUser,this.yt)}Tc(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new YS(r,e.asyncQueue,t)}Ec(e,t){const r=new O0(t,this.persistence);return new P0(e.asyncQueue,r)}yc(e){const t=Mu(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Ue.withCacheSize(this.cacheSizeBytes):Ue.DEFAULT;return new Ou(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,yg(),Fs(),this.yt,this.sharedClientState,!!this.forceOwnership)}gc(e){return new gg}}class aA extends xg{constructor(e,t){super(e,t,!1),this.Ac=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ac.syncEngine;this.sharedClientState instanceof Fa&&(this.sharedClientState.syncEngine={Fr:tA.bind(null,t),$r:iA.bind(null,t),Br:sA.bind(null,t),vi:rA.bind(null,t),Mr:eA.bind(null,t)},await this.sharedClientState.start()),await this.persistence.li(async r=>{await nA(this.Ac.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}gc(e){const t=yg();if(!Fa.C(t))throw new y(p.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Mu(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Fa(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class Zu{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>dd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Xk.bind(null,this.syncEngine),await _c(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Mk}createDatastore(e){const t=os(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new wk(i));var i;return function(s,o,a,c){return new bk(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return t=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>dd(this.syncEngine,a,0),o=cd.C()?new cd:new gk,new Ek(t,r,i,s,o);var t,r,i,s,o}createSyncEngine(e,t){return function(r,i,s,o,a,c,u){const l=new $k(r,i,s,o,a,c);return u&&(l.dc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=_(e);v("RemoteStore","RemoteStore shutting down."),t._u.add(5),await Mr(t),t.mu.shutdown(),t.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(n,e,t){if(!t)throw new y(p.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Pg(n,e,t,r){if(e===!0&&r===!0)throw new y(p.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function md(n){if(!I.isDocumentKey(n))throw new y(p.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function pd(n){if(I.isDocumentKey(n))throw new y(p.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Qo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":T()}function U(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new y(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Qo(n);throw new y(p.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function Og(n,e){if(e<=0)throw new y(p.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gd=new Map;class yd{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new y(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new y(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Pg("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new y(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new y(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yd(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new _0;switch(t.type){case"gapi":const r=t.client;return new S0(r,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new y(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=gd.get(e);t&&(v("ComponentProvider","Removing Datastore"),gd.delete(e),t.terminate())}(this),Promise.resolve()}}function cA(n,e,t,r={}){var i;const s=(n=U(n,cs))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&hr("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${t}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=me.MOCK_USER;else{o=ew(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new y(p.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new me(c)}n._authCredentials=new b0(new Hm(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new dt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new K(this.firestore,e,this._key)}}class ke{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ke(this.firestore,e,this._query)}}class dt extends ke{constructor(e,t,r){super(e,t,xr(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new K(this.firestore,null,new I(e))}withConverter(e){return new dt(this.firestore,e,this._path)}}function Mg(n,e,...t){if(n=C(n),el("collection","path",e),n instanceof cs){const r=F.fromString(e,...t);return pd(r),new dt(n,null,r)}{if(!(n instanceof K||n instanceof dt))throw new y(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(F.fromString(e,...t));return pd(r),new dt(n.firestore,null,r)}}function uA(n,e){if(n=U(n,cs),el("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new y(p.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new ke(n,null,function(t){return new Dt(F.emptyPath(),t)}(e))}function lo(n,e,...t){if(n=C(n),arguments.length===1&&(e=Qm.R()),el("doc","path",e),n instanceof cs){const r=F.fromString(e,...t);return md(r),new K(n,null,new I(r))}{if(!(n instanceof K||n instanceof dt))throw new y(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(F.fromString(e,...t));return md(r),new K(n.firestore,n instanceof dt?n.converter:null,new I(r))}}function Lg(n,e){return n=C(n),e=C(e),(n instanceof K||n instanceof dt)&&(e instanceof K||e instanceof dt)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function Fg(n,e){return n=C(n),e=C(e),n instanceof ke&&e instanceof ke&&n.firestore===e.firestore&&ns(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):se("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(e,t){this.Pc=e,this.yt=t,this.metadata=new pe,this.buffer=new Uint8Array,this.vc=new TextDecoder("utf-8"),this.Vc().then(r=>{r&&r.Ou()?this.metadata.resolve(r.ku.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.ku)}`))},r=>this.metadata.reject(r))}close(){return this.Pc.cancel()}async getMetadata(){return this.metadata.promise}async mc(){return await this.getMetadata(),this.Vc()}async Vc(){const e=await this.Sc();if(e===null)return null;const t=this.vc.decode(e),r=Number(t);isNaN(r)&&this.Dc(`length string (${t}) is not valid number`);const i=await this.Cc(r);return new Vk(JSON.parse(i),e.length+r)}xc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Sc(){for(;this.xc()<0&&!await this.Nc(););if(this.buffer.length===0)return null;const e=this.xc();e<0&&this.Dc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Cc(e){for(;this.buffer.length<e;)await this.Nc()&&this.Dc("Reached the end of bundle when more is expected.");const t=this.vc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Dc(e){throw this.Pc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Nc(){const e=await this.Pc.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new y(p.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(r,i){const s=_(r),o=Oi(s.yt)+"/documents",a={documents:i.map(h=>Pi(s.yt,h))},c=await s._o("BatchGetDocuments",o,a,i.length),u=new Map;c.forEach(h=>{const d=dS(s.yt,h);u.set(d.key.toString(),d)});const l=[];return i.forEach(h=>{const d=u.get(h.toString());S(!!d),l.push(d)}),l}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Or(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const i=I.fromPath(r);this.mutations.push(new Su(i,this.precondition(i)))}),await async function(t,r){const i=_(t),s=Oi(i.yt)+"/documents",o={writes:r.map(a=>Mi(i.yt,a))};await i.ao("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw T();t=A.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new y(p.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(A.min())?Y.exists(!1):Y.updateTime(t):Y.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(A.min()))throw new y(p.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Y.updateTime(t)}return Y.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this.kc=r.maxAttempts,this.xo=new Vu(this.asyncQueue,"transaction_retry")}run(){this.kc-=1,this.Oc()}Oc(){this.xo.Ro(async()=>{const e=new hA(this.datastore),t=this.Mc(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Fc(i)}))}).catch(r=>{this.Fc(r)})})}Mc(e){try{const t=this.updateFunction(e);return!es(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Fc(e){this.kc>0&&this.$c(e)?(this.kc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Oc(),Promise.resolve()))):this.deferred.reject(e)}$c(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!Dp(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=me.UNAUTHENTICATED,this.clientId=Qm.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{v("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(v("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new y(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new pe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Vr(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Vg(n,e){n.asyncQueue.verifyOperationInProgress(),v("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await lg(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n.offlineComponents=e}async function Ug(n,e){n.asyncQueue.verifyOperationInProgress();const t=await tl(n);v("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await e.initialize(t,r),n.setCredentialChangeListener(i=>ud(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>ud(e.remoteStore,s)),n.onlineComponents=e}async function tl(n){return n.offlineComponents||(v("FirestoreClient","Using default OfflineComponentProvider"),await Vg(n,new Rg)),n.offlineComponents}async function Xo(n){return n.onlineComponents||(v("FirestoreClient","Using default OnlineComponentProvider"),await Ug(n,new Zu)),n.onlineComponents}function Bg(n){return tl(n).then(e=>e.persistence)}function nl(n){return tl(n).then(e=>e.localStore)}function qg(n){return Xo(n).then(e=>e.remoteStore)}function rl(n){return Xo(n).then(e=>e.syncEngine)}function mA(n){return Xo(n).then(e=>e.datastore)}async function br(n){const e=await Xo(n),t=e.eventManager;return t.onListen=zk.bind(null,e.syncEngine),t.onUnlisten=jk.bind(null,e.syncEngine),t}function pA(n){return n.asyncQueue.enqueue(async()=>{const e=await Bg(n),t=await qg(n);return e.setNetworkEnabled(!0),function(r){const i=_(r);return i._u.delete(0),as(i)}(t)})}function gA(n){return n.asyncQueue.enqueue(async()=>{const e=await Bg(n),t=await qg(n);return e.setNetworkEnabled(!1),async function(r){const i=_(r);i._u.add(0),await Mr(i),i.gu.set("Offline")}(t)})}function yA(n,e){const t=new pe;return n.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await function(a,c){const u=_(a);return u.persistence.runTransaction("read document","readonly",l=>u.localDocuments.getDocument(l,c))}(r,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new y(p.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=Vr(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await nl(n),e,t)),t.promise}function $g(n,e,t={}){const r=new pe;return n.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const u=new Yo({next:h=>{s.enqueueAndForget(()=>ju(i,l));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new y(p.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new y(p.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Wu(xr(o.path),u,{includeMetadataChanges:!0,Nu:!0});return zu(i,l)}(await br(n),n.asyncQueue,e,t,r)),r.promise}function vA(n,e){const t=new pe;return n.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await oo(r,i,!0),a=new Ag(i,o.Hi),c=a.Wu(o.documents),u=a.applyChanges(c,!1);s.resolve(u.snapshot)}catch(o){const a=Vr(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await nl(n),e,t)),t.promise}function zg(n,e,t={}){const r=new pe;return n.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const u=new Yo({next:h=>{s.enqueueAndForget(()=>ju(i,l)),h.fromCache&&a.source==="server"?c.reject(new y(p.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Wu(o,u,{includeMetadataChanges:!0,Nu:!0});return zu(i,l)}(await br(n),n.asyncQueue,e,t,r)),r.promise}function wA(n,e){const t=new Yo(e);return n.asyncQueue.enqueueAndForget(async()=>function(r,i){_(r).Ru.add(i),i.next()}(await br(n),t)),()=>{t.bc(),n.asyncQueue.enqueueAndForget(async()=>function(r,i){_(r).Ru.delete(i)}(await br(n),t))}}function IA(n,e,t,r){const i=function(s,o){let a;return a=typeof s=="string"?new TextEncoder().encode(s):s,function(c,u){return new lA(c,u)}(function(c,u){if(c instanceof Uint8Array)return vd(c,u);if(c instanceof ArrayBuffer)return vd(new Uint8Array(c),u);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(t,os(e));n.asyncQueue.enqueueAndForget(async()=>{oA(await rl(n),i,r)})}function _A(n,e){return n.asyncQueue.enqueue(async()=>function(t,r){const i=_(t);return i.persistence.runTransaction("Get named query","readonly",s=>i.Ns.getNamedQuery(s,r))}(await nl(n),e))}class bA{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Vu(this,"async_queue_retry"),this.Wc=()=>{const t=Fs();t&&v("AsyncQueue","Visibility state changed to "+t.visibilityState),this.xo.Po()};const e=Fs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const t=Fs();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const t=new pe;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!rn(e))throw e;v("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const t=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw se("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=t,t}enqueueAfterDelay(e,t,r){this.zc(),this.jc.indexOf(e)>-1&&(t=0);const i=$u.createAndSchedule(this,e,t,r,s=>this.Yc(s));return this.Uc.push(i),i}zc(){this.Kc&&T()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const t of this.Uc)if(t.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Uc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const t=this.Uc.indexOf(e);this.Uc.splice(t,1)}}function Tc(n){return function(e,t){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of t)if(i in r&&typeof r[i]=="function")return!0;return!1}(n,["next","error","complete"])}class TA{constructor(){this._progressObserver={},this._taskCompletionResolver=new pe,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA=-1;class re extends cs{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new bA,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||jg(this),this._firestoreClient.terminate()}}function Ie(n){return n._firestoreClient||jg(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function jg(n){var e;const t=n._freezeSettings(),r=function(i,s,o,a){return new M0(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,t);n._firestoreClient=new fA(n._authCredentials,n._appCheckCredentials,n._queue,r)}function SA(n,e){Wg(n=U(n,re));const t=Ie(n),r=n._freezeSettings(),i=new Zu;return Gg(t,i,new xg(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function kA(n){Wg(n=U(n,re));const e=Ie(n),t=n._freezeSettings(),r=new Zu;return Gg(e,r,new aA(r,t.cacheSizeBytes))}function Gg(n,e,t){const r=new pe;return n.asyncQueue.enqueue(async()=>{try{await Vg(n,t),await Ug(n,e),r.resolve()}catch(i){const s=i;if(!function(o){return o.name==="FirebaseError"?o.code===p.FAILED_PRECONDITION||o.code===p.UNIMPLEMENTED:typeof DOMException!="undefined"&&o instanceof DOMException?o.code===22||o.code===20||o.code===11:!0}(s))throw s;hr("Error enabling offline persistence. Falling back to persistence disabled: "+s),r.reject(s)}}).then(()=>r.promise)}function AA(n){if(n._initialized&&!n._terminated)throw new y(p.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new pe;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(t){if(!Je.C())return Promise.resolve();const r=t+"main";await Je.delete(r)}(Mu(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function CA(n){return function(e){const t=new pe;return e.asyncQueue.enqueueAndForget(async()=>Qk(await rl(e),t)),t.promise}(Ie(n=U(n,re)))}function DA(n){return pA(Ie(n=U(n,re)))}function NA(n){return gA(Ie(n=U(n,re)))}function RA(n,e){const t=Ie(n=U(n,re)),r=new TA;return IA(t,n._databaseId,e,r),r}function xA(n,e){return _A(Ie(n=U(n,re)),e).then(t=>t?new ke(n,null,t.query):null)}function Wg(n){if(n._initialized||n._terminated)throw new y(p.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new gt(he.fromBase64String(e))}catch(t){throw new y(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new gt(he.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new y(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new oe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new y(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new y(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return R(this._lat,e._lat)||R(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA=/^__.*__$/;class OA{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Nt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Pr(e,this.data,t,this.fieldTransforms)}}class Kg{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Nt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Hg(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw T()}}class Zo{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.yt=r,this.ignoreUndefinedProperties=i,s===void 0&&this.na(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Zo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ia({path:r,oa:!1});return i.ua(e),i}ca(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ia({path:r,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return ho(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(Hg(this.sa)&&PA.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class MA{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.yt=r||os(e)}da(e,t,r,i=!1){return new Zo({sa:e,methodName:t,fa:r,path:oe.emptyPath(),oa:!1,la:i},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function Wn(n){const e=n._freezeSettings(),t=os(n._databaseId);return new MA(n._databaseId,!!e.ignoreUndefinedProperties,t)}function ea(n,e,t,r,i,s={}){const o=n.da(s.merge||s.mergeFields?2:0,e,t,i);al("Data must be an object, but it was:",o,r);const a=Xg(r,o);let c,u;if(s.merge)c=new Ge(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const d=Ec(e,h,t);if(!o.contains(d))throw new y(p.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Zg(l,d)||l.push(d)}c=new Ge(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new OA(new be(a),c,u)}class us extends Gn{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof us}}function Qg(n,e,t){return new Zo({sa:3,fa:e.settings.fa,methodName:n._methodName,oa:t},e.databaseId,e.yt,e.ignoreUndefinedProperties)}class il extends Gn{_toFieldTransform(e){return new rs(e.path,new pr)}isEqual(e){return e instanceof il}}class LA extends Gn{constructor(e,t){super(e),this._a=t}_toFieldTransform(e){const t=Qg(this,e,!0),r=this._a.map(s=>Kn(s,t)),i=new Pn(r);return new rs(e.path,i)}isEqual(e){return this===e}}class FA extends Gn{constructor(e,t){super(e),this._a=t}_toFieldTransform(e){const t=Qg(this,e,!0),r=this._a.map(s=>Kn(s,t)),i=new On(r);return new rs(e.path,i)}isEqual(e){return this===e}}class VA extends Gn{constructor(e,t){super(e),this.wa=t}_toFieldTransform(e){const t=new gr(e.yt,bp(e.yt,this.wa));return new rs(e.path,t)}isEqual(e){return this===e}}function sl(n,e,t,r){const i=n.da(1,e,t);al("Data must be an object, but it was:",i,r);const s=[],o=be.empty();jn(r,(c,u)=>{const l=cl(e,c,t);u=C(u);const h=i.ca(l);if(u instanceof us)s.push(l);else{const d=Kn(u,h);d!=null&&(s.push(l),o.set(l,d))}});const a=new Ge(s);return new Kg(o,a,i.fieldTransforms)}function ol(n,e,t,r,i,s){const o=n.da(1,e,t),a=[Ec(e,r,t)],c=[i];if(s.length%2!=0)throw new y(p.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Ec(e,s[d])),c.push(s[d+1]);const u=[],l=be.empty();for(let d=a.length-1;d>=0;--d)if(!Zg(u,a[d])){const m=a[d];let g=c[d];g=C(g);const b=o.ca(m);if(g instanceof us)u.push(m);else{const D=Kn(g,b);D!=null&&(u.push(m),l.set(m,D))}}const h=new Ge(u);return new Kg(l,h,o.fieldTransforms)}function Yg(n,e,t,r=!1){return Kn(t,n.da(r?4:3,e))}function Kn(n,e){if(Jg(n=C(n)))return al("Unsupported field value:",e,n),Xg(n,e);if(n instanceof Gn)return function(t,r){if(!Hg(r.sa))throw r.ha(`${t._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${t._methodName}() is not currently supported inside arrays`);const i=t._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(t,r){const i=[];let s=0;for(const o of t){let a=Kn(o,r.aa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(n,e)}return function(t,r){if((t=C(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return bp(r.yt,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const i=X.fromDate(t);return{timestampValue:yr(r.yt,i)}}if(t instanceof X){const i=new X(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:yr(r.yt,i)}}if(t instanceof Jo)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof gt)return{bytesValue:Lp(r.yt,t._byteString)};if(t instanceof K){const i=r.databaseId,s=t.firestore._databaseId;if(!s.isEqual(i))throw r.ha(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ku(t.firestore._databaseId||r.databaseId,t._key.path)}}throw r.ha(`Unsupported field value: ${Qo(t)}`)}(n,e)}function Xg(n,e){const t={};return np(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):jn(n,(r,i)=>{const s=Kn(i,e.ra(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function Jg(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof X||n instanceof Jo||n instanceof gt||n instanceof K||n instanceof Gn)}function al(n,e,t){if(!Jg(t)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(t)){const r=Qo(t);throw r==="an object"?e.ha(n+" a custom object"):e.ha(n+" "+r)}}function Ec(n,e,t){if((e=C(e))instanceof Xt)return e._internalPath;if(typeof e=="string")return cl(n,e);throw ho("Field path arguments must be of type string or ",n,!1,void 0,t)}const UA=new RegExp("[~\\*/\\[\\]]");function cl(n,e,t){if(e.search(UA)>=0)throw ho(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Xt(...e.split("."))._internalPath}catch{throw ho(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ho(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new y(p.INVALID_ARGUMENT,a+n+c)}function Zg(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new K(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new BA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ta("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class BA extends Fi{data(){return super.data()}}function ta(n,e){return typeof e=="string"?cl(n,e):e instanceof Xt?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ey(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new y(p.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ul{}class ls extends ul{}function Mt(n,e,...t){let r=[];e instanceof ul&&r.push(e),r=r.concat(t),function(i){const s=i.filter(a=>a instanceof ll).length,o=i.filter(a=>a instanceof na).length;if(s>1||s>0&&o>0)throw new y(p.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class na extends ls{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new na(e,t,r)}_apply(e){const t=this._parse(e);return ny(e._query,t),new ke(e.firestore,e.converter,dc(e._query,t))}_parse(e){const t=Wn(e.firestore);return function(i,s,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new y(p.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Id(l,u);const d=[];for(const m of l)d.push(wd(a,i,m));h={arrayValue:{values:d}}}else h=wd(a,i,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Id(l,u),h=Yg(o,s,l,u==="in"||u==="not-in");return O.create(c,u,h)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function qA(n,e,t){const r=e,i=ta("where",n);return na._create(i,r,t)}class ll extends ul{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ll(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:$.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)ny(s,a),s=dc(s,a)}(e._query,t),new ke(e.firestore,e.converter,dc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class hl extends ls{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new hl(e,t)}_apply(e){const t=function(r,i,s){if(r.startAt!==null)throw new y(p.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new y(p.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new or(i,s);return function(a,c){if(bu(a)===null){const u=qo(a);u!==null&&ry(a,u,c.field)}}(r,o),o}(e._query,this._field,this._direction);return new ke(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new Dt(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,t))}}function $A(n,e="asc"){const t=e,r=ta("orderBy",n);return hl._create(r,t)}class ra extends ls{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new ra(e,t,r)}_apply(e){return new ke(e.firestore,e.converter,no(e._query,this._limit,this._limitType))}}function zA(n){return Og("limit",n),ra._create("limit",n,"F")}function jA(n){return Og("limitToLast",n),ra._create("limitToLast",n,"L")}class ia extends ls{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new ia(e,t,r)}_apply(e){const t=ty(e,this.type,this._docOrFields,this._inclusive);return new ke(e.firestore,e.converter,function(r,i){return new Dt(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,t))}}function GA(...n){return ia._create("startAt",n,!0)}function WA(...n){return ia._create("startAfter",n,!1)}class sa extends ls{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new sa(e,t,r)}_apply(e){const t=ty(e,this.type,this._docOrFields,this._inclusive);return new ke(e.firestore,e.converter,function(r,i){return new Dt(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,t))}}function KA(...n){return sa._create("endBefore",n,!1)}function HA(...n){return sa._create("endAt",n,!0)}function ty(n,e,t,r){if(t[0]=C(t[0]),t[0]instanceof Fi)return function(i,s,o,a,c){if(!a)throw new y(p.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const u=[];for(const l of Sn(i))if(l.field.isKeyField())u.push(Rn(s,a.key));else{const h=a.data.field(l.field);if(_u(h))throw new y(p.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+l.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=l.field.canonicalString();throw new y(p.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}u.push(h)}return new Qt(u,c)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=Wn(n.firestore);return function(s,o,a,c,u,l){const h=s.explicitOrderBy;if(u.length>h.length)throw new y(p.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let m=0;m<u.length;m++){const g=u[m];if(h[m].field.isKeyField()){if(typeof g!="string")throw new y(p.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof g}`);if(!Tu(s)&&g.indexOf("/")!==-1)throw new y(p.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${g}' contains a slash.`);const b=s.path.child(F.fromString(g));if(!I.isDocumentKey(b))throw new y(p.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${b}' is not because it contains an odd number of segments.`);const D=new I(b);d.push(Rn(o,D))}else{const b=Yg(a,c,g);d.push(b)}}return new Qt(d,l)}(n._query,n.firestore._databaseId,i,e,t,r)}}function wd(n,e,t){if(typeof(t=C(t))=="string"){if(t==="")throw new y(p.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Tu(e)&&t.indexOf("/")!==-1)throw new y(p.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(F.fromString(t));if(!I.isDocumentKey(r))throw new y(p.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Rn(n,new I(r))}if(t instanceof K)return Rn(n,t._key);throw new y(p.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Qo(t)}.`)}function Id(n,e){if(!Array.isArray(n)||n.length===0)throw new y(p.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(n.length>10)throw new y(p.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function ny(n,e){if(e.isInequality()){const r=qo(n),i=e.field;if(r!==null&&!r.isEqual(i))throw new y(p.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=bu(n);s!==null&&ry(n,i,s)}const t=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(n.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new y(p.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new y(p.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function ry(n,e,t){if(!t.isEqual(e))throw new y(p.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}class dl{convertValue(e,t="none"){switch(Nn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ee(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Dn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw T()}}convertObject(e,t){const r={};return jn(e.fields,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertGeoPoint(e){return new Jo(ee(e.latitude),ee(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ip(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Ni(e));default:return null}}convertTimestamp(e){const t=Kt(e);return new X(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=F.fromString(e);S(Wp(r));const i=new Wt(r.get(1),r.get(3)),s=new I(r.popFirst(5));return i.isEqual(t)||se(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class QA extends dl{constructor(e){super(),this.firestore=e}convertBytes(e){return new gt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new K(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class kt extends Fi{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new mi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(ta("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class mi extends kt{data(e={}){return super.data(e)}}class Jt{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new wn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new mi(this._firestore,this._userDataWriter,r.key,r,new wn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new y(p.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new mi(r._firestore,r._userDataWriter,o.doc.key,o.doc,new wn(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new mi(r._firestore,r._userDataWriter,o.doc.key,o.doc,new wn(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,u=-1;return o.type!==0&&(c=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:YA(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function YA(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return T()}}function iy(n,e){return n instanceof kt&&e instanceof kt?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof Jt&&e instanceof Jt&&n._firestore===e._firestore&&Fg(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XA(n){n=U(n,K);const e=U(n.firestore,re);return $g(Ie(e),n._key).then(t=>fl(e,n,t))}class Hn extends dl{constructor(e){super(),this.firestore=e}convertBytes(e){return new gt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new K(this.firestore,null,t)}}function JA(n){n=U(n,K);const e=U(n.firestore,re),t=Ie(e),r=new Hn(e);return yA(t,n._key).then(i=>new kt(e,r,n._key,i,new wn(i!==null&&i.hasLocalMutations,!0),n.converter))}function ZA(n){n=U(n,K);const e=U(n.firestore,re);return $g(Ie(e),n._key,{source:"server"}).then(t=>fl(e,n,t))}function eC(n){n=U(n,ke);const e=U(n.firestore,re),t=Ie(e),r=new Hn(e);return ey(n._query),zg(t,n._query).then(i=>new Jt(e,r,n,i))}function tC(n){n=U(n,ke);const e=U(n.firestore,re),t=Ie(e),r=new Hn(e);return vA(t,n._query).then(i=>new Jt(e,r,n,i))}function nC(n){n=U(n,ke);const e=U(n.firestore,re),t=Ie(e),r=new Hn(e);return zg(t,n._query,{source:"server"}).then(i=>new Jt(e,r,n,i))}function _d(n,e,t){n=U(n,K);const r=U(n.firestore,re),i=oa(n.converter,e,t);return hs(r,[ea(Wn(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Y.none())])}function bd(n,e,t,...r){n=U(n,K);const i=U(n.firestore,re),s=Wn(i);let o;return o=typeof(e=C(e))=="string"||e instanceof Xt?ol(s,"updateDoc",n._key,e,t,r):sl(s,"updateDoc",n._key,e),hs(i,[o.toMutation(n._key,Y.exists(!0))])}function rC(n){return hs(U(n.firestore,re),[new Or(n._key,Y.none())])}function iC(n,e){const t=U(n.firestore,re),r=lo(n),i=oa(n.converter,e);return hs(t,[ea(Wn(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Y.exists(!1))]).then(()=>r)}function sy(n,...e){var t,r,i;n=C(n);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Tc(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Tc(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,l;if(n instanceof K)u=U(n.firestore,re),l=xr(n._key.path),c={next:h=>{e[o]&&e[o](fl(u,n,h))},error:e[o+1],complete:e[o+2]};else{const h=U(n,ke);u=U(h.firestore,re),l=h._query;const d=new Hn(u);c={next:m=>{e[o]&&e[o](new Jt(u,d,h,m))},error:e[o+1],complete:e[o+2]},ey(n._query)}return function(h,d,m,g){const b=new Yo(g),D=new Wu(d,b,m);return h.asyncQueue.enqueueAndForget(async()=>zu(await br(h),D)),()=>{b.bc(),h.asyncQueue.enqueueAndForget(async()=>ju(await br(h),D))}}(Ie(u),l,a,c)}function sC(n,e){return wA(Ie(n=U(n,re)),Tc(e)?e:{next:e})}function hs(n,e){return function(t,r){const i=new pe;return t.asyncQueue.enqueueAndForget(async()=>Gk(await rl(t),r,i)),i.promise}(Ie(n),e)}function fl(n,e,t){const r=t.docs.get(e._key),i=new Hn(n);return new kt(n,i,e._key,r,new wn(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oC={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Wn(e)}set(e,t,r){this._verifyNotCommitted();const i=Ft(e,this._firestore),s=oa(i.converter,t,r),o=ea(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Y.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=Ft(e,this._firestore);let o;return o=typeof(t=C(t))=="string"||t instanceof Xt?ol(this._dataReader,"WriteBatch.update",s._key,t,r,i):sl(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,Y.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Ft(e,this._firestore);return this._mutations=this._mutations.concat(new Or(t._key,Y.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new y(p.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Ft(n,e){if((n=C(n)).firestore!==e)throw new y(p.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Wn(e)}get(e){const t=Ft(e,this._firestore),r=new QA(this._firestore);return this._transaction.lookup([t._key]).then(i=>{if(!i||i.length!==1)return T();const s=i[0];if(s.isFoundDocument())return new Fi(this._firestore,r,s.key,s,t.converter);if(s.isNoDocument())return new Fi(this._firestore,r,t._key,null,t.converter);throw T()})}set(e,t,r){const i=Ft(e,this._firestore),s=oa(i.converter,t,r),o=ea(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,t,r,...i){const s=Ft(e,this._firestore);let o;return o=typeof(t=C(t))=="string"||t instanceof Xt?ol(this._dataReader,"Transaction.update",s._key,t,r,i):sl(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,o),this}delete(e){const t=Ft(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Ft(e,this._firestore),r=new Hn(this._firestore);return super.get(e).then(i=>new kt(this._firestore,r,t._key,i._document,new wn(!1,!1),t.converter))}}function uC(n,e,t){n=U(n,re);const r=Object.assign(Object.assign({},oC),t);return function(i){if(i.maxAttempts<1)throw new y(p.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,s,o){const a=new pe;return i.asyncQueue.enqueueAndForget(async()=>{const c=await mA(i);new dA(i.asyncQueue,c,o,s,a).run()}),a.promise}(Ie(n),i=>e(new cC(n,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lC(){return new us("deleteField")}function hC(){return new il("serverTimestamp")}function dC(...n){return new LA("arrayUnion",n)}function fC(...n){return new FA("arrayRemove",n)}function mC(n){return new VA("increment",n)}(function(n,e=!0){(function(t){Rr=t})(Bn),jt(new ft("firestore",(t,{instanceIdentifier:r,options:i})=>{const s=t.getProvider("app").getImmediate(),o=new re(new T0(t.getProvider("auth-internal")),new A0(t.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new y(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wt(a.options.projectId,c)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),lt(wh,"3.8.0",n),lt(wh,"3.8.0","esm2017")})();const pC="@firebase/firestore-compat",gC="0.3.0";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new y("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(){if(typeof Uint8Array=="undefined")throw new y("unimplemented","Uint8Arrays are not available in this environment.")}function Ed(){if(!L0())throw new y("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Vi{constructor(e){this._delegate=e}static fromBase64String(e){return Ed(),new Vi(gt.fromBase64String(e))}static fromUint8Array(e){return Td(),new Vi(gt.fromUint8Array(e))}toBase64(){return Ed(),this._delegate.toBase64()}toUint8Array(){return Td(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(n){return yC(n,["next","error","complete"])}function yC(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{enableIndexedDbPersistence(e,t){return SA(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return kA(e._delegate)}clearIndexedDbPersistence(e){return AA(e._delegate)}}class oy{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Wt||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&hr("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){cA(this._delegate,e,t,r)}enableNetwork(){return DA(this._delegate)}disableNetwork(){return NA(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,Pg("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return CA(this._delegate)}onSnapshotsInSync(e){return sC(this._delegate,e)}get app(){if(!this._appCompat)throw new y("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Tr(this,Mg(this._delegate,e))}catch(t){throw Pe(t,"collection()","Firestore.collection()")}}doc(e){try{return new Ye(this,lo(this._delegate,e))}catch(t){throw Pe(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new xe(this,uA(this._delegate,e))}catch(t){throw Pe(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return uC(this._delegate,t=>e(new ay(this,t)))}batch(){return Ie(this._delegate),new cy(new aC(this._delegate,e=>hs(this._delegate,e)))}loadBundle(e){return RA(this._delegate,e)}namedQuery(e){return xA(this._delegate,e).then(t=>t?new xe(this,t):null)}}class aa extends dl{constructor(e){super(),this.firestore=e}convertBytes(e){return new Vi(new gt(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Ye.forKey(t,this.firestore,null)}}function wC(n){w0(n)}class ay{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new aa(e)}get(e){const t=In(e);return this._delegate.get(t).then(r=>new Ui(this._firestore,new kt(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const i=In(e);return r?(ml("Transaction.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=In(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=In(e);return this._delegate.delete(t),this}}class cy{constructor(e){this._delegate=e}set(e,t,r){const i=In(e);return r?(ml("WriteBatch.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=In(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=In(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Vn{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new mi(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Bi(this._firestore,r),t!=null?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=Vn.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(t);return s||(s=new Vn(e,new aa(e),t),i.set(t,s)),s}}Vn.INSTANCES=new WeakMap;class Ye{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new aa(e)}static forPath(e,t,r){if(e.length%2!==0)throw new y("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Ye(t,new K(t._delegate,r,new I(e)))}static forKey(e,t,r){return new Ye(t,new K(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Tr(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Tr(this.firestore,Mg(this._delegate,e))}catch(t){throw Pe(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=C(e),e instanceof K?Lg(this._delegate,e):!1}set(e,t){t=ml("DocumentReference.set",t);try{return t?_d(this._delegate,e,t):_d(this._delegate,e)}catch(r){throw Pe(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?bd(this._delegate,e):bd(this._delegate,e,t,...r)}catch(i){throw Pe(i,"updateDoc()","DocumentReference.update()")}}delete(){return rC(this._delegate)}onSnapshot(...e){const t=uy(e),r=ly(e,i=>new Ui(this.firestore,new kt(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return sy(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=JA(this._delegate):(e==null?void 0:e.source)==="server"?t=ZA(this._delegate):t=XA(this._delegate),t.then(r=>new Ui(this.firestore,new kt(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Ye(this.firestore,e?this._delegate.withConverter(Vn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Pe(n,e,t){return n.message=n.message.replace(e,t),n}function uy(n){for(const e of n)if(typeof e=="object"&&!Sc(e))return e;return{}}function ly(n,e){var t,r;let i;return Sc(n[0])?i=n[0]:Sc(n[1])?i=n[1]:typeof n[0]=="function"?i={next:n[0],error:n[1],complete:n[2]}:i={next:n[1],error:n[2],complete:n[3]},{next:s=>{i.next&&i.next(e(s))},error:(t=i.error)===null||t===void 0?void 0:t.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class Ui{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Ye(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return iy(this._delegate,e._delegate)}}class Bi extends Ui{data(e){const t=this._delegate.data(e);return I0(t!==void 0),t}}class xe{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new aa(e)}where(e,t,r){try{return new xe(this.firestore,Mt(this._delegate,qA(e,t,r)))}catch(i){throw Pe(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new xe(this.firestore,Mt(this._delegate,$A(e,t)))}catch(r){throw Pe(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new xe(this.firestore,Mt(this._delegate,zA(e)))}catch(t){throw Pe(t,"limit()","Query.limit()")}}limitToLast(e){try{return new xe(this.firestore,Mt(this._delegate,jA(e)))}catch(t){throw Pe(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new xe(this.firestore,Mt(this._delegate,GA(...e)))}catch(t){throw Pe(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new xe(this.firestore,Mt(this._delegate,WA(...e)))}catch(t){throw Pe(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new xe(this.firestore,Mt(this._delegate,KA(...e)))}catch(t){throw Pe(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new xe(this.firestore,Mt(this._delegate,HA(...e)))}catch(t){throw Pe(t,"endAt()","Query.endAt()")}}isEqual(e){return Fg(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=tC(this._delegate):(e==null?void 0:e.source)==="server"?t=nC(this._delegate):t=eC(this._delegate),t.then(r=>new kc(this.firestore,new Jt(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=uy(e),r=ly(e,i=>new kc(this.firestore,new Jt(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return sy(this._delegate,t,r)}withConverter(e){return new xe(this.firestore,e?this._delegate.withConverter(Vn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class IC{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Bi(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class kc{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new xe(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Bi(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new IC(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new Bi(this._firestore,r))})}isEqual(e){return iy(this._delegate,e._delegate)}}class Tr extends xe{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Ye(this.firestore,e):null}doc(e){try{return e===void 0?new Ye(this.firestore,lo(this._delegate)):new Ye(this.firestore,lo(this._delegate,e))}catch(t){throw Pe(t,"doc()","CollectionReference.doc()")}}add(e){return iC(this._delegate,e).then(t=>new Ye(this.firestore,t))}isEqual(e){return Lg(this._delegate,e._delegate)}withConverter(e){return new Tr(this.firestore,e?this._delegate.withConverter(Vn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function In(n){return U(n,K)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(...e){this._delegate=new Xt(...e)}static documentId(){return new pl(oe.keyField().canonicalString())}isEqual(e){return e=C(e),e instanceof Xt?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this._delegate=e}static serverTimestamp(){const e=hC();return e._methodName="FieldValue.serverTimestamp",new pn(e)}static delete(){const e=lC();return e._methodName="FieldValue.delete",new pn(e)}static arrayUnion(...e){const t=dC(...e);return t._methodName="FieldValue.arrayUnion",new pn(t)}static arrayRemove(...e){const t=fC(...e);return t._methodName="FieldValue.arrayRemove",new pn(t)}static increment(e){const t=mC(e);return t._methodName="FieldValue.increment",new pn(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _C={Firestore:oy,GeoPoint:Jo,Timestamp:X,Blob:Vi,Transaction:ay,WriteBatch:cy,DocumentReference:Ye,DocumentSnapshot:Ui,Query:xe,QueryDocumentSnapshot:Bi,QuerySnapshot:kc,CollectionReference:Tr,FieldPath:pl,FieldValue:pn,setLogLevel:wC,CACHE_SIZE_UNLIMITED:EA};function bC(n,e){n.INTERNAL.registerComponent(new ft("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},_C)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TC(n){bC(n,(e,t)=>new oy(e,t,new vC)),n.registerVersion(pC,gC)}TC(qn);const EC={apiKey:"AIzaSyAS5gtKLVTCnss5xloWaePp-6zF3mw0KCU",authDomain:"bitter-d7420.firebaseapp.com",projectId:"bitter-d7420",storageBucket:"bitter-d7420.appspot.com",messagingSenderId:"1038249087903",appId:"1:1038249087903:web:1fed79eab01a3f597763aa",measurementId:"G-VDP7VFG652"};qn.initializeApp(EC);let ks=qn.firestore();const SC=Ay({name:"PageHome",data(){return{newBitterContent:"",beets:[]}},computed:{relativeDate(){return n=>Uv(new Date(n),new Date,{addSuffix:!0})}},methods:{likeBeet(n){ks.collection("beets").doc(n.id).update({liked:!n.liked}).then(function(){console.log("Nice")}).catch(function(e){console.log("Damn",e)})},deleteBeet(n){ks.collection("beets").doc(n.id).delete().then(()=>{console.log("Document successfully deleted!")}).catch(e=>{console.error("Error removing document: ",e)})},addNewBeet(){let n={content:this.newBitterContent,date:Date.now(),liked:!1};ks.collection("beets").add(n).then(function(e){console.log("Document stored")}).catch(function(e){console.error("Damn",e)}),this.newBitterContent=""}},mounted(){ks.collection("beets").onSnapshot(n=>{n.docChanges().forEach(e=>{let t=e.doc.data();if(t.id=e.doc.id,e.type==="added"&&(console.log("New qweet:",t),this.beets.unshift(t)),e.type==="modified"){console.log("Modified qweet: ",t);let r=this.beets.findIndex(i=>i.id===t.id);Object.assign(this.beets[r],t)}if(e.type==="removed"){console.log("Removed qweet: ",t);let r=this.beets.findIndex(i=>i.id===t.id);this.beets.splice(r,1)}})})}}),kC={class:"q-py-lg q-px-md row"},AC={class:"col"},CC=vt("img",{src:"src\\assets\\Profile-Pic-Filtered.jpg"},null,-1),DC={class:"col col-shrink"},NC=vt("img",{src:"src\\assets\\Profile-Pic-Filtered.jpg"},null,-1),RC=vt("strong",null,"Fares Mohamed ",-1),xC={class:"text-grey-7"},PC=vt("br",{class:"lt-md"},null,-1),OC={class:"row justify-evenly"};function MC(n,e,t,r,i,s){return ua(),vl(Ly,{class:"relative-position"},{default:Qe(()=>[Ce(Uy,{class:"absolute full-width full-height"},{default:Qe(()=>[vt("div",kC,[vt("div",AC,[Ce(Py,{class:"new-bit","bottom-slots":"",modelValue:n.newBitterContent,"onUpdate:modelValue":e[0]||(e[0]=o=>n.newBitterContent=o),placeholder:"What's Horrible",counter:"",maxlength:"280",dense:n.dense,autogrow:""},{before:Qe(()=>[Ce(Sl,{size:"xl"},{default:Qe(()=>[CC]),_:1})]),_:1},8,["modelValue","dense"])]),vt("div",DC,[Ce(Br,{onClick:e[1]||(e[1]=o=>n.addNewBeet()),disabled:!n.newBitterContent,color:"primary",label:"Spew",rounded:"",dense:"",flat:"",icon:"send","no-caps":""},null,8,["disabled"])])]),Ce(Vy,{size:"10px"}),Ce(Oy,{separator:""},{default:Qe(()=>[Ce(Cy,{tag:"q-item",appear:"","enter-active-class":"animated fadeIn slow","leave-active-class":"animated fadeOut slow"},{default:Qe(()=>[(ua(!0),Dy(Ry,null,Ny(n.beets,o=>(ua(),vl(My,{class:"q-py-md beet",key:o.id},{default:Qe(()=>[Ce(Tl,{avatar:"",top:""},{default:Qe(()=>[Ce(Sl,null,{default:Qe(()=>[NC]),_:1})]),_:1}),Ce(Tl,null,{default:Qe(()=>[Ce(El,{lines:"1"},{default:Qe(()=>[RC,vt("span",xC,[la("@moustaff "),PC,la(" \u2022 "+wl(n.relativeDate(o.date)),1)])]),_:2},1024),Ce(El,{class:"bitter-content"},{default:Qe(()=>[la(wl(o.content),1)]),_:2},1024),vt("div",OC,[Ce(Br,{color:"grey",size:"sm",flat:"",round:"",icon:"chat"}),Ce(Br,{color:"grey",size:"sm",flat:"",round:"",icon:"reply"}),Ce(Br,{onClick:a=>n.likeBeet(o),color:"grey",size:"sm",flat:"",round:"",icon:o.liked?"favorite":"favorite_border"},null,8,["onClick","icon"]),Ce(Br,{onClick:a=>n.deleteBeet(o),color:"grey",size:"sm",flat:"",round:"",icon:"delete"},null,8,["onClick"])])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1})}var qC=ky(SC,[["render",MC]]);export{qC as default};
