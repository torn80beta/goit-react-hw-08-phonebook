"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[495],{2495:function(n,e,r){r.r(e),r.d(e,{default:function(){return P}});var t,a,i,o,s,p,c,x=r(2791),u=r(168),d=r(7686),l=d.Z.h2(t||(t=(0,u.Z)(["\n  margin-left: 30px;\n  margin-bottom: 20px;\n"]))),m=r(184),b=function(n){var e=n.title;return(0,m.jsx)(l,{children:e})},h=r(2007),g=r.n(h),f=r(5705),v=d.Z.label(a||(a=(0,u.Z)(["\n  position: relative;\n  display: block;\n  margin-left: 30px;\n"]))),j=(0,d.Z)(f.gN)(i||(i=(0,u.Z)(["\n  display: block;\n  margin: 10px 0px 40px;\n  padding: 3px 10px;\n  width: 250px;\n  height: 20px;\n  border: none;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,\n    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\n  border-radius: 5px;\n\n  &:focus {\n    outline: 1px solid greenyellow;\n  }\n"]))),Z=d.Z.p(o||(o=(0,u.Z)(["\n  position: absolute;\n  top: 65px;\n  font-size: 16px;\n  color: red;\n"]))),y=d.Z.button(s||(s=(0,u.Z)(["\n  display: block;\n  margin: 0 30px 40px;\n  background-color: white;\n  border: 0px solid gray;\n  border-radius: 5px;\n  padding: 5px 15px;\n  height: 25px;\n  cursor: pointer;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,\n    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\n\n  &:hover {\n    background-color: azure;\n  }\n\n  &:active {\n    background-color: rgb(207, 248, 197);\n  }\n"]))),w=r(6727),C=function(n){return n.contacts.items},k=function(n){return n.contacts.isLoading},N=function(n){return n.filter},q=r(9434),F={name:"",number:""},z=w.Ry().shape({name:w.Z_().required("Name is a required field.").min(2,"Name must be at least 13 characters.").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,{message:'Name must match the following: "a-z, A-Z, \u0430-\u044f, \u0410-\u042f".',excludeEmptyString:!1}),number:w.Z_().required("Number is a required field.").min(13,"Number must be at least 13 characters.").max(13,"Number must be at most 13 characters.").matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,{message:'Number must contain only numbers from "0" to "9" and "+" or "-" symbols.',excludeEmptyString:!1})}),A=function(n){var e=n.name;return(0,m.jsx)(f.Bc,{name:e,render:function(n){return(0,m.jsx)(Z,{children:n})}})},R=function(n){var e=n.addContact,r=function(n,r){var t=r.resetForm;e(n),t()},t=(0,q.v9)(k);return r.propTypes={values:g().shape({name:g().string.isRequired,number:g().string.isRequired}).isRequired,resetForm:g().func.isRequired},(0,m.jsx)(f.J9,{initialValues:F,validationSchema:z,onSubmit:r,children:(0,m.jsxs)(f.l0,{children:[(0,m.jsxs)(v,{htmlFor:"name",children:["Name:",(0,m.jsx)(j,{type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"}),(0,m.jsx)(A,{name:"name"})]}),(0,m.jsxs)(v,{htmlFor:"number",children:["Number:",(0,m.jsx)(j,{type:"tel",name:"number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}),(0,m.jsx)(A,{name:"number"})]}),(0,m.jsx)(y,{type:"submit",disabled:t,children:t?"......Loading":"Add contact"})]})})};F.propTypes={name:g().string.isRequired,number:g().string.isRequired};var L,_,S,D=d.Z.section(p||(p=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-left: 30px;\n  margin-bottom: 40px;\n"]))),E=d.Z.input(c||(c=(0,u.Z)(["\n  padding: 3px 10px;\n  width: 250px;\n  height: 20px;\n  border: none;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,\n    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\n  border-radius: 5px;\n\n  &:focus {\n    outline: 1px solid greenyellow;\n  }\n"]))),B=function(n){var e=n.onChange;return(0,m.jsxs)(D,{children:[(0,m.jsx)("p",{children:"Find contacts by name"}),(0,m.jsx)(E,{type:"text",name:"filter",onChange:e})]})},J=d.Z.button(L||(L=(0,u.Z)(["\n  margin: 0 30px 40px;\n  background-color: white;\n  border: 0px;\n  border-radius: 5px;\n  padding: 5px 15px;\n  height: 25px;\n  cursor: pointer;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,\n    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\n\n  &:hover {\n    background-color: red;\n  }\n\n  &:active {\n    background-color: rgb(207, 248, 197);\n  }\n"]))),K=d.Z.ul(_||(_=(0,u.Z)(["\n  margin-left: 30px;\n"]))),M=d.Z.li(S||(S=(0,u.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  max-width: 500px;\n  height: 40px;\n"]))),T=function(n){var e=n.onDeleteContact,r=function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))}((0,q.v9)(C),(0,q.v9)(N)),t=(0,q.v9)(k);return(0,m.jsx)(K,{children:r.map((function(n){var r=n.id,a=n.name,i=n.phone;return(0,m.jsxs)(M,{children:[(0,m.jsxs)("p",{children:[a,": ",i]}),(0,m.jsx)(J,{onClick:function(){return e(r)},disabled:t,children:"Delete"})]},r)}))})},G=r(1634),I=r(3634);function P(){var n=(0,q.I0)(),e=(0,q.v9)(C),r=(0,q.v9)(N);(0,x.useEffect)((function(){n((0,I.yF)())}),[n]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(b,{title:"Contacts"}),(0,m.jsx)(R,{addContact:function(r){var t,a=r.name,i=r.number,o=(t=a,e.some((function(n){var e=n.name;return t.toLowerCase()===e.toLowerCase()})));o?alert("".concat(a," is already in contacts.")):n((0,I.uK)({name:a,phone:i}))}}),(0,m.jsx)(b,{title:"Contacts"}),(0,m.jsx)(B,{value:r,onChange:function(e){n((0,G.M)(e.target.value))}}),(0,m.jsx)(T,{onDeleteContact:function(e){n((0,I.GK)(e))}})]})}}}]);
//# sourceMappingURL=495.63886230.chunk.js.map