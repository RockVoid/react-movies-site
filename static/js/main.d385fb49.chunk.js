(this["webpackJsonpreact-movie-site"]=this["webpackJsonpreact-movie-site"]||[]).push([[0],{49:function(e,n,r){},52:function(e,n,r){"use strict";r.r(n);var t,c,o,i,a,s=r(1),d=r(20),l=r.n(d),b=r(26),f=r(7),j=r.n(f),h=r(21),u=r(9),p=r(22),x=r.n(p),O=(r(49),r(3)),g=r(4),v=g.a.div(t||(t=Object(O.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n"]))),m=r(0),y=g.a.header(c||(c=Object(O.a)(["\n    background-color: #2f3640;\n    padding: 1rem;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-between;\n\n    h1 {\n        color: #fff;\n    }\n\n    input {\n        border-radius: 50px;\n        border: 1px solid #192a56;\n        padding: 0.5rem;\n        outline: none;\n        background-color: #ccdcf3;\n        font-size: 1rem;\n\n        &:focus {\n            background-color: #b8c7eb;\n            transform: scale(0.96);\n        }\n    }\n"]))),k=function(e){var n=e.getQuery,r=e.putQuery,t=Object(s.useRef)("");return Object(m.jsxs)(y,{children:[Object(m.jsx)("h1",{children:"Rock Movies Site"}),Object(m.jsx)("form",{onSubmit:function(e){n(e),t.current.value=""},children:Object(m.jsx)("input",{type:"text",placeholder:"Search term...",onChange:function(e){return function(e){return r(e)}(e.target.value)},ref:t})})]})},w=r.p+"static/media/breakMovie.a5a1dcc1.svg",_=g.a.div(o||(o=Object(O.a)(["\n    border: 1px solid #40739e;\n    background-color: #2f3640;\n    box-shadow:  #273c75 0px 4px 12px;\n    border-radius: 4px;\n    width: 250px;\n    min-width: 250px;\n    overflow: hidden;\n    position: relative;\n    margin: 10px 0;\n    \n    .front {\n        color: #ffffff;\n        padding: 1rem;\n        backface-visibility: hidden;\n        transition: 0.4s ease-in;\n\n        img {\n            object-fit: fill;\n            width: 100%;\n            border-radius: 4px;\n        }\n\n        &__info-front {\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n\n            span {\n                padding: 0.5rem;\n                border-radius: 4px;\n                font-weight: bolder;\n                background-color: #192A56;\n            }\n        }\n    }\n\n    .back {\n        position: absolute;\n        top: 1rem;\n        height: 70vh;\n        text-align: center;\n        color: #ffffff;\n        border-radius: 4px;\n        backface-visibility: hidden;\n        overflow: auto;\n        transform: rotateY(-180deg);\n        transition: 0.4s ease-in;\n\n        p {\n            padding: 0.5rem 1rem;\n        }\n    }\n\n    &:hover > .front {\n        transform: rotateY(-180deg);\n    }\n\n    &:hover > .back {\n        transform: rotateY(0deg);\n    }\n\n    .green {\n        color: #4cd137;\n    }\n\n    .yellow {\n        color: #fbc531;\n    }\n    \n   .red {\n        color: #e84118;\n    }\n"]))),N=function(e){var n,r=e.title,t=e.vote_average,c=e.overview,o=e.poster_path;return Object(m.jsxs)(_,{children:[Object(m.jsxs)("div",{className:"front",children:[Object(m.jsx)("img",{src:o?"https://image.tmdb.org/t/p/w500/"+o:w,alt:r}),Object(m.jsxs)("div",{className:"front__info-front",children:[Object(m.jsx)("h2",{children:r}),Object(m.jsx)("span",{className:(n=t,n<5?"red":n>=8?"green":"yellow"),children:t})]})]}),Object(m.jsxs)("div",{className:"back",children:[Object(m.jsx)("h2",{children:"Overview"}),Object(m.jsx)("p",{children:c||"Sorry. This movie don't have overview."})]})]})},S=g.a.footer(i||(i=Object(O.a)(["\n    color: #fff;\n    padding: 1rem;\n    text-align: center;\n    height: 100vh;\n"]))),R=function(){return Object(m.jsxs)(S,{children:[Object(m.jsx)("h2",{children:"No results found for you search!"}),Object(m.jsx)("h4",{children:"Remember: "}),Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:"Verify if your search is correctly!"}),Object(m.jsx)("li",{children:"Type only letters or numbers!"}),Object(m.jsx)("li",{children:'Never use special characters, like "@, #, $".'})]})]})},I=g.a.footer(a||(a=Object(O.a)(["\n    background-color: #2f3640;\n    color: #fff;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 1rem;\n\n    a {\n        color: white;\n        text-decoration: none;\n        text-align: center;\n\n        &:hover {\n            color: #487eb0;\n        }\n    }\n"]))),Q=function(){return Object(m.jsxs)(I,{children:[Object(m.jsx)("h3",{children:"Roque Costa Dev"}),Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"https://github.com/RockVoid",target:"_blank",rel:"noopener noreferrer",children:"GitHub"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"https://developers.themoviedb.org/3/authentication/how-do-i-generate-a-session-id",target:"_blank",rel:"noopener noreferrer",children:"Visit the API link"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"https://www.linkedin.com/in/roque-souza-costa-6aa8171ba/",target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"https://rockvoid.github.io/",target:"_blank",rel:"noopener noreferrer",children:"Portfolio"})})]}),Object(m.jsx)("small",{children:"\xa9 Thanks Movie API :D"})]})},q=function(){var e=Object(s.useState)([]),n=Object(u.a)(e,2),r=n[0],t=n[1],c=Object(s.useState)(""),o=Object(u.a)(c,2),i=o[0],a=o[1];Object(s.useEffect)((function(){d("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bae66de24c5fad77d1473f1d34981ebf&page=1")}),[]);var d=function(){var e=Object(h.a)(j.a.mark((function e(n){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x()(n);case 2:r=e.sent,t(r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(k,{getQuery:function(e){e.preventDefault(),d("https://api.themoviedb.org/3/search/movie?api_key=bae66de24c5fad77d1473f1d34981ebf&query="+i)},putQuery:function(e){return a(e)}}),Object(m.jsx)(v,{children:r.length?r.map((function(e){return Object(m.jsx)(N,Object(b.a)({},e),e.id)})):Object(m.jsx)(R,{})}),Object(m.jsx)(Q,{})]})};l.a.render(Object(m.jsx)(q,{}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.d385fb49.chunk.js.map