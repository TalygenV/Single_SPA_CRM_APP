let tourData = [];
let touritem = {};

touritem["User/Dashboard"] = {
  displayName: "Dashboard",
  items: [
    {
      selector: "a#navbarDropdownPortfolio",
      step: 1,
      title: "FullMenu",
      content: "FullMenuContent",
    },
    {
      selector: "div#fullMenuUl",
      step: 2,
      title: "FullMenu",
      content: "FullMenuContent",
    },
    {
      selector: "ul.my-account",
      step: 3,
      title: "ProflieMenu",
      content: "ProflieMenuContent",
    },
    {
      selector: "#DivTimerContent",
      step: 4,
      title: "TimerIcon",
      content: "TimerIconContent",
    },
    {
      selector: "li.wizardnew",
      step: 5,
      title: "WizardIcon",
      content: "WizardIconContent",
    },
    {
      selector: "#anceditMyDashboard",
      step: 6,
      title: "MyShortcuts",
      content: "MyShortcutsContent",
    },
    {
      selector: ".rightsideicon",
      step: 7,
      title: "MyShortcuts",
      content: "MyShortcutsContent",
    },
    {
      selector: "#ancAddGroupMyDashboard",
      step: 8,
      title: "AddNewGroup",
      content: "AddNewGroupContent",
    },
    {
      selector: ".clsdashboardgroup ul.shortcuts-menu li:first-child",
      step: 9,
      title: "ShortcutLink",
      marked: true,
      content: "ShortcutLinkContent",
    },
  ],
};
touritem["User/Home"] = {
  displayName: "Home",
  items: [
    {
      selector: "#headingOne1",
      step: 1,
      title: "Inbox",
      content: "InboxContent",
    },
    {
      selector: "#headingTwo2",
      step: 2,
      title: "Activities",
      content: "ActivitiesContent",
    },
    {
      selector: "#headingThree2",
      step: 3,
      title: "Bookmarks",
      content: "BookmarksContent",
    },
    {
      selector: "#divInboxSibling",
      step: 4,
      title: "Reports",
      content: "ReportsContent",
    },
    {
      selector: "#hlkAddMoreReports",
      step: 5,
      title: "AddMore",
      content: "AddMoreContent",
    },
  ],
};
touritem["Project/Index"] = {
  displayName: "Project",
  items: [
    {
      selector: "li.three_wid",
      step: 1,
      title: "Widgets",
      content: "SummaryWidgets",
    },
    {
      selector: "#accordionEx",
      step: 2,
      title: "Filters",
      content: "SearchMultipleFiltersProject",
    },
    {
      selector: "#PAdd",
      step: 3,
      title: "AddNewProject",
      content: "SummaryWidgetsContent",
    },
    {
      selector: "#temp_0",
      step: 4,
      title: "AddNewProject",
      content: "SummaryTemplateContent",
    },
    {
      selector: "#btnNext",
      step: 5,
      title: "Next",
      content: "SummaryTemplateNextContent",
    },
    {
      selector: "#SProjectDetailTitleSpan",
      step: 6,
      title: "SummaryProjectDetailTitle",
      content: "SummaryProjectDetailContent",
    },
    {
      selector: "a#aAddUser",
      step: 7,
      title: "AddTeamMembers",
      content: "AddTeamMembersContent",
    },
    {
      selector: "#SummaryProjectSaveContent_a",
      step: 8,
      title: "FinishSetup",
      content: "FinishSetupContent",
    },
  ],
};
touritem["CRM/Index"] = {
  displayName: "CRM",
  items: [
    {
      selector: "#crmleftsearch",
      step: 1,
      title: "SearchFilters",
      content: "SearchLeadFilterContent",
    },
    {
      selector: "#crmlistingStatus_span",
      step: 2,
      title: "Status" + " " + "Update",
      content: "UpdateLeadStatusContent",
    },
    {
      selector: "#addLead_a",
      step: 3,
      title: "AddLead",
      content: "AddLeadContent",
    },
    {
      selector: "#viewLeadeContent_a",
      step: 4,
      title: "ViewDetail",
      content: "ViewLeadContent",
    },
  ],
};
touritem["CRM/LeadList"] = {
  displayName: "Lead List",
  items: [
    {
      selector: "#crmleftsearch",
      step: 1,
      title: "SearchFilters",
      content: "SearchLeadFilterContent",
    },
    {
      selector: "#crmlistingStatus_span",
      step: 2,
      title: "Status" + " " + "Update",
      content: "UpdateLeadStatusContent",
    },
    {
      selector: "#addLead_a",
      step: 3,
      title: "AddLead",
      content: "AddLeadContent",
    },
    {
      selector: "#viewLeadeContent_a",
      step: 4,
      title: "ViewDetail",
      content: "ViewLeadContent",
    },
  ],
};
touritem["Expenses/Index"] = {
  displayName: "Expenses",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "SearchFilters",
      content: "SearchFiltersContent",
    },
    {
      selector: ".addExpense_Span",
      step: 2,
      title: "AddExpenses",
      content: "AddExpensesContent",
    },
    {
      selector: ".ddlupdatestatus",
      step: 3,
      title: "ManageTicketStatus",
      content: "ManageTicketStatusContent",
    },
    {
      selector: "#aCommanApproval",
      step: 4,
      title: "SendExpense",
      content: "SendExpenseContent",
    },
  ],
};
touritem["Expenses/Add"] = {
  displayName: "Add Expense",
  items: [
    {
      selector: ".saveSendforApproval",
      step: 1,
      title: "ExpenseAdd",
      content: "ExpenseAddContent",
    },
  ],
};
touritem["Expenses/Import"] = {
  displayName: "Import Expense",
  items: [
    {
      selector: ".downloadExpense",
      step: 1,
      title: "SampleFile",
      content: "SampleFileContent",
    },
    {
      selector: ".expenseFile",
      step: 2,
      title: "ChooseExpenseFile",
      content: "ChooseExpenseFileContent",
    },
  ],
};
touritem["Expenses/BulkUpload"] = {
  displayName: "Bulk Upload Expense",
  items: [
    {
      selector: "#aValidate",
      step: 1,
      title: "ExpenseDetails",
      content: "ExpenseDetailsContent",
    },
  ],
};
touritem["ExpenseApproval/Index"] = {
  displayName: "Expense Approval",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "SearchFilters",
      content: "SearchFiltersContent",
    },
    {
      selector: "#SendForApprove",
      step: 2,
      title: "approveExpense",
      content: "approveExpenseContent",
    },
    {
      selector: "#SendForReject",
      step: 3,
      title: "RejectExpense",
      content: "RejectExpenseContent",
    },
  ],
};
touritem["ClientBill/Index"] = {
  displayName: "Client Bill",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "SearchFilters",
      content: "SearchFilterInvoiceContent",
    },
    {
      selector: ".manualInvoice_a",
      step: 2,
      title: "Manual" + " " + "Invoice",
      content: "ManualInvoiceContent",
    },
    {
      selector: ".InvoiceStatus_Span",
      step: 3,
      title: "Update" + " " + "InvoiceStatus",
      content: "InvoiceStatusContent",
    },
  ],
};
touritem["Training/Index"] = {
  displayName: "Training",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "Search" + " " + "Filters",
      content: "Search your trainings using the search filters.",
    },
    {
      selector: "#ancCreateTraining",
      step: 2,
      title: "AddTraining",
      content: "AddTrainingContent",
    },
  ],
};
touritem["HR/LeaveList"] = {
  displayName: "Leave List",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "Search" + " " + "Filters",
      content: "WalkHRLeaveSearchContent",
    },
    {
      selector: ".WalkHRLeaveWidgetContent_ul",
      step: 2,
      title: "Widgets",
      content: "WalkHRLeaveWidgetContent",
    },
    {
      selector: ".leaveaction_span",
      step: 3,
      title: "Search" + " " + "Filters",
      content: "WalkHRLeaveSearchContent",
    },
  ],
};
touritem["HR/LeaveTypeListing"] = {
  displayName: "Leave Type Listing",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "Search" + " " + "Filters",
      content: "WalkHRLeaveTypeSearchContent",
    },
    {
      selector: ".addLeaveType_a",
      step: 2,
      title: "Add" + " " + "Leave" + " " + "Type",
      content: "WalkHRLeaveTypeAddContent",
    },
  ],
};
touritem["HR/index"] = {
  displayName: "HR",
  items: [
    {
      selector: "#txtLeaveType",
      step: 1,
      title: "Add" + " " + "Leave" + " " + "Type",
      content: "WalkHRLeaveTypeAddPageContent",
    },
  ],
};
touritem["LeaveApproval/Index"] = {
  displayName: "Leave Approval",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "Search" + " " + "Filters",
      content: "LeaveApproveRejectSearchContent",
    },
    {
      selector: ".LeaveApproveRejectContent_span",
      step: 2,
      title: "Approve" + " " + "And" + " " + "Reject",
      content: "LeaveApproveRejectContent",
    },
  ],
};
touritem["CRM/ManageLead"] = {
  displayName: "Manage Lead",
  items: [
    {
      selector: ".AddLeadDetail_a",
      step: 1,
      title: "enter" + " " + "LeadDetail",
      content: "AddLeadDetailContent",
    },
  ],
};
touritem["CRM/DealListing"] = {
  displayName: "Deal Listing",
  items: [
    {
      selector: "#crmleftsearch",
      step: 1,
      title: "SearchFilters",
      content: "SearchDealFilterContent",
    },
    {
      selector: "#crmlistingStatus_span",
      step: 2,
      title: "Status" + " " + "Update",
      content: "UpdateDealStatusContent",
    },
    {
      selector: "#AddDealContent_a",
      step: 3,
      title: "Add" + " " + "Deal",
      content: "AddDealContent",
    },
    {
      selector: "#ViewDealDetailContent_a",
      step: 4,
      title: "ViewDetail",
      content: "ViewDealDetailContent",
    },
  ],
};
touritem["ApprovalChain/Index"] = {
  displayName: "Approval Chain",
  items: [
    {
      selector: ".accordion",
      step: 1,
      title: "Search" + " " + "Filters",
      content: "WalkApprovalChainSearchContent",
    },
    {
      selector: "#ancCreateDepartment",
      step: 2,
      title: "WalkApprovalChainAddTitle",
      content: "WalkApprovalChainAddContent",
    },
  ],
};
touritem["CRM/ViewDealDetails"] = {
  displayName: "View Deal Details",
  items: [
    {
      selector: ".div-click-event",
      step: 1,
      title: "Deal" + " " + "Management",
      content: "ManageDealContent",
    },
    {
      selector: ".wizard",
      step: 2,
      title: "Deal" + " " + "Stages",
      content: "ManageDealStageContent",
    },
  ],
};
touritem["CRM/ManageAccount"] = {
  displayName: "Manage Account",
  items: [
    {
      selector: ".formbtn",
      step: 1,
      title: "WalkApprovalChainAddButtonTitle" + " " + "Stages",
      content: "AddAccountDetailContent",
    },
  ],
};
touritem["ApprovalGroup/Index"] = {
  displayName: "Approval Group",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "Search" + " " + "Filters",
      content: "WalkApprovalGroupSearchContent",
    },
    {
      selector: "#ancCreateDepartment",
      step: 2,
      title: "Add" + " " + "Approval" + " " + "Group",
      content: "WalkApprovalGroupAddContent",
    },
  ],
};
touritem["ApprovalRule/Index"] = {
  displayName: "Approval Rule",
  items: [
    {
      selector: "#accordionEx",
      step: 1,
      title: "Search" + " " + "Filters",
      content: "WalkApprovalRuleSearchContent",
    },
    {
      selector: "#ancCreateExp",
      step: 2,
      title: "Add" + " " + "Rule",
      content: "WalkApprovalRuleAddClickContent",
    },
  ],
};
touritem["ApprovalRule/Add"] = {
  displayName: "Add Approval Rule",
  items: [
    {
      selector: "#divApprovalType",
      step: 1,
      title: "Module" + " " + "selections",
      content: "WalkApprovalRuleChooseModuleContent",
    },
    {
      selector: ".divUseSequence_a",
      step: 2,
      title: "UseSequence",
      content: "WalkApprovalRuleMarkYesContent",
    },
  ],
};
touritem["CRM/ItemTypeListing"] = {
  displayName: "Item Type Listing",
  items: [
    {
      selector: ".additean_a",
      step: 1,
      title: "AddItemType",
      content: "AddItemTypeContent",
    },
    {
      selector: ".divUseSequence_a",
      step: 2,
      title: "SearchFilters",
      content: "SearchItemTypeFilterContent",
    },
    {
      selector: ".tourguide_a",
      step: 3,
      title: "View" + " " + "Detail",
      content: "ViewItemtypeDetailContent",
    },
    {
      selector: ".tourguide_aa",
      step: 4,
      title: "Edit" + " " + "Detail",
      content: "EditItemtypeContent",
    },
  ],
};
touritem["CRM/PurchaseOrderListing"] = {
  displayName: "Purchase Order Listing",
  items: [
    {
      selector: "#crmleftsearch",
      step: 1,
      title: "SearchFilters",
      content: "SearchPurchaseFilterContent",
    },
    {
      selector: "#addPurchaseOrder_a",
      step: 2,
      title: "New" + " " + "PurchaseOrderWithoutRef",
      content: "AddPurchaseOrderContent",
    },
    {
      selector: "#viewLeadeContent_a",
      step: 3,
      title: "ViewDetail",
      content: "ViewPurchaseOrderContent",
    },
  ],
};
touritem["CRM/ItemListing"] = {
  displayName: "Item Listing",
  items: [
    {
      selector: "#AddProducts",
      step: 1,
      title: "AddItem",
      content: "AddItemContent",
    },
    {
      selector: ".tour_search",
      step: 2,
      title: "SearchFilters",
      content: "SearchItemFilterContent",
    },
    {
      selector: ".tour_viewitem",
      step: 3,
      title: "View" + " " + "Detail",
      content: "ViewItemDetailContent",
    },
    {
      selector: ".tour_edititem",
      step: 4,
      title: "View" + " " + "Detail",
      content: "EditItemContent",
    },
  ],
};
touritem["Asset/Add"] = {
  displayName: "Add Asset",
  items: [
    {
      selector: "#btnSave",
      step: 1,
      title: "AddAssetType",
      content: "AddAssetTypeContent",
    },
  ],
};
touritem["CRM/SalesOrderListing"] = {
  displayName: "Sales Order Listing",
  items: [
    {
      selector: "#crmleftsearch",
      step: 1,
      title: "SearchFilters",
      content: "SearchSaleOrderFilterContent",
    },
    {
      selector: "#addSalesOrder_a",
      step: 2,
      title: "AddSaleOrderTitle",
      content: "AddSaleOrderContent",
    },
    {
      selector: "#viewLeadeContent_a",
      step: 3,
      title: "ViewDetail",
      content: "ViewSaleOrderContent",
    },
  ],
};
touritem["CRM/ViewSalesOrderDetails"] = {
  displayName: "View Sales Order Details",
  items: [
    {
      selector: ".div-click-event",
      step: 1,
      title: "Sale" + "" + "Order" + "" + "Activity",
      content: "ViewSaleOrderDetailContent",
    },
  ],
};
touritem["CRM/Accounts"] = {
  displayName: "Accounts",
  items: [
    {
      selector: ".account_widget",
      step: 1,
      title: "Widgets",
      content: "SearchAccountFilterContent",
    },
    {
      selector: ".account_tour",
      step: 2,
      title: "SearchFilters",
      content: "SearchAccountFilter1Content",
    },
    {
      selector: "#ancCreateDepartment",
      step: 3,
      title: "AddAccount",
      content: "AddAccountContent",
    },
    {
      selector: "#dialogAddAccountType",
      step: 4,
      title: "Select" + "" + "Account",
      content: "SelectAccountContent",
    },
  ],
};
touritem["CRM/CampaignListing"] = {
  displayName: "Campaign Listing",
  items: [
    {
      selector: "#crmleftsearch",
      step: 1,
      title: "SearchFilters",
      content: "SearchCampaignFilterContent",
    },
    {
      selector: "#addCampaign_a",
      step: 2,
      title: "AddCampaign",
      content: "AddCampaignContent",
    },
  ],
};
touritem["CRM/ContactListing"] = {
  displayName: "Contact Listing",
  items: [
    {
      selector: "#crmleftsearch",
      step: 1,
      title: "SearchFilters",
      content: "SearchContactFilterContent",
    },
    {
      selector: "#addContact_a",
      step: 2,
      title: "AddContact",
      content: "AddContactContent",
    },
  ],
};
touritem["CRM/ContractListing"] = {
  displayName: "Contract Listing",
  items: [
    {
      selector: "#crmleftsearch",
      step: 1,
      title: "SearchFilters",
      content: "SearchContractFilterContent",
    },
    {
      selector: "#addContract_a",
      step: 2,
      title: "AddContract",
      content: "AddContractContent",
    },
    {
      selector: ".action-list-box",
      step: 3,
      title: "AddContract",
      content: "AddContractContent",
    },
  ],
};
touritem["CRM/ManageCampaign"] = {
  displayName: "Manage Campaign",
  items: [
    {
      selector: ".btn_save_a",
      step: 1,
      title: "enter" + " " + "Campaign" + "" + "Detail",
      content: "AddCampaignDetailContent",
    },
  ],
};
touritem["CRM/ManageContact"] = {
  displayName: "Add Contact",
  items: [
    {
      selector: ".addContact_a",
      step: 1,
      title: "ContactDetail",
      content: "AddContactDetailContent",
    },
  ],
};
touritem["CRM/ManageContract"] = {
  displayName: "Add Contract",
  items: [
    {
      selector: ".addContract_a",
      step: 1,
      title: "Contract" + "" + "Detail",
      content: "AddContractDetailContent",
    },
  ],
};
touritem["Brand/SocialConnect"] = {
  displayName: "Social Connect",
  items: [
    {
      selector: ".SocialMedia_a",
      step: 1,
      title: "SocialMedia",
      content: "SocialMediaContent",
    },
  ],
};
touritem["Brand/BrandListing"] = {
  displayName: "Brand Listing",
  items: [
    {
      selector: ".SocialMedia_a",
      step: 1,
      title: "Setup" + " " + "New" + " " + "Brand",
      content: "SetupNewBrandContent",
    },
    {
      selector: ".SocialMedia_b",
      step: 2,
      title: "enter" + " " + "Brand" + " " + "Detail",
      content: "AddBrandDetailContent",
    },
    {
      selector: ".SocialMedia_c",
      step: 3,
      title: "Connect",
      content: "ConnectContent",
    },
  ],
};
touritem["ApprovalChain/GroupList"] = {
  displayName: "Approval Chain GroupList",
  items: [
    {
      selector: ".SocialMedia_a",
      step: 1,
      title: "Order" + "" + "Management",
      content: "WalkApprovalChainUpArrowContent",
    },
    {
      selector: ".SocialMedia_b",
      step: 2,
      title: "Order" + "" + "Management",
      content: "WalkApprovalChainDownArrowContent",
    },
  ],
};
touritem["ApprovalChain/add"] = {
  displayName: "Add Approval Chain",
  items: [
    {
      selector: "#btnSave",
      step: 1,
      title: "WalkApprovalChainAddButtonTitle",
      content: "WalkApprovalChainAddButtonContent",
    },
  ],
};
touritem["JobPost/JobListing"] = {
  displayName: "Job Listing",
  items: [
    {
      selector: ".hr_jobpost",
      step: 1,
      title: "SearchFilters",
      content: "Search" + "" + "Job",
    },
  ],
};
touritem["HR/TalentPoolList"] = {
  displayName: "Talent Pool List",
  items: [
    {
      selector: ".hr_jobpost",
      step: 1,
      title: "SearchFilters",
      content: "Search" + "" + "TalentPool",
    },
  ],
};
touritem["FSM/worktypeListing"] = {
  displayName: "FSM work type Listing",
  items: [
    {
      selector: ".hr_jobpost",
      step: 1,
      title: "SearchFilters",
      content: "Search",
    },
  ],
};
touritem["CRM/ViewLeadDetails"] = {
  displayName: "Lead Details",
  items: [
    {
      selector: ".hr_jobpost",
      step: 1,
      title: "Lead" + "" + "Timeline",
      content: "ViewLeadDetailContent",
    },
    {
      selector: ".hr_jobpost_a",
      step: 2,
      title: "Lead" + "" + "Management",
      content: "ManageLeadContent",
    },
    {
      selector: ".hr_jobpost_b",
      step: 3,
      title: "LeadConversionTitle",
      content: "LeadConversionContent",
    },
  ],
};
touritem["CRM/PriceBookListing"] = {
  displayName: "PriceBook Listing",
  items: [
    {
      selector: "#crmleftsearch",
      step: 1,
      title: "SearchFilters",
      content: "SearchPriceBookFilterContent",
    },
    {
      selector: "#addPriceBook_a",
      step: 2,
      title: "PriceBookTitleContent",
      content: "AddPriceBookContent",
    },
    {
      selector: ".action-icon",
      step: 3,
      title: "ViewPriceBook",
      content: "ViewPriceBookContent",
    },
    {
      selector: ".action-icon1",
      step: 3,
      title: "EditPriceBook",
      content: "EditPriceBookContent",
    },
  ],
};
touritem["CRM/QuotationListing"] = {
  displayName: "Quote Listing",
  items: [
    {
      selector: "#crmleftsearch",
      step: 1,
      title: "SearchFilters",
      content: "SearchQuoteFilterContent",
    },
    {
      selector: "#addQuote_a",
      step: 2,
      title: "AddQuoteTitle",
      content: "AddQuoteContent",
    },
    {
      selector: "#viewLeadeContent_a",
      step: 3,
      title: "ViewDetail",
      content: "ViewQuoteActivityContent",
    },
  ],
};
touritem["CRM/StageListing"] = {
  displayName: "Stage Listing",
  items: [
    {
      selector: "#crmleftsearch",
      step: 1,
      title: "SearchFilters",
      content: "SearchStageFilterContent",
    },
    {
      selector: "#addStage_a",
      step: 2,
      title: "CreateNewStage",
      content: "AddStageContent",
    },
    {
      selector: "#viewLeadeContent_a",
      step: 3,
      title: "ViewDetail",
      content: "ViewStageContent",
    },
    {
      selector: "#action-list",
      step: 4,
      title: "ViewStageActionContent",
      content: "StageActionContent",
    },
  ],
};
tourData.push(touritem);
// export  { tourData };
