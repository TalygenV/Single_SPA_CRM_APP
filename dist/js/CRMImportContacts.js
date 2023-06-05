(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["CRMImportContacts"],{2792:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loader",{attrs:{"is-visible":t.isLoading}}),a("section",{staticClass:"main-content",attrs:{id:"main-content"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 padding-t_8"},[a("div",{staticClass:"theme-primary partition-full"},[a("span",{staticClass:"p-name text-white"},[t._v(t._s(t.$t("Import"))+" "+t._s(t.$t("Contacts")))]),a("span",{staticClass:"p-actions float-right"},[a("a",{staticClass:"p-action-btn text-white float-right",attrs:{href:"javascript:;",id:"btnbacktolist",title:t.$t("BacktoList")},on:{click:t.BackToList}},[a("em",{staticClass:"fa fa-angle-double-left pr-2"}),a("br"),t._v(t._s(t.$t("BacktoList")))])])])])]),a("div",{staticClass:"border p-3"},[a("form",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"form-group"},[a("label",[t._v(t._s(t.$t("Download"))+" "+t._s(t.$t("SampleFile"))+":")]),a("div",{staticClass:"d-flex align-items-center"},[a("p",[a("a",{staticClass:"text-dark",attrs:{href:"/Content/files/ImportContactsSampleFile.xls",checkprivilege:"no",download:""}},[a("img",{staticClass:"mr-2",attrs:{src:"/Content/images/excel-icon.png",alt:""}}),t._v(t._s(t.$t("Contact"))+" "),a("em",{staticClass:"fa fa-download ml-2 text-dark"})])])])])]),a("div",{staticClass:"col-xl-4 col-lg-4 col-md-6"},[a("div",{staticClass:"form-group"},[a("label",[t._v(t._s(t.$t("UploadFile"))+":"),a("span",{staticClass:"text-danger"},[t._v("*")])]),a("div",{staticClass:"custom-file"},[a("div",{staticClass:"custom-file"},[a("input",{staticClass:"downloadexcel",staticStyle:{position:"absolute",clip:"rect(0px, 0px, 0px, 0px)"},attrs:{type:"file",id:"flUserFile",size:"19",name:"flUserFile",tabindex:"-1"},on:{change:function(e){return t.setFile(e)}}}),a("div",{staticClass:"bootstrap-filestyle input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.excelFileName,expression:"excelFileName"}],staticClass:"form-control disabled",attrs:{type:"text",disabled:""},domProps:{value:t.excelFileName},on:{input:function(e){e.target.composing||(t.excelFileName=e.target.value)}}}),a("div",{staticClass:"input-group-append",staticStyle:{cursor:"pointer"}},[t._m(0),a("span",{staticClass:"input-group-text border-0 bg-transparent p-0 pl-2"},[a("a",{staticClass:"round-icon-small btn-danger-light clsattclear",attrs:{href:"javascript:;",title:"Clear","data-toggle-tooltip":"tooltip","data-original-title":"Clear"}},[a("em",{staticClass:"fa fa-undo",on:{click:t.resetFile}})])])])])])])])]),a("div",{staticClass:"col-xl-5 col-lg-6 col-md-12 mt-lg-4 pl-lg-0 "},[a("a",{staticClass:"btn btn-success mr-2",attrs:{href:"javascript:void(0);",id:"uploadfile",title:t.$t("ImportFromExcelFile")},on:{click:t.UploadContactFile}},[a("em",{staticClass:"fa fa-sign-in pr-2",attrs:{"aria-hidden":"true"}}),t._v(t._s(t.$t("ImportFromExcelFile"))+" ")]),a("a",{staticClass:"btn btn-danger",attrs:{href:"/CRM/ImportContacts/ContactListing",id:"",title:t.$t("Reset")}},[a("em",{staticClass:"fa fa-refresh mr-2 "}),t._v(t._s(t.$t("Reset")))])]),t._m(1)])])])]),a("div",{staticClass:"clearfix"}),a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"listing mt-2"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-bordered dt-responsive nowrap mt-0",staticStyle:{width:"100%"},attrs:{id:"tblBulkContact","aria-describedby":"importcontact"}},[t._m(2),a("tbody",[a("tr",[a("td",{staticClass:"text-center text-danger norecord no-record",attrs:{colspan:"2"}},[t._v(t._s(t.$t("NoRecordfound")))])]),a("tr",{staticClass:"d-none",attrs:{id:"trdata",crtrwid:"1001"}},[a("td",[a("select",{staticClass:"form-control d-none",attrs:{name:"TableColumns"}},[a("option",{attrs:{value:""}},[t._v(t._s(t.$t("Select"))+" "+t._s(t.$t("Column")))])]),a("select",{staticClass:"form-control",attrs:{id:"ddlTableColumn",name:"TableColumn"}})]),a("td",[a("select",{staticClass:"form-control",attrs:{name:"ExcelColumns"}},[a("option",{attrs:{value:""}},[t._v(t._s(t.$t("Select"))+" "+t._s(t.$t("Column")))])]),a("select",{staticClass:"form-control",attrs:{id:"ddlExcelColumn",name:"ExcelColumn"}})])])])])]),a("div",{staticClass:"clearfix"}),a("div",{staticClass:"col-lg-12 text-right mt-3"},[a("input",{attrs:{type:"hidden",id:"hdnBatchId",value:"Batch_id"}}),a("a",{staticClass:"btn btn-success my-2 d-none",attrs:{href:"javascript:void(0);",id:"savebtn",title:t.$t("Save")},on:{click:t.SaveContactFile}},[a("em",{staticClass:"fa fa-save pr-2"}),a("span",[t._v(t._s(t.$t("Save")))])])])])])],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"group-span-filestyle input-group-btn input-group-text bg-white",attrs:{tabindex:"0"}},[a("label",{staticClass:"mb-0 font-weight-normal ",attrs:{title:"Click here to select a file.",for:"flUserFile"}},[t._v("Choose File")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"py-2"},[a("span",{staticClass:"text-danger"},[a("small",[t._v("Fields marked with an asterisk (*) are mandatory.")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"thead-bg"},[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("Table Column")]),a("th",{attrs:{scope:"col"}},[t._v("Excel Column")])])])}],i=(a("b0c0"),a("99af"),a("ac1f"),a("5319"),a("7db0"),a("d3b7"),a("498a"),a("e9c4"),a("9769")),n={data:function(){return{isLoading:!1,file:null,filepath:null,excelFileName:null,reqfrom:null}},created:function(){this.reqfrom=this.$route.params.reqfrom},methods:{BackToList:function(){this.$router.push({name:"Manage Contacts List"})},setFile:function(t){this.file=t.target.files[0],this.excelFileName=t.target.files[0].name},resetFile:function(){var t=this;t.file=null,t.excelFileName=null},UploadContactFile:function(){var t=this;if(null!=t.file){this.isLoading=!0;var e=new FormData;e.append("file",t.file),i["a"].ImportContactsPost(e).then((function(e){var a=e.data;0==a.Status?(t.filepath=a.Msg,setTimeout((function(){t.loadExcelHeader(a.Msg)}),1e3),setTimeout((function(){t.loadTableHeader()}),2e3),t.isLoading=!1):(t.isLoading=!1,t.ShowAlert(a.Msg,"warning",!0,t.$t("Alert")))}))}else t.ShowAlert(t.$t("PleaseUploadExcelFile"),"warning",!0,t.$t("Alert"))},loadExcelHeader:function(t){var e=this;e.isLoading=!0;var a="filepath=".concat(t,"&excelFileName=").concat(e.excelFileName);i["a"].GetContactExcelColumn(a).then((function(t){var a=t.data;if(e.isLoading=!1,void 0!=a.length){var l=$("#ddlExcelColumn");l.empty(),$.each(a,(function(t,e){$("#hdnBatchId").val(e.batch_id),$("#ddlExcelColumn").append("<option value='"+e.column_Name+"'Data_Type='"+e.data_Type+"' >"+e.column_Name+"</option>")}))}}))},loadTableHeader:function(){var t=this;t.isLoading=!0,i["a"].GetContactTableColumn().then((function(e){var a=e.data;if(t.isLoading=!1,void 0!=a.length){var l=$("#ddlTableColumn");l.empty(),$.each(a,(function(t,e){$("#ddlTableColumn").append("<option value='"+e.column_Name+"'Data_Type='"+e.data_Type+"'Is_Required='"+e.is_Required+"'Picklist_Options='"+e.picklist_Options+"'Custom_Field_Id='"+e.custom_Field_Id+"' >"+e.column_Name.replace(/_/g," ")+"</option>")})),t.createMultiRows(a.length)}}))},createMultiRows:function(t){try{var e=this;$("uploadfile").addClass("disabled"),$("#savebtn").removeClass("d-none");var a=1002;e.isLoading=!0;var l=$("table#tblBulkContact tr#trdata"),s="",i="";$(".norecord").addClass("d-none");for(var n=0;n<t;n++){if($(l).clone().attr({crtrwid:a}).removeClass("d-none").addClass("visible").find("input,a,select,div").each((function(){$(this).attr({id:function(t,e){return e+""+a},name:function(t,e){return e+""+a},value:function(t,e){return e}}),$(this).removeClass("d-none")})).end().appendTo("table#tblBulkContact"),s=$("#ddlExcelColumn").children("option").clone(),i=$("#ddlTableColumn").children("option").clone(),$("table#tblBulkContact tr.visible td select[id='ddlTableColumn"+a+"']").remove(),$("table#tblBulkContact tr.visible td select[name='TableColumns"+a+"']").attr("id","ddlTableColumn"+a),$("table#tblBulkContact tr.visible td select[name='TableColumns"+a+"']").attr("onclick","CheckDuplicateTableRecord(ddlTableColumn"+a+")"),$("table#tblBulkContact tr.visible td select[name='TableColumns"+a+"']").append(i),$("table#tblBulkContact tr.visible td select[id='ddlExcelColumn"+a+"']").remove(),$("table#tblBulkContact tr.visible td select[name='ExcelColumns"+a+"']").attr("id","ddlExcelColumn"+a),$("table#tblBulkContact tr.visible td select[name='ExcelColumns"+a+"']").attr("onclick","CheckDuplicateExcelRecord(ddlExcelColumn"+a+")"),$("table#tblBulkContact tr.visible td select[name='ExcelColumns"+a+"']").append(s),s.length>n){var o=$("#ddlTableColumn"+a+" option[value='"+s[n].value+"']").attr("data_type"),d=$("#ddlExcelColumn"+a+" option[value='"+s[n].value+"']").attr("data_type"),r=$("#ddlTableColumn"+a+" option[value='"+s[n].value+"']").attr("value"),c=$("#ddlExcelColumn"+a+" option[value='"+s[n].value+"']").attr("value");void 0!=o&&void 0!=d&&r.toLowerCase()==c.toLowerCase()&&($("#ddlTableColumn"+a+" option[value='"+s[n].value+"']").attr("selected","selected"),$("#ddlExcelColumn"+a+" option[value='"+s[n].value+"']").attr("selected","selected"))}a++}$("table#tblBulkContact tr.visible[crtrwid ='1001']").removeClass("visible").addClass("d-none"),e.isLoading=!1}catch(u){this.isLoading=!1}},CheckDuplicateTableRecord:function(t){var e,a,l,s=[],i=!0;$("table#tblBulkContact tr#trdata").each((function(){var t=$(this).find("td").eq(0).find("select option:selected").text();s.push(t)}));var n,o,d=1002;for(i=!1,n=1;n<s.length;n++){for(e="#ddlTableColumn"+d,o=n+1;o<s.length;o++)if(s[n]==s[o]&&"Select Column"!=s[n]){i=!0,l=e,a="#ddlTableColumn"+(o-1+1002);break}if(i)break;$(e).removeClass("border border-danger"),$(savebtn).removeClass("disabled"),d++}i&&($(l).addClass("border border-danger"),$(a).addClass("border border-danger"),$(savebtn).addClass("disabled")),i=!1,$("table#tblBulkContact tr#trdata").each((function(){$(this).find("td").eq(1).find("select").hasClass("border-danger")&&$(savebtn).addClass("disabled")}))},CheckDuplicateExcelRecord:function(t){var e,a,l,s=[],i=!0;$("table#tblBulkContact tr#trdata").each((function(){var t=$(this).find("td").eq(1).find("select option:selected").text();s.push(t)}));var n,o,d=1002;i=!1;for(n=1;n<s.length;n++){for(e="#ddlExcelColumn"+d,o=n+1;o<s.length;o++)if(s[n]==s[o]&&"Select Column"!=s[n]){i=!0,l=e,a="#ddlExcelColumn"+(o-1+1002);break}if(i)break;$(e).removeClass("border border-danger"),$(savebtn).removeClass("disabled"),d++}i&&($(l).addClass("border border-danger"),$(a).addClass("border border-danger"),$(savebtn).addClass("disabled")),i=!1,$("table#tblBulkContact tr#trdata").each((function(){$(this).find("td").eq(0).find("select").hasClass("border-danger")&&$(savebtn).addClass("disabled")}))},SaveContactFile:function(){var t=this,e="<contactentries>\n",a=!1,l=0,s=!1;if($("table#tblBulkContact tr.visible").each((function(){if(l=$(this).attr("crtrwid"),$("table#tblBulkContact tr.visible[crtrwid ='"+l+"']").removeClass("alert-warning"),!$(this).hasClass("alert-success"))if(""==$("#ddlTableColumn"+l).val()?($("#ddlTableColumn"+l).addClass("is-invalid"),a=!0):$("#ddlTableColumn"+l).removeClass("is-invalid"),""==$("#ddlExcelColumn"+l).val()?($("#ddlExcelColumn"+l).addClass("is-invalid"),a=!0):$("#ddlExcelColumn"+l).removeClass("is-invalid"),a)$("#lblError").parent().removeClass("d-none"),$("#lblError").html(t.$t("PleaseCorrectHighlightedErrors")),$(document).scrollTop(0);else{$("#lblError").html(""),$("#lblError").parent().addClass("d-none"),l=$(this).attr("crtrwid");var i=$(this).find("#ddlTableColumn"+l).val(),n=$(this).find("#ddlTableColumn"+l).val(),o=$(this).find("#ddlTableColumn"+l).find(":selected").attr("data_type"),d=$(this).find("#ddlTableColumn"+l).find(":selected").attr("Custom_Field_Id"),r=$(this).find("#ddlTableColumn"+l).find(":selected").attr("Picklist_Options"),c=$(this).find("#ddlExcelColumn"+l).val(),u=$("#ddlExcelColumn"+l).find(":selected").attr("data_type");null==r&&(r=""),void 0!=n&&(s=!0,e+="\n<contact>\n\t<batch_id>"+$("#hdnBatchId").val()+"</batch_id>\n\t<row_id>"+l+"</row_id>\n\t<original_column_name>"+i+"_"+r+"</original_column_name>\n\t<column_name>"+n+"</column_name>\n\t<data_type>"+o.toLowerCase()+"</data_type>\n\t<custom_field_id>"+d+"</custom_field_id>\n\t<excel_column_name>"+c.trim().replace(/[\r\n ]+/gm,"_").replace(/[^a-zA-Z0-9_ \s]/gi,"").replace(/[-\s]/g,"_")+"</excel_column_name>\n\t<excel_data_type>"+u.toLowerCase()+"</excel_data_type>\n</contact>\n")}})),e+="\n</contactentries>\n",!a&&s){console.log({xmltrackentries:e,batch_id:$("#hdnBatchId").val()});var n={xmltrackentries:e,batch_id:$("#hdnBatchId").val(),callingSource:"Contacts"},o=JSON.stringify(n);i["a"].BulkUploadContact(o).then((function(e){t.isLoading=!1;var a=e.data;if(void 0!=a.length){var l=t.reqfrom;"ContactListing"==l?t.$router.push({name:"CRMContactImportDetails",params:{subModuleCode:"CRM_CONTACTS",reqfrom:"ImportContacts",batchid:n.batch_id}}):t.$router.push({name:"CRMContactImportDetails",params:{subModuleCode:"CRM_ACCOUNTS",reqfrom:"ImportAccount",batchid:n.batch_id}})}}))}}}},o=n,d=a("2877"),r=Object(d["a"])(o,l,s,!1,null,null,null);e["default"]=r.exports}}]);
//# sourceMappingURL=CRMImportContacts.js.map