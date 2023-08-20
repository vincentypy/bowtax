/* eslint-disable */

var hasTaxRebate = false;
// Mapping the Output result

var parent = {
    STCOut: {},
    firstview: false,
    browserID: "",
    main: {},
  };

function leftStr(s,i) {
  var s1
  s1=""+s
  return s1.substring(0,i)
}
function rightStr(s,i) {
  var s1,l
  s1=""+s
  l=s1.length
  return s1.substring(l-i,l)
}
function trimStr(s) {
  var s1,i,j,l,Chrs2Trim
  s1=""+s
  l=s1.length
  if (l==0) return ""
  Chrs2Trim=" \t"
  i=0
  while (i<l && Chrs2Trim.indexOf(s1.charAt(i))>-1) {
    i++
  }
  j=l-1
  while (j>=0 && Chrs2Trim.indexOf(s1.charAt(j))>-1) {
    j--
  }
  if (i<=j) {
    return s1.substring(i,j-i+1)
  } else {
    return ""
  }
}
function FormatMoney(InNum) {
  var tmpStr,NumStr
  var i,j,k,l
  tmpStr=trimStr(InNum)
  NumStr=tmpStr
  l=tmpStr.length
  j=Math.floor((l-1)/3)-1
  for (i=0; i<=j; i++) {
    k=3+i*4
    NumStr=leftStr(tmpStr,l-k)+","+rightStr(tmpStr,k)
    tmpStr=NumStr
    l=l+1
  }
  return NumStr
}
function FormatSTC(STCidx,nsp) {
  var i,Result
  Result=FormatMoney(parent.STCOut[STCidx])
  for (i=1; i<=nsp; i++) {
    Result=Result+"&nbsp;"
  }
  return Result
}
function Format_AddSTC(STCidx1,STCidx2,nsp) {
  var i,Result
  Result=parent.STCOut[STCidx1]+parent.STCOut[STCidx2]
  Result=FormatMoney(Result)
  for (i=1; i<=nsp; i++) {
    Result=Result+"&nbsp;"
  }
  return Result
}
function AddSTC(STCidx1,STCidx2) {
  var Result
  Result=parent.STCOut[STCidx1]+parent.STCOut[STCidx2]
  Result=FormatMoney(Result)
  return Result
}
function FormatZero(nsp) {
  var i,Result
  Result=0
  for (i=1; i<=nsp; i++) {
    Result=Result+"&nbsp;"
  }
  return Result
}
function nbsp(nsp) {
  var i,Result
  Result=""
  for (i=1; i<=nsp; i++) {
    Result=Result+"&nbsp;"
  }
  return Result
}
var tableStr,tdStr1,tdStr2
var redStar="<font color='#FF0000'>*</font>"
function tabledef(w, b, cs, cp) {
  tableStr="<table width='" + w + "' border='" + b + "' cellspacing='" + cs + "' cellpadding='" + cp + "'>"
  return tableStr
}
function tddef1(w, a) {
  tdStr1="<td width='" + w + "' align='" + a + "'>"
  return tdStr1
}
function tddef2(w, a) {
  tdStr2="<td width='" + w + "' align='" + a + "'>"
  return tdStr2
}
function goToPage(htmlfile) {
  var url,i
  if (htmlfile.substring(0,5).toLowerCase()=="http:") {    // Is complete URL ?
    parent.location.href=htmlfile
  } else {		// relative path only
    url=""+document.location
    url=url.toLowerCase()
    i=url.lastIndexOf("/")
    if (i==-1) i=url.lastIndexOf("\\")
    url=url.substring(0,i+1)+htmlfile
    parent.location.href=url
  }
}
function BackToSTC(c) {
  var url,i
  if (c=='back'){
	parent.firstview= false
  } else if (c=='exit') {
	parent.firstview = exit
  }
  url=""+document.location
  url=url.toLowerCase()
  i=url.lastIndexOf("/")
  if (i==-1) i=url.lastIndexOf("\\")
  url=url.substring(0,i+1)+"cstc.htm"
  parent.main.location.href=url
}
function CalculateRebate(tax, YrEnd) {
  var rebateAmt
  if (false) {
  	rebateAmt=Math.ceil(tax * 0 / 100)
  	if (rebateAmt > 0) {
  	  rebateAmt = 0 
  	}
  }
  return rebateAmt
}
function PrintRebateDesc(YrEnd) {
  var rebateDesc
  if (YrEnd==2002) {rebateDesc="退 税 "}
  if (false) {rebateDesc="税 款 寬 免 "}
  return rebateDesc
}
function PrintSTCResult() {
  if (window.print) {
    window.print()
/*  } else if (parent.browserID=="IE4Win") {
    IEControl.ExecWB(6,1)*/
  }
}

