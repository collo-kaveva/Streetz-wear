import{A as e,C as t,D as n,E as r,M as i,N as a,S as o,T as s,_ as c,a as l,b as u,c as d,d as f,f as p,g as m,h,i as g,j as _,l as v,m as y,n as b,o as x,p as S,r as C,s as w,u as T,v as E,w as D,x as O,y as k}from"./index-BGclBF49.js";import{t as A}from"./clsx-CjueKrWZ.js";var j={data:``},M=e=>{if(typeof window==`object`){let t=(e?e.querySelector(`#_goober`):window._goober)||Object.assign(document.createElement(`style`),{innerHTML:` `,id:`_goober`});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||j},N=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,P=/\/\*[^]*?\*\/|  +/g,F=/\n+/g,I=(e,t)=>{let n=``,r=``,i=``;for(let a in e){let o=e[a];a[0]==`@`?a[1]==`i`?n=a+` `+o+`;`:r+=a[1]==`f`?I(o,a):a+`{`+I(o,a[1]==`k`?``:t)+`}`:typeof o==`object`?r+=I(o,t?t.replace(/([^,])+/g,e=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+` `+t:t)):a):o!=null&&(a=a[1]==`-`?a:a.replace(/[A-Z]/g,`-$&`).toLowerCase(),i+=I.p?I.p(a,o):a+`:`+o+`;`)}return n+(t&&i?t+`{`+i+`}`:i)+r},L={},R=e=>{if(typeof e==`object`){let t=``;for(let n in e)t+=n+R(e[n]);return t}return e},z=(e,t,n,r,i)=>{let a=R(e),o=L[a]||(L[a]=(e=>{let t=0,n=11;for(;t<e.length;)n=101*n+e.charCodeAt(t++)>>>0;return`go`+n})(a));if(!L[o]){let t=a===e?(e=>{let t,n,r=[{}];for(;t=N.exec(e.replace(P,``));)t[4]?r.shift():t[3]?(n=t[3].replace(F,` `).trim(),r.unshift(r[0][n]=r[0][n]||{})):r[0][t[1]]=t[2].replace(F,` `).trim();return r[0]})(e):e;L[o]=I(i?{[`@keyframes `+o]:t}:t,n?``:`.`+o)}let s=n&&L.g;return n&&(L.g=L[o]),((e,t,n,r)=>{r?t.data=t.data.replace(r,e):t.data.indexOf(e)===-1&&(t.data=n?e+t.data:t.data+e)})(L[o],t,r,s),o},B=(e,t,n)=>e.reduce((e,r,i)=>{let a=t[i];if(a&&a.call){let e=a(n),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;a=t?`.`+t:e&&typeof e==`object`?e.props?``:I(e,``):!1===e?``:e}return e+r+(a??``)},``);function V(e){let t=this||{},n=e.call?e(t.p):e;return z(n.unshift?n.raw?B(n,[].slice.call(arguments,1),t.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(t.p):n),{}):n,M(t.target),t.g,t.o,t.k)}V.bind({g:1}),V.bind({k:1});var H={colors:{inherit:`inherit`,current:`currentColor`,transparent:`transparent`,black:`#000000`,white:`#ffffff`,neutral:{50:`#f9fafb`,100:`#f2f4f7`,200:`#eaecf0`,300:`#d0d5dd`,400:`#98a2b3`,500:`#667085`,600:`#475467`,700:`#344054`,800:`#1d2939`,900:`#101828`},darkGray:{50:`#525c7a`,100:`#49536e`,200:`#414962`,300:`#394056`,400:`#313749`,500:`#292e3d`,600:`#212530`,700:`#191c24`,800:`#111318`,900:`#0b0d10`},gray:{50:`#f9fafb`,100:`#f2f4f7`,200:`#eaecf0`,300:`#d0d5dd`,400:`#98a2b3`,500:`#667085`,600:`#475467`,700:`#344054`,800:`#1d2939`,900:`#101828`},blue:{25:`#F5FAFF`,50:`#EFF8FF`,100:`#D1E9FF`,200:`#B2DDFF`,300:`#84CAFF`,400:`#53B1FD`,500:`#2E90FA`,600:`#1570EF`,700:`#175CD3`,800:`#1849A9`,900:`#194185`},green:{25:`#F6FEF9`,50:`#ECFDF3`,100:`#D1FADF`,200:`#A6F4C5`,300:`#6CE9A6`,400:`#32D583`,500:`#12B76A`,600:`#039855`,700:`#027A48`,800:`#05603A`,900:`#054F31`},red:{50:`#fef2f2`,100:`#fee2e2`,200:`#fecaca`,300:`#fca5a5`,400:`#f87171`,500:`#ef4444`,600:`#dc2626`,700:`#b91c1c`,800:`#991b1b`,900:`#7f1d1d`,950:`#450a0a`},yellow:{25:`#FFFCF5`,50:`#FFFAEB`,100:`#FEF0C7`,200:`#FEDF89`,300:`#FEC84B`,400:`#FDB022`,500:`#F79009`,600:`#DC6803`,700:`#B54708`,800:`#93370D`,900:`#7A2E0E`},purple:{25:`#FAFAFF`,50:`#F4F3FF`,100:`#EBE9FE`,200:`#D9D6FE`,300:`#BDB4FE`,400:`#9B8AFB`,500:`#7A5AF8`,600:`#6938EF`,700:`#5925DC`,800:`#4A1FB8`,900:`#3E1C96`},teal:{25:`#F6FEFC`,50:`#F0FDF9`,100:`#CCFBEF`,200:`#99F6E0`,300:`#5FE9D0`,400:`#2ED3B7`,500:`#15B79E`,600:`#0E9384`,700:`#107569`,800:`#125D56`,900:`#134E48`},pink:{25:`#fdf2f8`,50:`#fce7f3`,100:`#fbcfe8`,200:`#f9a8d4`,300:`#f472b6`,400:`#ec4899`,500:`#db2777`,600:`#be185d`,700:`#9d174d`,800:`#831843`,900:`#500724`},cyan:{25:`#ecfeff`,50:`#cffafe`,100:`#a5f3fc`,200:`#67e8f9`,300:`#22d3ee`,400:`#06b6d4`,500:`#0891b2`,600:`#0e7490`,700:`#155e75`,800:`#164e63`,900:`#083344`}},alpha:{100:`ff`,90:`e5`,80:`cc`,70:`b3`,60:`99`,50:`80`,40:`66`,30:`4d`,20:`33`,10:`1a`,0:`00`},font:{size:{"2xs":`calc(var(--tsrd-font-size) * 0.625)`,xs:`calc(var(--tsrd-font-size) * 0.75)`,sm:`calc(var(--tsrd-font-size) * 0.875)`,md:`var(--tsrd-font-size)`,lg:`calc(var(--tsrd-font-size) * 1.125)`,xl:`calc(var(--tsrd-font-size) * 1.25)`,"2xl":`calc(var(--tsrd-font-size) * 1.5)`,"3xl":`calc(var(--tsrd-font-size) * 1.875)`,"4xl":`calc(var(--tsrd-font-size) * 2.25)`,"5xl":`calc(var(--tsrd-font-size) * 3)`,"6xl":`calc(var(--tsrd-font-size) * 3.75)`,"7xl":`calc(var(--tsrd-font-size) * 4.5)`,"8xl":`calc(var(--tsrd-font-size) * 6)`,"9xl":`calc(var(--tsrd-font-size) * 8)`},lineHeight:{"3xs":`calc(var(--tsrd-font-size) * 0.75)`,"2xs":`calc(var(--tsrd-font-size) * 0.875)`,xs:`calc(var(--tsrd-font-size) * 1)`,sm:`calc(var(--tsrd-font-size) * 1.25)`,md:`calc(var(--tsrd-font-size) * 1.5)`,lg:`calc(var(--tsrd-font-size) * 1.75)`,xl:`calc(var(--tsrd-font-size) * 2)`,"2xl":`calc(var(--tsrd-font-size) * 2.25)`,"3xl":`calc(var(--tsrd-font-size) * 2.5)`,"4xl":`calc(var(--tsrd-font-size) * 2.75)`,"5xl":`calc(var(--tsrd-font-size) * 3)`,"6xl":`calc(var(--tsrd-font-size) * 3.25)`,"7xl":`calc(var(--tsrd-font-size) * 3.5)`,"8xl":`calc(var(--tsrd-font-size) * 3.75)`,"9xl":`calc(var(--tsrd-font-size) * 4)`},weight:{thin:`100`,extralight:`200`,light:`300`,normal:`400`,medium:`500`,semibold:`600`,bold:`700`,extrabold:`800`,black:`900`},fontFamily:{sans:`ui-sans-serif, Inter, system-ui, sans-serif, sans-serif`,mono:`ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`}},breakpoints:{xs:`320px`,sm:`640px`,md:`768px`,lg:`1024px`,xl:`1280px`,"2xl":`1536px`},border:{radius:{none:`0px`,xs:`calc(var(--tsrd-font-size) * 0.125)`,sm:`calc(var(--tsrd-font-size) * 0.25)`,md:`calc(var(--tsrd-font-size) * 0.375)`,lg:`calc(var(--tsrd-font-size) * 0.5)`,xl:`calc(var(--tsrd-font-size) * 0.75)`,"2xl":`calc(var(--tsrd-font-size) * 1)`,"3xl":`calc(var(--tsrd-font-size) * 1.5)`,full:`9999px`}},size:{0:`0px`,.25:`calc(var(--tsrd-font-size) * 0.0625)`,.5:`calc(var(--tsrd-font-size) * 0.125)`,1:`calc(var(--tsrd-font-size) * 0.25)`,1.5:`calc(var(--tsrd-font-size) * 0.375)`,2:`calc(var(--tsrd-font-size) * 0.5)`,2.5:`calc(var(--tsrd-font-size) * 0.625)`,3:`calc(var(--tsrd-font-size) * 0.75)`,3.5:`calc(var(--tsrd-font-size) * 0.875)`,4:`calc(var(--tsrd-font-size) * 1)`,4.5:`calc(var(--tsrd-font-size) * 1.125)`,5:`calc(var(--tsrd-font-size) * 1.25)`,5.5:`calc(var(--tsrd-font-size) * 1.375)`,6:`calc(var(--tsrd-font-size) * 1.5)`,6.5:`calc(var(--tsrd-font-size) * 1.625)`,7:`calc(var(--tsrd-font-size) * 1.75)`,8:`calc(var(--tsrd-font-size) * 2)`,9:`calc(var(--tsrd-font-size) * 2.25)`,10:`calc(var(--tsrd-font-size) * 2.5)`,11:`calc(var(--tsrd-font-size) * 2.75)`,12:`calc(var(--tsrd-font-size) * 3)`,14:`calc(var(--tsrd-font-size) * 3.5)`,16:`calc(var(--tsrd-font-size) * 4)`,20:`calc(var(--tsrd-font-size) * 5)`,24:`calc(var(--tsrd-font-size) * 6)`,28:`calc(var(--tsrd-font-size) * 7)`,32:`calc(var(--tsrd-font-size) * 8)`,36:`calc(var(--tsrd-font-size) * 9)`,40:`calc(var(--tsrd-font-size) * 10)`,44:`calc(var(--tsrd-font-size) * 11)`,48:`calc(var(--tsrd-font-size) * 12)`,52:`calc(var(--tsrd-font-size) * 13)`,56:`calc(var(--tsrd-font-size) * 14)`,60:`calc(var(--tsrd-font-size) * 15)`,64:`calc(var(--tsrd-font-size) * 16)`,72:`calc(var(--tsrd-font-size) * 18)`,80:`calc(var(--tsrd-font-size) * 20)`,96:`calc(var(--tsrd-font-size) * 24)`},shadow:{xs:(e=`rgb(0 0 0 / 0.1)`)=>`0 1px 2px 0 rgb(0 0 0 / 0.05)`,sm:(e=`rgb(0 0 0 / 0.1)`)=>`0 1px 3px 0 ${e}, 0 1px 2px -1px ${e}`,md:(e=`rgb(0 0 0 / 0.1)`)=>`0 4px 6px -1px ${e}, 0 2px 4px -2px ${e}`,lg:(e=`rgb(0 0 0 / 0.1)`)=>`0 10px 15px -3px ${e}, 0 4px 6px -4px ${e}`,xl:(e=`rgb(0 0 0 / 0.1)`)=>`0 20px 25px -5px ${e}, 0 8px 10px -6px ${e}`,"2xl":(e=`rgb(0 0 0 / 0.25)`)=>`0 25px 50px -12px ${e}`,inner:(e=`rgb(0 0 0 / 0.05)`)=>`inset 0 2px 4px 0 ${e}`,none:()=>`none`},zIndices:{hide:-1,auto:`auto`,base:0,docked:10,dropdown:1e3,sticky:1100,banner:1200,overlay:1300,modal:1400,popover:1500,skipLink:1600,toast:1700,tooltip:1800}},U=e=>{let{colors:t,font:n,size:r,alpha:i,shadow:a,border:o}=H,{fontFamily:s,lineHeight:c,size:l}=n,u=e?V.bind({target:e}):V;return{devtoolsPanelContainer:u`
      direction: ltr;
      position: fixed;
      bottom: 0;
      right: 0;
      z-index: 99999;
      width: 100%;
      max-height: 90%;
      border-top: 1px solid ${t.gray[700]};
      transform-origin: top;
    `,devtoolsPanelContainerVisibility:e=>u`
        visibility: ${e?`visible`:`hidden`};
      `,devtoolsPanelContainerResizing:e=>e()?u`
          transition: none;
        `:u`
        transition: all 0.4s ease;
      `,devtoolsPanelContainerAnimation:(e,t)=>e?u`
          pointer-events: auto;
          transform: translateY(0);
        `:u`
        pointer-events: none;
        transform: translateY(${t}px);
      `,logo:u`
      cursor: pointer;
      display: flex;
      flex-direction: column;
      background-color: transparent;
      border: none;
      font-family: ${s.sans};
      gap: ${H.size[.5]};
      padding: 0px;
      &:hover {
        opacity: 0.7;
      }
      &:focus-visible {
        outline-offset: 4px;
        border-radius: ${o.radius.xs};
        outline: 2px solid ${t.blue[800]};
      }
    `,tanstackLogo:u`
      font-size: ${n.size.md};
      font-weight: ${n.weight.bold};
      line-height: ${n.lineHeight.xs};
      white-space: nowrap;
      color: ${t.gray[300]};
    `,routerLogo:u`
      font-weight: ${n.weight.semibold};
      font-size: ${n.size.xs};
      background: linear-gradient(to right, #84cc16, #10b981);
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,devtoolsPanel:u`
      display: flex;
      font-size: ${l.sm};
      font-family: ${s.sans};
      background-color: ${t.darkGray[700]};
      color: ${t.gray[300]};

      @media (max-width: 700px) {
        flex-direction: column;
      }
      @media (max-width: 600px) {
        font-size: ${l.xs};
      }
    `,dragHandle:u`
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 4px;
      cursor: row-resize;
      z-index: 100000;
      &:hover {
        background-color: ${t.purple[400]}${i[90]};
      }
    `,firstContainer:u`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      border-right: 1px solid ${t.gray[700]};
      display: flex;
      flex-direction: column;
    `,routerExplorerContainer:u`
      overflow-y: auto;
      flex: 1;
    `,routerExplorer:u`
      padding: ${H.size[2]};
    `,row:u`
      display: flex;
      align-items: center;
      padding: ${H.size[2]} ${H.size[2.5]};
      gap: ${H.size[2.5]};
      border-bottom: ${t.darkGray[500]} 1px solid;
      align-items: center;
    `,detailsHeader:u`
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      position: sticky;
      top: 0;
      z-index: 2;
      background-color: ${t.darkGray[600]};
      padding: 0px ${H.size[2]};
      font-weight: ${n.weight.medium};
      font-size: ${n.size.xs};
      min-height: ${H.size[8]};
      line-height: ${n.lineHeight.xs};
      text-align: left;
      display: flex;
      align-items: center;
    `,maskedBadge:u`
      background: ${t.yellow[900]}${i[70]};
      color: ${t.yellow[300]};
      display: inline-block;
      padding: ${H.size[0]} ${H.size[2.5]};
      border-radius: ${o.radius.full};
      font-size: ${n.size.xs};
      font-weight: ${n.weight.normal};
      border: 1px solid ${t.yellow[300]};
    `,maskedLocation:u`
      color: ${t.yellow[300]};
    `,detailsContent:u`
      padding: ${H.size[1.5]} ${H.size[2]};
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: ${n.size.xs};
    `,routeMatchesToggle:u`
      display: flex;
      align-items: center;
      border: 1px solid ${t.gray[500]};
      border-radius: ${o.radius.sm};
      overflow: hidden;
    `,routeMatchesToggleBtn:(e,r)=>{let a=[u`
        appearance: none;
        border: none;
        font-size: 12px;
        padding: 4px 8px;
        background: transparent;
        cursor: pointer;
        font-family: ${s.sans};
        font-weight: ${n.weight.medium};
      `];if(e){let e=u`
          background: ${t.darkGray[400]};
          color: ${t.gray[300]};
        `;a.push(e)}else{let e=u`
          color: ${t.gray[500]};
          background: ${t.darkGray[800]}${i[20]};
        `;a.push(e)}return r&&a.push(u`
          border-right: 1px solid ${H.colors.gray[500]};
        `),a},detailsHeaderInfo:u`
      flex: 1;
      justify-content: flex-end;
      display: flex;
      align-items: center;
      font-weight: ${n.weight.normal};
      color: ${t.gray[400]};
    `,matchRow:e=>{let n=[u`
        display: flex;
        border-bottom: 1px solid ${t.darkGray[400]};
        cursor: pointer;
        align-items: center;
        padding: ${r[1]} ${r[2]};
        gap: ${r[2]};
        font-size: ${l.xs};
        color: ${t.gray[300]};
      `];if(e){let e=u`
          background: ${t.darkGray[500]};
        `;n.push(e)}return n},matchIndicator:e=>{let n=[u`
        flex: 0 0 auto;
        width: ${r[3]};
        height: ${r[3]};
        background: ${t[e][900]};
        border: 1px solid ${t[e][500]};
        border-radius: ${o.radius.full};
        transition: all 0.25s ease-out;
        box-sizing: border-box;
      `];if(e===`gray`){let e=u`
          background: ${t.gray[700]};
          border-color: ${t.gray[400]};
        `;n.push(e)}return n},matchID:u`
      flex: 1;
      line-height: ${c.xs};
    `,ageTicker:e=>{let n=[u`
        display: flex;
        gap: ${r[1]};
        font-size: ${l.xs};
        color: ${t.gray[400]};
        font-variant-numeric: tabular-nums;
        line-height: ${c.xs};
      `];if(e){let e=u`
          color: ${t.yellow[400]};
        `;n.push(e)}return n},secondContainer:u`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      border-right: 1px solid ${t.gray[700]};
      display: flex;
      flex-direction: column;
    `,thirdContainer:u`
      flex: 1 1 500px;
      overflow: auto;
      display: flex;
      flex-direction: column;
      height: 100%;
      border-right: 1px solid ${t.gray[700]};

      @media (max-width: 700px) {
        border-top: 2px solid ${t.gray[700]};
      }
    `,fourthContainer:u`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      display: flex;
      flex-direction: column;
    `,routesContainer:u`
      overflow-x: auto;
      overflow-y: visible;
    `,routesRowContainer:(e,n)=>{let i=[u`
        display: flex;
        border-bottom: 1px solid ${t.darkGray[400]};
        align-items: center;
        padding: ${r[1]} ${r[2]};
        gap: ${r[2]};
        font-size: ${l.xs};
        color: ${t.gray[300]};
        cursor: ${n?`pointer`:`default`};
        line-height: ${c.xs};
      `];if(e){let e=u`
          background: ${t.darkGray[500]};
        `;i.push(e)}return i},routesRow:e=>{let n=[u`
        flex: 1 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: ${l.xs};
        line-height: ${c.xs};
      `];if(!e){let e=u`
          color: ${t.gray[400]};
        `;n.push(e)}return n},routesRowInner:u`
      display: 'flex';
      align-items: 'center';
      flex-grow: 1;
      min-width: 0;
    `,routeParamInfo:u`
      color: ${t.gray[400]};
      font-size: ${l.xs};
      line-height: ${c.xs};
    `,nestedRouteRow:e=>u`
        margin-left: ${e?0:r[3.5]};
        border-left: ${e?``:`solid 1px ${t.gray[700]}`};
      `,code:u`
      font-size: ${l.xs};
      line-height: ${c.xs};
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `,matchesContainer:u`
      flex: 1 1 auto;
      overflow-y: auto;
    `,cachedMatchesContainer:u`
      flex: 1 1 auto;
      overflow-y: auto;
      max-height: 50%;
    `,historyContainer:u`
      display: flex;
      flex: 1 1 auto;
      overflow-y: auto;
      max-height: 50%;
    `,historyOverflowContainer:u`
      padding: ${r[1]} ${r[2]};
      font-size: ${H.font.size.xs};
    `,maskedBadgeContainer:u`
      flex: 1;
      justify-content: flex-end;
      display: flex;
    `,matchDetails:u`
      display: flex;
      flex-direction: column;
      padding: ${H.size[2]};
      font-size: ${H.font.size.xs};
      color: ${H.colors.gray[300]};
      line-height: ${H.font.lineHeight.sm};
    `,matchStatus:(e,t)=>{let n=t&&e===`success`?t===`beforeLoad`?`purple`:`blue`:{pending:`yellow`,success:`green`,error:`red`,notFound:`purple`,redirected:`gray`}[e];return u`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        border-radius: ${H.border.radius.sm};
        font-weight: ${H.font.weight.normal};
        background-color: ${H.colors[n][900]}${H.alpha[90]};
        color: ${H.colors[n][300]};
        border: 1px solid ${H.colors[n][600]};
        margin-bottom: ${H.size[2]};
        transition: all 0.25s ease-out;
      `},matchDetailsInfo:u`
      display: flex;
      justify-content: flex-end;
      flex: 1;
    `,matchDetailsInfoLabel:u`
      display: flex;
    `,mainCloseBtn:u`
      background: ${t.darkGray[700]};
      padding: ${r[1]} ${r[2]} ${r[1]} ${r[1.5]};
      border-radius: ${o.radius.md};
      position: fixed;
      z-index: 99999;
      display: inline-flex;
      width: fit-content;
      cursor: pointer;
      appearance: none;
      border: 0;
      gap: 8px;
      align-items: center;
      border: 1px solid ${t.gray[500]};
      font-size: ${n.size.xs};
      cursor: pointer;
      transition: all 0.25s ease-out;

      &:hover {
        background: ${t.darkGray[500]};
      }
    `,mainCloseBtnPosition:e=>u`
        ${e===`top-left`?`top: ${r[2]}; left: ${r[2]};`:``}
        ${e===`top-right`?`top: ${r[2]}; right: ${r[2]};`:``}
        ${e===`bottom-left`?`bottom: ${r[2]}; left: ${r[2]};`:``}
        ${e===`bottom-right`?`bottom: ${r[2]}; right: ${r[2]};`:``}
      `,mainCloseBtnAnimation:e=>e?u`
        opacity: 0;
        pointer-events: none;
        visibility: hidden;
      `:u`
          opacity: 1;
          pointer-events: auto;
          visibility: visible;
        `,routerLogoCloseButton:u`
      font-weight: ${n.weight.semibold};
      font-size: ${n.size.xs};
      background: linear-gradient(to right, #98f30c, #00f4a3);
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,mainCloseBtnDivider:u`
      width: 1px;
      background: ${H.colors.gray[600]};
      height: 100%;
      border-radius: 999999px;
      color: transparent;
    `,mainCloseBtnIconContainer:u`
      position: relative;
      width: ${r[5]};
      height: ${r[5]};
      background: pink;
      border-radius: 999999px;
      overflow: hidden;
    `,mainCloseBtnIconOuter:u`
      width: ${r[5]};
      height: ${r[5]};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      filter: blur(3px) saturate(1.8) contrast(2);
    `,mainCloseBtnIconInner:u`
      width: ${r[4]};
      height: ${r[4]};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `,panelCloseBtn:u`
      position: absolute;
      cursor: pointer;
      z-index: 100001;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      background-color: ${t.darkGray[700]};
      &:hover {
        background-color: ${t.darkGray[500]};
      }

      top: 0;
      right: ${r[2]};
      transform: translate(0, -100%);
      border-right: ${t.darkGray[300]} 1px solid;
      border-left: ${t.darkGray[300]} 1px solid;
      border-top: ${t.darkGray[300]} 1px solid;
      border-bottom: none;
      border-radius: ${o.radius.sm} ${o.radius.sm} 0px 0px;
      padding: ${r[1]} ${r[1.5]} ${r[.5]} ${r[1.5]};

      &::after {
        content: ' ';
        position: absolute;
        top: 100%;
        left: -${r[2.5]};
        height: ${r[1.5]};
        width: calc(100% + ${r[5]});
      }
    `,panelCloseBtnIcon:u`
      color: ${t.gray[400]};
      width: ${r[2]};
      height: ${r[2]};
    `,navigateButton:u`
      background: none;
      border: none;
      padding: 0 0 0 4px;
      margin: 0;
      color: ${t.gray[400]};
      font-size: ${l.md};
      cursor: pointer;
      line-height: 1;
      vertical-align: middle;
      margin-right: 0.5ch;
      flex-shrink: 0;
      &:hover {
        color: ${t.blue[300]};
      }
    `}};function W(){let[e]=h(U(r(x)));return e}var G=e=>{try{let t=localStorage.getItem(e);return typeof t==`string`?JSON.parse(t):void 0}catch{return}};function K(e,t){let[n,r]=h();return p(()=>{r(G(e)??(typeof t==`function`?t():t))}),[n,t=>{r(n=>{let r=t;typeof t==`function`&&(r=t(n));try{localStorage.setItem(e,JSON.stringify(r))}catch{}return r})}]}var ee=typeof window>`u`;function te(e){return e.isFetching&&e.status===`success`?e.isFetching===`beforeLoad`?`purple`:`blue`:{pending:`yellow`,success:`green`,error:`red`,notFound:`purple`,redirected:`gray`}[e.status]}function q(e,t){let n=e.find(e=>e.routeId===t.id);return n?te(n):`gray`}function ne(){let[e,t]=h(!1);return(ee?p:y)(()=>{t(!0)}),e}var re=Symbol.for(`tanstack.rsc.stream`),ie=Symbol.for(`tanstack.rsc.renderable`),J=Symbol.for(`tanstack.rsc.slotUsages`);function Y(e){let t=e.length;for(;t>0&&e[t-1]===void 0;)t--;return t===0||t===e.length?e:e.slice(0,t)}var X=e=>(typeof e==`object`||typeof e==`function`)&&e!==null&&re in e,ae=e=>{if(!X(e))return null;let t=e;return ie in t&&t[ie]===!0?`renderableValue`:`compositeSource`},oe=e=>{if(!X(e))return[];let t=e,n=[];if(J in t){let e=t[J];if(Array.isArray(e))for(let t of e){let e=t?.slot;typeof e==`string`&&!n.includes(e)&&n.push(e)}}return n},se=e=>{if(!X(e))return[];let t=e;if(!(J in t))return[];let n=t[J];return Array.isArray(n)?n.filter(e=>e&&typeof e==`object`&&typeof e.slot==`string`&&(e.args===void 0||Array.isArray(e.args))):[]},ce=e=>{let t=se(e),n={};for(let e of t){let t=Y(e.args??[]),r=n[e.slot]??(n[e.slot]={count:0,invocations:[]});r.count++,r.invocations.push(t)}return n},le=e=>{if(e===`React element`)return`React element`;let t=ae(e);if(t===`compositeSource`){let t=oe(e);return t.length>0?`RSC composite source (${t.length} ${t.length===1?`slot`:`slots`})`:`RSC composite source`}if(t===`renderableValue`)return`RSC renderable value`;let n=Object.getOwnPropertyNames(Object(e)),r=typeof e==`bigint`?`${e.toString()}n`:e;try{return JSON.stringify(r,n)}catch{return`unable to stringify`}};function ue(e,t=[e=>e]){return e.map((e,t)=>[e,t]).sort(([e,n],[r,i])=>{for(let n of t){let t=n(e),i=n(r);if(t===void 0){if(i===void 0)continue;return 1}if(t!==i)return t>i?1:-1}return n-i}).map(([e])=>e)}var de=D(`<span><svg xmlns=http://www.w3.org/2000/svg width=12 height=12 fill=none viewBox="0 0 24 24"><path stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=2 d="M9 18l6-6-6-6">`),Z=D(`<div>`),fe=D(`<button><span>:</span><span>`),pe=D(`<div><span>slots</span><div>`),me=D(`<span>:`),he=D(`<span>`),ge=D(`<button><span> `),_e=D(`<div><div><button> [<!> ... <!>]`),ve=D(`<button><span></span> 🔄 `),ye=({expanded:e,style:t={}})=>{let n=we();return(()=>{var t=de(),r=t.firstChild;return y(i=>{var a=n().expander,s=A(n().expanderIcon(e));return a!==i.e&&T(t,i.e=a),s!==i.t&&o(r,`class`,i.t=s),i},{e:void 0,t:void 0}),t})()};function be(e,t){if(t<1)return[];let n=0,r=[];for(;n<e.length;)r.push(e.slice(n,n+t)),n+=t;return r}function xe(e){return Symbol.iterator in e}function Se(e){if(!e||typeof e!=`object`)return!1;let t=Object.getPrototypeOf(e);return t===Object.prototype||t===null}function Q({value:e,defaultExpanded:t,pageSize:n=100,filterSubEntries:r,...i}){let[a,o]=h(!!t),s=()=>o(e=>!e),c=S(()=>typeof e()),l=S(()=>{let n=[],i=e=>{let n=t===!0?{[e.label]:!0}:t?.[e.label];return{...e,value:()=>e.value,defaultExpanded:n}};if(Array.isArray(e())&&e().length===2&&e()[0]===`React element`&&Se(e()[1])){let t=e();n=[i({label:`0`,value:t[0]}),...Object.entries(t[1]).map(([e,t])=>i({label:e,value:t}))]}else Array.isArray(e())?n=e().map((e,t)=>i({label:t.toString(),value:e})):e()!==null&&typeof e()==`object`&&xe(e())&&typeof e()[Symbol.iterator]==`function`?n=Array.from(e(),(e,t)=>i({label:t.toString(),value:e})):typeof e()==`object`&&e()!==null&&(n=Object.entries(e()).map(([e,t])=>i({label:e,value:t})));return r?r(n):n}),d=S(()=>be(l(),n)),[p,m]=h([]),[g,_]=h(void 0),v=we(),b=()=>{_(e()())},x=t=>f(Q,u({value:e,filterSubEntries:r},i,t)),C=S(()=>ae(e())),w=S(()=>oe(e())),D=S(()=>ce(e())),O=S(()=>C()===`compositeSource`&&w().length>0);return(()=>{var t=Z();return E(t,(()=>{var t=k(()=>C()!==null);return()=>t()?k(()=>!!O())()?[(()=>{var t=fe(),n=t.firstChild,r=n.firstChild,o=n.nextSibling;return t.$$click=()=>s(),E(t,f(ye,{get expanded(){return a()??!1}}),n),E(n,()=>i.label,r),E(o,()=>le(e())),y(e=>{var n=v().expandButton,r=v().compositeComponent;return n!==e.e&&T(t,e.e=n),r!==e.t&&T(o,e.t=r),e},{e:void 0,t:void 0}),t})(),k(()=>k(()=>!!(a()??!1))()?(()=>{var e=pe(),t=e.firstChild,n=t.nextSibling;return E(n,()=>w().map(e=>{let t=D()[e];return t?f(Q,{label:`${e}:`,value:()=>t.invocations.map(e=>e.length===1?e[0]:e)}):null})),y(r=>{var i=v().rscMetaRow,a=v().rscMetaLabel,o=v().subEntries;return i!==r.e&&T(e,r.e=i),a!==r.t&&T(t,r.t=a),o!==r.a&&T(n,r.a=o),r},{e:void 0,t:void 0,a:void 0}),e})():null)]:[(()=>{var e=me(),t=e.firstChild;return E(e,()=>i.label,t),e})(),` `,(()=>{var t=he();return E(t,()=>le(e())),y(()=>T(t,C()===`compositeSource`?v().compositeComponent:v().renderableComponent)),t})()]:k(()=>!!d().length)()?[(()=>{var e=ge(),t=e.firstChild,n=t.firstChild;return e.$$click=()=>s(),E(e,f(ye,{get expanded(){return a()??!1}}),t),E(e,()=>i.label,t),E(t,()=>String(c).toLowerCase()===`iterable`?`(Iterable) `:``,n),E(t,()=>l().length,n),E(t,()=>l().length>1?`items`:`item`,null),y(n=>{var r=v().expandButton,i=v().info;return r!==n.e&&T(e,n.e=r),i!==n.t&&T(t,n.t=i),n},{e:void 0,t:void 0}),e})(),k(()=>k(()=>!!(a()??!1))()?k(()=>d().length===1)()?(()=>{var e=Z();return E(e,()=>l().map((e,t)=>x(e))),y(()=>T(e,v().subEntries)),e})():(()=>{var e=Z();return E(e,()=>d().map((e,t)=>(()=>{var r=_e(),i=r.firstChild,a=i.firstChild,o=a.firstChild,s=o.nextSibling,c=s.nextSibling.nextSibling;return c.nextSibling,a.$$click=()=>m(e=>e.includes(t)?e.filter(e=>e!==t):[...e,t]),E(a,f(ye,{get expanded(){return p().includes(t)}}),o),E(a,t*n,s),E(a,t*n+n-1,c),E(i,(()=>{var n=k(()=>!!p().includes(t));return()=>n()?(()=>{var t=Z();return E(t,()=>e.map(e=>x(e))),y(()=>T(t,v().subEntries)),t})():null})(),null),y(e=>{var t=v().entry,n=A(v().labelButton,`labelButton`);return t!==e.e&&T(i,e.e=t),n!==e.t&&T(a,e.t=n),e},{e:void 0,t:void 0}),r})())),y(()=>T(e,v().subEntries)),e})():null)]:k(()=>c()===`function`)()?f(Q,{get label(){return(()=>{var e=ve(),t=e.firstChild;return e.$$click=b,E(t,()=>i.label),y(()=>T(e,v().refreshValueBtn)),e})()},value:g,defaultExpanded:{}}):[(()=>{var e=me(),t=e.firstChild;return E(e,()=>i.label,t),e})(),` `,(()=>{var t=he();return E(t,()=>le(e())),y(()=>T(t,v().value)),t})()]})()),y(()=>T(t,v().entry)),t})()}var Ce=e=>{let{colors:t,font:n,size:r,border:i}=H,{fontFamily:a,lineHeight:o,size:s}=n,c=e?V.bind({target:e}):V;return{entry:c`
      font-family: ${a.mono};
      font-size: ${s.xs};
      line-height: ${o.sm};
      outline: none;
      word-break: break-word;
    `,labelButton:c`
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      background: transparent;
      border: none;
      padding: 0;
    `,expander:c`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: ${r[3]};
      height: ${r[3]};
      padding-left: 3px;
      box-sizing: content-box;
    `,expanderIcon:e=>e?c`
          transform: rotate(90deg);
          transition: transform 0.1s ease;
        `:c`
        transform: rotate(0deg);
        transition: transform 0.1s ease;
      `,expandButton:c`
      display: flex;
      gap: ${r[1]};
      align-items: center;
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      background: transparent;
      border: none;
      padding: 0;
    `,value:c`
      color: ${t.purple[400]};
    `,compositeComponent:c`
      display: inline-flex;
      align-items: center;
      padding: 1px ${r[1]};
      border-radius: ${i.radius.full};
      border: 1px solid ${t.darkGray[500]};
      background: ${t.darkGray[700]};
      color: ${t.cyan[300]};
      font-style: normal;
      font-weight: ${n.weight.medium};
    `,renderableComponent:c`
      display: inline-flex;
      align-items: center;
      padding: 1px ${r[1]};
      border-radius: ${i.radius.full};
      border: 1px solid ${t.darkGray[500]};
      background: ${t.darkGray[700]};
      color: ${t.teal[300]};
      font-style: normal;
      font-weight: ${n.weight.medium};
    `,rscMetaRow:c`
      display: flex;
      gap: ${r[1]};
      align-items: flex-start;
      margin-left: calc(${r[3]} + ${r[1]});
      margin-top: ${r[.5]};
      flex-wrap: wrap;
    `,rscMetaLabel:c`
      color: ${t.gray[500]};
      font-size: ${s[`2xs`]};
      text-transform: uppercase;
      letter-spacing: 0.06em;
      padding-top: 2px;
    `,rscChipRow:c`
      display: flex;
      gap: ${r[1]};
      flex-wrap: wrap;
    `,rscChip:c`
      display: inline-flex;
      align-items: center;
      gap: ${r[.5]};
      padding: 1px ${r[1]};
      border-radius: ${i.radius.full};
      border: 1px solid ${t.darkGray[500]};
      background: ${t.darkGray[800]};
      color: ${t.gray[200]};
      font-size: ${s[`2xs`]};
      line-height: ${o.xs};
    `,rscChipName:c`
      color: ${t.gray[100]};
    `,rscChipMeta:c`
      color: ${t.gray[400]};
      font-size: ${s[`2xs`]};
    `,subEntries:c`
      margin-left: ${r[2]};
      padding-left: ${r[2]};
      border-left: 2px solid ${t.darkGray[400]};
    `,info:c`
      color: ${t.gray[500]};
      font-size: ${s[`2xs`]};
      padding-left: ${r[1]};
    `,refreshValueBtn:c`
      appearance: none;
      border: 0;
      cursor: pointer;
      background: transparent;
      color: inherit;
      padding: 0;
      font-family: ${a.mono};
      font-size: ${s.xs};
    `}};function we(){let[e]=h(Ce(r(x)));return e}c([`click`]);var Te=D(`<div><div></div><div>/</div><div></div><div>/</div><div>`);function Ee(e){let t=[`s`,`min`,`h`,`d`],n=[e/1e3,e/6e4,e/36e5,e/864e5],r=0;for(let e=1;e<n.length&&!(n[e]<1);e++)r=e;return new Intl.NumberFormat(navigator.language,{compactDisplay:`short`,notation:`compact`,maximumFractionDigits:0}).format(n[r])+t[r]}function De({match:e,router:t}){let n=W();if(!e)return null;let r=t().looseRoutesById[e.routeId];if(!r.options.loader)return null;let i=Date.now()-e.updatedAt,a=r.options.staleTime??t().options.defaultStaleTime??0,o=r.options.gcTime??t().options.defaultGcTime??1800*1e3;return(()=>{var e=Te(),t=e.firstChild,r=t.nextSibling.nextSibling,s=r.nextSibling.nextSibling;return E(t,()=>Ee(i)),E(r,()=>Ee(a)),E(s,()=>Ee(o)),y(()=>T(e,A(n().ageTicker(i>a)))),e})()}var Oe=D(`<button type=button>➔`);function ke({to:e,params:t,search:n,router:r}){let i=W();return(()=>{var a=Oe();return a.$$click=i=>{i.stopPropagation(),r().navigate({to:e,params:t,search:n})},o(a,`title`,`Navigate to ${e}`),y(()=>T(a,i().navigateButton)),a})()}c([`click`]);var Ae=D(`<button><div>TANSTACK</div><div>TanStack Router v1`),je=D(`<div style=display:flex;align-items:center;width:100%><div style=flex-grow:1;min-width:0>`),Me=D(`<code> `),$=D(`<code>`),Ne=D(`<div><div role=button><div>`),Pe=D(`<div>`),Fe=D(`<div><ul>`),Ie=D(`<div><button><svg xmlns=http://www.w3.org/2000/svg width=10 height=6 fill=none viewBox="0 0 10 6"><path stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=1.667 d="M1 1l4 4 4-4"></path></svg></button><div><div></div><div><div></div></div></div><div><div><div><span>Pathname</span></div><div><code></code></div><div><div><button type=button>Routes</button><button type=button>Matches</button><button type=button>History</button></div><div><div>age / staleTime / gcTime</div></div></div><div>`),Le=D(`<div><span>masked`),Re=D(`<div role=button><div>`),ze=D(`<li><div>`),Be=D(`<li>This panel displays the most recent 15 navigations.`),Ve=D(`<div><div><div>Cached Matches</div><div>age / staleTime / gcTime</div></div><div>`),He=D(`<div><div>Match Details</div><div><div><div><div></div></div><div><div>ID:</div><div><code></code></div></div><div><div>State:</div><div></div></div><div><div>Last Updated:</div><div></div></div></div></div><div>Explorer</div><div>`),Ue=D(`<div>Loader Data`),We=D(`<div><div><span>Search Params</span></div><div>`),Ge=D(`<span style=margin-left:0.5rem>`),Ke=D(`<button type=button aria-label="Copy value to clipboard"style=cursor:pointer>`),qe=15;function Je(e){let{className:n,...r}=e,i=W();return(()=>{var e=Ae(),a=e.firstChild,o=a.nextSibling;return t(e,u(r,{get class(){return A(i().logo,n?n():``)}}),!1,!0),y(e=>{var t=i().tanstackLogo,n=i().routerLogo;return t!==e.e&&T(a,e.e=t),n!==e.t&&T(o,e.t=n),e},{e:void 0,t:void 0}),e})()}function Ye(e){return(()=>{var t=je(),n=t.firstChild;return E(t,()=>e.left,n),E(n,()=>e.children),E(t,()=>e.right,null),y(()=>T(t,e.class)),t})()}function Xe({routerState:t,pendingMatches:n,router:r,route:a,isRoot:s,activeId:c,setActiveId:l}){let u=W(),d=S(()=>n().length?n():t().matches),p=S(()=>t().matches.find(e=>e.routeId===a.id)),m=S(()=>{try{if(p()?.params){let e=p()?.params,t=a.path||i(a.id);if(t.startsWith(`$`)){let n=t.slice(1);if(e[n])return`(${e[n]})`}}return``}catch{return``}}),h=S(()=>{if(s||!a.path)return;let e=Object.assign({},...d().map(e=>e.params)),t=_({path:a.fullPath,params:e,decoder:r().pathParamsDecoder});return t.isMissingParams?void 0:t.interpolatedPath});return(()=>{var g=Ne(),_=g.firstChild,v=_.firstChild;return _.$$click=()=>{p()&&l(c()===a.id?``:a.id)},E(_,f(Ye,{get class(){return A(u().routesRow(!!p()))},get left(){return f(w,{get when(){return h()},children:e=>f(ke,{get to(){return e()},router:r})})},get right(){return f(De,{get match(){return p()},router:r})},get children(){return[(()=>{var t=Me(),n=t.firstChild;return E(t,()=>s?e:a.path||i(a.id),n),y(()=>T(t,u().code)),t})(),(()=>{var e=$();return E(e,m),y(()=>T(e,u().routeParamInfo)),e})()]}}),null),E(g,(()=>{var e=k(()=>!!a.children?.length);return()=>e()?(()=>{var e=Pe();return E(e,()=>[...a.children].sort((e,t)=>e.rank-t.rank).map(e=>f(Xe,{routerState:t,pendingMatches:n,router:r,route:e,activeId:c,setActiveId:l}))),y(()=>T(e,u().nestedRouteRow(!!s))),e})():null})(),null),y(e=>{var t=`Open match details for ${a.id}`,n=A(u().routesRowContainer(a.id===c(),!!p())),r=A(u().matchIndicator(q(d(),a)));return t!==e.e&&o(_,`aria-label`,e.e=t),n!==e.t&&T(_,e.t=n),r!==e.a&&T(v,e.a=r),e},{e:void 0,t:void 0,a:void 0}),g})()}var Ze=function({...r}){let{isOpen:i=!0,setIsOpen:c,handleDragStart:m,router:_,routerState:b,shadowDOMTarget:x,...C}=r,{onCloseClick:w}=n(),D=W(),{className:j,style:M,...N}=C,[P,F]=K(`tanstackRouterDevtoolsActiveTab`,`routes`),[I,L]=K(`tanstackRouterDevtoolsActiveRouteId`,``),[R,z]=h([]),[B,V]=h(!1),H,U;if(`subscribe`in _().stores.pendingMatches){let[e,t]=h([]);H=e;let[n,r]=h([]);U=n,p(()=>{let e=_().stores.pendingMatches;t(e.get());let n=e.subscribe(()=>{t(e.get())});O(()=>n.unsubscribe())}),p(()=>{let e=_().stores.cachedMatches;r(e.get());let t=e.subscribe(()=>{r(e.get())});O(()=>t.unsubscribe())})}else H=()=>_().stores.pendingMatches.get(),U=()=>_().stores.cachedMatches.get();p(()=>{let e=b().matches,t=e[e.length-1];if(!t)return;let n=s(()=>R()),r=n[0],i=r&&r.pathname===t.pathname&&JSON.stringify(r.search??{})===JSON.stringify(t.search??{});(!r||!i)&&(n.length>=qe&&V(!0),z(e=>{let n=[t,...e];return n.splice(qe),n}))});let G=S(()=>[...H(),...b().matches,...U()].find(e=>e.routeId===I()||e.id===I())),ee=S(()=>a(b().location.search)),q=S(()=>({..._(),state:b()})),ne=S(()=>Object.fromEntries(ue(Object.keys(q()),[`state`,`routesById`,`routesByPath`,`options`,`manifest`].map(e=>t=>t!==e)).map(e=>[e,q()[e]]).filter(e=>typeof e[1]!=`function`&&![`stores`,`basepath`,`injectedHtml`,`subscribers`,`latestLoadPromise`,`navigateTimeout`,`resetNextScroll`,`tempLocationKey`,`latestLocation`,`routeTree`,`history`].includes(e[0])))),re=S(()=>G()?.loaderData),ie=S(()=>G()),J=S(()=>b().location.search);return(()=>{var n=Ie(),r=n.firstChild,i=r.firstChild,a=r.nextSibling,s=a.firstChild,p=s.nextSibling,h=p.firstChild,x=a.nextSibling,S=x.firstChild,C=S.firstChild;C.firstChild;var O=C.nextSibling,z=O.firstChild,V=O.nextSibling,W=V.firstChild,K=W.firstChild,q=K.nextSibling,Y=q.nextSibling,X=W.nextSibling,ae=V.nextSibling;return t(n,u({get class(){return A(D().devtoolsPanel,`TanStackRouterDevtoolsPanel`,j?j():``)},get style(){return M?M():``}},N),!1,!0),E(n,m?(()=>{var e=Pe();return v(e,`mousedown`,m,!0),y(()=>T(e,D().dragHandle)),e})():null,r),r.$$click=e=>{c&&c(!1),w(e)},E(s,f(Je,{"aria-hidden":!0,onClick:e=>{c&&c(!1),w(e)}})),E(h,f(Q,{label:`Router`,value:ne,defaultExpanded:{state:{},context:{},options:{}},filterSubEntries:e=>e.filter(e=>typeof e.value()!=`function`)})),E(C,(()=>{var e=k(()=>!!b().location.maskedLocation);return()=>e()?(()=>{var e=Le(),t=e.firstChild;return y(n=>{var r=D().maskedBadgeContainer,i=D().maskedBadge;return r!==n.e&&T(e,n.e=r),i!==n.t&&T(t,n.t=i),n},{e:void 0,t:void 0}),e})():null})(),null),E(z,()=>b().location.pathname),E(O,(()=>{var e=k(()=>!!b().location.maskedLocation);return()=>e()?(()=>{var e=$();return E(e,()=>b().location.maskedLocation?.pathname),y(()=>T(e,D().maskedLocation)),e})():null})(),null),K.$$click=()=>{F(`routes`)},q.$$click=()=>{F(`matches`)},Y.$$click=()=>{F(`history`)},E(ae,f(d,{get children(){return[f(l,{get when(){return P()===`routes`},get children(){return f(Xe,{routerState:b,pendingMatches:H,router:_,get route(){return _().routeTree},isRoot:!0,activeId:I,setActiveId:L})}}),f(l,{get when(){return P()===`matches`},get children(){var t=Pe();return E(t,()=>(H().length?H():b().matches).map((t,n)=>(()=>{var n=Re(),r=n.firstChild;return n.$$click=()=>L(I()===t.id?``:t.id),E(n,f(Ye,{get left(){return f(ke,{get to(){return t.pathname},get params(){return t.params},get search(){return t.search},router:_})},get right(){return f(De,{match:t,router:_})},get children(){var n=$();return E(n,()=>`${t.routeId===`__root__`?e:t.pathname}`),y(()=>T(n,D().matchID)),n}}),null),y(e=>{var i=`Open match details for ${t.id}`,a=A(D().matchRow(t===G())),s=A(D().matchIndicator(te(t)));return i!==e.e&&o(n,`aria-label`,e.e=i),a!==e.t&&T(n,e.t=a),s!==e.a&&T(r,e.a=s),e},{e:void 0,t:void 0,a:void 0}),n})())),t}}),f(l,{get when(){return P()===`history`},get children(){var t=Fe(),n=t.firstChild;return E(n,f(g,{get each(){return R()},children:(t,n)=>(()=>{var r=ze(),i=r.firstChild;return E(r,f(Ye,{get left(){return f(ke,{get to(){return t.pathname},get params(){return t.params},get search(){return t.search},router:_})},get right(){return f(De,{match:t,router:_})},get children(){var n=$();return E(n,()=>`${t.routeId===`__root__`?e:t.pathname}`),y(()=>T(n,D().matchID)),n}}),null),y(e=>{var a=A(D().matchRow(t===G())),o=A(D().matchIndicator(n()===0?`green`:`gray`));return a!==e.e&&T(r,e.e=a),o!==e.t&&T(i,e.t=o),e},{e:void 0,t:void 0}),r})()}),null),E(n,(()=>{var e=k(()=>!!B());return()=>e()?(()=>{var e=Be();return y(()=>T(e,D().historyOverflowContainer)),e})():null})(),null),t}})]}})),E(x,(()=>{var e=k(()=>!!U().length);return()=>e()?(()=>{var e=Ve(),t=e.firstChild,n=t.firstChild.nextSibling,r=t.nextSibling;return E(r,()=>U().map(e=>(()=>{var t=Re(),n=t.firstChild;return t.$$click=()=>L(I()===e.id?``:e.id),E(t,f(Ye,{get left(){return f(ke,{get to(){return e.pathname},get params(){return e.params},get search(){return e.search},router:_})},get right(){return f(De,{match:e,router:_})},get children(){var t=$();return E(t,()=>`${e.id}`),y(()=>T(t,D().matchID)),t}}),null),y(r=>{var i=`Open match details for ${e.id}`,a=A(D().matchRow(e===G())),s=A(D().matchIndicator(te(e)));return i!==r.e&&o(t,`aria-label`,r.e=i),a!==r.t&&T(t,r.t=a),s!==r.a&&T(n,r.a=s),r},{e:void 0,t:void 0,a:void 0}),t})())),y(r=>{var i=D().cachedMatchesContainer,a=D().detailsHeader,o=D().detailsHeaderInfo;return i!==r.e&&T(e,r.e=i),a!==r.t&&T(t,r.t=a),o!==r.a&&T(n,r.a=o),r},{e:void 0,t:void 0,a:void 0}),e})():null})(),null),E(n,(()=>{var e=k(()=>!!(G()&&G()?.status));return()=>e()?(()=>{var e=He(),t=e.firstChild,n=t.nextSibling,r=n.firstChild,i=r.firstChild,a=i.firstChild,o=i.nextSibling,s=o.firstChild.nextSibling,c=s.firstChild,l=o.nextSibling,u=l.firstChild.nextSibling,d=l.nextSibling,p=d.firstChild.nextSibling,m=n.nextSibling,h=m.nextSibling;return E(a,(()=>{var e=k(()=>!!(G()?.status===`success`&&G()?.isFetching));return()=>e()?`fetching`:G()?.status})()),E(c,()=>G()?.id),E(u,(()=>{var e=k(()=>!!H().find(e=>e.id===G()?.id));return()=>e()?`Pending`:b().matches.find(e=>e.id===G()?.id)?`Active`:`Cached`})()),E(p,(()=>{var e=k(()=>!!G()?.updatedAt);return()=>e()?new Date(G()?.updatedAt).toLocaleTimeString():`N/A`})()),E(e,(()=>{var e=k(()=>!!re());return()=>e()?[(()=>{var e=Ue();return y(()=>T(e,D().detailsHeader)),e})(),(()=>{var e=Pe();return E(e,f(Q,{label:`loaderData`,value:re,defaultExpanded:{}})),y(()=>T(e,D().detailsContent)),e})()]:null})(),m),E(h,f(Q,{label:`Match`,value:ie,defaultExpanded:{}})),y(n=>{var a=D().thirdContainer,c=D().detailsHeader,f=D().matchDetails,g=D().matchStatus(G()?.status,G()?.isFetching),_=D().matchDetailsInfoLabel,v=D().matchDetailsInfo,y=D().matchDetailsInfoLabel,b=D().matchDetailsInfo,x=D().matchDetailsInfoLabel,S=D().matchDetailsInfo,C=D().detailsHeader,w=D().detailsContent;return a!==n.e&&T(e,n.e=a),c!==n.t&&T(t,n.t=c),f!==n.a&&T(r,n.a=f),g!==n.o&&T(i,n.o=g),_!==n.i&&T(o,n.i=_),v!==n.n&&T(s,n.n=v),y!==n.s&&T(l,n.s=y),b!==n.h&&T(u,n.h=b),x!==n.r&&T(d,n.r=x),S!==n.d&&T(p,n.d=S),C!==n.l&&T(m,n.l=C),w!==n.u&&T(h,n.u=w),n},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0}),e})():null})(),null),E(n,(()=>{var e=k(()=>!!ee());return()=>e()?(()=>{var e=We(),t=e.firstChild;t.firstChild;var n=t.nextSibling;return E(t,typeof navigator<`u`?(()=>{var e=Ge();return E(e,f(Qe,{getValue:()=>{let e=b().location.search;return JSON.stringify(e)}})),e})():null,null),E(n,f(Q,{value:J,get defaultExpanded(){return Object.keys(b().location.search).reduce((e,t)=>(e[t]={},e),{})}})),y(r=>{var i=D().fourthContainer,a=D().detailsHeader,o=D().detailsContent;return i!==r.e&&T(e,r.e=i),a!==r.t&&T(t,r.t=a),o!==r.a&&T(n,r.a=o),r},{e:void 0,t:void 0,a:void 0}),e})():null})(),null),y(e=>{var t=D().panelCloseBtn,n=D().panelCloseBtnIcon,c=D().firstContainer,l=D().row,u=D().routerExplorerContainer,d=D().routerExplorer,f=D().secondContainer,m=D().matchesContainer,g=D().detailsHeader,_=D().detailsContent,v=D().detailsHeader,y=D().routeMatchesToggle,b=P()===`routes`,w=A(D().routeMatchesToggleBtn(P()===`routes`,!0)),E=P()===`matches`,k=A(D().routeMatchesToggleBtn(P()===`matches`,!0)),j=P()===`history`,M=A(D().routeMatchesToggleBtn(P()===`history`,!1)),N=D().detailsHeaderInfo,F=A(D().routesContainer);return t!==e.e&&T(r,e.e=t),n!==e.t&&o(i,`class`,e.t=n),c!==e.a&&T(a,e.a=c),l!==e.o&&T(s,e.o=l),u!==e.i&&T(p,e.i=u),d!==e.n&&T(h,e.n=d),f!==e.s&&T(x,e.s=f),m!==e.h&&T(S,e.h=m),g!==e.r&&T(C,e.r=g),_!==e.d&&T(O,e.d=_),v!==e.l&&T(V,e.l=v),y!==e.u&&T(W,e.u=y),b!==e.c&&(K.disabled=e.c=b),w!==e.w&&T(K,e.w=w),E!==e.m&&(q.disabled=e.m=E),k!==e.f&&T(q,e.f=k),j!==e.y&&(Y.disabled=e.y=j),M!==e.g&&T(Y,e.g=M),N!==e.p&&T(X,e.p=N),F!==e.b&&T(ae,e.b=F),e},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0,g:void 0,p:void 0,b:void 0}),n})()};function Qe({getValue:e}){let[t,n]=h(!1),r=null,i=async()=>{if(typeof navigator>`u`||!navigator.clipboard?.writeText){console.warn(`TanStack Router Devtools: Clipboard API unavailable`);return}try{let t=e();await navigator.clipboard.writeText(t),n(!0),r&&clearTimeout(r),r=setTimeout(()=>n(!1),2500)}catch(e){console.error(`TanStack Router Devtools: Failed to copy`,e)}};return O(()=>{r&&clearTimeout(r)}),(()=>{var e=Ke();return e.$$click=i,E(e,()=>t()?`✅`:`📋`),y(()=>o(e,`title`,t()?`Copied!`:`Copy`)),e})()}c([`click`,`mousedown`]);var $e=D(`<svg xmlns=http://www.w3.org/2000/svg enable-background="new 0 0 634 633"viewBox="0 0 634 633"><g transform=translate(1)><linearGradient x1=-641.486 x2=-641.486 y1=856.648 y2=855.931 gradientTransform="matrix(633 0 0 -633 406377 542258)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#6bdaff></stop><stop offset=0.319 stop-color=#f9ffb5></stop><stop offset=0.706 stop-color=#ffa770></stop><stop offset=1 stop-color=#ff7373></stop></linearGradient><circle cx=316.5 cy=316.5 r=316.5 fill-rule=evenodd clip-rule=evenodd></circle><defs><filter width=454 height=396.9 x=-137.5 y=412 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=-137.5 y=412 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=89.5 cy=610.5 fill=#015064 fill-rule=evenodd stroke=#00CFE2 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=316.5 y=412 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=316.5 y=412 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=543.5 cy=610.5 fill=#015064 fill-rule=evenodd stroke=#00CFE2 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=-137.5 y=450 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=-137.5 y=450 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=89.5 cy=648.5 fill=#015064 fill-rule=evenodd stroke=#00A8B8 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=316.5 y=450 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=316.5 y=450 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=543.5 cy=648.5 fill=#015064 fill-rule=evenodd stroke=#00A8B8 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=-137.5 y=486 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=-137.5 y=486 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=89.5 cy=684.5 fill=#015064 fill-rule=evenodd stroke=#007782 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=316.5 y=486 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=316.5 y=486 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=543.5 cy=684.5 fill=#015064 fill-rule=evenodd stroke=#007782 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=176.9 height=129.3 x=272.2 y=308 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=176.9 height=129.3 x=272.2 y=308 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><g><path fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11 d="M436 403.2l-5 28.6m-140-90.3l-10.9 62m52.8-19.4l-4.3 27.1"></path><linearGradient x1=-645.656 x2=-646.499 y1=854.878 y2=854.788 gradientTransform="matrix(-184.159 -32.4722 11.4608 -64.9973 -128419.844 34938.836)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ee2700></stop><stop offset=1 stop-color=#ff008e></stop></linearGradient><path fill-rule=evenodd d="M344.1 363l97.7 17.2c5.8 2.1 8.2 6.2 7.1 12.1-1 5.9-4.7 9.2-11 9.9l-106-18.7-57.5-59.2c-3.2-4.8-2.9-9.1.8-12.8 3.7-3.7 8.3-4.4 13.7-2.1l55.2 53.6z"clip-rule=evenodd></path><path fill=#D8D8D8 fill-rule=evenodd stroke=#FFF stroke-linecap=round stroke-linejoin=bevel stroke-width=7 d="M428.3 384.5l.9-6.5m-33.9 1.5l.9-6.5m-34 .5l.9-6.1m-38.9-16.1l4.2-3.9m-25.2-16.1l4.2-3.9"clip-rule=evenodd></path></g><defs><filter width=280.6 height=317.4 x=73.2 y=113.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=280.6 height=317.4 x=73.2 y=113.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><g><linearGradient x1=-646.8 x2=-646.8 y1=854.844 y2=853.844 gradientTransform="matrix(-100.1751 48.8587 -97.9753 -200.879 19124.773 203538.61)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#a17500></stop><stop offset=1 stop-color=#5d2100></stop></linearGradient><path fill-rule=evenodd d="M192.3 203c8.1 37.3 14 73.6 17.8 109.1 3.8 35.4 2.8 75.2-2.9 119.2l61.2-16.7c-15.6-59-25.2-97.9-28.6-116.6-3.4-18.7-10.8-51.8-22.2-99.6l-25.3 4.6"clip-rule=evenodd></path><linearGradient x1=-635.467 x2=-635.467 y1=852.115 y2=851.115 gradientTransform="matrix(92.6873 4.8575 2.0257 -38.6535 57323.695 36176.047)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M195 183.9s-12.6-22.1-36.5-29.9c-15.9-5.2-34.4-1.5-55.5 11.1 15.9 14.3 29.5 22.6 40.7 24.9 16.8 3.6 51.3-6.1 51.3-6.1z"clip-rule=evenodd></path><linearGradient x1=-636.573 x2=-636.573 y1=855.444 y2=854.444 gradientTransform="matrix(109.9945 5.7646 6.3597 -121.3507 64719.133 107659.336)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M194.9 184.5s-47.5-8.5-83.2 15.7c-23.8 16.2-34.3 49.3-31.6 99.3 30.3-27.8 52.1-48.5 65.2-61.9 19.8-20 49.6-53.1 49.6-53.1z"clip-rule=evenodd></path><linearGradient x1=-632.145 x2=-632.145 y1=854.174 y2=853.174 gradientTransform="matrix(62.9558 3.2994 3.5021 -66.8246 37035.367 59284.227)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M195 183.9c-.8-21.9 6-38 20.6-48.2 14.6-10.2 29.8-15.3 45.5-15.3-6.1 21.4-14.5 35.8-25.2 43.4-10.7 7.5-24.4 14.2-40.9 20.1z"clip-rule=evenodd></path><linearGradient x1=-638.224 x2=-638.224 y1=853.801 y2=852.801 gradientTransform="matrix(152.4666 7.9904 3.0934 -59.0251 94939.86 55646.855)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M194.9 184.5c31.9-30 64.1-39.7 96.7-29 32.6 10.7 50.8 30.4 54.6 59.1-35.2-5.5-60.4-9.6-75.8-12.1-15.3-2.6-40.5-8.6-75.5-18z"clip-rule=evenodd></path><linearGradient x1=-637.723 x2=-637.723 y1=855.103 y2=854.103 gradientTransform="matrix(136.467 7.1519 5.2165 -99.5377 82830.875 89859.578)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M194.9 184.5c35.8-7.6 65.6-.2 89.2 22 23.6 22.2 37.7 49 42.3 80.3-39.8-9.7-68.3-23.8-85.5-42.4-17.2-18.5-32.5-38.5-46-59.9z"clip-rule=evenodd></path><linearGradient x1=-631.79 x2=-631.79 y1=855.872 y2=854.872 gradientTransform="matrix(60.8683 3.19 8.7771 -167.4773 31110.818 145537.61)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M194.9 184.5c-33.6 13.8-53.6 35.7-60.1 65.6-6.5 29.9-3.6 63.1 8.7 99.6 27.4-40.3 43.2-69.6 47.4-88 4.2-18.3 5.5-44.1 4-77.2z"clip-rule=evenodd></path><path fill=none stroke=#2F8A00 stroke-linecap=round stroke-width=8 d="M196.5 182.3c-14.8 21.6-25.1 41.4-30.8 59.4-5.7 18-9.4 33-11.1 45.1"></path><path fill=none stroke=#2F8A00 stroke-linecap=round stroke-width=8 d="M194.8 185.7c-24.4 1.7-43.8 9-58.1 21.8-14.3 12.8-24.7 25.4-31.3 37.8m99.1-68.9c29.7-6.7 52-8.4 67-5 15 3.4 26.9 8.7 35.8 15.9m-110.8-5.9c20.3 9.9 38.2 20.5 53.9 31.9 15.7 11.4 27.4 22.1 35.1 32"></path></g><defs><filter width=532 height=633 x=50.5 y=399 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=532 height=633 x=50.5 y=399 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><linearGradient x1=-641.104 x2=-641.278 y1=856.577 y2=856.183 gradientTransform="matrix(532 0 0 -633 341484.5 542657)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#fff400></stop><stop offset=1 stop-color=#3c8700></stop></linearGradient><ellipse cx=316.5 cy=715.5 fill-rule=evenodd clip-rule=evenodd rx=266 ry=316.5></ellipse><defs><filter width=288 height=283 x=391 y=-24 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=288 height=283 x=391 y=-24 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><g><g transform="translate(397 -24)"><linearGradient x1=-1036.672 x2=-1036.672 y1=880.018 y2=879.018 gradientTransform="matrix(227 0 0 -227 235493 199764)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffdf00></stop><stop offset=1 stop-color=#ff9d00></stop></linearGradient><circle cx=168.5 cy=113.5 r=113.5 fill-rule=evenodd clip-rule=evenodd></circle><linearGradient x1=-1017.329 x2=-1018.602 y1=658.003 y2=657.998 gradientTransform="matrix(30 0 0 -1 30558 771)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M30 113H0"></path><linearGradient x1=-1014.501 x2=-1015.774 y1=839.985 y2=839.935 gradientTransform="matrix(26.5 0 0 -5.5 26925 4696.5)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M33.5 79.5L7 74"></path><linearGradient x1=-1016.59 x2=-1017.862 y1=852.671 y2=852.595 gradientTransform="matrix(29 0 0 -8 29523 6971)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M34 146l-29 8"></path><linearGradient x1=-1011.984 x2=-1013.257 y1=863.523 y2=863.229 gradientTransform="matrix(24 0 0 -13 24339 11407)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M45 177l-24 13"></path><linearGradient x1=-1006.673 x2=-1007.946 y1=869.279 y2=868.376 gradientTransform="matrix(20 0 0 -19 20205 16720)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M67 204l-20 19"></path><linearGradient x1=-992.85 x2=-993.317 y1=871.258 y2=870.258 gradientTransform="matrix(13.8339 0 0 -22.8467 13825.796 20131.938)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M94.4 227l-13.8 22.8"></path><linearGradient x1=-953.835 x2=-953.965 y1=871.9 y2=870.9 gradientTransform="matrix(7.5 0 0 -24.5 7278 21605)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M127.5 243.5L120 268"></path><linearGradient x1=244.504 x2=244.496 y1=871.898 y2=870.898 gradientTransform="matrix(.5 0 0 -24.5 45.5 21614)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M167.5 252.5l.5 24.5">`);function et(){let e=m();return(()=>{var t=$e(),n=t.firstChild.firstChild,r=n.nextSibling,i=r.nextSibling,a=i.firstChild,s=i.nextSibling,c=s.firstChild,l=s.nextSibling,u=l.nextSibling,d=u.firstChild,f=u.nextSibling,p=f.firstChild,m=f.nextSibling,h=m.nextSibling,g=h.firstChild,_=h.nextSibling,v=_.firstChild,y=_.nextSibling,b=y.nextSibling,x=b.firstChild,S=b.nextSibling,C=S.firstChild,w=S.nextSibling,T=w.nextSibling,E=T.firstChild,D=T.nextSibling,O=D.firstChild,k=D.nextSibling,A=k.nextSibling,j=A.firstChild,M=A.nextSibling,N=M.firstChild,P=M.nextSibling,F=P.nextSibling,I=F.firstChild,L=F.nextSibling,R=L.firstChild,z=L.nextSibling,B=z.firstChild.nextSibling,V=B.nextSibling,H=z.nextSibling,U=H.firstChild,W=H.nextSibling,G=W.firstChild,K=W.nextSibling,ee=K.firstChild,te=ee.nextSibling,q=te.nextSibling,ne=q.nextSibling,re=ne.nextSibling,ie=re.nextSibling,J=ie.nextSibling,Y=J.nextSibling,X=Y.nextSibling,ae=X.nextSibling,oe=ae.nextSibling,se=oe.nextSibling,ce=se.nextSibling,le=ce.nextSibling,ue=K.nextSibling,de=ue.firstChild,Z=ue.nextSibling,fe=Z.firstChild,pe=Z.nextSibling,me=pe.nextSibling,he=me.nextSibling,ge=he.firstChild,_e=he.nextSibling,ve=_e.firstChild,ye=_e.nextSibling,be=ye.firstChild.firstChild,xe=be.nextSibling,Se=xe.nextSibling,Q=Se.nextSibling,Ce=Q.nextSibling,we=Ce.nextSibling,Te=we.nextSibling,Ee=Te.nextSibling,De=Ee.nextSibling,Oe=De.nextSibling,ke=Oe.nextSibling,Ae=ke.nextSibling,je=Ae.nextSibling,Me=je.nextSibling,$=Me.nextSibling,Ne=$.nextSibling,Pe=Ne.nextSibling,Fe=Pe.nextSibling;return o(n,`id`,`a-${e}`),o(r,`fill`,`url(#a-${e})`),o(a,`id`,`b-${e}`),o(s,`id`,`c-${e}`),o(c,`filter`,`url(#b-${e})`),o(l,`mask`,`url(#c-${e})`),o(d,`id`,`d-${e}`),o(f,`id`,`e-${e}`),o(p,`filter`,`url(#d-${e})`),o(m,`mask`,`url(#e-${e})`),o(g,`id`,`f-${e}`),o(_,`id`,`g-${e}`),o(v,`filter`,`url(#f-${e})`),o(y,`mask`,`url(#g-${e})`),o(x,`id`,`h-${e}`),o(S,`id`,`i-${e}`),o(C,`filter`,`url(#h-${e})`),o(w,`mask`,`url(#i-${e})`),o(E,`id`,`j-${e}`),o(D,`id`,`k-${e}`),o(O,`filter`,`url(#j-${e})`),o(k,`mask`,`url(#k-${e})`),o(j,`id`,`l-${e}`),o(M,`id`,`m-${e}`),o(N,`filter`,`url(#l-${e})`),o(P,`mask`,`url(#m-${e})`),o(I,`id`,`n-${e}`),o(L,`id`,`o-${e}`),o(R,`filter`,`url(#n-${e})`),o(z,`mask`,`url(#o-${e})`),o(B,`id`,`p-${e}`),o(V,`fill`,`url(#p-${e})`),o(U,`id`,`q-${e}`),o(W,`id`,`r-${e}`),o(G,`filter`,`url(#q-${e})`),o(K,`mask`,`url(#r-${e})`),o(ee,`id`,`s-${e}`),o(te,`fill`,`url(#s-${e})`),o(q,`id`,`t-${e}`),o(ne,`fill`,`url(#t-${e})`),o(re,`id`,`u-${e}`),o(ie,`fill`,`url(#u-${e})`),o(J,`id`,`v-${e}`),o(Y,`fill`,`url(#v-${e})`),o(X,`id`,`w-${e}`),o(ae,`fill`,`url(#w-${e})`),o(oe,`id`,`x-${e}`),o(se,`fill`,`url(#x-${e})`),o(ce,`id`,`y-${e}`),o(le,`fill`,`url(#y-${e})`),o(de,`id`,`z-${e}`),o(Z,`id`,`A-${e}`),o(fe,`filter`,`url(#z-${e})`),o(pe,`id`,`B-${e}`),o(me,`fill`,`url(#B-${e})`),o(me,`mask`,`url(#A-${e})`),o(ge,`id`,`C-${e}`),o(_e,`id`,`D-${e}`),o(ve,`filter`,`url(#C-${e})`),o(ye,`mask`,`url(#D-${e})`),o(be,`id`,`E-${e}`),o(xe,`fill`,`url(#E-${e})`),o(Se,`id`,`F-${e}`),o(Q,`stroke`,`url(#F-${e})`),o(Ce,`id`,`G-${e}`),o(we,`stroke`,`url(#G-${e})`),o(Te,`id`,`H-${e}`),o(Ee,`stroke`,`url(#H-${e})`),o(De,`id`,`I-${e}`),o(Oe,`stroke`,`url(#I-${e})`),o(ke,`id`,`J-${e}`),o(Ae,`stroke`,`url(#J-${e})`),o(je,`id`,`K-${e}`),o(Me,`stroke`,`url(#K-${e})`),o($,`id`,`L-${e}`),o(Ne,`stroke`,`url(#L-${e})`),o(Pe,`id`,`M-${e}`),o(Fe,`stroke`,`url(#M-${e})`),t})()}var tt=D(`<button type=button><div><div></div><div></div></div><div>-</div><div>TanStack Router`);function nt({initialIsOpen:e,panelProps:n={},closeButtonProps:r={},toggleButtonProps:i={},position:a=`bottom-left`,containerElement:o=`footer`,router:s,routerState:c,shadowDOMTarget:l}){let[d,m]=h(),g,[_,v]=K(`tanstackRouterDevtoolsOpen`,e),[x,w]=K(`tanstackRouterDevtoolsHeight`,null),[D,O]=h(!1),[k,j]=h(!1),M=ne(),N=W(),P=(e,t)=>{if(t.button!==0)return;j(!0);let n={originalHeight:e?.getBoundingClientRect().height??0,pageY:t.pageY},r=e=>{let t=n.pageY-e.pageY,r=n.originalHeight+t;w(r),v(!(r<70))},i=()=>{j(!1),document.removeEventListener(`mousemove`,r),document.removeEventListener(`mouseUp`,i)};document.addEventListener(`mousemove`,r),document.addEventListener(`mouseup`,i)};_(),p(()=>{O(_()??!1)}),p(()=>{if(D()){let e=d()?.parentElement?.style.paddingBottom,t=()=>{let e=g.getBoundingClientRect().height;d()?.parentElement&&m(t=>(t?.parentElement&&(t.parentElement.style.paddingBottom=`${e}px`),t))};if(t(),typeof window<`u`)return window.addEventListener(`resize`,t),()=>{window.removeEventListener(`resize`,t),d()?.parentElement&&typeof e==`string`&&m(t=>(t.parentElement.style.paddingBottom=e,t))}}else d()?.parentElement&&m(e=>(e?.parentElement&&e.parentElement.removeAttribute(`style`),e))}),p(()=>{if(d()){let e=d(),t=getComputedStyle(e).fontSize;e?.style.setProperty(`--tsrd-font-size`,t)}});let{style:F={},...I}=n,{style:L={},onClick:R,...z}=r,{onClick:B,class:V,...H}=i;if(!M())return null;let U=S(()=>x()??500),G=S(()=>A(N().devtoolsPanelContainer,N().devtoolsPanelContainerVisibility(!!_()),N().devtoolsPanelContainerResizing(k),N().devtoolsPanelContainerAnimation(D(),U()+16))),ee=S(()=>({height:`${U()}px`,...F||{}})),te=S(()=>A(N().mainCloseBtn,N().mainCloseBtnPosition(a),N().mainCloseBtnAnimation(!!_()),V));return f(C,{component:o,ref:m,class:`TanStackRouterDevtools`,get children(){return[f(b.Provider,{value:{onCloseClick:R??(()=>{})},get children(){return f(Ze,u({ref(e){var t=g;typeof t==`function`?t(e):g=e}},I,{router:s,routerState:c,className:G,style:ee,get isOpen(){return D()},setIsOpen:v,handleDragStart:e=>P(g,e),shadowDOMTarget:l}))}}),(()=>{var e=tt(),n=e.firstChild,r=n.firstChild,i=r.nextSibling,a=n.nextSibling,o=a.nextSibling;return t(e,u(H,{"aria-label":`Open TanStack Router Devtools`,onClick:e=>{v(!0),B&&B(e)},get class(){return te()}}),!1,!0),E(r,f(et,{})),E(i,f(et,{})),y(e=>{var t=N().mainCloseBtnIconContainer,s=N().mainCloseBtnIconOuter,c=N().mainCloseBtnIconInner,l=N().mainCloseBtnDivider,u=N().routerLogoCloseButton;return t!==e.e&&T(n,e.e=t),s!==e.t&&T(r,e.t=s),c!==e.a&&T(i,e.a=c),l!==e.o&&T(a,e.o=l),u!==e.i&&T(o,e.i=u),e},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),e})()]}})}export{nt as FloatingTanStackRouterDevtools,nt as default};