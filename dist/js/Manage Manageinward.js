(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Manage Manageinward"],{"05e9":function(t,e,a){var r=a("24fb");e=r(!1),e.push([t.i,".disabled{color:#8e9894!important;cursor:not-allowed!important;pointer-events:none}.switch{width:auto!important;overflow:unset!important}.switch .slider{left:auto!important;right:auto!important;padding:2px 7px 0 8px}.switch input:checked+.slider:before{transform:translateX(26px);left:auto;right:30px}",""]),t.exports=e},1240:function(t,e,a){"use strict";a("8610")},8610:function(t,e,a){var r=a("05e9");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var s=a("499e").default;s("1fcc6021",r,!0,{sourceMap:!1,shadowMode:!1})},ce86:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"main-content"},[a("loader",{attrs:{"is-visible":t.isLoading}}),a("div",{attrs:{id:"divMainLeadData"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 padding-t_8"},[a("div",{staticClass:"theme-primary partition-full"},[a("span",{staticClass:"p-name text-white"},[t._v(t._s(t.$t("Manage"))+" Inward")]),a("span",{staticClass:"float-right"})])])]),a("div",{staticClass:"border p-3"},[a("Form",{ref:"form",scopedSlots:t._u([{key:"default",fn:function(e){var r=e.valid,s=e.errors;return[a("DynamicForm",{attrs:{schema:t.GroupBy,dateformat:t.dateformat},on:{AssignToggleValues:t.AssignToggleValues,setSelectedValue:t.setSelectedValue,onSearchDDL:t.onSearch}}),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left my-2"},[a("div",{staticClass:"heading-border"},[a("h5",{staticClass:"h5"},[a("span",[t._v(t._s(t.$t("ProductSummary")))])])])]),a("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left p-0 step1fixer my-2"},[a("div",{staticClass:"col-sm-12 col-md-6 float-left"},[a("label",[t._v(t._s(t.$t("PurchaseOrderWithoutRef"))+" "),a("span",{staticClass:"text-danger"},[t._v("*")])]),a("Field",{attrs:{name:"PurchaseOrderDDL",rules:{required:!0},label:"Purchase Order"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;e.touched,e.invalid;return[a("Multiselect",{class:{"custom-vselect":t.submited},attrs:{name:"PurchaseOrderDDL",multiple:!0,taggable:!0,"close-on-select":!1,searchable:!0,"show-labels":!1,"track-by":"value",object:!0,label:"name",options:t.vendorPurchaseOrderList},on:{close:t.getProductDetailsForPurchaseOrder,deselect:t.onDeselectPurchaseOrder},model:{value:t.selectedPurchaseOrder,callback:function(e){t.selectedPurchaseOrder=e},expression:"selectedPurchaseOrder"}}),a("span",{staticClass:"invalid-feedback d-block",attrs:{name:"PurchaseOrderDDL"}},[t._v(t._s(r[0]))])]}}],null,!0)})],1)]),a("div",{staticClass:"listing p-3"},[a("div",{staticClass:"table-responsive mb-3"},[a("table",{staticClass:"table table-bordered m-0",staticStyle:{width:"100%"},attrs:{id:"manageInwardTable","aria-describedby":"manageInward"}},[a("thead",{staticClass:"thead-bg"},[a("tr",{staticClass:"text-capitalize"},[a("th",{staticClass:"nonresize text-center",attrs:{scope:"col","data-width":"50"}},[a("span",[t._v(t._s(t.$t("SerialNumbering")))])]),a("th",{staticClass:"nonresize",staticStyle:{"min-width":"250px"},attrs:{scope:"col","data-width":"300"}},[a("span",[t._v(t._s(t.$t("PRODUCT_DETAILS")))])]),a("th",{staticStyle:{"min-width":"150px"},attrs:{scope:"col"}},[a("span",[t._v(t._s(t.$t("PURCHASE_ORDER_NUMBER")))])]),a("th",{staticStyle:{"min-width":"150px"},attrs:{scope:"col"}},[a("span",[t._v(t._s(t.$t("RequestedPrice")))])]),a("th",{staticStyle:{"min-width":"140px"},attrs:{scope:"col"}},[a("span",[t._v(t._s(t.$t("RequestedQuantity")))])]),a("th",{staticStyle:{"min-width":"140px"},attrs:{scope:"col"}},[a("span",[t._v(t._s(t.$t("ReceivedTillnow")))])]),a("th",{staticStyle:{"min-width":"150px"},attrs:{scope:"col"}},[a("span",[t._v(t._s(t.$t("ListPrice")))])]),a("th",{staticStyle:{"min-width":"140px"},attrs:{scope:"col"}},[a("span",[t._v(t._s(t.$t("Received"))+" "+t._s(t.$t("Quantity"))+" ")])]),a("th",{staticStyle:{"min-width":"100px"},attrs:{scope:"col"}},[a("span",[t._v(t._s(t.$t("Amount")))])]),a("th",{attrs:{scope:"col",colspan:"2"}},[a("span",[t._v(t._s(t.$t("Tax")))])]),a("th",{attrs:{scope:"col"}},[a("span",[t._v(t._s(t.$t("Total")))])]),a("th",{attrs:{scope:"col"}},[a("span",[t._v(t._s(t.$t("Action")))])])])]),a("tbody",[a("tr",[null==t.purchaseOrderDetails.SummaryData||0==t.purchaseOrderDetails.SummaryData.length?a("td",{staticClass:"text-danger text-center no-record",attrs:{colspan:"12"}},[t._v(" "+t._s(t.$t("NoRecordfound"))+" ")]):t._e()]),t._l(t.purchaseOrderDetails.SummaryData,(function(e,r){return a("tr",{key:r},[a("td",{staticClass:"text-center"},[t._v(t._s(r+1)+".")]),a("td",{staticClass:"overflow-visible"},[a("Multiselect",{staticClass:"disabled",attrs:{name:"PurchaseOrderDDL",noOptionsText:"",placeholder:t.$t("SelectNameMultiSelect",[t.$t("ProductName")]),"track-by":"name",options:e.ProductList,object:!0,label:"name"},model:{value:e.ProductName,callback:function(a){t.$set(e,"ProductName",a)},expression:"item.ProductName"}}),""!=e.ProductName&&null!=e.ProductName?a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.ProductDescription,expression:"item.ProductDescription"}],staticClass:"form-control mt-2",attrs:{type:"text",placeholder:t.$t("EnterDescription")},domProps:{value:e.ProductDescription},on:{input:function(a){a.target.composing||t.$set(e,"ProductDescription",a.target.value)}}}):t._e()],1),a("td",[a("span",{staticClass:"float-left"},[t._v(t._s(e.purchaseOrderNumber))])]),a("td",[a("span",{staticClass:"float-left"},[t._v(t._s(e.ProductRate))])]),a("td",[a("span",{staticClass:"float-left"},[t._v(t._s(e.ProductQuantity))])]),a("td",[a("span",{staticClass:"float-left"},[t._v(t._s(e.receivedItem))])]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.InwardUnitPrice,expression:"item.InwardUnitPrice"}],staticClass:"form-control",attrs:{type:"text",disabled:""==e.ProductName||null==e.ProductName,maxlength:"12"},domProps:{value:e.InwardUnitPrice},on:{input:[function(a){a.target.composing||t.$set(e,"InwardUnitPrice",a.target.value)},function(a){return t.CalculateAmount(e)}]}})]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.InwardQuantity,expression:"item.InwardQuantity"}],staticClass:"form-control",attrs:{type:"text",disabled:""==e.ProductName||null==e.ProductName,maxlength:"8"},domProps:{value:e.InwardQuantity},on:{input:[function(a){a.target.composing||t.$set(e,"InwardQuantity",a.target.value)},function(a){return t.CalculateAmount(e)}],keyup:function(a){return t.CheckRequestQuantity(e)}}})]),a("td",[a("span",{staticClass:"float-left"},[t._v(t._s(e.ProductAmount))])]),a("td",{staticClass:"position-relative"},[a("span",{staticClass:"float-left"},[t._v(t._s(e.ProductTax))])]),a("td",{staticClass:"text-center overflow-visible position-relative single-action"},[""!=e.ProductName&&null!=e.ProductName?a("a",{staticClass:"d-inline-block",attrs:{href:"javascript:;",title:t.$t("Add")},on:{click:function(a){return t.ShowTax(e)}}},[a("em",{staticClass:"fa fa-arrow-circle-right text-info",staticStyle:{"font-size":"20px"}})]):t._e(),e.toggleTax?a("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.outside,expression:"outside"}],staticClass:"position-absolute panelcoming paneltax panelfix bg-light"},[a("a",{staticClass:"close pt-0",staticStyle:{"font-size":"23px",right:"-20px",top:"10px"},attrs:{href:"javascript:;","data-dismiss":"alert"},on:{click:function(a){return t.ShowTax(e)}}},[t._v("×")]),a("div",{staticClass:"col-12 float-left p-0"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-bordered mt-0",staticStyle:{width:"100%"},attrs:{id:"tablelistingdata","aria-describedby":"listingdata"}},[a("thead",{staticClass:"thead-bg"},[a("tr",[a("th",{attrs:{scope:"col",width:"150px"}},[a("span",[t._v(t._s(t.$t("Tax"))+" "+t._s(t.$t("Percentagesign"))+" ")])]),a("th",{attrs:{scope:"col",width:"150px"}},[a("span",[t._v(t._s(t.$t("TaxFor"))+" ")])]),a("th",{attrs:{scope:"col",width:"150px"}},[a("span",[t._v(t._s(t.$t("Rate")))])]),a("th",{staticClass:"text-center",attrs:{scope:"col"}},[a("a",{attrs:{href:"javascript:;"},on:{click:function(a){return t.AddMoreTax(e)}}},[a("em",{staticClass:"fa fa-plus-circle text-success",staticStyle:{"font-size":"20px"}})])])])]),a("tbody",[t._l(e.TaxData,(function(r,s){return a("tr",{key:s},[a("td",[r.TAX_ID>0?a("span",[t._v(t._s(r.TAX_NAME))]):t._e(),r.TAX_ID<=0?a("input",{directives:[{name:"model",rawName:"v-model",value:r.TAX_NAME,expression:"taxItem.TAX_NAME"}],class:{"form-control":!0,"is-invalid":t.isTaxNameFilled},attrs:{type:"text"},domProps:{value:r.TAX_NAME},on:{input:[function(e){e.target.composing||t.$set(r,"TAX_NAME",e.target.value)},function(e){return t.clearRateIfNameEmpty(r,"TAX",!0)}]}}):t._e()]),a("td",[t._v(t._s(r.TAX_FOR))]),a("td",[a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:r.TAX_RATE,expression:"taxItem.TAX_RATE"}],staticClass:"form-control col-9 float-left",attrs:{type:"text"},domProps:{value:r.TAX_RATE},on:{input:[function(e){e.target.composing||t.$set(r,"TAX_RATE",e.target.value)},function(e){return t.onlyDecimal(r,"TAX",!0)}]}}),a("div",{staticClass:"input-group-append"},["percent"==r.TAX_TYPE?a("span",{staticClass:"input-group-text"},[t._v("%")]):t._e()])])]),r.TAX_ID<=0?a("td",{staticClass:"text-center single-action"},[a("a",{attrs:{href:"javascript:;"},on:{click:function(a){return t.DeleteMoreTax(e,s)}}},[a("em",{staticClass:"fa fa-trash text-danger",staticStyle:{"font-size":"20px"}})])]):t._e()])})),null==e.TaxData||0==e.TaxData.length?a("tr",[a("td",{staticClass:"text-danger text-center no-record",attrs:{colspan:"4"}},[t._v(" "+t._s(t.$t("NoRecordfound"))+" ")])]):t._e()],2)])])])]):t._e()]),a("td",[a("span",[t._v(t._s(t.totalSumlineItem(e)))])]),a("td",{staticClass:"text-center single-action"},[a("a",{attrs:{href:"javascript:;"},on:{click:function(a){return t.DeleteProductSummaryItem(e,r)}}},[a("em",{staticClass:"fa fa-trash action-icon text-danger"})])])])})),a("tr",[a("td",{staticClass:"text-dark text-right font-weight-bold align-middle border-bottom-0",attrs:{colspan:"11"}},[t._v(" "+t._s(t.$t("SubTotal"))+":")]),a("td",{staticClass:"border-bottom-0 align-middle",attrs:{colspan:"2"}},[a("span",[t._v(t._s(t.purchaseOrderDetails.SubTotal))])])]),a("tr",[a("td",{staticClass:"text-dark text-right font-weight-bold align-middle border-bottom-0",attrs:{colspan:"11"}},[t._v(" "+t._s(t.$t("ShippingCharges"))+":")]),a("td",{staticClass:"border-bottom-0",attrs:{colspan:"2"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.purchaseOrderDetails.ShippingCharges,expression:"purchaseOrderDetails.ShippingCharges"}],staticClass:"form-control",attrs:{type:"text",placeholder:"0.00",maxlength:"8"},domProps:{value:t.purchaseOrderDetails.ShippingCharges},on:{keypress:function(e){return t.isNumber(e)},input:function(e){e.target.composing||t.$set(t.purchaseOrderDetails,"ShippingCharges",e.target.value)}}})])]),a("tr",[a("td",{staticClass:"text-dark text-right font-weight-bold align-middle border-bottom-0",attrs:{colspan:"11"}},[t._v(" "+t._s(t.$t("Adjustments"))+":")]),a("td",{staticClass:"border-bottom-0",attrs:{colspan:"2"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.purchaseOrderDetails.Adjustments,expression:"purchaseOrderDetails.Adjustments"}],staticClass:"form-control",attrs:{type:"text",placeholder:"0.00",maxlength:"8"},domProps:{value:t.purchaseOrderDetails.Adjustments},on:{keypress:function(e){return t.isNumber(e)},input:function(e){e.target.composing||t.$set(t.purchaseOrderDetails,"Adjustments",e.target.value)}}})])]),a("tr",[a("td",{staticClass:"text-dark text-right font-weight-bold align-middle border-bottom-0",attrs:{colspan:"11"}},[t._v(" "+t._s(t.$t("Total"))+":")]),a("td",{staticClass:"border-bottom-0",attrs:{colspan:"2"}},[a("span",{attrs:{value:t.summaryTotal()}},[t._v(t._s(t.purchaseOrderDetails.SummaryTotal))])])])],2)])])])]),a("div",{staticClass:"row flex-row-reverse mt-2"},[a("div",{staticClass:"col-lg-6 text-right"},[a("a",{staticClass:"btn btn-success",class:{disabled:!1},attrs:{href:"javascript:;","data-tour":"step: 1; title: enter DealDetail; content: AddDealDetailContent",title:"Save"},on:{click:function(e){return t.SubmitData(r,s)}}},[a("em",{staticClass:"fa fa-save pr-2"}),t._v("Save ")]),t._v("  "),a("a",{staticClass:"btn btn-danger",attrs:{href:"javascript:void(0)",title:"Cancel"},on:{click:t.onCancel}},[a("em",{staticClass:"fa fa-close pr-2"}),t._v("Cancel ")])]),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"py-2"},[a("small",{staticClass:"text-danger"},[t._v(t._s(t.$t("MandatoryString")))])])])])]}}])})],1)])],1)},s=[],o=a("b85c"),i=a("c7eb"),n=a("1da1"),c=a("53ca"),u=(a("a9e3"),a("b680"),a("b0c0"),a("498a"),a("ac1f"),a("5319"),a("a434"),a("4de4"),a("d3b7"),a("a15b"),a("e9c4"),a("1276"),a("c740"),a("caad"),a("2532"),a("99af"),a("9769")),l=a("5ba0"),d={components:{DynamicForm:l["a"]},data:function(){return{isLoading:!1,LeadData:null,LeadOwner:null,GroupBy:[],Channel:null,IndustryType:null,Status:null,options:{format:"MM-dd-yyyy",useCurrent:!1,showClear:!0,showClose:!0,allowInputToggle:!0,maxDate:new Date},DependentOption:[{format:"MM-dd-yyyy",useCurrent:!1,showClear:!0,showClose:!0,allowInputToggle:!0,minDate:new Date}],vendorPurchaseOrderList:[],tempVendorPurchaseOrderList:[],selectedPurchaseOrder:[],purchaseOrderDetails:null,isShowAddNewProduct:!0,selected:!1,isTaxNameFilled:!1,selectoptions:[],submited:!1,inward_id:this.$route.params.id,dateformat:null,userId:null,companyId:null}},created:function(){this.userId=this.GetUserInfo.ID,this.companyId=this.GetUserInfo.CompanyId,this.dateformat=this.GetUserInfo.DateFormat,Number.prototype.toFixed2=function(){var t=Math.floor(100*parseFloat(this,10))/100;return parseFloat(t,10).toFixed(2)},this.FetchData()},directives:{"click-outside":{bind:function(t,e,a){if("function"!==typeof e.value){var r=a.context.name,s="[Vue-click-outside:] provided expression '".concat(e.expression,"' is not a function, but has to be");r&&(s+="Found in component '".concat(r,"'")),console.warn(s)}var o=e.modifiers.bubble,i=function(a){(o||!t.contains(a.target)&&t!==a.target)&&e.value(a)};t.__vueClickOutside__=i,document.addEventListener("click",i)},unbind:function(t,e){document.removeEventListener("click",t.__vueClickOutside__),t.__vueClickOutside__=null}}},methods:{onCancel:function(){this.$router.push({name:"InwardList"})},AssignToggleValues:function(t,e,a,r,s){var o=this,i="";if(t.target.checked){var n=$.grep(a,(function(t,e){return"yes"==String(t.value).toLowerCase()||"1"==String(t.value).toLowerCase()||"true"==String(t.value).toLowerCase()||"public"==String(t.value).toLowerCase()||"asset"==String(t.value).toLowerCase()}));null!=n&&n.length>0&&(i="object"===Object(c["a"])(n[0])&&null!==n[0]?n[0].value:n[0])}else{n=$.grep(a,(function(t,e){return"no"==String(t.value).toLowerCase()||"0"==String(t.value).toLowerCase()||"false"==String(t.value).toLowerCase()||"private"==String(t.value).toLowerCase()||"inventory"==String(t.value).toLowerCase()}));null!=n&&n.length>0&&(i="object"===Object(c["a"])(n[0])&&null!==n[0]?n[0].value:n[0])}"0"==i?i=0:"1"==i&&(i=1),e.value=i,o.showDependentItem(e,i,r,s)},clearRateIfNameEmpty:function(t,e,a){""==$.trim(t.TAX_NAME)?t.TAX_RATE=0:this.isTaxNameFilled=!1},outside:function(t){},onlyDecimal:function(t,e,a){"TAX"==e?""!=t.TAX_NAME?(t.TAX_RATE=t.TAX_RATE.replace(/[^0-9.]/g,"").replace(/(\..*)\./g,"$1"),a&&parseFloat(""!=t.TAX_RATE?t.TAX_RATE:0)>100&&(t.TAX_RATE="100")):(this.isTaxNameFilled=!0,t.TAX_RATE="0"):"DISCOUNT"==e&&(t.ProductDiscountValue=t.ProductDiscountValue.replace(/[^0-9.]/g,"").replace(/(\..*)\./g,"$1"),a&&parseFloat(""!=t.ProductDiscountValue?t.ProductDiscountValue:0)>100&&(t.ProductDiscountValue="100"))},DeleteProductSummaryItem:function(t,e){var a=this;0!=e?a.confirmR(a.$t("ConfirmDeleteRecord"),!0,a.$t("Delete")+"  "+a.$t("ProductSummary"),(function(){a.purchaseOrderDetails.SummaryData.splice(e,1)})):a.ShowAlert(a.$t("DeleteAtleastOneProductMessage"),"warning",!0,a.$t("Alert"))},CheckRequestQuantity:function(t){t.ProductQuantity<parseInt(t.InwardQuantity)&&vm.ShowAlert(vm.$t("Received Quantity can not be greater than Requested Quantity."),"warning",!0,vm.$t("Alert"))},CalculateAmount:function(t){t.InwardQuantity>=0&&t.InwardUnitPrice>=0&&(t.ProductAmount=parseFloat(t.InwardQuantity,10)*parseFloat(t.InwardUnitPrice,10))},onKeyDown:function(){checkForAnyChange=!0},isNumber:function(t){var e=t.which?t.which:t.keyCode;if(!(e>31&&(e<48||e>57)&&46!==e))return!0;t.preventDefault()},onSearch:function(t,e){this.searchSelectData(t,this,e)},searchSelectData:function(t,e,a){this.ShowSearchData(t,e,a,a.value.value)},ShowSearchData:function(t,e,a,r){"undefined"==typeof r&&(r=0);var s="id=&moduleName="+e.$route.params.moduleName+"&type="+a.field_code;"fill"==a.dependent_type&&(s+="&refId="+r),u["a"].getDDLData(s+"&search="+escape(t)).then((function(t){var e=t.data;if(null!=e)return a.select_options=e.DATA,a.select_options}))},FillDropdown:function(){var t=Object(n["a"])(Object(i["a"])().mark((function t(e,a){var r,s,o,n;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=this,r.Loading=!0,s="",o=e,n="id=&moduleName="+this.$route.params.moduleName+"&type="+o+"&refId="+a,t.next=7,u["a"].getDDLData(n+"&search="+escape(s)).then((function(t){r.Loading=!1;var a=[];if(t.data&&(a=t.data.DATA,null!=a[0].name&&""!=a[0].name||(a="")),"VENDOR_PURCHASE_ORDER"==e){r.purchaseOrderDetails=null,r.selectedPurchaseOrder=[],r.vendorPurchaseOrderList=a,r.tempVendorPurchaseOrderList=a;var s=[{ProductName:"",ProductList:[],ProductDescription:"",ProductQuantity:0,ProductInStock:0,ProductRate:0,ProductTax:0,ProductAmount:0,ProductDiscount:0,ProductDiscountType:"percent",ProductDiscountValue:0,ProductItemTotal:0,PriceBookId:0,toggleDiscount:!1,toggleTax:!1,InwardUnitPrice:0,receivedItem:0,InwardQuantity:0,purchaseOrderId:0,purchaseOrderNumber:"",TaxData:[],DiscountData:[]}];r.purchaseOrderDetails={SubTotal:0,ShippingCharges:0,Adjustments:0,RoundOff:0,SummaryTotal:0,SummaryData:s}}}));case 7:case"end":return t.stop()}}),t,this)})));function e(e,a){return t.apply(this,arguments)}return e}(),setSelectedValue:function(t,e){var a=this,r=e;try{Array.isArray(e)?r=e[0]:(r=e.value,"gin_vendor_id"==t.name&&r>0&&a.FillDropdown("VENDOR_PURCHASE_ORDER",e.value))}catch(s){}},SubmitData:function(t,e){var a="",r=this;this.$refs.form.validate().then((function(t){if(t){r.submited=!0,r.isLoading=!0;var e=r.LeadData,s=[],o=[];$.each(e,(function(t,e){var a={field_name:e.name,required:e.is_required,length:e.length,type:e.validation_type},i="gin_id"==e.name?r.inward_id:e.value;if("date"==e.dt_code&&(i=e.value),"gin_inward_type"==e.name)try{0==parseInt(e.value)?e.value="Inventory":1==parseInt(e.value)?e.value="Asset":""==$.trim(e.value)&&(e.value="Inventory")}catch(l){}if("checkbox"==e.dt_code){var n=e.select_value.filter((function(t){return null!=t&&""!=t}));i=n.join(",")}if("select"==e.dt_code)try{i="object"===Object(c["a"])(i)&&null!==i?i.value:i}catch(l){}"created_by"==e.name&&(i=r.userId),"modified_by"==e.name&&(i=r.userId),"company_id"==e.name&&(i=r.companyId);var u={field_name:e.name,field_value:i,custom_field_id:e.custom_field_id};s.push(u),o.push(a)}));var i=[],n=[];$.each(r.purchaseOrderDetails.SummaryData,(function(t,e){var a=null;if(a=Array.isArray(e.ProductName)?"object"===Object(c["a"])(e.ProductName[0])&&null!==e.ProductName[0]?e.ProductName[0].value:e.ProductName[0]:e.ProductName.value,a>0){var r={ProductName:a,ProductDescription:e.ProductDescription,ProductQuantity:e.ProductQuantity,ProductRate:e.ProductRate,ProductTax:e.ProductTax,ProductAmount:e.ProductAmount,ProductDiscount:e.ProductDiscount,ProductDiscountType:e.ProductDiscountType,ProductDiscountValue:e.ProductDiscountValue,ProductItemTotal:e.ProductItemTotal,InwardUnitPrice:e.InwardUnitPrice,InwardQuantity:e.InwardQuantity,purchaseOrderId:e.purchaseOrderId,receivedItem:e.receivedItem,purchaseOrderNumber:e.purchaseOrderNumber,IsTaxApplicable:null!=e.TaxData&&e.TaxData.length>0?1:0,TaxData:e.TaxData};n.push(r)}})),0==n.length&&(a="no");i={SubTotal:r.purchaseOrderDetails.SubTotal,ShippingCharges:r.purchaseOrderDetails.ShippingCharges,Adjustments:r.purchaseOrderDetails.Adjustments,SummaryTotal:r.purchaseOrderDetails.SummaryTotal,SummaryData:n};var l={data:s,validation:o,ProductDetails:i};if(0==a.length){var d=JSON.stringify(l);u["a"].SaveGoodInward(d).then((function(t){r.isLoading=!1,"1"==t.data[0].Code?(r.inward_id>0?r.ShowAlert(r.$t("UpdatedSuccess",[r.$t("GinInward")]),"success",!0,r.$t("Alert")):r.ShowAlert(r.$t("AddedSuccess",[r.$t("GinInward")]),"success",!0,r.$t("Alert")),r.$router.push({name:"InwardList"})):r.ShowAlert(r.$t("AddedError",[r.$t("GinInward")]),"failure",!0,r.$t("Alert")),r.submited=!1}))}else r.ShowAlert(r.$t("PleaseAddSomeLineItems"),"warning",!0,r.$t("Alert")),r.submited=!1}}))},FetchData:function(){var t=[{ProductName:"",ProductList:[],ProductDescription:"",ProductQuantity:0,ProductInStock:0,ProductRate:0,ProductTax:0,ProductAmount:0,ProductDiscount:0,ProductDiscountType:"percent",ProductDiscountValue:0,ProductItemTotal:0,PriceBookId:0,toggleDiscount:!1,toggleTax:!1,InwardUnitPrice:0,receivedItem:0,InwardQuantity:0,purchaseOrderId:0,purchaseOrderNumber:"",TaxData:[],DiscountData:[]}];this.purchaseOrderDetails={SubTotal:0,ShippingCharges:0,Adjustments:0,RoundOff:0,SummaryTotal:0,SummaryData:t};var e=this;e.isLoading=!0;var a="id=".concat(e.$route.params.id,"&moduleName=CRM&subModuleCode=CRM_INWARD&langCode=en");u["a"].getFormLayout(a).then((function(t){if(e.isLoading=!1,e.LeadData=t.data.data,null!=e.LeadData&&e.LeadData.length>0){var a=e.LeadData[0].group_id;$.each(e.LeadData,$.proxy((function(t,r){"gin_inward_type"==r.name&&"0"==r.value&&(r.value="Inventory"),"checkbox"==r.dt_code&&(r.select_value=r.value.split(",")),"date"==r.dt_code&&(r.value=""==r.value?null:e.$options.filters.formatDate(r.value)),a=r.group_id;var s=$.grep(e.GroupBy,(function(t,e){return t.group_id==a}));if(0==s.length){var o=$.grep(e.LeadData,(function(t,e){return t.group_id==a}));if(e.inward_id>0)$.each(o,(function(t,a){if("select"==a.dt_code)try{a.value=a.value.trim()}catch(r){console.log("value is null while trimming")}"custom"==a.dropdown_type&&"Lookup"==a.picklist_options?(a.select_options=e.MakeNormalArray(a.select_options),a.select_value=a.select_options,null!=a.select_options&&a.select_options.length>0&&(a.value=a.select_options[0])):"decimal"==a.dt_code&&"YES"==a.form_field_visibility&&a.value>0?a.value=parseFloat(a.value,10).toFixed(2):"date"==a.dt_code&&(a.value=e.formatDate(a.value))}));else{var i=o.findIndex((function(t){return"gin_number"==t.name}));null!=i&&"undefined"!=typeof o[i]&&(o[i].value=e.$t("InvoiceNumberGenratesAutomatically",{0:e.$t("CRM_INWARD")}))}if(o.length>0){var n={group_id:a,group_name:o[0].group_name,group_display_name:o[0].group_display_name,Data:o};e.GroupBy.push(n)}}}),e))}if(e.inward_id>0){var r=[],s=t.data.productSummaryAmount,o=t.data.productSummary;$.each(o,$.proxy((function(t,a){var s=$.grep(e.selectedPurchaseOrder,(function(t,r){return t.value==e.MakeNormalArray(a.purchaseOrderId)[0]}));0==s.length&&a.purchaseOrderId&&(e.selectedPurchaseOrder.push(e.MakeNormalArray(a.purchaseOrderId)[0]),e.vendorPurchaseOrderList.push(e.MakeNormalArray(a.purchaseOrderId)[0]));var o={ProductName:e.MakeNormalArray(a.product_name)[0],ProductList:[],ProductDescription:a.item_product_desc,ProductQuantity:a.po_quantity,ProductInStock:0,ProductRate:a.po_price,ProductTax:0,ProductAmount:a.item_product_amount,ProductItemTotal:0,toggleDiscount:!1,toggleTax:!1,InwardUnitPrice:a.gin_unit_price,receivedItem:null==a.recieved_quantity?0:a.recieved_quantity,purchaseOrderId:a.purchaseOrderId?e.MakeNormalArray(a.purchaseOrderId)[0].value:a.purchaseOrderId,purchaseOrderNumber:a.order_number,InwardQuantity:a.InwardQuantity,TaxData:null==a.tax_data?[]:a.item_product_amount*e.MakeNormalArray(a.tax_data)[0].TAX_RATE/100,DiscountData:[]};r.push(o)}),e)),e.purchaseOrderDetails={SubTotal:s[0].summary_sub_total,ShippingCharges:s[0].summary_shipping_charges,Adjustments:s[0].summary_adjustments,SummaryTotal:s[0].summary_total,SummaryData:r}}setTimeout((function(){e.CheckBoxBootstrap()}),500),setTimeout((function(){e.RadioButtonBootstrap()}),500)}))},getProductDetailsForPurchaseOrder:function(){if(""!=this.selectedPurchaseOrder&&this.selectedPurchaseOrder.length>0){var t="",e=this.selectedPurchaseOrder,a=$.grep(this.tempVendorPurchaseOrderList,(function(t,a){return!e.includes(t)}));this.vendorPurchaseOrderList=a,$.each(this.selectedPurchaseOrder,(function(e,a){t+=""==t?a.value:","+a.value}));var r=this,s="sourceId=".concat(this.$route.params.id,"&moduleName=CRM&subModuleCode=CRM_PURCHASE_ORDERS&purchaseOrderIds=").concat(t);u["a"].getPurchaseOrderProductDetails(s).then((function(t){if(null!=t.data){var e=[],a=t.data.productSummary;$.each(a,$.proxy((function(t,a){var s={ProductName:r.MakeNormalArray(a.product_name)[0],ProductList:[],ProductDescription:a.item_product_desc,ProductQuantity:a.item_product_Quantity,ProductInStock:0,ProductRate:a.item_product_list_price,ProductTax:0,ProductAmount:0,ProductDiscount:a.item_product_discount,ProductDiscountType:a.item_product_discount_type,ProductDiscountValue:a.item_product_discount_value,ProductItemTotal:0,PriceBookId:a.item_price_book_id,toggleDiscount:!1,toggleTax:!1,InwardUnitPrice:0,receivedItem:a.received_quantity,purchaseOrderId:a.purchaseOrderId,purchaseOrderNumber:a.order_number,InwardQuantity:0,TaxData:null==a.tax_data?[]:a.item_product_amount*r.MakeNormalArray(a.tax_data)[0].TAX_RATE/100,DiscountData:[]};e.push(s),console.log(e)}),r)),r.purchaseOrderDetails={SubTotal:0,ShippingCharges:0,Adjustments:0,SummaryTotal:0,SummaryData:e}}}))}else{this.vendorPurchaseOrderList=this.tempVendorPurchaseOrderList;var o=[{ProductName:"",ProductList:[],ProductDescription:"",ProductQuantity:0,ProductInStock:0,ProductRate:0,ProductTax:0,ProductAmount:0,ProductDiscount:0,ProductDiscountType:"percent",ProductDiscountValue:0,ProductItemTotal:0,PriceBookId:0,toggleDiscount:!1,toggleTax:!1,InwardUnitPrice:0,receivedItem:0,InwardQuantity:0,purchaseOrderId:0,purchaseOrderNumber:"",TaxData:[],DiscountData:[]}];this.purchaseOrderDetails={SubTotal:0,ShippingCharges:0,Adjustments:0,RoundOff:0,SummaryTotal:0,SummaryData:o}}},onDeselectPurchaseOrder:function(t){if(this.vendorPurchaseOrderList.push(t),""==this.selectedPurchaseOrder&&0==this.selectedPurchaseOrder.length){this.vendorPurchaseOrderList=this.tempVendorPurchaseOrderList;var e=[{ProductName:"",ProductList:[],ProductDescription:"",ProductQuantity:0,ProductInStock:0,ProductRate:0,ProductTax:0,ProductAmount:0,ProductDiscount:0,ProductDiscountType:"percent",ProductDiscountValue:0,ProductItemTotal:0,PriceBookId:0,toggleDiscount:!1,toggleTax:!1,InwardUnitPrice:0,receivedItem:0,InwardQuantity:0,purchaseOrderId:0,purchaseOrderNumber:"",TaxData:[],DiscountData:[]}];this.purchaseOrderDetails={SubTotal:0,ShippingCharges:0,Adjustments:0,RoundOff:0,SummaryTotal:0,SummaryData:e}}},totalSumlineItem:function(t){var e=0;if(t.InwardUnitPrice>0&&t.InwardQuantity>0&&(e=parseFloat(t.InwardUnitPrice,10)),e=parseFloat(e,10)*t.InwardQuantity,null!=t.TaxData&&t.TaxData.length>0&&t.InwardUnitPrice>0&&t.InwardQuantity>0){var a=0;$.each(t.TaxData,$.proxy((function(t,r){var s=parseFloat(r.TAX_RATE,10);if("percent"==r.TAX_TYPE){if(s>0){var o=parseFloat(e,10)*parseFloat(s,10)/100;a+=parseFloat(o,10)}}else a+=parseFloat(s,10)}),this)),a>0&&(a=parseFloat(a,10),e=parseFloat(e,10)+parseFloat(a,10),t.ProductTax=a)}var r=0;return r=parseFloat(t.ProductAmount,10)+parseFloat(t.ProductTax,10),t.ProductItemTotal=parseFloat(r,10).toFixed2(),r},summaryTotal:function(t){var e=0,a=this.purchaseOrderDetails.SummaryData;if("undefined"!==typeof a){var r,s=Object(o["a"])(a);try{for(s.s();!(r=s.n()).done;){var i=r.value;i.InwardUnitPrice>0&&(e=parseFloat(e,10)+parseFloat(i.ProductItemTotal,10))}}catch(n){s.e(n)}finally{s.f()}e=parseFloat(e,10).toFixed2(),this.purchaseOrderDetails.SubTotal=e,this.purchaseOrderDetails.ShippingCharges>0&&(e=parseFloat(e,10)+parseFloat(this.purchaseOrderDetails.ShippingCharges,10)),this.purchaseOrderDetails.Adjustments>0&&(e=parseFloat(e,10)-parseFloat(this.purchaseOrderDetails.Adjustments,10)),e=parseFloat(e,10).toFixed2(),this.purchaseOrderDetails.SummaryTotal=e}return e},ShowTax:function(t){t.toggleTax=!t.toggleTax},AddMoreTax:function(t){var e={TAX_ID:0,TAX_FOR:"custom",TAX_TYPE:"percent",TAX_RATE:0,TAX_NAME:""};t.TaxData.push(e)},DeleteMoreTax:function(t,e){var a=this;a.confirmR(a.$t("ConfirmDeleteRecord"),!0,a.$t("Delete")+"  "+a.$t("Tax"),(function(){t.TaxData.splice(e,1),t.ProductTax="0.00"}))}}},p=d,m=(a("1240"),a("2877")),h=Object(m["a"])(p,r,s,!1,null,null,null);e["default"]=h.exports}}]);
//# sourceMappingURL=Manage Manageinward.js.map