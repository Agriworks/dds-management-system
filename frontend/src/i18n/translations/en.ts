import { Translations } from "./te";

const en: Translations = {
  // Navigation / Sidebar
  nav: {
    dashboard: "Dashboard",
    members: "Members",
    browseMembers: "Browse Members",
    addMember: "Add Member",
    transactions: "Transactions",
    browseTransactions: "Browse Transactions",
    addTransaction: "New Transaction",
    accounts: "Accounts",
    rolesManagement: "Role Management",
    language: "Language",
    logout: "Log Out",
    account: "Account",
  },

  // Common
  common: {
    loading: "Loading...",
    noResults: "No results found",
    noResultsDot: "No results found.",
    tableEnd: "End of table",
    reset: "Reset",
    cancel: "Cancel",
    save: "Save",
    error: "Error",
    page: "Page",
    previous: "Go to previous page",
    next: "Go to next page",
    filter: "Apply Filter",
    creating: "Creating...",
    back: "Go back",
  },

  // Dashboard
  dashboard: {
    title: "Dashboard",
    villages: "Villages",
    members: "Members",
    totalDeposits: "Total Deposits",
    totalLoans: "Total Loans",
    chartTitle: "Loans and Deposits by Village",
    chartSubtitle: "Total amount of loans and deposits from each village.",
    deposits: "Deposits",
    loans: "Loans",
  },

  membersBrowse: {
    title: "Members",
    mandal: "Mandal",
    village: "Village",
    filterBtn: "Apply Filter",
    resetBtn: "Reset",
    colName: "Member Name",
    colFamilyName: "Family Name",
    colHusbandFather: "Husband / Father Name",
    colAadhar: "Aadhar Number",
    colPhone: "Phone Number",
    colMandal: "Mandal",
    colVillage: "Village",
    colSavings: "Savings Balance",
    colWithdraw: "Withdrawal Balance",
    colLaagodi: "Laagodi Balance",
    colActions: "Actions",
    archiveConfirm: "Archive this member? They will no longer appear in the list.",
    archiveBtn: "Archive",
    archiveSuccess: "Member archived successfully",
    archiveError: "Failed to archive member. Please try again.",
    newTransactionBtn: "New Transaction",
    deleteBtn: "Delete",
    deleteConfirmTitle: "Delete permanently?",
    deleteConfirmDesc: "Are you sure you want to delete this member permanently?",
    deleteYes: "Yes",
    deleteNo: "No",
    deleteSuccess: "Member deleted successfully",
    deleteError: "Failed to delete member. Please try again.",
  },

  // Member – Add
  memberAdd: {
    title: "Add Member",
    cardPersonal: "Member Details",
    cardLocation: "Location Information",
    givenName: "First Name (English)",
    givenNamePlaceholder: "Enter first name in English",
    familyName: "Family Name (English)",
    familyNamePlaceholder: "Enter family name in English",
    husbandFather: "Husband/Father Name (English)",
    husbandFatherPlaceholder: "Enter husband/father name in English",
    phone: "Phone Number",
    phonePlaceholder: "Enter phone number",
    aadhar: "Aadhar Number",
    aadharPlaceholder: "Enter Aadhar number",
    mandal: "Mandal",
    village: "Village",
    houseNumber: "House Number",
    houseNumberPlaceholder: "Enter house number",
    submitBtn: "Create Member",
    submittingBtn: "Creating Member...",
    resetBtn: "Reset",
    successTitle: "Member registered successfully!",
    errorTitle: "Error",
    errorDesc: "Failed to register member. Please try again.",
    phoneExistsTitle: "Phone Number Already Exists",
    phoneExistsDesc: "A member with this phone number already exists. Please use a different phone number.",
    aadharExistsTitle: "Aadhar Number Already Exists",
    aadharExistsDesc: "A member with this Aadhar number already exists. Please use a different Aadhar number.",
    verifyError: "Failed to verify member",
  },

  // Member – Detail
  memberDetail: {
    title: "Member Accounts",
    backToList: "Back to Members List",
    balancesTitle: "Current Balances (calculated — per transaction)",
    savings: "Savings",
    withdraw: "Withdrawal",
    laagodi: "Laagodi",
    historyTitle: "Transaction History",
    noTransactions: "No transactions recorded yet.",
    account: "Account",
    credit: "Credit",
    debit: "Debit",
    amount: "Amount",
    balanceAfter: "Balance remaining in this account after this transaction",
    receipt: "Receipt",
  },

  // Transactions – Browse
  transactionsBrowse: {
    title: "Transactions",
    colMember: "Member Name",
    colType: "Transaction Type",
    colAmount: "Amount",
    colDate: "Transaction Date",
    colSupervisor: "Supervisor Name",
    colComments: "Comments",
    colActions: "Actions",
    confirmValidate: "Confirm this transaction?",
    confirmInvalidate: "Cancel this transaction? This will reverse the balance impact.",
    approved: "Approved",
    approve: "Approve",
    cancel: "Cancel",
    cancelDone: "Cancelled",
    archiveConfirm: "Archive this transaction? It will no longer appear in the list.",
    archiveBtn: "Archive",
    archiveSuccess: "Transaction archived successfully",
    archiveError: "Failed to archive transaction",
    deleteBtn: "Delete",
    deleteConfirmTitle: "Delete Permanently?",
    deleteConfirmDesc: "Are you sure you want to delete this transaction permanently?",
    deleteYes: "Yes",
    deleteNo: "No",
    deleteSuccess: "Transaction deleted successfully",
    deleteError: "Failed to delete transaction. Please try again.",
  },

  // Transactions – Add
  transactionAdd: {
    title: "New Transaction",
    cardMember: "Member Details",
    cardTransaction: "Transaction Details",
    mandal: "Mandal",
    village: "Village",
    member: "Member",
    comments: "Additional Details",
    commentsPlaceholder: "Additional details",
    amount: "Amount",
    amountPlaceholder: "Enter amount in rupees",
    account: "Account",
    txType: "Transaction Type",
    txTypePlaceholder: "Select transaction type",
    creditOption: "Credit - Member is depositing",
    debitOption: "Debit - Member is withdrawing",
    submitBtn: "Create Transaction",
    submittingBtn: "Creating Transaction...",
    resetBtn: "Reset",
    successTitle: "Transaction created successfully!",
    successDesc: "ID: {id}\nAmount: ₹{amount}\nType: {type}\nMember: {member}",
    errorTitle: "Error",
    errorDesc: "Failed to submit transaction. Please try again.",
    sessionError: "User session not found. Please log in again.",
  },

  // Accounts page
  accountsPage: {
    title: "Accounts",
  },

  // Customers / Roles
  customersPage: {
    title: "Role Management",
    colName: "Name",
    colEmail: "Email",
    colRoles: "Roles",
    editRoles: "Edit Roles",
    dialogTitle: "Edit Roles",
    dialogDesc: "Add or remove roles for the user",
    rolesLabel: "Select roles",
    rolesSearch: "Search roles...",
    rolesLoading: "Loading roles...",
    rolesEmpty: "No roles found",
    cancelBtn: "Cancel",
    saveBtn: "Save",
  },

  // Mandal dropdown
  mandalDropdown: {
    placeholder: "Select Mandal",
    notFound: "No mandals found",
  },

  // Village dropdown
  villageDropdown: {
    placeholder: "Select Village",
    selectMandalFirst: "Select a mandal first",
    notFound: "No villages found",
  },

  // Customer (member) dropdown in transaction form
  customerDropdown: {
    placeholder: "Select Member",
    selectMandaVillageFirst: "Select mandal and village first",
    searchPlaceholder: "Last 4 digits of Aadhar...",
    emptyMessage: "Enter the last 4 digits of Aadhar to search",
    loadingMoreMessage: "Loading more members...",
    loadingMessage: "Loading members...",
    errorMessage: "Failed to load members",
  },

  // Accounts dropdown
  accountsDropdown: {
    selectMemberFirst: "Select a member first",
    placeholder: "Select Account",
    notFound: "No accounts found",
    memberNotFound: "No accounts found for this member",
  },

  // Access Restricted
  accessRestricted: {
    title: "Access Restricted",
    description: "You don't have permission to access this page.",
    contactAdmin: "Please contact your administrator if you believe this is a mistake.",
  },

  // Public Page
  publicPage: {
    welcome: "Welcome to DDS Management App",
    signInDesc: "Sign in with your Google account to get started.",
    signInBtn: "Sign in with Google",
    footerText: "Powered by Aegion Dynamic",
  },

  // Form Validations
  validation: {
    givenNameRequired: "Given name is required",
    familyNameRequired: "Family name is required",
    mandalRequired: "Please select a mandal",
    villageRequired: "Please select a village",
    houseNumberRequired: "House number is required",
    phoneRequired: "Phone number is required",
    phoneInvalid: "Please enter a valid 10-digit phone number",
    husbandFatherRequired: "Husband/Father name is required",
    aadharRequired: "Aadhar number is required",
    aadharInvalid: "Please enter a valid 12-digit Aadhar number",
    customerRequired: "Please select a customer",
    accountRequired: "Please select an account",
    amountRequired: "Please enter an amount",
    amountPositive: "Amount must be a positive number",
    txTypeRequired: "Please select a transaction type",
  },
} as const;

export default en;
