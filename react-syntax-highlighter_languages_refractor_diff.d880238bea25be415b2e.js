"use strict";(self.webpackChunkanychan=self.webpackChunkanychan||[]).push([[6247],{93336:e=>{function n(e){!function(e){e.languages.diff={coord:[/^(?:\*{3}|-{3}|\+{3}).*$/m,/^@@.*@@$/m,/^\d.*$/m]};var n={"deleted-sign":"-","deleted-arrow":"<","inserted-sign":"+","inserted-arrow":">",unchanged:" ",diff:"!"};Object.keys(n).forEach((function(a){var s=n[a],i=[];/^\w+$/.test(a)||i.push(/\w+/.exec(a)[0]),"diff"===a&&i.push("bold"),e.languages.diff[a]={pattern:RegExp("^(?:["+s+"].*(?:\r\n?|\n|(?![\\s\\S])))+","m"),alias:i,inside:{line:{pattern:/(.)(?=[\s\S]).*(?:\r\n?|\n)?/,lookbehind:!0},prefix:{pattern:/[\s\S]/,alias:/\w+/.exec(a)[0]}}}})),Object.defineProperty(e.languages.diff,"PREFIXES",{value:n})}(e)}e.exports=n,n.displayName="diff",n.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_diff.d880238bea25be415b2e.js.map