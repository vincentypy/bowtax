import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next",
      Continue: "Continue",
      Back: "Back",

      "Tax calculator": "Salary tax calculator",
      isSingle: "Single",
      isMarried: "Married",

      "selfResidence": "個人所有獲僱主或相聯公司提供居所的租值",
      spouseResidence: "配偶所有獲僱主或相聯公司提供居所的租值",
      selfOAndE: "支出及開支",
      spouseOAndE: "配偶支出及開支",
      selfEducationExpenses: "個人進修開支",
      spouseEducationExpenses: "配偶個人進修開支",
      selfApprovedDonations: "認可慈善捐款",
      spouseApprovedDonations: "配偶認可慈善捐款",
      selfMPF: "課稅年度強積金供款",
      spouseMPF: "配偶課稅年度強積金供款",
      selfMPFV: "可扣税強積金自願性供款",
      spouseMPFV: "配偶可扣税強積金自願性供款",
      selfAnnuity: "合資格年金保費",
      spouseAnnuity: "配偶合資格年金保費",
      selfMPFV2: "住宅租金扣除",
      spouseMPFV2: "配偶住宅租金扣除",
      selfHomeLoanInterest: "居所貸款利息",
      spouseHomeLoanInterest: "配偶居所貸款利息",

      sectionVhis: "合資格自願醫保計劃保單保費",
      "selfResponsible": "本人負責",
      "spouseResponsible": "配偶負責",
      "selfVhis": "支付本人的款額",
      "selfVhisRelateCount": "指明親屬數目",
      "selfVhisRelateAmount": "支付指明親屬的款額",
      "spouseVhis": "支付配偶的款額",
      "spouseVhisRelateCount": "指明親屬數目",
      "spouseVhisRelateAmount": "支付指明親屬的款額",

      "sectionEldery": "長者院舍開支",

      selfEldery: "在安老院居住的受養人數(收入需大於0)",
      selfDisabledDependant: "當中符合傷殘受養人免稅額人數",
      selfResidentialAmount: "支付給安老院的總開支",
      spouseEldery: "在安老院居住的受養人數(收入需大於0)",
      spouseDisabledDependant: "當中符合傷殘受養人免稅額人數",
      spouseResidentialAmount: "支付給安老院的總開支",


      sectionDiabled: "傷殘人士免稅額",
      selfPDA: "你是否合資格傷殘人士？",
      spousePDA: "你配偶是否合資格傷殘人士？",


      sectionChildren: "子女",
      childBornThisYr: "課稅年度出生子女人數",
      disabledChildBornThisYr: "當中符合傷殘受養人免稅額人數",
      childBornOtherYr: "其他年度出生子女人數",
      disabledChildBornOtherYr: "當中符合傷殘受養人免稅額人數",

      singleParentAllowance: "單親免税額",


      sectionBroSist: "兄弟姊妹",
      dependentBrothersSis: "供養兄弟姊妹人數",
      disabledDependentBrothersSis: "當中符合傷殘受養人免稅額人數",


      sectionParents: "父母／祖父母／外祖父母 - 直系長輩",
      subsectionParents60: "年滿60歲，或雖未滿60歲、但有資格申索傷殘津貼的直系長輩",
      dependentparentsResided: "全年與你同住人數",
      disabledDependentparentsResided: "當中符合傷殘受養人免稅額人數",
      dependentparentsNotResided: "並非全年與你同住人數",
      disabledDependentparentsNotResided: "當中符合傷殘受養人免稅額人數",

      subsectionParents5560: "55-59歲的直系長輩",
      dependentparents5560Resided: "全年與你同住人數",
      dependentparents5560NotResided: "並非全年與你同住人數",

      spouseDisabledDependent: "傷殘配偶受養人",


      

      Income: "Basic Informayion and Income",
      Deduction: "Deduction",
      selfDeductionColumn: "本人",
      spouseDeductionColumn: "配偶",
      Allowance: "Allowance",
      "Family related": "Family allowance",

      resetForm: "重新輸入",
      doCalculation: "Calculate",
      Results: "Results",
    },
  },
  "zh-HK": {
    translation: {
      "Welcome to React": "Bienvenue à React et react-i18next",
      Continue: "下一步",
      Back: "上一步",

      "Tax calculator": "薪俸計稅機",
      isSingle: "單身/分居/離婚/喪偶",
      isMarried: "已婚 (可選擇合併報稅)",

      "selfResidence": "個人所有獲僱主或相聯公司提供居所的租值",
      spouseResidence: "配偶",
      selfOAndE: "支出及開支",
      spouseOAndE: "配偶支出及開支",
      selfEducationExpenses: "個人進修開支",
      spouseEducationExpenses: "配偶個人進修開支",
      selfApprovedDonations: "認可慈善捐款",
      spouseApprovedDonations: "配偶認可慈善捐款",
      selfMPF: "課稅年度強積金供款",
      spouseMPF: "配偶課稅年度強積金供款",
      selfMPFV: "可扣税強積金自願性供款",
      spouseMPFV: "配偶可扣税強積金自願性供款",
      selfAnnuity: "合資格年金保費",
      spouseAnnuity: "配偶合資格年金保費",
      selfMPFV2: "住宅租金扣除",
      spouseMPFV2: "配偶住宅租金扣除",
      selfHomeLoanInterest: "居所貸款利息",
      spouseHomeLoanInterest: "配偶居所貸款利息",

      sectionVhis: "合資格自願醫保計劃保單保費",
      "selfResponsible": "合資格自願醫保計劃保單保費",
      "spouseResponsible": "配偶負責合資格自願醫保計劃保單保費",
      "selfVhis": "自願醫保保費 (本人)",
      "selfVhisRelateCount": "除自己外，你為多少名親屬投保自願醫保？",
      "selfVhisRelateAmount": "自願醫保保費 (指明親屬)",
      "spouseVhis": "自願醫保保費 (配偶)",
      "spouseVhisRelateCount": "除配偶自己外，為多少名親屬投保自願醫保？",
      "spouseVhisRelateAmount": "自願醫保保費 (指明親屬)",

      "sectionEldery": "長者院舍開支",
      "selfResponsibleEldery": "長者院舍開支",
      "spouseResponsibleEldery": "配偶負責長者院舍開支",

      selfEldery: "在安老院居住的受養人數",
      selfDisabledDependant: "當中符合傷殘受養人免稅額人數",
      selfResidentialAmount: "支付給安老院的總開支",
      spouseEldery: "在安老院居住的受養人數",
      spouseDisabledDependant: "當中符合傷殘受養人免稅額人數",
      spouseResidentialAmount: "支付給安老院的總開支",

      sectionDiabled: "傷殘人士免稅額",
      selfPDA: "你是否合資格傷殘人士？",
      spousePDA: "你配偶是否合資格傷殘人士？",


      sectionChildren: "子女",
      childBornThisYr: "課稅年度出生子女人數",
      disabledChildBornThisYr: "當中符合傷殘受養人免稅額人數",
      childBornOtherYr: "其他年度出生子女人數",
      disabledChildBornOtherYr: "當中符合傷殘受養人免稅額人數",

      singleParentAllowance: "單親免税額",


      sectionBroSist: "兄弟姊妹",
      dependentBrothersSis: "供養兄弟姊妹人數",
      disabledDependentBrothersSis: "當中符合傷殘受養人免稅額人數",


      sectionParents: "父母／祖父母／外祖父母 - 直系長輩",
      subsectionParents60: "年滿60歲，或雖未滿60歲、但有資格申索傷殘津貼的直系長輩",
      dependentparentsResided: "全年與你同住人數",
      disabledDependentparentsResided: "當中符合傷殘受養人免稅額人數",
      dependentparentsNotResided: "並非全年與你同住人數",
      disabledDependentparentsNotResided: "當中符合傷殘受養人免稅額人數",

      subsectionParents5560: "55-59歲的直系長輩",
      dependentparents5560Resided: "全年與你同住人數",
      dependentparents5560NotResided: "並非全年與你同住人數",

      spouseDisabledDependent: "傷殘配偶受養人",




      Income: "基本資料及入息",
      Deduction: "可扣除支出",
      selfDeductionColumn: "本人",
      spouseDeductionColumn: "配偶",
      Allowance: "個人免稅額",
      "Family related": "家庭免稅額",

      resetForm: "重新輸入",
      doCalculation: "計算",
      Results: "計算結果",


      "---hint": "",
      "hintIncome": "所有薪金、工資及董事酬金均須要課繳薪俸税。",
      "hintResidence": "獲僱主提供居所，居所「租值」將會包括在你的應予評税的入息內。",
      "hintDisabledDependant": "供養一名有資格根據「香港政府傷殘津貼計劃」領取津貼的家屬，你便可申索傷殘受養人免税額。",

      "hintSelfEducationExpenses": "個人進修開支最高扣除額為港元100,000。",
      "hintSelfOAndE": "完全、純粹及必須為產生該評稅入息而招致的所有支出及開支",
      "hintSelfApprovedDonations": "可捐款總額須不少於$100，並不得超過你在該年度的入息減去可扣除支出及折舊免税額後或應評税利潤的35%。",
      "hintSelfMPF": "課稅年度內的總供款；上限$18,000",
      "hintSelfMPFV": "年金保費及強積金自願性供款，每名受保人上限$60,000；須繳稅的夫婦之間可分配延期年金保費的稅務扣除，以申請合共120,000元的扣除總額；",
      "hintSelfAnnuity": "年金保費及強積金自願性供款，每名受保人上限$60,000；須繳稅的夫婦之間可分配延期年金保費的稅務扣除，以申請合共120,000元的扣除總額；",
      "hintSelfMPFV2": "不能超過港元120,000。",
      "hintSelfHomeLoanInterest": "最高限額為上限港元120,000。",

      "hintSectionVhis": "每名納税人就每名受保人可獲容許最高扣除額為8,000元。",
      "hintSectionEldery": "每位受養人最高扣除額港元100,000，上限：4人",

      "hintPDA": "合資格根據「香港政府傷殘津貼計劃」領取津貼，可申索傷殘人士免税額。",

      "hintChild": "你供養的未婚子女在有關課税年度內符合條件，你便可申索子女免税額。",
      "hintParent60": "在本年度內供養父母／祖父母／外祖父母，你可就每名受供養的申請免税額。",
      "hintBrothersSis": "你供養的未婚兄弟姊妹在有關課税年度內符合條件，你便可申索供養兄弟姊妹免税額。",

      "hintSelfEldery": "收入需大於0",
      "hintSpouseEldery": "收入需大於0",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "zh-HK", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
