(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["CRMSalesOrderListing"],{3511:function(e,t){var a=TypeError,i=9007199254740991;e.exports=function(e){if(e>i)throw a("Maximum allowed index exceeded");return e}},"99af":function(e,t,a){"use strict";var i=a("23e7"),r=a("d039"),s=a("e8b5"),o=a("861d"),n=a("7b0b"),l=a("07fa"),d=a("3511"),c=a("8418"),u=a("65f0"),h=a("1dde"),S=a("b622"),f=a("2d00"),g=S("isConcatSpreadable"),p=f>=51||!r((function(){var e=[];return e[g]=!1,e.concat()[0]!==e})),C=h("concat"),b=function(e){if(!o(e))return!1;var t=e[g];return void 0!==t?!!t:s(e)},m=!p||!C;i({target:"Array",proto:!0,arity:1,forced:m},{concat:function(e){var t,a,i,r,s,o=n(this),h=u(o,0),S=0;for(t=-1,i=arguments.length;t<i;t++)if(s=-1===t?o:arguments[t],b(s))for(r=l(s),d(S+r),a=0;a<r;a++,S++)a in s&&c(h,S,s[a]);else d(S+1),c(h,S++,s);return h.length=S,h}})},ed21:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("loader",{attrs:{"is-visible":e.isLoading}}),a("TgList",{attrs:{IsShowAction:"true",ModuleName:"CRM",SubModuleCode:"CRM_SALES_ORDERS",IdentityColumn:"Order_id",HeaderText:e.$t("CRM_SALES_ORDERS"),ListData:e.SalesOrderData,HeaderData:e.Headers,HeaderButtons:e.listheaderbuttons,TotalRecords:e.TotalRecords,SearchFields:e.leftSearchFields,RenderRowActionMethod:e.renderActions,ListDataCallBackFunction:e.FetchData,LegendArray:e.LegendArray,IsFilterApplied:!!e.searchCondition,SortExp:e.SortExp,SortBy:e.SortBy,CurrentPageNumber:e.PageNumber},on:{LeftsearchButtonClick:e.leftCommonSearch,PagerButtonClick:e.pagerMethod,HeaderButtonClick:e.commonHeaderButtonClick,ActionButtonClick:e.actionButtonClick,SortdataButtonClick:e.sortdata},scopedSlots:e._u([{key:"slotdata",fn:function(t){var i=t.data;return["status_id"==i.column.COLUMN_NAME?[e.isCRMShowStausDrop(i.row.status_id,"CRM_SALES_ORDERS")?a("listing-status",{ref:"updatestatus",attrs:{isfor:"CRM_SALES_ORDERS",dataid:i.row.Order_id,"data-controller":"Crm",statuslist:e.StatusListForListing,item:i,"data-action":"index",dataselected:i.row.status_id,callbackfunction:e.FetchData,isselectedvaluestring:!0}}):e._e(),e.isCRMShowStausDrop(i.row.status_id,"CRM_VENDORS")?e._e():a("a",{staticClass:"inactive-disabled"},[a("span",{class:e.getStatusClass(i.row.status_id,"status_id")},[e._v(" "+e._s(i.row[i.column.COLUMN_NAME])+" ")])])]:e._e()]}}])}),e.showAddEventModal?a("modalfollowupslist",{attrs:{srcId:e.souceID,modulename:"CRM",submodulecode:"CRM_SALES_ORDERS",userid:e.userid,baseurl:e.BaseUrlForManageView},on:{close:e.closeEventViewModal}}):e._e(),e.showFilter?a("searchfilter",{attrs:{submodulecode:"CRM_SALES_ORDERS",modulename:"CRM",callbackfunction:e.FetchData},on:{close:function(t){e.showFilter=!1},FilterData:e.FilterData}},[a("h5",{attrs:{slot:"header"},slot:"header"},[e._v(e._s(e.$t("Search")))])]):e._e(),e.ShowManageView?a("viewlayout",{directives:[{name:"show",rawName:"v-show",value:e.ShowManageView,expression:"ShowManageView"}],attrs:{submodulecode:"CRM_SALES_ORDERS",modulename:"CRM",callbackfunction:e.FetchData,commonapiurl:e.commonAPIUrl,usertype:e.usertype},on:{close:function(t){e.ShowManageView=!1}}},[a("h5",{attrs:{slot:"header"},slot:"header"},[e._v(e._s(e.$t("Search")))])]):e._e()],1)},r=[],s=a("53ca"),o=a("5530"),n=(a("d3b7"),a("159b"),a("c740"),a("e9c4"),[{title:"Page Tour",iconClass:"fa fa-road",callbackfunction:"setTourGuideSteps",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!1},{title:"Reset",iconClass:"fa-filter text-danger",callbackfunction:"removeFilter",href:"",additionalClass:"",isdisabled:!1,isvisible:!1,checkPrivilege:!1},{title:"Filters",iconClass:"fa-filter",callbackfunction:"openFilterPopUp",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!1},{title:"Manage View",iconClass:"fa-list-alt",callbackfunction:"ManageView",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!1},{title:"Add Sales Order",iconClass:"fa-plus",href:"/CRM/ManageSalesOrder/0/CRM/CRM_SALES_ORDERS/0",additionalClass:"",isdisabled:!1,isvisible:!0,checkPrivilege:!0,id:"addSalesOrder_a"},{id:"DeleteMultiple",title:"Delete",iconClass:"fa-trash-o",callbackfunction:"commonDeleteData",isdisabled:!0,isvisible:!0}]),l=[{title:"View",href:"/CRM/ViewSalesOrderDetails/{Order_id}/CRM/CRM_SALES_ORDERS",icon:"fa fa-eye action-icon",additionalSpan:""},{title:"Edit",href:"/CRM/ManageSalesOrder/{Order_id}/CRM/CRM_SALES_ORDERS/0",icon:"fa fa-pencil text-success action-icon",additionalSpan:""},{title:"FollowUps",callbackfunction:"openAddNewEvent",href:"javascript:void(0)",icon:"fa fa-flag text-muted action-icon",additionalSpan:""},{title:"ConvertSalesOrder",callbackfunction:"ConvertToOther",href:"javascript:void(0)",icon:"fa fa-retweet text-warning action-icon",additionalSpan:""}],d=[{fieldName:"SALES ORDERS | REF NUMBER",fieldType:"text",fieldIcon:"fa-file",fieldSearchConditionName:["order_number","ref_number"],isSearch:!1,value:"",listOptions:[]},{fieldName:"SALES ORDERS Title",fieldType:"text",fieldIcon:"fa-file-text-o",fieldSearchConditionName:["order_title"],isSearch:!1,value:"",listOptions:[]},{fieldName:"SALES ORDERS DATE",fieldType:"date-range",fieldIcon:"fa-calendar",fieldSearchConditionName:["orders.order_date|orders.order_date"],isSearch:!1,datePickerConfig:{useCurrent:!1,showClear:!0,showClose:!0,allowInputToggle:!0,minDate:!1,maxDate:!1,widgetPositioning:{horizontal:"right",vertical:"bottom"}},secondDatePickerConfig:{useCurrent:!1,showClear:!0,showClose:!0,allowInputToggle:!0,minDate:!1,maxDate:!1,widgetPositioning:{horizontal:"right",vertical:"bottom"}},value:"",secondValue:"",listOptions:[]}],c={buttons:n,leftSearchFields:d,listActions:l},u=a("9769"),h=a("cdd5"),S=a("2aeb"),f=a("fc0b"),g=a("e29d"),p={components:{TgList:S["a"],viewlayout:h["a"],searchfilter:f["a"],modalfollowupslist:g["a"]},data:function(){return{LegendArray:[],isLoading:!1,SalesOrderData:null,txtsalesordernumber:"",txtsalesordertitle:"",options:null,listheaderbuttons:c.buttons,leftSearchFields:c.leftSearchFields,DependentOption:[{useCurrent:!1,showClear:!0,showClose:!0,allowInputToggle:!0,minDate:new Date(Date.now())}],headers:null,Headers:null,appliedFilter:[],TotalRecords:0,PageNumber:1,PageSize:10,souceID:0,showAddEventModal:!1,SortBy:"",SortExp:"",PageSizeOption:null,CurrentPage:1,ShowManageView:!1,TotalPages:0,GroupStart:1,GroupEnd:3,Status:"",SalesOwner:"",OrderSubject:"",StartDateForSearch:"",ExpiryDateForSearch:"",DealName:"",LeadOwner:"",ContactName:"",AccountName:"",LeadName:"",dateFrom:"",dateTo:"",CreatedBy:"",BookName:"",SaleOrderDateFrom:"",SaleOrderDateTo:"",noRecord:!1,showFilter:!1,searchCondition:"",IsAnySearch:!1,listActions:c.listActions,conditionForInstantSearch:"",StatusListForListing:[],userid:null,usertype:null,privilegeParams:null}},created:function(){this.userid=this.GetUserInfo.ID,this.usertype=this.GetUserInfo.UserType,this.privilegeParams="controller=CRM&action=";var e=this;e.FetchData(),e.GetPageSizeOption(),e.getStatuslistForListing("CRM","en"),e.LegendArray=[{class:"legend-pending colorboxsquare",text:e.$t("ListingLegend",["Sales Order"])}]},methods:{renderActions:function(e){var t=this,a=[];return t.listActions.forEach((function(t){var i=Object(o["a"])({},t);switch(t.title){case"View":i.isVisible="Draft"!=e.status_id;break;case"Edit":i.isVisible=e.ref_source_id<=0&&"Closed"!=e.status_id;break;case"FollowUps":i.isVisible="Closed"!=e.status_id;break;case"ConvertSalesOrder":i.isVisible="Draft"!=e.status_id&&e.ref_source_id<=0&&"Closed"!=e.status_id;break}a.push(i)})),a},commonHeaderButtonClick:function(e){switch(e.callbackfunction){case"ManageView":this.ManageView();break;case"openFilterPopUp":this.openFilterPopUp();break;case"commonDeleteData":this.commonDeleteData();break;case"removeFilter":var t=this;this.searchCondition="";var a=t.listheaderbuttons.findIndex((function(e){return"removeFilter"===e.callbackfunction}));t.listheaderbuttons[a].isvisible=!1;var i=t.listheaderbuttons.findIndex((function(e){return"openFilterPopUp"===e.callbackfunction}));t.listheaderbuttons[i].iconClass="fa fa-filter";try{t.appliedFilter=[]}catch(r){}t.FetchData();break;case"setTourGuideSteps":this.setTourGuideSteps(0);break}},ManageView:function(){this.ShowManageView=!0,setTimeout((function(){$("#modalManageView").modal("show"),setTimeout((function(){SetBootstraptoolTip()}),200)}),1e3)},pagerMethod:function(e){this.PageSize=e.PageSize,this.PageNumber=e.PageNumber,this.FetchData()},currentPageMethod:function(e){this.PageSize=e.PageSize,this.PageNumber=e.PageNumber,this.FetchData()},leftCommonSearch:function(e){this.PageNumber=e.PageNumber,"undefined"!=typeof e.searchCondition?this.searchCondition=e.searchCondition:this.searchCondition="",this.FetchData()},DependentDateObject:function(e){var t=new Date;t="undefined"!==typeof e&&""!=e?new Date(Date.parse(e)):new Date(Date.now()),this.DependentOption[0]={useCurrent:!1,showClear:!0,showClose:!0,allowInputToggle:!0,minDate:t}},SetCurrentPage:function(e){this.PageNumber=e,e>this.GroupEnd||1==e?(this.GroupStart=e,this.GroupEnd=e+2):e<this.GroupStart&&e>1&&(this.GroupEnd=this.GroupStart-1,this.GroupStart=e-2),this.FetchData()},sortdata:function(e){var t="sort tb_headerSortDown";this.SortBy=e,e===this.SortBy&&(""==this.SortExp?(this.SortExp="ASC",t="sort tb_headerSortDown"):"ASC"==this.SortExp?(this.SortExp="DESC",t="sort tb_headerSortUp"):(this.SortExp="ASC",t="sort tb_headerSortDown")),this.FetchData(),$("#"+e+"  span:first-child").attr("class",t)},SetPageSize:function(e){this.PageSize=e.target.value,this.PageNumber=1,this.GroupStart=this.PageNumber,this.GroupEnd=this.PageNumber+2,this.FetchData()},cancelOrRefresh:function(){this.SetPageSize=10,this.txtsalesordernumber="",this.txtsalesordertitle="",this.searchCondition="",this.IsAnySearch=!1,this.StartDateForSearch="",this.ExpiryDateForSearch="",this.SalesOwner="",this.DealName="",this.OrderSubject="",this.ProductName="",this.FetchData()},getStatuslistForListing:function(e,t){var a=this,i="langCode="+t+"&statusType="+e+"&hasglobal=true";u["a"].statusdropdown(i).then((function(e){if("Success"==e.data.status){var t=e.data.result;a.StatusListForListing=t.data}}))},getRequestParams:function(e,t,a,i,r,s){var o={};return e&&(o["pageNum"]=e),s&&(o["searchcondition"]=s),r&&(o["isPaged"]=r),a&&(o["sortBy"]=a),i&&(o["sortExp"]=i),t&&(o["pageSize"]=t),o},FilterData:function(e,t,a,i,r,o){this.pageNum=e,this.pageSize=t,this.sortBy=a,this.sortExp=i,this.searchCondition=r,null!=Object(s["a"])(o)&&this.appliedFilter.push(o),this.FetchData()},FetchData:function(){var e=this.getRequestParams(this.pageNumber,this.pageSize,this.sortBy,this.sortExp,this.isPaged,this.searchcondition),t=this;t.isLoading=!0,e.pageSize=t.PageSize,e.pageNumber=t.PageNumber,e.searchCondition=t.searchCondition,t.PageNumber?e.pageNum=t.PageNumber:t.PageNumber=e.pageNum=1,"undefined"!=typeof t.isPaged?e.isPaged=t.isPaged:t.isPaged=e.isPaged=1,e.isPaged=t.isPaged,e.sortBy=t.SortBy,e.sortExp=t.SortExp;var a="";if(this.isBlank(this.searchCondition)||(a+=this.searchCondition),this.isBlank(this.conditionForInstantSearch)||(a+=this.isBlank(this.searchCondition)?this.conditionForInstantSearch:" AND "+this.conditionForInstantSearch),""!=a){if(e.searchCondition=a,t.appliedFilter.length>0){var i=t.listheaderbuttons.findIndex((function(e){return"removeFilter"===e.callbackfunction}));t.listheaderbuttons[i].isvisible=!0;var r=t.listheaderbuttons.findIndex((function(e){return"openFilterPopUp"===e.callbackfunction}));t.listheaderbuttons[r].iconClass="fa fa-filter text-success"}}else if(0==t.appliedFilter.length){var s=t.listheaderbuttons.findIndex((function(e){return"removeFilter"===e.callbackfunction}));t.listheaderbuttons[s].isvisible=!1;var o=t.listheaderbuttons.findIndex((function(e){return"openFilterPopUp"===e.callbackfunction}));t.listheaderbuttons[o].iconClass="fa fa-filter"}u["a"].SalesOrderListing(e).then((function(e){""!=e.data&&null!=e.data?(t.Headers=e.data.schema,t.Headers.forEach((function(e){e.settings=null,"order_number"==e.COLUMN_NAME&&(e.settings={clickEvent:t.clickEventOfColumn,formatter:t.columnDataFormatter}),"status_id"==e.COLUMN_NAME&&(e.settings={isInSlot:!0})})),e.data.data.length<t.PageSize&&(t.PageSize=e.data.data.length<10?10:e.data.data.length),e.data.data.length>0?(t.SalesOrderData=[],t.SalesOrderData=e.data.data,t.SalesOrderData.forEach((function(e){e.isCheckBoxDisabled=!1,e.additionalClass="","Closed"==e.status_id&&(e.isCheckBoxDisabled=!0,e.additionalClass="warning-bar"),e.rowDetailsUrl="",""==e.rowDetailsUrl&&(e.rowDetailsUrl="/CRM/ViewSalesOrderDetails/"+e.Order_id+"/CRM/CRM_SALES_ORDERS")})),t.TotalRecords=e.data.data[0].total_records,t.TotalPages=Math.ceil(t.TotalRecords/t.PageSize),t.CurrentPage=t.PageNumber,t.noRecord=!1):(t.noRecord=!0,t.SalesOrderData=[],t.TotalRecords=0)):(t.noRecord=!0,t.noRecord=!0,t.SalesOrderData=[],t.Headers=[],t.TotalRecords=0),setTimeout((function(){t.ResponsiveDataTable("tablelistingdata")}),500),t.isLoading=!1}))},clickEventOfColumn:function(e,t){"order_number"==t.COLUMN_NAME&&this.$router.push({path:"/CRM/ViewSalesOrderDetails/"+e.Order_id+"/CRM/CRM_SALES_ORDERS"})},CheckAllDiabled:function(){$(".chkitems").attr("disabled",!1),$(".chkItems").not("[id^='chkAll']").length==$(".chkItems:disabled").not("[id^='chkAll']").length&&($(".chkitems").attr("disabled",!0),$(".chkitems").attr("checked",!1)),$(".chkItems:checked").not("[id^='chkAll']").length<=0&&$("#DeleteMultiple").addClass("disabled")},GetPageSizeOption:function(){for(var e=[],t=10,a=t;a<t+95;a+=5)e.push(a);this.PageSizeOption=e},commonDeleteData:function(e){var t=this;u["a"].CheckPrivilege(t.privilegeParams+"DeleteSalesOrder").then((function(e){if(e.data){var a="";$(".chkItems:checkbox:checked").not("[id^='chkAll']").each((function(){a.length>0&&(a+=","),a+=$(this).val()})),a.length>0?t.confirmR(t.$t("ConfirmDelete"),!0,t.$t("Delete")+"  "+t.$t("Sales_Order"),(function(){var e={ids:a,moduleName:"CRM",subModuleCode:"CRM_SALES_ORDERS"},i=JSON.stringify(e);u["a"].CommonDeleteData(i).then((function(e){200==e.status?($(".chkItems:checkbox:checked").prop("checked",!1).removeAttr("checked"),t.ShowAlert(t.$t("DeletedSuccess",[t.$t("Sales_Order")]),"success",!0,t.$t("Alert")),t.PageNumber=parseInt(t.PageNumber)-1,t.PageNumber<=0&&(t.PageNumber=1),t.FetchData()):t.ShowAlert(t.$t("DeletedError",[t.$t("Sales_Order")]),"failure",!0,t.$t("Alert"))}))})):alert(t.$t("Selectanyrecordtodelete"))}else t.ShowAlert("You are not authorized","failure",!0,"Alert")}))},ConvertToOther:function(e){var t=this;t.confirmR("Are you sure, You want to Convert To Sales Order?",!0,"",(function(){var a={SubModuleCode:"CRM_SALES_ORDERS",OrderId:e.Order_id,ToSubModuleCode:"CRM_INVOICE"},i=JSON.stringify(a);u["a"].ConvertOrder(i).then((function(e){"1"==e.data[0].Code?(t.FetchData(),t.ShowAlert(t.$t("convert Sales Order Successfully",[t.$t("Sales_Order")]),"success",!0,t.$t("Alert"))):t.ShowAlert(t.$t("AddedError",[t.$t("Sales_Order")]),"failure",!0,t.$t("Alert"))}),(function(e){}))}))},openFilterPopUp:function(e){this.cancelOrRefresh(),this.showFilter=!0},openAddNewEvent:function(e,t){var a=this;a.souceID=t.Order_id,a.selectedItem=e,a.showAddEventModal=!a.showAddEventModal},closeEventViewModal:function(){this.showAddEventModal=!1},actionButtonClick:function(e,t,a,i){var r=this;switch(e){case"checkPrivilegeView":break;case"checkPrivilegeDetails":break;case"openNoteListPopUp":r.openNoteListPopUp(t,a);break;case"openAddNewEvent":r.openAddNewEvent(t.Order_id,t);break;case"ConvertToOther":r.ConvertToOther(t);break}}},updated:function(){this.BindActionButtonEvent()}},C=p,b=a("2877"),m=Object(b["a"])(C,i,r,!1,null,null,null);t["default"]=m.exports}}]);
//# sourceMappingURL=CRMSalesOrderListing.js.map