export function showResult(STCOut, taxtype, YrEnd, hasTaxRebate, isMarried) {
  parent.STCOut = STCOut;

  function FormatSTC (STCidx) {
    return STCOut[STCidx];
  }

  var slfRebateAmt=CalculateRebate(STCOut[30], YrEnd);
  
  var a = {
    "總 入 息": {
      value: FormatSTC(0),
      condition: taxtype==10
    },
    "扣 除 額": {
      value: FormatSTC(57),
      condition: taxtype==10
    },
    "免 税 額：基 本": {
      value: FormatSTC(3),
      condition: taxtype==10,
    },
    "免 税 額：單 親": {
      value: FormatSTC(5),
      condition: taxtype==10,
    },
    "免 税 額：傷 殘 人 士": {
      value: FormatSTC(80),
      condition: taxtype==10,
    },
    "免 税 額：子 女: 在 課 税 年 度 內 出 生 ": {
      value: FormatSTC(73),
      condition: taxtype==10 && STCOut[76]>0,
    },
    "免 税 額：子 女: 在 其 他 課 税 年 度 出 生 ": {
      value: FormatSTC(6),
      condition: taxtype==10 && STCOut[76]>0,
    },
    "免 税 額：子 女 (沒 有 在 課 税 年 度 內 出 生) ": {
      value: FormatSTC(6),
      condition: taxtype==10 && STCOut[76]<=0,
    },
    "供 養 兄 弟 / 姊 妹": {
      value: FormatSTC(7),
      condition: taxtype==10,
    },
    "供 養 父 母 / 祖 父 母 或 外 祖 父 母 - 年 齡 為 55 至 59 歲": {
      value: FormatSTC(60),
      condition: taxtype==10 && YrEnd > 2005,
    },
    "供 養 父 母 / 祖 父 母 或 外 祖 父 母 - 年 滿 60 歲 或 以 上 ， 或 雖 未 滿 60 歲 ， 但 屬 傷 殘 人 士": {
      value: FormatSTC(8),
      condition: taxtype==10 && YrEnd > 2005,
    },
    "供 養 父 母 / 祖 父 母 或 外 祖 父 母 (稅務年度2005年前)": {
      value: FormatSTC(8),
      condition: taxtype==10 && YrEnd <= 2005,
    },
    "傷 殘 受 養 人": {
      value: FormatSTC(11),
      condition: taxtype==10,
    },
    "總 免 税 額": {
      value: FormatSTC(24),
      condition: taxtype==10,
    },
    "應 課 税 入 息 實 額": {
      value: FormatSTC(27),
      condition: taxtype==10,
    },

    // // Has tax rebate
    // "你 應 繳 的 總 税 款(* 用 標 準 税 率 計 算)": {
    //   value: FormatSTC(30),
    //   condition: hasTaxRebate && STCOut[34]==true,
    // },
    // "你 應 繳 的 總 税 款 ": {
    //   value: FormatSTC(30),
    //   condition: hasTaxRebate && STCOut[34]==false,
    // },
    // "你 應 繳 的 總 税 款 Tax Payable (After Tax Rebate)": {
    //   value: STCOut[30] - slfRebateAmt,
    //   condition: hasTaxRebate && STCOut[34]==false,
    // },
    "你 應 繳 的 總 税 款(* 用 標 準 税 率 計 算) (norebate)": {
      value: FormatSTC(30),
      condition: taxtype==10 && STCOut[34]==true,
    },
    "你 應 繳 的 總 税 款  (norebate)": {
      value: STCOut[30],
      condition: taxtype==10 && STCOut[34]==false,
    },


    // parent.taxtype==22
    // MARR_SELF (single income family)
    "總 入 息 (single income family)": {
      value: FormatSTC(0),
      condition: taxtype==22,
    },
    "扣 除 額 (single income family)": {
      value: FormatSTC(57),
      condition: taxtype==22,
    },
    "免 税 額：－ 已 婚 人 士 (single income family)": {
      value: FormatSTC(4),
      condition: taxtype==22,
    },
    "免 税 額：－ 傷 殘 人 士 (single income family)": {
      value: FormatSTC(80),
      condition: taxtype==22,
    },
    "免 税 額：－ 子 女 - 在 課 税 年 度 內 出 生 (single income family)": {
      value: FormatSTC(73),
      condition: taxtype==22 && STCOut[76]>0,
    },
    "免 税 額：－ 子 女 - 在 其 他 課 税 年 度 出 生 (single income family)": {
      value: FormatSTC(6),
      condition: taxtype==22 && STCOut[76]>0,
    },
    "免 税 額：－ 子 女 (沒 有 在 課 税 年 度 內 出 生)  (single income family)": {
      value: FormatSTC(6),
      condition: taxtype==22 && STCOut[76]<=0,
    },
    "免 税 額：－ 供 養 兄 弟 / 姊 妹  (single income family)": {
      value: FormatSTC(7),
      condition: taxtype==22,
    },
    "免 税 額：－ 供 養 父 母 / 祖 父 母 或 外 祖 父 母 - 年 齡 為 55 至 59 歲  (single income family)": {
      value: FormatSTC(60),
      condition: taxtype==22 && YrEnd > 2005,
    },
    "免 税 額：- 年 滿 60 歲 或 以 上 ， 或 雖 未 滿 60 歲 ， 但 屬 傷 殘 人 士  (single income family)": {
      value: FormatSTC(8),
      condition: taxtype==22 && YrEnd > 2005,
    },
    "免 税 額：－ 供 養 父 母 / 祖 父 母 或 外 祖 父 母 (稅務年度2005年前) (single income family)": {
      value: FormatSTC(8),
      condition: taxtype==22 && YrEnd <= 2005,
    },
    "免 税 額：－ 傷 殘 受 養 人 (single income family)": {
      value: FormatSTC(11),
      condition: taxtype==22,
    },
    "總 免 税 額 (single income family)": {
      value: FormatSTC(24),
      condition: taxtype==22,
    },
    "應 課 税 入 息 實 額 (single income family)": {
      value: FormatSTC(27),
      condition: taxtype==22,
    },
    "你 應 繳 的 總 税 款 (single income family)": {
      value: FormatSTC(30),
      condition: taxtype==22 && !hasTaxRebate && STCOut[34]==true,
    },


    // parent.taxtype==24
    // MARR_SPOUSE (single income family)
    "總 入 息 (single income family - MARR_SPOUSE)": {
      value: FormatSTC(1),
      condition: taxtype==24,
    },
    "扣 除 額 (single income family - MARR_SPOUSE)": {
      value: FormatSTC(58),
      condition: taxtype==24,
    },
    "免 税 額：－ 已 婚 人 士 (single income family - MARR_SPOUSE)": {
      value: FormatSTC(4),
      condition: taxtype==24,
    },
    "免 税 額：－ 傷 殘 人 士 (single income family - MARR_SPOUSE)": {
      value: FormatSTC(81),
      condition: taxtype==24,
    },
    "免 税 額：－ 子 女 - 在 課 税 年 度 內 出 生 (single income family - MARR_SPOUSE)": {
      value: FormatSTC(74),
      condition: taxtype==24 && STCOut[77]>0,
    },
    "免 税 額：－ 子 女 - 在 其 他 課 税 年 度 出 生 (single income family - MARR_SPOUSE)": {
      value: FormatSTC(12),
      condition: taxtype==24 && STCOut[77]>0,
    },
    "免 税 額：－ 子 女 (沒 有 在 課 税 年 度 內 出 生)  (single income family - MARR_SPOUSE)": {
      value: FormatSTC(12),
      condition: taxtype==24 && STCOut[77]<=0,
    },
    "免 税 額：－ 供 養 兄 弟 / 姊 妹  (single income family - MARR_SPOUSE)": {
      value: FormatSTC(13),
      condition: taxtype==24,
    },
    "免 税 額：－ 供 養 父 母 / 祖 父 母 或 外 祖 父 母 - 年 齡 為 55 至 59 歲  (single income family - MARR_SPOUSE)": {
      value: FormatSTC(63),
      condition: taxtype==24 && YrEnd > 2005,
    },
    "免 税 額：- 年 滿 60 歲 或 以 上 ， 或 雖 未 滿 60 歲 ， 但 屬 傷 殘 人 士  (single income family - MARR_SPOUSE)": {
      value: FormatSTC(14),
      condition: taxtype==24 && YrEnd > 2005,
    },
    "免 税 額：－ 供 養 父 母 / 祖 父 母 或 外 祖 父 母 (稅務年度2005年前) (single income family - MARR_SPOUSE)": {
      value: FormatSTC(14),
      condition: taxtype==24 && YrEnd <= 2005,
    },
    "免 税 額：－ 傷 殘 受 養 人 (single income family - MARR_SPOUSE)": {
      value: FormatSTC(17),
      condition: taxtype==24,
    },
    "總 免 税 額 (single income family - MARR_SPOUSE)": {
      value: FormatSTC(25),
      condition: taxtype==24,
    },
    "應 課 税 入 息 實 額 (single income family - MARR_SPOUSE)": {
      value: FormatSTC(28),
      condition: taxtype==24,
    },
    "你 應 繳 的 總 税 款 (single income family - MARR_SPOUSE)": {
      value: FormatSTC(31),
      condition: taxtype==24 && !hasTaxRebate && STCOut[35]==true,
    },


    // parent.taxtype==30
    // Married - separate taxation
    // 根 據 你 輸 入 的 資 料 ， 你 和 你 配 偶 分 開 評 税 較 為 有 利 。 
    "總 入 息 (Married - separate taxation - SELF)": {
      value: FormatSTC(0),
      condition: taxtype==30,
    },
    "總 入 息 (Married - separate taxation - SPOUSE)": {
      value: FormatSTC(1),
      condition: taxtype==30,
    },
    "總 入 息 (Married - separate taxation - COMBINE)": {
      value: FormatSTC(2),
      condition: taxtype==30,
    },
    "扣 除 額 (Married - separate taxation - SELF)": {
      value: FormatSTC(57),
      condition: taxtype==30,
    },
    "扣 除 額 (Married - separate taxation - SPOUSE)": {
      value: FormatSTC(58),
      condition: taxtype==30,
    },
    "扣 除 額 (Married - separate taxation - COMBINE)": {
      value: FormatSTC(59),
      condition: taxtype==30,
    },
    "免 税 額：－ 已 婚 人 士 (Married - separate taxation - SELF)": {
      value: FormatSTC(3),
      condition: taxtype==30,
    },
    "免 税 額：－ 已 婚 人 士 (Married - separate taxation - SPOUSE)": {
      value: FormatSTC(3),
      condition: taxtype==30,
    },
    "免 税 額：－ 已 婚 人 士 (Married - separate taxation - COMBINE)": {
      value: FormatSTC(4),
      condition: taxtype==30,
    },
    "免 税 額：－ 傷 殘 人 士 (Married - separate taxation - SELF)": {
      value: FormatSTC(80),
      condition: taxtype==30,
    },
    "免 税 額：－ 傷 殘 人 士 (Married - separate taxation - SPOUSE)": {
      value: FormatSTC(81),
      condition: taxtype==30,
    },
    "免 税 額：－ 傷 殘 人 士 (Married - separate taxation - COMBINE)": {
      value: Format_AddSTC(80, 81),
      condition: taxtype==30,
    },
    "免 税 額：－ 子 女 - 在 課 税 年 度 內 出 生 (Married - separate taxation - SELF)": {
      value: FormatSTC(73),
      condition: taxtype==30 && (STCOut[76]>0 || STCOut[77]>0),
    },
    "免 税 額：－ 子 女 - 在 課 税 年 度 內 出 生 (Married - separate taxation - SPOUSE)": {
      value: FormatSTC(74),
      condition: taxtype==30 && (STCOut[76]>0 || STCOut[77]>0),
    },
    "免 税 額：－ 子 女 - 在 課 税 年 度 內 出 生 (Married - separate taxation - COMBINE)": {
      value: FormatSTC(75),
      condition: taxtype==30 && (STCOut[76]>0 || STCOut[77]>0),
    },
    "免 税 額：－ 子 女 - 在 其 他 課 税 年 度 出 生 (Married - separate taxation - SELF)": {
      value: FormatSTC(6),
      condition: taxtype==30 && (STCOut[76]>0 || STCOut[77]>0),
    },
    "免 税 額：－ 子 女 - 在 其 他 課 税 年 度 出 生 (Married - separate taxation - SPOUSE)": {
      value: FormatSTC(12),
      condition: taxtype==30 && (STCOut[76]>0 || STCOut[77]>0),
    },
    "免 税 額：－ 子 女 - 在 其 他 課 税 年 度 出 生 (Married - separate taxation - COMBINE)": {
      value: FormatSTC(18),
      condition: taxtype==30 && (STCOut[76]>0 || STCOut[77]>0),
    },
    "免 税 額：－ 子 女 (沒 有 在 課 税 年 度 內 出 生)  (Married - separate taxation - SELF)": {
      value: FormatSTC(6),
      condition: taxtype==30 && !(STCOut[76]>0 || STCOut[77]>0),
    },
    "免 税 額：－ 子 女 (沒 有 在 課 税 年 度 內 出 生)  (Married - separate taxation - SPOUSE)": {
      value: FormatSTC(12),
      condition: taxtype==30 && !(STCOut[76]>0 || STCOut[77]>0),
    },
    "免 税 額：－ 子 女 (沒 有 在 課 税 年 度 內 出 生)  (Married - separate taxation - COMBINE)": {
      value: FormatSTC(18),
      condition: taxtype==30 && !(STCOut[76]>0 || STCOut[77]>0),
    },
    "免 税 額：－ 供 養 兄 弟 / 姊 妹  (Married - separate taxation - SELF)": {
      value: FormatSTC(7),
      condition: taxtype==30,
    },
    "免 税 額：－ 供 養 兄 弟 / 姊 妹  (Married - separate taxation - SPOUSE)": {
      value: FormatSTC(13),
      condition: taxtype==30,
    },
    "免 税 額：－ 供 養 兄 弟 / 姊 妹  (Married - separate taxation - COMBINE)": {
      value: FormatSTC(19),
      condition: taxtype==30,
    },
    "免 税 額：－ 全 年 與 你 同 住 的 - 供 養 父 母 / 祖 父 母 或 外 祖 父 母 - 年 齡 為 55 至 59 歲  (Married - separate taxation - SELF)": {
      value: FormatSTC(61),
      condition: taxtype==30 && YrEnd > 2005,
    },
    "免 税 額：－ 全 年 與 你 同 住 的 - 供 養 父 母 / 祖 父 母 或 外 祖 父 母 - 年 齡 為 55 至 59 歲  (Married - separate taxation - SPOUSE)": {
      value: FormatSTC(64),
      condition: taxtype==30 && YrEnd > 2005,
    },
    "免 税 額：－ 全 年 與 你 同 住 的 - 供 養 父 母 / 祖 父 母 或 外 祖 父 母 - 年 齡 為 55 至 59 歲  (Married - separate taxation - COMBINE)": {
      value: FormatSTC(67),
      condition: taxtype==30 && YrEnd > 2005,
    },
    "免 税 額：- 全 年 與 你 同 住 的 - 年 滿 60 歲 或 以 上 ， 或 雖 未 滿 60 歲 ， 但 屬 傷 殘 人 士  (Married - separate taxation - SELF)": {
      value: FormatSTC(9),
      condition: taxtype==30 && YrEnd > 2005,
    },
    "免 税 額：- 全 年 與 你 同 住 的 - 年 滿 60 歲 或 以 上 ， 或 雖 未 滿 60 歲 ， 但 屬 傷 殘 人 士  (Married - separate taxation - SPOUSE)": {
      value: FormatSTC(15),
      condition: taxtype==30 && YrEnd > 2005,
    },
    "免 税 額：- 全 年 與 你 同 住 的 - 年 滿 60 歲 或 以 上 ， 或 雖 未 滿 60 歲 ， 但 屬 傷 殘 人 士  (Married - separate taxation - COMBINE)": {
      value: FormatSTC(21),
      condition: taxtype==30 && YrEnd > 2005,
    },





    "免 税 額：－ 並 非 全 年 與 你 同 住 的 - 供 養 父 母 / 祖 父 母 或 外 祖 父 母 - 年 齡 為 55 至 59 歲  (Married - separate taxation - SELF)": {
      value: FormatSTC(62),
      condition: taxtype==30 && YrEnd > 2005,
    },
    "免 税 額：－ 並 非 全 年 與 你 同 住 的 - 供 養 父 母 / 祖 父 母 或 外 祖 父 母 - 年 齡 為 55 至 59 歲  (Married - separate taxation - SPOUSE)": {
      value: FormatSTC(65),
      condition: taxtype==30 && YrEnd > 2005,
    },
    "免 税 額：－ 並 非 全 年 與 你 同 住 的 - 供 養 父 母 / 祖 父 母 或 外 祖 父 母 - 年 齡 為 55 至 59 歲  (Married - separate taxation - COMBINE)": {
      value: FormatSTC(68),
      condition: taxtype==30 && YrEnd > 2005,
    },
    "免 税 額：- 並 非 全 年 與 你 同 住 的 - 年 滿 60 歲 或 以 上 ， 或 雖 未 滿 60 歲 ， 但 屬 傷 殘 人 士  (Married - separate taxation - SELF)": {
      value: FormatSTC(10),
      condition: taxtype==30 && YrEnd > 2005,
    },
    "免 税 額：- 並 非 全 年 與 你 同 住 的 - 年 滿 60 歲 或 以 上 ， 或 雖 未 滿 60 歲 ， 但 屬 傷 殘 人 士  (Married - separate taxation - SPOUSE)": {
      value: FormatSTC(16),
      condition: taxtype==30 && YrEnd > 2005,
    },
    "免 税 額：- 並 非 全 年 與 你 同 住 的 - 年 滿 60 歲 或 以 上 ， 或 雖 未 滿 60 歲 ， 但 屬 傷 殘 人 士  (Married - separate taxation - COMBINE)": {
      value: FormatSTC(22),
      condition: taxtype==30 && YrEnd > 2005,
    },



    "免 税 額：－ 全 年 與 你 同 住 的 - 供 養 父 母 / 祖 父 母 或 外 祖 父 母 (稅務年度2005年前) (Married - separate taxation - SELF)": {
      value: FormatSTC(9),
      condition: taxtype==30 && YrEnd <= 2005,
    },
    "免 税 額：－ 全 年 與 你 同 住 的 - 供 養 父 母 / 祖 父 母 或 外 祖 父 母 (稅務年度2005年前) (Married - separate taxation - SPOUSE)": {
      value: FormatSTC(15),
      condition: taxtype==30 && YrEnd <= 2005,
    },
    "免 税 額：－ 全 年 與 你 同 住 的 - 供 養 父 母 / 祖 父 母 或 外 祖 父 母 (稅務年度2005年前) (Married - separate taxation - COMBINE)": {
      value: FormatSTC(21),
      condition: taxtype==30 && YrEnd <= 2005,
    },
    "免 税 額：－ 並 非 全 年 與 你 同 住 的 - 供 養 父 母 / 祖 父 母 或 外 祖 父 母 (稅務年度2005年前) (Married - separate taxation - SELF)": {
      value: FormatSTC(10),
      condition: taxtype==30 && YrEnd <= 2005,
    },
    "免 税 額：－ 並 非 全 年 與 你 同 住 的 - 供 養 父 母 / 祖 父 母 或 外 祖 父 母 (稅務年度2005年前) (Married - separate taxation - SPOUSE)": {
      value: FormatSTC(16),
      condition: taxtype==30 && YrEnd <= 2005,
    },
    "免 税 額：－ 並 非 全 年 與 你 同 住 的 - 供 養 父 母 / 祖 父 母 或 外 祖 父 母 (稅務年度2005年前) (Married - separate taxation - COMBINE)": {
      value: FormatSTC(22),
      condition: taxtype==30 && YrEnd <= 2005,
    },

    "免 税 額：－ 傷 殘 受 養 人 (Married - separate taxation - SELF)": {
      value: FormatSTC(11),
      condition: taxtype==30,
    },
    "免 税 額：－ 傷 殘 受 養 人 (Married - separate taxation - SPOUSE)": {
      value: FormatSTC(17),
      condition: taxtype==30,
    },
    "免 税 額：－ 傷 殘 受 養 人 (Married - separate taxation - COMBINE)": {
      value: FormatSTC(23),
      condition: taxtype==30,
    },
    "總 免 税 額 (Married - separate taxation - SELF)": {
      value: FormatSTC(24),
      condition: taxtype==30,
    },
    "總 免 税 額 (Married - separate taxation - SPOUSE)": {
      value: FormatSTC(25),
      condition: taxtype==30,
    },
    "總 免 税 額 (Married - separate taxation - COMBINE)": {
      value: FormatSTC(26),
      condition: taxtype==30,
    },
    "應 課 税 入 息 實 額 (Married - separate taxation - SELF)": {
      value: FormatSTC(27),
      condition: taxtype==30,
    },
    "應 課 税 入 息 實 額 (Married - separate taxation - SPOUSE)": {
      value: FormatSTC(28),
      condition: taxtype==30,
    },
    "應 課 税 入 息 實 額 (Married - separate taxation - COMBINE)": {
      value: FormatSTC(29),
      condition: taxtype==30,
    },
    // No tax rebate
    "應 繳 的 總 税 款 - 標 準 税 率 計 算 (Married - separate taxation - SELF)": {
      value: FormatSTC(30),
      condition: taxtype==30 && STCOut[34]==true,
    },
    "應 繳 的 總 税 款 (Married - separate taxation - SELF)": {
      value: FormatSTC(30),
      condition: taxtype==30 && STCOut[34]==false,
    },
    "應 繳 的 總 税 款 - 標 準 税 率 計 算 (Married - separate taxation - SPOUSE)": {
      value: FormatSTC(31),
      condition: taxtype==30 && STCOut[35]==true,
    },
    "應 繳 的 總 税 款 (Married - separate taxation - SPOUSE)": {
      value: FormatSTC(31),
      condition: taxtype==30 && STCOut[35]==false,
    },
    "應 繳 的 總 税 款 - 標 準 税 率 計 算 (Married - separate taxation - COMBINE)": {
      value: FormatSTC(33),
      condition: taxtype==30 && STCOut[36]==true,
    },
    "應 繳 的 總 税 款 (Married - separate taxation - COMBINE)": {
      value: FormatSTC(33),
      condition: taxtype==30 && STCOut[36]==false,
    },
    "你 及 你 配 偶 應 繳 的 總 税 款 (Married - separate taxation)": {
      value: FormatSTC(32) < FormatSTC(33) ? FormatSTC(32) : FormatSTC(33),
      condition: taxtype==30,
    },






    // parent.taxtype==40
    // Married - joint taxation 1
    // 根 據 你 輸 入 的 資 料 ， 你 和 你 配 偶 選 擇 合 併 評 税 會 較 為 有 利 。 
    "總 入 息 (Married - joint taxation 1 - SELF)": {
      value: FormatSTC(0),
      condition: taxtype==40,
    },
    "總 入 息 (Married - joint taxation 1 - SPOUSE)": {
      value: FormatSTC(1),
      condition: taxtype==40,
    },
    "總 入 息 (Married - joint taxation 1 - COMBINE)": {
      value: FormatSTC(2),
      condition: taxtype==40,
    },
    "扣 除 額 (Married - joint taxation 1 - SELF)": {
      value: FormatSTC(57),
      condition: taxtype==40,
    },
    "扣 除 額 (Married - joint taxation 1 - SPOUSE)": {
      value: FormatSTC(58),
      condition: taxtype==40,
    },
    "扣 除 額 (Married - joint taxation 1 - COMBINE)": {
      value: FormatSTC(59),
      condition: taxtype==40,
    },
    "免 税 額：－ 已 婚 人 士 (Married - joint taxation 1 - SELF)": {
      value: FormatSTC(3),
      condition: taxtype==40,
    },
    "免 税 額：－ 已 婚 人 士 (Married - joint taxation 1 - SPOUSE)": {
      value: FormatSTC(3),
      condition: taxtype==40,
    },
    "免 税 額：－ 已 婚 人 士 (Married - joint taxation 1 - COMBINE)": {
      value: FormatSTC(4),
      condition: taxtype==40,
    },
    "免 税 額：－ 傷 殘 人 士 (Married - joint taxation 1 - SELF)": {
      value: FormatSTC(80),
      condition: taxtype==40,
    },
    "免 税 額：－ 傷 殘 人 士 (Married - joint taxation 1 - SPOUSE)": {
      value: FormatSTC(81),
      condition: taxtype==40,
    },
    "免 税 額：－ 傷 殘 人 士 (Married - joint taxation 1 - COMBINE)": {
      value: Format_AddSTC(80, 81),
      condition: taxtype==40,
    },
    "免 税 額：－ 子 女 - 在 課 税 年 度 內 出 生 (Married - joint taxation 1 - SELF)": {
      value: FormatSTC(73),
      condition: taxtype==40 && (STCOut[76]>0 || STCOut[77]>0),
    },
    "免 税 額：－ 子 女 - 在 課 税 年 度 內 出 生 (Married - joint taxation 1 - SPOUSE)": {
      value: FormatSTC(74),
      condition: taxtype==40 && (STCOut[76]>0 || STCOut[77]>0),
    },
    "免 税 額：－ 子 女 - 在 課 税 年 度 內 出 生 (Married - joint taxation 1 - COMBINE)": {
      value: FormatSTC(75),
      condition: taxtype==40 && (STCOut[76]>0 || STCOut[77]>0),
    },
    "免 税 額：－ 子 女 - 在 其 他 課 税 年 度 出 生 (Married - joint taxation 1 - SELF)": {
      value: FormatSTC(6),
      condition: taxtype==40 && (STCOut[76]>0 || STCOut[77]>0),
    },
    "免 税 額：－ 子 女 - 在 其 他 課 税 年 度 出 生 (Married - joint taxation 1 - SPOUSE)": {
      value: FormatSTC(12),
      condition: taxtype==40 && (STCOut[76]>0 || STCOut[77]>0),
    },
    "免 税 額：－ 子 女 - 在 其 他 課 税 年 度 出 生 (Married - joint taxation 1 - COMBINE)": {
      value: FormatSTC(18),
      condition: taxtype==40 && (STCOut[76]>0 || STCOut[77]>0),
    },
    "免 税 額：－ 子 女 (沒 有 在 課 税 年 度 內 出 生)  (Married - joint taxation 1 - SELF)": {
      value: FormatSTC(6),
      condition: taxtype==40 && !(STCOut[76]>0 || STCOut[77]>0),
    },
    "免 税 額：－ 子 女 (沒 有 在 課 税 年 度 內 出 生)  (Married - joint taxation 1 - SPOUSE)": {
      value: FormatSTC(12),
      condition: taxtype==40 && !(STCOut[76]>0 || STCOut[77]>0),
    },
    "免 税 額：－ 子 女 (沒 有 在 課 税 年 度 內 出 生)  (Married - joint taxation 1 - COMBINE)": {
      value: FormatSTC(18),
      condition: taxtype==40 && !(STCOut[76]>0 || STCOut[77]>0),
    },
    "免 税 額：－ 供 養 兄 弟 / 姊 妹  (Married - joint taxation 1 - SELF)": {
      value: FormatSTC(7),
      condition: taxtype==40,
    },
    "免 税 額：－ 供 養 兄 弟 / 姊 妹  (Married - joint taxation 1 - SPOUSE)": {
      value: FormatSTC(13),
      condition: taxtype==40,
    },
    "免 税 額：－ 供 養 兄 弟 / 姊 妹  (Married - joint taxation 1 - COMBINE)": {
      value: FormatSTC(19),
      condition: taxtype==40,
    },
    "免 税 額：－ 全 年 與 你 同 住 的 - 供 養 父 母 / 祖 父 母 或 外 祖 父 母 - 年 齡 為 55 至 59 歲  (Married - joint taxation 1 - SELF)": {
      value: FormatSTC(61),
      condition: taxtype==40 && YrEnd > 2005,
    },
    "免 税 額：－ 全 年 與 你 同 住 的 - 供 養 父 母 / 祖 父 母 或 外 祖 父 母 - 年 齡 為 55 至 59 歲  (Married - joint taxation 1 - SPOUSE)": {
      value: FormatSTC(64),
      condition: taxtype==40 && YrEnd > 2005,
    },
    "免 税 額：－ 全 年 與 你 同 住 的 - 供 養 父 母 / 祖 父 母 或 外 祖 父 母 - 年 齡 為 55 至 59 歲  (Married - joint taxation 1 - COMBINE)": {
      value: FormatSTC(67),
      condition: taxtype==40 && YrEnd > 2005,
    },
    "免 税 額：- 全 年 與 你 同 住 的 - 年 滿 60 歲 或 以 上 ， 或 雖 未 滿 60 歲 ， 但 屬 傷 殘 人 士  (Married - joint taxation 1 - SELF)": {
      value: FormatSTC(9),
      condition: taxtype==40 && YrEnd > 2005,
    },
    "免 税 額：- 全 年 與 你 同 住 的 - 年 滿 60 歲 或 以 上 ， 或 雖 未 滿 60 歲 ， 但 屬 傷 殘 人 士  (Married - joint taxation 1 - SPOUSE)": {
      value: FormatSTC(15),
      condition: taxtype==40 && YrEnd > 2005,
    },
    "免 税 額：- 全 年 與 你 同 住 的 - 年 滿 60 歲 或 以 上 ， 或 雖 未 滿 60 歲 ， 但 屬 傷 殘 人 士  (Married - joint taxation 1 - COMBINE)": {
      value: FormatSTC(21),
      condition: taxtype==40 && YrEnd > 2005,
    },





    "免 税 額：－ 並 非 全 年 與 你 同 住 的 - 供 養 父 母 / 祖 父 母 或 外 祖 父 母 - 年 齡 為 55 至 59 歲  (Married - joint taxation 1 - SELF)": {
      value: FormatSTC(62),
      condition: taxtype==40 && YrEnd > 2005,
    },
    "免 税 額：－ 並 非 全 年 與 你 同 住 的 - 供 養 父 母 / 祖 父 母 或 外 祖 父 母 - 年 齡 為 55 至 59 歲  (Married - joint taxation 1 - SPOUSE)": {
      value: FormatSTC(65),
      condition: taxtype==40 && YrEnd > 2005,
    },
    "免 税 額：－ 並 非 全 年 與 你 同 住 的 - 供 養 父 母 / 祖 父 母 或 外 祖 父 母 - 年 齡 為 55 至 59 歲  (Married - joint taxation 1 - COMBINE)": {
      value: FormatSTC(68),
      condition: taxtype==40 && YrEnd > 2005,
    },
    "免 税 額：- 並 非 全 年 與 你 同 住 的 - 年 滿 60 歲 或 以 上 ， 或 雖 未 滿 60 歲 ， 但 屬 傷 殘 人 士  (Married - joint taxation 1 - SELF)": {
      value: FormatSTC(10),
      condition: taxtype==40 && YrEnd > 2005,
    },
    "免 税 額：- 並 非 全 年 與 你 同 住 的 - 年 滿 60 歲 或 以 上 ， 或 雖 未 滿 60 歲 ， 但 屬 傷 殘 人 士  (Married - joint taxation 1 - SPOUSE)": {
      value: FormatSTC(16),
      condition: taxtype==40 && YrEnd > 2005,
    },
    "免 税 額：- 並 非 全 年 與 你 同 住 的 - 年 滿 60 歲 或 以 上 ， 或 雖 未 滿 60 歲 ， 但 屬 傷 殘 人 士  (Married - joint taxation 1 - COMBINE)": {
      value: FormatSTC(22),
      condition: taxtype==40 && YrEnd > 2005,
    },



    "免 税 額：－ 全 年 與 你 同 住 的 - 供 養 父 母 / 祖 父 母 或 外 祖 父 母 (稅務年度2005年前) (Married - joint taxation 1 - SELF)": {
      value: FormatSTC(9),
      condition: taxtype==40 && YrEnd <= 2005,
    },
    "免 税 額：－ 全 年 與 你 同 住 的 - 供 養 父 母 / 祖 父 母 或 外 祖 父 母 (稅務年度2005年前) (Married - joint taxation 1 - SPOUSE)": {
      value: FormatSTC(15),
      condition: taxtype==40 && YrEnd <= 2005,
    },
    "免 税 額：－ 全 年 與 你 同 住 的 - 供 養 父 母 / 祖 父 母 或 外 祖 父 母 (稅務年度2005年前) (Married - joint taxation 1 - COMBINE)": {
      value: FormatSTC(21),
      condition: taxtype==40 && YrEnd <= 2005,
    },
    "免 税 額：－ 並 非 全 年 與 你 同 住 的 - 供 養 父 母 / 祖 父 母 或 外 祖 父 母 (稅務年度2005年前) (Married - joint taxation 1 - SELF)": {
      value: FormatSTC(10),
      condition: taxtype==40 && YrEnd <= 2005,
    },
    "免 税 額：－ 並 非 全 年 與 你 同 住 的 - 供 養 父 母 / 祖 父 母 或 外 祖 父 母 (稅務年度2005年前) (Married - joint taxation 1 - SPOUSE)": {
      value: FormatSTC(16),
      condition: taxtype==40 && YrEnd <= 2005,
    },
    "免 税 額：－ 並 非 全 年 與 你 同 住 的 - 供 養 父 母 / 祖 父 母 或 外 祖 父 母 (稅務年度2005年前) (Married - joint taxation 1 - COMBINE)": {
      value: FormatSTC(22),
      condition: taxtype==40 && YrEnd <= 2005,
    },

    "免 税 額：－ 傷 殘 受 養 人 (Married - joint taxation 1 - SELF)": {
      value: FormatSTC(11),
      condition: taxtype==40,
    },
    "免 税 額：－ 傷 殘 受 養 人 (Married - joint taxation 1 - SPOUSE)": {
      value: FormatSTC(17),
      condition: taxtype==40,
    },
    "免 税 額：－ 傷 殘 受 養 人 (Married - joint taxation 1 - COMBINE)": {
      value: FormatSTC(23),
      condition: taxtype==40,
    },
    "總 免 税 額 (Married - joint taxation 1 - SELF)": {
      value: FormatSTC(24),
      condition: taxtype==40,
    },
    "總 免 税 額 (Married - joint taxation 1 - SPOUSE)": {
      value: FormatSTC(25),
      condition: taxtype==40,
    },
    "總 免 税 額 (Married - joint taxation 1 - COMBINE)": {
      value: FormatSTC(26),
      condition: taxtype==40,
    },
    "應 課 税 入 息 實 額 (Married - joint taxation 1 - SELF)": {
      value: FormatSTC(27),
      condition: taxtype==40,
    },
    "應 課 税 入 息 實 額 (Married - joint taxation 1 - SPOUSE)": {
      value: FormatSTC(28),
      condition: taxtype==40,
    },
    "應 課 税 入 息 實 額 (Married - joint taxation 1 - COMBINE)": {
      value: FormatSTC(29),
      condition: taxtype==40,
    },
    // No tax rebate
    "應 繳 的 總 税 款 - 標 準 税 率 計 算 (Married - joint taxation 1 - SELF)": {
      value: FormatSTC(30),
      condition: taxtype==40 && STCOut[34]==true,
    },
    "應 繳 的 總 税 款 (Married - joint taxation 1 - SELF)": {
      value: FormatSTC(30),
      condition: taxtype==40 && STCOut[34]==false,
    },
    "應 繳 的 總 税 款 - 標 準 税 率 計 算 (Married - joint taxation 1 - SPOUSE)": {
      value: FormatSTC(31),
      condition: taxtype==40 && STCOut[35]==true,
    },
    "應 繳 的 總 税 款 (Married - joint taxation 1 - SPOUSE)": {
      value: FormatSTC(31),
      condition: taxtype==40 && STCOut[35]==false,
    },
    "應 繳 的 總 税 款 - 標 準 税 率 計 算 (Married - joint taxation 1 - COMBINE)": {
      value: FormatSTC(33),
      condition: taxtype==40 && STCOut[36]==true,
    },
    "應 繳 的 總 税 款 (Married - joint taxation 1 - COMBINE)": {
      value: FormatSTC(33),
      condition: taxtype==40 && STCOut[36]==false,
    },
    "你 及 你 配 偶 應 繳 的 總 税 款 (Married - joint taxation 1)": {
      value: FormatSTC(32),
      condition: taxtype==40,
    },
    "你 及 你 配 偶 應 繳 的 總 税 款 (Married - joint taxation 1)": {
      value: FormatSTC(33),
      condition: taxtype==40,
    },
















    // parent.taxtype==42
    // Married - joint taxation 2
    // 根 據 你 輸 入 的 資 料 ， 你 和 你 配 偶 選 擇 合 併 評 税 會 較 為 有 利 。 
    // 由 於 你 擬 就 配 偶 申 請 傷 殘 受 養 人 免 税 額 ， 並 會 在 合 併 評 税 的 情 況 下 得 益 ， 現 假 設 你 配 偶 申 請 你 名 下 的 所 有 長 者 住 宿 照 顧 開 支 及 有 關 該 長 者 的 傷 殘 受 養 人 免 税 額 （ 如 適 用 ） ， 而 有 關 開 支 及 免 税 額 會 從 你 配 偶 的 入 息 中 扣 除 。
    "總 入 息 (Married - joint taxation 2 - SELF)": {
      value: FormatSTC(0),
      condition: taxtype==42,
    },
    "總 入 息 (Married - joint taxation 2 - SPOUSE)": {
      value: FormatSTC(1),
      condition: taxtype==42,
    },
    "總 入 息 (Married - joint taxation 2 - COMBINE)": {
      value: FormatSTC(2),
      condition: taxtype==42,
    },
    "扣 除 額 (Married - joint taxation 2 - SELF)": {
      value: FormatSTC(57),
      condition: taxtype==42,
    },
    "扣 除 額 (Married - joint taxation 2 - SPOUSE)": {
      value: FormatSTC(58),
      condition: taxtype==42,
    },
    "扣 除 額 (Married - joint taxation 2 - COMBINE)": {
      value: FormatSTC(59),
      condition: taxtype==42,
    },
    "免 税 額：－ 已 婚 人 士 (Married - joint taxation 2 - SELF)": {
      value: FormatSTC(3),
      condition: taxtype==42,
    },
    "免 税 額：－ 已 婚 人 士 (Married - joint taxation 2 - SPOUSE)": {
      value: FormatSTC(3),
      condition: taxtype==42,
    },
    "免 税 額：－ 已 婚 人 士 (Married - joint taxation 2 - COMBINE)": {
      value: FormatSTC(4),
      condition: taxtype==42,
    },
    "免 税 額：－ 傷 殘 人 士 (Married - joint taxation 2 - SELF)": {
      value: FormatSTC(80),
      condition: taxtype==42,
    },
    "免 税 額：－ 傷 殘 人 士 (Married - joint taxation 2 - SPOUSE)": {
      value: FormatSTC(81),
      condition: taxtype==42,
    },
    "免 税 額：－ 傷 殘 人 士 (Married - joint taxation 2 - COMBINE)": {
      value: Format_AddSTC(80, 81),
      condition: taxtype==42,
    },
    "免 税 額：－ 子 女 - 在 課 税 年 度 內 出 生 (Married - joint taxation 2 - SELF)": {
      value: 0,
      condition: taxtype==42 && (STCOut[76]>0 || STCOut[77]>0),
    },
    "免 税 額：－ 子 女 - 在 課 税 年 度 內 出 生 (Married - joint taxation 2 - SPOUSE)": {
      value: FormatSTC(75),
      condition: taxtype==42 && (STCOut[76]>0 || STCOut[77]>0),
    },
    "免 税 額：－ 子 女 - 在 課 税 年 度 內 出 生 (Married - joint taxation 2 - COMBINE)": {
      value: FormatSTC(75),
      condition: taxtype==42 && (STCOut[76]>0 || STCOut[77]>0),
    },
    "免 税 額：－ 子 女 - 在 其 他 課 税 年 度 出 生 (Married - joint taxation 2 - SELF)": {
      value: 0,
      condition: taxtype==42 && (STCOut[76]>0 || STCOut[77]>0),
    },
    "免 税 額：－ 子 女 - 在 其 他 課 税 年 度 出 生 (Married - joint taxation 2 - SPOUSE)": {
      value: FormatSTC(18),
      condition: taxtype==42 && (STCOut[76]>0 || STCOut[77]>0),
    },
    "免 税 額：－ 子 女 - 在 其 他 課 税 年 度 出 生 (Married - joint taxation 2 - COMBINE)": {
      value: FormatSTC(18),
      condition: taxtype==42 && (STCOut[76]>0 || STCOut[77]>0),
    },
    "免 税 額：－ 子 女 (沒 有 在 課 税 年 度 內 出 生)  (Married - joint taxation 2 - SELF)": {
      value: 0,
      condition: taxtype==42 && !(STCOut[76]>0 || STCOut[77]>0),
    },
    "免 税 額：－ 子 女 (沒 有 在 課 税 年 度 內 出 生)  (Married - joint taxation 2 - SPOUSE)": {
      value: FormatSTC(18),
      condition: taxtype==42 && !(STCOut[76]>0 || STCOut[77]>0),
    },
    "免 税 額：－ 子 女 (沒 有 在 課 税 年 度 內 出 生)  (Married - joint taxation 2 - COMBINE)": {
      value: FormatSTC(18),
      condition: taxtype==42 && !(STCOut[76]>0 || STCOut[77]>0),
    },
    "免 税 額：－ 供 養 兄 弟 / 姊 妹  (Married - joint taxation 2 - SELF)": {
      value: 0,
      condition: taxtype==42,
    },
    "免 税 額：－ 供 養 兄 弟 / 姊 妹  (Married - joint taxation 2 - SPOUSE)": {
      value: FormatSTC(19),
      condition: taxtype==42,
    },
    "免 税 額：－ 供 養 兄 弟 / 姊 妹  (Married - joint taxation 2 - COMBINE)": {
      value: FormatSTC(19),
      condition: taxtype==42,
    },
    "免 税 額：－ 全 年 與 你 同 住 的 - 供 養 父 母 / 祖 父 母 或 外 祖 父 母 - 年 齡 為 55 至 59 歲  (Married - joint taxation 2 - SELF)": {
      value: 0,
      condition: taxtype==42 && YrEnd > 2005,
    },
    "免 税 額：－ 全 年 與 你 同 住 的 - 供 養 父 母 / 祖 父 母 或 外 祖 父 母 - 年 齡 為 55 至 59 歲  (Married - joint taxation 2 - SPOUSE)": {
      value: FormatSTC(67),
      condition: taxtype==42 && YrEnd > 2005,
    },
    "免 税 額：－ 全 年 與 你 同 住 的 - 供 養 父 母 / 祖 父 母 或 外 祖 父 母 - 年 齡 為 55 至 59 歲  (Married - joint taxation 2 - COMBINE)": {
      value: FormatSTC(67),
      condition: taxtype==42 && YrEnd > 2005,
    },
    "免 税 額：- 全 年 與 你 同 住 的 - 年 滿 60 歲 或 以 上 ， 或 雖 未 滿 60 歲 ， 但 屬 傷 殘 人 士  (Married - joint taxation 2 - SELF)": {
      value: 0,
      condition: taxtype==42 && YrEnd > 2005,
    },
    "免 税 額：- 全 年 與 你 同 住 的 - 年 滿 60 歲 或 以 上 ， 或 雖 未 滿 60 歲 ， 但 屬 傷 殘 人 士  (Married - joint taxation 2 - SPOUSE)": {
      value: FormatSTC(21),
      condition: taxtype==42 && YrEnd > 2005,
    },
    "免 税 額：- 全 年 與 你 同 住 的 - 年 滿 60 歲 或 以 上 ， 或 雖 未 滿 60 歲 ， 但 屬 傷 殘 人 士  (Married - joint taxation 2 - COMBINE)": {
      value: FormatSTC(21),
      condition: taxtype==42 && YrEnd > 2005,
    },





    "免 税 額：－ 並 非 全 年 與 你 同 住 的 - 供 養 父 母 / 祖 父 母 或 外 祖 父 母 - 年 齡 為 55 至 59 歲  (Married - joint taxation 2 - SELF)": {
      value: 0,
      condition: taxtype==42 && YrEnd > 2005,
    },
    "免 税 額：－ 並 非 全 年 與 你 同 住 的 - 供 養 父 母 / 祖 父 母 或 外 祖 父 母 - 年 齡 為 55 至 59 歲  (Married - joint taxation 2 - SPOUSE)": {
      value: FormatSTC(68),
      condition: taxtype==42 && YrEnd > 2005,
    },
    "免 税 額：－ 並 非 全 年 與 你 同 住 的 - 供 養 父 母 / 祖 父 母 或 外 祖 父 母 - 年 齡 為 55 至 59 歲  (Married - joint taxation 2 - COMBINE)": {
      value: FormatSTC(68),
      condition: taxtype==42 && YrEnd > 2005,
    },
    "免 税 額：- 並 非 全 年 與 你 同 住 的 - 年 滿 60 歲 或 以 上 ， 或 雖 未 滿 60 歲 ， 但 屬 傷 殘 人 士  (Married - joint taxation 2 - SELF)": {
      value: 0,
      condition: taxtype==42 && YrEnd > 2005,
    },
    "免 税 額：- 並 非 全 年 與 你 同 住 的 - 年 滿 60 歲 或 以 上 ， 或 雖 未 滿 60 歲 ， 但 屬 傷 殘 人 士  (Married - joint taxation 2 - SPOUSE)": {
      value: FormatSTC(22),
      condition: taxtype==42 && YrEnd > 2005,
    },
    "免 税 額：- 並 非 全 年 與 你 同 住 的 - 年 滿 60 歲 或 以 上 ， 或 雖 未 滿 60 歲 ， 但 屬 傷 殘 人 士  (Married - joint taxation 2 - COMBINE)": {
      value: FormatSTC(22),
      condition: taxtype==42 && YrEnd > 2005,
    },



    "免 税 額：－ 全 年 與 你 同 住 的 - 供 養 父 母 / 祖 父 母 或 外 祖 父 母 (稅務年度2005年前) (Married - joint taxation 2 - SELF)": {
      value: 0,
      condition: taxtype==42 && YrEnd <= 2005,
    },
    "免 税 額：－ 全 年 與 你 同 住 的 - 供 養 父 母 / 祖 父 母 或 外 祖 父 母 (稅務年度2005年前) (Married - joint taxation 2 - SPOUSE)": {
      value: FormatSTC(21),
      condition: taxtype==42 && YrEnd <= 2005,
    },
    "免 税 額：－ 全 年 與 你 同 住 的 - 供 養 父 母 / 祖 父 母 或 外 祖 父 母 (稅務年度2005年前) (Married - joint taxation 2 - COMBINE)": {
      value: FormatSTC(21),
      condition: taxtype==42 && YrEnd <= 2005,
    },
    "免 税 額：－ 並 非 全 年 與 你 同 住 的 - 供 養 父 母 / 祖 父 母 或 外 祖 父 母 (稅務年度2005年前) (Married - joint taxation 2 - SELF)": {
      value: 0,
      condition: taxtype==42 && YrEnd <= 2005,
    },
    "免 税 額：－ 並 非 全 年 與 你 同 住 的 - 供 養 父 母 / 祖 父 母 或 外 祖 父 母 (稅務年度2005年前) (Married - joint taxation 2 - SPOUSE)": {
      value: FormatSTC(22),
      condition: taxtype==42 && YrEnd <= 2005,
    },
    "免 税 額：－ 並 非 全 年 與 你 同 住 的 - 供 養 父 母 / 祖 父 母 或 外 祖 父 母 (稅務年度2005年前) (Married - joint taxation 2 - COMBINE)": {
      value: FormatSTC(22),
      condition: taxtype==42 && YrEnd <= 2005,
    },

    "免 税 額：－ 傷 殘 受 養 人 (Married - joint taxation 2 - SELF)": {
      value: 0,
      condition: taxtype==42,
    },
    "免 税 額：－ 傷 殘 受 養 人 (Married - joint taxation 2 - SPOUSE)": {
      value: Format_AddSTC(17,11,3),
      condition: taxtype==42,
    },
    "免 税 額：－ 傷 殘 受 養 人 (Married - joint taxation 2 - COMBINE)": {
      value: FormatSTC(23),
      condition: taxtype==42,
    },
    "總 免 税 額 (Married - joint taxation 2 - SELF)": {
      value: FormatSTC(24),
      condition: taxtype==42,
    },
    "總 免 税 額 (Married - joint taxation 2 - SPOUSE)": {
      value: FormatSTC(25),
      condition: taxtype==42,
    },
    "總 免 税 額 (Married - joint taxation 2 - COMBINE)": {
      value: FormatSTC(26),
      condition: taxtype==42,
    },
    "應 課 税 入 息 實 額 (Married - joint taxation 2 - SELF)": {
      value: FormatSTC(27),
      condition: taxtype==42,
    },
    "應 課 税 入 息 實 額 (Married - joint taxation 2 - SPOUSE)": {
      value: FormatSTC(28),
      condition: taxtype==42,
    },
    "應 課 税 入 息 實 額 (Married - joint taxation 2 - COMBINE)": {
      value: FormatSTC(29),
      condition: taxtype==42,
    },
    // No tax rebate
    "應 繳 的 總 税 款 - 標 準 税 率 計 算 (Married - joint taxation 2 - SELF)": {
      value: FormatSTC(30),
      condition: taxtype==42 && STCOut[34]==true,
    },
    "應 繳 的 總 税 款 (Married - joint taxation 2 - SELF)": {
      value: FormatSTC(30),
      condition: taxtype==42 && STCOut[34]==false,
    },
    "應 繳 的 總 税 款 - 標 準 税 率 計 算 (Married - joint taxation 2 - SPOUSE)": {
      value: FormatSTC(31),
      condition: taxtype==42 && STCOut[35]==true,
    },
    "應 繳 的 總 税 款 (Married - joint taxation 2 - SPOUSE)": {
      value: FormatSTC(31),
      condition: taxtype==42 && STCOut[35]==false,
    },
    "應 繳 的 總 税 款 - 標 準 税 率 計 算 (Married - joint taxation 2 - COMBINE)": {
      value: FormatSTC(33),
      condition: taxtype==42 && STCOut[36]==true,
    },
    "應 繳 的 總 税 款 (Married - joint taxation 2 - COMBINE)": {
      value: FormatSTC(33),
      condition: taxtype==42 && STCOut[36]==false,
    },
    "你 及 你 配 偶 應 繳 的 總 税 款 (Married - joint taxation 2)": {
      value: FormatSTC(32),
      condition: taxtype==42,
    },
    "你 及 你 配 偶 應 繳 的 總 税 款 (Married - joint taxation 2)": {
      value: FormatSTC(33),
      condition: taxtype==42,
    },
    













    // parent.taxtype==45
    // Married - JAD, separate taxation
    // 根 據 你 輸 入 的 資 料 ， 你 和 你 配 偶 選 擇 合 併 評 税 會 較 為 有 利 。 
    // "現 假 設 你 配 偶 申 請 了 所 有 長 者 住 宿 照 顧 開 支 和 其 他 免 税 額〔 基 本 免 税 額 和 " +
    // "傷 殘 受 養 人 ( 配 偶 ) 免 税 額 除 外 〕， 計 算 出 的 應 繳 税 款 總 額 如 下 : -</I></H4>")
    "總 入 息 (Married - JAD, separate taxation - SELF)": {
      value: FormatSTC(0),
      condition: taxtype==45,
    },
    "總 入 息 (Married - JAD, separate taxation - SPOUSE)": {
      value: FormatSTC(1),
      condition: taxtype==45,
    },
    "總 入 息 (Married - JAD, separate taxation - COMBINE)": {
      value: FormatSTC(2),
      condition: taxtype==45,
    },
    "扣 除 額 (Married - JAD, separate taxation - SELF)": {
      value: FormatSTC(57),
      condition: taxtype==45,
    },
    "扣 除 額 (Married - JAD, separate taxation - SPOUSE)": {
      value: FormatSTC(58),
      condition: taxtype==45,
    },
    "扣 除 額 (Married - JAD, separate taxation - COMBINE)": {
      value: FormatSTC(59),
      condition: taxtype==45,
    },
    "免 税 額：－ 已 婚 人 士 (Married - JAD, separate taxation - SELF)": {
      value: FormatSTC(3),
      condition: taxtype==45,
    },
    "免 税 額：－ 已 婚 人 士 (Married - JAD, separate taxation - SPOUSE)": {
      value: FormatSTC(3),
      condition: taxtype==45,
    },
    "免 税 額：－ 已 婚 人 士 (Married - JAD, separate taxation - COMBINE)": {
      value: FormatSTC(4),
      condition: taxtype==45,
    },
    "免 税 額：－ 傷 殘 人 士 (Married - JAD, separate taxation - SELF)": {
      value: FormatSTC(80),
      condition: taxtype==45,
    },
    "免 税 額：－ 傷 殘 人 士 (Married - JAD, separate taxation - SPOUSE)": {
      value: FormatSTC(81),
      condition: taxtype==45,
    },
    "免 税 額：－ 傷 殘 人 士 (Married - JAD, separate taxation - COMBINE)": {
      value: Format_AddSTC(80, 81),
      condition: taxtype==45,
    },
    "免 税 額：－ 子 女 - 在 課 税 年 度 內 出 生 (Married - JAD, separate taxation - SELF)": {
      value: 0,
      condition: taxtype==45 && (STCOut[76]>0 || STCOut[77]>0),
    },
    "免 税 額：－ 子 女 - 在 課 税 年 度 內 出 生 (Married - JAD, separate taxation - SPOUSE)": {
      value: FormatSTC(75),
      condition: taxtype==45 && (STCOut[76]>0 || STCOut[77]>0),
    },
    "免 税 額：－ 子 女 - 在 課 税 年 度 內 出 生 (Married - JAD, separate taxation - COMBINE)": {
      value: FormatSTC(75),
      condition: taxtype==45 && (STCOut[76]>0 || STCOut[77]>0),
    },
    "免 税 額：－ 子 女 - 在 其 他 課 税 年 度 出 生 (Married - JAD, separate taxation - SELF)": {
      value: 0,
      condition: taxtype==45 && (STCOut[76]>0 || STCOut[77]>0),
    },
    "免 税 額：－ 子 女 - 在 其 他 課 税 年 度 出 生 (Married - JAD, separate taxation - SPOUSE)": {
      value: FormatSTC(18),
      condition: taxtype==45 && (STCOut[76]>0 || STCOut[77]>0),
    },
    "免 税 額：－ 子 女 - 在 其 他 課 税 年 度 出 生 (Married - JAD, separate taxation - COMBINE)": {
      value: FormatSTC(18),
      condition: taxtype==45 && (STCOut[76]>0 || STCOut[77]>0),
    },
    "免 税 額：－ 子 女 (沒 有 在 課 税 年 度 內 出 生)  (Married - JAD, separate taxation - SELF)": {
      value: 0,
      condition: taxtype==45 && !(STCOut[76]>0 || STCOut[77]>0),
    },
    "免 税 額：－ 子 女 (沒 有 在 課 税 年 度 內 出 生)  (Married - JAD, separate taxation - SPOUSE)": {
      value: FormatSTC(18),
      condition: taxtype==45 && !(STCOut[76]>0 || STCOut[77]>0),
    },
    "免 税 額：－ 子 女 (沒 有 在 課 税 年 度 內 出 生)  (Married - JAD, separate taxation - COMBINE)": {
      value: FormatSTC(18),
      condition: taxtype==45 && !(STCOut[76]>0 || STCOut[77]>0),
    },
    "免 税 額：－ 供 養 兄 弟 / 姊 妹  (Married - JAD, separate taxation - SELF)": {
      value: 0,
      condition: taxtype==45,
    },
    "免 税 額：－ 供 養 兄 弟 / 姊 妹  (Married - JAD, separate taxation - SPOUSE)": {
      value: FormatSTC(19),
      condition: taxtype==45,
    },
    "免 税 額：－ 供 養 兄 弟 / 姊 妹  (Married - JAD, separate taxation - COMBINE)": {
      value: FormatSTC(19),
      condition: taxtype==45,
    },
    "免 税 額：－ 全 年 與 你 同 住 的 - 供 養 父 母 / 祖 父 母 或 外 祖 父 母 - 年 齡 為 55 至 59 歲  (Married - JAD, separate taxation - SELF)": {
      value: 0,
      condition: taxtype==45 && YrEnd > 2005,
    },
    "免 税 額：－ 全 年 與 你 同 住 的 - 供 養 父 母 / 祖 父 母 或 外 祖 父 母 - 年 齡 為 55 至 59 歲  (Married - JAD, separate taxation - SPOUSE)": {
      value: FormatSTC(67),
      condition: taxtype==45 && YrEnd > 2005,
    },
    "免 税 額：－ 全 年 與 你 同 住 的 - 供 養 父 母 / 祖 父 母 或 外 祖 父 母 - 年 齡 為 55 至 59 歲  (Married - JAD, separate taxation - COMBINE)": {
      value: FormatSTC(67),
      condition: taxtype==45 && YrEnd > 2005,
    },
    "免 税 額：- 全 年 與 你 同 住 的 - 年 滿 60 歲 或 以 上 ， 或 雖 未 滿 60 歲 ， 但 屬 傷 殘 人 士  (Married - JAD, separate taxation - SELF)": {
      value: 0,
      condition: taxtype==45 && YrEnd > 2005,
    },
    "免 税 額：- 全 年 與 你 同 住 的 - 年 滿 60 歲 或 以 上 ， 或 雖 未 滿 60 歲 ， 但 屬 傷 殘 人 士  (Married - JAD, separate taxation - SPOUSE)": {
      value: FormatSTC(21),
      condition: taxtype==45 && YrEnd > 2005,
    },
    "免 税 額：- 全 年 與 你 同 住 的 - 年 滿 60 歲 或 以 上 ， 或 雖 未 滿 60 歲 ， 但 屬 傷 殘 人 士  (Married - JAD, separate taxation - COMBINE)": {
      value: FormatSTC(21),
      condition: taxtype==45 && YrEnd > 2005,
    },





    "免 税 額：－ 並 非 全 年 與 你 同 住 的 - 供 養 父 母 / 祖 父 母 或 外 祖 父 母 - 年 齡 為 55 至 59 歲  (Married - JAD, separate taxation - SELF)": {
      value: 0,
      condition: taxtype==45 && YrEnd > 2005,
    },
    "免 税 額：－ 並 非 全 年 與 你 同 住 的 - 供 養 父 母 / 祖 父 母 或 外 祖 父 母 - 年 齡 為 55 至 59 歲  (Married - JAD, separate taxation - SPOUSE)": {
      value: FormatSTC(68),
      condition: taxtype==45 && YrEnd > 2005,
    },
    "免 税 額：－ 並 非 全 年 與 你 同 住 的 - 供 養 父 母 / 祖 父 母 或 外 祖 父 母 - 年 齡 為 55 至 59 歲  (Married - JAD, separate taxation - COMBINE)": {
      value: FormatSTC(68),
      condition: taxtype==45 && YrEnd > 2005,
    },
    "免 税 額：- 並 非 全 年 與 你 同 住 的 - 年 滿 60 歲 或 以 上 ， 或 雖 未 滿 60 歲 ， 但 屬 傷 殘 人 士  (Married - JAD, separate taxation - SELF)": {
      value: 0,
      condition: taxtype==45 && YrEnd > 2005,
    },
    "免 税 額：- 並 非 全 年 與 你 同 住 的 - 年 滿 60 歲 或 以 上 ， 或 雖 未 滿 60 歲 ， 但 屬 傷 殘 人 士  (Married - JAD, separate taxation - SPOUSE)": {
      value: FormatSTC(22),
      condition: taxtype==45 && YrEnd > 2005,
    },
    "免 税 額：- 並 非 全 年 與 你 同 住 的 - 年 滿 60 歲 或 以 上 ， 或 雖 未 滿 60 歲 ， 但 屬 傷 殘 人 士  (Married - JAD, separate taxation - COMBINE)": {
      value: FormatSTC(22),
      condition: taxtype==45 && YrEnd > 2005,
    },



    "免 税 額：－ 全 年 與 你 同 住 的 - 供 養 父 母 / 祖 父 母 或 外 祖 父 母 (稅務年度2005年前) (Married - JAD, separate taxation - SELF)": {
      value: 0,
      condition: taxtype==45 && YrEnd <= 2005,
    },
    "免 税 額：－ 全 年 與 你 同 住 的 - 供 養 父 母 / 祖 父 母 或 外 祖 父 母 (稅務年度2005年前) (Married - JAD, separate taxation - SPOUSE)": {
      value: FormatSTC(21),
      condition: taxtype==45 && YrEnd <= 2005,
    },
    "免 税 額：－ 全 年 與 你 同 住 的 - 供 養 父 母 / 祖 父 母 或 外 祖 父 母 (稅務年度2005年前) (Married - JAD, separate taxation - COMBINE)": {
      value: FormatSTC(21),
      condition: taxtype==45 && YrEnd <= 2005,
    },
    "免 税 額：－ 並 非 全 年 與 你 同 住 的 - 供 養 父 母 / 祖 父 母 或 外 祖 父 母 (稅務年度2005年前) (Married - JAD, separate taxation - SELF)": {
      value: 0,
      condition: taxtype==45 && YrEnd <= 2005,
    },
    "免 税 額：－ 並 非 全 年 與 你 同 住 的 - 供 養 父 母 / 祖 父 母 或 外 祖 父 母 (稅務年度2005年前) (Married - JAD, separate taxation - SPOUSE)": {
      value: FormatSTC(22),
      condition: taxtype==45 && YrEnd <= 2005,
    },
    "免 税 額：－ 並 非 全 年 與 你 同 住 的 - 供 養 父 母 / 祖 父 母 或 外 祖 父 母 (稅務年度2005年前) (Married - JAD, separate taxation - COMBINE)": {
      value: FormatSTC(22),
      condition: taxtype==45 && YrEnd <= 2005,
    },

    "免 税 額：－ 傷 殘 受 養 人 (Married - JAD, separate taxation - SELF)": {
      value: 0,
      condition: taxtype==45,
    },
    "免 税 額：－ 傷 殘 受 養 人 (Married - JAD, separate taxation - SPOUSE)": {
      value: Format_AddSTC(17,11,0),
      condition: taxtype==45,
    },
    "免 税 額：－ 傷 殘 受 養 人 (Married - JAD, separate taxation - COMBINE)": {
      value: FormatSTC(23),
      condition: taxtype==45,
    },
    "總 免 税 額 (Married - JAD, separate taxation - SELF)": {
      value: FormatSTC(24),
      condition: taxtype==45,
    },
    "總 免 税 額 (Married - JAD, separate taxation - SPOUSE)": {
      value: FormatSTC(25),
      condition: taxtype==45,
    },
    "總 免 税 額 (Married - JAD, separate taxation - COMBINE)": {
      value: FormatSTC(26),
      condition: taxtype==45,
    },
    "應 課 税 入 息 實 額 (Married - JAD, separate taxation - SELF)": {
      value: FormatSTC(27),
      condition: taxtype==45,
    },
    "應 課 税 入 息 實 額 (Married - JAD, separate taxation - SPOUSE)": {
      value: FormatSTC(28),
      condition: taxtype==45,
    },
    "應 課 税 入 息 實 額 (Married - JAD, separate taxation - COMBINE)": {
      value: FormatSTC(29),
      condition: taxtype==45,
    },
    // No tax rebate
    "應 繳 的 總 税 款 - 標 準 税 率 計 算 (Married - JAD, separate taxation - SELF)": {
      value: FormatSTC(30),
      condition: taxtype==45 && STCOut[34]==true,
    },
    "應 繳 的 總 税 款 (Married - JAD, separate taxation - SELF)": {
      value: FormatSTC(30),
      condition: taxtype==45 && STCOut[34]==false,
    },
    "應 繳 的 總 税 款 - 標 準 税 率 計 算 (Married - JAD, separate taxation - SPOUSE)": {
      value: FormatSTC(31),
      condition: taxtype==45 && STCOut[35]==true,
    },
    "應 繳 的 總 税 款 (Married - JAD, separate taxation - SPOUSE)": {
      value: FormatSTC(31),
      condition: taxtype==45 && STCOut[35]==false,
    },
    "應 繳 的 總 税 款 - 標 準 税 率 計 算 (Married - JAD, separate taxation - COMBINE)": {
      value: FormatSTC(33),
      condition: taxtype==45 && STCOut[36]==true,
    },
    "應 繳 的 總 税 款 (Married - JAD, separate taxation - COMBINE)": {
      value: FormatSTC(33),
      condition: taxtype==45 && STCOut[36]==false,
    },
    "你 及 你 配 偶 應 繳 的 總 税 款 (Married - JAD, separate taxation)": {
      value: FormatSTC(32),
      condition: taxtype==45,
    },
    "你 及 你 配 偶 應 繳 的 總 税 款 (Married - JAD, separate taxation)": {
      value: FormatSTC(33),
      condition: taxtype==45,
    },
    









    "xxxxxxx (single income family)": {
      value: FormatSTC(99999999),
      condition: false,
    },
  };

  const out = Object.keys(a).filter((k) => {
    return a[k].condition
  })
  .filter((k) => {
    return -1 !== k.indexOf("你 及 你 配 偶 應 繳 的 總 税 款") || -1 !== k.indexOf("你 應 繳 的 總 税 款")
  });


  return out.map((key, idx) => {
    return <p key={idx}>
      {key.replaceAll(" ", "").split("(")[0]} :
      {a[key].value}
    </p>
  });
}
