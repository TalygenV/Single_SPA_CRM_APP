(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ViewStageDetails"],{3731:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"listing mt-2"},[e("loader",{attrs:{"is-visible":t.isLoading}}),t.NoRecordForTab?e("div",{staticClass:"text-center text-danger p-4 border"},[t._v(t._s(t.$t("NoRecordfound")))]):t._e(),e("div",{staticClass:"row custom-box-width"},t._l(t.AttachmentData,(function(a,i){return e("div",{key:i,staticClass:"col-xl-2 col-lg-4 col-md-6"},[e("div",{staticClass:"box border pt-4 text-center"},[e("div",{staticClass:"verticle-action"},[e("em",{staticClass:"fa fa-ellipsis-v action_icon",attrs:{"aria-hidden":"true"},on:{click:function(a){return t.openActionIcon(a)}}}),e("span",{staticClass:"action-list-box",staticStyle:{width:"240px",display:"none"}},[e("span",{staticClass:"list-actions",staticStyle:{"padding-left":"0"},attrs:{id:"action-list"}},[e("a",{staticClass:"actions-onclick edit-list",attrs:{"data-toggle":"modal",href:"javascript:void(0)"},on:{click:function(e){return t.downloadAttachment(a)}}},[e("em",{staticClass:"fa fa-download",attrs:{"aria-hidden":"true"}}),e("br"),t._v("Download")]),"fa-file-image-o"==t.returntFileIconClass(a)?e("a",{staticClass:"actions-onclick view-list",attrs:{href:a.attachement_path,target:"_blank"}},[e("em",{staticClass:"fa fa-eye"}),e("br"),t._v("View")]):t._e(),e("a",{staticClass:"actions-onclick view-list",on:{click:function(e){return t.deleteAttachment(a)}}},[e("em",{staticClass:"fa fa-trash"}),e("br"),t._v("Delete")]),e("em",{staticClass:"fa fa-times close close-action",attrs:{"aria-hidden":"true"},on:{click:function(a){return t.closeActionIcon(a)}}})])])]),e("div",{class:{"img-ico text-center p-5 file-image doc-icon":null==a.thumb_nail_path||""==a.thumb_nail_path,"img-ico fix145 text-center pb-4 file-image doc-icon pt-3":null!=a.thumb_nail_path&&""!=a.thumb_nail_path}},[null!=a.thumb_nail_path&&""!=a.thumb_nail_path?e("img",{attrs:{src:a.thumb_nail_path,alt:"",loading:"'lazy'"}}):t._e(),null==a.thumb_nail_path||""==a.thumb_nail_path?e("em",{class:"fa "+t.returntFileIconClass(a)}):t._e()]),e("hr",{staticClass:"mb-0"}),e("div",{staticClass:"clearfix"}),e("div",{staticClass:"row mx-0 my-2"},[e("div",{staticClass:"col-md-12 text-left text-truncate font-14 mb-2 font-weight-bold",attrs:{title:a.attachement_name+"."+JSON.parse(a.attachement_mime).Extension}},[t._v(t._s(a.attachement_name+"."+JSON.parse(a.attachement_mime).Extension))]),e("div",{staticClass:"col-md-5 font-14 align-self-center text-left pr-0"},[e("span",[t._v(t._s(t.bytesToSize(JSON.parse(a.attachement_mime).Size)))])]),e("div",{staticClass:"col-md-7 text-right pl-0 text-truncate"},[e("small",[t._v(t._s(t._f("formatDateTime")(a.created_at)))])])])])])})),0)],1)},s=[],o=(e("7db0"),e("d3b7"),e("25f0"),e("99af"),e("3ca3"),e("ddb0"),e("2b3d"),e("9861"),e("1157")),n=e.n(o),l=e("9769"),c={props:{attachmentdata:null,sourceid:{type:String}},data:function(){return{isLoading:!1,AttachmentData:[],NoRecordForTab:!0,LeadStatus:this.$parent.LeadStatus,showAttachmentModal:!1,imageUrl:""}},watch:{attachmentdata:function(t){var a=n()("#hdnLoggedInUserId").val();n.a.each(t,(function(t,e){e.created_by==a?e.IsDelete=!0:e.IsDelete=!1})),this.AttachmentData=t,this.NoRecordForTab=!(null!=this.AttachmentData&&this.AttachmentData.length>0),setTimeout((function(){n()(".action_icon").click((function(){n()(this).parent().find(".action-list-box").show(500)})),n()(".close-action").click((function(){n()(this).parent().parent(".action-list-box").hide(500)}))}),1e3)}},methods:{openActionIcon:function(t){t.target.nextSibling.removeAttribute("style"),t.target.nextSibling.setAttribute("style","width:240px;"),t.target.nextSibling.style.display="block"},closeActionIcon:function(t){t.target.nextSibling.style.display="none"},StrTruncate:function(t){function a(a){return t.apply(this,arguments)}return a.toString=function(){return t.toString()},a}((function(t){return StrTruncate(t,25)})),returntFileIconClass:function(t){var a=["JPG","JPEG","BMP","GIF","PNG"],e=JSON.parse(t.attachement_mime),i=e.Extension.toUpperCase();return"COMPRESSEDFILES"==i||"ZIP"==i||"RAR"==i?"fa-file-archive-o":"XLS"==i||"XLSX"==i||"DATAFILES"==i?"fa-file-excel-o":"PPT"==i?"fa-file-powerpoint-o":"PDF"==i?"fa-file-pdf-o":"DOC"==i||"DOCX"==i?"fa-file-word-o":"TXT"==i?"fa-file-text-o":a.indexOf(i)>-1?"fa-file-image-o":"fa-file-o"},bytesToSize:function(t){var a=["Bytes","KB","MB","GB","TB"];if(0==t)return"0 Byte";var e=parseInt(Math.floor(Math.log(t)/Math.log(1024)));return Math.round(t/Math.pow(1024,e),2)+" "+a[e]},downloadAttachment:function(t){this.isLoading=!0;var a=this,e="fileId=".concat(t.attachement_id,"&filePath=").concat(t.blob_path,"&fileType=").concat(JSON.parse(t.attachement_mime).ContentType,"&fileName=").concat(t.attachement_name+"."+JSON.parse(t.attachement_mime).Extension,"&downloadType=single");l["a"].CRMDownloadFile(e).then((function(e){a.isLoading=!1;var i=window.URL.createObjectURL(new Blob([e.data])),s=document.createElement("a");s.href=i,s.setAttribute("download",t.attachement_name+"."+JSON.parse(t.attachement_mime).Extension),document.body.appendChild(s),s.click()}))},deleteAttachment:function(t){var a=this;a.confirmR(this.$t("ConfirmDelete"),!0,this.$t("Delete")+"  "+this.$t("Attachment"),(function(){a.isLoading=!0;var e=t.attachement_id,i=parseInt(a.sourceid),s="id="+e+"&sourceid="+i;l["a"].DeleteAttachment(s).then((function(t){a.isLoading=!1,"SUCCESS"==t.data&&(a.ShowAlert(a.$t("DeletedSuccess",[a.$t("Attachment")]),"success",!0,a.$t("Alert")),a.$parent.loadData("attachments"))}))}))}}},r=c,d=e("2877"),m=Object(d["a"])(r,i,s,!1,null,null,null);a["a"]=m.exports},"9dbd":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal d-block my-popups dialog"},[e("loader",{attrs:{"is-visible":t.isLoading}}),e("div",{staticClass:"modal-dialog"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[t._t("headerForModal",(function(){return[e("h5",{staticClass:"modal-title"},[t._v(t._s(t.$t("Attachments")))])]})),e("button",{staticClass:"close",attrs:{type:"button",href:"javascript:;"},on:{click:function(a){return t.$emit("close")}}},[e("em",{staticClass:"fa fa-times"})])],2),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"row form-head",staticStyle:{display:"none"}},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"col-sm-12 col-md-4 col-lg-4 col-xl-4 float-right p-0"},[e("div",{staticClass:"userguide-box userguide_curve"},[e("a",{staticClass:"userguide-btn collapsed",attrs:{"data-toggle":"collapse",href:"#user-guidepriority","aria-expanded":"false","aria-controls":"search-content"}},[e("em",{staticClass:"fa"}),e("span",[t._v(t._s(t.$t("GuideForUser")))])]),e("div",{staticClass:"clearfix"}),e("div",{staticClass:"user-guide collapse",attrs:{id:"user-guidepriority"}},[t._v(" "+t._s(t.$t("GuideForUser"))+" "),e("br"),e("br")])])])])]),e("Form",{ref:"attachment"},[e("div",{staticClass:"form-content"},[e("div",{staticClass:"col-md-12 p-0"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12 col-md-12 col-lg-6 col-xl-6"},[e("div",{staticClass:"form-group"},[e("label",[t._v(t._s(t.$t("DisplayName"))+":")]),e("span",{staticClass:"text-danger"},[t._v("*")]),e("Field",{attrs:{name:"Name",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(a){var i=a.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:t.DisplayName,expression:"DisplayName"}],staticClass:"form-control",class:{"form-control":!0,"is-invalid":i[0]},attrs:{type:"text",maxlength:"50",id:"DisplayName",name:"DisplayName"},domProps:{value:t.DisplayName},on:{keyup:function(a){return t.CheckAttach(t.DisplayName)},input:function(a){a.target.composing||(t.DisplayName=a.target.value)}}}),i[0]?e("span",{staticClass:"invalid-feedback",attrs:{name:"DisplayName"}},[t._v(t._s(i[0]))]):t._e()]}}])})],1)]),e("div",{staticClass:"col-sm-12 col-md-12 col-lg-6 col-xl-6",attrs:{id:"attach"}},[e("div",{staticClass:"form-group"},[e("label",[t._v(t._s(t.$t("Attachment"))+":")]),e("span",{staticClass:"text-danger"},[t._v("*")]),void 0!=t.imagesizedata&&t.imagesizedata.length>0?e("a",{directives:[{name:"popover",rawName:"v-popover:tooltip",value:t.imagesizedata,expression:"imagesizedata",arg:"tooltip"}],attrs:{href:"javascript:;","data-toggle":"popoveruserguide"}},[e("em",{staticClass:"fa fa-question-circle-o text-popover",staticStyle:{"font-size":"14p  x"}})]):t._e(),e("div",{staticClass:"custom-file"},[e("Field",{ref:"provider",attrs:{name:"File",rules:{required:!1}},scopedSlots:t._u([{key:"default",fn:function(a){var i=a.errors;return[e("input",{class:{"form-control":!0,"is-invalid":i[0]||1==t.isFileValidation},attrs:{type:"file",name:"FileSrc",id:"inputAttach"},on:{change:t.GetBase64String,click:function(a){return t.onClickFile(a)}}}),1==t.isFileValidation?e("span",{staticClass:"invalid-feedback d-block"},[t._v("The Attachment is required")]):i[0]?e("span",{staticClass:"invalid-feedback d-block"},[t._v(t._s(i[0]))]):t._e()]}}])})],1)])])])])])])],1),e("div",{staticClass:"modal-footer text-right"},[e("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0"},[e("div",{staticClass:"form-group"},[e("div",{staticClass:"search-btm-btn"},[e("a",{staticClass:"btn btn-success  save-btn mr-2",attrs:{href:"javascript:;",title:t.$t("Save")},on:{click:function(a){return t.SaveAttachment()}}},[e("em",{staticClass:"fa fa-save pr-2"}),t._v(" "+t._s(t.$t("Save"))+" ")]),e("a",{staticClass:"btn btn-danger delete-btn",attrs:{href:"javascript:;",title:t.$t("Cancel")},on:{click:function(a){return t.$emit("close")}}},[e("em",{staticClass:"fa fa-times pr-1"}),t._v(" "+t._s(t.$t("Cancel"))+" ")])])])])])])])],1)},s=[],o=(e("a9e3"),e("313d"),e("0eb6"),e("b7ef"),e("8bd4"),e("b0c0"),e("ac1f"),e("1276"),e("caad"),e("2532"),e("e9c4"),e("9769")),n=e("1157"),l=e.n(n),c={props:{userid:{type:Number,required:!0},companyid:{type:Number,required:!0},id:{type:String,required:!0},modulename:{type:String,required:!0},submodulecode:{type:String,required:!0},containername:{type:String,required:!0},maxsize:{type:String},disallowedfiletypes:{type:String},imagesizedata:{type:String}},data:function(){return{isFileValidation:!1,fileData:[],DisplayName:"",FileName:"",btnDisable:!1,isLoading:!1}},methods:{checkForDisplayName:function(t){this.DisplayName||t.preventDefault()},CheckAttach:function(t){""!=t?(this.btnDisable=!0,this.fileData.fileName=t):this.btnDisable=!1},GetBase64String:function(t){var a=this;a.fileData=[];var e=t.target.files[0],i=new FileReader;i.onload=function(t){return function(t){var i=t.target.result,s=window.btoa(i),o=e.name,n=o.lastIndexOf("."),l=o.substring(n+1,o.length),c='{"ContentType":"'+e.type+'","Size":"'+e.size+'","Extension":"'+l+'"}';""==a.DisplayName?(o=e.name,a.FileName=e.name):(o=a.DisplayName,a.FileName=e.name);var r={attachement_mime:c,fileName:o,userId:a.userid,companyId:a.companyid,id:a.id,moduleName:a.modulename,subModuleCode:a.submodulecode,containerName:a.containername,base64String:s};a.fileData.push(r),a.isFileValidation=!1}}(),i.readAsBinaryString(e)},byteToSize:function(t){return 0==t?"0 Byte":t/Math.pow(1024,2)},onClickFile:function(){var t=document.getElementById("inputAttach"),a=t.files;0==a.length?this.isFileValidation=!0:this.isFileValidation=!1},SaveAttachment:function(){var t=this,a=this,e=0,i="";this.onClickFile(),""!=l()("#inputAttach").val()&&(e=a.byteToSize(JSON.parse(a.fileData[0].attachement_mime).Size),i=JSON.parse(a.fileData[0].attachement_mime).Extension);var s=parseFloat(a.maxsize)||0;if(e>s&&0!=s)return a.ShowAlert("Size exceeds than "+s+" MB. Please upload file with valid size.","warning",!0,a.$t("Alert")),!1;var n=void 0!=a.disallowedfiletypes?a.disallowedfiletypes.split(","):"",c="."+i;if(n.includes(c))return a.ShowAlert(a.$t("InvalidFileUploadMsg"),"warning",!0,a.$t("Alert")),!1;a.$refs.attachment.validate().then((function(e){if(e){a.isLoading=!0;var i=JSON.stringify(a.fileData);n.includes(c)?a.ShowAlert(a.$t("InvalidFileUploadMsg")):o["a"].UploadFile(i).then((function(t){a.isLoading=!1,"Success"==t.data[0].Status?(a.ShowAlert(a.$t("AddedSuccess",[a.$t("Attachment")]),"Success",!0,a.$t("Alert")),a.$emit("close"),a.$parent.loadData("attachments")):"Exist"==t.data[0].Status?a.ShowAlert(a.$t("FileNameAlreadyExist",[a.$t("Attachment")]),"warning",!0,a.$t("Alert")):a.ShowAlert(a.$t("ValidFileType",[a.$t("Attachment")]),"failure",!0,a.$t("Alert"))}))}else console.log(t.$refs.attachment.errors)}))}}},r=c,d=e("2877"),m=Object(d["a"])(r,i,s,!1,null,null,null);a["a"]=m.exports},f61f:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"divMainFormData"}},[e("section",{staticClass:"main-content",attrs:{id:"main-content"}},[e("loader",{attrs:{"is-visible":t.isLoading}}),e("section",{staticClass:"main-content"},[e("div",{staticClass:"left-menu-tab div-click-event"},[e("div",{staticClass:"col-md-12 p-0 "},[e("div",{staticClass:"theme-primary partition"},[e("span",{staticClass:"p-name text-white textelipsis"},[t._v(t._s(t.stageName))])])]),e("ul",{staticClass:"nav nav-pills flex-column left-tab mt-2 responivecustomtab",attrs:{id:"myTab",role:"tablist"}},[e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link left-menu",class:{active:1==t.activeKey},attrs:{"data-bs-target":"#tab-lead-content",href:"javascript:void(0)","data-bs-toggle":"tab",role:"tab",id:"tab-Details"},on:{click:function(a){t.loadData("timeline"),t.DisableButton()}}},[e("em",{staticClass:"fa fa-list",attrs:{"aria-hidden":"true","aria-selected":"true"}}),t._v(" "+t._s(t.$t("Detail"))+" ")])])])]),e("div",{staticClass:"right-content"},[e("div",{staticClass:"tab-pane mb-2"},[e("div",{staticClass:"theme-primary partition p-actions-expand"},[e("span",{staticClass:"p-name text-white",attrs:{id:"span_ForSelectedTabName"}}),e("span",{staticClass:"p-actions float-right"},[t.isNotes&&"list"==t.NoteListType?e("a",{class:{"p-action-btn text-white":!0,disabled:!1},attrs:{href:"javascript:;",title:"","data-toggle-tooltip":"tooltip","data-original-title":"Card View"},on:{click:function(a){t.NoteListType="card"}}},[e("em",{staticClass:"fa fa-th-large"}),e("br"),t._v(" "+t._s(t.$t("CardView"))+" ")]):t._e(),t.isNotes&&"list"!=t.NoteListType?e("a",{class:{"p-action-btn text-white":!0,disabled:!1},attrs:{href:"javascript:;",title:"","data-toggle-tooltip":"tooltip","data-original-title":"List View"},on:{click:function(a){t.NoteListType="list"}}},[e("em",{staticClass:"fa fa-list"}),e("br"),t._v(" "+t._s(t.$t("ListView"))+" ")]):t._e(),t.isNotes?e("a",{class:{"p-action-btn text-white":!0,disabled:!1},attrs:{href:"javascript:;",title:"",id:"ancaddnotesloaddata","data-toggle-tooltip":"tooltip","data-original-title":"Add Notes"},on:{click:function(a){return t.openShowNotePopup()}}},[e("em",{staticClass:"fa fa-plus"}),e("br"),t._v(" "+t._s(t.$t("AddNotes"))+" ")]):t._e(),t.isAttachment?e("a",{class:{"p-action-btn text-white":!0},attrs:{href:"javascript:;",title:t.$t("UploadFile")},on:{click:function(a){return t.openCRMAttachmentModal(null)}}},[e("em",{staticClass:"fa fa-plus"}),e("br"),t._v(" "+t._s(t.$t("Add"))+" "+t._s(t.$t("Attachment"))+" ")]):t._e(),t.isTask?e("a",{class:{"p-action-btn text-white btn_add":!0},attrs:{href:"javascript:void(0)",title:"",id:"","data-original-title":"Add Task"},on:{click:function(a){return t.openAddTaskModel()}}},[e("em",{staticClass:"fa fa-plus"}),e("br"),t._v(t._s(t.$t("AddTask")))]):t._e(),t.isTimeline?e("a",{class:{"p-action-btn text-white btn_follow":!0},attrs:{href:"javascript:void(0)",title:"",id:"","data-original-title":"Follow Up"},on:{click:function(a){return t.openAddNewEvent()}}},[e("em",{staticClass:"fa fa-share"}),e("br"),t._v(" "+t._s(t.$t("FollowUp")))]):t._e(),t.isTimeline?e("a",{class:{"p-action-btn text-white btn_call":!0},attrs:{href:"javascript:void(0)",title:"",id:"","data-original-title":"Schedule Call"},on:{click:function(a){return t.openCallEvent()}}},[e("em",{staticClass:"fa fa-phone"}),e("br"),t._v(" "+t._s(t.$t("Schedule"))+" "+t._s(t.$t("Call"))+" ")]):t._e(),e("RouterLink",{staticClass:"p-action-btn text-white float-right",attrs:{to:"/CRM/StageListing"}},[e("em",{staticClass:"fa fa-angle-double-left"}),e("br"),t._v(" "+t._s(t.$t("BacktoList"))+" ")]),"Closed"!=t.stausName?e("RouterLink",{staticClass:"p-action-btn text-white",attrs:{to:t.editUrl}},[e("em",{staticClass:"fa fa-pencil"}),e("br"),t._v(" "+t._s(t.$t("Edit"))+" ")]):t._e()],1),t._m(0)])]),e("div",{staticClass:"tab-pane mb-0"},[e("div",{staticClass:"tab-content fsmtabcontrolMobileView",attrs:{id:"myTabContent"}},[t._m(1),e("div",{staticClass:"tab-pane p-0 pb-2 border-0",class:{"active show":1==t.activeKey},attrs:{role:"tabpanel",id:"tab-detail-content","aria-labelledby":"tab-detail-content"}},[e("div",{staticClass:"listing"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"card mb-3 probx"},[e("div",{staticClass:"card-header"},[e("h2",[t._v(t._s(t.$t("Details")))]),t._m(2)]),e("div",{staticClass:"card-body"},t._l(t.LeftViewData,(function(a,i){return e("div",{key:i,staticClass:"panel1"},[e("div",{staticClass:"heading-border"},[e("h5",{staticClass:"h5 mb-2"},[e("span",[t._v(t._s(t.$t(a.group_name,"")))])])]),e("div",{staticClass:"row"},t._l(a.LeftViewData,(function(a,i){return e("div",{key:i,staticClass:"col-md-6 col-lg-3"},[e("div",{staticClass:"form-group"},[e("label",[e("strong",[t._v(t._s(t.$t(a.name,a.display_name))+":")]),"date"==a.dt_code||"datetime"==a.dt_code?e("span",{staticClass:"answer rightlabeltext ml-1"},[t._v(" "+t._s(t._f("formatDate")(a.value)))]):t._e(),"decimal"==a.dt_code?e("span",{staticClass:"answer rightlabeltext ml-1"},[t._v(t._s(t._f("currency")(t.isBlank(a.value)?"0.00":a.value)))]):t._e(),"date"!=a.dt_code&&"datetime"!=a.dt_code&&"decimal"!=a.dt_code&&"Lookup"!=a.picklist_options?e("span",{staticClass:"answer rightlabeltext ml-1"},[t._v(t._s(t.isBlank(a.value)?"--":a.value))]):t._e(),"date"!=a.dt_code&&"datetime"!=a.dt_code&&"decimal"!=a.dt_code&&"Lookup"==a.picklist_options?e("span",{staticClass:"answer rightlabeltext ml-1"},[t._v(t._s(t.isBlank(a.value)?"--":t.FilterDDLandNormalValue(a.value)))]):t._e()])])])})),0)])})),0)]),e("div",{staticClass:"card mb-3 probx"},[e("div",{staticClass:"card-header"},[e("h2",[t._v(t._s(t.$t("Timeline")))])]),e("div",{staticClass:"card-body"},[e("crmtimeline",{attrs:{timelinedata:t.timelinedata}})],1)])])])])]),e("div",{staticClass:"tab-pane fade p-0 pb-2 border-0",class:{"active show":2==t.activeKey},attrs:{id:"tab-notes-content",role:"tabpanel","aria-labelledby":"tab-notes-content"}},[t.noteData?e("crmnote",{attrs:{notedata:t.noteData,userid:t.userid,companyid:t.companyId,sourceid:t.$route.params.id,modulename:t.$route.params.moduleName,submodulecode:t.$route.params.subModuleCode,listtype:t.NoteListType,showNotePopUp:t.isShowNotePopup,callfrom:"quickViewAndNoteJS"}}):t._e()],1),e("div",{staticClass:"tab-pane fade p-0 pb-2 border-0",class:{"active show":3==t.activeKey},attrs:{id:"tab-attachment-content",role:"tabpanel","aria-labelledby":"tab-attachment-content"}},[e("crmattachment",{attrs:{attachmentdata:t.attachmentData,sourceid:t.$route.params.id}})],1),e("div",{staticClass:"tab-pane fade p-0 border-0 listing",class:{"active show":4==t.activeKey},attrs:{id:"tab-openactivities-content",role:"tabpanel","aria-labelledby":"tab-openactivities-content"}},[t.noRecordForTab?t._e():e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-bordered mb-0",attrs:{id:"table-openactivities-content","aria-describedby":"activitiescontent"}},[e("thead",{staticClass:"thead-bg"},[e("tr",[e("th",{attrs:{scope:"col"}},[e("span",[t._v(t._s(t.$t("Subject")))])]),e("th",{attrs:{scope:"col"}},[e("span",[t._v(t._s(t.$t("Activity"))+" "+t._s(t.$t("Type")))])]),e("th",{attrs:{scope:"col"}},[e("span",[t._v(t._s(t.$t("Activity"))+" "+t._s(t.$t("ScheduleDate")))])]),e("th",{attrs:{scope:"col"}},[e("span",[t._v(t._s(t.$t("Activity"))+" "+t._s(t.$t("OWNER")))])]),e("th",{attrs:{scope:"col"}},[e("span",[t._v(t._s(t.$t("CreatedAt")))])]),e("th",{attrs:{scope:"col"}},[e("span",[t._v(t._s(t.$t("Status")))])]),e("th",{staticClass:"text-center",attrs:{scope:"col"}},[e("span",[t._v(t._s(t.$t("Action")))])])])]),e("tbody",t._l(t.activitiesData,(function(a,i){return e("tr",{key:i},[e("td",[e("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.openActivityModal(a)}}},[t._v(t._s(a.followup_notification_subject))])]),e("td",["FollowUp"===a.activity_type?e("div",[t._v(" Follow up ")]):e("div",[t._v(" "+t._s(a.activity_type)+" ")])]),e("td",[t._v(t._s(t._f("formatDate")(a.followup_notification_schedule))+" ")]),e("td",[t._v(t._s(a.activity_owner))]),e("td",[t._v(t._s(t._f("formatDate")(a.created_at)))]),e("td",[e("span",{class:{"px-2 bg-success text-white d-block text-center":"Active"==a.status_name,"px-2 bg-danger text-white d-block text-center":"Inactive"==a.status_name}},[t._v(t._s(a.status_name))])]),e("td",{staticClass:"text-center single-action"},[e("a",{attrs:{href:"javascript:;",title:"Delete"},on:{click:function(e){return t.DeleteActivity(a)}}},[e("em",{staticClass:"fa fa-trash action-icon text-danger"})])])])})),0)])]),t.noRecordForTab?e("div",{staticClass:"text-center text-danger p-4 border no-record"},[t._v(" "+t._s(t.$t("NoRecordfound")))]):t._e()])])])])])],1),t.showAddTaskModal?e("modaltask",{attrs:{modalTaskItem:t.modalTaskItem,id:t.$route.params.id},on:{close:function(a){t.showAddTaskModal=!1,t.modalTaskItem=null}}},[e("h5",{staticClass:"modal-title",attrs:{slot:"header"},slot:"header"},[t._v(t._s(t.$t("AddTask")))])]):t._e(),t.showAddEventModal?e("modalevent",{attrs:{modalFollowUpItem:t.modalFollowUpItem,modulename:t.$route.params.moduleName,submodulecode:t.$route.params.subModuleCode,sourceid:t.$route.params.id},on:{close:function(a){t.showAddEventModal=!1,t.modalFollowUpItem=null}}},[e("h5",{staticClass:"modal-title",attrs:{slot:"header"},slot:"header"},[t._v(t._s(t.$t("FollowUp")))])]):t._e(),t.showCallModal?e("modalcall",{attrs:{modalCallItem:t.modalCallItem},on:{close:function(a){t.showCallModal=!1,t.modalCallItem=null}}},[e("h5",{staticClass:"modal-title",attrs:{slot:"header"},slot:"header"},[t._v(t._s(t.$t("Schedule"))+" "+t._s(t.$t("Call")))])]):t._e(),t.sendEmailModal?e("modalemail",{attrs:{email:t.email,userid:t.userid,companyid:t.companyId,id:t.$route.params.id,modulename:t.$route.params.moduleName,submodulecode:t.$route.params.subModuleCode,containername:t.containername,EmailInfo:t.EmailInfo},on:{close:function(a){t.sendEmailModal=!1}}},[e("h5",{staticClass:"modal-title",attrs:{slot:"header"},slot:"header"},[t._v(t._s(t.$t("Email")))])]):t._e(),t.showAttachmentModal?e("modalattachment",{attrs:{userid:t.userid,companyid:t.companyId,id:t.$route.params.id,modulename:t.$route.params.moduleName,submodulecode:t.$route.params.subModuleCode,containername:t.containername,imagesizedata:""},on:{close:function(a){t.showAttachmentModal=!1}}},[e("h5",{staticClass:"modal-title",attrs:{slot:"header"},slot:"header"},[t._v("$t('Attachments')")])]):t._e(),t.showContactModal?e("modalcontact",{attrs:{sourceid:t.$route.params.id,submodulecode:t.$route.params.subModuleCode,modulename:t.$route.params.moduleName,userinfo:t.userid,iscontactDetails:t.iscontactDetails,companyid:t.companyId,sourcename:"Lead"},on:{close:function(a){t.showContactModal=!1}}}):t._e(),t.showExistingContactModal?e("modalexistingcontact",{attrs:{sourceid:t.$route.params.id,submodulecode:t.$route.params.subModuleCode,modulename:t.$route.params.moduleName,userinfo:t.userid,companyid:t.companyId,sourcename:"Lead"},on:{close:function(a){t.showExistingContactModal=!1}}},[e("h5",{staticClass:"modal-title",attrs:{slot:"header"},slot:"header"},[t._v(t._s(t.$t("Contacts")))])]):t._e()],1)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",{staticClass:"collapse-head-btns"},[e("a",{staticClass:"collapse-btns",attrs:{href:"javascript:;"}},[e("em",{staticClass:"fa fa-angle-up text-white"})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"expand-list"},[e("a",{staticClass:"expand-list-btn justify-content-center align-items-center",attrs:{href:"javascript:;"}},[e("em",{staticClass:"icon-solid arrow-solid-left text-white",staticStyle:{"font-size":"9pt"}})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"cont_right "},[e("div",{staticClass:"bar"})])}],o=(e("99af"),e("ac1f"),e("00b4"),e("e9c4"),e("d3b7"),e("159b"),e("b0c0"),e("9769")),n=e("dd2a"),l=e("84a0"),c=e("3731"),r=e("702f"),d=e("6c06"),m=e("a672"),u=e("9dbd"),p=e("5f4d"),h=e("200d"),f=e("d7fa"),v={components:{crmtimeline:n["a"],crmnote:l["a"],crmattachment:c["a"],modaltask:r["a"],modalevent:d["a"],modalcall:m["a"],modalattachment:u["a"],modalexistingcontact:p["a"],modalcontact:h["a"],modalemail:f["a"]},data:function(){return{activeKey:1,isNotes:!1,isAttachment:!1,isTimeline:!1,isTask:!1,LeftViewData:[],RightViewData:null,activitiesData:null,productHeaders:null,noRecordForTab:!1,showAttachmentModal:!1,showExistingContactModal:!1,showContactModal:!1,showConvertLead:!1,showProductModal:!1,showAddTaskModal:!1,showAddEventModal:!1,showCallModal:!1,sendEmailModal:!1,stageName:"--",timelinedata:[],noteData:[],EmailData:[],contactsData:[],contactsHeader:[],attachmentData:[],modalItem:null,modalTaskItem:null,modalFollowUpItem:null,modalCallItem:null,modalDeleteItem:null,isView:!1,modal:null,productData:null,NoteListType:"list",SortBy:"",SortExp:"",PageNumber:1,PageSize:50,userid:null,companyId:null,stausName:null,containername:null,ApiURLEmail:"id=0&refId=".concat(this.$route.params.id,"&subModuleCode=").concat(this.$route.params.subModuleCode),ApiURL:"id=".concat(this.$route.params.id,"&moduleName=").concat(this.$route.params.moduleName,"&subModuleCode=").concat(this.$route.params.subModuleCode),maxsize:"@TALYGEN.Models.ConfigurationRepository.GetConfigurationValueByKey(companyId, userid, 'CRM', 'CRMPerFileSize')",disallowedfiletypes:"@TALYGEN.Models.ConfigurationRepository.GetConfigurationValueByKey(companyId, userid,'CRM', 'CRMDisallowedFileTypes')",isShowNotePopup:!1,editUrl:"/CRM/ManageStage/".concat(this.$route.params.id,"/").concat(this.$route.params.moduleName,"/").concat(this.$route.params.subModuleCode),isLoading:!1}},created:function(){this.userid=this.GetUserInfo.ID,this.companyId=this.GetUserInfo.CompanyId,this.containername=this.GetUserInfo.ContainerName,this.FetchData()},methods:{DisableButton:function(){var t=this;t.isTimeline=!1,t.isNotes=!1,t.isAttachment=!1,t.isTask=!1},GetLocalizedValue:function(t,a){if(this.isBlank(a)){var e=this.$t(String(t).toUpperCase());return e||/^\s*$/.test(e)?e:(e=this.$t(String(t)),e||/^\s*$/.test(e)?e:t)}e=this.$t(String(a).toUpperCase());return e||/^\s*$/.test(e)?e:(e=this.$t(String(a)),e||/^\s*$/.test(e)?e:a)},formatDate:function(t){if(t)return moment(t,String(Globalize.culture().calendar.patterns.d).toUpperCase()).format(String(Globalize.culture().calendar.patterns.d).toUpperCase())},DeleteActivityData:function(t){var a=this;t>0&&a.confirmR(a.$t("ConfirmDelete"),!0,null,(function(){var e={ids:t,moduleName:"CRM",subModuleCode:"CRM_STAGES",refCode:"DELETE_VIEW_ACTIVITY",refId:a.$route.params.id},i=JSON.stringify(e);o["a"].CommonDelete(i).then((function(t){"Success"==t.data[0].Status?(a.ShowAlert(a.$t("DeletedSuccess",[a.$t("Activity")]),"SUCCESS",!0,a.$t("Alert")),a.loadData("activities")):a.ShowAlert(a.$t("DeletDeletedErroredSuccess",[a.$t("Activity")]),"warning",!0,a.$t("Alert"))}))}))},FetchData:function(){var t=this;t.isLoading=!0,o["a"].FormLayoutView(t.ApiURL).then((function(a){t.isLoading=!1;var e=a.data.LEFTDATA;if(e=$.grep(e,(function(t,a){return"YES"==t.form_field_visibility})),null!=a.data.RIGHTDATA&&a.data.RIGHTDATA.length>0){var i=a.data.RIGHTDATA,s="";i.forEach((function(a){s=t.$options.filters.formatDate(a.Complete_datetime);var e=$.grep(t.timelinedata,(function(t,a){return t.groupKey==s}));if(0==e.length){var o=$.grep(i,(function(a,e){return t.$options.filters.formatDate(a.Complete_datetime)==s}));if(o.length>0){var n={groupKey:s,groupData:o};t.timelinedata.push(n)}}}))}else t.FetchData(),t.isLoading=!1,t.noRecordForTab=!0;if(null!=e&&e.length>0){var o=e[0].group_id;$.each(e,$.proxy((function(a,i){"stage_name"==i.name&&(t.stageName=i.value);var s=$.grep(t.LeftViewData,(function(t,a){return t.group_id==o}));if(0==s.length){var n=$.grep(e,(function(t,a){return t.group_id==o}));if(n.length>0){var l={group_id:o,group_name:n[0].group_name,LeftViewData:n};t.LeftViewData.push(l)}}o=i.group_id}),t))}setTimeout((function(){t.CheckBoxBootstrap()}),100),setTimeout((function(){t.RadioButtonBootstrap()}),500)}))},openAttachmentDialogue:function(){this.isShowNoteDialogue=!this.isShowNoteDialogue},openAddTaskModel:function(){this.showAddTaskModal=!this.showAddTaskModal},openAddNewEvent:function(){this.showAddEventModal=!this.showAddEventModal},openCallEvent:function(){this.showCallModal=!this.showCallModal},openEmailModal:function(t){this.sendEmailModal=!0,this.modalItem=t},openActivityModal:function(t){"Task"==t.activity_type?(this.showAddTaskModal=!0,this.modalTaskItem=t):"Follow Up"==t.activity_type||"FollowUp"==t.activity_type?(this.showAddEventModal=!0,this.modalFollowUpItem=t):"Call"==t.activity_type&&(this.showCallModal=!0,this.modalCallItem=t)},FilterDDLandNormalValue:function(t){if(!(t&&t.length>0))return"";try{return JSON.parse(t)[0].name}catch(a){return t}},DeleteActivity:function(t){this.modalDeleteItem=t,this.DeleteActivityData(this.modalDeleteItem.followup_notification_id)},loadData:function(t,a){var e=this;if(e.DisableButton(),"notes"==t?(e.isNotes=!0,e.activeKey=2,a&&"savenote"==a&&(e.isShowNotePopup=!1)):"attachments"==t?(e.isAttachment=!0,e.activeKey=3):"activities"==t&&(e.isTask=!0,e.isTimeline=!0,e.activeKey=4),""!=t&&null!=t){var i="";"attachments"==t?o["a"].AttachmentListing(e.ApiURL).then((function(t){null!=t.data?(e.attachmentData=t.data.data,setTimeout((function(){e.CheckBoxBootstrap()}),100),e.noRecordForTab=!1):e.noRecordForTab=!0})):"timeline"==t?(i="id=".concat(e.$route.params.id,"&subModuleCode=").concat(e.$route.params.subModuleCode),o["a"].TimelineListing(i).then((function(t){if(null!=t.data){e.timelinedata=[];var a=t.data.data,i="";$.each(a,$.proxy((function(t,s){i=e.$options.filters.formatDate(s.Complete_datetime);var o=$.grep(e.timelinedata,(function(t,a){return t.groupKey==i}));if(0==o.length){var n=$.grep(a,(function(t,a){return e.$options.filters.formatDate(t.Complete_datetime)==i}));if(n.length>0){var l={groupKey:i,groupData:n};e.timelinedata.push(l)}}}),e)),setTimeout((function(){e.CheckBoxBootstrap()}),100),e.noRecordForTab=!1}else e.noRecordForTab=!0})),e.activeKey=1):"notes"==t?(this.noteData=[],o["a"].NoteListing(e.ApiURL).then((function(t){null!=t.data&&t.data.data.length>0?(e.noteData=t.data.data,setTimeout((function(){e.CheckBoxBootstrap()}),100),e.noRecordForTab=!1):e.noRecordForTab=!0}))):"activities"==t&&o["a"].ActivityListing(e.ApiURL).then((function(t){null!=t.data&&t.data.data.length>0?(e.activitiesData=t.data.data,setTimeout((function(){e.CheckBoxBootstrap()}),100),setTimeout((function(){e.ResponsiveDataTable("table-openactivities-content")}),500),e.noRecordForTab=!1):(e.noRecordForTab=!0,e.contactsData=null)}))}},openShowNotePopup:function(){var t=this;"undefined"===typeof t.checkForAdditionalPermission||t.checkForAdditionalPermission("AddNote")?(t.isShowNotePopup=!0,$("#tab-notes").trigger("click"),t.loadData("notes")):this.ShowAlert(t.$t("additionalOwnerAuthorityWarning"),"warning",!0,t.$t("Alert"))},openCRMAttachmentModal:function(){"undefined"===typeof this.checkForAdditionalPermission||this.checkForAdditionalPermission("AddAttachment")?this.showAttachmentModal=!this.showAttachmentModal:alertR(this.$t("additionalOwnerAuthorityWarning"),!0,this.$t("Alert"))},downloadAttachment:function(t){}},updated:function(){var t=this;setTimeout((function(){t.setHeaderForSelectedTab()}),500)}},_=v,b=e("2877"),C=Object(b["a"])(_,i,s,!1,null,null,null);a["default"]=C.exports}}]);
//# sourceMappingURL=ViewStageDetails.js.map