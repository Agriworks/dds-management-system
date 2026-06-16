export type Translations = {
  nav: {
    dashboard: string; members: string; browseMembers: string; addMember: string;
    transactions: string; browseTransactions: string; addTransaction: string;
    accounts: string; rolesManagement: string; language: string; logout: string; account: string;
  };
  common: {
    loading: string; noResults: string; noResultsDot: string; tableEnd: string;
    reset: string; cancel: string; save: string; error: string; page: string;
    previous: string; next: string; filter: string; creating: string; back: string;
  };
  dashboard: {
    title: string; villages: string; members: string; totalDeposits: string; totalLoans: string;
    chartTitle: string; chartSubtitle: string; deposits: string; loans: string;
  };
  membersBrowse: {
    title: string; mandal: string; village: string; filterBtn: string; resetBtn: string;
    colName: string; colFamilyName: string; colHusbandFather: string; colAadhar: string;
    colPhone: string; colMandal: string; colVillage: string; colSavings: string;
    colWithdraw: string; colLaagodi: string;
    colActions: string; archiveConfirm: string; archiveBtn: string;
    archiveSuccess: string; archiveError: string; newTransactionBtn: string;
  };
  memberAdd: {
    title: string; cardPersonal: string; cardLocation: string; givenName: string;
    givenNamePlaceholder: string; familyName: string; familyNamePlaceholder: string;
    husbandFather: string; husbandFatherPlaceholder: string; phone: string; phonePlaceholder: string;
    aadhar: string; aadharPlaceholder: string; mandal: string; village: string;
    houseNumber: string; houseNumberPlaceholder: string; submitBtn: string; submittingBtn: string;
    resetBtn: string; successTitle: string; errorTitle: string; errorDesc: string;
    phoneExistsTitle: string; phoneExistsDesc: string; aadharExistsTitle: string;
    aadharExistsDesc: string; verifyError: string;
  };
  memberDetail: {
    title: string; backToList: string; balancesTitle: string; savings: string; withdraw: string;
    laagodi: string; historyTitle: string; noTransactions: string; account: string;
    credit: string; debit: string; amount: string; balanceAfter: string; receipt: string;
  };
  transactionsBrowse: {
    title: string; colMember: string; colType: string; colAmount: string; colDate: string;
    colSupervisor: string; colComments: string; colActions: string; confirmValidate: string;
    confirmInvalidate: string; approved: string; approve: string; cancel: string; cancelDone: string;
    archiveConfirm: string; archiveBtn: string; archiveSuccess: string; archiveError: string;
  };
  transactionAdd: {
    title: string; cardMember: string; cardTransaction: string; mandal: string; village: string;
    member: string; comments: string; commentsPlaceholder: string; amount: string;
    amountPlaceholder: string; account: string; txType: string; txTypePlaceholder: string;
    creditOption: string; debitOption: string; submitBtn: string; submittingBtn: string;
    resetBtn: string; successTitle: string; successDesc: string; errorTitle: string;
    errorDesc: string; sessionError: string;
  };
  accountsPage: { title: string };
  customersPage: {
    title: string; colName: string; colEmail: string; colRoles: string; editRoles: string;
    dialogTitle: string; dialogDesc: string; rolesLabel: string; rolesSearch: string;
    rolesLoading: string; rolesEmpty: string; cancelBtn: string; saveBtn: string;
  };
  mandalDropdown: { placeholder: string; notFound: string };
  villageDropdown: { placeholder: string; selectMandalFirst: string; notFound: string };
  customerDropdown: {
    placeholder: string; selectMandaVillageFirst: string; searchPlaceholder: string;
    emptyMessage: string; loadingMessage: string; errorMessage: string;
  };
  accountsDropdown: { selectMemberFirst: string; placeholder: string; notFound: string; memberNotFound: string };
  accessRestricted: {
    title: string;
    description: string;
    contactAdmin: string;
  };
  publicPage: {
    welcome: string;
    signInDesc: string;
    signInBtn: string;
    footerText: string;
  };
  validation: {
    givenNameRequired: string;
    familyNameRequired: string;
    mandalRequired: string;
    villageRequired: string;
    houseNumberRequired: string;
    phoneRequired: string;
    phoneInvalid: string;
    husbandFatherRequired: string;
    aadharRequired: string;
    aadharInvalid: string;
    customerRequired: string;
    accountRequired: string;
    amountRequired: string;
    amountPositive: string;
    txTypeRequired: string;
  };
};

