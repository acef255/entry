(function(t){function e(e){for(var n,s,i=e[0],l=e[1],d=e[2],c=0,p=[];c<i.length;c++)s=i[c],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,d||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,i=1;i<a.length;i++){var l=a[i];0!==o[l]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},o={app:0},r=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("a026"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("IssueStage")],1)},r=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"bodi"}},[a("div",{attrs:{id:"container"}},[a("h3",{staticStyle:{margin:"20px"}},[t._v("Issue Stage")]),a("form",{attrs:{id:"entryStage"},on:{submit:function(t){t.preventDefault()}}},[a("div",{attrs:{id:"fieldset1"}},[a("div",{staticClass:"field"},[a("label",{attrs:{for:"entryID"}},[t._v("Entry ID")]),a("input",{attrs:{type:"number",id:"entryID",name:"entryID",autocomplete:"off",onkeydown:"return (event.keyCode!=13);"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.autofill()}}}),a("span",{staticClass:"bar"})]),a("div",{staticClass:"field"},[a("label",{attrs:{for:"inputYear"}},[t._v("Financial year")]),a("ejs-combobox",{attrs:{dataSource:t.remoteData1,mode:"Delimiter",id:"financialyear",allowCustom:"true",hideSelectedItem:!1,allowMultiSelection:!0,allowFiltering:t.allowFiltering,fields:t.remoteFields,placeholder:"select an item",popupWidth:"250px",popupHeight:"200px"}}),a("span",{staticClass:"bar"})],1),t._m(0)]),a("div",{staticStyle:{width:"100%",height:"10px","border-bottom":"1px solid",opacity:"0.3"}}),a("div",{staticStyle:{width:"100%",height:"10px","border-bottom":"1px solid",opacity:"0.3"}}),a("div",{staticStyle:{width:"100%",height:"10px","border-bottom":"1px solid",opacity:"0.3"}}),t._m(1),a("form",{on:{submit:function(t){t.preventDefault()}}},[a("div",{attrs:{id:"fieldset2"}},[a("div",{staticClass:"field"},[a("label",{attrs:{for:"itemParticularMake"}},[t._v("item Particular Make")]),a("ejs-combobox",{attrs:{dataSource:t.remoteData7,id:"itemParticularMake",mode:"Delimiter",onkeydown:"return (event.keyCode!=13);",allowMultiSelection:!0,fields:t.remoteFields,placeholder:"select an item",popupWidth:"250px",popupHeight:"200px"},on:{submit:function(t){t.preventDefault()}},model:{value:t.pf,callback:function(e){t.pf=e},expression:"pf"}})],1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),a("div",{staticClass:"field"},[a("label",{attrs:{for:"Issueto"}},[t._v("Issue to")]),a("ejs-combobox",{attrs:{dataSource:t.remoteData3,id:"Issueto",mode:"Delimiter",onkeydown:"return (event.keyCode!=13);",allowMultiSelection:!0,fields:t.remoteFieldsIssue,placeholder:"select an item",popupWidth:"250px",popupHeight:"200px"},on:{submit:function(t){t.preventDefault()}},model:{value:t.pf,callback:function(e){t.pf=e},expression:"pf"}})],1),t._m(8),a("div",{staticClass:"field"},[a("label",{attrs:{for:"DepartmentName/Storearea"}},[t._v("Department Name/Store area")]),a("ejs-combobox",{attrs:{dataSource:t.remoteData7,id:"DepartmentName/Storearea",mode:"Delimiter",onkeydown:"return (event.keyCode!=13);",allowMultiSelection:!0,fields:t.remoteFields,placeholder:"select an item",popupWidth:"250px",popupHeight:"200px"},on:{submit:function(t){t.preventDefault()}},model:{value:t.pf,callback:function(e){t.pf=e},expression:"pf"}})],1),a("div",{staticClass:"field"},[a("label",{attrs:{for:"LabName/RoomNumber"}},[t._v("Lab Name/Room Number")]),a("ejs-combobox",{attrs:{dataSource:t.remoteData7,id:"LabName/RoomNumber",mode:"Delimiter",onkeydown:"return (event.keyCode!=13);",allowMultiSelection:!0,fields:t.remoteFields,placeholder:"select an item",popupWidth:"250px",popupHeight:"200px"},on:{submit:function(t){t.preventDefault()}},model:{value:t.pf,callback:function(e){t.pf=e},expression:"pf"}})],1),a("div",{staticClass:"field"},[a("label",{attrs:{for:"Location"}},[t._v("Location")]),a("ejs-combobox",{attrs:{dataSource:t.remoteData2,id:"Location",mode:"Delimiter",onkeydown:"return (event.keyCode!=13);",allowMultiSelection:!0,fields:t.remoteFieldsLocation,placeholder:"select an item",popupWidth:"250px",popupHeight:"200px"},on:{submit:function(t){t.preventDefault()}},model:{value:t.pf,callback:function(e){t.pf=e},expression:"pf"}})],1),t._m(9),t._m(10)])]),a("div",{staticStyle:{cursor:"pointer",margin:"15px"},attrs:{id:"addItem"},on:{click:function(e){return t.addItem()}}},[t._v("Add item")]),a("div",{attrs:{id:"tableContainer"}},[a("DataTable",{staticClass:"Datatable",attrs:{"header-fields":t.headerFields,data:t.data1||[],"not-found-msg":""},scopedSlots:t._u([{key:"F1New",fn:function(e){return a("div",{},[a("textarea",{staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.rowData.F1},on:{keyup:function(a){return t.changeF1(a,e.rowData.id)}}})])}}])}),a("DataTable",{staticClass:"Datatable",attrs:{"header-fields":t.headerFields,data:t.data2||[],"not-found-msg":""},scopedSlots:t._u([{key:"F1New",fn:function(e){return a("div",{},[a("textarea",{staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.rowData.F1},on:{keyup:function(a){return t.changeF1a(a,e.rowData.id)}}})])}}])}),a("DataTable",{staticClass:"Datatable",attrs:{"header-fields":t.headerFields,data:t.data3||[],"not-found-msg":" "},scopedSlots:t._u([{key:"F1New",fn:function(e){return a("div",{},[a("textarea",{staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.rowData.F1},on:{keyup:function(a){return t.changeF1b(a,e.rowData.id)}}})])}}])}),a("DataTable",{staticClass:"Datatable",attrs:{"header-fields":t.headerFields,data:t.data4||[],"not-found-msg":" "},scopedSlots:t._u([{key:"F1New",fn:function(e){return a("div",{},[a("textarea",{staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.rowData.F1},on:{keyup:function(a){return t.changeF1c(a,e.rowData.id)}}})])}}])}),a("DataTable",{staticClass:"Datatable",attrs:{"header-fields":t.headerFields,data:t.data5||[],"not-found-msg":""},scopedSlots:t._u([{key:"F1New",fn:function(e){return a("div",{},[a("textarea",{staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.rowData.F1},on:{keyup:function(a){return t.changeF1d(a,e.rowData.id)}}})])}}])}),a("DataTable",{staticClass:"Datatable",attrs:{"header-fields":t.headerFields,data:t.data6||[],"not-found-msg":""},scopedSlots:t._u([{key:"F1New",fn:function(e){return a("div",{},[a("textarea",{staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.rowData.F1},on:{keyup:function(a){return t.changeF1e(a,e.rowData.id)}}})])}}])}),a("DataTable",{staticClass:"Datatable",attrs:{"header-fields":t.headerFields,data:t.data7||[],"not-found-msg":""},scopedSlots:t._u([{key:"F1New",fn:function(e){return a("div",{},[a("textarea",{staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.rowData.F1},on:{keyup:function(a){return t.changeF1f(a,e.rowData.id)}}})])}}])}),a("DataTable",{staticClass:"Datatable",attrs:{"header-fields":t.headerFields,data:t.data8||[],"not-found-msg":""},scopedSlots:t._u([{key:"F1New",fn:function(e){return a("div",{},[a("textarea",{staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.rowData.F1},on:{keyup:function(a){return t.changeF1g(a,e.rowData.id)}}})])}}])}),a("DataTable",{staticClass:"Datatable",attrs:{"header-fields":t.headerFields,data:t.data9||[],"not-found-msg":""},scopedSlots:t._u([{key:"F1New",fn:function(e){return a("div",{},[a("textarea",{staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.rowData.F1},on:{keyup:function(a){return t.changeF1h(a,e.rowData.id)}}})])}}])}),a("DataTable",{staticClass:"Datatable",attrs:{"header-fields":t.headerFields,data:t.data10||[],"not-found-msg":""},scopedSlots:t._u([{key:"F1New",fn:function(e){return a("div",{},[a("textarea",{staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.rowData.F1},on:{keyup:function(a){return t.changeF1i(a,e.rowData.id)}}})])}}])}),a("DataTable",{staticClass:"Datatable",attrs:{"header-fields":t.headerFields,data:t.data11||[],"not-found-msg":""},scopedSlots:t._u([{key:"F1New",fn:function(e){return a("div",{},[a("textarea",{staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.rowData.F1},on:{keyup:function(a){return t.changeF1j(a,e.rowData.id)}}})])}}])}),a("DataTable",{staticClass:"Datatable",attrs:{"header-fields":t.headerFields,data:t.data12||[],"not-found-msg":""},scopedSlots:t._u([{key:"F1New",fn:function(e){return a("div",{},[a("textarea",{staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.rowData.F1},on:{keyup:function(a){return t.changeF1k(a,e.rowData.id)}}})])}}])}),a("DataTable",{staticClass:"Datatable",attrs:{"header-fields":t.headerFields,data:t.data13||[],"not-found-msg":""},scopedSlots:t._u([{key:"F1New",fn:function(e){return a("div",{},[a("textarea",{staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.rowData.F1},on:{keyup:function(a){return t.changeF1l(a,e.rowData.id)}}})])}}])}),a("DataTable",{staticClass:"Datatable",attrs:{"header-fields":t.headerFields,data:t.data14||[],"not-found-msg":""},scopedSlots:t._u([{key:"F1New",fn:function(e){return a("div",{},[a("textarea",{staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.rowData.F1},on:{keyup:function(a){return t.changeF1m(a,e.rowData.id)}}})])}}])})],1),a("div",{attrs:{id:"divConfirm"}},[a("label",[t._v("Confirm Entry")]),a("button",{attrs:{id:"yes",value:"sendEntry",onkeydown:"return (event.keyCode!=13);"},on:{click:function(e){return t.sendJSON()}}},[t._v("Yes")]),a("button",{attrs:{id:"no",value:"cancel",onkeydown:"return (event.keyCode!=13);"}},[t._v("No")])])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{attrs:{for:"inputDateOfEntry"}},[t._v("Date of entry")]),a("input",{attrs:{type:"date",id:"inputDateOfEntry",name:"dateOfEntry",placeholder:"DD/MM/YY",autocomplete:"off",onkeydown:"return (event.keyCode!=13);"}}),a("span",{staticClass:"bar"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"fieldsetMiddle"}},[a("div",{staticClass:"field",attrs:{id:"fieldInputSN°"}},[a("label",{attrs:{for:"inputS.N°"}},[t._v("S.N°")]),a("input",{attrs:{type:"number",id:"inputS.N°",name:"S.N°",autocomplete:"off",onkeydown:"return (event.keyCode!=13);"}}),a("span",{staticClass:"bar"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{attrs:{for:"assetCode"}},[t._v("Asset Code")]),a("input",{staticClass:"paddedinput",attrs:{type:"text",id:"assetCode",name:"assetCode",autocomplete:"off",onkeydown:"return (event.keyCode!=13);"}}),a("span",{staticClass:"bar"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{attrs:{for:"ItemAvailableQty"}},[t._v("Item Available Qty.")]),a("input",{staticClass:"paddedinput",attrs:{type:"text",id:"ItemAvailableQty",name:"ItemAvailableQty",autocomplete:"off",onkeydown:"return (event.keyCode!=13);"}}),a("span",{staticClass:"bar"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{attrs:{for:"ItemSrNo"}},[t._v("Item Sr No")]),a("input",{staticClass:"paddedinput",attrs:{type:"text",id:"ItemSrNo",name:"ItemSrNo",autocomplete:"off",onkeydown:"return (event.keyCode!=13);"}}),a("span",{staticClass:"bar"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{attrs:{for:"ItemValue"}},[t._v("Item Value")]),a("input",{staticClass:"paddedinput",attrs:{type:"text",id:"ItemValue",name:"ItemValue",autocomplete:"off",onkeydown:"return (event.keyCode!=13);"}}),a("span",{staticClass:"bar"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{attrs:{for:"IssueQty"}},[t._v("Issue Qty")]),a("input",{staticClass:"paddedinput",attrs:{type:"text",id:"IssueQty",name:"IssueQty",autocomplete:"off",onkeydown:"return (event.keyCode!=13);"}}),a("span",{staticClass:"bar"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{attrs:{for:"TotalValueofissuedITEM"}},[t._v("Total Value of issued item")]),a("input",{staticClass:"paddedinput",attrs:{type:"number",id:"TotalValueofissuedITEM",name:"TotalValueofissuedITEM",autocomplete:"off",onkeydown:"return (event.keyCode!=13);"}}),a("span",{staticClass:"bar"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{attrs:{for:"Balance"}},[t._v("Balance")]),a("input",{staticClass:"paddedinput",attrs:{type:"number",id:"Balance",name:"Balance",onkeydown:"return (event.keyCode!=13);"}}),a("span",{staticClass:"bar"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{attrs:{for:"LocationCodeComplete°"}},[t._v("Location Code Complete")]),a("input",{staticClass:"paddedinput",attrs:{type:"number",id:"LocationCodeComplete",name:"LocationCodeComplete",autocomplete:"off",onkeydown:"return (event.keyCode!=13);"}}),a("span",{staticClass:"bar"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{attrs:{for:"ItemCompleteCode"}},[t._v("Item Complete Code")]),a("input",{staticClass:"paddedinput",attrs:{type:"number",id:"ItemCompleteCode",name:"ItemCompleteCode",autocomplete:"off",onkeydown:"return (event.keyCode!=13);"}}),a("span",{staticClass:"bar"})])}],l=(a("a4d3"),a("4de4"),a("4160"),a("d81d"),a("b0c0"),a("e439"),a("dbb4"),a("b64b"),a("d3b7"),a("159b"),a("ade3")),d=a("2af1"),u=a("eda0"),c=a("46f1"),p=a("4f3e"),f=a("0f5f"),m=a("dd65");function v(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function h(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?v(Object(a),!0).forEach((function(e){Object(l["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}n["a"].use(d["a"]),n["a"].use(u["a"]),n["a"].use(c["a"]);var y,b=[],F=[],g=[],C=[],w=[],D=[],k=[],_=[],x=[],I=[],S=[],E=[],N=[],j=[],O=[],P=[],T=[],B=[],M=[],L=[],$=[],V=new p["a"]({url:"http://zumaran.tech/store-app/financialyear/all",adaptor:new f["e"],crossDomain:!0}),Q=new p["a"]({url:"http://zumaran.tech/store-app/location/info/all",adaptor:new f["e"],crossDomain:!0}),A=new p["a"]({url:"http://zumaran.tech/store-app/people/all",adaptor:new f["e"],crossDomain:!0}),H=new p["a"]({url:"http://zumaran.tech/store-app/invoice/findno/2001",adaptor:new f["e"],crossDomain:!0});window.onload=function(){};var z=new XMLHttpRequest;z.onreadystatechange=function(){4==this.readyState&&200==this.status&&(y=JSON.parse(z.responseText),console.log(y))},z.open("GET","http://zumaran.tech/store-app/fixedasset/entry/15",!0),z.send();var J=n["a"].extend({name:"form1",components:{DataTable:m["DataTable"]},data:function(){return{remoteData1:V,remoteData2:Q,remoteData3:A,remoteData9:H,remoteFields:{value:"id",text:"name"},remoteFieldsIssue:{value:"id",text:"name"},remoteFieldsLocation:{value:"id",text:"location.name",finalCode:"finalcode"},keySettings:{saveRequest:""},localData:[{Id:"1",item:"a"},{Id:"2",item:"b"},{Id:"3",item:"c"}],localFields:{value:"Id",text:"item"},pf:null,mc:null,sc:null,ic:null,headerFields:[{name:"F1",label:"",customElement:"F1New"}],data1:b,data2:F,data3:g,data4:C,data5:w,data6:D,data7:k,data8:_,data9:x,data10:I,data11:S,data12:E,data13:N,data14:j,data15:O,data16:P,data17:T,data18:B,data19:M,allowFiltering:!0,customValue:"",newItem:"",query:"",F1:null}},methods:{changeF1:function(t,e){this.data=this.data1.map((function(a){return a.id===e?h({},a,{F1:t.target.value}):a}))},changeF1a:function(t,e){this.data=this.data2.map((function(a){return a.id===e?h({},a,{F1:t.target.value}):a}))},changeF1b:function(t,e){this.data=this.data3.map((function(a){return a.id===e?h({},a,{F1:t.target.value}):a}))},changeF1c:function(t,e){this.data=this.data4.map((function(a){return a.id===e?h({},a,{F1:t.target.value}):a}))},changeF1d:function(t,e){this.data=this.data5.map((function(a){return a.id===e?h({},a,{F1:t.target.value}):a}))},changeF1e:function(t,e){this.data=this.data6.map((function(a){return a.id===e?h({},a,{F1:t.target.value}):a}))},changeF1f:function(t,e){this.data=this.data7.map((function(a){return a.id===e?h({},a,{F1:t.target.value}):a}))},changeF1g:function(t,e){this.data=this.data8.map((function(a){return a.id===e?h({},a,{F1:t.target.value}):a}))},changeF1h:function(t,e){this.data=this.data9.map((function(a){return a.id===e?h({},a,{F1:t.target.value}):a}))},changeF1i:function(t,e){this.data=this.data10.map((function(a){return a.id===e?h({},a,{F1:t.target.value}):a}))},changeF1j:function(t,e){this.data=this.data11.map((function(a){return a.id===e?h({},a,{F1:t.target.value}):a}))},changeF1k:function(t,e){this.data=this.data12.map((function(a){return a.id===e?h({},a,{F1:t.target.value}):a}))},changeF1l:function(t,e){this.data=this.data13.map((function(a){return a.id===e?h({},a,{F1:t.target.value}):a}))},changeF1m:function(t,e){this.data=this.data14.map((function(a){return a.id===e?h({},a,{F1:t.target.value}):a}))},sendJSON:function(){var t=document.getElementById("entryID").value,e={entryId:y.id,issueTo:{id:L},location:{id:$},completeItemCode:"COMPLETE"},a="http://zumaran.tech/store-app/fixedasset/issue/new",n={method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}};null==t||_==[]||E==[]?alert("A field is missing"):(fetch(a,n).then((function(t){return t.json()})).then((function(t){return console.log(t)})),console.log("Items sent:"+b.length,e),alert("Items sent"))},addItem:function(){var t=document.getElementById("itemParticularMake").ej2_instances[0].element.value;b.push({F1:t});var e=document.getElementById("assetCode").value;F.push({F1:e});var a=document.getElementById("ItemAvailableQty").value;g.push({F1:a});var n=document.getElementById("ItemSrNo").value;C.push({F1:n});var o=document.getElementById("ItemValue").value;w.push({F1:o});var r=document.getElementById("IssueQty").value;D.push({F1:r});var s=document.getElementById("TotalValueofissuedITEM").value;k.push({F1:s});var i=document.getElementById("Issueto").ej2_instances[0].element.value,l=document.getElementById("Issueto").ej2_instances[0].value;_.push({F1:i}),L.push(l);var d=document.getElementById("Balance").value;x.push({F1:d});var u=document.getElementById("DepartmentName/Storearea").ej2_instances[0].element.value;I.push({F1:u});var c=document.getElementById("LabName/RoomNumber").ej2_instances[0].element.value;S.push({F1:c});var p=document.getElementById("Location").ej2_instances[0].element.value,f=document.getElementById("Location").ej2_instances[0].value;E.push({F1:p}),$.push(f);var m=document.getElementById("LocationCodeComplete").value;N.push({F1:m});var v=document.getElementById("ItemCompleteCode").value;j.push({F1:v})}},autofill:function(){var t=document.getElementById("entryID"),e=document.getElementById("financialyear"),a=y[0].items;if(15==t.value){e.ej2_instances[0].element.value=y[0].invoice.financialYear.name;for(var n=0;n<a.length;n++)b.push({F1:""}),F.push({F1:a[n].item.itemCode}),g.push({F1:a[n].item.stock}),C.push({F1:a[n].item.lastSrlNoAssigned}),w.push({F1:a[n].item.finalCode}),D.push({F1:""}),k.push({F1:""}),_.push({F1:""}),x.push({F1:""}),I.push({F1:""}),S.push({F1:""}),E.push({F1:""}),N.push({F1:""}),j.push({F1:a[n].item.finalCode})}}}),R=J,W=(a("eefe"),a("2877")),Y=Object(W["a"])(R,s,i,!1,null,"0e99c2a9",null),q=Y.exports,G={components:{IssueStage:q},data:function(){return{}}},X=G,K=Object(W["a"])(X,o,r,!1,null,null,null),U=K.exports,Z=a("f309");n["a"].use(Z["a"]);var tt=new Z["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:tt,render:function(t){return t(U)}}).$mount("#app")},cf9a:function(t,e,a){},eefe:function(t,e,a){"use strict";var n=a("cf9a"),o=a.n(n);o.a}});
//# sourceMappingURL=app.5281a46a.js.map