(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["CRMManageAccount"],{"97c3":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"main-content"},[e("div",{attrs:{id:"divMainLeadData"}},[e("loader",{attrs:{"is-visible":t.isLoading}}),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 padding-t_8"},[e("div",{staticClass:"theme-primary partition-full"},[e("span",{staticClass:"p-name text-white"},[t._v(t._s(t.$t("Account"))+" "+t._s(t.$t("Information")))]),e("span",{staticClass:"p-actions float-right"},[e("RouterLink",{staticClass:"p-action-btn text-white float-right",attrs:{to:"/CRM/Accounts",title:"",id:"backtolist","data-original-title":t.$t("BacktoList")}},[e("em",{staticClass:"fa fa-angle-double-left pr-2"}),e("br"),t._v(t._s(t.$t("BacktoList")))])],1)])])]),e("div",{staticClass:"border p-3"},[e("Form",{ref:"form",scopedSlots:t._u([{key:"default",fn:function(a){var n=a.valid,o=a.errors;return[e("DynamicForm",{attrs:{schema:t.GroupBy,dateformat:t.dateformat,subModuleCode:"ManageAccount"},on:{openaddIndustrypopup:t.openaddIndustrypopup,FillDropdown:t.FillDropdown,onSearchDDL:t.onSearch,setSelectedValue:t.setSelectedValue}}),t.divchkhide?e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left my-2"},[e("div",{staticClass:"form-group"},[e("div",{staticClass:"float-left"},[e("input",{staticClass:"ml-3",attrs:{id:"chkcontactinfo",value:"1",type:"checkbox"},on:{change:function(a){return t.ChkContactbox(a)}}})]),e("div",{staticClass:"float-left pt-1"},[e("span",{staticStyle:{"font-weight":"500"}},[t._v("Tick to add Contact.")])])])])]):t._e(),t.IscheckContact?e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12 mt-4"},[e("div",{staticClass:"heading-border mb-2"},[e("h5",{staticClass:"h5"},[e("span",[t._v(t._s(t.$t("ContactInformation")))])])])]),e("div",{staticClass:"col-sm-12 col-md-12 float-left col-lg-6 col-xl-6"},[e("div",{staticClass:"form-group"},[e("label",[t._v(t._s(t.$t("FirstName"))+":"),e("span",{staticClass:"text-danger"},[t._v("*")])]),e("Field",{attrs:{name:"FirstName",rules:{required:!0},label:"First Name"},scopedSlots:t._u([{key:"default",fn:function(a){var n=a.errors,o=a.touched,i=a.invalid;return[e("input",{directives:[{name:"model",rawName:"v-model",value:t.txtfirstname,expression:"txtfirstname"}],class:{"form-control":!0,"is-invalid":o&&i},attrs:{type:"text",name:"FirstName",maxlength:"100"},domProps:{value:t.txtfirstname},on:{input:function(a){a.target.composing||(t.txtfirstname=a.target.value)}}}),e("span",{staticClass:"invalid-feedback",attrs:{name:"FirstName"}},[t._v(t._s(n[0]))])]}}],null,!0)})],1)]),e("div",{staticClass:"col-sm-12 col-md-12 float-left col-lg-6 col-xl-6"},[e("div",{staticClass:"form-group"},[e("label",[t._v(t._s(t.$t("LastName"))+":"),e("span",{staticClass:"text-danger"},[t._v("*")])]),e("Field",{attrs:{name:"LastName",rules:{required:!0},label:"Last Name"},scopedSlots:t._u([{key:"default",fn:function(a){var n=a.errors,o=a.touched,i=a.invalid;return[e("input",{directives:[{name:"model",rawName:"v-model",value:t.txtlastname,expression:"txtlastname"}],class:{"form-control":!0,"is-invalid":o&&i},attrs:{type:"text",name:"LastName",maxlength:"100"},domProps:{value:t.txtlastname},on:{input:function(a){a.target.composing||(t.txtlastname=a.target.value)}}}),o&&i?e("span",{staticClass:"invalid-feedback",attrs:{name:"LastName"}},[t._v(t._s(n[0]))]):t._e()]}}],null,!0)})],1)]),e("div",{staticClass:"col-sm-12 col-md-12 float-left col-lg-6 col-xl-6"},[e("div",{staticClass:"form-group"},[e("label",[t._v(t._s(t.$t("Email"))+":"),e("span",{staticClass:"text-danger"},[t._v("*")])]),e("Field",{attrs:{name:"Email",rules:{required:!0,email:!0},label:"Email"},scopedSlots:t._u([{key:"default",fn:function(a){var n=a.errors,o=a.touched,i=a.invalid;return[e("input",{directives:[{name:"model",rawName:"v-model",value:t.txtemailid,expression:"txtemailid"}],class:{"form-control":!0,"is-invalid":o&&i},attrs:{type:"text",id:"Emailid",name:"Email"},domProps:{value:t.txtemailid},on:{input:function(a){a.target.composing||(t.txtemailid=a.target.value)}}}),e("span",{staticClass:"invalid-feedback",attrs:{name:"Email"}},[t._v(t._s(n[0]))])]}}],null,!0)})],1)]),e("div",{staticClass:"col-sm-12 col-md-12 float-left col-lg-6 col-xl-6"},[e("div",{staticClass:"form-group"},[e("label",[t._v(t._s(t.$t("Mobile"))+": ")]),e("vue-tel-input",{attrs:{id:"txtmobile",mode:"international",name:"txtmobile"},on:{input:t.onInputMobilePhone},model:{value:t.txtmobile,callback:function(a){t.txtmobile=a},expression:"txtmobile"}}),e("span",{staticClass:"invalid-feedback d-block",attrs:{name:t.txtmobile}},[t._v(t._s(o[0]))]),t.phoneError?e("span",{staticClass:"invalid-feedback d-block"},[t._v("Enter valid number.")]):t._e()],1)])]):t._e(),e("div",{staticClass:"row flex-row-reverse mt-2"},[e("div",{staticClass:"col-lg-6 text-right"},[e("a",{staticClass:"btn btn-success formbtn",class:{disabled:!1},attrs:{href:"javascript:;",title:"Save"},on:{click:function(a){return t.SubmitData(n,o)}}},[e("em",{staticClass:"fa fa-save pr-2"}),t._v(t._s(t.$t("Save"))+" ")]),t._v("  "),e("a",{staticClass:"btn btn-danger",attrs:{href:"javascript:void(0)",title:"Cancel"},on:{click:t.onCancel}},[e("em",{staticClass:"fa fa-close pr-2"}),t._v(t._s(t.$t("Cancel"))+" ")])]),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"py-2"},[e("small",{staticClass:"text-danger"},[t._v(t._s(t.$t("MandatoryString")))])])])]),t.showaddindustryModal?e("modaladdindustry",{on:{close:function(a){t.showaddindustryModal=!1},updatedata:t.UpdateSelectJson}}):t._e()]}}])})],1)],1)])},o=[],i=e("53ca"),l=e("c7eb"),s=e("1da1"),c=(e("b0c0"),e("99af"),e("4de4"),e("d3b7"),e("498a"),e("a15b"),e("3ca3"),e("ddb0"),e("9861"),e("ac1f"),e("841c"),e("c740"),e("e9c4"),e("1276"),e("159b"),e("9769")),r=e("5ba0"),u=e("4dad"),d={components:{DynamicForm:r["a"],modaladdindustry:u["a"]},data:function(){return{isLoading:!1,value:"",LeadData:null,LeadOwner:null,GroupBy:[],Channel:null,IndustryType:null,Status:null,ApiURL:"moduleName=CRM&subModuleCode=CRM_ACCOUNTS&langCode=en",options:null,selected:!1,selectoptions:[],submited:!1,IscheckContact:!1,showaddindustryModal:!1,IndustryItemObject:null,cityItemObject:null,showaddcityModal:!1,txtfirstname:"",txtlastname:"",txtemailid:"",txtmobile:"",accountID:this.$route.params.id,divchkhide:!1,CountryData:null,phoneList:[],name:null,Id:null,dateformat:null,phoneError:!1}},created:function(){this.name=this.GetUserInfo.Name,this.Id=this.GetUserInfo.ID,this.dateformat=this.GetUserInfo.DateFormat;var t=this,a=this.$route.params.id;a=""==a?0:a;0==a&&(t.divchkhide=!0),t.FetchData()},methods:{onInputMobilePhone:function(t,a,e){t&&(a&&(null===a||void 0===a?void 0:a.formatted.length)>0&&(null===a||void 0===a||!a.valid||void 0==(null===a||void 0===a?void 0:a.valid))?this.phoneError=!0:null!==a&&void 0!==a&&a.formatted&&null!==a&&void 0!==a&&a.valid&&(t=a.formatted,this.fieldInfo.value=a.formatted,this.phoneError=!1))},onCancel:function(){this.$router.push({name:"CRMAccounts"})},IsPaste:function(t,a){var e=["commission_percentage","txtmobile","annual_revenue"];e.indexOf(a)>-1&&(IsNumeric(t.clipboardData.getData("text"))||t.preventDefault())},isNumber:function(t,a){var e=["commission_percentage","txtmobile"];if(e.indexOf(a)>-1){var n=t.which?t.which:t.keyCode;if(!(n>31&&(n<48||n>57)&&46!==n||t.currentTarget.value.length>15))return!0;t.preventDefault()}},ChkContactbox:function(t){var a=this;if(a.IscheckContact=$(t.target).prop("checked"),a.IscheckContact||(a.txtfirstname="",a.txtlastname="",a.txtemailid="",a.txtmobile=""),a.IscheckContact)a.$route.params.id},onKeyDown1:function(){ajaxRequestComplete=!0},FillDropdown:function(){var t=Object(s["a"])(Object(l["a"])().mark((function t(a,e){var n,o,i,s,r,u;return Object(l["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=this,n.Loading=!0,o="",i="",s="","status_id"==a.name){t.next=15;break}if(s="account_country"==a.name?"ACCOUNT_STATE":"",r=a.name,o=a.value,""==o){t.next=13;break}return u="id=&moduleName=CRM&type=".concat(s,"&refId=").concat(o),t.next=13,c["a"].getDDLData(u+"&search="+escape(i)).then((function(t){n.Loading=!1;var a=[];null!=t.data&&(a=t.data.DATA),$.each(n.GroupBy,(function(t,e){$.each(e.Data,(function(t,e){("account_state"==e.name&&"account_country"==r||"account_city"==e.name&&"account_state"==r)&&(e.select_options=a)}))}))}));case 13:t.next=16;break;case 15:"status_id"==a.name&&$.each(this.GroupBy,(function(t,a){$.each(a.Data,(function(t,a){"account_state"!=a.name&&"account_city"!=a.name||(a.is_required=!1)}))}));case 16:case"end":return t.stop()}}),t,this)})));function a(a,e){return t.apply(this,arguments)}return a}(),openaddIndustrypopup:function(t){this.IndustryItemObject=t,this.showaddindustryModal=!0},openaddcitypopup:function(t){this.cityItemObject=t,this.showaddcityModal=!0},GetValidation:function(t){var a={};return t.is_required&&(a["required"]=!0),t.length>0&&(a["max"]=t.length),"email"==t.validation_type&&(a["email"]=!0),"date"==t.dt_code&&(a["date_format"]=String(Globalize.culture().calendar.patterns.d).toUpperCase()),"decimal"==t.dt_code&&(a["decimal"]=2),"int"!=t.dt_code&&"bigint"!=t.dt_code||(a["numeric"]=!0),"url"==t.dt_code&&(a["url"]="require_protocol"),"commission_percentage"==t.name&&(a["min_value"]=0,a["max_value"]=100,a["decimal"]=2),"account_zip_code"==t.name&&(a["numeric"]=!0,a["min"]=5,a["max"]=15),"employees"==t.name&&(a["numeric"]=!0),"account_city"==t.name&&(a["regex"]=/^[a-zA-Z ]*$/),"website"==t.name&&(a["regex"]=/^(https?: \/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})*$/),a},SubmitData:function(t){var a=this,e="",n="",o="",l="",s="",r="";a.$refs.form.validate().then((function(t){if(a.vSelectValidate=!0,t){a.isLoading=!0;var u=a.LeadData,d=[],m=[],p=[],v=0;$.each(u,(function(t,c){var u={field_name:c.name,required:c.is_required,length:c.length,type:c.validation_type};if("account_name"==c.name&&(r=c.value),"account_owner"==c.name&&c.value,"company_name"==c.name&&(e=c.value),"account_address"==c.name&&(n=c.value),"account_address2"==c.name&&(o=c.value),"account_city"==c.name&&(l=c.value),"account_zip_code"==c.name&&(s=c.value),"phone"==c.name){var f=a.phoneList.filter((function(t){return t.field_id==c.custom_field_id}));f.length>0&&(c.value=f[0].value,!f[0].isValid&&$.trim(c.value).length>0&&($("#spanPhone").show(),v++))}var _="account_id"==c.name?a.accountID:c.value;if("date"==c.dt_code&&(_=c.value),"checkbox"==c.dt_code){var h=c.select_value.filter((function(t){return null!=t&&""!=t}));_=h.join(",")}if("select"==c.dt_code)try{_="object"===Object(i["a"])(_)&&null!==_?_.value:_}catch(g){}var C={field_name:c.name,field_value:_,custom_field_id:c.custom_field_id};d.push(C),m.push(u),p.push(w)}));var f=new URLSearchParams(window.location.search),_=f.get("id")||0;f.get("AccountCode");null==_&&(_=0);var h=$('select[name="account_state"] option:selected').text(),C=e+" "+n+" "+o+" "+l+" "+("Select"==h?"--":h)+" "+s,g=a.txtfirstname+" "+a.txtlastname+" "+n+" "+o+" "+l+" "+("Select"==h?"--":h)+" "+s;if(0==_&&""==r){var y=""!=e?$.trim(C):$.trim(g),b=d[d.findIndex((function(t){return"account_name"==t.field_name}))];b.field_value=y}if(a.IscheckContact){var x=a.phoneList.filter((function(t){return"txtmobile"==t.field_id}));x.length>0&&(a.txtmobile=x[0].value,x[0].isValid||($("#spantxtmobile").show(),v++))}if(v>0)return!1;var w={first_name:a.txtfirstname,last_name:a.txtlastname,email_id:a.txtemailid,mobile_number:a.txtmobile},D=null;D=a.IscheckContact?{data:d,validation:m,accountcontact:w}:{data:d,validation:m};var S=JSON.stringify(D);c["a"].SaveAccountInfo(S).then((function(t){a.isLoading=!1,"1"==t.data[0].Code?(a.accountID>0?a.ShowAlert(a.$t("UpdatedSuccess",[a.$t("Account")]),"success",!0,a.$t("Alert")):a.ShowAlert(a.$t("AddedSuccess",[a.$t("Account")]),"success",!0,a.$t("Alert")),a.$router.push({name:"CRMAccounts"})):"2"==t.data[0].Code?a.ShowAlert(a.$t("Account name already exist"),"warning",!0,a.$t("Alert")):a.ShowAlert(a.$t("AddedError",[a.$t("Account")]),"failure",!0,a.$t("Alert"))}))}}))},UpdateSelectJson:function(t,a){$.each(this.GroupBy,(function(e,n){$.each(n.Data,(function(e,n){n.name==t&&(n.select_options=a)}))}))},FetchData:function(){var t=this;t.isLoading=!0;var a="0"==t.accountID?"":t.accountID,e=[{id:t.$route.params.AccountId,name:t.$route.params.AccountCode}],n=encodeURIComponent(JSON.stringify(e));c["a"].getFormLayout(t.ApiURL+"&id="+a+"&otherData="+n).then((function(e){if(t.isLoading=!1,t.LeadData=e.data.data,null!=t.LeadData&&t.LeadData.length>0){var n=t.LeadData[0].group_id;$.each(t.LeadData,$.proxy((function(a,e){n=e.group_id;var o=new URLSearchParams(window.location.search),i=o.get("id")||0,l=o.get("AccountCode")||"";if("industry_name"==e.name&&(e.isPlusIcon=!0),null==i&&(i=0),"date"==e.dt_code&&(e.value=""==e.value?null:e.value),0==i&&""!=l&&"account_name"==e.name&&(e.is_required=!0),"checkbox"==e.dt_code&&(e.select_value=e.value.split(",")),"account_type"==e.name&&0==t.accountID&&(e.value=t.$route.params.AccountId),"account_owner"==e.name&&(""==e.value?(e.select_value=t.name,e.value={name:e.select_value,value:t.Id,first_value:null,second_value:null},e.select_options=[{name:e.select_value,value:t.Id,first_value:null,second_value:null}]):e.select_options=t.MakeNormalArray(e.select_options)),"status_id"==e.name&&e.value,"account_state"!=e.name&&"account_city"!=e.name||(e.is_required=!1,e.select_options=null),"account_country"==e.name&&(t.CountryData=e),"account_country"==e.name&&t.accountID>0)if(""==e.value){var s=JSON.parse(t.CountryData.select_options);$.each(s,(function(a,e){"United States"==e.name&&(t.CountryData.value=e.value)})),t.FillDropdown(t.CountryData)}else t.FillDropdown(e,"Edit");"account_state"==e.name&&t.accountID>0&&t.FillDropdown(e,"Edit"),"phone"==e.name&&e.value;var c=$.grep(t.GroupBy,(function(t,a){return t.group_id==n}));if(0==c.length){var r=$.grep(t.LeadData,(function(t,a){return t.group_id==n}));if(t.accountID>0&&$.each(r,(function(a,e){"custom"==e.dropdown_type&&"Lookup"==e.picklist_options?(e.select_options=t.MakeNormalArray(e.select_options),e.select_value=e.select_options,null!=e.select_options&&e.select_options.length>0&&(e.value=e.select_options[0])):"decimal"==e.dt_code&&"YES"==e.form_field_visibility&&e.value>0?e.value=parseFloat(e.value,10):"date"==e.dt_code&&(e.value=e.value)})),r.length>0){var u={group_id:n,group_name:r[0].group_name,group_display_name:r[0].group_display_name,Data:r};t.GroupBy.push(u)}}}),t)),setTimeout((function(){t.CheckBoxBootstrap()}),100),setTimeout((function(){var e=JSON.parse(t.CountryData.select_options);""==a&&($.each(e,(function(a,e){"United States"==e.name&&(t.CountryData.value=e.value)})),t.FillDropdown(t.CountryData))}),300);var o={};t.LeadData.forEach((function(t){""!=t.astype&&"YES"==t.form_field_visibility&&(o[t.name]=t.value)}))}}))},onSearch:function(t,a,e){this.searchSelectData(t,this,a,e)},searchSelectData:function(t,a,e,n){this.ShowSearchData(t,a,e,n)},ShowSearchData:function(t,a,e,n){"undefined"==typeof n&&(n=0);var o="id=&moduleName=CRM&type="+e.field_code;"fill"!=e.dependent_type&&(o+="&refId="+n),c["a"].getDDLData(o+"&search="+escape(t)).then((function(t){var a=[];return t.data,""!=t.data&&(a=t.data),e.select_options=a.DATA,e.select_options}))},setSelectedValue:function(t,a){var e=this;try{Array.isArray(a)?t.value=a[0]:("account_owner"==t.name?e.ShowSearchData("",e,t,""):t.has_dependent>0&&$.each(e.GroupBy,$.proxy((function(n,o){$.each(o.Data,(function(n,o){o.parent_id==t.custom_field_id&&"fill"==o.dependent_type&&e.ShowSearchData("",e,o,a.value)}))}),this)),t.value=a)}catch(n){}}}},m=d,p=e("2877"),v=Object(p["a"])(m,n,o,!1,null,null,null);a["default"]=v.exports}}]);
//# sourceMappingURL=CRMManageAccount.js.map