const te: Translations = {
  // Navigation / Sidebar
  nav: {
    dashboard: "డ్యాష్‌బోర్డ్",
    members: "సభ్యులు",
    browseMembers: "సంఘం సభ్యులు",
    addMember: "కొత్త సభ్యుడు",
    transactions: "ట్రాన్సాక్షన్లు",
    browseTransactions: "ట్రాన్సాక్షన్లు చూడండి",
    addTransaction: "కొత్త ట్రాన్సాక్షన్",
    accounts: "అకౌంట్లు",
    rolesManagement: "పాత్రల నిర్వహణ",
    language: "Language",
    logout: "లాగ్ అవుట్",
    account: "ఖాతా",
  },

  // Common
  common: {
    loading: "లోడ్ అవుతోంది...",
    noResults: "ఫలితాలు లభించలేదు",
    noResultsDot: "ఫలితాలు లభించలేదు.",
    tableEnd: "పట్టిక ముగిసింది",
    reset: "రీసెట్",
    cancel: "రద్దు",
    save: "సేవ్ చేయి",
    error: "లోపం",
    page: "పేజీ",
    previous: "మునుపటి పేజీకి వెళ్లండి",
    next: "తర్వాతి పేజీకి వెళ్లండి",
    filter: "ఫిల్టర్ చేయండి",
    creating: "సృష్టించుతుంది...",
    back: "తిరిగి వెళ్ళండి",
  },

  // Dashboard
  dashboard: {
    title: "డ్యాష్‌బోర్డ్",
    villages: "గ్రామాలు",
    members: "సభ్యులు",
    totalDeposits: "మొత్తం డిపాజిట్లు",
    totalLoans: "మొత్తం రుణాలు",
    chartTitle: "గ్రామాల వారీగా రుణాలు మరియు డిపాజిట్లు",
    chartSubtitle: "ప్రతి గ్రామం నుండి మొత్తం రుణాలు మరియు డిపాజిట్లు.",
    deposits: "డిపాజిట్లు",
    loans: "రుణాలు",
  },

  // Members – Browse
  membersBrowse: {
    title: "సంఘం సభ్యులు",
    mandal: "మండలం",
    village: "ఊరు",
    filterBtn: "ఫిల్టర్ చేయండి",
    resetBtn: "రీసెట్",
    colName: "సభ్యుని పేరు",
    colFamilyName: "ఇంటి పేరు",
    colHusbandFather: "భర్త / తండ్రి పేరు",
    colAadhar: "ఆధార్ నంబర్",
    colPhone: "ఫోన్ నంబర్",
    colMandal: "మండలం",
    colVillage: "ఊరు",
    colSavings: "సేవింగ్స్ బ్యాలెన్స్",
    colWithdraw: "విత్‌డ్రాల్ బ్యాలెన్స్",
    colLaagodi: "లాగోడి బ్యాలెన్స్",
    colActions: "చర్యలు",
    archiveConfirm: "ఈ సభ్యుని ఆర్కైవ్ చేయాలా? వారు జాబితాలో కనిపించరు.",
    archiveBtn: "ఆర్కైవ్",
    archiveSuccess: "సభ్యుడు ఆర్కైవ్ అయ్యారు",
    archiveError: "సభ్యుని ఆర్కైవ్ చేయలేకపోయాం. దయచేసి మళ్లీ ప్రయత్నించండి.",
    newTransactionBtn: "కొత్త ట్రాన్సాక్షన్",
  },

  // Member – Add
  memberAdd: {
    title: "కొత్త సభ్యుడు",
    cardPersonal: "సంఘం సభ్యుని వివరములు",
    cardLocation: "స్థాన సమాచారం",
    givenName: "పేరు (ఇంగ్లీషు)",
    givenNamePlaceholder: "పేరు ఇంగ్లీషులో ఇవ్వండి",
    familyName: "ఇంటి పేరు (ఇంగ్లీషు)",
    familyNamePlaceholder: "ఇంటి పేరు ఇంగ్లీషులో ఇవ్వండి",
    husbandFather: "భర్త/తండ్రి పేరు (ఇంగ్లీషు)",
    husbandFatherPlaceholder: "భర్త/తండ్రి పేరు ఇంగ్లీషులో ఇవ్వండి",
    phone: "ఫోన్ నంబర్",
    phonePlaceholder: "ఫోన్ నంబర్ ఇవ్వండి",
    aadhar: "ఆధార్ నంబర్",
    aadharPlaceholder: "ఆధార్ నంబర్ ఇవ్వండి",
    mandal: "మండలం",
    village: "ఊరు",
    houseNumber: "ఇంటి నంబర్",
    houseNumberPlaceholder: "ఇంటి నంబర్ ఇవ్వండి",
    submitBtn: "సంఘం సభ్యుని సృష్టించు",
    submittingBtn: "సంఘం సభ్యుని సృష్టించుతుంది...",
    resetBtn: "రీసెట్",
    successTitle: "సభ్యుడు విజయవంతంగా నమోదు అయ్యారు!",
    errorTitle: "లోపం",
    errorDesc: "సభ్యుని నమోదు చేయలేకపోయాం. దయచేసి మళ్లీ ప్రయత్నించండి.",
    phoneExistsTitle: "ఫోన్ నంబర్ ఇప్పటికే ఉంది",
    phoneExistsDesc: "ఈ ఫోన్ నంబర్‌తో సభ్యుడు ఇప్పటికే ఉన్నారు. దయచేసి వేరే ఫోన్ నంబర్ ఇవ్వండి.",
    aadharExistsTitle: "ఆధార్ నంబర్ ఇప్పటికే ఉంది",
    aadharExistsDesc: "ఈ ఆధార్ నంబర్‌తో సభ్యుడు ఇప్పటికే ఉన్నారు. దయచేసి వేరే ఆధార్ నంబర్ ఇవ్వండి.",
    verifyError: "సభ్యుని ధృవీకరించలేకపోయాం",
  },

  // Member – Detail
  memberDetail: {
    title: "సభ్యుడు ఖాతాలు",
    backToList: "సభ్యుల జాబితాకు తిరిగి వెళ్ళండి",
    balancesTitle: "ప్రస్తుత బ్యాలెన్స్‌లు (లెక్కింపు — లావాదేవీల వారీగా)",
    savings: "సేవింగ్స్",
    withdraw: "విత్‌డ్రాల్",
    laagodi: "లాగోడి",
    historyTitle: "లావాదేవీ చరిత్ర",
    noTransactions: "ఇంకా నమోదైన లావాదేవీలు లేవు.",
    account: "ఖాతా",
    credit: "క్రెడిట్",
    debit: "డెబిట్",
    amount: "మొత్తం",
    balanceAfter: "ఈ ఖాతాలో ఈ లావాదేవీ తర్వాత మిగిలిన మొత్తం",
    receipt: "రసీదు",
  },

  // Transactions – Browse
  transactionsBrowse: {
    title: "ట్రాన్సాక్షన్లు",
    colMember: "సభ్యుని పేరు",
    colType: "ట్రాన్సాక్షన్ రకం",
    colAmount: "మొత్తం",
    colDate: "ట్రాన్సాక్షన్ తేదీ",
    colSupervisor: "సూపర్‌వైజర్ పేరు",
    colComments: "వ్యాఖ్యలు",
    colActions: "చర్యలు",
    confirmValidate: "ఈ ట్రాన్సాక్షన్‌ను ధృవీకరించాలా?",
    confirmInvalidate: "ఈ ట్రాన్సాక్షన్‌ను రద్దు చేయాలా? ఇది బ్యాలెన్స్ ప్రభావాన్ని తిరగమారుస్తుంది.",
    approved: "Approved",
    approve: "Approve",
    cancel: "రద్దు",
    cancelDone: "రద్దు చేయి",
    archiveConfirm: "ఈ ట్రాన్సాక్షన్‌ను ఆర్కైవ్ చేయాలా? ఇది జాబితాలో కనిపించదు.",
    archiveBtn: "ఆర్కైవ్",
    archiveSuccess: "ట్రాన్సాక్షన్ ఆర్కైవ్ అయింది",
    archiveError: "ట్రాన్సాక్షన్ ఆర్కైవ్ చేయలేకపోయాం",
  },

  // Transactions – Add
  transactionAdd: {
    title: "కొత్త ట్రాన్సాక్షన్",
    cardMember: "సంఘం సభ్యుని వివరములు",
    cardTransaction: "ట్రాన్సాక్షన్ వివరములు",
    mandal: "మండలం",
    village: "ఊరు",
    member: "సంఘం సభ్యులు",
    comments: "ఇతర వివరములు",
    commentsPlaceholder: "ఇతర వివరములు",
    amount: "అమౌంట్",
    amountPlaceholder: "రూపాయల్లో అమౌంట్ ఇవ్వండి",
    account: "ఖాతా",
    txType: "ట్రాన్సాక్షన్ టైప్",
    txTypePlaceholder: "ట్రాన్సాక్షన్ టైప్ ఎంచుకోండి",
    creditOption: "Credit - సభ్యులు ఇస్తున్నారు",
    debitOption: "Debit - సభ్యులు తీసుకున్నారు",
    submitBtn: "ట్రాన్సాక్షన్ సృష్టించు",
    submittingBtn: "ట్రాన్సాక్షన్ సృష్టించుతుంది...",
    resetBtn: "రీసెట్",
    successTitle: "ట్రాన్సాక్షన్ విజయవంతంగా నమోదు అయింది!",
    successDesc: "ఐడి: {id}\nమొత్తం: ₹{amount}\nరకం: {type}\nసభ్యుడు: {member}",
    errorTitle: "లోపం",
    errorDesc: "ట్రాన్సాక్షన్ సమర్పించలేకపోయాం. దయచేసి మళ్లీ ప్రయత్నించండి.",
    sessionError: "వాడుకరి సెషన్ కనబడలేదు. దయచేసి మళ్లీ లాగిన్ అవ్వండి.",
  },

  // Accounts page
  accountsPage: {
    title: "అకౌంట్లు",
  },

  // Customers / Roles
  customersPage: {
    title: "పాత్రల నిర్వహణ",
    colName: "పేరు",
    colEmail: "ఈమెయిల్",
    colRoles: "పాత్రలు",
    editRoles: "పాత్రలు మార్చు",
    dialogTitle: "పాత్రలు మార్చు",
    dialogDesc: "వాడుకరికి పాత్రలను జోడించండి లేదా తొలగించండి",
    rolesLabel: "పాత్రలను ఎంచుకోండి",
    rolesSearch: "పాత్రల కోసం వెతకండి...",
    rolesLoading: "పాత్రలు లోడ్ అవుతున్నాయి...",
    rolesEmpty: "పాత్రలు లభించలేదు",
    cancelBtn: "రద్దు",
    saveBtn: "సేవ్ చేయి",
  },

  // Mandal dropdown
  mandalDropdown: {
    placeholder: "మండలం ఎంచుకోండి",
    notFound: "మండలం కనుగొనబడలేదు",
  },

  // Village dropdown
  villageDropdown: {
    placeholder: "ఊరు ఎంచుకోండి",
    selectMandalFirst: "ముందు మండలం ఎంచుకోండి",
    notFound: "ఊరు కనుగొనబడలేదు",
  },

  // Customer (member) dropdown in transaction form
  customerDropdown: {
    placeholder: "సంఘం సభ్యుని ఎంచుకోండి",
    selectMandaVillageFirst: "ముందు మండలం మరియు ఊరు ఎంచుకోండి",
    searchPlaceholder: "ఆధార్ నంబర్ ద్వారా వెతకండి...",
    emptyMessage: "ఆధార్ నంబర్ ఇచ్చి సభ్యుని వెతకండి",
    loadingMessage: "సభ్యుల వివరాలు లోడ్ అవుతున్నాయి...",
    errorMessage: "సభ్యుల వివరాలు లోడ్ చేయలేకపోయాం",
  },

  // Accounts dropdown
  accountsDropdown: {
    selectMemberFirst: "సంఘం సభ్యుని ఎంచుకోండి",
    placeholder: "ఖాతా ఎంచుకోండి",
    notFound: "ఖాతాలు కనుగొనబడలేదు",
    memberNotFound: "సంఘం సభ్యుని కోసం ఖాతాలు కనుగొనబడలేదు",
  },

  // Access Restricted
  accessRestricted: {
    title: "అనుమతి నిరాకరించబడింది",
    description: "ఈ పేజీని యాక్సెస్ చేయడానికి మీకు అనుమతి లేదు.",
    contactAdmin: "ఇది పొరపాటు అని మీరు భావిస్తే దయచేసి మీ అడ్మినిస్ట్రేటర్‌ను సంప్రదించండి.",
  },

  // Public Page
  publicPage: {
    welcome: "డిడిఎస్ మేనేజ్‌మెంట్ యాప్‌కు స్వాగతం",
    signInDesc: "ప్రారంభించడానికి మీ గూగుల్ ఖాతాతో లాగిన్ అవ్వండి.",
    signInBtn: "గూగుల్ తో లాగిన్ అవ్వండి",
    footerText: "ఏజియన్ డైనమిక్ ద్వారా ఆధారితం",
  },

  // Form Validations
  validation: {
    givenNameRequired: "పేరు ఇవ్వడం తప్పనిసరి",
    familyNameRequired: "ఇంటి పేరు ఇవ్వడం తప్పనిసరి",
    mandalRequired: "దయచేసి ఒక మండలాన్ని ఎంచుకోండి",
    villageRequired: "దయచేసి ఒక గ్రామాన్ని ఎంచుకోండి",
    houseNumberRequired: "ఇంటి నంబర్ ఇవ్వడం తప్పనిసరి",
    phoneRequired: "ఫోన్ నంబర్ ఇవ్వడం తప్పనిసరి",
    phoneInvalid: "దయచేసి సరైన 10 అంకెల ఫోన్ నంబర్‌ను నమోదు చేయండి",
    husbandFatherRequired: "భర్త/తండ్రి పేరు ఇవ్వడం తప్పనిసరి",
    aadharRequired: "ఆధార్ నంబర్ ఇవ్వడం తప్పనిసరి",
    aadharInvalid: "దయచేసి సరైన 12 అంకెల ఆధార్ నంబర్‌ను నమోదు చేయండి",
    customerRequired: "దయచేసి ఒక సంఘం సభ్యుని ఎంచుకోండి",
    accountRequired: "దయచేసి ఒక ఖాతాను ఎంచుకోండి",
    amountRequired: "దయచేసి మొత్తాన్ని నమోదు చేయండి",
    amountPositive: "మొత్తం తప్పనిసరిగా ధన సంఖ్య అయి ఉండాలి",
    txTypeRequired: "దయచేసి లావాదేవీ రకాన్ని ఎంచుకోండి",
  },
};

export default te;

