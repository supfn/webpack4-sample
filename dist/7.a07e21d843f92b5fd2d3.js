(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{705:function(e,n,l){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t,a=l(1),u=(t=a)&&t.__esModule?t:{default:t};n.default=function(e){console.log("___props：",e);var n=[{id:1,name:"alex"},{id:2,name:"bill"},{id:3,name:"tom"}].find(function(n){return n.id===~~e.match.params.id});return u.default.createElement("div",null,u.default.createElement("h2",null,"User Detail"),u.default.createElement("p",null,"user id: ",n.id),u.default.createElement("p",null,"user name: ",n.name))}}}]);