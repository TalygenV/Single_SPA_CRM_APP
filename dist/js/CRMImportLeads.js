(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["CRMImportLeads"],{"04d1":function(t,e,a){var l=a("342f"),i=l.match(/firefox\/(\d+)/i);t.exports=!!i&&+i[1]},"04ed":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loader",{attrs:{"is-visible":t.isLoading}}),a("section",{staticClass:"main-content",attrs:{id:"main-content"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 padding-t_8"},[a("div",{staticClass:"theme-primary partition-full"},[a("span",{staticClass:"p-name text-white"},[t._v(t._s(t.$t("ImportLeads")))]),a("span",{staticClass:"p-actions float-right"},[a("a",{staticClass:"p-action-btn text-white float-right",attrs:{href:"javascript:;",id:"btnbacktolist",title:t.$t("BacktoList")},on:{click:t.BackToList}},[a("em",{staticClass:"fa fa-angle-double-left pr-2"}),a("br"),t._v(t._s(t.$t("BacktoList")))])])])])]),a("div",{staticClass:"border p-3",attrs:{id:"divMainLeadData"}},[a("div",{attrs:{id:"CrmImportMain"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"form-group"},[a("label",[t._v(t._s(t.$t("Download"))+" "+t._s(t.$t("SampleFile"))+":")]),a("div",{staticClass:"d-flex align-items-center"},[a("p",[a("a",{staticClass:"text-dark",attrs:{href:"/Content/files/LeadImportSampleFile.xlsx",checkprivilege:"no",download:""}},[a("img",{staticClass:"mr-2",attrs:{src:"/Content/images/excel-icon.png",alt:""}}),t._v(t._s(t.$t("Lead"))+" "),a("em",{staticClass:"fa fa-download ml-2 text-dark"})])])])])]),a("div",{staticClass:"col-xl-4 col-lg-4 col-md-6"},[a("div",{staticClass:"form-group"},[a("label",[t._v(t._s(t.$t("UploadFile"))+":"),a("span",{staticClass:"text-danger"},[t._v("*")])]),a("div",{staticClass:"custom-file"},[a("input",{staticClass:"downloadexcel",attrs:{type:"file",id:"flUserFile",size:"19",name:"flUserFile",tabindex:"1"},on:{change:function(e){return t.setFile(e)}}})])])]),a("div",{staticClass:"col-12 mt-3"},[a("div",{staticClass:"row flex-row-reverse"},[a("div",{staticClass:"col-lg-6 text-right"},[a("a",{staticClass:"btn btn-info my-2 mr-2",attrs:{href:"javascript:void(0);",id:"uploadfile",title:t.$t("ImportFromExcelFile")},on:{click:t.UploadLeadFile}},[a("em",{staticClass:"fa fa-file-excel-o mr-2",attrs:{"aria-hidden":"true"}}),t._v(t._s(t.$t("ImportFromExcelFile")))]),a("a",{staticClass:"btn btn-danger mr-2",attrs:{href:"/CRM/ImportLeads",id:"",title:t.$t("Reset")}},[a("em",{staticClass:"fa fa-refresh mr-2 "}),t._v(t._s(t.$t("Reset")))]),a("RouterLink",{staticClass:"btn btn-secondary my-2",attrs:{to:"/CRM/Index",title:t.$t("BacktoList")}},[a("em",{staticClass:"fa fa-angle-double-left pr-2"}),t._v(" "+t._s(t.$t("BacktoList")))])],1),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"py-2"},[a("span",{staticClass:"text-danger"},[a("small",{staticClass:"text-danger"},[t._v(t._s(t.$t("MandatoryString")))])])])])])])])])])]),a("div",{staticClass:"col-lg-12 p-0 float-left"},[a("div",{staticClass:"listing mt-2"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-bordered dt-responsive nowrap m-0",staticStyle:{width:"100%"},attrs:{id:"tblbulklead","aria-describedby":"importlead"}},[t._m(0),a("tbody",[a("tr",[a("td",{staticClass:"text-center text-danger norecord no-record",attrs:{colspan:"2"}},[t._v(t._s(t.$t("NoRecordfound")))])]),a("tr",{staticClass:"d-none",attrs:{id:"trdata",crtrwid:"1001"}},[a("td",[a("select",{staticClass:"form-control d-none",attrs:{name:"TableColumns"}},[a("option",{attrs:{value:""}},[t._v(t._s(t.$t("Select"))+" "+t._s(t.$t("Column")))])]),a("select",{staticClass:"form-control",attrs:{id:"ddlTableColumn",name:"TableColumn"}})]),a("td",[a("select",{staticClass:"form-control",attrs:{name:"ExcelColumns"}},[a("option",{attrs:{value:""}},[t._v(t._s(t.$t("Select"))+" "+t._s(t.$t("Column")))])]),a("select",{staticClass:"form-control",attrs:{id:"ddlExcelColumn",name:"ExcelColumn"}})])])])])]),a("div",{staticClass:"col-lg-12 text-right mt-3 p-0"},[a("input",{attrs:{type:"hidden",id:"hdnBatchId",value:"Batch_id"}}),t.showSaveButton?a("a",{staticClass:"btn btn-success formbtn widthhalf",attrs:{href:"javascript:void(0);",id:"savebtn",title:t.$t("Save")},on:{click:t.SaveLeadFile}},[a("em",{staticClass:"fa fa-save pr-2"}),a("span",[t._v(t._s(t.$t("Save")))])]):t._e()])])])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"thead-bg"},[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("Table Column")]),a("th",{attrs:{scope:"col"}},[t._v("Excel Column")])])])}],n=a("b85c"),r=(a("b0c0"),a("99af"),a("4e82"),a("7db0"),a("d3b7"),a("ac1f"),a("1276"),a("5319"),a("498a"),a("e9c4"),a("4d63"),a("c607"),a("2c3e"),a("25f0"),a("9769")),s={data:function(){return{isLoading:!1,file:null,filepath:null,excelFileName:null,allrequiredcol:"",requiredcol:"",showSaveButton:!1}},methods:{BackToList:function(){this.$router.push({name:"CRMLead"})},setFile:function(t){this.file=t.target.files[0],this.excelFileName=t.target.files[0].name},UploadLeadFile:function(){this.isLoading=!0;var t=this,e=new FormData;e.append("file",t.file),void 0!=t.file&&null!=t.file?r["a"].ImportContactsPost(e).then((function(e){var a=e.data;0==a.Status?(t.filepath=a.Msg,setTimeout((function(){t.loadExcelHeader(a.Msg)}),1e3),setTimeout((function(){t.loadTableHeader()}),2e3),t.isLoading=!1):1==a.Status?t.ShowAlert(t.$t("IsNotValidFileUpload"),"warning",!0,t.$t("Alert")):(t.isLoading=!1,t.ShowAlert(a.Msg,"warning",!0,t.$t("Alert")))})):(t.isLoading=!1,t.ShowAlert(t.$t("Please upload valid excel file."),"warning",!0,t.$t("Alert")))},loadExcelHeader:function(t){var e=this;e.isLoading=!0;var a="filepath=".concat(t,"&excelFileName=").concat(e.excelFileName);r["a"].GetContactExcelColumn(a).then((function(t){var a=t.data;if(e.isLoading=!1,void 0!=a.length){var l=$("#ddlExcelColumn");l.empty(),$.each(a,(function(t,e){$("#hdnBatchId").val(e.batch_id),$("#ddlExcelColumn").append("<option value='"+e.column_Name+"'Column_length='"+e.column_Length+"'Data_Type='"+e.data_Type+"' >"+e.column_Name+"</option>")}))}}))},loadTableHeader:function(){var t=this;t.isLoading=!0;var e="submodule=CRM_LEADS&batchid=''";r["a"].GetContactTableColumn(e).then((function(e){var a=e.data;if(t.isLoading=!1,void 0!=a.length){var l=$("#ddlTableColumn");l.empty(),a.sort((function(t,e){return t.is_Required?-1:1})),$.each(a,(function(e,a){var l="";a.is_Required&&"existing_client_id"!=a.column_Name?(t.allrequiredcol=t.allrequiredcol+a.column_Name+",",l=t.GetLocalizedValue(a.column_Name,a.display_Name)+"*"):l=t.GetLocalizedValue(a.column_Name,a.display_Name),$("#ddlTableColumn").append("<option value='"+a.column_Name+"' data-displayName='"+a.display_Name+"'Data_Type='"+a.data_Type+"'Column_length='"+a.Column_Length+"'Is_Required='"+a.is_Required+"'Picklist_Options='"+a.picklist_Options+"'Custom_Field_Id='"+a.custom_Field_Id+"' >"+l+"</option>")})),t.createMultiRows(a.length)}}))},createMultiRows:function(t){try{var e=this;$("uploadfile").addClass("disabled"),this.showSaveButton=!0;var a=1002;e.isLoading=!0;var l=$("table#tblbulklead tr#trdata"),i="",n="";$(".norecord").addClass("d-none");for(var r=0;r<t;r++){if($(l).clone().attr({crtrwid:a}).removeClass("d-none").addClass("visible").find("input,a,select,div").each((function(){$(this).attr({id:function(t,e){return e+""+a},name:function(t,e){return e+""+a},value:function(t,e){return e}}),$(this).removeClass("d-none")})).end().appendTo("table#tblbulklead"),i=$("#ddlExcelColumn").children("option").clone(),n=$("#ddlTableColumn").children("option").clone(),$("table#tblbulklead tr.visible td select[id='ddlTableColumn"+a+"']").remove(),$("table#tblbulklead tr.visible td select[name='TableColumns"+a+"']").attr("id","ddlTableColumn"+a),$("table#tblbulklead tr.visible td select[name='TableColumns"+a+"']").attr("onclick","CheckDuplicateTableRecord(ddlTableColumn"+a+")"),$("table#tblbulklead tr.visible td select[name='TableColumns"+a+"']").append(n),$("table#tblbulklead tr.visible td select[id='ddlExcelColumn"+a+"']").remove(),$("table#tblbulklead tr.visible td select[name='ExcelColumns"+a+"']").attr("id","ddlExcelColumn"+a),$("table#tblbulklead tr.visible td select[name='ExcelColumns"+a+"']").attr("onclick","CheckDuplicateExcelRecord(ddlExcelColumn"+a+")"),$("table#tblbulklead tr.visible td select[name='ExcelColumns"+a+"']").append(i),i.length>r){var s=$("#ddlTableColumn"+a+" option[value='"+i[r].value+"']").attr("data_type"),o=$("#ddlExcelColumn"+a+" option[value='"+i[r].value+"']").attr("data_type"),d=$("#ddlTableColumn"+a+" option[value='"+i[r].value+"']").attr("value"),c=$("#ddlExcelColumn"+a+" option[value='"+i[r].value+"']").attr("value");void 0!=s&&void 0!=o&&d.toLowerCase()==c.toLowerCase()&&($("#ddlTableColumn"+a+" option[value='"+i[r].value+"']").attr("selected","selected"),$("#ddlExcelColumn"+a+" option[value='"+i[r].value+"']").attr("selected","selected")),console.log("ExcelOption=".concat(i[r].value," tc_Value=").concat(d,"  - ex_Value=").concat(c))}a++}$("table#tblbulklead tr.visible[crtrwid ='1001']").removeClass("visible").addClass("d-none"),e.isLoading=!1}catch(u){}},CheckDuplicateTableRecord:function(t){var e,a,l,i=[],n=!0;$("table#tblBulkContact tr#trdata").each((function(){var t=$(this).find("td").eq(0).find("select option:selected").text();i.push(t)}));var r,s,o=1002;for(n=!1,r=1;r<i.length;r++){for(e="#ddlTableColumn"+o,s=r+1;s<i.length;s++)if(i[r]==i[s]&&"Select Column"!=i[r]){n=!0,l=e,a="#ddlTableColumn"+(s-1+1002);break}if(n)break;$(e).removeClass("border border-danger"),$(savebtn).removeClass("disabled"),o++}n&&($(l).addClass("border border-danger"),$(a).addClass("border border-danger"),$(savebtn).addClass("disabled")),n=!1,$("table#tblBulkContact tr#trdata").each((function(){$(this).find("td").eq(1).find("select").hasClass("border-danger")&&$(savebtn).addClass("disabled")}))},CheckDuplicateExcelRecord:function(t){var e,a,l,i=[],n=!0;$("table#tblBulkContact tr#trdata").each((function(){var t=$(this).find("td").eq(1).find("select option:selected").text();i.push(t)}));var r,s,o=1002;n=!1;for(r=1;r<i.length;r++){for(e="#ddlExcelColumn"+o,s=r+1;s<i.length;s++)if(i[r]==i[s]&&"Select Column"!=i[r]){n=!0,l=e,a="#ddlExcelColumn"+(s-1+1002);break}if(n)break;$(e).removeClass("border border-danger"),$(savebtn).removeClass("disabled"),o++}n&&($(l).addClass("border border-danger"),$(a).addClass("border border-danger"),$(savebtn).addClass("disabled")),n=!1,$("table#tblBulkContact tr#trdata").each((function(){$(this).find("td").eq(0).find("select").hasClass("border-danger")&&$(savebtn).addClass("disabled")}))},SaveLeadFile:function(){var t=this,e="<leadentries>\n",a=!1,l="",i=0,s=!1;this.isLoading=!0,this.requiredcol=this.allrequiredcol;var o,d=this.requiredcol.split(","),c=Object(n["a"])(d);try{var u=function(){var e=o.value;$("table#tblbulklead tr.visible").each((function(){i=$(this).attr("crtrwid"),$(this).hasClass("alert-success")||e==$(this).find("#ddlTableColumn"+i).val()&&(t.requiredcol=t.requiredcol.replace(new RegExp(e+",?"),""))}))};for(c.s();!(o=c.n()).done;)u()}catch(b){c.e(b)}finally{c.f()}if(t.requiredcol.length>0)a=!0,$("#lbl_ErrorForColumn").parent().removeClass("d-none"),$("#lbl_ErrorForColumn").html(t.$t("SelectAllMandatory")),$(document).scrollTop(0),t.isLoading=!1;else if($("#lbl_ErrorForColumn").html(""),$("#lbl_ErrorForColumn").parent().addClass("d-none"),$("table#tblbulklead tr.visible").each((function(){if(i=$(this).attr("crtrwid"),$("table#tblbulklead tr.visible[crtrwid ='"+i+"']").removeClass("alert-warning"),!$(this).hasClass("alert-success")&&""!=$(this).find("#ddlTableColumn"+i).val()){if($("table#tblbulklead tr.visible").each((function(){i=$(this).attr("crtrwid"),""!=$(this).find("#ddlTableColumn"+i).val()&&""==$(this).find("#ddlExcelColumn"+i).val()&&(l+=CheckRequiredR("ddlExcelColumn"+i,t.$t("PleaseSelectAnyRecordsForFurther"),"invalid-feedback"))})),""!=l&&(a=!0),a)return $("#lbl_ErrorForColumn").parent().removeClass("d-none"),$("#lbl_ErrorForColumn").html(t.$t("SelectAllMandatory")),$(document).scrollTop(0),t.isLoading=!1,!1;$("#lbl_ErrorForColumn").html(""),$("#lbl_ErrorForColumn").parent().addClass("d-none"),i=$(this).attr("crtrwid");var n=$(this).find("#ddlTableColumn"+i).val(),r=$(this).find("#ddlTableColumn"+i).val(),o=$(this).find("#ddlTableColumn"+i).find(":selected").attr("data_type"),d=$(this).find("#ddlTableColumn"+i).find(":selected").attr("Custom_Field_Id"),c=$(this).find("#ddlTableColumn"+i).find(":selected").attr("Picklist_Options"),u=$(this).find("#ddlExcelColumn"+i).val(),f=$("#ddlExcelColumn"+i).find(":selected").attr("data_type");null==c&&(c=""),void 0!=r&&(s=!0,e+="\n<lead>\n\t<batch_id>"+$("#hdnBatchId").val()+"</batch_id>\n\t<row_id>"+i+"</row_id>\n\t<original_column_name>"+n+"_"+c+"</original_column_name>\n\t<column_name>"+r+"</column_name>\n\t<data_type>"+o.toLowerCase()+"</data_type>\n\t<custom_field_id>"+d+"</custom_field_id>\n\t<excel_column_name>"+u.trim().replace(/[\r\n]+/gm,"_").replace(/[^a-zA-Z0-9_ \s]/gi,"").replace(/[-\s]/g,"_")+"</excel_column_name>\n\t<excel_data_type>"+f.toLowerCase()+"</excel_data_type>\n</lead>\n")}})),e+="\n</leadentries>\n",!a&&s){console.log({xmltrackentries:e,batch_id:$("#hdnBatchId").val()});var f={xmltrackentries:e,batch_id:$("#hdnBatchId").val(),callingSource:"Lead"},m=JSON.stringify(f);r["a"].BulkUploadContact(m).then((function(e){t.isLoading=!1;var a=e.data;void 0!=a.length&&t.$router.push({name:"CRMLeadImportDetails",params:{subModuleCode:"CRM_CONTACTS",batchid:f.batch_id}})}))}}}},o=s,d=a("2877"),c=Object(d["a"])(o,l,i,!1,null,null,null);e["default"]=c.exports},"2c3e":function(t,e,a){var l=a("83ab"),i=a("9f7f").MISSED_STICKY,n=a("c6b6"),r=a("edd0"),s=a("69f3").get,o=RegExp.prototype,d=TypeError;l&&i&&r(o,"sticky",{configurable:!0,get:function(){if(this!==o){if("RegExp"===n(this))return!!s(this).sticky;throw d("Incompatible receiver, RegExp required")}}})},"4d63":function(t,e,a){var l=a("83ab"),i=a("da84"),n=a("e330"),r=a("94ca"),s=a("7156"),o=a("9112"),d=a("241c").f,c=a("3a9b"),u=a("44e7"),f=a("577e"),m=a("90d8"),b=a("9f7f"),v=a("aeb0"),h=a("cb2d"),C=a("d039"),p=a("1a2d"),g=a("69f3").enforce,_=a("2626"),$=a("b622"),x=a("fce3"),k=a("107c"),w=$("match"),E=i.RegExp,y=E.prototype,T=i.SyntaxError,L=n(y.exec),S=n("".charAt),R=n("".replace),F=n("".indexOf),I=n("".slice),A=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,M=/a/g,q=/a/g,B=new E(M)!==M,N=b.MISSED_STICKY,D=b.UNSUPPORTED_Y,O=l&&(!B||N||x||k||C((function(){return q[w]=!1,E(M)!=M||E(q)==q||"/a/i"!=E(M,"i")}))),U=function(t){for(var e,a=t.length,l=0,i="",n=!1;l<=a;l++)e=S(t,l),"\\"!==e?n||"."!==e?("["===e?n=!0:"]"===e&&(n=!1),i+=e):i+="[\\s\\S]":i+=e+S(t,++l);return i},P=function(t){for(var e,a=t.length,l=0,i="",n=[],r={},s=!1,o=!1,d=0,c="";l<=a;l++){if(e=S(t,l),"\\"===e)e+=S(t,++l);else if("]"===e)s=!1;else if(!s)switch(!0){case"["===e:s=!0;break;case"("===e:L(A,I(t,l+1))&&(l+=2,o=!0),i+=e,d++;continue;case">"===e&&o:if(""===c||p(r,c))throw new T("Invalid capture group name");r[c]=!0,n[n.length]=[c,d],o=!1,c="";continue}o?c+=e:i+=e}return[i,n]};if(r("RegExp",O)){for(var j=function(t,e){var a,l,i,n,r,d,b=c(y,this),v=u(t),h=void 0===e,C=[],p=t;if(!b&&v&&h&&t.constructor===j)return t;if((v||c(y,t))&&(t=t.source,h&&(e=m(p))),t=void 0===t?"":f(t),e=void 0===e?"":f(e),p=t,x&&"dotAll"in M&&(l=!!e&&F(e,"s")>-1,l&&(e=R(e,/s/g,""))),a=e,N&&"sticky"in M&&(i=!!e&&F(e,"y")>-1,i&&D&&(e=R(e,/y/g,""))),k&&(n=P(t),t=n[0],C=n[1]),r=s(E(t,e),b?this:y,j),(l||i||C.length)&&(d=g(r),l&&(d.dotAll=!0,d.raw=j(U(t),a)),i&&(d.sticky=!0),C.length&&(d.groups=C)),t!==p)try{o(r,"source",""===p?"(?:)":p)}catch(_){}return r},G=d(E),H=0;G.length>H;)v(j,E,G[H++]);y.constructor=j,j.prototype=y,h(i,"RegExp",j,{constructor:!0})}_("RegExp")},"4e82":function(t,e,a){"use strict";var l=a("23e7"),i=a("e330"),n=a("59ed"),r=a("7b0b"),s=a("07fa"),o=a("083a"),d=a("577e"),c=a("d039"),u=a("addb"),f=a("a640"),m=a("04d1"),b=a("d998"),v=a("2d00"),h=a("512c"),C=[],p=i(C.sort),g=i(C.push),_=c((function(){C.sort(void 0)})),$=c((function(){C.sort(null)})),x=f("sort"),k=!c((function(){if(v)return v<70;if(!(m&&m>3)){if(b)return!0;if(h)return h<603;var t,e,a,l,i="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:a=3;break;case 68:case 71:a=4;break;default:a=2}for(l=0;l<47;l++)C.push({k:e+l,v:a})}for(C.sort((function(t,e){return e.v-t.v})),l=0;l<C.length;l++)e=C[l].k.charAt(0),i.charAt(i.length-1)!==e&&(i+=e);return"DGBEFHACIJK"!==i}})),w=_||!$||!x||!k,E=function(t){return function(e,a){return void 0===a?-1:void 0===e?1:void 0!==t?+t(e,a)||0:d(e)>d(a)?1:-1}};l({target:"Array",proto:!0,forced:w},{sort:function(t){void 0!==t&&n(t);var e=r(this);if(k)return void 0===t?p(e):p(e,t);var a,l,i=[],d=s(e);for(l=0;l<d;l++)l in e&&g(i,e[l]);u(i,E(t)),a=i.length,l=0;while(l<a)e[l]=i[l++];while(l<d)o(e,l++);return e}})},"512c":function(t,e,a){var l=a("342f"),i=l.match(/AppleWebKit\/(\d+)\./);t.exports=!!i&&+i[1]},addb:function(t,e,a){var l=a("4dae"),i=Math.floor,n=function(t,e){var a=t.length,o=i(a/2);return a<8?r(t,e):s(t,n(l(t,0,o),e),n(l(t,o),e),e)},r=function(t,e){var a,l,i=t.length,n=1;while(n<i){l=n,a=t[n];while(l&&e(t[l-1],a)>0)t[l]=t[--l];l!==n++&&(t[l]=a)}return t},s=function(t,e,a,l){var i=e.length,n=a.length,r=0,s=0;while(r<i||s<n)t[r+s]=r<i&&s<n?l(e[r],a[s])<=0?e[r++]:a[s++]:r<i?e[r++]:a[s++];return t};t.exports=n},c607:function(t,e,a){var l=a("83ab"),i=a("fce3"),n=a("c6b6"),r=a("edd0"),s=a("69f3").get,o=RegExp.prototype,d=TypeError;l&&i&&r(o,"dotAll",{configurable:!0,get:function(){if(this!==o){if("RegExp"===n(this))return!!s(this).dotAll;throw d("Incompatible receiver, RegExp required")}}})},d998:function(t,e,a){var l=a("342f");t.exports=/MSIE|Trident/.test(l)}}]);
//# sourceMappingURL=CRMImportLeads.js.map