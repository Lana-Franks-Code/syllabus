(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{130:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(6),o=(n(0),n(237)),i={id:"challenges",title:"Khan Academy challenges with objects and arrays",sidebar_label:"Challenges"},l={unversionedId:"fundamentals/other-resources/challenges",id:"fundamentals/other-resources/challenges",isDocsHomePage:!1,title:"Khan Academy challenges with objects and arrays",description:"Challenge: Make it rain... objects!",source:"@site/docs/fundamentals/other-resources/post-khan-academy-challenges.md",slug:"/fundamentals/other-resources/challenges",permalink:"/fundamentals/other-resources/challenges",editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/fundamentals/other-resources/post-khan-academy-challenges.md",version:"current",sidebar_label:"Challenges",sidebar:"Fundamentals",previous:{title:"Migrating from Processing.js to p5.js",permalink:"/fundamentals/after-the-course/processing-migrating"}},c=[{value:"Challenge: Make it rain... objects!",id:"challenge-make-it-rain-objects",children:[]},{value:"Challenge: Fishtank v2 - using objects",id:"challenge-fishtank-v2---using-objects",children:[{value:"Advanced challenge 1",id:"advanced-challenge-1",children:[]},{value:"Advanced challenge 2",id:"advanced-challenge-2",children:[]}]},{value:"Challenge: many snowmen, with objects!",id:"challenge-many-snowmen-with-objects",children:[]},{value:"Challenge: shooting stars, with objects",id:"challenge-shooting-stars-with-objects",children:[]},{value:"p5.js Challenge - font outline",id:"p5js-challenge---font-outline",children:[]}],b={rightToc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"challenge-make-it-rain-objects"},"Challenge: Make it rain... objects!"),Object(o.b)("p",null,"Make a spin-off of your ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.khanacademy.org/computing/computer-programming/programming/arrays/pp/project-make-it-rain"}),'"Make it rain" project'),", and change it to use 1 array of ",Object(o.b)("strong",{parentName:"p"},"objects")," instead of many arrays. So instead of ",Object(o.b)("inlineCode",{parentName:"p"},"xPositions"),", ",Object(o.b)("inlineCode",{parentName:"p"},"yPositions"),", ",Object(o.b)("inlineCode",{parentName:"p"},"speeds"),", etc arrays you'll simply have 1 ",Object(o.b)("inlineCode",{parentName:"p"},"raindrops")," array, and each raindrop will have:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"An ",Object(o.b)("inlineCode",{parentName:"li"},"x")," property"),Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("inlineCode",{parentName:"li"},"y")," property"),Object(o.b)("li",{parentName:"ul"},"...")),Object(o.b)("p",null,"More ideas:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Try adding more properties to each object:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("inlineCode",{parentName:"li"},"speed")," property"),Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("inlineCode",{parentName:"li"},"size")," property to each object and randomise it at the start."),Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("inlineCode",{parentName:"li"},"color")," property to each object - you can make a random colour like this: ",Object(o.b)("inlineCode",{parentName:"li"},"color(random(255), random(255), random(255))")))),Object(o.b)("li",{parentName:"ul"},"Try using squares or rectangles instead of ellipses"),Object(o.b)("li",{parentName:"ul"},"Try using images instead of ellipses")),Object(o.b)("h2",{id:"challenge-fishtank-v2---using-objects"},"Challenge: Fishtank v2 - using objects"),Object(o.b)("p",null,"Go back to your ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/CodeYourFuture/intro-to-programming-module/tree/444e160bfd54fc9fe6a786b5b7643c30f0694c76/Fish%20tank%20project/README.md"}),"https://www.khanacademy.org/computing/computer-programming/programming/functions/pp/project-fish-tank"),", and make a spin-off."),Object(o.b)("p",null,"In the spin-off, change your code so that each fish is represented by an object. Fish objects might have these properties:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"x")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"y")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"speed")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"colour")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"size"))),Object(o.b)("p",null,"Add bubbles ","(","if you have not already",")",". Make these bubbles objects, too, with these properties:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"x")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"y")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"size")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"speed")," ","(","if you want some to move at different speeds",")")),Object(o.b)("p",null,"Add a sea-bed with pebbles which could be objects too. What properties do you think the pebble objects should have?"),Object(o.b)("p",null,"Add some ",Object(o.b)("em",{parentName:"p"},"seaweed"),"."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Try to use the ",Object(o.b)("inlineCode",{parentName:"li"},"random()")," function for the x position, but with a fixed y position"),Object(o.b)("li",{parentName:"ul"},"Try to make the height random"),Object(o.b)("li",{parentName:"ul"},"Try a random color ",Object(o.b)("em",{parentName:"li"},"variation"))),Object(o.b)("h3",{id:"advanced-challenge-1"},"Advanced challenge 1"),Object(o.b)("p",null,"Make each bubble clickable - when you click it it changes in colour. To track which bubbles have been clicked, you should add a ",Object(o.b)("inlineCode",{parentName:"p"},"clicked")," property to each bubble object."),Object(o.b)("p",null,"Use the function ",Object(o.b)("inlineCode",{parentName:"p"},"dist(x1, x2, x2, y2)")," to find the distance between two points."),Object(o.b)("h3",{id:"advanced-challenge-2"},"Advanced challenge 2"),Object(o.b)("p",null,"Try to make the fish swim the other way."),Object(o.b)("h2",{id:"challenge-many-snowmen-with-objects"},"Challenge: many snowmen, with objects!"),Object(o.b)("p",null,"Go back to the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.khanacademy.org/computing/computer-programming/programming/drawing-basics/pc/challenge-simple-snowman"}),'"Simple snowman" challenge')," and make a spin-off."),Object(o.b)("p",null,"You don't need to animate this one, so you don't need a ",Object(o.b)("inlineCode",{parentName:"p"},"draw()")," function."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Change the code so that you draw 100 snowmen in random places"),Object(o.b)("li",{parentName:"ul"},"Use an object to keep track of the position of each snowman"),Object(o.b)("li",{parentName:"ul"},"Optional: try to have each snowman be a different size"),Object(o.b)("li",{parentName:"ul"},"Optional ","(","very advanced",")",": can you have each snowman choose from 3 different faces? One way to do this would be to have three functions: ",Object(o.b)("inlineCode",{parentName:"li"},"drawFace1(x, y, size)"),", ",Object(o.b)("inlineCode",{parentName:"li"},"drawFace2(x, y, size)"),", ",Object(o.b)("inlineCode",{parentName:"li"},"drawFace3(x, y, size)")," and somehow choose between them for each snowman/snow-woman"),Object(o.b)("li",{parentName:"ul"},"Optional: it would be nice to give the snow-people a colourful hat and scarf")),Object(o.b)("h2",{id:"challenge-shooting-stars-with-objects"},"Challenge: shooting stars, with objects"),Object(o.b)("p",null,"Go back to the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.khanacademy.org/computing/computer-programming/programming/animation-basics/pp/project-shooting-star"}),'"Shooting stars" project')," and make a spin-off."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Change your code so that shooting stars are represented by objects. Each star would have an ",Object(o.b)("inlineCode",{parentName:"li"},"x")," and ",Object(o.b)("inlineCode",{parentName:"li"},"y")," property, and a ",Object(o.b)("inlineCode",{parentName:"li"},"xSpeed")," and ",Object(o.b)("inlineCode",{parentName:"li"},"ySpeed")," property. ","(","To move the star increment ",Object(o.b)("inlineCode",{parentName:"li"},"x")," by ",Object(o.b)("inlineCode",{parentName:"li"},"xSpeed"),", and ",Object(o.b)("inlineCode",{parentName:"li"},"y")," by ",Object(o.b)("inlineCode",{parentName:"li"},"ySpeed"),")"),Object(o.b)("li",{parentName:"ul"},"If you didn't already, add some buildings for a skyline",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Each building should be an object with x, y, and height"),Object(o.b)("li",{parentName:"ul"},"You don't need to draw the windows if you haven't already done that")))),Object(o.b)("h2",{id:"p5js-challenge---font-outline"},"p5.js Challenge - font outline"),Object(o.b)("p",null,"Only attempt this challenge if you've seen and understand p5.js and OpenProcessing before."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Fork ","(","spin-off",")"," ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.openprocessing.org/sketch/812356"}),'this "Font as points" challenge project')),Object(o.b)("li",{parentName:"ul"},"Read the code comments for details"),Object(o.b)("li",{parentName:"ul"},"Essentially, you are provided with an array of points on the outline of some text, and you must draw a circle at each point.")))}s.isMDXComponent=!0},237:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,m=p["".concat(i,".").concat(u)]||p[u]||d[u]||o;return n?r.a.createElement(m,l(l({ref:t},b),{},{components:n})):r.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var b=2;b<o;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);