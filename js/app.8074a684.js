(function(t){function e(e){for(var n,i,s=e[0],l=e[1],d=e[2],c=0,p=[];c<s.length;c++)i=s[c],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,d||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("a026"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("EntryStage")],1)},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"bodi"}},[a("div",{attrs:{id:"container"}},[a("form",{attrs:{id:"entryStage"},on:{submit:function(t){t.preventDefault()}}},[a("div",{attrs:{id:"fieldset1"}},[a("div",{attrs:{id:"FSchild1"}},[a("div",{staticClass:"field"},[a("label",{attrs:{for:"inputYear"}},[t._v("Financial year")]),a("ejs-combobox",{attrs:{dataSource:t.remoteData1,mode:"Delimiter",id:"financialyear",allowCustom:"true",hideSelectedItem:!1,allowMultiSelection:!0,allowFiltering:t.allowFiltering,fields:t.remoteFields,placeholder:"select an item",popupWidth:"250px",popupHeight:"200px"}}),a("span",{staticClass:"bar"})],1),t._m(0)]),a("div",{attrs:{id:"FSchild2"}},[a("div",{staticClass:"field"},[a("label",{attrs:{for:"inputVendorField"}},[t._v("Vendor name")]),a("ejs-combobox",{attrs:{dataSource:t.remoteData2,allowCustomValue:"allowCustomValue",id:"inputvendor",mode:"Delimiter",hideSelectedItem:!1,allowMultiSelection:!0,onkeydown:"return (event.keyCode!=13);",fields:t.remoteFields,placeholder:"select an item",popupWidth:"250px",popupHeight:"200px"}}),a("span",{staticClass:"bar"})],1),a("div",{staticClass:"field"},[a("label",{attrs:{for:"inputInvoiceN°"}},[t._v("Invoice n°")]),a("input",{attrs:{type:"number",id:"inputInvoiceN°",name:"invoiceN°",onkeydown:"return (event.keyCode!=13);"},on:{change:function(e){return t.autofill()}}}),a("span",{staticClass:"bar"})]),t._m(1)]),a("div",{attrs:{id:"FSchild3"}},[a("div",{staticClass:"field"},[a("label",{attrs:{for:"inputAssetType"}},[t._v("Asset type")]),a("ejs-combobox",{attrs:{dataSource:t.remoteData4,allowCustomValue:"allowCustomValue",id:"inputAssetType",mode:"Delimiter",hideSelectedItem:!1,allowMultiSelection:!0,onkeydown:"return (event.keyCode!=13);",fields:t.remoteFields,placeholder:"select an item",popupWidth:"250px",popupHeight:"200px"}})],1),a("div",{staticClass:"field"},[a("label",{attrs:{for:"inputFund"}},[t._v("Fund")]),a("ejs-combobox",{attrs:{dataSource:t.remoteData3,allowCustomValue:"allowCustomValue",id:"inputFund",mode:"Delimiter",hideSelectedItem:!1,allowMultiSelection:!0,onkeydown:"return (event.keyCode!=13);",fields:t.remoteFieldsInvoiceFund,placeholder:"select an item",popupWidth:"250px",popupHeight:"200px"}})],1)])]),a("div",{staticStyle:{width:"100%",height:"10px","border-bottom":"1px solid",opacity:"0.3"}}),a("div",{staticStyle:{width:"100%",height:"10px","border-bottom":"1px solid",opacity:"0.3"}}),a("div",{staticStyle:{width:"100%",height:"10px","border-bottom":"1px solid",opacity:"0.3"}}),t._m(2),a("form",{on:{submit:function(t){t.preventDefault()}}},[a("div",{attrs:{id:"fieldset2"}},[a("div",{staticClass:"field"},[a("label",{attrs:{for:"inputPurchaseFor"}},[t._v("Purchase for")]),a("ejs-combobox",{attrs:{dataSource:t.remoteData7,id:"purchasefor",mode:"Delimiter",onkeydown:"return (event.keyCode!=13);",allowMultiSelection:!0,fields:t.remoteFields,placeholder:"select an item",popupWidth:"250px",popupHeight:"200px"},on:{submit:function(t){t.preventDefault()}},model:{value:t.pf,callback:function(e){t.pf=e},expression:"pf"}}),a("p",{staticStyle:{display:"none",padding:"5px"},attrs:{id:"purchaseforp"}},[t._v(t._s(t.pf))])],1),a("div",{staticClass:"field"},[a("label",{attrs:{for:"inputStockReg/MainCat"}},[t._v("Stock Register/ Main Category")]),a("ejs-combobox",{attrs:{dataSource:t.remoteData5,mode:"Delimiter",id:"StockRegMainCat",onkeydown:"return (event.keyCode!=13);",hideSelectedItem:!1,allowMultiSelection:!0,fields:t.remoteFields,placeholder:"select an item",popupWidth:"250px",popupHeight:"200px"},on:{submit:function(t){t.preventDefault()}},model:{value:t.mc,callback:function(e){t.mc=e},expression:"mc"}}),a("p",{staticStyle:{display:"none",padding:"5px"},attrs:{id:"StockRegMainCatp"}},[t._v(t._s(t.mc))])],1),a("div",{staticClass:"field"},[a("label",{attrs:{for:"inputStockReg/SubC"}},[t._v("Stock Register/ sub Category")]),a("ejs-combobox",{attrs:{dataSource:t.remoteData6,mode:"Delimiter",id:"StockRegSubC",hideSelectedItem:!1,allowMultiSelection:!0,fields:t.remoteFields,placeholder:"select an item",onkeydown:"return (event.keyCode!=13);",popupWidth:"250px",popupHeight:"200px"},on:{submit:function(t){t.preventDefault()}},model:{value:t.sc,callback:function(e){t.sc=e},expression:"sc"}}),a("p",{staticStyle:{display:"none",padding:"5px"},attrs:{id:"StockRegSubCp"}},[t._v(t._s(t.sc))])],1),t._m(3),a("div",{staticClass:"field"},[a("label",{attrs:{for:"inputItemNameAsForCoding"}},[t._v("Item name for coding")]),a("ejs-combobox",{attrs:{dataSource:t.remoteData8,mode:"Delimiter",id:"ItemNameAsForCoding",onkeydown:"return (event.keyCode!=13);",hideSelectedItem:!1,allowMultiSelection:!0,fields:t.remoteFieldsItemNameCoding,placeholder:"select an item",popupWidth:"250px",popupHeight:"200px"},on:{submit:function(t){t.preventDefault()}},model:{value:t.ic,callback:function(e){t.ic=e},expression:"ic"}}),a("p",{staticStyle:{display:"none",padding:"5px"},attrs:{id:"ItemNameAsForCodingp"}},[t._v(t._s(t.ic))])],1),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17)])]),a("div",{staticStyle:{cursor:"pointer",margin:"15px"},attrs:{id:"addItem"},on:{click:function(e){return t.addItem()}}},[t._v("Add item")]),a("div",{attrs:{id:"tableContainer"}},[a("DataTable",{staticClass:"Datatable",attrs:{"header-fields":t.headerFields,data:t.data1||[],"not-found-msg":""},scopedSlots:t._u([{key:"F1New",fn:function(e){return a("div",{},[a("textarea",{staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.rowData.F1},on:{keyup:function(a){return t.changeF1(a,e.rowData.id)}}})])}}])}),a("DataTable",{staticClass:"Datatable",attrs:{"header-fields":t.headerFields,data:t.data2||[],"not-found-msg":""},scopedSlots:t._u([{key:"F1New",fn:function(e){return a("div",{},[a("textarea",{staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.rowData.F1},on:{keyup:function(a){return t.changeF1a(a,e.rowData.id)}}})])}}])}),a("DataTable",{staticClass:"Datatable",attrs:{"header-fields":t.headerFields,data:t.data3||[],"not-found-msg":" "},scopedSlots:t._u([{key:"F1New",fn:function(e){return a("div",{},[a("textarea",{staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.rowData.F1},on:{keyup:function(a){return t.changeF1b(a,e.rowData.id)}}})])}}])}),a("DataTable",{staticClass:"Datatable",attrs:{"header-fields":t.headerFields,data:t.data4||[],"not-found-msg":" "},scopedSlots:t._u([{key:"F1New",fn:function(e){return a("div",{},[a("textarea",{staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.rowData.F1},on:{keyup:function(a){return t.changeF1c(a,e.rowData.id)}}})])}}])}),a("DataTable",{staticClass:"Datatable",attrs:{"header-fields":t.headerFields,data:t.data5||[],"not-found-msg":""},scopedSlots:t._u([{key:"F1New",fn:function(e){return a("div",{},[a("textarea",{staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.rowData.F1},on:{keyup:function(a){return t.changeF1d(a,e.rowData.id)}}})])}}])}),a("DataTable",{staticClass:"Datatable",attrs:{"header-fields":t.headerFields,data:t.data6||[],"not-found-msg":""},scopedSlots:t._u([{key:"F1New",fn:function(e){return a("div",{},[a("textarea",{staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.rowData.F1},on:{keyup:function(a){return t.changeF1e(a,e.rowData.id)}}})])}}])}),a("DataTable",{staticClass:"Datatable",attrs:{"header-fields":t.headerFields,data:t.data7||[],"not-found-msg":""},scopedSlots:t._u([{key:"F1New",fn:function(e){return a("div",{},[a("textarea",{staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.rowData.F1},on:{keyup:function(a){return t.changeF1f(a,e.rowData.id)}}})])}}])}),a("DataTable",{staticClass:"Datatable",attrs:{"header-fields":t.headerFields,data:t.data8||[],"not-found-msg":""},scopedSlots:t._u([{key:"F1New",fn:function(e){return a("div",{},[a("textarea",{staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.rowData.F1},on:{keyup:function(a){return t.changeF1g(a,e.rowData.id)}}})])}}])}),a("DataTable",{staticClass:"Datatable",attrs:{"header-fields":t.headerFields,data:t.data9||[],"not-found-msg":""},scopedSlots:t._u([{key:"F1New",fn:function(e){return a("div",{},[a("textarea",{staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.rowData.F1},on:{keyup:function(a){return t.changeF1h(a,e.rowData.id)}}})])}}])}),a("DataTable",{staticClass:"Datatable",attrs:{"header-fields":t.headerFields,data:t.data10||[],"not-found-msg":""},scopedSlots:t._u([{key:"F1New",fn:function(e){return a("div",{},[a("textarea",{staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.rowData.F1},on:{keyup:function(a){return t.changeF1i(a,e.rowData.id)}}})])}}])}),a("DataTable",{staticClass:"Datatable",attrs:{"header-fields":t.headerFields,data:t.data11||[],"not-found-msg":""},scopedSlots:t._u([{key:"F1New",fn:function(e){return a("div",{},[a("textarea",{staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.rowData.F1},on:{keyup:function(a){return t.changeF1j(a,e.rowData.id)}}})])}}])}),a("DataTable",{staticClass:"Datatable",attrs:{"header-fields":t.headerFields,data:t.data12||[],"not-found-msg":""},scopedSlots:t._u([{key:"F1New",fn:function(e){return a("div",{},[a("textarea",{staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.rowData.F1},on:{keyup:function(a){return t.changeF1k(a,e.rowData.id)}}})])}}])}),a("DataTable",{staticClass:"Datatable",attrs:{"header-fields":t.headerFields,data:t.data13||[],"not-found-msg":""},scopedSlots:t._u([{key:"F1New",fn:function(e){return a("div",{},[a("textarea",{staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.rowData.F1},on:{keyup:function(a){return t.changeF1l(a,e.rowData.id)}}})])}}])}),a("DataTable",{staticClass:"Datatable",attrs:{"header-fields":t.headerFields,data:t.data14||[],"not-found-msg":""},scopedSlots:t._u([{key:"F1New",fn:function(e){return a("div",{},[a("textarea",{staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.rowData.F1},on:{keyup:function(a){return t.changeF1m(a,e.rowData.id)}}})])}}])}),a("DataTable",{staticClass:"Datatable",attrs:{"header-fields":t.headerFields,data:t.data15||[],"not-found-msg":""},scopedSlots:t._u([{key:"F1New",fn:function(e){return a("div",{},[a("textarea",{staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.rowData.F1},on:{keyup:function(a){return t.changeF1n(a,e.rowData.id)}}})])}}])}),a("DataTable",{staticClass:"Datatable",attrs:{"header-fields":t.headerFields,data:t.data16||[],"not-found-msg":""},scopedSlots:t._u([{key:"F1New",fn:function(e){return a("div",{},[a("textarea",{staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.rowData.F1},on:{keyup:function(a){return t.changeF1o(a,e.rowData.id)}}})])}}])}),a("DataTable",{staticClass:"Datatable",attrs:{"header-fields":t.headerFields,data:t.data17||[],"not-found-msg":""},scopedSlots:t._u([{key:"F1New",fn:function(e){return a("div",{},[a("textarea",{staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.rowData.F1},on:{keyup:function(a){return t.changeF1p(a,e.rowData.id)}}})])}}])}),a("DataTable",{staticClass:"Datatable",attrs:{"header-fields":t.headerFields,data:t.data18||[],"not-found-msg":""},scopedSlots:t._u([{key:"F1New",fn:function(e){return a("div",{},[a("textarea",{staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.rowData.F1},on:{keyup:function(a){return t.changeF1q(a,e.rowData.id)}}})])}}])}),a("DataTable",{staticClass:"Datatable",attrs:{"header-fields":t.headerFields,data:t.data19||[],"not-found-msg":""},scopedSlots:t._u([{key:"F1New",fn:function(e){return a("div",{},[a("textarea",{staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.rowData.F1},on:{keyup:function(a){return t.changeF1r(a,e.rowData.id)}}})])}}])})],1),t._m(18),a("div",{attrs:{id:"divConfirm"}},[a("label",[t._v("Confirm Entry")]),a("button",{attrs:{id:"yes",value:"sendEntry",onkeydown:"return (event.keyCode!=13);"},on:{click:function(e){return t.sendJSON()}}},[t._v("Yes")]),a("button",{attrs:{id:"no",value:"cancel",onkeydown:"return (event.keyCode!=13);"}},[t._v("No")])])])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{attrs:{for:"inputDateOfEntry"}},[t._v("Date of entry")]),a("input",{attrs:{type:"date",id:"inputDateOfEntry",name:"dateOfEntry",placeholder:"DD/MM/YY",autocomplete:"off",onkeydown:"return (event.keyCode!=13);"}}),a("span",{staticClass:"bar"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{attrs:{for:"inputDateOfInvoice"}},[t._v(" Date of invoice")]),a("input",{attrs:{type:"date",id:"inputDateOfInvoice",name:"dateOfInvoice",onkeydown:"return (event.keyCode!=13);"}}),a("span",{staticClass:"bar"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"fieldsetMiddle"}},[a("div",{staticClass:"field",attrs:{id:"fieldInputSN°"}},[a("label",{attrs:{for:"inputS.N°"}},[t._v("S.N°")]),a("input",{attrs:{type:"number",id:"inputS.N°",name:"S.N°",autocomplete:"off",onkeydown:"return (event.keyCode!=13);"}}),a("span",{staticClass:"bar"})]),a("div",{staticClass:"field",attrs:{id:"fieldInputPO"}},[a("label",{attrs:{for:"inputPO"}},[t._v("PO Number/ Requisition below 25000/-")]),a("input",{attrs:{type:"text",id:"inputPO",name:"PO",autocomplete:"off",onkeydown:"return (event.keyCode!=13);"}}),a("span",{staticClass:"bar"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{attrs:{for:"inputItemNameAsPerInvoice"}},[t._v("Item name as per Invoice")]),a("input",{staticClass:"paddedinput",attrs:{type:"text",id:"inputItemNameAsPerInvoice",name:"itemNameAsPerInvoice",autocomplete:"off",onkeydown:"return (event.keyCode!=13);"}}),a("span",{staticClass:"bar"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{attrs:{for:"inputAssetCode"}},[t._v("Asset Code")]),a("input",{staticClass:"paddedinput",attrs:{type:"text",id:"inputAssetCode",name:"assetCode",autocomplete:"off",onkeydown:"return (event.keyCode!=13);"}}),a("span",{staticClass:"bar"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{attrs:{for:"inputItemQ(RECD.viaInvoice)"}},[t._v("Item Quantity (Recd. Via Invoice)")]),a("input",{staticClass:"paddedinput",attrs:{type:"number",id:"inputItemQ(RECD.viaInvoice)",name:"itemQ(RECD.viaInvoice)",autocomplete:"off",onkeydown:"return (event.keyCode!=13);"}}),a("span",{staticClass:"bar"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{attrs:{for:"inputItemQ(Prev.AvailableStore)"}},[t._v("Item Quantity (Previous available to Store)")]),a("input",{staticClass:"paddedinput",attrs:{type:"number",id:"inputItemQ(Prev.AvailableStore)",name:"itemQ(Prev.AvailableStore)",autocomplete:"off",onkeydown:"return (event.keyCode!=13);"}}),a("span",{staticClass:"bar"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{attrs:{for:"inputTotaltemQ"}},[t._v("Total Item Quantity")]),a("input",{staticClass:"paddedinput",attrs:{type:"number",id:"inputTotaltemQ",name:"totaltemQ",onkeydown:"return (event.keyCode!=13);"}}),a("span",{staticClass:"bar"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{attrs:{for:"inputPrevAvailableSr.No"}},[t._v("Previous available Sr.No")]),a("input",{staticClass:"paddedinput",attrs:{type:"number",id:"inputPrevAvailableSr.No",name:"prevAvailableSr.No",onkeydown:"return (event.keyCode!=13);"}}),a("span",{staticClass:"bar"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{attrs:{for:"lastSrlNoAssigned"}},[t._v("Item Last Sr. No. (As per coding)")]),a("input",{staticClass:"paddedinput",attrs:{type:"number",id:"lastSrlNoAssigned",name:"itemItemLastSr.N°",onkeydown:"return (event.keyCode!=13);"}}),a("span",{staticClass:"bar"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{attrs:{for:"inputItemNewNumber"}},[t._v("Item New Number")]),a("input",{staticClass:"paddedinput",attrs:{type:"number",id:"inputItemNewNumber",name:"itemNewNumber",onkeydown:"return (event.keyCode!=13);"}}),a("span",{staticClass:"bar"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{attrs:{for:"inputItemMake"}},[t._v("Item Make")]),a("input",{staticClass:"paddedinput",attrs:{type:"text",id:"inputItemMake",name:"itemMake",autocomplete:"off",onkeydown:"return (event.keyCode!=13);"}}),a("span",{staticClass:"bar"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{attrs:{for:"inputItemS.N°"}},[t._v("Item S.N°")]),a("input",{staticClass:"paddedinput",attrs:{type:"number",id:"inputItemS.N°",name:"itemS.N°",autocomplete:"off",onkeydown:"return (event.keyCode!=13);"}}),a("span",{staticClass:"bar"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{attrs:{for:"inputBasicRate"}},[t._v("Basic Rate")]),a("input",{staticClass:"paddedinput",attrs:{type:"number",id:"inputBasicRate",name:"basicRate",autocomplete:"off",onkeydown:"return (event.keyCode!=13);"}}),a("span",{staticClass:"bar"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{attrs:{for:"inputDiscount(%)"}},[t._v("Discount (%)")]),a("input",{staticClass:"paddedinput",attrs:{type:"number",id:"inputDiscount(%)",name:"discount(%)",autocomplete:"off",onkeydown:"return (event.keyCode!=13);"}}),a("span",{staticClass:"bar"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{attrs:{for:"inputTax(%)"}},[t._v("Tax (%)")]),a("input",{staticClass:"paddedinput",attrs:{type:"number",id:"inputTax(%)",name:"tax(%)",onkeydown:"return (event.keyCode!=13);"}}),a("span",{staticClass:"bar"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{attrs:{for:"inputAmount"}},[t._v("Amount")]),a("input",{staticClass:"paddedinput",attrs:{type:"number",id:"inputAmount",name:"amount",onkeydown:"return (event.keyCode!=13);"}}),a("span",{staticClass:"bar"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{attrs:{for:"inputStockRegPageN°"}},[t._v("Stock Register Page No.")]),a("input",{staticClass:"paddedinput",attrs:{type:"number",id:"inputStockRegPageN°",name:"stockRegPageN°",onkeydown:"return (event.keyCode!=13);"}}),a("span",{staticClass:"bar"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field",attrs:{id:"fieldInputTA"}},[a("label",{attrs:{for:"inputTotalAmount"}},[t._v("Total Amount")]),a("input",{attrs:{type:"number",id:"inputTotalAmount",name:"totalamount",onkeydown:"return (event.keyCode!=13);"}}),a("span",{staticClass:"bar"})])}],l=(a("a4d3"),a("4de4"),a("4160"),a("d81d"),a("b0c0"),a("e439"),a("dbb4"),a("b64b"),a("d3b7"),a("159b"),a("ade3")),d=a("2af1"),u=a("eda0"),c=a("46f1"),p=a("4f3e"),m=a("0f5f"),f=a("dd65");function v(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function h(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?v(Object(a),!0).forEach((function(e){Object(l["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}n["a"].use(d["a"]),n["a"].use(u["a"]),n["a"].use(c["a"]);var y,b=[],F=[],g=[],C=[],w=[],D=[],_=[],k=[],S=[],x=[],I=[],N=[],E=[],P=[],T=[],O=[],j=[],A=[],B=[],R=[],M=new p["a"]({url:"http://zumaran.tech/store-app/financialyear/all",adaptor:new m["e"],crossDomain:!0}),$=new p["a"]({url:"http://zumaran.tech/store-app/vendor/all",adaptor:new m["e"],crossDomain:!0}),Q=new p["a"]({url:"http://zumaran.tech/store-app/invoice/all",adaptor:new m["e"],crossDomain:!0}),z=new p["a"]({url:"http://zumaran.tech/store-app/assettype/all",adaptor:new m["e"],crossDomain:!0}),V=new p["a"]({url:"http://zumaran.tech/store-app/maincategory/all",adaptor:new m["e"],crossDomain:!0}),H=new p["a"]({url:"http://zumaran.tech/store-app/subcategory/all",adaptor:new m["e"],crossDomain:!0}),W=new p["a"]({url:"http://zumaran.tech/store-app/department/all",adaptor:new m["e"],crossDomain:!0}),Y=new p["a"]({url:"http://zumaran.tech/store-app/items/all",adaptor:new m["e"],crossDomain:!0}),q=new p["a"]({url:"http://zumaran.tech/store-app/invoice/findno/2001",adaptor:new m["e"],crossDomain:!0});window.onload=function(){};var J,L=new XMLHttpRequest;L.onreadystatechange=function(){4==this.readyState&&200==this.status&&(y=JSON.parse(L.responseText))},L.open("GET","http://zumaran.tech/store-app/invoice/findno/2001",!0),L.send();var G=new XMLHttpRequest;G.onreadystatechange=function(){4==this.readyState&&200==this.status&&(J=JSON.parse(G.responseText))},G.open("GET","http://zumaran.tech/store-app/department/all",!0),G.send();var X=n["a"].extend({name:"form1",components:{DataTable:f["DataTable"]},data:function(){return{remoteData1:M,remoteData2:$,remoteData3:Q,remoteData4:z,remoteData5:V,remoteData6:H,remoteData7:W,remoteData8:Y,remoteData9:q,remoteFields:{value:"id",text:"name"},remoteFieldsInvoiceN:{value:"id",text:"number"},remoteFieldsInvoiceDateEntry:{value:"id",text:"entryDate"},remoteFieldsInvoiceDate:{value:"id",text:"date"},remoteFieldsInvoiceFinancialYear:{value:"financialYear.id",text:"financialYear.name"},remoteFieldsInvoiceVendor:{value:"vendor.id",text:"vendor.name"},remoteFieldsInvoiceAssetType:{value:"assetType.id",text:"assetType.name"},remoteFieldsInvoiceFund:{value:"id",text:"fund"},remoteFieldsInvoiceTotalAmount:{value:"id",text:"totalAmount"},remoteFieldsItemNameCoding:{value:"id",text:"itemCode"},keySettings:{saveRequest:""},localData:[{Id:"1",item:"a"},{Id:"2",item:"b"},{Id:"3",item:"c"}],localFields:{value:"Id",text:"item"},pf:null,mc:null,sc:null,ic:null,headerFields:[{name:"F1",label:"",customElement:"F1New"}],data1:b,data2:F,data3:g,data4:C,data5:w,data6:D,data7:_,data8:k,data9:S,data10:x,data11:I,data12:N,data13:E,data14:P,data15:T,data16:O,data17:j,data18:A,data19:B,allowFiltering:!0,customValue:"",newItem:"",query:"",F1:null}},methods:{changeF1:function(t,e){this.data1=this.data1.map((function(a){return a.id===e?h({},a,{F1:t.target.value}):a}))},changeF1a:function(t,e){this.data2=this.data2.map((function(a){return a.id===e?h({},a,{F1:t.target.value}):a}))},changeF1b:function(t,e){this.data3=this.data3.map((function(a){return a.id===e?h({},a,{F1:t.target.value}):a}))},changeF1c:function(t,e){this.data4=this.data4.map((function(a){return a.id===e?h({},a,{F1:t.target.value}):a}))},changeF1d:function(t,e){this.data5=this.data5.map((function(a){return a.id===e?h({},a,{F1:t.target.value}):a}))},changeF1e:function(t,e){this.data6=this.data6.map((function(a){return a.id===e?h({},a,{F1:t.target.value}):a}))},changeF1f:function(t,e){this.data7=this.data7.map((function(a){return a.id===e?h({},a,{F1:t.target.value}):a}))},changeF1g:function(t,e){this.data8=this.data8.map((function(a){return a.id===e?h({},a,{F1:t.target.value}):a}))},changeF1h:function(t,e){this.data9=this.data9.map((function(a){return a.id===e?h({},a,{F1:t.target.value}):a}))},changeF1i:function(t,e){this.data10=this.data10.map((function(a){return a.id===e?h({},a,{F1:t.target.value}):a}))},changeF1j:function(t,e){this.data11=this.data11.map((function(a){return a.id===e?h({},a,{F1:t.target.value}):a}))},changeF1k:function(t,e){this.data12=this.data12.map((function(a){return a.id===e?h({},a,{F1:t.target.value}):a}))},changeF1l:function(t,e){this.data13=this.data13.map((function(a){return a.id===e?h({},a,{F1:t.target.value}):a}))},changeF1m:function(t,e){this.data14=this.data14.map((function(a){return a.id===e?h({},a,{F1:t.target.value}):a}))},changeF1n:function(t,e){this.data15=this.data15.map((function(a){return a.id===e?h({},a,{F1:t.target.value}):a}))},changeF1o:function(t,e){this.data16=this.data16.map((function(a){return a.id===e?h({},a,{F1:t.target.value}):a}))},changeF1p:function(t,e){this.data17=this.data17.map((function(a){return a.id===e?h({},a,{F1:t.target.value}):a}))},changeF1q:function(t,e){this.data18=this.data18.map((function(a){return a.id===e?h({},a,{F1:t.target.value}):a}))},changeF1r:function(t,e){this.data19=this.data19.map((function(a){return a.id===e?h({},a,{F1:t.target.value}):a}))},sendJSON:function(){for(var t=[],e=0;e<J.length;e++)t.push(J[e].name);for(var a=0;a<t.length;a++)R[0]==t[a]&&(R[0]=a);for(var n=document.getElementById("inputPO").value,r=[],o=0,i={item:{id:1},itemQuantity:_[o].F1,itemNewSerialNumber:N[o].F1,basicRate:T[o].F1,discount:O[o].F1,tax:j[o].F1,amount:A[o].F1},s=1;s<=b.length;s++)r.push(i);var l={invoice:{id:y.id},poNumber:n,purchaseFor:{id:R[0]},items:r},d="http://zumaran.tech/store-app/fixedasset/newentry",u={method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"}};fetch(d,u).then((function(t){return t.json()})).then((function(t){return console.log(t)})),console.log("Items sent:"+b.length,l)},addItem:function(){var t=document.getElementById("purchasefor").ej2_instances[0].element.value,e=document.getElementById("purchasefor").ej2_instances[0].value;b.push({F1:t}),R.push(e);var a=document.getElementById("StockRegMainCat").ej2_instances[0].element.value;F.push({F1:a});var n=document.getElementById("StockRegSubC").ej2_instances[0].element.value;g.push({F1:n});var r=document.getElementById("inputItemNameAsPerInvoice").value;C.push({F1:r});var o=document.getElementById("ItemNameAsForCoding").ej2_instances[0].element.value;w.push({F1:o});var i=document.getElementById("inputAssetCode").value;D.push({F1:i});var s=document.getElementById("inputItemQ(RECD.viaInvoice)").value;_.push({F1:s});var l=document.getElementById("inputItemQ(Prev.AvailableStore)").value;k.push({F1:l});var d=document.getElementById("inputTotaltemQ").value;S.push({F1:d});var u=document.getElementById("inputPrevAvailableSr.No").value;x.push({F1:u});var c=document.getElementById("lastSrlNoAssigned").value;I.push({F1:c});var p=document.getElementById("inputItemNewNumber").value;N.push({F1:p});var m=document.getElementById("inputItemMake").value;E.push({F1:m});var f=document.getElementById("inputItemS.N°").value;P.push({F1:f});var v=document.getElementById("inputBasicRate").value;T.push({F1:v});var h=document.getElementById("inputDiscount(%)").value;O.push({F1:h});var y=document.getElementById("inputTax(%)").value;j.push({F1:y});var M=document.getElementById("inputAmount").value;A.push({F1:M});var $=document.getElementById("inputStockRegPageN°").value;B.push({F1:$})},autofill:function(){var t=document.getElementById("inputInvoiceN°"),e=document.getElementById("financialyear"),a=document.getElementById("inputvendor"),n=document.getElementById("inputAssetType"),r=document.getElementById("inputFund"),o=document.getElementById("inputTotalAmount"),i=y.items;if(2001==t.value){e.ej2_instances[0].element.value=y.financialYear.name,a.ej2_instances[0].element.value=y.vendor.name,n.ej2_instances[0].element.value=y.assetType.name,r.ej2_instances[0].element.value=y.fund,o.value=y.totalAmount;for(var s=0;s<i.length;s++)b.push({F1:""}),F.push({F1:i[s].item.mainCategory.name}),g.push({F1:i[s].item.subCategory.name}),C.push({F1:i[s].item.name}),w.push({F1:i[s].item.itemCode}),D.push({F1:""}),_.push({F1:""}),k.push({F1:i[s].item.lastSrlNoAssigned}),S.push({F1:""}),x.push({F1:""}),I.push({F1:i[s].item.stock}),N.push({F1:i[s].item.lastSrlNoAssigned+1}),E.push({F1:""}),P.push({F1:""}),T.push({F1:""}),O.push({F1:""}),j.push({F1:""}),A.push({F1:""}),B.push({F1:""})}}}}),K=X,U=(a("eeec"),a("2877")),Z=Object(U["a"])(K,i,s,!1,null,"0b875992",null),tt=Z.exports,et={components:{EntryStage:tt},data:function(){return{}}},at=et,nt=Object(U["a"])(at,r,o,!1,null,null,null),rt=nt.exports,ot=a("f309");n["a"].use(ot["a"]);var it=new ot["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:it,render:function(t){return t(rt)}}).$mount("#app")},df39:function(t,e,a){},eeec:function(t,e,a){"use strict";var n=a("df39"),r=a.n(n);r.a}});
//# sourceMappingURL=app.8074a684.js.map