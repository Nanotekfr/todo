(window.webpackJsonptodo=window.webpackJsonptodo||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(7),r=n.n(c),l=(n(14),n(8)),i=n(1),s=n(2),d=n(4),u=n(3),m=n(5),h=function(e){var t=e.todos,n=e.deleteTodo,a=t.length?t.map((function(e){return o.a.createElement("div",{className:"collection-item",key:e.id},o.a.createElement("span",null,e.content),o.a.createElement("button",{className:"waves-effect waves-light btn-small right red",onClick:function(){n(e.id)}},"Delete"))})):o.a.createElement("p",{className:"center"},"You have no todo's left, \\o/");return o.a.createElement("div",{className:"todos collection"},a)},f=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={content:""},n.handleChange=function(e){n.setState({content:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),n.props.addTodo(n.state),n.setState({content:""})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("label",null,"Add new todo"),o.a.createElement("input",{type:"text",onChange:this.handleChange,value:this.state.content}),o.a.createElement("button",{className:"btn-floating right btn-large waves-effect waves-light green"},"Add")))}}]),t}(a.Component),v=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={todos:[{id:1,content:"buy some milk"},{id:2,content:"play mario kart"}]},n.deleteTodo=function(e){var t=n.state.todos.filter((function(t){return t.id!==e}));n.setState({todos:t})},n.addTodo=function(e){e.id=Math.random();var t=[].concat(Object(l.a)(n.state.todos),[e]);n.setState({todos:t})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"todo container"},o.a.createElement("h1",{className:"center blue-text"},"Todo's"),o.a.createElement(h,{todos:this.state.todos,deleteTodo:this.deleteTodo}),o.a.createElement(f,{addTodo:this.addTodo}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.eb6c15ff.chunk.js.map