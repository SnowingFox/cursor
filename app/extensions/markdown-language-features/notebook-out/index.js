var ns = Object.create;
var St = Object.defineProperty;
var is = Object.getOwnPropertyDescriptor;
var os = Object.getOwnPropertyNames;
var ss = Object.getPrototypeOf, as = Object.prototype.hasOwnProperty;
var b = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports);
var ls = (t, e, r, n) => {
  if (e && typeof e == "object" || typeof e == "function") for (let i of os(e)) !as.call(t, i) && i !== r && St(t, i, { get: () => e[i], enumerable: !(n = is(e, i)) || n.enumerable });
  return t;
};
var cs = (t, e, r) => (r = t != null ? ns(ss(t)) : {}, ls(e || !t || !t.__esModule ? St(r, "default", { value: t, enumerable: true }) : r, t));
var Gt = b((Zl, Fs) => {
  Fs.exports = { Aacute: "Á", aacute: "á", Abreve: "Ă", abreve: "ă", ac: "∾", acd: "∿", acE: "∾̳", Acirc: "Â", acirc: "â", acute: "´", Acy: "А", acy: "а", AElig: "Æ", aelig: "æ", af: "⁡", Afr: "𝔄", afr: "𝔞", Agrave: "À", agrave: "à", alefsym: "ℵ", aleph: "ℵ", Alpha: "Α", alpha: "α", Amacr: "Ā", amacr: "ā", amalg: "⨿", amp: "&", AMP: "&", andand: "⩕", And: "⩓", and: "∧", andd: "⩜", andslope: "⩘", andv: "⩚", ang: "∠", ange: "⦤", angle: "∠", angmsdaa: "⦨", angmsdab: "⦩", angmsdac: "⦪", angmsdad: "⦫", angmsdae: "⦬", angmsdaf: "⦭", angmsdag: "⦮", angmsdah: "⦯", angmsd: "∡", angrt: "∟", angrtvb: "⊾", angrtvbd: "⦝", angsph: "∢", angst: "Å", angzarr: "⍼", Aogon: "Ą", aogon: "ą", Aopf: "𝔸", aopf: "𝕒", apacir: "⩯", ap: "≈", apE: "⩰", ape: "≊", apid: "≋", apos: "'", ApplyFunction: "⁡", approx: "≈", approxeq: "≊", Aring: "Å", aring: "å", Ascr: "𝒜", ascr: "𝒶", Assign: "≔", ast: "*", asymp: "≈", asympeq: "≍", Atilde: "Ã", atilde: "ã", Auml: "Ä", auml: "ä", awconint: "∳", awint: "⨑", backcong: "≌", backepsilon: "϶", backprime: "‵", backsim: "∽", backsimeq: "⋍", Backslash: "∖", Barv: "⫧", barvee: "⊽", barwed: "⌅", Barwed: "⌆", barwedge: "⌅", bbrk: "⎵", bbrktbrk: "⎶", bcong: "≌", Bcy: "Б", bcy: "б", bdquo: "„", becaus: "∵", because: "∵", Because: "∵", bemptyv: "⦰", bepsi: "϶", bernou: "ℬ", Bernoullis: "ℬ", Beta: "Β", beta: "β", beth: "ℶ", between: "≬", Bfr: "𝔅", bfr: "𝔟", bigcap: "⋂", bigcirc: "◯", bigcup: "⋃", bigodot: "⨀", bigoplus: "⨁", bigotimes: "⨂", bigsqcup: "⨆", bigstar: "★", bigtriangledown: "▽", bigtriangleup: "△", biguplus: "⨄", bigvee: "⋁", bigwedge: "⋀", bkarow: "⤍", blacklozenge: "⧫", blacksquare: "▪", blacktriangle: "▴", blacktriangledown: "▾", blacktriangleleft: "◂", blacktriangleright: "▸", blank: "␣", blk12: "▒", blk14: "░", blk34: "▓", block: "█", bne: "=⃥", bnequiv: "≡⃥", bNot: "⫭", bnot: "⌐", Bopf: "𝔹", bopf: "𝕓", bot: "⊥", bottom: "⊥", bowtie: "⋈", boxbox: "⧉", boxdl: "┐", boxdL: "╕", boxDl: "╖", boxDL: "╗", boxdr: "┌", boxdR: "╒", boxDr: "╓", boxDR: "╔", boxh: "─", boxH: "═", boxhd: "┬", boxHd: "╤", boxhD: "╥", boxHD: "╦", boxhu: "┴", boxHu: "╧", boxhU: "╨", boxHU: "╩", boxminus: "⊟", boxplus: "⊞", boxtimes: "⊠", boxul: "┘", boxuL: "╛", boxUl: "╜", boxUL: "╝", boxur: "└", boxuR: "╘", boxUr: "╙", boxUR: "╚", boxv: "│", boxV: "║", boxvh: "┼", boxvH: "╪", boxVh: "╫", boxVH: "╬", boxvl: "┤", boxvL: "╡", boxVl: "╢", boxVL: "╣", boxvr: "├", boxvR: "╞", boxVr: "╟", boxVR: "╠", bprime: "‵", breve: "˘", Breve: "˘", brvbar: "¦", bscr: "𝒷", Bscr: "ℬ", bsemi: "⁏", bsim: "∽", bsime: "⋍", bsolb: "⧅", bsol: "\\", bsolhsub: "⟈", bull: "•", bullet: "•", bump: "≎", bumpE: "⪮", bumpe: "≏", Bumpeq: "≎", bumpeq: "≏", Cacute: "Ć", cacute: "ć", capand: "⩄", capbrcup: "⩉", capcap: "⩋", cap: "∩", Cap: "⋒", capcup: "⩇", capdot: "⩀", CapitalDifferentialD: "ⅅ", caps: "∩︀", caret: "⁁", caron: "ˇ", Cayleys: "ℭ", ccaps: "⩍", Ccaron: "Č", ccaron: "č", Ccedil: "Ç", ccedil: "ç", Ccirc: "Ĉ", ccirc: "ĉ", Cconint: "∰", ccups: "⩌", ccupssm: "⩐", Cdot: "Ċ", cdot: "ċ", cedil: "¸", Cedilla: "¸", cemptyv: "⦲", cent: "¢", centerdot: "·", CenterDot: "·", cfr: "𝔠", Cfr: "ℭ", CHcy: "Ч", chcy: "ч", check: "✓", checkmark: "✓", Chi: "Χ", chi: "χ", circ: "ˆ", circeq: "≗", circlearrowleft: "↺", circlearrowright: "↻", circledast: "⊛", circledcirc: "⊚", circleddash: "⊝", CircleDot: "⊙", circledR: "®", circledS: "Ⓢ", CircleMinus: "⊖", CirclePlus: "⊕", CircleTimes: "⊗", cir: "○", cirE: "⧃", cire: "≗", cirfnint: "⨐", cirmid: "⫯", cirscir: "⧂", ClockwiseContourIntegral: "∲", CloseCurlyDoubleQuote: "”", CloseCurlyQuote: "’", clubs: "♣", clubsuit: "♣", colon: ":", Colon: "∷", Colone: "⩴", colone: "≔", coloneq: "≔", comma: ",", commat: "@", comp: "∁", compfn: "∘", complement: "∁", complexes: "ℂ", cong: "≅", congdot: "⩭", Congruent: "≡", conint: "∮", Conint: "∯", ContourIntegral: "∮", copf: "𝕔", Copf: "ℂ", coprod: "∐", Coproduct: "∐", copy: "©", COPY: "©", copysr: "℗", CounterClockwiseContourIntegral: "∳", crarr: "↵", cross: "✗", Cross: "⨯", Cscr: "𝒞", cscr: "𝒸", csub: "⫏", csube: "⫑", csup: "⫐", csupe: "⫒", ctdot: "⋯", cudarrl: "⤸", cudarrr: "⤵", cuepr: "⋞", cuesc: "⋟", cularr: "↶", cularrp: "⤽", cupbrcap: "⩈", cupcap: "⩆", CupCap: "≍", cup: "∪", Cup: "⋓", cupcup: "⩊", cupdot: "⊍", cupor: "⩅", cups: "∪︀", curarr: "↷", curarrm: "⤼", curlyeqprec: "⋞", curlyeqsucc: "⋟", curlyvee: "⋎", curlywedge: "⋏", curren: "¤", curvearrowleft: "↶", curvearrowright: "↷", cuvee: "⋎", cuwed: "⋏", cwconint: "∲", cwint: "∱", cylcty: "⌭", dagger: "†", Dagger: "‡", daleth: "ℸ", darr: "↓", Darr: "↡", dArr: "⇓", dash: "‐", Dashv: "⫤", dashv: "⊣", dbkarow: "⤏", dblac: "˝", Dcaron: "Ď", dcaron: "ď", Dcy: "Д", dcy: "д", ddagger: "‡", ddarr: "⇊", DD: "ⅅ", dd: "ⅆ", DDotrahd: "⤑", ddotseq: "⩷", deg: "°", Del: "∇", Delta: "Δ", delta: "δ", demptyv: "⦱", dfisht: "⥿", Dfr: "𝔇", dfr: "𝔡", dHar: "⥥", dharl: "⇃", dharr: "⇂", DiacriticalAcute: "´", DiacriticalDot: "˙", DiacriticalDoubleAcute: "˝", DiacriticalGrave: "`", DiacriticalTilde: "˜", diam: "⋄", diamond: "⋄", Diamond: "⋄", diamondsuit: "♦", diams: "♦", die: "¨", DifferentialD: "ⅆ", digamma: "ϝ", disin: "⋲", div: "÷", divide: "÷", divideontimes: "⋇", divonx: "⋇", DJcy: "Ђ", djcy: "ђ", dlcorn: "⌞", dlcrop: "⌍", dollar: "$", Dopf: "𝔻", dopf: "𝕕", Dot: "¨", dot: "˙", DotDot: "⃜", doteq: "≐", doteqdot: "≑", DotEqual: "≐", dotminus: "∸", dotplus: "∔", dotsquare: "⊡", doublebarwedge: "⌆", DoubleContourIntegral: "∯", DoubleDot: "¨", DoubleDownArrow: "⇓", DoubleLeftArrow: "⇐", DoubleLeftRightArrow: "⇔", DoubleLeftTee: "⫤", DoubleLongLeftArrow: "⟸", DoubleLongLeftRightArrow: "⟺", DoubleLongRightArrow: "⟹", DoubleRightArrow: "⇒", DoubleRightTee: "⊨", DoubleUpArrow: "⇑", DoubleUpDownArrow: "⇕", DoubleVerticalBar: "∥", DownArrowBar: "⤓", downarrow: "↓", DownArrow: "↓", Downarrow: "⇓", DownArrowUpArrow: "⇵", DownBreve: "̑", downdownarrows: "⇊", downharpoonleft: "⇃", downharpoonright: "⇂", DownLeftRightVector: "⥐", DownLeftTeeVector: "⥞", DownLeftVectorBar: "⥖", DownLeftVector: "↽", DownRightTeeVector: "⥟", DownRightVectorBar: "⥗", DownRightVector: "⇁", DownTeeArrow: "↧", DownTee: "⊤", drbkarow: "⤐", drcorn: "⌟", drcrop: "⌌", Dscr: "𝒟", dscr: "𝒹", DScy: "Ѕ", dscy: "ѕ", dsol: "⧶", Dstrok: "Đ", dstrok: "đ", dtdot: "⋱", dtri: "▿", dtrif: "▾", duarr: "⇵", duhar: "⥯", dwangle: "⦦", DZcy: "Џ", dzcy: "џ", dzigrarr: "⟿", Eacute: "É", eacute: "é", easter: "⩮", Ecaron: "Ě", ecaron: "ě", Ecirc: "Ê", ecirc: "ê", ecir: "≖", ecolon: "≕", Ecy: "Э", ecy: "э", eDDot: "⩷", Edot: "Ė", edot: "ė", eDot: "≑", ee: "ⅇ", efDot: "≒", Efr: "𝔈", efr: "𝔢", eg: "⪚", Egrave: "È", egrave: "è", egs: "⪖", egsdot: "⪘", el: "⪙", Element: "∈", elinters: "⏧", ell: "ℓ", els: "⪕", elsdot: "⪗", Emacr: "Ē", emacr: "ē", empty: "∅", emptyset: "∅", EmptySmallSquare: "◻", emptyv: "∅", EmptyVerySmallSquare: "▫", emsp13: " ", emsp14: " ", emsp: " ", ENG: "Ŋ", eng: "ŋ", ensp: " ", Eogon: "Ę", eogon: "ę", Eopf: "𝔼", eopf: "𝕖", epar: "⋕", eparsl: "⧣", eplus: "⩱", epsi: "ε", Epsilon: "Ε", epsilon: "ε", epsiv: "ϵ", eqcirc: "≖", eqcolon: "≕", eqsim: "≂", eqslantgtr: "⪖", eqslantless: "⪕", Equal: "⩵", equals: "=", EqualTilde: "≂", equest: "≟", Equilibrium: "⇌", equiv: "≡", equivDD: "⩸", eqvparsl: "⧥", erarr: "⥱", erDot: "≓", escr: "ℯ", Escr: "ℰ", esdot: "≐", Esim: "⩳", esim: "≂", Eta: "Η", eta: "η", ETH: "Ð", eth: "ð", Euml: "Ë", euml: "ë", euro: "€", excl: "!", exist: "∃", Exists: "∃", expectation: "ℰ", exponentiale: "ⅇ", ExponentialE: "ⅇ", fallingdotseq: "≒", Fcy: "Ф", fcy: "ф", female: "♀", ffilig: "ﬃ", fflig: "ﬀ", ffllig: "ﬄ", Ffr: "𝔉", ffr: "𝔣", filig: "ﬁ", FilledSmallSquare: "◼", FilledVerySmallSquare: "▪", fjlig: "fj", flat: "♭", fllig: "ﬂ", fltns: "▱", fnof: "ƒ", Fopf: "𝔽", fopf: "𝕗", forall: "∀", ForAll: "∀", fork: "⋔", forkv: "⫙", Fouriertrf: "ℱ", fpartint: "⨍", frac12: "½", frac13: "⅓", frac14: "¼", frac15: "⅕", frac16: "⅙", frac18: "⅛", frac23: "⅔", frac25: "⅖", frac34: "¾", frac35: "⅗", frac38: "⅜", frac45: "⅘", frac56: "⅚", frac58: "⅝", frac78: "⅞", frasl: "⁄", frown: "⌢", fscr: "𝒻", Fscr: "ℱ", gacute: "ǵ", Gamma: "Γ", gamma: "γ", Gammad: "Ϝ", gammad: "ϝ", gap: "⪆", Gbreve: "Ğ", gbreve: "ğ", Gcedil: "Ģ", Gcirc: "Ĝ", gcirc: "ĝ", Gcy: "Г", gcy: "г", Gdot: "Ġ", gdot: "ġ", ge: "≥", gE: "≧", gEl: "⪌", gel: "⋛", geq: "≥", geqq: "≧", geqslant: "⩾", gescc: "⪩", ges: "⩾", gesdot: "⪀", gesdoto: "⪂", gesdotol: "⪄", gesl: "⋛︀", gesles: "⪔", Gfr: "𝔊", gfr: "𝔤", gg: "≫", Gg: "⋙", ggg: "⋙", gimel: "ℷ", GJcy: "Ѓ", gjcy: "ѓ", gla: "⪥", gl: "≷", glE: "⪒", glj: "⪤", gnap: "⪊", gnapprox: "⪊", gne: "⪈", gnE: "≩", gneq: "⪈", gneqq: "≩", gnsim: "⋧", Gopf: "𝔾", gopf: "𝕘", grave: "`", GreaterEqual: "≥", GreaterEqualLess: "⋛", GreaterFullEqual: "≧", GreaterGreater: "⪢", GreaterLess: "≷", GreaterSlantEqual: "⩾", GreaterTilde: "≳", Gscr: "𝒢", gscr: "ℊ", gsim: "≳", gsime: "⪎", gsiml: "⪐", gtcc: "⪧", gtcir: "⩺", gt: ">", GT: ">", Gt: "≫", gtdot: "⋗", gtlPar: "⦕", gtquest: "⩼", gtrapprox: "⪆", gtrarr: "⥸", gtrdot: "⋗", gtreqless: "⋛", gtreqqless: "⪌", gtrless: "≷", gtrsim: "≳", gvertneqq: "≩︀", gvnE: "≩︀", Hacek: "ˇ", hairsp: " ", half: "½", hamilt: "ℋ", HARDcy: "Ъ", hardcy: "ъ", harrcir: "⥈", harr: "↔", hArr: "⇔", harrw: "↭", Hat: "^", hbar: "ℏ", Hcirc: "Ĥ", hcirc: "ĥ", hearts: "♥", heartsuit: "♥", hellip: "…", hercon: "⊹", hfr: "𝔥", Hfr: "ℌ", HilbertSpace: "ℋ", hksearow: "⤥", hkswarow: "⤦", hoarr: "⇿", homtht: "∻", hookleftarrow: "↩", hookrightarrow: "↪", hopf: "𝕙", Hopf: "ℍ", horbar: "―", HorizontalLine: "─", hscr: "𝒽", Hscr: "ℋ", hslash: "ℏ", Hstrok: "Ħ", hstrok: "ħ", HumpDownHump: "≎", HumpEqual: "≏", hybull: "⁃", hyphen: "‐", Iacute: "Í", iacute: "í", ic: "⁣", Icirc: "Î", icirc: "î", Icy: "И", icy: "и", Idot: "İ", IEcy: "Е", iecy: "е", iexcl: "¡", iff: "⇔", ifr: "𝔦", Ifr: "ℑ", Igrave: "Ì", igrave: "ì", ii: "ⅈ", iiiint: "⨌", iiint: "∭", iinfin: "⧜", iiota: "℩", IJlig: "Ĳ", ijlig: "ĳ", Imacr: "Ī", imacr: "ī", image: "ℑ", ImaginaryI: "ⅈ", imagline: "ℐ", imagpart: "ℑ", imath: "ı", Im: "ℑ", imof: "⊷", imped: "Ƶ", Implies: "⇒", incare: "℅", in: "∈", infin: "∞", infintie: "⧝", inodot: "ı", intcal: "⊺", int: "∫", Int: "∬", integers: "ℤ", Integral: "∫", intercal: "⊺", Intersection: "⋂", intlarhk: "⨗", intprod: "⨼", InvisibleComma: "⁣", InvisibleTimes: "⁢", IOcy: "Ё", iocy: "ё", Iogon: "Į", iogon: "į", Iopf: "𝕀", iopf: "𝕚", Iota: "Ι", iota: "ι", iprod: "⨼", iquest: "¿", iscr: "𝒾", Iscr: "ℐ", isin: "∈", isindot: "⋵", isinE: "⋹", isins: "⋴", isinsv: "⋳", isinv: "∈", it: "⁢", Itilde: "Ĩ", itilde: "ĩ", Iukcy: "І", iukcy: "і", Iuml: "Ï", iuml: "ï", Jcirc: "Ĵ", jcirc: "ĵ", Jcy: "Й", jcy: "й", Jfr: "𝔍", jfr: "𝔧", jmath: "ȷ", Jopf: "𝕁", jopf: "𝕛", Jscr: "𝒥", jscr: "𝒿", Jsercy: "Ј", jsercy: "ј", Jukcy: "Є", jukcy: "є", Kappa: "Κ", kappa: "κ", kappav: "ϰ", Kcedil: "Ķ", kcedil: "ķ", Kcy: "К", kcy: "к", Kfr: "𝔎", kfr: "𝔨", kgreen: "ĸ", KHcy: "Х", khcy: "х", KJcy: "Ќ", kjcy: "ќ", Kopf: "𝕂", kopf: "𝕜", Kscr: "𝒦", kscr: "𝓀", lAarr: "⇚", Lacute: "Ĺ", lacute: "ĺ", laemptyv: "⦴", lagran: "ℒ", Lambda: "Λ", lambda: "λ", lang: "⟨", Lang: "⟪", langd: "⦑", langle: "⟨", lap: "⪅", Laplacetrf: "ℒ", laquo: "«", larrb: "⇤", larrbfs: "⤟", larr: "←", Larr: "↞", lArr: "⇐", larrfs: "⤝", larrhk: "↩", larrlp: "↫", larrpl: "⤹", larrsim: "⥳", larrtl: "↢", latail: "⤙", lAtail: "⤛", lat: "⪫", late: "⪭", lates: "⪭︀", lbarr: "⤌", lBarr: "⤎", lbbrk: "❲", lbrace: "{", lbrack: "[", lbrke: "⦋", lbrksld: "⦏", lbrkslu: "⦍", Lcaron: "Ľ", lcaron: "ľ", Lcedil: "Ļ", lcedil: "ļ", lceil: "⌈", lcub: "{", Lcy: "Л", lcy: "л", ldca: "⤶", ldquo: "“", ldquor: "„", ldrdhar: "⥧", ldrushar: "⥋", ldsh: "↲", le: "≤", lE: "≦", LeftAngleBracket: "⟨", LeftArrowBar: "⇤", leftarrow: "←", LeftArrow: "←", Leftarrow: "⇐", LeftArrowRightArrow: "⇆", leftarrowtail: "↢", LeftCeiling: "⌈", LeftDoubleBracket: "⟦", LeftDownTeeVector: "⥡", LeftDownVectorBar: "⥙", LeftDownVector: "⇃", LeftFloor: "⌊", leftharpoondown: "↽", leftharpoonup: "↼", leftleftarrows: "⇇", leftrightarrow: "↔", LeftRightArrow: "↔", Leftrightarrow: "⇔", leftrightarrows: "⇆", leftrightharpoons: "⇋", leftrightsquigarrow: "↭", LeftRightVector: "⥎", LeftTeeArrow: "↤", LeftTee: "⊣", LeftTeeVector: "⥚", leftthreetimes: "⋋", LeftTriangleBar: "⧏", LeftTriangle: "⊲", LeftTriangleEqual: "⊴", LeftUpDownVector: "⥑", LeftUpTeeVector: "⥠", LeftUpVectorBar: "⥘", LeftUpVector: "↿", LeftVectorBar: "⥒", LeftVector: "↼", lEg: "⪋", leg: "⋚", leq: "≤", leqq: "≦", leqslant: "⩽", lescc: "⪨", les: "⩽", lesdot: "⩿", lesdoto: "⪁", lesdotor: "⪃", lesg: "⋚︀", lesges: "⪓", lessapprox: "⪅", lessdot: "⋖", lesseqgtr: "⋚", lesseqqgtr: "⪋", LessEqualGreater: "⋚", LessFullEqual: "≦", LessGreater: "≶", lessgtr: "≶", LessLess: "⪡", lesssim: "≲", LessSlantEqual: "⩽", LessTilde: "≲", lfisht: "⥼", lfloor: "⌊", Lfr: "𝔏", lfr: "𝔩", lg: "≶", lgE: "⪑", lHar: "⥢", lhard: "↽", lharu: "↼", lharul: "⥪", lhblk: "▄", LJcy: "Љ", ljcy: "љ", llarr: "⇇", ll: "≪", Ll: "⋘", llcorner: "⌞", Lleftarrow: "⇚", llhard: "⥫", lltri: "◺", Lmidot: "Ŀ", lmidot: "ŀ", lmoustache: "⎰", lmoust: "⎰", lnap: "⪉", lnapprox: "⪉", lne: "⪇", lnE: "≨", lneq: "⪇", lneqq: "≨", lnsim: "⋦", loang: "⟬", loarr: "⇽", lobrk: "⟦", longleftarrow: "⟵", LongLeftArrow: "⟵", Longleftarrow: "⟸", longleftrightarrow: "⟷", LongLeftRightArrow: "⟷", Longleftrightarrow: "⟺", longmapsto: "⟼", longrightarrow: "⟶", LongRightArrow: "⟶", Longrightarrow: "⟹", looparrowleft: "↫", looparrowright: "↬", lopar: "⦅", Lopf: "𝕃", lopf: "𝕝", loplus: "⨭", lotimes: "⨴", lowast: "∗", lowbar: "_", LowerLeftArrow: "↙", LowerRightArrow: "↘", loz: "◊", lozenge: "◊", lozf: "⧫", lpar: "(", lparlt: "⦓", lrarr: "⇆", lrcorner: "⌟", lrhar: "⇋", lrhard: "⥭", lrm: "‎", lrtri: "⊿", lsaquo: "‹", lscr: "𝓁", Lscr: "ℒ", lsh: "↰", Lsh: "↰", lsim: "≲", lsime: "⪍", lsimg: "⪏", lsqb: "[", lsquo: "‘", lsquor: "‚", Lstrok: "Ł", lstrok: "ł", ltcc: "⪦", ltcir: "⩹", lt: "<", LT: "<", Lt: "≪", ltdot: "⋖", lthree: "⋋", ltimes: "⋉", ltlarr: "⥶", ltquest: "⩻", ltri: "◃", ltrie: "⊴", ltrif: "◂", ltrPar: "⦖", lurdshar: "⥊", luruhar: "⥦", lvertneqq: "≨︀", lvnE: "≨︀", macr: "¯", male: "♂", malt: "✠", maltese: "✠", Map: "⤅", map: "↦", mapsto: "↦", mapstodown: "↧", mapstoleft: "↤", mapstoup: "↥", marker: "▮", mcomma: "⨩", Mcy: "М", mcy: "м", mdash: "—", mDDot: "∺", measuredangle: "∡", MediumSpace: " ", Mellintrf: "ℳ", Mfr: "𝔐", mfr: "𝔪", mho: "℧", micro: "µ", midast: "*", midcir: "⫰", mid: "∣", middot: "·", minusb: "⊟", minus: "−", minusd: "∸", minusdu: "⨪", MinusPlus: "∓", mlcp: "⫛", mldr: "…", mnplus: "∓", models: "⊧", Mopf: "𝕄", mopf: "𝕞", mp: "∓", mscr: "𝓂", Mscr: "ℳ", mstpos: "∾", Mu: "Μ", mu: "μ", multimap: "⊸", mumap: "⊸", nabla: "∇", Nacute: "Ń", nacute: "ń", nang: "∠⃒", nap: "≉", napE: "⩰̸", napid: "≋̸", napos: "ŉ", napprox: "≉", natural: "♮", naturals: "ℕ", natur: "♮", nbsp: " ", nbump: "≎̸", nbumpe: "≏̸", ncap: "⩃", Ncaron: "Ň", ncaron: "ň", Ncedil: "Ņ", ncedil: "ņ", ncong: "≇", ncongdot: "⩭̸", ncup: "⩂", Ncy: "Н", ncy: "н", ndash: "–", nearhk: "⤤", nearr: "↗", neArr: "⇗", nearrow: "↗", ne: "≠", nedot: "≐̸", NegativeMediumSpace: "​", NegativeThickSpace: "​", NegativeThinSpace: "​", NegativeVeryThinSpace: "​", nequiv: "≢", nesear: "⤨", nesim: "≂̸", NestedGreaterGreater: "≫", NestedLessLess: "≪", NewLine: `
`, nexist: "∄", nexists: "∄", Nfr: "𝔑", nfr: "𝔫", ngE: "≧̸", nge: "≱", ngeq: "≱", ngeqq: "≧̸", ngeqslant: "⩾̸", nges: "⩾̸", nGg: "⋙̸", ngsim: "≵", nGt: "≫⃒", ngt: "≯", ngtr: "≯", nGtv: "≫̸", nharr: "↮", nhArr: "⇎", nhpar: "⫲", ni: "∋", nis: "⋼", nisd: "⋺", niv: "∋", NJcy: "Њ", njcy: "њ", nlarr: "↚", nlArr: "⇍", nldr: "‥", nlE: "≦̸", nle: "≰", nleftarrow: "↚", nLeftarrow: "⇍", nleftrightarrow: "↮", nLeftrightarrow: "⇎", nleq: "≰", nleqq: "≦̸", nleqslant: "⩽̸", nles: "⩽̸", nless: "≮", nLl: "⋘̸", nlsim: "≴", nLt: "≪⃒", nlt: "≮", nltri: "⋪", nltrie: "⋬", nLtv: "≪̸", nmid: "∤", NoBreak: "⁠", NonBreakingSpace: " ", nopf: "𝕟", Nopf: "ℕ", Not: "⫬", not: "¬", NotCongruent: "≢", NotCupCap: "≭", NotDoubleVerticalBar: "∦", NotElement: "∉", NotEqual: "≠", NotEqualTilde: "≂̸", NotExists: "∄", NotGreater: "≯", NotGreaterEqual: "≱", NotGreaterFullEqual: "≧̸", NotGreaterGreater: "≫̸", NotGreaterLess: "≹", NotGreaterSlantEqual: "⩾̸", NotGreaterTilde: "≵", NotHumpDownHump: "≎̸", NotHumpEqual: "≏̸", notin: "∉", notindot: "⋵̸", notinE: "⋹̸", notinva: "∉", notinvb: "⋷", notinvc: "⋶", NotLeftTriangleBar: "⧏̸", NotLeftTriangle: "⋪", NotLeftTriangleEqual: "⋬", NotLess: "≮", NotLessEqual: "≰", NotLessGreater: "≸", NotLessLess: "≪̸", NotLessSlantEqual: "⩽̸", NotLessTilde: "≴", NotNestedGreaterGreater: "⪢̸", NotNestedLessLess: "⪡̸", notni: "∌", notniva: "∌", notnivb: "⋾", notnivc: "⋽", NotPrecedes: "⊀", NotPrecedesEqual: "⪯̸", NotPrecedesSlantEqual: "⋠", NotReverseElement: "∌", NotRightTriangleBar: "⧐̸", NotRightTriangle: "⋫", NotRightTriangleEqual: "⋭", NotSquareSubset: "⊏̸", NotSquareSubsetEqual: "⋢", NotSquareSuperset: "⊐̸", NotSquareSupersetEqual: "⋣", NotSubset: "⊂⃒", NotSubsetEqual: "⊈", NotSucceeds: "⊁", NotSucceedsEqual: "⪰̸", NotSucceedsSlantEqual: "⋡", NotSucceedsTilde: "≿̸", NotSuperset: "⊃⃒", NotSupersetEqual: "⊉", NotTilde: "≁", NotTildeEqual: "≄", NotTildeFullEqual: "≇", NotTildeTilde: "≉", NotVerticalBar: "∤", nparallel: "∦", npar: "∦", nparsl: "⫽⃥", npart: "∂̸", npolint: "⨔", npr: "⊀", nprcue: "⋠", nprec: "⊀", npreceq: "⪯̸", npre: "⪯̸", nrarrc: "⤳̸", nrarr: "↛", nrArr: "⇏", nrarrw: "↝̸", nrightarrow: "↛", nRightarrow: "⇏", nrtri: "⋫", nrtrie: "⋭", nsc: "⊁", nsccue: "⋡", nsce: "⪰̸", Nscr: "𝒩", nscr: "𝓃", nshortmid: "∤", nshortparallel: "∦", nsim: "≁", nsime: "≄", nsimeq: "≄", nsmid: "∤", nspar: "∦", nsqsube: "⋢", nsqsupe: "⋣", nsub: "⊄", nsubE: "⫅̸", nsube: "⊈", nsubset: "⊂⃒", nsubseteq: "⊈", nsubseteqq: "⫅̸", nsucc: "⊁", nsucceq: "⪰̸", nsup: "⊅", nsupE: "⫆̸", nsupe: "⊉", nsupset: "⊃⃒", nsupseteq: "⊉", nsupseteqq: "⫆̸", ntgl: "≹", Ntilde: "Ñ", ntilde: "ñ", ntlg: "≸", ntriangleleft: "⋪", ntrianglelefteq: "⋬", ntriangleright: "⋫", ntrianglerighteq: "⋭", Nu: "Ν", nu: "ν", num: "#", numero: "№", numsp: " ", nvap: "≍⃒", nvdash: "⊬", nvDash: "⊭", nVdash: "⊮", nVDash: "⊯", nvge: "≥⃒", nvgt: ">⃒", nvHarr: "⤄", nvinfin: "⧞", nvlArr: "⤂", nvle: "≤⃒", nvlt: "<⃒", nvltrie: "⊴⃒", nvrArr: "⤃", nvrtrie: "⊵⃒", nvsim: "∼⃒", nwarhk: "⤣", nwarr: "↖", nwArr: "⇖", nwarrow: "↖", nwnear: "⤧", Oacute: "Ó", oacute: "ó", oast: "⊛", Ocirc: "Ô", ocirc: "ô", ocir: "⊚", Ocy: "О", ocy: "о", odash: "⊝", Odblac: "Ő", odblac: "ő", odiv: "⨸", odot: "⊙", odsold: "⦼", OElig: "Œ", oelig: "œ", ofcir: "⦿", Ofr: "𝔒", ofr: "𝔬", ogon: "˛", Ograve: "Ò", ograve: "ò", ogt: "⧁", ohbar: "⦵", ohm: "Ω", oint: "∮", olarr: "↺", olcir: "⦾", olcross: "⦻", oline: "‾", olt: "⧀", Omacr: "Ō", omacr: "ō", Omega: "Ω", omega: "ω", Omicron: "Ο", omicron: "ο", omid: "⦶", ominus: "⊖", Oopf: "𝕆", oopf: "𝕠", opar: "⦷", OpenCurlyDoubleQuote: "“", OpenCurlyQuote: "‘", operp: "⦹", oplus: "⊕", orarr: "↻", Or: "⩔", or: "∨", ord: "⩝", order: "ℴ", orderof: "ℴ", ordf: "ª", ordm: "º", origof: "⊶", oror: "⩖", orslope: "⩗", orv: "⩛", oS: "Ⓢ", Oscr: "𝒪", oscr: "ℴ", Oslash: "Ø", oslash: "ø", osol: "⊘", Otilde: "Õ", otilde: "õ", otimesas: "⨶", Otimes: "⨷", otimes: "⊗", Ouml: "Ö", ouml: "ö", ovbar: "⌽", OverBar: "‾", OverBrace: "⏞", OverBracket: "⎴", OverParenthesis: "⏜", para: "¶", parallel: "∥", par: "∥", parsim: "⫳", parsl: "⫽", part: "∂", PartialD: "∂", Pcy: "П", pcy: "п", percnt: "%", period: ".", permil: "‰", perp: "⊥", pertenk: "‱", Pfr: "𝔓", pfr: "𝔭", Phi: "Φ", phi: "φ", phiv: "ϕ", phmmat: "ℳ", phone: "☎", Pi: "Π", pi: "π", pitchfork: "⋔", piv: "ϖ", planck: "ℏ", planckh: "ℎ", plankv: "ℏ", plusacir: "⨣", plusb: "⊞", pluscir: "⨢", plus: "+", plusdo: "∔", plusdu: "⨥", pluse: "⩲", PlusMinus: "±", plusmn: "±", plussim: "⨦", plustwo: "⨧", pm: "±", Poincareplane: "ℌ", pointint: "⨕", popf: "𝕡", Popf: "ℙ", pound: "£", prap: "⪷", Pr: "⪻", pr: "≺", prcue: "≼", precapprox: "⪷", prec: "≺", preccurlyeq: "≼", Precedes: "≺", PrecedesEqual: "⪯", PrecedesSlantEqual: "≼", PrecedesTilde: "≾", preceq: "⪯", precnapprox: "⪹", precneqq: "⪵", precnsim: "⋨", pre: "⪯", prE: "⪳", precsim: "≾", prime: "′", Prime: "″", primes: "ℙ", prnap: "⪹", prnE: "⪵", prnsim: "⋨", prod: "∏", Product: "∏", profalar: "⌮", profline: "⌒", profsurf: "⌓", prop: "∝", Proportional: "∝", Proportion: "∷", propto: "∝", prsim: "≾", prurel: "⊰", Pscr: "𝒫", pscr: "𝓅", Psi: "Ψ", psi: "ψ", puncsp: " ", Qfr: "𝔔", qfr: "𝔮", qint: "⨌", qopf: "𝕢", Qopf: "ℚ", qprime: "⁗", Qscr: "𝒬", qscr: "𝓆", quaternions: "ℍ", quatint: "⨖", quest: "?", questeq: "≟", quot: '"', QUOT: '"', rAarr: "⇛", race: "∽̱", Racute: "Ŕ", racute: "ŕ", radic: "√", raemptyv: "⦳", rang: "⟩", Rang: "⟫", rangd: "⦒", range: "⦥", rangle: "⟩", raquo: "»", rarrap: "⥵", rarrb: "⇥", rarrbfs: "⤠", rarrc: "⤳", rarr: "→", Rarr: "↠", rArr: "⇒", rarrfs: "⤞", rarrhk: "↪", rarrlp: "↬", rarrpl: "⥅", rarrsim: "⥴", Rarrtl: "⤖", rarrtl: "↣", rarrw: "↝", ratail: "⤚", rAtail: "⤜", ratio: "∶", rationals: "ℚ", rbarr: "⤍", rBarr: "⤏", RBarr: "⤐", rbbrk: "❳", rbrace: "}", rbrack: "]", rbrke: "⦌", rbrksld: "⦎", rbrkslu: "⦐", Rcaron: "Ř", rcaron: "ř", Rcedil: "Ŗ", rcedil: "ŗ", rceil: "⌉", rcub: "}", Rcy: "Р", rcy: "р", rdca: "⤷", rdldhar: "⥩", rdquo: "”", rdquor: "”", rdsh: "↳", real: "ℜ", realine: "ℛ", realpart: "ℜ", reals: "ℝ", Re: "ℜ", rect: "▭", reg: "®", REG: "®", ReverseElement: "∋", ReverseEquilibrium: "⇋", ReverseUpEquilibrium: "⥯", rfisht: "⥽", rfloor: "⌋", rfr: "𝔯", Rfr: "ℜ", rHar: "⥤", rhard: "⇁", rharu: "⇀", rharul: "⥬", Rho: "Ρ", rho: "ρ", rhov: "ϱ", RightAngleBracket: "⟩", RightArrowBar: "⇥", rightarrow: "→", RightArrow: "→", Rightarrow: "⇒", RightArrowLeftArrow: "⇄", rightarrowtail: "↣", RightCeiling: "⌉", RightDoubleBracket: "⟧", RightDownTeeVector: "⥝", RightDownVectorBar: "⥕", RightDownVector: "⇂", RightFloor: "⌋", rightharpoondown: "⇁", rightharpoonup: "⇀", rightleftarrows: "⇄", rightleftharpoons: "⇌", rightrightarrows: "⇉", rightsquigarrow: "↝", RightTeeArrow: "↦", RightTee: "⊢", RightTeeVector: "⥛", rightthreetimes: "⋌", RightTriangleBar: "⧐", RightTriangle: "⊳", RightTriangleEqual: "⊵", RightUpDownVector: "⥏", RightUpTeeVector: "⥜", RightUpVectorBar: "⥔", RightUpVector: "↾", RightVectorBar: "⥓", RightVector: "⇀", ring: "˚", risingdotseq: "≓", rlarr: "⇄", rlhar: "⇌", rlm: "‏", rmoustache: "⎱", rmoust: "⎱", rnmid: "⫮", roang: "⟭", roarr: "⇾", robrk: "⟧", ropar: "⦆", ropf: "𝕣", Ropf: "ℝ", roplus: "⨮", rotimes: "⨵", RoundImplies: "⥰", rpar: ")", rpargt: "⦔", rppolint: "⨒", rrarr: "⇉", Rrightarrow: "⇛", rsaquo: "›", rscr: "𝓇", Rscr: "ℛ", rsh: "↱", Rsh: "↱", rsqb: "]", rsquo: "’", rsquor: "’", rthree: "⋌", rtimes: "⋊", rtri: "▹", rtrie: "⊵", rtrif: "▸", rtriltri: "⧎", RuleDelayed: "⧴", ruluhar: "⥨", rx: "℞", Sacute: "Ś", sacute: "ś", sbquo: "‚", scap: "⪸", Scaron: "Š", scaron: "š", Sc: "⪼", sc: "≻", sccue: "≽", sce: "⪰", scE: "⪴", Scedil: "Ş", scedil: "ş", Scirc: "Ŝ", scirc: "ŝ", scnap: "⪺", scnE: "⪶", scnsim: "⋩", scpolint: "⨓", scsim: "≿", Scy: "С", scy: "с", sdotb: "⊡", sdot: "⋅", sdote: "⩦", searhk: "⤥", searr: "↘", seArr: "⇘", searrow: "↘", sect: "§", semi: ";", seswar: "⤩", setminus: "∖", setmn: "∖", sext: "✶", Sfr: "𝔖", sfr: "𝔰", sfrown: "⌢", sharp: "♯", SHCHcy: "Щ", shchcy: "щ", SHcy: "Ш", shcy: "ш", ShortDownArrow: "↓", ShortLeftArrow: "←", shortmid: "∣", shortparallel: "∥", ShortRightArrow: "→", ShortUpArrow: "↑", shy: "­", Sigma: "Σ", sigma: "σ", sigmaf: "ς", sigmav: "ς", sim: "∼", simdot: "⩪", sime: "≃", simeq: "≃", simg: "⪞", simgE: "⪠", siml: "⪝", simlE: "⪟", simne: "≆", simplus: "⨤", simrarr: "⥲", slarr: "←", SmallCircle: "∘", smallsetminus: "∖", smashp: "⨳", smeparsl: "⧤", smid: "∣", smile: "⌣", smt: "⪪", smte: "⪬", smtes: "⪬︀", SOFTcy: "Ь", softcy: "ь", solbar: "⌿", solb: "⧄", sol: "/", Sopf: "𝕊", sopf: "𝕤", spades: "♠", spadesuit: "♠", spar: "∥", sqcap: "⊓", sqcaps: "⊓︀", sqcup: "⊔", sqcups: "⊔︀", Sqrt: "√", sqsub: "⊏", sqsube: "⊑", sqsubset: "⊏", sqsubseteq: "⊑", sqsup: "⊐", sqsupe: "⊒", sqsupset: "⊐", sqsupseteq: "⊒", square: "□", Square: "□", SquareIntersection: "⊓", SquareSubset: "⊏", SquareSubsetEqual: "⊑", SquareSuperset: "⊐", SquareSupersetEqual: "⊒", SquareUnion: "⊔", squarf: "▪", squ: "□", squf: "▪", srarr: "→", Sscr: "𝒮", sscr: "𝓈", ssetmn: "∖", ssmile: "⌣", sstarf: "⋆", Star: "⋆", star: "☆", starf: "★", straightepsilon: "ϵ", straightphi: "ϕ", strns: "¯", sub: "⊂", Sub: "⋐", subdot: "⪽", subE: "⫅", sube: "⊆", subedot: "⫃", submult: "⫁", subnE: "⫋", subne: "⊊", subplus: "⪿", subrarr: "⥹", subset: "⊂", Subset: "⋐", subseteq: "⊆", subseteqq: "⫅", SubsetEqual: "⊆", subsetneq: "⊊", subsetneqq: "⫋", subsim: "⫇", subsub: "⫕", subsup: "⫓", succapprox: "⪸", succ: "≻", succcurlyeq: "≽", Succeeds: "≻", SucceedsEqual: "⪰", SucceedsSlantEqual: "≽", SucceedsTilde: "≿", succeq: "⪰", succnapprox: "⪺", succneqq: "⪶", succnsim: "⋩", succsim: "≿", SuchThat: "∋", sum: "∑", Sum: "∑", sung: "♪", sup1: "¹", sup2: "²", sup3: "³", sup: "⊃", Sup: "⋑", supdot: "⪾", supdsub: "⫘", supE: "⫆", supe: "⊇", supedot: "⫄", Superset: "⊃", SupersetEqual: "⊇", suphsol: "⟉", suphsub: "⫗", suplarr: "⥻", supmult: "⫂", supnE: "⫌", supne: "⊋", supplus: "⫀", supset: "⊃", Supset: "⋑", supseteq: "⊇", supseteqq: "⫆", supsetneq: "⊋", supsetneqq: "⫌", supsim: "⫈", supsub: "⫔", supsup: "⫖", swarhk: "⤦", swarr: "↙", swArr: "⇙", swarrow: "↙", swnwar: "⤪", szlig: "ß", Tab: "	", target: "⌖", Tau: "Τ", tau: "τ", tbrk: "⎴", Tcaron: "Ť", tcaron: "ť", Tcedil: "Ţ", tcedil: "ţ", Tcy: "Т", tcy: "т", tdot: "⃛", telrec: "⌕", Tfr: "𝔗", tfr: "𝔱", there4: "∴", therefore: "∴", Therefore: "∴", Theta: "Θ", theta: "θ", thetasym: "ϑ", thetav: "ϑ", thickapprox: "≈", thicksim: "∼", ThickSpace: "  ", ThinSpace: " ", thinsp: " ", thkap: "≈", thksim: "∼", THORN: "Þ", thorn: "þ", tilde: "˜", Tilde: "∼", TildeEqual: "≃", TildeFullEqual: "≅", TildeTilde: "≈", timesbar: "⨱", timesb: "⊠", times: "×", timesd: "⨰", tint: "∭", toea: "⤨", topbot: "⌶", topcir: "⫱", top: "⊤", Topf: "𝕋", topf: "𝕥", topfork: "⫚", tosa: "⤩", tprime: "‴", trade: "™", TRADE: "™", triangle: "▵", triangledown: "▿", triangleleft: "◃", trianglelefteq: "⊴", triangleq: "≜", triangleright: "▹", trianglerighteq: "⊵", tridot: "◬", trie: "≜", triminus: "⨺", TripleDot: "⃛", triplus: "⨹", trisb: "⧍", tritime: "⨻", trpezium: "⏢", Tscr: "𝒯", tscr: "𝓉", TScy: "Ц", tscy: "ц", TSHcy: "Ћ", tshcy: "ћ", Tstrok: "Ŧ", tstrok: "ŧ", twixt: "≬", twoheadleftarrow: "↞", twoheadrightarrow: "↠", Uacute: "Ú", uacute: "ú", uarr: "↑", Uarr: "↟", uArr: "⇑", Uarrocir: "⥉", Ubrcy: "Ў", ubrcy: "ў", Ubreve: "Ŭ", ubreve: "ŭ", Ucirc: "Û", ucirc: "û", Ucy: "У", ucy: "у", udarr: "⇅", Udblac: "Ű", udblac: "ű", udhar: "⥮", ufisht: "⥾", Ufr: "𝔘", ufr: "𝔲", Ugrave: "Ù", ugrave: "ù", uHar: "⥣", uharl: "↿", uharr: "↾", uhblk: "▀", ulcorn: "⌜", ulcorner: "⌜", ulcrop: "⌏", ultri: "◸", Umacr: "Ū", umacr: "ū", uml: "¨", UnderBar: "_", UnderBrace: "⏟", UnderBracket: "⎵", UnderParenthesis: "⏝", Union: "⋃", UnionPlus: "⊎", Uogon: "Ų", uogon: "ų", Uopf: "𝕌", uopf: "𝕦", UpArrowBar: "⤒", uparrow: "↑", UpArrow: "↑", Uparrow: "⇑", UpArrowDownArrow: "⇅", updownarrow: "↕", UpDownArrow: "↕", Updownarrow: "⇕", UpEquilibrium: "⥮", upharpoonleft: "↿", upharpoonright: "↾", uplus: "⊎", UpperLeftArrow: "↖", UpperRightArrow: "↗", upsi: "υ", Upsi: "ϒ", upsih: "ϒ", Upsilon: "Υ", upsilon: "υ", UpTeeArrow: "↥", UpTee: "⊥", upuparrows: "⇈", urcorn: "⌝", urcorner: "⌝", urcrop: "⌎", Uring: "Ů", uring: "ů", urtri: "◹", Uscr: "𝒰", uscr: "𝓊", utdot: "⋰", Utilde: "Ũ", utilde: "ũ", utri: "▵", utrif: "▴", uuarr: "⇈", Uuml: "Ü", uuml: "ü", uwangle: "⦧", vangrt: "⦜", varepsilon: "ϵ", varkappa: "ϰ", varnothing: "∅", varphi: "ϕ", varpi: "ϖ", varpropto: "∝", varr: "↕", vArr: "⇕", varrho: "ϱ", varsigma: "ς", varsubsetneq: "⊊︀", varsubsetneqq: "⫋︀", varsupsetneq: "⊋︀", varsupsetneqq: "⫌︀", vartheta: "ϑ", vartriangleleft: "⊲", vartriangleright: "⊳", vBar: "⫨", Vbar: "⫫", vBarv: "⫩", Vcy: "В", vcy: "в", vdash: "⊢", vDash: "⊨", Vdash: "⊩", VDash: "⊫", Vdashl: "⫦", veebar: "⊻", vee: "∨", Vee: "⋁", veeeq: "≚", vellip: "⋮", verbar: "|", Verbar: "‖", vert: "|", Vert: "‖", VerticalBar: "∣", VerticalLine: "|", VerticalSeparator: "❘", VerticalTilde: "≀", VeryThinSpace: " ", Vfr: "𝔙", vfr: "𝔳", vltri: "⊲", vnsub: "⊂⃒", vnsup: "⊃⃒", Vopf: "𝕍", vopf: "𝕧", vprop: "∝", vrtri: "⊳", Vscr: "𝒱", vscr: "𝓋", vsubnE: "⫋︀", vsubne: "⊊︀", vsupnE: "⫌︀", vsupne: "⊋︀", Vvdash: "⊪", vzigzag: "⦚", Wcirc: "Ŵ", wcirc: "ŵ", wedbar: "⩟", wedge: "∧", Wedge: "⋀", wedgeq: "≙", weierp: "℘", Wfr: "𝔚", wfr: "𝔴", Wopf: "𝕎", wopf: "𝕨", wp: "℘", wr: "≀", wreath: "≀", Wscr: "𝒲", wscr: "𝓌", xcap: "⋂", xcirc: "◯", xcup: "⋃", xdtri: "▽", Xfr: "𝔛", xfr: "𝔵", xharr: "⟷", xhArr: "⟺", Xi: "Ξ", xi: "ξ", xlarr: "⟵", xlArr: "⟸", xmap: "⟼", xnis: "⋻", xodot: "⨀", Xopf: "𝕏", xopf: "𝕩", xoplus: "⨁", xotime: "⨂", xrarr: "⟶", xrArr: "⟹", Xscr: "𝒳", xscr: "𝓍", xsqcup: "⨆", xuplus: "⨄", xutri: "△", xvee: "⋁", xwedge: "⋀", Yacute: "Ý", yacute: "ý", YAcy: "Я", yacy: "я", Ycirc: "Ŷ", ycirc: "ŷ", Ycy: "Ы", ycy: "ы", yen: "¥", Yfr: "𝔜", yfr: "𝔶", YIcy: "Ї", yicy: "ї", Yopf: "𝕐", yopf: "𝕪", Yscr: "𝒴", yscr: "𝓎", YUcy: "Ю", yucy: "ю", yuml: "ÿ", Yuml: "Ÿ", Zacute: "Ź", zacute: "ź", Zcaron: "Ž", zcaron: "ž", Zcy: "З", zcy: "з", Zdot: "Ż", zdot: "ż", zeetrf: "ℨ", ZeroWidthSpace: "​", Zeta: "Ζ", zeta: "ζ", zfr: "𝔷", Zfr: "ℨ", ZHcy: "Ж", zhcy: "ж", zigrarr: "⇝", zopf: "𝕫", Zopf: "ℤ", Zscr: "𝒵", zscr: "𝓏", zwj: "‍", zwnj: "‌" };
});
var Mr = b((Yl, Vt) => {
  "use strict";
  Vt.exports = Gt();
});
var Qe = b((Xl, jt) => {
  jt.exports = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/;
});
var Zt = b((Jl, $t) => {
  "use strict";
  var Wt = {};
  function Rs(t) {
    var e, r, n = Wt[t];
    if (n) return n;
    for (n = Wt[t] = [], e = 0; e < 128; e++) r = String.fromCharCode(e), /^[0-9a-z]$/i.test(r) ? n.push(r) : n.push("%" + ("0" + e.toString(16).toUpperCase()).slice(-2));
    for (e = 0; e < t.length; e++) n[t.charCodeAt(e)] = t[e];
    return n;
  }
  function er(t, e, r) {
    var n, i, o, a, s, l = "";
    for (typeof e != "string" && (r = e, e = er.defaultChars), typeof r > "u" && (r = true), s = Rs(e), n = 0, i = t.length; n < i; n++) {
      if (o = t.charCodeAt(n), r && o === 37 && n + 2 < i && /^[0-9a-f]{2}$/i.test(t.slice(n + 1, n + 3))) {
        l += t.slice(n, n + 3), n += 2;
        continue;
      }
      if (o < 128) {
        l += s[o];
        continue;
      }
      if (o >= 55296 && o <= 57343) {
        if (o >= 55296 && o <= 56319 && n + 1 < i && (a = t.charCodeAt(n + 1), a >= 56320 && a <= 57343)) {
          l += encodeURIComponent(t[n] + t[n + 1]), n++;
          continue;
        }
        l += "%EF%BF%BD";
        continue;
      }
      l += encodeURIComponent(t[n]);
    }
    return l;
  }
  er.defaultChars = ";/?:@&=+$,-_.!~*'()#";
  er.componentChars = "-_.!~*'()";
  $t.exports = er;
});
var Jt = b((Kl, Xt) => {
  "use strict";
  var Yt = {};
  function Is(t) {
    var e, r, n = Yt[t];
    if (n) return n;
    for (n = Yt[t] = [], e = 0; e < 128; e++) r = String.fromCharCode(e), n.push(r);
    for (e = 0; e < t.length; e++) r = t.charCodeAt(e), n[r] = "%" + ("0" + r.toString(16).toUpperCase()).slice(-2);
    return n;
  }
  function rr(t, e) {
    var r;
    return typeof e != "string" && (e = rr.defaultChars), r = Is(e), t.replace(/(%[a-f0-9]{2})+/gi, function(n) {
      var i, o, a, s, l, c, f, p = "";
      for (i = 0, o = n.length; i < o; i += 3) {
        if (a = parseInt(n.slice(i + 1, i + 3), 16), a < 128) {
          p += r[a];
          continue;
        }
        if ((a & 224) === 192 && i + 3 < o && (s = parseInt(n.slice(i + 4, i + 6), 16), (s & 192) === 128)) {
          f = a << 6 & 1984 | s & 63, f < 128 ? p += "��" : p += String.fromCharCode(f), i += 3;
          continue;
        }
        if ((a & 240) === 224 && i + 6 < o && (s = parseInt(n.slice(i + 4, i + 6), 16), l = parseInt(n.slice(i + 7, i + 9), 16), (s & 192) === 128 && (l & 192) === 128)) {
          f = a << 12 & 61440 | s << 6 & 4032 | l & 63, f < 2048 || f >= 55296 && f <= 57343 ? p += "���" : p += String.fromCharCode(f), i += 6;
          continue;
        }
        if ((a & 248) === 240 && i + 9 < o && (s = parseInt(n.slice(i + 4, i + 6), 16), l = parseInt(n.slice(i + 7, i + 9), 16), c = parseInt(n.slice(i + 10, i + 12), 16), (s & 192) === 128 && (l & 192) === 128 && (c & 192) === 128)) {
          f = a << 18 & 1835008 | s << 12 & 258048 | l << 6 & 4032 | c & 63, f < 65536 || f > 1114111 ? p += "����" : (f -= 65536, p += String.fromCharCode(55296 + (f >> 10), 56320 + (f & 1023))), i += 9;
          continue;
        }
        p += "�";
      }
      return p;
    });
  }
  rr.defaultChars = ";/?:@&=+$,#";
  rr.componentChars = "";
  Xt.exports = rr;
});
var Qt = b((Ql, Kt) => {
  "use strict";
  Kt.exports = function(e) {
    var r = "";
    return r += e.protocol || "", r += e.slashes ? "//" : "", r += e.auth ? e.auth + "@" : "", e.hostname && e.hostname.indexOf(":") !== -1 ? r += "[" + e.hostname + "]" : r += e.hostname || "", r += e.port ? ":" + e.port : "", r += e.pathname || "", r += e.search || "", r += e.hash || "", r;
  };
});
var an = b((ec, sn) => {
  "use strict";
  function tr() {
    this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
  }
  var Ms = /^([a-z0-9.+-]+:)/i, Ls = /:[0-9]*$/, Os = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, Ns = ["<", ">", '"', "`", " ", "\r", `
`, "	"], zs = ["{", "}", "|", "\\", "^", "`"].concat(Ns), Ps = ["'"].concat(zs), en = ["%", "/", "?", ";", "#"].concat(Ps), rn = ["/", "?", "#"], Bs = 255, tn = /^[+a-z0-9A-Z_-]{0,63}$/, Us = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, nn = { javascript: true, "javascript:": true }, on = { http: true, https: true, ftp: true, gopher: true, file: true, "http:": true, "https:": true, "ftp:": true, "gopher:": true, "file:": true };
  function Hs(t, e) {
    if (t && t instanceof tr) return t;
    var r = new tr();
    return r.parse(t, e), r;
  }
  tr.prototype.parse = function(t, e) {
    var r, n, i, o, a, s = t;
    if (s = s.trim(), !e && t.split("#").length === 1) {
      var l = Os.exec(s);
      if (l) return this.pathname = l[1], l[2] && (this.search = l[2]), this;
    }
    var c = Ms.exec(s);
    if (c && (c = c[0], i = c.toLowerCase(), this.protocol = c, s = s.substr(c.length)), (e || c || s.match(/^\/\/[^@\/]+@[^@\/]+/)) && (a = s.substr(0, 2) === "//", a && !(c && nn[c]) && (s = s.substr(2), this.slashes = true)), !nn[c] && (a || c && !on[c])) {
      var f = -1;
      for (r = 0; r < rn.length; r++) o = s.indexOf(rn[r]), o !== -1 && (f === -1 || o < f) && (f = o);
      var p, d;
      for (f === -1 ? d = s.lastIndexOf("@") : d = s.lastIndexOf("@", f), d !== -1 && (p = s.slice(0, d), s = s.slice(d + 1), this.auth = p), f = -1, r = 0; r < en.length; r++) o = s.indexOf(en[r]), o !== -1 && (f === -1 || o < f) && (f = o);
      f === -1 && (f = s.length), s[f - 1] === ":" && f--;
      var h = s.slice(0, f);
      s = s.slice(f), this.parseHost(h), this.hostname = this.hostname || "";
      var g = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
      if (!g) {
        var k = this.hostname.split(/\./);
        for (r = 0, n = k.length; r < n; r++) {
          var D = k[r];
          if (D && !D.match(tn)) {
            for (var C = "", _ = 0, y = D.length; _ < y; _++) D.charCodeAt(_) > 127 ? C += "x" : C += D[_];
            if (!C.match(tn)) {
              var v = k.slice(0, r), T = k.slice(r + 1), x = D.match(Us);
              x && (v.push(x[1]), T.unshift(x[2])), T.length && (s = T.join(".") + s), this.hostname = v.join(".");
              break;
            }
          }
        }
      }
      this.hostname.length > Bs && (this.hostname = ""), g && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
    }
    var R = s.indexOf("#");
    R !== -1 && (this.hash = s.substr(R), s = s.slice(0, R));
    var O = s.indexOf("?");
    return O !== -1 && (this.search = s.substr(O), s = s.slice(0, O)), s && (this.pathname = s), on[i] && this.hostname && !this.pathname && (this.pathname = ""), this;
  };
  tr.prototype.parseHost = function(t) {
    var e = Ls.exec(t);
    e && (e = e[0], e !== ":" && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), t && (this.hostname = t);
  };
  sn.exports = Hs;
});
var Lr = b((rc, Pe) => {
  "use strict";
  Pe.exports.encode = Zt();
  Pe.exports.decode = Jt();
  Pe.exports.format = Qt();
  Pe.exports.parse = an();
});
var Or = b((tc, ln) => {
  ln.exports = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
});
var Nr = b((nc, cn) => {
  cn.exports = /[\0-\x1F\x7F-\x9F]/;
});
var fn = b((ic, un) => {
  un.exports = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/;
});
var zr = b((oc, pn) => {
  pn.exports = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;
});
var hn = b((Ee) => {
  "use strict";
  Ee.Any = Or();
  Ee.Cc = Nr();
  Ee.Cf = fn();
  Ee.P = Qe();
  Ee.Z = zr();
});
var F = b((z) => {
  "use strict";
  function Gs(t) {
    return Object.prototype.toString.call(t);
  }
  function Vs(t) {
    return Gs(t) === "[object String]";
  }
  var js = Object.prototype.hasOwnProperty;
  function mn(t, e) {
    return js.call(t, e);
  }
  function Ws(t) {
    var e = Array.prototype.slice.call(arguments, 1);
    return e.forEach(function(r) {
      if (r) {
        if (typeof r != "object") throw new TypeError(r + "must be object");
        Object.keys(r).forEach(function(n) {
          t[n] = r[n];
        });
      }
    }), t;
  }
  function $s(t, e, r) {
    return [].concat(t.slice(0, e), r, t.slice(e + 1));
  }
  function gn(t) {
    return !(t >= 55296 && t <= 57343 || t >= 64976 && t <= 65007 || (t & 65535) === 65535 || (t & 65535) === 65534 || t >= 0 && t <= 8 || t === 11 || t >= 14 && t <= 31 || t >= 127 && t <= 159 || t > 1114111);
  }
  function _n(t) {
    if (t > 65535) {
      t -= 65536;
      var e = 55296 + (t >> 10), r = 56320 + (t & 1023);
      return String.fromCharCode(e, r);
    }
    return String.fromCharCode(t);
  }
  var xn = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g, Zs = /&([a-z#][a-z0-9]{1,31});/gi, Ys = new RegExp(xn.source + "|" + Zs.source, "gi"), Xs = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i, dn = Mr();
  function Js(t, e) {
    var r = 0;
    return mn(dn, e) ? dn[e] : e.charCodeAt(0) === 35 && Xs.test(e) && (r = e[1].toLowerCase() === "x" ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10), gn(r)) ? _n(r) : t;
  }
  function Ks(t) {
    return t.indexOf("\\") < 0 ? t : t.replace(xn, "$1");
  }
  function Qs(t) {
    return t.indexOf("\\") < 0 && t.indexOf("&") < 0 ? t : t.replace(Ys, function(e, r, n) {
      return r || Js(e, n);
    });
  }
  var ea = /[&<>"]/, ra = /[&<>"]/g, ta = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };
  function na(t) {
    return ta[t];
  }
  function ia(t) {
    return ea.test(t) ? t.replace(ra, na) : t;
  }
  var oa = /[.?*+^$[\]\\(){}|-]/g;
  function sa(t) {
    return t.replace(oa, "\\$&");
  }
  function aa(t) {
    switch (t) {
      case 9:
      case 32:
        return true;
    }
    return false;
  }
  function la(t) {
    if (t >= 8192 && t <= 8202) return true;
    switch (t) {
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 32:
      case 160:
      case 5760:
      case 8239:
      case 8287:
      case 12288:
        return true;
    }
    return false;
  }
  var ca = Qe();
  function ua(t) {
    return ca.test(t);
  }
  function fa(t) {
    switch (t) {
      case 33:
      case 34:
      case 35:
      case 36:
      case 37:
      case 38:
      case 39:
      case 40:
      case 41:
      case 42:
      case 43:
      case 44:
      case 45:
      case 46:
      case 47:
      case 58:
      case 59:
      case 60:
      case 61:
      case 62:
      case 63:
      case 64:
      case 91:
      case 92:
      case 93:
      case 94:
      case 95:
      case 96:
      case 123:
      case 124:
      case 125:
      case 126:
        return true;
      default:
        return false;
    }
  }
  function pa(t) {
    return t = t.trim().replace(/\s+/g, " "), "ẞ".toLowerCase() === "Ṿ" && (t = t.replace(/ẞ/g, "ß")), t.toLowerCase().toUpperCase();
  }
  z.lib = {};
  z.lib.mdurl = Lr();
  z.lib.ucmicro = hn();
  z.assign = Ws;
  z.isString = Vs;
  z.has = mn;
  z.unescapeMd = Ks;
  z.unescapeAll = Qs;
  z.isValidEntityCode = gn;
  z.fromCodePoint = _n;
  z.escapeHtml = ia;
  z.arrayReplaceAt = $s;
  z.isSpace = aa;
  z.isWhiteSpace = la;
  z.isMdAsciiPunct = fa;
  z.isPunctChar = ua;
  z.escapeRE = sa;
  z.normalizeReference = pa;
});
var kn = b((lc, bn) => {
  "use strict";
  bn.exports = function(e, r, n) {
    var i, o, a, s, l = -1, c = e.posMax, f = e.pos;
    for (e.pos = r + 1, i = 1; e.pos < c; ) {
      if (a = e.src.charCodeAt(e.pos), a === 93 && (i--, i === 0)) {
        o = true;
        break;
      }
      if (s = e.pos, e.md.inline.skipToken(e), a === 91) {
        if (s === e.pos - 1) i++;
        else if (n) return e.pos = f, -1;
      }
    }
    return o && (l = e.pos), e.pos = f, l;
  };
});
var vn = b((cc, Cn) => {
  "use strict";
  var An = F().unescapeAll;
  Cn.exports = function(e, r, n) {
    var i, o, a = 0, s = r, l = { ok: false, pos: 0, lines: 0, str: "" };
    if (e.charCodeAt(r) === 60) {
      for (r++; r < n; ) {
        if (i = e.charCodeAt(r), i === 10 || i === 60) return l;
        if (i === 62) return l.pos = r + 1, l.str = An(e.slice(s + 1, r)), l.ok = true, l;
        if (i === 92 && r + 1 < n) {
          r += 2;
          continue;
        }
        r++;
      }
      return l;
    }
    for (o = 0; r < n && (i = e.charCodeAt(r), !(i === 32 || i < 32 || i === 127)); ) {
      if (i === 92 && r + 1 < n) {
        if (e.charCodeAt(r + 1) === 32) break;
        r += 2;
        continue;
      }
      if (i === 40 && (o++, o > 32)) return l;
      if (i === 41) {
        if (o === 0) break;
        o--;
      }
      r++;
    }
    return s === r || o !== 0 || (l.str = An(e.slice(s, r)), l.lines = a, l.pos = r, l.ok = true), l;
  };
});
var yn = b((uc, En) => {
  "use strict";
  var ha = F().unescapeAll;
  En.exports = function(e, r, n) {
    var i, o, a = 0, s = r, l = { ok: false, pos: 0, lines: 0, str: "" };
    if (r >= n || (o = e.charCodeAt(r), o !== 34 && o !== 39 && o !== 40)) return l;
    for (r++, o === 40 && (o = 41); r < n; ) {
      if (i = e.charCodeAt(r), i === o) return l.pos = r + 1, l.lines = a, l.str = ha(e.slice(s + 1, r)), l.ok = true, l;
      if (i === 40 && o === 41) return l;
      i === 10 ? a++ : i === 92 && r + 1 < n && (r++, e.charCodeAt(r) === 10 && a++), r++;
    }
    return l;
  };
});
var Dn = b((nr) => {
  "use strict";
  nr.parseLinkLabel = kn();
  nr.parseLinkDestination = vn();
  nr.parseLinkTitle = yn();
});
var wn = b((pc, Tn) => {
  "use strict";
  var da = F().assign, ma = F().unescapeAll, de = F().escapeHtml, te = {};
  te.code_inline = function(t, e, r, n, i) {
    var o = t[e];
    return "<code" + i.renderAttrs(o) + ">" + de(t[e].content) + "</code>";
  };
  te.code_block = function(t, e, r, n, i) {
    var o = t[e];
    return "<pre" + i.renderAttrs(o) + "><code>" + de(t[e].content) + `</code></pre>
`;
  };
  te.fence = function(t, e, r, n, i) {
    var o = t[e], a = o.info ? ma(o.info).trim() : "", s = "", l = "", c, f, p, d, h;
    return a && (p = a.split(/(\s+)/g), s = p[0], l = p.slice(2).join("")), r.highlight ? c = r.highlight(o.content, s, l) || de(o.content) : c = de(o.content), c.indexOf("<pre") === 0 ? c + `
` : a ? (f = o.attrIndex("class"), d = o.attrs ? o.attrs.slice() : [], f < 0 ? d.push(["class", r.langPrefix + s]) : (d[f] = d[f].slice(), d[f][1] += " " + r.langPrefix + s), h = { attrs: d }, "<pre><code" + i.renderAttrs(h) + ">" + c + `</code></pre>
`) : "<pre><code" + i.renderAttrs(o) + ">" + c + `</code></pre>
`;
  };
  te.image = function(t, e, r, n, i) {
    var o = t[e];
    return o.attrs[o.attrIndex("alt")][1] = i.renderInlineAsText(o.children, r, n), i.renderToken(t, e, r);
  };
  te.hardbreak = function(t, e, r) {
    return r.xhtmlOut ? `<br />
` : `<br>
`;
  };
  te.softbreak = function(t, e, r) {
    return r.breaks ? r.xhtmlOut ? `<br />
` : `<br>
` : `
`;
  };
  te.text = function(t, e) {
    return de(t[e].content);
  };
  te.html_block = function(t, e) {
    return t[e].content;
  };
  te.html_inline = function(t, e) {
    return t[e].content;
  };
  function ye() {
    this.rules = da({}, te);
  }
  ye.prototype.renderAttrs = function(e) {
    var r, n, i;
    if (!e.attrs) return "";
    for (i = "", r = 0, n = e.attrs.length; r < n; r++) i += " " + de(e.attrs[r][0]) + '="' + de(e.attrs[r][1]) + '"';
    return i;
  };
  ye.prototype.renderToken = function(e, r, n) {
    var i, o = "", a = false, s = e[r];
    return s.hidden ? "" : (s.block && s.nesting !== -1 && r && e[r - 1].hidden && (o += `
`), o += (s.nesting === -1 ? "</" : "<") + s.tag, o += this.renderAttrs(s), s.nesting === 0 && n.xhtmlOut && (o += " /"), s.block && (a = true, s.nesting === 1 && r + 1 < e.length && (i = e[r + 1], (i.type === "inline" || i.hidden || i.nesting === -1 && i.tag === s.tag) && (a = false))), o += a ? `>
` : ">", o);
  };
  ye.prototype.renderInline = function(t, e, r) {
    for (var n, i = "", o = this.rules, a = 0, s = t.length; a < s; a++) n = t[a].type, typeof o[n] < "u" ? i += o[n](t, a, e, r, this) : i += this.renderToken(t, a, e);
    return i;
  };
  ye.prototype.renderInlineAsText = function(t, e, r) {
    for (var n = "", i = 0, o = t.length; i < o; i++) t[i].type === "text" ? n += t[i].content : t[i].type === "image" ? n += this.renderInlineAsText(t[i].children, e, r) : t[i].type === "softbreak" && (n += `
`);
    return n;
  };
  ye.prototype.render = function(t, e, r) {
    var n, i, o, a = "", s = this.rules;
    for (n = 0, i = t.length; n < i; n++) o = t[n].type, o === "inline" ? a += this.renderInline(t[n].children, e, r) : typeof s[o] < "u" ? a += s[t[n].type](t, n, e, r, this) : a += this.renderToken(t, n, e, r);
    return a;
  };
  Tn.exports = ye;
});
var ir = b((hc, Sn) => {
  "use strict";
  function K() {
    this.__rules__ = [], this.__cache__ = null;
  }
  K.prototype.__find__ = function(t) {
    for (var e = 0; e < this.__rules__.length; e++) if (this.__rules__[e].name === t) return e;
    return -1;
  };
  K.prototype.__compile__ = function() {
    var t = this, e = [""];
    t.__rules__.forEach(function(r) {
      r.enabled && r.alt.forEach(function(n) {
        e.indexOf(n) < 0 && e.push(n);
      });
    }), t.__cache__ = {}, e.forEach(function(r) {
      t.__cache__[r] = [], t.__rules__.forEach(function(n) {
        n.enabled && (r && n.alt.indexOf(r) < 0 || t.__cache__[r].push(n.fn));
      });
    });
  };
  K.prototype.at = function(t, e, r) {
    var n = this.__find__(t), i = r || {};
    if (n === -1) throw new Error("Parser rule not found: " + t);
    this.__rules__[n].fn = e, this.__rules__[n].alt = i.alt || [], this.__cache__ = null;
  };
  K.prototype.before = function(t, e, r, n) {
    var i = this.__find__(t), o = n || {};
    if (i === -1) throw new Error("Parser rule not found: " + t);
    this.__rules__.splice(i, 0, { name: e, enabled: true, fn: r, alt: o.alt || [] }), this.__cache__ = null;
  };
  K.prototype.after = function(t, e, r, n) {
    var i = this.__find__(t), o = n || {};
    if (i === -1) throw new Error("Parser rule not found: " + t);
    this.__rules__.splice(i + 1, 0, { name: e, enabled: true, fn: r, alt: o.alt || [] }), this.__cache__ = null;
  };
  K.prototype.push = function(t, e, r) {
    var n = r || {};
    this.__rules__.push({ name: t, enabled: true, fn: e, alt: n.alt || [] }), this.__cache__ = null;
  };
  K.prototype.enable = function(t, e) {
    Array.isArray(t) || (t = [t]);
    var r = [];
    return t.forEach(function(n) {
      var i = this.__find__(n);
      if (i < 0) {
        if (e) return;
        throw new Error("Rules manager: invalid rule name " + n);
      }
      this.__rules__[i].enabled = true, r.push(n);
    }, this), this.__cache__ = null, r;
  };
  K.prototype.enableOnly = function(t, e) {
    Array.isArray(t) || (t = [t]), this.__rules__.forEach(function(r) {
      r.enabled = false;
    }), this.enable(t, e);
  };
  K.prototype.disable = function(t, e) {
    Array.isArray(t) || (t = [t]);
    var r = [];
    return t.forEach(function(n) {
      var i = this.__find__(n);
      if (i < 0) {
        if (e) return;
        throw new Error("Rules manager: invalid rule name " + n);
      }
      this.__rules__[i].enabled = false, r.push(n);
    }, this), this.__cache__ = null, r;
  };
  K.prototype.getRules = function(t) {
    return this.__cache__ === null && this.__compile__(), this.__cache__[t] || [];
  };
  Sn.exports = K;
});
var Fn = b((dc, qn) => {
  "use strict";
  var ga = /\r\n?|\n/g, _a = /\0/g;
  qn.exports = function(e) {
    var r;
    r = e.src.replace(ga, `
`), r = r.replace(_a, "�"), e.src = r;
  };
});
var In = b((mc, Rn) => {
  "use strict";
  Rn.exports = function(e) {
    var r;
    e.inlineMode ? (r = new e.Token("inline", "", 0), r.content = e.src, r.map = [0, 1], r.children = [], e.tokens.push(r)) : e.md.block.parse(e.src, e.md, e.env, e.tokens);
  };
});
var Ln = b((gc, Mn) => {
  "use strict";
  Mn.exports = function(e) {
    var r = e.tokens, n, i, o;
    for (i = 0, o = r.length; i < o; i++) n = r[i], n.type === "inline" && e.md.inline.parse(n.content, e.md, e.env, n.children);
  };
});
var Nn = b((_c, On) => {
  "use strict";
  var xa = F().arrayReplaceAt;
  function ba(t) {
    return /^<a[>\s]/i.test(t);
  }
  function ka(t) {
    return /^<\/a\s*>/i.test(t);
  }
  On.exports = function(e) {
    var r, n, i, o, a, s, l, c, f, p, d, h, g, k, D, C, _ = e.tokens, y;
    if (e.md.options.linkify) {
      for (n = 0, i = _.length; n < i; n++) if (!(_[n].type !== "inline" || !e.md.linkify.pretest(_[n].content))) for (o = _[n].children, g = 0, r = o.length - 1; r >= 0; r--) {
        if (s = o[r], s.type === "link_close") {
          for (r--; o[r].level !== s.level && o[r].type !== "link_open"; ) r--;
          continue;
        }
        if (s.type === "html_inline" && (ba(s.content) && g > 0 && g--, ka(s.content) && g++), !(g > 0) && s.type === "text" && e.md.linkify.test(s.content)) {
          for (f = s.content, y = e.md.linkify.match(f), l = [], h = s.level, d = 0, c = 0; c < y.length; c++) k = y[c].url, D = e.md.normalizeLink(k), e.md.validateLink(D) && (C = y[c].text, y[c].schema ? y[c].schema === "mailto:" && !/^mailto:/i.test(C) ? C = e.md.normalizeLinkText("mailto:" + C).replace(/^mailto:/, "") : C = e.md.normalizeLinkText(C) : C = e.md.normalizeLinkText("http://" + C).replace(/^http:\/\//, ""), p = y[c].index, p > d && (a = new e.Token("text", "", 0), a.content = f.slice(d, p), a.level = h, l.push(a)), a = new e.Token("link_open", "a", 1), a.attrs = [["href", D]], a.level = h++, a.markup = "linkify", a.info = "auto", l.push(a), a = new e.Token("text", "", 0), a.content = C, a.level = h, l.push(a), a = new e.Token("link_close", "a", -1), a.level = --h, a.markup = "linkify", a.info = "auto", l.push(a), d = y[c].lastIndex);
          d < f.length && (a = new e.Token("text", "", 0), a.content = f.slice(d), a.level = h, l.push(a)), _[n].children = o = xa(o, r, l);
        }
      }
    }
  };
});
var Bn = b((xc, Pn) => {
  "use strict";
  var zn = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, Aa = /\((c|tm|r|p)\)/i, Ca = /\((c|tm|r|p)\)/ig, va = { c: "©", r: "®", p: "§", tm: "™" };
  function Ea(t, e) {
    return va[e.toLowerCase()];
  }
  function ya(t) {
    var e, r, n = 0;
    for (e = t.length - 1; e >= 0; e--) r = t[e], r.type === "text" && !n && (r.content = r.content.replace(Ca, Ea)), r.type === "link_open" && r.info === "auto" && n--, r.type === "link_close" && r.info === "auto" && n++;
  }
  function Da(t) {
    var e, r, n = 0;
    for (e = t.length - 1; e >= 0; e--) r = t[e], r.type === "text" && !n && zn.test(r.content) && (r.content = r.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1—").replace(/(^|\s)--(?=\s|$)/mg, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1–")), r.type === "link_open" && r.info === "auto" && n--, r.type === "link_close" && r.info === "auto" && n++;
  }
  Pn.exports = function(e) {
    var r;
    if (e.md.options.typographer) for (r = e.tokens.length - 1; r >= 0; r--) e.tokens[r].type === "inline" && (Aa.test(e.tokens[r].content) && ya(e.tokens[r].children), zn.test(e.tokens[r].content) && Da(e.tokens[r].children));
  };
});
var $n = b((bc, Wn) => {
  "use strict";
  var Un = F().isWhiteSpace, Hn = F().isPunctChar, Gn = F().isMdAsciiPunct, Ta = /['"]/, Vn = /['"]/g, jn = "’";
  function or(t, e, r) {
    return t.substr(0, e) + r + t.substr(e + 1);
  }
  function wa(t, e) {
    var r, n, i, o, a, s, l, c, f, p, d, h, g, k, D, C, _, y, v, T, x;
    for (v = [], r = 0; r < t.length; r++) {
      for (n = t[r], l = t[r].level, _ = v.length - 1; _ >= 0 && !(v[_].level <= l); _--) ;
      if (v.length = _ + 1, n.type === "text") {
        i = n.content, a = 0, s = i.length;
        e: for (; a < s && (Vn.lastIndex = a, o = Vn.exec(i), !!o); ) {
          if (D = C = true, a = o.index + 1, y = o[0] === "'", f = 32, o.index - 1 >= 0) f = i.charCodeAt(o.index - 1);
          else for (_ = r - 1; _ >= 0 && !(t[_].type === "softbreak" || t[_].type === "hardbreak"); _--) if (t[_].content) {
            f = t[_].content.charCodeAt(t[_].content.length - 1);
            break;
          }
          if (p = 32, a < s) p = i.charCodeAt(a);
          else for (_ = r + 1; _ < t.length && !(t[_].type === "softbreak" || t[_].type === "hardbreak"); _++) if (t[_].content) {
            p = t[_].content.charCodeAt(0);
            break;
          }
          if (d = Gn(f) || Hn(String.fromCharCode(f)), h = Gn(p) || Hn(String.fromCharCode(p)), g = Un(f), k = Un(p), k ? D = false : h && (g || d || (D = false)), g ? C = false : d && (k || h || (C = false)), p === 34 && o[0] === '"' && f >= 48 && f <= 57 && (C = D = false), D && C && (D = d, C = h), !D && !C) {
            y && (n.content = or(n.content, o.index, jn));
            continue;
          }
          if (C) {
            for (_ = v.length - 1; _ >= 0 && (c = v[_], !(v[_].level < l)); _--) if (c.single === y && v[_].level === l) {
              c = v[_], y ? (T = e.md.options.quotes[2], x = e.md.options.quotes[3]) : (T = e.md.options.quotes[0], x = e.md.options.quotes[1]), n.content = or(n.content, o.index, x), t[c.token].content = or(t[c.token].content, c.pos, T), a += x.length - 1, c.token === r && (a += T.length - 1), i = n.content, s = i.length, v.length = _;
              continue e;
            }
          }
          D ? v.push({ token: r, pos: o.index, single: y, level: l }) : C && y && (n.content = or(n.content, o.index, jn));
        }
      }
    }
  }
  Wn.exports = function(e) {
    var r;
    if (e.md.options.typographer) for (r = e.tokens.length - 1; r >= 0; r--) e.tokens[r].type !== "inline" || !Ta.test(e.tokens[r].content) || wa(e.tokens[r].children, e);
  };
});
var sr = b((kc, Zn) => {
  "use strict";
  function De(t, e, r) {
    this.type = t, this.tag = e, this.attrs = null, this.map = null, this.nesting = r, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = false, this.hidden = false;
  }
  De.prototype.attrIndex = function(e) {
    var r, n, i;
    if (!this.attrs) return -1;
    for (r = this.attrs, n = 0, i = r.length; n < i; n++) if (r[n][0] === e) return n;
    return -1;
  };
  De.prototype.attrPush = function(e) {
    this.attrs ? this.attrs.push(e) : this.attrs = [e];
  };
  De.prototype.attrSet = function(e, r) {
    var n = this.attrIndex(e), i = [e, r];
    n < 0 ? this.attrPush(i) : this.attrs[n] = i;
  };
  De.prototype.attrGet = function(e) {
    var r = this.attrIndex(e), n = null;
    return r >= 0 && (n = this.attrs[r][1]), n;
  };
  De.prototype.attrJoin = function(e, r) {
    var n = this.attrIndex(e);
    n < 0 ? this.attrPush([e, r]) : this.attrs[n][1] = this.attrs[n][1] + " " + r;
  };
  Zn.exports = De;
});
var Jn = b((Ac, Xn) => {
  "use strict";
  var Sa = sr();
  function Yn(t, e, r) {
    this.src = t, this.env = r, this.tokens = [], this.inlineMode = false, this.md = e;
  }
  Yn.prototype.Token = Sa;
  Xn.exports = Yn;
});
var Qn = b((Cc, Kn) => {
  "use strict";
  var qa = ir(), Pr = [["normalize", Fn()], ["block", In()], ["inline", Ln()], ["linkify", Nn()], ["replacements", Bn()], ["smartquotes", $n()]];
  function Br() {
    this.ruler = new qa();
    for (var t = 0; t < Pr.length; t++) this.ruler.push(Pr[t][0], Pr[t][1]);
  }
  Br.prototype.process = function(t) {
    var e, r, n;
    for (n = this.ruler.getRules(""), e = 0, r = n.length; e < r; e++) n[e](t);
  };
  Br.prototype.State = Jn();
  Kn.exports = Br;
});
var ti = b((vc, ri) => {
  "use strict";
  var Ur = F().isSpace;
  function Hr(t, e) {
    var r = t.bMarks[e] + t.tShift[e], n = t.eMarks[e];
    return t.src.substr(r, n - r);
  }
  function ei(t) {
    var e = [], r = 0, n = t.length, i, o = false, a = 0, s = "";
    for (i = t.charCodeAt(r); r < n; ) i === 124 && (o ? (s += t.substring(a, r - 1), a = r) : (e.push(s + t.substring(a, r)), s = "", a = r + 1)), o = i === 92, r++, i = t.charCodeAt(r);
    return e.push(s + t.substring(a)), e;
  }
  ri.exports = function(e, r, n, i) {
    var o, a, s, l, c, f, p, d, h, g, k, D, C, _, y, v, T, x;
    if (r + 2 > n || (f = r + 1, e.sCount[f] < e.blkIndent) || e.sCount[f] - e.blkIndent >= 4 || (s = e.bMarks[f] + e.tShift[f], s >= e.eMarks[f]) || (T = e.src.charCodeAt(s++), T !== 124 && T !== 45 && T !== 58) || s >= e.eMarks[f] || (x = e.src.charCodeAt(s++), x !== 124 && x !== 45 && x !== 58 && !Ur(x)) || T === 45 && Ur(x)) return false;
    for (; s < e.eMarks[f]; ) {
      if (o = e.src.charCodeAt(s), o !== 124 && o !== 45 && o !== 58 && !Ur(o)) return false;
      s++;
    }
    for (a = Hr(e, r + 1), p = a.split("|"), g = [], l = 0; l < p.length; l++) {
      if (k = p[l].trim(), !k) {
        if (l === 0 || l === p.length - 1) continue;
        return false;
      }
      if (!/^:?-+:?$/.test(k)) return false;
      k.charCodeAt(k.length - 1) === 58 ? g.push(k.charCodeAt(0) === 58 ? "center" : "right") : k.charCodeAt(0) === 58 ? g.push("left") : g.push("");
    }
    if (a = Hr(e, r).trim(), a.indexOf("|") === -1 || e.sCount[r] - e.blkIndent >= 4 || (p = ei(a), p.length && p[0] === "" && p.shift(), p.length && p[p.length - 1] === "" && p.pop(), d = p.length, d === 0 || d !== g.length)) return false;
    if (i) return true;
    for (_ = e.parentType, e.parentType = "table", v = e.md.block.ruler.getRules("blockquote"), h = e.push("table_open", "table", 1), h.map = D = [r, 0], h = e.push("thead_open", "thead", 1), h.map = [r, r + 1], h = e.push("tr_open", "tr", 1), h.map = [r, r + 1], l = 0; l < p.length; l++) h = e.push("th_open", "th", 1), g[l] && (h.attrs = [["style", "text-align:" + g[l]]]), h = e.push("inline", "", 0), h.content = p[l].trim(), h.children = [], h = e.push("th_close", "th", -1);
    for (h = e.push("tr_close", "tr", -1), h = e.push("thead_close", "thead", -1), f = r + 2; f < n && !(e.sCount[f] < e.blkIndent); f++) {
      for (y = false, l = 0, c = v.length; l < c; l++) if (v[l](e, f, n, true)) {
        y = true;
        break;
      }
      if (y || (a = Hr(e, f).trim(), !a) || e.sCount[f] - e.blkIndent >= 4) break;
      for (p = ei(a), p.length && p[0] === "" && p.shift(), p.length && p[p.length - 1] === "" && p.pop(), f === r + 2 && (h = e.push("tbody_open", "tbody", 1), h.map = C = [r + 2, 0]), h = e.push("tr_open", "tr", 1), h.map = [f, f + 1], l = 0; l < d; l++) h = e.push("td_open", "td", 1), g[l] && (h.attrs = [["style", "text-align:" + g[l]]]), h = e.push("inline", "", 0), h.content = p[l] ? p[l].trim() : "", h.children = [], h = e.push("td_close", "td", -1);
      h = e.push("tr_close", "tr", -1);
    }
    return C && (h = e.push("tbody_close", "tbody", -1), C[1] = f), h = e.push("table_close", "table", -1), D[1] = f, e.parentType = _, e.line = f, true;
  };
});
var ii = b((Ec, ni) => {
  "use strict";
  ni.exports = function(e, r, n) {
    var i, o, a;
    if (e.sCount[r] - e.blkIndent < 4) return false;
    for (o = i = r + 1; i < n; ) {
      if (e.isEmpty(i)) {
        i++;
        continue;
      }
      if (e.sCount[i] - e.blkIndent >= 4) {
        i++, o = i;
        continue;
      }
      break;
    }
    return e.line = o, a = e.push("code_block", "code", 0), a.content = e.getLines(r, o, 4 + e.blkIndent, false) + `
`, a.map = [r, e.line], true;
  };
});
var si = b((yc, oi) => {
  "use strict";
  oi.exports = function(e, r, n, i) {
    var o, a, s, l, c, f, p, d = false, h = e.bMarks[r] + e.tShift[r], g = e.eMarks[r];
    if (e.sCount[r] - e.blkIndent >= 4 || h + 3 > g || (o = e.src.charCodeAt(h), o !== 126 && o !== 96) || (c = h, h = e.skipChars(h, o), a = h - c, a < 3) || (p = e.src.slice(c, h), s = e.src.slice(h, g), o === 96 && s.indexOf(String.fromCharCode(o)) >= 0)) return false;
    if (i) return true;
    for (l = r; l++, !(l >= n || (h = c = e.bMarks[l] + e.tShift[l], g = e.eMarks[l], h < g && e.sCount[l] < e.blkIndent)); ) if (e.src.charCodeAt(h) === o && !(e.sCount[l] - e.blkIndent >= 4) && (h = e.skipChars(h, o), !(h - c < a) && (h = e.skipSpaces(h), !(h < g)))) {
      d = true;
      break;
    }
    return a = e.sCount[r], e.line = l + (d ? 1 : 0), f = e.push("fence", "code", 0), f.info = s, f.content = e.getLines(r + 1, l, a, true), f.markup = p, f.map = [r, e.line], true;
  };
});
var ci = b((Dc, li) => {
  "use strict";
  var ai = F().isSpace;
  li.exports = function(e, r, n, i) {
    var o, a, s, l, c, f, p, d, h, g, k, D, C, _, y, v, T, x, R, O, ge = e.lineMax, q = e.bMarks[r] + e.tShift[r], S = e.eMarks[r];
    if (e.sCount[r] - e.blkIndent >= 4 || e.src.charCodeAt(q++) !== 62) return false;
    if (i) return true;
    for (l = h = e.sCount[r] + 1, e.src.charCodeAt(q) === 32 ? (q++, l++, h++, o = false, v = true) : e.src.charCodeAt(q) === 9 ? (v = true, (e.bsCount[r] + h) % 4 === 3 ? (q++, l++, h++, o = false) : o = true) : v = false, g = [e.bMarks[r]], e.bMarks[r] = q; q < S && (a = e.src.charCodeAt(q), ai(a)); ) {
      a === 9 ? h += 4 - (h + e.bsCount[r] + (o ? 1 : 0)) % 4 : h++;
      q++;
    }
    for (k = [e.bsCount[r]], e.bsCount[r] = e.sCount[r] + 1 + (v ? 1 : 0), f = q >= S, _ = [e.sCount[r]], e.sCount[r] = h - l, y = [e.tShift[r]], e.tShift[r] = q - e.bMarks[r], x = e.md.block.ruler.getRules("blockquote"), C = e.parentType, e.parentType = "blockquote", d = r + 1; d < n && (O = e.sCount[d] < e.blkIndent, q = e.bMarks[d] + e.tShift[d], S = e.eMarks[d], !(q >= S)); d++) {
      if (e.src.charCodeAt(q++) === 62 && !O) {
        for (l = h = e.sCount[d] + 1, e.src.charCodeAt(q) === 32 ? (q++, l++, h++, o = false, v = true) : e.src.charCodeAt(q) === 9 ? (v = true, (e.bsCount[d] + h) % 4 === 3 ? (q++, l++, h++, o = false) : o = true) : v = false, g.push(e.bMarks[d]), e.bMarks[d] = q; q < S && (a = e.src.charCodeAt(q), ai(a)); ) {
          a === 9 ? h += 4 - (h + e.bsCount[d] + (o ? 1 : 0)) % 4 : h++;
          q++;
        }
        f = q >= S, k.push(e.bsCount[d]), e.bsCount[d] = e.sCount[d] + 1 + (v ? 1 : 0), _.push(e.sCount[d]), e.sCount[d] = h - l, y.push(e.tShift[d]), e.tShift[d] = q - e.bMarks[d];
        continue;
      }
      if (f) break;
      for (T = false, s = 0, c = x.length; s < c; s++) if (x[s](e, d, n, true)) {
        T = true;
        break;
      }
      if (T) {
        e.lineMax = d, e.blkIndent !== 0 && (g.push(e.bMarks[d]), k.push(e.bsCount[d]), y.push(e.tShift[d]), _.push(e.sCount[d]), e.sCount[d] -= e.blkIndent);
        break;
      }
      g.push(e.bMarks[d]), k.push(e.bsCount[d]), y.push(e.tShift[d]), _.push(e.sCount[d]), e.sCount[d] = -1;
    }
    for (D = e.blkIndent, e.blkIndent = 0, R = e.push("blockquote_open", "blockquote", 1), R.markup = ">", R.map = p = [r, 0], e.md.block.tokenize(e, r, d), R = e.push("blockquote_close", "blockquote", -1), R.markup = ">", e.lineMax = ge, e.parentType = C, p[1] = e.line, s = 0; s < y.length; s++) e.bMarks[s + r] = g[s], e.tShift[s + r] = y[s], e.sCount[s + r] = _[s], e.bsCount[s + r] = k[s];
    return e.blkIndent = D, true;
  };
});
var fi = b((Tc, ui) => {
  "use strict";
  var Fa = F().isSpace;
  ui.exports = function(e, r, n, i) {
    var o, a, s, l, c = e.bMarks[r] + e.tShift[r], f = e.eMarks[r];
    if (e.sCount[r] - e.blkIndent >= 4 || (o = e.src.charCodeAt(c++), o !== 42 && o !== 45 && o !== 95)) return false;
    for (a = 1; c < f; ) {
      if (s = e.src.charCodeAt(c++), s !== o && !Fa(s)) return false;
      s === o && a++;
    }
    return a < 3 ? false : (i || (e.line = r + 1, l = e.push("hr", "hr", 0), l.map = [r, e.line], l.markup = Array(a + 1).join(String.fromCharCode(o))), true);
  };
});
var gi = b((wc, mi) => {
  "use strict";
  var di = F().isSpace;
  function pi(t, e) {
    var r, n, i, o;
    return n = t.bMarks[e] + t.tShift[e], i = t.eMarks[e], r = t.src.charCodeAt(n++), r !== 42 && r !== 45 && r !== 43 || n < i && (o = t.src.charCodeAt(n), !di(o)) ? -1 : n;
  }
  function hi(t, e) {
    var r, n = t.bMarks[e] + t.tShift[e], i = n, o = t.eMarks[e];
    if (i + 1 >= o || (r = t.src.charCodeAt(i++), r < 48 || r > 57)) return -1;
    for (; ; ) {
      if (i >= o) return -1;
      if (r = t.src.charCodeAt(i++), r >= 48 && r <= 57) {
        if (i - n >= 10) return -1;
        continue;
      }
      if (r === 41 || r === 46) break;
      return -1;
    }
    return i < o && (r = t.src.charCodeAt(i), !di(r)) ? -1 : i;
  }
  function Ra(t, e) {
    var r, n, i = t.level + 2;
    for (r = e + 2, n = t.tokens.length - 2; r < n; r++) t.tokens[r].level === i && t.tokens[r].type === "paragraph_open" && (t.tokens[r + 2].hidden = true, t.tokens[r].hidden = true, r += 2);
  }
  mi.exports = function(e, r, n, i) {
    var o, a, s, l, c, f, p, d, h, g, k, D, C, _, y, v, T, x, R, O, ge, q, S, ue, le, fe, we, H, Se = false, qe = true;
    if (e.sCount[r] - e.blkIndent >= 4 || e.listIndent >= 0 && e.sCount[r] - e.listIndent >= 4 && e.sCount[r] < e.blkIndent) return false;
    if (i && e.parentType === "paragraph" && e.sCount[r] >= e.blkIndent && (Se = true), (S = hi(e, r)) >= 0) {
      if (p = true, le = e.bMarks[r] + e.tShift[r], C = Number(e.src.slice(le, S - 1)), Se && C !== 1) return false;
    } else if ((S = pi(e, r)) >= 0) p = false;
    else return false;
    if (Se && e.skipSpaces(S) >= e.eMarks[r]) return false;
    if (D = e.src.charCodeAt(S - 1), i) return true;
    for (k = e.tokens.length, p ? (H = e.push("ordered_list_open", "ol", 1), C !== 1 && (H.attrs = [["start", C]])) : H = e.push("bullet_list_open", "ul", 1), H.map = g = [r, 0], H.markup = String.fromCharCode(D), y = r, ue = false, we = e.md.block.ruler.getRules("list"), x = e.parentType, e.parentType = "list"; y < n; ) {
      for (q = S, _ = e.eMarks[y], f = v = e.sCount[y] + S - (e.bMarks[r] + e.tShift[r]); q < _; ) {
        if (o = e.src.charCodeAt(q), o === 9) v += 4 - (v + e.bsCount[y]) % 4;
        else if (o === 32) v++;
        else break;
        q++;
      }
      if (a = q, a >= _ ? c = 1 : c = v - f, c > 4 && (c = 1), l = f + c, H = e.push("list_item_open", "li", 1), H.markup = String.fromCharCode(D), H.map = d = [r, 0], p && (H.info = e.src.slice(le, S - 1)), ge = e.tight, O = e.tShift[r], R = e.sCount[r], T = e.listIndent, e.listIndent = e.blkIndent, e.blkIndent = l, e.tight = true, e.tShift[r] = a - e.bMarks[r], e.sCount[r] = v, a >= _ && e.isEmpty(r + 1) ? e.line = Math.min(e.line + 2, n) : e.md.block.tokenize(e, r, n, true), (!e.tight || ue) && (qe = false), ue = e.line - r > 1 && e.isEmpty(e.line - 1), e.blkIndent = e.listIndent, e.listIndent = T, e.tShift[r] = O, e.sCount[r] = R, e.tight = ge, H = e.push("list_item_close", "li", -1), H.markup = String.fromCharCode(D), y = r = e.line, d[1] = y, a = e.bMarks[r], y >= n || e.sCount[y] < e.blkIndent || e.sCount[r] - e.blkIndent >= 4) break;
      for (fe = false, s = 0, h = we.length; s < h; s++) if (we[s](e, y, n, true)) {
        fe = true;
        break;
      }
      if (fe) break;
      if (p) {
        if (S = hi(e, y), S < 0) break;
        le = e.bMarks[y] + e.tShift[y];
      } else if (S = pi(e, y), S < 0) break;
      if (D !== e.src.charCodeAt(S - 1)) break;
    }
    return p ? H = e.push("ordered_list_close", "ol", -1) : H = e.push("bullet_list_close", "ul", -1), H.markup = String.fromCharCode(D), g[1] = y, e.line = y, e.parentType = x, qe && Ra(e, k), true;
  };
});
var xi = b((Sc, _i) => {
  "use strict";
  var Ia = F().normalizeReference, ar = F().isSpace;
  _i.exports = function(e, r, n, i) {
    var o, a, s, l, c, f, p, d, h, g, k, D, C, _, y, v, T = 0, x = e.bMarks[r] + e.tShift[r], R = e.eMarks[r], O = r + 1;
    if (e.sCount[r] - e.blkIndent >= 4 || e.src.charCodeAt(x) !== 91) return false;
    for (; ++x < R; ) if (e.src.charCodeAt(x) === 93 && e.src.charCodeAt(x - 1) !== 92) {
      if (x + 1 === R || e.src.charCodeAt(x + 1) !== 58) return false;
      break;
    }
    for (l = e.lineMax, y = e.md.block.ruler.getRules("reference"), g = e.parentType, e.parentType = "reference"; O < l && !e.isEmpty(O); O++) if (!(e.sCount[O] - e.blkIndent > 3) && !(e.sCount[O] < 0)) {
      for (_ = false, f = 0, p = y.length; f < p; f++) if (y[f](e, O, l, true)) {
        _ = true;
        break;
      }
      if (_) break;
    }
    for (C = e.getLines(r, O, e.blkIndent, false).trim(), R = C.length, x = 1; x < R; x++) {
      if (o = C.charCodeAt(x), o === 91) return false;
      if (o === 93) {
        h = x;
        break;
      } else o === 10 ? T++ : o === 92 && (x++, x < R && C.charCodeAt(x) === 10 && T++);
    }
    if (h < 0 || C.charCodeAt(h + 1) !== 58) return false;
    for (x = h + 2; x < R; x++) if (o = C.charCodeAt(x), o === 10) T++;
    else if (!ar(o)) break;
    if (k = e.md.helpers.parseLinkDestination(C, x, R), !k.ok || (c = e.md.normalizeLink(k.str), !e.md.validateLink(c))) return false;
    for (x = k.pos, T += k.lines, a = x, s = T, D = x; x < R; x++) if (o = C.charCodeAt(x), o === 10) T++;
    else if (!ar(o)) break;
    for (k = e.md.helpers.parseLinkTitle(C, x, R), x < R && D !== x && k.ok ? (v = k.str, x = k.pos, T += k.lines) : (v = "", x = a, T = s); x < R && (o = C.charCodeAt(x), !!ar(o)); ) x++;
    if (x < R && C.charCodeAt(x) !== 10 && v) for (v = "", x = a, T = s; x < R && (o = C.charCodeAt(x), !!ar(o)); ) x++;
    return x < R && C.charCodeAt(x) !== 10 || (d = Ia(C.slice(1, h)), !d) ? false : (i || (typeof e.env.references > "u" && (e.env.references = {}), typeof e.env.references[d] > "u" && (e.env.references[d] = { title: v, href: c }), e.parentType = g, e.line = r + T + 1), true);
  };
});
var ki = b((qc, bi) => {
  "use strict";
  bi.exports = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "section", "source", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"];
});
var Vr = b((Fc, Gr) => {
  "use strict";
  var Ma = "[a-zA-Z_:][a-zA-Z0-9:._-]*", La = "[^\"'=<>`\\x00-\\x20]+", Oa = "'[^']*'", Na = '"[^"]*"', za = "(?:" + La + "|" + Oa + "|" + Na + ")", Pa = "(?:\\s+" + Ma + "(?:\\s*=\\s*" + za + ")?)", Ai = "<[A-Za-z][A-Za-z0-9\\-]*" + Pa + "*\\s*\\/?>", Ci = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", Ba = "<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->", Ua = "<[?][\\s\\S]*?[?]>", Ha = "<![A-Z]+\\s+[^>]*>", Ga = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", Va = new RegExp("^(?:" + Ai + "|" + Ci + "|" + Ba + "|" + Ua + "|" + Ha + "|" + Ga + ")"), ja = new RegExp("^(?:" + Ai + "|" + Ci + ")");
  Gr.exports.HTML_TAG_RE = Va;
  Gr.exports.HTML_OPEN_CLOSE_TAG_RE = ja;
});
var Ei = b((Rc, vi) => {
  "use strict";
  var Wa = ki(), $a = Vr().HTML_OPEN_CLOSE_TAG_RE, Te = [[/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, true], [/^<!--/, /-->/, true], [/^<\?/, /\?>/, true], [/^<![A-Z]/, />/, true], [/^<!\[CDATA\[/, /\]\]>/, true], [new RegExp("^</?(" + Wa.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, true], [new RegExp($a.source + "\\s*$"), /^$/, false]];
  vi.exports = function(e, r, n, i) {
    var o, a, s, l, c = e.bMarks[r] + e.tShift[r], f = e.eMarks[r];
    if (e.sCount[r] - e.blkIndent >= 4 || !e.md.options.html || e.src.charCodeAt(c) !== 60) return false;
    for (l = e.src.slice(c, f), o = 0; o < Te.length && !Te[o][0].test(l); o++) ;
    if (o === Te.length) return false;
    if (i) return Te[o][2];
    if (a = r + 1, !Te[o][1].test(l)) {
      for (; a < n && !(e.sCount[a] < e.blkIndent); a++) if (c = e.bMarks[a] + e.tShift[a], f = e.eMarks[a], l = e.src.slice(c, f), Te[o][1].test(l)) {
        l.length !== 0 && a++;
        break;
      }
    }
    return e.line = a, s = e.push("html_block", "", 0), s.map = [r, a], s.content = e.getLines(r, a, e.blkIndent, true), true;
  };
});
var Ti = b((Ic, Di) => {
  "use strict";
  var yi = F().isSpace;
  Di.exports = function(e, r, n, i) {
    var o, a, s, l, c = e.bMarks[r] + e.tShift[r], f = e.eMarks[r];
    if (e.sCount[r] - e.blkIndent >= 4 || (o = e.src.charCodeAt(c), o !== 35 || c >= f)) return false;
    for (a = 1, o = e.src.charCodeAt(++c); o === 35 && c < f && a <= 6; ) a++, o = e.src.charCodeAt(++c);
    return a > 6 || c < f && !yi(o) ? false : (i || (f = e.skipSpacesBack(f, c), s = e.skipCharsBack(f, 35, c), s > c && yi(e.src.charCodeAt(s - 1)) && (f = s), e.line = r + 1, l = e.push("heading_open", "h" + String(a), 1), l.markup = "########".slice(0, a), l.map = [r, e.line], l = e.push("inline", "", 0), l.content = e.src.slice(c, f).trim(), l.map = [r, e.line], l.children = [], l = e.push("heading_close", "h" + String(a), -1), l.markup = "########".slice(0, a)), true);
  };
});
var Si = b((Mc, wi) => {
  "use strict";
  wi.exports = function(e, r, n) {
    var i, o, a, s, l, c, f, p, d, h = r + 1, g, k = e.md.block.ruler.getRules("paragraph");
    if (e.sCount[r] - e.blkIndent >= 4) return false;
    for (g = e.parentType, e.parentType = "paragraph"; h < n && !e.isEmpty(h); h++) if (!(e.sCount[h] - e.blkIndent > 3)) {
      if (e.sCount[h] >= e.blkIndent && (c = e.bMarks[h] + e.tShift[h], f = e.eMarks[h], c < f && (d = e.src.charCodeAt(c), (d === 45 || d === 61) && (c = e.skipChars(c, d), c = e.skipSpaces(c), c >= f)))) {
        p = d === 61 ? 1 : 2;
        break;
      }
      if (!(e.sCount[h] < 0)) {
        for (o = false, a = 0, s = k.length; a < s; a++) if (k[a](e, h, n, true)) {
          o = true;
          break;
        }
        if (o) break;
      }
    }
    return p ? (i = e.getLines(r, h, e.blkIndent, false).trim(), e.line = h + 1, l = e.push("heading_open", "h" + String(p), 1), l.markup = String.fromCharCode(d), l.map = [r, e.line], l = e.push("inline", "", 0), l.content = i, l.map = [r, e.line - 1], l.children = [], l = e.push("heading_close", "h" + String(p), -1), l.markup = String.fromCharCode(d), e.parentType = g, true) : false;
  };
});
var Fi = b((Lc, qi) => {
  "use strict";
  qi.exports = function(e, r) {
    var n, i, o, a, s, l, c = r + 1, f = e.md.block.ruler.getRules("paragraph"), p = e.lineMax;
    for (l = e.parentType, e.parentType = "paragraph"; c < p && !e.isEmpty(c); c++) if (!(e.sCount[c] - e.blkIndent > 3) && !(e.sCount[c] < 0)) {
      for (i = false, o = 0, a = f.length; o < a; o++) if (f[o](e, c, p, true)) {
        i = true;
        break;
      }
      if (i) break;
    }
    return n = e.getLines(r, c, e.blkIndent, false).trim(), e.line = c, s = e.push("paragraph_open", "p", 1), s.map = [r, e.line], s = e.push("inline", "", 0), s.content = n, s.map = [r, e.line], s.children = [], s = e.push("paragraph_close", "p", -1), e.parentType = l, true;
  };
});
var Mi = b((Oc, Ii) => {
  "use strict";
  var Ri = sr(), lr = F().isSpace;
  function ne(t, e, r, n) {
    var i, o, a, s, l, c, f, p;
    for (this.src = t, this.md = e, this.env = r, this.tokens = n, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = false, this.ddIndent = -1, this.listIndent = -1, this.parentType = "root", this.level = 0, this.result = "", o = this.src, p = false, a = s = c = f = 0, l = o.length; s < l; s++) {
      if (i = o.charCodeAt(s), !p) if (lr(i)) {
        c++, i === 9 ? f += 4 - f % 4 : f++;
        continue;
      } else p = true;
      (i === 10 || s === l - 1) && (i !== 10 && s++, this.bMarks.push(a), this.eMarks.push(s), this.tShift.push(c), this.sCount.push(f), this.bsCount.push(0), p = false, c = 0, f = 0, a = s + 1);
    }
    this.bMarks.push(o.length), this.eMarks.push(o.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
  }
  ne.prototype.push = function(t, e, r) {
    var n = new Ri(t, e, r);
    return n.block = true, r < 0 && this.level--, n.level = this.level, r > 0 && this.level++, this.tokens.push(n), n;
  };
  ne.prototype.isEmpty = function(e) {
    return this.bMarks[e] + this.tShift[e] >= this.eMarks[e];
  };
  ne.prototype.skipEmptyLines = function(e) {
    for (var r = this.lineMax; e < r && !(this.bMarks[e] + this.tShift[e] < this.eMarks[e]); e++) ;
    return e;
  };
  ne.prototype.skipSpaces = function(e) {
    for (var r, n = this.src.length; e < n && (r = this.src.charCodeAt(e), !!lr(r)); e++) ;
    return e;
  };
  ne.prototype.skipSpacesBack = function(e, r) {
    if (e <= r) return e;
    for (; e > r; ) if (!lr(this.src.charCodeAt(--e))) return e + 1;
    return e;
  };
  ne.prototype.skipChars = function(e, r) {
    for (var n = this.src.length; e < n && this.src.charCodeAt(e) === r; e++) ;
    return e;
  };
  ne.prototype.skipCharsBack = function(e, r, n) {
    if (e <= n) return e;
    for (; e > n; ) if (r !== this.src.charCodeAt(--e)) return e + 1;
    return e;
  };
  ne.prototype.getLines = function(e, r, n, i) {
    var o, a, s, l, c, f, p, d = e;
    if (e >= r) return "";
    for (f = new Array(r - e), o = 0; d < r; d++, o++) {
      for (a = 0, p = l = this.bMarks[d], d + 1 < r || i ? c = this.eMarks[d] + 1 : c = this.eMarks[d]; l < c && a < n; ) {
        if (s = this.src.charCodeAt(l), lr(s)) s === 9 ? a += 4 - (a + this.bsCount[d]) % 4 : a++;
        else if (l - p < this.tShift[d]) a++;
        else break;
        l++;
      }
      a > n ? f[o] = new Array(a - n + 1).join(" ") + this.src.slice(l, c) : f[o] = this.src.slice(l, c);
    }
    return f.join("");
  };
  ne.prototype.Token = Ri;
  Ii.exports = ne;
});
var Oi = b((Nc, Li) => {
  "use strict";
  var Za = ir(), cr = [["table", ti(), ["paragraph", "reference"]], ["code", ii()], ["fence", si(), ["paragraph", "reference", "blockquote", "list"]], ["blockquote", ci(), ["paragraph", "reference", "blockquote", "list"]], ["hr", fi(), ["paragraph", "reference", "blockquote", "list"]], ["list", gi(), ["paragraph", "reference", "blockquote"]], ["reference", xi()], ["html_block", Ei(), ["paragraph", "reference", "blockquote"]], ["heading", Ti(), ["paragraph", "reference", "blockquote"]], ["lheading", Si()], ["paragraph", Fi()]];
  function ur() {
    this.ruler = new Za();
    for (var t = 0; t < cr.length; t++) this.ruler.push(cr[t][0], cr[t][1], { alt: (cr[t][2] || []).slice() });
  }
  ur.prototype.tokenize = function(t, e, r) {
    for (var n, i, o = this.ruler.getRules(""), a = o.length, s = e, l = false, c = t.md.options.maxNesting; s < r && (t.line = s = t.skipEmptyLines(s), !(s >= r || t.sCount[s] < t.blkIndent)); ) {
      if (t.level >= c) {
        t.line = r;
        break;
      }
      for (i = 0; i < a && (n = o[i](t, s, r, false), !n); i++) ;
      t.tight = !l, t.isEmpty(t.line - 1) && (l = true), s = t.line, s < r && t.isEmpty(s) && (l = true, s++, t.line = s);
    }
  };
  ur.prototype.parse = function(t, e, r, n) {
    var i;
    t && (i = new this.State(t, e, r, n), this.tokenize(i, i.line, i.lineMax));
  };
  ur.prototype.State = Mi();
  Li.exports = ur;
});
var zi = b((zc, Ni) => {
  "use strict";
  function Ya(t) {
    switch (t) {
      case 10:
      case 33:
      case 35:
      case 36:
      case 37:
      case 38:
      case 42:
      case 43:
      case 45:
      case 58:
      case 60:
      case 61:
      case 62:
      case 64:
      case 91:
      case 92:
      case 93:
      case 94:
      case 95:
      case 96:
      case 123:
      case 125:
      case 126:
        return true;
      default:
        return false;
    }
  }
  Ni.exports = function(e, r) {
    for (var n = e.pos; n < e.posMax && !Ya(e.src.charCodeAt(n)); ) n++;
    return n === e.pos ? false : (r || (e.pending += e.src.slice(e.pos, n)), e.pos = n, true);
  };
});
var Bi = b((Pc, Pi) => {
  "use strict";
  var Xa = F().isSpace;
  Pi.exports = function(e, r) {
    var n, i, o, a = e.pos;
    if (e.src.charCodeAt(a) !== 10) return false;
    if (n = e.pending.length - 1, i = e.posMax, !r) if (n >= 0 && e.pending.charCodeAt(n) === 32) if (n >= 1 && e.pending.charCodeAt(n - 1) === 32) {
      for (o = n - 1; o >= 1 && e.pending.charCodeAt(o - 1) === 32; ) o--;
      e.pending = e.pending.slice(0, o), e.push("hardbreak", "br", 0);
    } else e.pending = e.pending.slice(0, -1), e.push("softbreak", "br", 0);
    else e.push("softbreak", "br", 0);
    for (a++; a < i && Xa(e.src.charCodeAt(a)); ) a++;
    return e.pos = a, true;
  };
});
var Hi = b((Bc, Ui) => {
  "use strict";
  var Ja = F().isSpace, Wr = [];
  for (jr = 0; jr < 256; jr++) Wr.push(0);
  var jr;
  "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(t) {
    Wr[t.charCodeAt(0)] = 1;
  });
  Ui.exports = function(e, r) {
    var n, i = e.pos, o = e.posMax;
    if (e.src.charCodeAt(i) !== 92) return false;
    if (i++, i < o) {
      if (n = e.src.charCodeAt(i), n < 256 && Wr[n] !== 0) return r || (e.pending += e.src[i]), e.pos += 2, true;
      if (n === 10) {
        for (r || e.push("hardbreak", "br", 0), i++; i < o && (n = e.src.charCodeAt(i), !!Ja(n)); ) i++;
        return e.pos = i, true;
      }
    }
    return r || (e.pending += "\\"), e.pos++, true;
  };
});
var Vi = b((Uc, Gi) => {
  "use strict";
  Gi.exports = function(e, r) {
    var n, i, o, a, s, l, c, f, p = e.pos, d = e.src.charCodeAt(p);
    if (d !== 96) return false;
    for (n = p, p++, i = e.posMax; p < i && e.src.charCodeAt(p) === 96; ) p++;
    if (o = e.src.slice(n, p), c = o.length, e.backticksScanned && (e.backticks[c] || 0) <= n) return r || (e.pending += o), e.pos += c, true;
    for (s = l = p; (s = e.src.indexOf("`", l)) !== -1; ) {
      for (l = s + 1; l < i && e.src.charCodeAt(l) === 96; ) l++;
      if (f = l - s, f === c) return r || (a = e.push("code_inline", "code", 0), a.markup = o, a.content = e.src.slice(p, s).replace(/\n/g, " ").replace(/^ (.+) $/, "$1")), e.pos = l, true;
      e.backticks[f] = s;
    }
    return e.backticksScanned = true, r || (e.pending += o), e.pos += c, true;
  };
});
var Zr = b((Hc, $r) => {
  "use strict";
  $r.exports.tokenize = function(e, r) {
    var n, i, o, a, s, l = e.pos, c = e.src.charCodeAt(l);
    if (r || c !== 126 || (i = e.scanDelims(e.pos, true), a = i.length, s = String.fromCharCode(c), a < 2)) return false;
    for (a % 2 && (o = e.push("text", "", 0), o.content = s, a--), n = 0; n < a; n += 2) o = e.push("text", "", 0), o.content = s + s, e.delimiters.push({ marker: c, length: 0, token: e.tokens.length - 1, end: -1, open: i.can_open, close: i.can_close });
    return e.pos += i.length, true;
  };
  function ji(t, e) {
    var r, n, i, o, a, s = [], l = e.length;
    for (r = 0; r < l; r++) i = e[r], i.marker === 126 && i.end !== -1 && (o = e[i.end], a = t.tokens[i.token], a.type = "s_open", a.tag = "s", a.nesting = 1, a.markup = "~~", a.content = "", a = t.tokens[o.token], a.type = "s_close", a.tag = "s", a.nesting = -1, a.markup = "~~", a.content = "", t.tokens[o.token - 1].type === "text" && t.tokens[o.token - 1].content === "~" && s.push(o.token - 1));
    for (; s.length; ) {
      for (r = s.pop(), n = r + 1; n < t.tokens.length && t.tokens[n].type === "s_close"; ) n++;
      n--, r !== n && (a = t.tokens[n], t.tokens[n] = t.tokens[r], t.tokens[r] = a);
    }
  }
  $r.exports.postProcess = function(e) {
    var r, n = e.tokens_meta, i = e.tokens_meta.length;
    for (ji(e, e.delimiters), r = 0; r < i; r++) n[r] && n[r].delimiters && ji(e, n[r].delimiters);
  };
});
var Xr = b((Gc, Yr) => {
  "use strict";
  Yr.exports.tokenize = function(e, r) {
    var n, i, o, a = e.pos, s = e.src.charCodeAt(a);
    if (r || s !== 95 && s !== 42) return false;
    for (i = e.scanDelims(e.pos, s === 42), n = 0; n < i.length; n++) o = e.push("text", "", 0), o.content = String.fromCharCode(s), e.delimiters.push({ marker: s, length: i.length, token: e.tokens.length - 1, end: -1, open: i.can_open, close: i.can_close });
    return e.pos += i.length, true;
  };
  function Wi(t, e) {
    var r, n, i, o, a, s, l = e.length;
    for (r = l - 1; r >= 0; r--) n = e[r], !(n.marker !== 95 && n.marker !== 42) && n.end !== -1 && (i = e[n.end], s = r > 0 && e[r - 1].end === n.end + 1 && e[r - 1].marker === n.marker && e[r - 1].token === n.token - 1 && e[n.end + 1].token === i.token + 1, a = String.fromCharCode(n.marker), o = t.tokens[n.token], o.type = s ? "strong_open" : "em_open", o.tag = s ? "strong" : "em", o.nesting = 1, o.markup = s ? a + a : a, o.content = "", o = t.tokens[i.token], o.type = s ? "strong_close" : "em_close", o.tag = s ? "strong" : "em", o.nesting = -1, o.markup = s ? a + a : a, o.content = "", s && (t.tokens[e[r - 1].token].content = "", t.tokens[e[n.end + 1].token].content = "", r--));
  }
  Yr.exports.postProcess = function(e) {
    var r, n = e.tokens_meta, i = e.tokens_meta.length;
    for (Wi(e, e.delimiters), r = 0; r < i; r++) n[r] && n[r].delimiters && Wi(e, n[r].delimiters);
  };
});
var Zi = b((Vc, $i) => {
  "use strict";
  var Ka = F().normalizeReference, Jr = F().isSpace;
  $i.exports = function(e, r) {
    var n, i, o, a, s, l, c, f, p, d = "", h = "", g = e.pos, k = e.posMax, D = e.pos, C = true;
    if (e.src.charCodeAt(e.pos) !== 91 || (s = e.pos + 1, a = e.md.helpers.parseLinkLabel(e, e.pos, true), a < 0)) return false;
    if (l = a + 1, l < k && e.src.charCodeAt(l) === 40) {
      for (C = false, l++; l < k && (i = e.src.charCodeAt(l), !(!Jr(i) && i !== 10)); l++) ;
      if (l >= k) return false;
      if (D = l, c = e.md.helpers.parseLinkDestination(e.src, l, e.posMax), c.ok) {
        for (d = e.md.normalizeLink(c.str), e.md.validateLink(d) ? l = c.pos : d = "", D = l; l < k && (i = e.src.charCodeAt(l), !(!Jr(i) && i !== 10)); l++) ;
        if (c = e.md.helpers.parseLinkTitle(e.src, l, e.posMax), l < k && D !== l && c.ok) for (h = c.str, l = c.pos; l < k && (i = e.src.charCodeAt(l), !(!Jr(i) && i !== 10)); l++) ;
      }
      (l >= k || e.src.charCodeAt(l) !== 41) && (C = true), l++;
    }
    if (C) {
      if (typeof e.env.references > "u") return false;
      if (l < k && e.src.charCodeAt(l) === 91 ? (D = l + 1, l = e.md.helpers.parseLinkLabel(e, l), l >= 0 ? o = e.src.slice(D, l++) : l = a + 1) : l = a + 1, o || (o = e.src.slice(s, a)), f = e.env.references[Ka(o)], !f) return e.pos = g, false;
      d = f.href, h = f.title;
    }
    return r || (e.pos = s, e.posMax = a, p = e.push("link_open", "a", 1), p.attrs = n = [["href", d]], h && n.push(["title", h]), e.md.inline.tokenize(e), p = e.push("link_close", "a", -1)), e.pos = l, e.posMax = k, true;
  };
});
var Xi = b((jc, Yi) => {
  "use strict";
  var Qa = F().normalizeReference, Kr = F().isSpace;
  Yi.exports = function(e, r) {
    var n, i, o, a, s, l, c, f, p, d, h, g, k, D = "", C = e.pos, _ = e.posMax;
    if (e.src.charCodeAt(e.pos) !== 33 || e.src.charCodeAt(e.pos + 1) !== 91 || (l = e.pos + 2, s = e.md.helpers.parseLinkLabel(e, e.pos + 1, false), s < 0)) return false;
    if (c = s + 1, c < _ && e.src.charCodeAt(c) === 40) {
      for (c++; c < _ && (i = e.src.charCodeAt(c), !(!Kr(i) && i !== 10)); c++) ;
      if (c >= _) return false;
      for (k = c, p = e.md.helpers.parseLinkDestination(e.src, c, e.posMax), p.ok && (D = e.md.normalizeLink(p.str), e.md.validateLink(D) ? c = p.pos : D = ""), k = c; c < _ && (i = e.src.charCodeAt(c), !(!Kr(i) && i !== 10)); c++) ;
      if (p = e.md.helpers.parseLinkTitle(e.src, c, e.posMax), c < _ && k !== c && p.ok) for (d = p.str, c = p.pos; c < _ && (i = e.src.charCodeAt(c), !(!Kr(i) && i !== 10)); c++) ;
      else d = "";
      if (c >= _ || e.src.charCodeAt(c) !== 41) return e.pos = C, false;
      c++;
    } else {
      if (typeof e.env.references > "u") return false;
      if (c < _ && e.src.charCodeAt(c) === 91 ? (k = c + 1, c = e.md.helpers.parseLinkLabel(e, c), c >= 0 ? a = e.src.slice(k, c++) : c = s + 1) : c = s + 1, a || (a = e.src.slice(l, s)), f = e.env.references[Qa(a)], !f) return e.pos = C, false;
      D = f.href, d = f.title;
    }
    return r || (o = e.src.slice(l, s), e.md.inline.parse(o, e.md, e.env, g = []), h = e.push("image", "img", 0), h.attrs = n = [["src", D], ["alt", ""]], h.children = g, h.content = o, d && n.push(["title", d])), e.pos = c, e.posMax = _, true;
  };
});
var Ki = b((Wc, Ji) => {
  "use strict";
  var el = /^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/, rl = /^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/;
  Ji.exports = function(e, r) {
    var n, i, o, a, s, l, c = e.pos;
    if (e.src.charCodeAt(c) !== 60) return false;
    for (s = e.pos, l = e.posMax; ; ) {
      if (++c >= l || (a = e.src.charCodeAt(c), a === 60)) return false;
      if (a === 62) break;
    }
    return n = e.src.slice(s + 1, c), rl.test(n) ? (i = e.md.normalizeLink(n), e.md.validateLink(i) ? (r || (o = e.push("link_open", "a", 1), o.attrs = [["href", i]], o.markup = "autolink", o.info = "auto", o = e.push("text", "", 0), o.content = e.md.normalizeLinkText(n), o = e.push("link_close", "a", -1), o.markup = "autolink", o.info = "auto"), e.pos += n.length + 2, true) : false) : el.test(n) ? (i = e.md.normalizeLink("mailto:" + n), e.md.validateLink(i) ? (r || (o = e.push("link_open", "a", 1), o.attrs = [["href", i]], o.markup = "autolink", o.info = "auto", o = e.push("text", "", 0), o.content = e.md.normalizeLinkText(n), o = e.push("link_close", "a", -1), o.markup = "autolink", o.info = "auto"), e.pos += n.length + 2, true) : false) : false;
  };
});
var eo = b(($c, Qi) => {
  "use strict";
  var tl = Vr().HTML_TAG_RE;
  function nl(t) {
    var e = t | 32;
    return e >= 97 && e <= 122;
  }
  Qi.exports = function(e, r) {
    var n, i, o, a, s = e.pos;
    return !e.md.options.html || (o = e.posMax, e.src.charCodeAt(s) !== 60 || s + 2 >= o) || (n = e.src.charCodeAt(s + 1), n !== 33 && n !== 63 && n !== 47 && !nl(n)) || (i = e.src.slice(s).match(tl), !i) ? false : (r || (a = e.push("html_inline", "", 0), a.content = e.src.slice(s, s + i[0].length)), e.pos += i[0].length, true);
  };
});
var io = b((Zc, no) => {
  "use strict";
  var ro = Mr(), il = F().has, ol = F().isValidEntityCode, to = F().fromCodePoint, sl = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i, al = /^&([a-z][a-z0-9]{1,31});/i;
  no.exports = function(e, r) {
    var n, i, o, a = e.pos, s = e.posMax;
    if (e.src.charCodeAt(a) !== 38) return false;
    if (a + 1 < s) {
      if (n = e.src.charCodeAt(a + 1), n === 35) {
        if (o = e.src.slice(a).match(sl), o) return r || (i = o[1][0].toLowerCase() === "x" ? parseInt(o[1].slice(1), 16) : parseInt(o[1], 10), e.pending += ol(i) ? to(i) : to(65533)), e.pos += o[0].length, true;
      } else if (o = e.src.slice(a).match(al), o && il(ro, o[1])) return r || (e.pending += ro[o[1]]), e.pos += o[0].length, true;
    }
    return r || (e.pending += "&"), e.pos++, true;
  };
});
var ao = b((Yc, so) => {
  "use strict";
  function oo(t, e) {
    var r, n, i, o, a, s, l, c, f = {}, p = e.length;
    if (p) {
      var d = 0, h = -2, g = [];
      for (r = 0; r < p; r++) if (i = e[r], g.push(0), (e[d].marker !== i.marker || h !== i.token - 1) && (d = r), h = i.token, i.length = i.length || 0, !!i.close) {
        for (f.hasOwnProperty(i.marker) || (f[i.marker] = [-1, -1, -1, -1, -1, -1]), a = f[i.marker][(i.open ? 3 : 0) + i.length % 3], n = d - g[d] - 1, s = n; n > a; n -= g[n] + 1) if (o = e[n], o.marker === i.marker && o.open && o.end < 0 && (l = false, (o.close || i.open) && (o.length + i.length) % 3 === 0 && (o.length % 3 !== 0 || i.length % 3 !== 0) && (l = true), !l)) {
          c = n > 0 && !e[n - 1].open ? g[n - 1] + 1 : 0, g[r] = r - n + c, g[n] = c, i.open = false, o.end = r, o.close = false, s = -1, h = -2;
          break;
        }
        s !== -1 && (f[i.marker][(i.open ? 3 : 0) + (i.length || 0) % 3] = s);
      }
    }
  }
  so.exports = function(e) {
    var r, n = e.tokens_meta, i = e.tokens_meta.length;
    for (oo(e, e.delimiters), r = 0; r < i; r++) n[r] && n[r].delimiters && oo(e, n[r].delimiters);
  };
});
var co = b((Xc, lo) => {
  "use strict";
  lo.exports = function(e) {
    var r, n, i = 0, o = e.tokens, a = e.tokens.length;
    for (r = n = 0; r < a; r++) o[r].nesting < 0 && i--, o[r].level = i, o[r].nesting > 0 && i++, o[r].type === "text" && r + 1 < a && o[r + 1].type === "text" ? o[r + 1].content = o[r].content + o[r + 1].content : (r !== n && (o[n] = o[r]), n++);
    r !== n && (o.length = n);
  };
});
var mo = b((Jc, ho) => {
  "use strict";
  var Qr = sr(), uo = F().isWhiteSpace, fo = F().isPunctChar, po = F().isMdAsciiPunct;
  function Be(t, e, r, n) {
    this.src = t, this.env = r, this.md = e, this.tokens = n, this.tokens_meta = Array(n.length), this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = [], this._prev_delimiters = [], this.backticks = {}, this.backticksScanned = false;
  }
  Be.prototype.pushPending = function() {
    var t = new Qr("text", "", 0);
    return t.content = this.pending, t.level = this.pendingLevel, this.tokens.push(t), this.pending = "", t;
  };
  Be.prototype.push = function(t, e, r) {
    this.pending && this.pushPending();
    var n = new Qr(t, e, r), i = null;
    return r < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), n.level = this.level, r > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), this.delimiters = [], i = { delimiters: this.delimiters }), this.pendingLevel = this.level, this.tokens.push(n), this.tokens_meta.push(i), n;
  };
  Be.prototype.scanDelims = function(t, e) {
    var r = t, n, i, o, a, s, l, c, f, p, d = true, h = true, g = this.posMax, k = this.src.charCodeAt(t);
    for (n = t > 0 ? this.src.charCodeAt(t - 1) : 32; r < g && this.src.charCodeAt(r) === k; ) r++;
    return o = r - t, i = r < g ? this.src.charCodeAt(r) : 32, c = po(n) || fo(String.fromCharCode(n)), p = po(i) || fo(String.fromCharCode(i)), l = uo(n), f = uo(i), f ? d = false : p && (l || c || (d = false)), l ? h = false : c && (f || p || (h = false)), e ? (a = d, s = h) : (a = d && (!h || c), s = h && (!d || p)), { can_open: a, can_close: s, length: o };
  };
  Be.prototype.Token = Qr;
  ho.exports = Be;
});
var xo = b((Kc, _o) => {
  "use strict";
  var go = ir(), et = [["text", zi()], ["newline", Bi()], ["escape", Hi()], ["backticks", Vi()], ["strikethrough", Zr().tokenize], ["emphasis", Xr().tokenize], ["link", Zi()], ["image", Xi()], ["autolink", Ki()], ["html_inline", eo()], ["entity", io()]], rt = [["balance_pairs", ao()], ["strikethrough", Zr().postProcess], ["emphasis", Xr().postProcess], ["text_collapse", co()]];
  function Ue() {
    var t;
    for (this.ruler = new go(), t = 0; t < et.length; t++) this.ruler.push(et[t][0], et[t][1]);
    for (this.ruler2 = new go(), t = 0; t < rt.length; t++) this.ruler2.push(rt[t][0], rt[t][1]);
  }
  Ue.prototype.skipToken = function(t) {
    var e, r, n = t.pos, i = this.ruler.getRules(""), o = i.length, a = t.md.options.maxNesting, s = t.cache;
    if (typeof s[n] < "u") {
      t.pos = s[n];
      return;
    }
    if (t.level < a) for (r = 0; r < o && (t.level++, e = i[r](t, true), t.level--, !e); r++) ;
    else t.pos = t.posMax;
    e || t.pos++, s[n] = t.pos;
  };
  Ue.prototype.tokenize = function(t) {
    for (var e, r, n = this.ruler.getRules(""), i = n.length, o = t.posMax, a = t.md.options.maxNesting; t.pos < o; ) {
      if (t.level < a) for (r = 0; r < i && (e = n[r](t, false), !e); r++) ;
      if (e) {
        if (t.pos >= o) break;
        continue;
      }
      t.pending += t.src[t.pos++];
    }
    t.pending && t.pushPending();
  };
  Ue.prototype.parse = function(t, e, r, n) {
    var i, o, a, s = new this.State(t, e, r, n);
    for (this.tokenize(s), o = this.ruler2.getRules(""), a = o.length, i = 0; i < a; i++) o[i](s);
  };
  Ue.prototype.State = mo();
  _o.exports = Ue;
});
var ko = b((Qc, bo) => {
  "use strict";
  bo.exports = function(t) {
    var e = {};
    e.src_Any = Or().source, e.src_Cc = Nr().source, e.src_Z = zr().source, e.src_P = Qe().source, e.src_ZPCc = [e.src_Z, e.src_P, e.src_Cc].join("|"), e.src_ZCc = [e.src_Z, e.src_Cc].join("|");
    var r = "[><｜]";
    return e.src_pseudo_letter = "(?:(?!" + r + "|" + e.src_ZPCc + ")" + e.src_Any + ")", e.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", e.src_auth = "(?:(?:(?!" + e.src_ZCc + "|[@/\\[\\]()]).)+@)?", e.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", e.src_host_terminator = "(?=$|" + r + "|" + e.src_ZPCc + ")(?!-|_|:\\d|\\.-|\\.(?!$|" + e.src_ZPCc + "))", e.src_path = "(?:[/?#](?:(?!" + e.src_ZCc + "|" + r + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + e.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + e.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + e.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + e.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + e.src_ZCc + "|[']).)+\\'|\\'(?=" + e.src_pseudo_letter + "|[-]).|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + e.src_ZCc + "|[.]).|" + (t && t["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + ",(?!" + e.src_ZCc + ").|;(?!" + e.src_ZCc + ").|\\!+(?!" + e.src_ZCc + "|[!]).|\\?(?!" + e.src_ZCc + "|[?]).)+|\\/)?", e.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', e.src_xn = "xn--[a-z0-9\\-]{1,59}", e.src_domain_root = "(?:" + e.src_xn + "|" + e.src_pseudo_letter + "{1,63})", e.src_domain = "(?:" + e.src_xn + "|(?:" + e.src_pseudo_letter + ")|(?:" + e.src_pseudo_letter + "(?:-|" + e.src_pseudo_letter + "){0,61}" + e.src_pseudo_letter + "))", e.src_host = "(?:(?:(?:(?:" + e.src_domain + ")\\.)*" + e.src_domain + "))", e.tpl_host_fuzzy = "(?:" + e.src_ip4 + "|(?:(?:(?:" + e.src_domain + ")\\.)+(?:%TLDS%)))", e.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + e.src_domain + ")\\.)+(?:%TLDS%))", e.src_host_strict = e.src_host + e.src_host_terminator, e.tpl_host_fuzzy_strict = e.tpl_host_fuzzy + e.src_host_terminator, e.src_host_port_strict = e.src_host + e.src_port + e.src_host_terminator, e.tpl_host_port_fuzzy_strict = e.tpl_host_fuzzy + e.src_port + e.src_host_terminator, e.tpl_host_port_no_ip_fuzzy_strict = e.tpl_host_no_ip_fuzzy + e.src_port + e.src_host_terminator, e.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + e.src_ZPCc + "|>|$))", e.tpl_email_fuzzy = "(^|" + r + '|"|\\(|' + e.src_ZCc + ")(" + e.src_email_name + "@" + e.tpl_host_fuzzy_strict + ")", e.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + e.src_ZPCc + "))((?![$+<=>^`|｜])" + e.tpl_host_port_fuzzy_strict + e.src_path + ")", e.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + e.src_ZPCc + "))((?![$+<=>^`|｜])" + e.tpl_host_port_no_ip_fuzzy_strict + e.src_path + ")", e;
  };
});
var Do = b((eu, yo) => {
  "use strict";
  function tt(t) {
    var e = Array.prototype.slice.call(arguments, 1);
    return e.forEach(function(r) {
      r && Object.keys(r).forEach(function(n) {
        t[n] = r[n];
      });
    }), t;
  }
  function pr(t) {
    return Object.prototype.toString.call(t);
  }
  function ll(t) {
    return pr(t) === "[object String]";
  }
  function cl(t) {
    return pr(t) === "[object Object]";
  }
  function ul(t) {
    return pr(t) === "[object RegExp]";
  }
  function Ao(t) {
    return pr(t) === "[object Function]";
  }
  function fl(t) {
    return t.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
  }
  var Eo = { fuzzyLink: true, fuzzyEmail: true, fuzzyIP: false };
  function pl(t) {
    return Object.keys(t || {}).reduce(function(e, r) {
      return e || Eo.hasOwnProperty(r);
    }, false);
  }
  var hl = { "http:": { validate: function(t, e, r) {
    var n = t.slice(e);
    return r.re.http || (r.re.http = new RegExp("^\\/\\/" + r.re.src_auth + r.re.src_host_port_strict + r.re.src_path, "i")), r.re.http.test(n) ? n.match(r.re.http)[0].length : 0;
  } }, "https:": "http:", "ftp:": "http:", "//": { validate: function(t, e, r) {
    var n = t.slice(e);
    return r.re.no_http || (r.re.no_http = new RegExp("^" + r.re.src_auth + "(?:localhost|(?:(?:" + r.re.src_domain + ")\\.)+" + r.re.src_domain_root + ")" + r.re.src_port + r.re.src_host_terminator + r.re.src_path, "i")), r.re.no_http.test(n) ? e >= 3 && t[e - 3] === ":" || e >= 3 && t[e - 3] === "/" ? 0 : n.match(r.re.no_http)[0].length : 0;
  } }, "mailto:": { validate: function(t, e, r) {
    var n = t.slice(e);
    return r.re.mailto || (r.re.mailto = new RegExp("^" + r.re.src_email_name + "@" + r.re.src_host_strict, "i")), r.re.mailto.test(n) ? n.match(r.re.mailto)[0].length : 0;
  } } }, dl = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]", ml = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
  function gl(t) {
    t.__index__ = -1, t.__text_cache__ = "";
  }
  function _l(t) {
    return function(e, r) {
      var n = e.slice(r);
      return t.test(n) ? n.match(t)[0].length : 0;
    };
  }
  function Co() {
    return function(t, e) {
      e.normalize(t);
    };
  }
  function fr(t) {
    var e = t.re = ko()(t.__opts__), r = t.__tlds__.slice();
    t.onCompile(), t.__tlds_replaced__ || r.push(dl), r.push(e.src_xn), e.src_tlds = r.join("|");
    function n(s) {
      return s.replace("%TLDS%", e.src_tlds);
    }
    e.email_fuzzy = RegExp(n(e.tpl_email_fuzzy), "i"), e.link_fuzzy = RegExp(n(e.tpl_link_fuzzy), "i"), e.link_no_ip_fuzzy = RegExp(n(e.tpl_link_no_ip_fuzzy), "i"), e.host_fuzzy_test = RegExp(n(e.tpl_host_fuzzy_test), "i");
    var i = [];
    t.__compiled__ = {};
    function o(s, l) {
      throw new Error('(LinkifyIt) Invalid schema "' + s + '": ' + l);
    }
    Object.keys(t.__schemas__).forEach(function(s) {
      var l = t.__schemas__[s];
      if (l !== null) {
        var c = { validate: null, link: null };
        if (t.__compiled__[s] = c, cl(l)) {
          ul(l.validate) ? c.validate = _l(l.validate) : Ao(l.validate) ? c.validate = l.validate : o(s, l), Ao(l.normalize) ? c.normalize = l.normalize : l.normalize ? o(s, l) : c.normalize = Co();
          return;
        }
        if (ll(l)) {
          i.push(s);
          return;
        }
        o(s, l);
      }
    }), i.forEach(function(s) {
      t.__compiled__[t.__schemas__[s]] && (t.__compiled__[s].validate = t.__compiled__[t.__schemas__[s]].validate, t.__compiled__[s].normalize = t.__compiled__[t.__schemas__[s]].normalize);
    }), t.__compiled__[""] = { validate: null, normalize: Co() };
    var a = Object.keys(t.__compiled__).filter(function(s) {
      return s.length > 0 && t.__compiled__[s];
    }).map(fl).join("|");
    t.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + e.src_ZPCc + "))(" + a + ")", "i"), t.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + e.src_ZPCc + "))(" + a + ")", "ig"), t.re.pretest = RegExp("(" + t.re.schema_test.source + ")|(" + t.re.host_fuzzy_test.source + ")|@", "i"), gl(t);
  }
  function xl(t, e) {
    var r = t.__index__, n = t.__last_index__, i = t.__text_cache__.slice(r, n);
    this.schema = t.__schema__.toLowerCase(), this.index = r + e, this.lastIndex = n + e, this.raw = i, this.text = i, this.url = i;
  }
  function vo(t, e) {
    var r = new xl(t, e);
    return t.__compiled__[r.schema].normalize(r, t), r;
  }
  function Y(t, e) {
    if (!(this instanceof Y)) return new Y(t, e);
    e || pl(t) && (e = t, t = {}), this.__opts__ = tt({}, Eo, e), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = tt({}, hl, t), this.__compiled__ = {}, this.__tlds__ = ml, this.__tlds_replaced__ = false, this.re = {}, fr(this);
  }
  Y.prototype.add = function(e, r) {
    return this.__schemas__[e] = r, fr(this), this;
  };
  Y.prototype.set = function(e) {
    return this.__opts__ = tt(this.__opts__, e), this;
  };
  Y.prototype.test = function(e) {
    if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return false;
    var r, n, i, o, a, s, l, c, f;
    if (this.re.schema_test.test(e)) {
      for (l = this.re.schema_search, l.lastIndex = 0; (r = l.exec(e)) !== null; ) if (o = this.testSchemaAt(e, r[2], l.lastIndex), o) {
        this.__schema__ = r[2], this.__index__ = r.index + r[1].length, this.__last_index__ = r.index + r[0].length + o;
        break;
      }
    }
    return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (c = e.search(this.re.host_fuzzy_test), c >= 0 && (this.__index__ < 0 || c < this.__index__) && (n = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null && (a = n.index + n[1].length, (this.__index__ < 0 || a < this.__index__) && (this.__schema__ = "", this.__index__ = a, this.__last_index__ = n.index + n[0].length))), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && (f = e.indexOf("@"), f >= 0 && (i = e.match(this.re.email_fuzzy)) !== null && (a = i.index + i[1].length, s = i.index + i[0].length, (this.__index__ < 0 || a < this.__index__ || a === this.__index__ && s > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = a, this.__last_index__ = s))), this.__index__ >= 0;
  };
  Y.prototype.pretest = function(e) {
    return this.re.pretest.test(e);
  };
  Y.prototype.testSchemaAt = function(e, r, n) {
    return this.__compiled__[r.toLowerCase()] ? this.__compiled__[r.toLowerCase()].validate(e, n, this) : 0;
  };
  Y.prototype.match = function(e) {
    var r = 0, n = [];
    this.__index__ >= 0 && this.__text_cache__ === e && (n.push(vo(this, r)), r = this.__last_index__);
    for (var i = r ? e.slice(r) : e; this.test(i); ) n.push(vo(this, r)), i = i.slice(this.__last_index__), r += this.__last_index__;
    return n.length ? n : null;
  };
  Y.prototype.tlds = function(e, r) {
    return e = Array.isArray(e) ? e : [e], r ? (this.__tlds__ = this.__tlds__.concat(e).sort().filter(function(n, i, o) {
      return n !== o[i - 1];
    }).reverse(), fr(this), this) : (this.__tlds__ = e.slice(), this.__tlds_replaced__ = true, fr(this), this);
  };
  Y.prototype.normalize = function(e) {
    e.schema || (e.url = "http://" + e.url), e.schema === "mailto:" && !/^mailto:/i.test(e.url) && (e.url = "mailto:" + e.url);
  };
  Y.prototype.onCompile = function() {
  };
  yo.exports = Y;
});
var Mo = b((ru, Io) => {
  "use strict";
  var bl = /^xn--/, kl = /[^\0-\x7F]/, Al = /[\x2E\u3002\uFF0E\uFF61]/g, Cl = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" }, nt = 35, ie = Math.floor, it = String.fromCharCode;
  function ce(t) {
    throw new RangeError(Cl[t]);
  }
  function vl(t, e) {
    let r = [], n = t.length;
    for (; n--; ) r[n] = e(t[n]);
    return r;
  }
  function wo(t, e) {
    let r = t.split("@"), n = "";
    r.length > 1 && (n = r[0] + "@", t = r[1]), t = t.replace(Al, ".");
    let i = t.split("."), o = vl(i, e).join(".");
    return n + o;
  }
  function So(t) {
    let e = [], r = 0, n = t.length;
    for (; r < n; ) {
      let i = t.charCodeAt(r++);
      if (i >= 55296 && i <= 56319 && r < n) {
        let o = t.charCodeAt(r++);
        (o & 64512) == 56320 ? e.push(((i & 1023) << 10) + (o & 1023) + 65536) : (e.push(i), r--);
      } else e.push(i);
    }
    return e;
  }
  var El = (t) => String.fromCodePoint(...t), yl = function(t) {
    return t >= 48 && t < 58 ? 26 + (t - 48) : t >= 65 && t < 91 ? t - 65 : t >= 97 && t < 123 ? t - 97 : 36;
  }, To = function(t, e) {
    return t + 22 + 75 * (t < 26) - ((e != 0) << 5);
  }, qo = function(t, e, r) {
    let n = 0;
    for (t = r ? ie(t / 700) : t >> 1, t += ie(t / e); t > nt * 26 >> 1; n += 36) t = ie(t / nt);
    return ie(n + (nt + 1) * t / (t + 38));
  }, Fo = function(t) {
    let e = [], r = t.length, n = 0, i = 128, o = 72, a = t.lastIndexOf("-");
    a < 0 && (a = 0);
    for (let s = 0; s < a; ++s) t.charCodeAt(s) >= 128 && ce("not-basic"), e.push(t.charCodeAt(s));
    for (let s = a > 0 ? a + 1 : 0; s < r; ) {
      let l = n;
      for (let f = 1, p = 36; ; p += 36) {
        s >= r && ce("invalid-input");
        let d = yl(t.charCodeAt(s++));
        d >= 36 && ce("invalid-input"), d > ie((2147483647 - n) / f) && ce("overflow"), n += d * f;
        let h = p <= o ? 1 : p >= o + 26 ? 26 : p - o;
        if (d < h) break;
        let g = 36 - h;
        f > ie(2147483647 / g) && ce("overflow"), f *= g;
      }
      let c = e.length + 1;
      o = qo(n - l, c, l == 0), ie(n / c) > 2147483647 - i && ce("overflow"), i += ie(n / c), n %= c, e.splice(n++, 0, i);
    }
    return String.fromCodePoint(...e);
  }, Ro = function(t) {
    let e = [];
    t = So(t);
    let r = t.length, n = 128, i = 0, o = 72;
    for (let l of t) l < 128 && e.push(it(l));
    let a = e.length, s = a;
    for (a && e.push("-"); s < r; ) {
      let l = 2147483647;
      for (let f of t) f >= n && f < l && (l = f);
      let c = s + 1;
      l - n > ie((2147483647 - i) / c) && ce("overflow"), i += (l - n) * c, n = l;
      for (let f of t) if (f < n && ++i > 2147483647 && ce("overflow"), f === n) {
        let p = i;
        for (let d = 36; ; d += 36) {
          let h = d <= o ? 1 : d >= o + 26 ? 26 : d - o;
          if (p < h) break;
          let g = p - h, k = 36 - h;
          e.push(it(To(h + g % k, 0))), p = ie(g / k);
        }
        e.push(it(To(p, 0))), o = qo(i, c, s === a), i = 0, ++s;
      }
      ++i, ++n;
    }
    return e.join("");
  }, Dl = function(t) {
    return wo(t, function(e) {
      return bl.test(e) ? Fo(e.slice(4).toLowerCase()) : e;
    });
  }, Tl = function(t) {
    return wo(t, function(e) {
      return kl.test(e) ? "xn--" + Ro(e) : e;
    });
  }, wl = { version: "2.3.1", ucs2: { decode: So, encode: El }, decode: Fo, encode: Ro, toASCII: Tl, toUnicode: Dl };
  Io.exports = wl;
});
var Oo = b((tu, Lo) => {
  "use strict";
  Lo.exports = { options: { html: false, xhtmlOut: false, breaks: false, langPrefix: "language-", linkify: false, typographer: false, quotes: "“”‘’", highlight: null, maxNesting: 100 }, components: { core: {}, block: {}, inline: {} } };
});
var zo = b((nu, No) => {
  "use strict";
  No.exports = { options: { html: false, xhtmlOut: false, breaks: false, langPrefix: "language-", linkify: false, typographer: false, quotes: "“”‘’", highlight: null, maxNesting: 20 }, components: { core: { rules: ["normalize", "block", "inline"] }, block: { rules: ["paragraph"] }, inline: { rules: ["text"], rules2: ["balance_pairs", "text_collapse"] } } };
});
var Bo = b((iu, Po) => {
  "use strict";
  Po.exports = { options: { html: true, xhtmlOut: true, breaks: false, langPrefix: "language-", linkify: false, typographer: false, quotes: "“”‘’", highlight: null, maxNesting: 20 }, components: { core: { rules: ["normalize", "block", "inline"] }, block: { rules: ["blockquote", "code", "fence", "heading", "hr", "html_block", "lheading", "list", "reference", "paragraph"] }, inline: { rules: ["autolink", "backticks", "emphasis", "entity", "escape", "html_inline", "image", "link", "newline", "text"], rules2: ["balance_pairs", "emphasis", "text_collapse"] } } };
});
var Vo = b((ou, Go) => {
  "use strict";
  var He = F(), Sl = Dn(), ql = wn(), Fl = Qn(), Rl = Oi(), Il = xo(), Ml = Do(), me = Lr(), Uo = Mo(), Ll = { default: Oo(), zero: zo(), commonmark: Bo() }, Ol = /^(vbscript|javascript|file|data):/, Nl = /^data:image\/(gif|png|jpeg|webp);/;
  function zl(t) {
    var e = t.trim().toLowerCase();
    return Ol.test(e) ? !!Nl.test(e) : true;
  }
  var Ho = ["http:", "https:", "mailto:"];
  function Pl(t) {
    var e = me.parse(t, true);
    if (e.hostname && (!e.protocol || Ho.indexOf(e.protocol) >= 0)) try {
      e.hostname = Uo.toASCII(e.hostname);
    } catch {
    }
    return me.encode(me.format(e));
  }
  function Bl(t) {
    var e = me.parse(t, true);
    if (e.hostname && (!e.protocol || Ho.indexOf(e.protocol) >= 0)) try {
      e.hostname = Uo.toUnicode(e.hostname);
    } catch {
    }
    return me.decode(me.format(e), me.decode.defaultChars + "%");
  }
  function X(t, e) {
    if (!(this instanceof X)) return new X(t, e);
    e || He.isString(t) || (e = t || {}, t = "default"), this.inline = new Il(), this.block = new Rl(), this.core = new Fl(), this.renderer = new ql(), this.linkify = new Ml(), this.validateLink = zl, this.normalizeLink = Pl, this.normalizeLinkText = Bl, this.utils = He, this.helpers = He.assign({}, Sl), this.options = {}, this.configure(t), e && this.set(e);
  }
  X.prototype.set = function(t) {
    return He.assign(this.options, t), this;
  };
  X.prototype.configure = function(t) {
    var e = this, r;
    if (He.isString(t) && (r = t, t = Ll[r], !t)) throw new Error('Wrong `markdown-it` preset "' + r + '", check name');
    if (!t) throw new Error("Wrong `markdown-it` preset, can't be empty");
    return t.options && e.set(t.options), t.components && Object.keys(t.components).forEach(function(n) {
      t.components[n].rules && e[n].ruler.enableOnly(t.components[n].rules), t.components[n].rules2 && e[n].ruler2.enableOnly(t.components[n].rules2);
    }), this;
  };
  X.prototype.enable = function(t, e) {
    var r = [];
    Array.isArray(t) || (t = [t]), ["core", "block", "inline"].forEach(function(i) {
      r = r.concat(this[i].ruler.enable(t, true));
    }, this), r = r.concat(this.inline.ruler2.enable(t, true));
    var n = t.filter(function(i) {
      return r.indexOf(i) < 0;
    });
    if (n.length && !e) throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + n);
    return this;
  };
  X.prototype.disable = function(t, e) {
    var r = [];
    Array.isArray(t) || (t = [t]), ["core", "block", "inline"].forEach(function(i) {
      r = r.concat(this[i].ruler.disable(t, true));
    }, this), r = r.concat(this.inline.ruler2.disable(t, true));
    var n = t.filter(function(i) {
      return r.indexOf(i) < 0;
    });
    if (n.length && !e) throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + n);
    return this;
  };
  X.prototype.use = function(t) {
    var e = [this].concat(Array.prototype.slice.call(arguments, 1));
    return t.apply(t, e), this;
  };
  X.prototype.parse = function(t, e) {
    if (typeof t != "string") throw new Error("Input data should be a String");
    var r = new this.core.State(t, this, e);
    return this.core.process(r), r.tokens;
  };
  X.prototype.render = function(t, e) {
    return e = e || {}, this.renderer.render(this.parse(t, e), this.options, e);
  };
  X.prototype.parseInline = function(t, e) {
    var r = new this.core.State(t, this, e);
    return r.inlineMode = true, this.core.process(r), r.tokens;
  };
  X.prototype.renderInline = function(t, e) {
    return e = e || {}, this.renderer.render(this.parseInline(t, e), this.options, e);
  };
  Go.exports = X;
});
var Wo = b((su, jo) => {
  "use strict";
  jo.exports = Vo();
});
var { entries: zt, setPrototypeOf: qt, isFrozen: us, getPrototypeOf: fs, getOwnPropertyDescriptor: ps } = Object, { freeze: j, seal: Z, create: Fr } = Object, { apply: Rr, construct: Ir } = typeof Reflect < "u" && Reflect;
j || (j = function(e) {
  return e;
});
Z || (Z = function(e) {
  return e;
});
Rr || (Rr = function(e, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++) i[o - 2] = arguments[o];
  return e.apply(r, i);
});
Ir || (Ir = function(e) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
  return new e(...n);
});
var Xe = W(Array.prototype.forEach), hs = W(Array.prototype.lastIndexOf), Ft = W(Array.prototype.pop), Me = W(Array.prototype.push), ds = W(Array.prototype.splice), Ke = W(String.prototype.toLowerCase), yr = W(String.prototype.toString), Dr = W(String.prototype.match), Le = W(String.prototype.replace), ms = W(String.prototype.indexOf), gs = W(String.prototype.trim), J = W(Object.prototype.hasOwnProperty), V = W(RegExp.prototype.test), Oe = _s(TypeError);
function W(t) {
  return function(e) {
    e instanceof RegExp && (e.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
    return Rr(t, e, n);
  };
}
function _s(t) {
  return function() {
    for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
    return Ir(t, r);
  };
}
function w(t, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ke;
  qt && qt(t, null);
  let n = e.length;
  for (; n--; ) {
    let i = e[n];
    if (typeof i == "string") {
      let o = r(i);
      o !== i && (us(e) || (e[n] = o), i = o);
    }
    t[i] = true;
  }
  return t;
}
function xs(t) {
  for (let e = 0; e < t.length; e++) J(t, e) || (t[e] = null);
  return t;
}
function re(t) {
  let e = Fr(null);
  for (let [r, n] of zt(t)) J(t, r) && (Array.isArray(n) ? e[r] = xs(n) : n && typeof n == "object" && n.constructor === Object ? e[r] = re(n) : e[r] = n);
  return e;
}
function Ne(t, e) {
  for (; t !== null; ) {
    let n = ps(t, e);
    if (n) {
      if (n.get) return W(n.get);
      if (typeof n.value == "function") return W(n.value);
    }
    t = fs(t);
  }
  function r() {
    return null;
  }
  return r;
}
var Rt = j(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Tr = j(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), wr = j(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), bs = j(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Sr = j(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), ks = j(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), It = j(["#text"]), Mt = j(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), qr = j(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Lt = j(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Je = j(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), As = Z(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Cs = Z(/<%[\w\W]*|[\w\W]*%>/gm), vs = Z(/\$\{[\w\W]*/gm), Es = Z(/^data-[\-\w.\u00B7-\uFFFF]+$/), ys = Z(/^aria-[\-\w]+$/), Pt = Z(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), Ds = Z(/^(?:\w+script|data):/i), Ts = Z(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), Bt = Z(/^html$/i), ws = Z(/^[a-z][.\w]*(-[.\w]+)+$/i), Ot = Object.freeze({ __proto__: null, ARIA_ATTR: ys, ATTR_WHITESPACE: Ts, CUSTOM_ELEMENT: ws, DATA_ATTR: Es, DOCTYPE_NAME: Bt, ERB_EXPR: Cs, IS_ALLOWED_URI: Pt, IS_SCRIPT_OR_DATA: Ds, MUSTACHE_EXPR: As, TMPLIT_EXPR: vs }), ze = { element: 1, attribute: 2, text: 3, cdataSection: 4, entityReference: 5, entityNode: 6, progressingInstruction: 7, comment: 8, document: 9, documentType: 10, documentFragment: 11, notation: 12 }, Ss = function() {
  return typeof window > "u" ? null : window;
}, qs = function(e, r) {
  if (typeof e != "object" || typeof e.createPolicy != "function") return null;
  let n = null, i = "data-tt-policy-suffix";
  r && r.hasAttribute(i) && (n = r.getAttribute(i));
  let o = "dompurify" + (n ? "#" + n : "");
  try {
    return e.createPolicy(o, { createHTML(a) {
      return a;
    }, createScriptURL(a) {
      return a;
    } });
  } catch {
    return console.warn("TrustedTypes policy " + o + " could not be created."), null;
  }
}, Nt = function() {
  return { afterSanitizeAttributes: [], afterSanitizeElements: [], afterSanitizeShadowDOM: [], beforeSanitizeAttributes: [], beforeSanitizeElements: [], beforeSanitizeShadowDOM: [], uponSanitizeAttribute: [], uponSanitizeElement: [], uponSanitizeShadowNode: [] };
};
function Ut() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ss(), e = (E) => Ut(E);
  if (e.version = "3.3.1", e.removed = [], !t || !t.document || t.document.nodeType !== ze.document || !t.Element) return e.isSupported = false, e;
  let { document: r } = t, n = r, i = n.currentScript, { DocumentFragment: o, HTMLTemplateElement: a, Node: s, Element: l, NodeFilter: c, NamedNodeMap: f = t.NamedNodeMap || t.MozNamedAttrMap, HTMLFormElement: p, DOMParser: d, trustedTypes: h } = t, g = l.prototype, k = Ne(g, "cloneNode"), D = Ne(g, "remove"), C = Ne(g, "nextSibling"), _ = Ne(g, "childNodes"), y = Ne(g, "parentNode");
  if (typeof a == "function") {
    let E = r.createElement("template");
    E.content && E.content.ownerDocument && (r = E.content.ownerDocument);
  }
  let v, T = "", { implementation: x, createNodeIterator: R, createDocumentFragment: O, getElementsByTagName: ge } = r, { importNode: q } = n, S = Nt();
  e.isSupported = typeof zt == "function" && typeof y == "function" && x && x.createHTMLDocument !== void 0;
  let { MUSTACHE_EXPR: ue, ERB_EXPR: le, TMPLIT_EXPR: fe, DATA_ATTR: we, ARIA_ATTR: H, IS_SCRIPT_OR_DATA: Se, ATTR_WHITESPACE: qe, CUSTOM_ELEMENT: Zo } = Ot, { IS_ALLOWED_URI: st } = Ot, P = null, at = w({}, [...Rt, ...Tr, ...wr, ...Sr, ...It]), B = null, lt = w({}, [...Mt, ...qr, ...Lt, ...Je]), M = Object.seal(Fr(null, { tagNameCheck: { writable: true, configurable: false, enumerable: true, value: null }, attributeNameCheck: { writable: true, configurable: false, enumerable: true, value: null }, allowCustomizedBuiltInElements: { writable: true, configurable: false, enumerable: true, value: false } })), Fe = null, hr = null, _e = Object.seal(Fr(null, { tagCheck: { writable: true, configurable: false, enumerable: true, value: null }, attributeCheck: { writable: true, configurable: false, enumerable: true, value: null } })), ct = true, dr = true, ut = false, ft = true, xe = false, Ge = true, pe = false, mr = false, gr = false, be = false, Ve = false, je = false, pt = true, ht = false, Yo = "user-content-", _r = true, Re = false, ke = {}, Q = null, xr = w({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), dt = null, mt = w({}, ["audio", "video", "img", "source", "image", "track"]), br = null, gt = w({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), We = "http://www.w3.org/1998/Math/MathML", $e = "http://www.w3.org/2000/svg", oe = "http://www.w3.org/1999/xhtml", Ae = oe, kr = false, Ar = null, Xo = w({}, [We, $e, oe], yr), Ze = w({}, ["mi", "mo", "mn", "ms", "mtext"]), Ye = w({}, ["annotation-xml"]), Jo = w({}, ["title", "style", "font", "a", "script"]), Ie = null, Ko = ["application/xhtml+xml", "text/html"], Qo = "text/html", N = null, Ce = null, es = r.createElement("form"), _t = function(u) {
    return u instanceof RegExp || u instanceof Function;
  }, Cr = function() {
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Ce && Ce === u)) {
      if ((!u || typeof u != "object") && (u = {}), u = re(u), Ie = Ko.indexOf(u.PARSER_MEDIA_TYPE) === -1 ? Qo : u.PARSER_MEDIA_TYPE, N = Ie === "application/xhtml+xml" ? yr : Ke, P = J(u, "ALLOWED_TAGS") ? w({}, u.ALLOWED_TAGS, N) : at, B = J(u, "ALLOWED_ATTR") ? w({}, u.ALLOWED_ATTR, N) : lt, Ar = J(u, "ALLOWED_NAMESPACES") ? w({}, u.ALLOWED_NAMESPACES, yr) : Xo, br = J(u, "ADD_URI_SAFE_ATTR") ? w(re(gt), u.ADD_URI_SAFE_ATTR, N) : gt, dt = J(u, "ADD_DATA_URI_TAGS") ? w(re(mt), u.ADD_DATA_URI_TAGS, N) : mt, Q = J(u, "FORBID_CONTENTS") ? w({}, u.FORBID_CONTENTS, N) : xr, Fe = J(u, "FORBID_TAGS") ? w({}, u.FORBID_TAGS, N) : re({}), hr = J(u, "FORBID_ATTR") ? w({}, u.FORBID_ATTR, N) : re({}), ke = J(u, "USE_PROFILES") ? u.USE_PROFILES : false, ct = u.ALLOW_ARIA_ATTR !== false, dr = u.ALLOW_DATA_ATTR !== false, ut = u.ALLOW_UNKNOWN_PROTOCOLS || false, ft = u.ALLOW_SELF_CLOSE_IN_ATTR !== false, xe = u.SAFE_FOR_TEMPLATES || false, Ge = u.SAFE_FOR_XML !== false, pe = u.WHOLE_DOCUMENT || false, be = u.RETURN_DOM || false, Ve = u.RETURN_DOM_FRAGMENT || false, je = u.RETURN_TRUSTED_TYPE || false, gr = u.FORCE_BODY || false, pt = u.SANITIZE_DOM !== false, ht = u.SANITIZE_NAMED_PROPS || false, _r = u.KEEP_CONTENT !== false, Re = u.IN_PLACE || false, st = u.ALLOWED_URI_REGEXP || Pt, Ae = u.NAMESPACE || oe, Ze = u.MATHML_TEXT_INTEGRATION_POINTS || Ze, Ye = u.HTML_INTEGRATION_POINTS || Ye, M = u.CUSTOM_ELEMENT_HANDLING || {}, u.CUSTOM_ELEMENT_HANDLING && _t(u.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (M.tagNameCheck = u.CUSTOM_ELEMENT_HANDLING.tagNameCheck), u.CUSTOM_ELEMENT_HANDLING && _t(u.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (M.attributeNameCheck = u.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), u.CUSTOM_ELEMENT_HANDLING && typeof u.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (M.allowCustomizedBuiltInElements = u.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), xe && (dr = false), Ve && (be = true), ke && (P = w({}, It), B = [], ke.html === true && (w(P, Rt), w(B, Mt)), ke.svg === true && (w(P, Tr), w(B, qr), w(B, Je)), ke.svgFilters === true && (w(P, wr), w(B, qr), w(B, Je)), ke.mathMl === true && (w(P, Sr), w(B, Lt), w(B, Je))), u.ADD_TAGS && (typeof u.ADD_TAGS == "function" ? _e.tagCheck = u.ADD_TAGS : (P === at && (P = re(P)), w(P, u.ADD_TAGS, N))), u.ADD_ATTR && (typeof u.ADD_ATTR == "function" ? _e.attributeCheck = u.ADD_ATTR : (B === lt && (B = re(B)), w(B, u.ADD_ATTR, N))), u.ADD_URI_SAFE_ATTR && w(br, u.ADD_URI_SAFE_ATTR, N), u.FORBID_CONTENTS && (Q === xr && (Q = re(Q)), w(Q, u.FORBID_CONTENTS, N)), u.ADD_FORBID_CONTENTS && (Q === xr && (Q = re(Q)), w(Q, u.ADD_FORBID_CONTENTS, N)), _r && (P["#text"] = true), pe && w(P, ["html", "head", "body"]), P.table && (w(P, ["tbody"]), delete Fe.tbody), u.TRUSTED_TYPES_POLICY) {
        if (typeof u.TRUSTED_TYPES_POLICY.createHTML != "function") throw Oe('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof u.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw Oe('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        v = u.TRUSTED_TYPES_POLICY, T = v.createHTML("");
      } else v === void 0 && (v = qs(h, i)), v !== null && typeof T == "string" && (T = v.createHTML(""));
      j && j(u), Ce = u;
    }
  }, xt = w({}, [...Tr, ...wr, ...bs]), bt = w({}, [...Sr, ...ks]), rs = function(u) {
    let m = y(u);
    (!m || !m.tagName) && (m = { namespaceURI: Ae, tagName: "template" });
    let A = Ke(u.tagName), I = Ke(m.tagName);
    return Ar[u.namespaceURI] ? u.namespaceURI === $e ? m.namespaceURI === oe ? A === "svg" : m.namespaceURI === We ? A === "svg" && (I === "annotation-xml" || Ze[I]) : !!xt[A] : u.namespaceURI === We ? m.namespaceURI === oe ? A === "math" : m.namespaceURI === $e ? A === "math" && Ye[I] : !!bt[A] : u.namespaceURI === oe ? m.namespaceURI === $e && !Ye[I] || m.namespaceURI === We && !Ze[I] ? false : !bt[A] && (Jo[A] || !xt[A]) : !!(Ie === "application/xhtml+xml" && Ar[u.namespaceURI]) : false;
  }, ee = function(u) {
    Me(e.removed, { element: u });
    try {
      y(u).removeChild(u);
    } catch {
      D(u);
    }
  }, he = function(u, m) {
    try {
      Me(e.removed, { attribute: m.getAttributeNode(u), from: m });
    } catch {
      Me(e.removed, { attribute: null, from: m });
    }
    if (m.removeAttribute(u), u === "is") if (be || Ve) try {
      ee(m);
    } catch {
    }
    else try {
      m.setAttribute(u, "");
    } catch {
    }
  }, kt = function(u) {
    let m = null, A = null;
    if (gr) u = "<remove></remove>" + u;
    else {
      let L = Dr(u, /^[\r\n\t ]+/);
      A = L && L[0];
    }
    Ie === "application/xhtml+xml" && Ae === oe && (u = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + u + "</body></html>");
    let I = v ? v.createHTML(u) : u;
    if (Ae === oe) try {
      m = new d().parseFromString(I, Ie);
    } catch {
    }
    if (!m || !m.documentElement) {
      m = x.createDocument(Ae, "template", null);
      try {
        m.documentElement.innerHTML = kr ? T : I;
      } catch {
      }
    }
    let G = m.body || m.documentElement;
    return u && A && G.insertBefore(r.createTextNode(A), G.childNodes[0] || null), Ae === oe ? ge.call(m, pe ? "html" : "body")[0] : pe ? m.documentElement : G;
  }, At = function(u) {
    return R.call(u.ownerDocument || u, u, c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION, null);
  }, vr = function(u) {
    return u instanceof p && (typeof u.nodeName != "string" || typeof u.textContent != "string" || typeof u.removeChild != "function" || !(u.attributes instanceof f) || typeof u.removeAttribute != "function" || typeof u.setAttribute != "function" || typeof u.namespaceURI != "string" || typeof u.insertBefore != "function" || typeof u.hasChildNodes != "function");
  }, Ct = function(u) {
    return typeof s == "function" && u instanceof s;
  };
  function se(E, u, m) {
    Xe(E, (A) => {
      A.call(e, u, m, Ce);
    });
  }
  let vt = function(u) {
    let m = null;
    if (se(S.beforeSanitizeElements, u, null), vr(u)) return ee(u), true;
    let A = N(u.nodeName);
    if (se(S.uponSanitizeElement, u, { tagName: A, allowedTags: P }), Ge && u.hasChildNodes() && !Ct(u.firstElementChild) && V(/<[/\w!]/g, u.innerHTML) && V(/<[/\w!]/g, u.textContent) || u.nodeType === ze.progressingInstruction || Ge && u.nodeType === ze.comment && V(/<[/\w]/g, u.data)) return ee(u), true;
    if (!(_e.tagCheck instanceof Function && _e.tagCheck(A)) && (!P[A] || Fe[A])) {
      if (!Fe[A] && yt(A) && (M.tagNameCheck instanceof RegExp && V(M.tagNameCheck, A) || M.tagNameCheck instanceof Function && M.tagNameCheck(A))) return false;
      if (_r && !Q[A]) {
        let I = y(u) || u.parentNode, G = _(u) || u.childNodes;
        if (G && I) {
          let L = G.length;
          for (let $ = L - 1; $ >= 0; --$) {
            let ae = k(G[$], true);
            ae.__removalCount = (u.__removalCount || 0) + 1, I.insertBefore(ae, C(u));
          }
        }
      }
      return ee(u), true;
    }
    return u instanceof l && !rs(u) || (A === "noscript" || A === "noembed" || A === "noframes") && V(/<\/no(script|embed|frames)/i, u.innerHTML) ? (ee(u), true) : (xe && u.nodeType === ze.text && (m = u.textContent, Xe([ue, le, fe], (I) => {
      m = Le(m, I, " ");
    }), u.textContent !== m && (Me(e.removed, { element: u.cloneNode() }), u.textContent = m)), se(S.afterSanitizeElements, u, null), false);
  }, Et = function(u, m, A) {
    if (pt && (m === "id" || m === "name") && (A in r || A in es)) return false;
    if (!(dr && !hr[m] && V(we, m))) {
      if (!(ct && V(H, m))) {
        if (!(_e.attributeCheck instanceof Function && _e.attributeCheck(m, u))) {
          if (!B[m] || hr[m]) {
            if (!(yt(u) && (M.tagNameCheck instanceof RegExp && V(M.tagNameCheck, u) || M.tagNameCheck instanceof Function && M.tagNameCheck(u)) && (M.attributeNameCheck instanceof RegExp && V(M.attributeNameCheck, m) || M.attributeNameCheck instanceof Function && M.attributeNameCheck(m, u)) || m === "is" && M.allowCustomizedBuiltInElements && (M.tagNameCheck instanceof RegExp && V(M.tagNameCheck, A) || M.tagNameCheck instanceof Function && M.tagNameCheck(A)))) return false;
          } else if (!br[m]) {
            if (!V(st, Le(A, qe, ""))) {
              if (!((m === "src" || m === "xlink:href" || m === "href") && u !== "script" && ms(A, "data:") === 0 && dt[u])) {
                if (!(ut && !V(Se, Le(A, qe, "")))) {
                  if (A) return false;
                }
              }
            }
          }
        }
      }
    }
    return true;
  }, yt = function(u) {
    return u !== "annotation-xml" && Dr(u, Zo);
  }, Dt = function(u) {
    se(S.beforeSanitizeAttributes, u, null);
    let { attributes: m } = u;
    if (!m || vr(u)) return;
    let A = { attrName: "", attrValue: "", keepAttr: true, allowedAttributes: B, forceKeepAttr: void 0 }, I = m.length;
    for (; I--; ) {
      let G = m[I], { name: L, namespaceURI: $, value: ae } = G, ve = N(L), Er = ae, U = L === "value" ? Er : gs(Er);
      if (A.attrName = ve, A.attrValue = U, A.keepAttr = true, A.forceKeepAttr = void 0, se(S.uponSanitizeAttribute, u, A), U = A.attrValue, ht && (ve === "id" || ve === "name") && (he(L, u), U = Yo + U), Ge && V(/((--!?|])>)|<\/(style|title|textarea)/i, U)) {
        he(L, u);
        continue;
      }
      if (ve === "attributename" && Dr(U, "href")) {
        he(L, u);
        continue;
      }
      if (A.forceKeepAttr) continue;
      if (!A.keepAttr) {
        he(L, u);
        continue;
      }
      if (!ft && V(/\/>/i, U)) {
        he(L, u);
        continue;
      }
      xe && Xe([ue, le, fe], (wt) => {
        U = Le(U, wt, " ");
      });
      let Tt = N(u.nodeName);
      if (!Et(Tt, ve, U)) {
        he(L, u);
        continue;
      }
      if (v && typeof h == "object" && typeof h.getAttributeType == "function" && !$) switch (h.getAttributeType(Tt, ve)) {
        case "TrustedHTML": {
          U = v.createHTML(U);
          break;
        }
        case "TrustedScriptURL": {
          U = v.createScriptURL(U);
          break;
        }
      }
      if (U !== Er) try {
        $ ? u.setAttributeNS($, L, U) : u.setAttribute(L, U), vr(u) ? ee(u) : Ft(e.removed);
      } catch {
        he(L, u);
      }
    }
    se(S.afterSanitizeAttributes, u, null);
  }, ts = function E(u) {
    let m = null, A = At(u);
    for (se(S.beforeSanitizeShadowDOM, u, null); m = A.nextNode(); ) se(S.uponSanitizeShadowNode, m, null), vt(m), Dt(m), m.content instanceof o && E(m.content);
    se(S.afterSanitizeShadowDOM, u, null);
  };
  return e.sanitize = function(E) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, m = null, A = null, I = null, G = null;
    if (kr = !E, kr && (E = "<!-->"), typeof E != "string" && !Ct(E)) if (typeof E.toString == "function") {
      if (E = E.toString(), typeof E != "string") throw Oe("dirty is not a string, aborting");
    } else throw Oe("toString is not a function");
    if (!e.isSupported) return E;
    if (mr || Cr(u), e.removed = [], typeof E == "string" && (Re = false), Re) {
      if (E.nodeName) {
        let ae = N(E.nodeName);
        if (!P[ae] || Fe[ae]) throw Oe("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (E instanceof s) m = kt("<!---->"), A = m.ownerDocument.importNode(E, true), A.nodeType === ze.element && A.nodeName === "BODY" || A.nodeName === "HTML" ? m = A : m.appendChild(A);
    else {
      if (!be && !xe && !pe && E.indexOf("<") === -1) return v && je ? v.createHTML(E) : E;
      if (m = kt(E), !m) return be ? null : je ? T : "";
    }
    m && gr && ee(m.firstChild);
    let L = At(Re ? E : m);
    for (; I = L.nextNode(); ) vt(I), Dt(I), I.content instanceof o && ts(I.content);
    if (Re) return E;
    if (be) {
      if (Ve) for (G = O.call(m.ownerDocument); m.firstChild; ) G.appendChild(m.firstChild);
      else G = m;
      return (B.shadowroot || B.shadowrootmode) && (G = q.call(n, G, true)), G;
    }
    let $ = pe ? m.outerHTML : m.innerHTML;
    return pe && P["!doctype"] && m.ownerDocument && m.ownerDocument.doctype && m.ownerDocument.doctype.name && V(Bt, m.ownerDocument.doctype.name) && ($ = "<!DOCTYPE " + m.ownerDocument.doctype.name + `>
` + $), xe && Xe([ue, le, fe], (ae) => {
      $ = Le($, ae, " ");
    }), v && je ? v.createHTML($) : $;
  }, e.setConfig = function() {
    let E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Cr(E), mr = true;
  }, e.clearConfig = function() {
    Ce = null, mr = false;
  }, e.isValidAttribute = function(E, u, m) {
    Ce || Cr({});
    let A = N(E), I = N(u);
    return Et(A, I, m);
  }, e.addHook = function(E, u) {
    typeof u == "function" && Me(S[E], u);
  }, e.removeHook = function(E, u) {
    if (u !== void 0) {
      let m = hs(S[E], u);
      return m === -1 ? void 0 : ds(S[E], m, 1)[0];
    }
    return Ft(S[E]);
  }, e.removeHooks = function(E) {
    S[E] = [];
  }, e.removeAllHooks = function() {
    S = Nt();
  }, e;
}
var Ht = Ut();
var $o = cs(Wo()), Ul = Object.freeze(["a", "abbr", "b", "bdo", "blockquote", "br", "caption", "cite", "code", "col", "colgroup", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "figcaption", "figure", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "i", "img", "ins", "kbd", "label", "li", "mark", "ol", "p", "pre", "q", "rp", "rt", "ruby", "samp", "small", "small", "source", "span", "strike", "strong", "sub", "summary", "sup", "table", "tbody", "td", "tfoot", "th", "thead", "time", "tr", "tt", "u", "ul", "var", "video", "wbr"]), Hl = Object.freeze(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Gl = { ALLOWED_TAGS: [...Ul, ...Hl] }, lu = (t) => {
  let e = new $o.default({ html: true, linkify: true, highlight: (i, o) => o ? `<div class="vscode-code-block" data-vscode-code-block-lang="${e.utils.escapeHtml(o)}">${e.utils.escapeHtml(i)}</div>` : e.utils.escapeHtml(i) });
  e.linkify.set({ fuzzyLink: false }), Vl(e), jl(e);
  let r = document.createElement("style");
  r.textContent = `
		.emptyMarkdownCell::before {
			content: "${document.documentElement.style.getPropertyValue("--notebook-cell-markup-empty-content")}";
			font-style: italic;
			opacity: 0.6;
		}

		img {
			max-width: 100%;
			max-height: 100%;
		}

		a {
			text-decoration: none;
		}

		a:hover {
			text-decoration: underline;
		}

		a:focus,
		input:focus,
		select:focus,
		textarea:focus {
			outline: 1px solid -webkit-focus-ring-color;
			outline-offset: -1px;
		}

		hr {
			border: 0;
			height: 2px;
			border-bottom: 2px solid;
		}

		h2, h3, h4, h5, h6 {
			font-weight: normal;
		}

		h1 {
			font-size: 2.3em;
		}

		h2 {
			font-size: 2em;
		}

		h3 {
			font-size: 1.7em;
		}

		h3 {
			font-size: 1.5em;
		}

		h4 {
			font-size: 1.3em;
		}

		h5 {
			font-size: 1.2em;
		}

		h1,
		h2,
		h3 {
			font-weight: normal;
		}

		div {
			width: 100%;
		}

		/* Adjust margin of first item in markdown cell */
		*:first-child {
			margin-top: 0px;
		}

		/* h1 tags don't need top margin */
		h1:first-child {
			margin-top: 0;
		}

		/* Removes bottom margin when only one item exists in markdown cell */
		#preview > *:only-child,
		#preview > *:last-child {
			margin-bottom: 0;
			padding-bottom: 0;
		}

		/* makes all markdown cells consistent */
		div {
			min-height: var(--notebook-markdown-min-height);
		}

		table {
			border-collapse: collapse;
			border-spacing: 0;
		}

		table th,
		table td {
			border: 1px solid;
		}

		table > thead > tr > th {
			text-align: left;
			border-bottom: 1px solid;
		}

		table > thead > tr > th,
		table > thead > tr > td,
		table > tbody > tr > th,
		table > tbody > tr > td {
			padding: 5px 10px;
		}

		table > tbody > tr + tr > td {
			border-top: 1px solid;
		}

		blockquote {
			margin: 0 7px 0 5px;
			padding: 0 16px 0 10px;
			border-left-width: 5px;
			border-left-style: solid;
		}

		code {
			font-size: 1em;
			font-family: var(--vscode-editor-font-family);
		}

		pre code {
			line-height: 1.357em;
			white-space: pre-wrap;
			padding: 0;
		}

		li p {
			margin-bottom: 0.7em;
		}

		ul,
		ol {
			margin-bottom: 0.7em;
		}
	`;
  let n = document.createElement("template");
  return n.classList.add("markdown-style"), n.content.appendChild(r), document.head.appendChild(n), { renderOutputItem: (i, o) => {
    let a;
    if (o.shadowRoot) a = o.shadowRoot.getElementById("preview");
    else {
      let l = o.attachShadow({ mode: "open" }), c = document.getElementById("_defaultStyles");
      l.appendChild(c.cloneNode(true));
      for (let f of document.getElementsByClassName("markdown-style")) f instanceof HTMLTemplateElement ? l.appendChild(f.content.cloneNode(true)) : l.appendChild(f.cloneNode(true));
      a = document.createElement("div"), a.id = "preview", l.appendChild(a);
    }
    let s = i.text();
    if (s.trim().length === 0) a.innerText = "", a.classList.add("emptyMarkdownCell");
    else {
      a.classList.remove("emptyMarkdownCell");
      let l = i.mime.startsWith("text/x-") ? `\`\`\`${i.mime.substr(7)}
${s}
\`\`\`` : i.mime.startsWith("application/") ? `\`\`\`${i.mime.substr(12)}
${s}
\`\`\`` : s, c = e.render(l, { outputItem: i });
      a.innerHTML = t.workspace.isTrusted ? c : Ht.sanitize(c, Gl);
    }
  }, extendMarkdownIt: (i) => {
    try {
      i(e);
    } catch (o) {
      console.error("Error extending markdown-it", o);
    }
  } };
};
function Vl(t) {
  let e = /* @__PURE__ */ new Map(), r = t.renderer.rules.heading_open;
  t.renderer.rules.heading_open = (i, o, a, s, l) => {
    let c = i[o + 1].children.reduce((p, d) => p + d.content, ""), f = ot(c);
    if (e.has(f)) {
      let p = e.get(f);
      e.set(f, p + 1), f = ot(f + "-" + (p + 1));
    } else e.set(f, 0);
    return i[o].attrSet("id", f), r ? r(i, o, a, s, l) : l.renderToken(i, o, a);
  };
  let n = t.render;
  t.render = function() {
    return e.clear(), n.apply(this, arguments);
  };
}
function jl(t) {
  let e = t.renderer.rules.link_open;
  t.renderer.rules.link_open = (r, n, i, o, a) => {
    let s = r[n], l = s.attrGet("href");
    return typeof l == "string" && l.startsWith("#") && s.attrSet("href", "#" + ot(l.slice(1))), e ? e(r, n, i, o, a) : a.renderToken(r, n, i);
  };
}
function ot(t) {
  return encodeURI(t.trim().toLowerCase().replace(/\s+/g, "-").replace(/[\]\[\!\/\'\"\#\$\%\&\(\)\*\+\,\.\/\:\;\<\=\>\?\@\\\^\{\|\}\~\`。，、；：？！…—·ˉ¨‘’“”々～‖∶＂＇｀｜〃〔〕〈〉《》「」『』．〖〗【】（）［］｛｝]/g, "").replace(/^\-+/, "").replace(/\-+$/, ""));
}
export { lu as activate };
/*! Bundled license information:

dompurify/dist/purify.es.mjs:
  (*! @license DOMPurify 3.3.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.1/LICENSE *)
*/
