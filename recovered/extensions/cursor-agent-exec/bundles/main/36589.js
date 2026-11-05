// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 36589 range:2963727..3003314
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
36589: (e, t, r) => {
    "use strict";
    r.r(t), r.d(t, { default: () => g });
    const n = { AmazonBot: "amazonbot", "Amazon Silk": "amazon_silk", "Android Browser": "android", BaiduSpider: "baiduspider", Bada: "bada", BingCrawler: "bingcrawler", Brave: "brave", BlackBerry: "blackberry", "ChatGPT-User": "chatgpt_user", Chrome: "chrome", ClaudeBot: "claudebot", Chromium: "chromium", Diffbot: "diffbot", DuckDuckBot: "duckduckbot", DuckDuckGo: "duckduckgo", Electron: "electron", Epiphany: "epiphany", FacebookExternalHit: "facebookexternalhit", Firefox: "firefox", Focus: "focus", Generic: "generic", "Google Search": "google_search", Googlebot: "googlebot", GPTBot: "gptbot", "Internet Explorer": "ie", InternetArchiveCrawler: "internetarchivecrawler", "K-Meleon": "k_meleon", LibreWolf: "librewolf", Linespider: "linespider", Maxthon: "maxthon", "Meta-ExternalAds": "meta_externalads", "Meta-ExternalAgent": "meta_externalagent", "Meta-ExternalFetcher": "meta_externalfetcher", "Meta-WebIndexer": "meta_webindexer", "Microsoft Edge": "edge", "MZ Browser": "mz", "NAVER Whale Browser": "naver", "OAI-SearchBot": "oai_searchbot", Omgilibot: "omgilibot", Opera: "opera", "Opera Coast": "opera_coast", "Pale Moon": "pale_moon", PerplexityBot: "perplexitybot", "Perplexity-User": "perplexity_user", PhantomJS: "phantomjs", PingdomBot: "pingdombot", Puffin: "puffin", QQ: "qq", QQLite: "qqlite", QupZilla: "qupzilla", Roku: "roku", Safari: "safari", Sailfish: "sailfish", "Samsung Internet for Android": "samsung_internet", SlackBot: "slackbot", SeaMonkey: "seamonkey", Sleipnir: "sleipnir", "Sogou Browser": "sogou", Swing: "swing", Tizen: "tizen", "UC Browser": "uc", Vivaldi: "vivaldi", "WebOS Browser": "webos", WeChat: "wechat", YahooSlurp: "yahooslurp", "Yandex Browser": "yandex", YandexBot: "yandexbot", YouBot: "youbot" }, s = { amazonbot: "AmazonBot", amazon_silk: "Amazon Silk", android: "Android Browser", baiduspider: "BaiduSpider", bada: "Bada", bingcrawler: "BingCrawler", blackberry: "BlackBerry", brave: "Brave", chatgpt_user: "ChatGPT-User", chrome: "Chrome", claudebot: "ClaudeBot", chromium: "Chromium", diffbot: "Diffbot", duckduckbot: "DuckDuckBot", duckduckgo: "DuckDuckGo", edge: "Microsoft Edge", electron: "Electron", epiphany: "Epiphany", facebookexternalhit: "FacebookExternalHit", firefox: "Firefox", focus: "Focus", generic: "Generic", google_search: "Google Search", googlebot: "Googlebot", gptbot: "GPTBot", ie: "Internet Explorer", internetarchivecrawler: "InternetArchiveCrawler", k_meleon: "K-Meleon", librewolf: "LibreWolf", linespider: "Linespider", maxthon: "Maxthon", meta_externalads: "Meta-ExternalAds", meta_externalagent: "Meta-ExternalAgent", meta_externalfetcher: "Meta-ExternalFetcher", meta_webindexer: "Meta-WebIndexer", mz: "MZ Browser", naver: "NAVER Whale Browser", oai_searchbot: "OAI-SearchBot", omgilibot: "Omgilibot", opera: "Opera", opera_coast: "Opera Coast", pale_moon: "Pale Moon", perplexitybot: "PerplexityBot", perplexity_user: "Perplexity-User", phantomjs: "PhantomJS", pingdombot: "PingdomBot", puffin: "Puffin", qq: "QQ Browser", qqlite: "QQ Browser Lite", qupzilla: "QupZilla", roku: "Roku", safari: "Safari", sailfish: "Sailfish", samsung_internet: "Samsung Internet for Android", seamonkey: "SeaMonkey", slackbot: "SlackBot", sleipnir: "Sleipnir", sogou: "Sogou Browser", swing: "Swing", tizen: "Tizen", uc: "UC Browser", vivaldi: "Vivaldi", webos: "WebOS Browser", wechat: "WeChat", yahooslurp: "YahooSlurp", yandex: "Yandex Browser", yandexbot: "YandexBot", youbot: "YouBot" }, o = { bot: "bot", desktop: "desktop", mobile: "mobile", tablet: "tablet", tv: "tv" }, i = { Android: "Android", Bada: "Bada", BlackBerry: "BlackBerry", ChromeOS: "Chrome OS", HarmonyOS: "HarmonyOS", iOS: "iOS", Linux: "Linux", MacOS: "macOS", PlayStation4: "PlayStation 4", Roku: "Roku", Tizen: "Tizen", WebOS: "WebOS", Windows: "Windows", WindowsPhone: "Windows Phone" }, a = { Blink: "Blink", EdgeHTML: "EdgeHTML", Gecko: "Gecko", Presto: "Presto", Trident: "Trident", WebKit: "WebKit" };
    class c {
      static getFirstMatch(e2, t2) {
        const r2 = t2.match(e2);
        return r2 && r2.length > 0 && r2[1] || "";
      }
      static getSecondMatch(e2, t2) {
        const r2 = t2.match(e2);
        return r2 && r2.length > 1 && r2[2] || "";
      }
      static matchAndReturnConst(e2, t2, r2) {
        if (e2.test(t2)) return r2;
      }
      static getWindowsVersionName(e2) {
        switch (e2) {
          case "NT":
            return "NT";
          case "XP":
          case "NT 5.1":
            return "XP";
          case "NT 5.0":
            return "2000";
          case "NT 5.2":
            return "2003";
          case "NT 6.0":
            return "Vista";
          case "NT 6.1":
            return "7";
          case "NT 6.2":
            return "8";
          case "NT 6.3":
            return "8.1";
          case "NT 10.0":
            return "10";
          default:
            return;
        }
      }
      static getMacOSVersionName(e2) {
        const t2 = e2.split(".").splice(0, 2).map((e3) => parseInt(e3, 10) || 0);
        t2.push(0);
        const r2 = t2[0], n2 = t2[1];
        if (10 === r2) switch (n2) {
          case 5:
            return "Leopard";
          case 6:
            return "Snow Leopard";
          case 7:
            return "Lion";
          case 8:
            return "Mountain Lion";
          case 9:
            return "Mavericks";
          case 10:
            return "Yosemite";
          case 11:
            return "El Capitan";
          case 12:
            return "Sierra";
          case 13:
            return "High Sierra";
          case 14:
            return "Mojave";
          case 15:
            return "Catalina";
          default:
            return;
        }
        switch (r2) {
          case 11:
            return "Big Sur";
          case 12:
            return "Monterey";
          case 13:
            return "Ventura";
          case 14:
            return "Sonoma";
          case 15:
            return "Sequoia";
          default:
            return;
        }
      }
      static getAndroidVersionName(e2) {
        const t2 = e2.split(".").splice(0, 2).map((e3) => parseInt(e3, 10) || 0);
        if (t2.push(0), !(1 === t2[0] && t2[1] < 5)) return 1 === t2[0] && t2[1] < 6 ? "Cupcake" : 1 === t2[0] && t2[1] >= 6 ? "Donut" : 2 === t2[0] && t2[1] < 2 ? "Eclair" : 2 === t2[0] && 2 === t2[1] ? "Froyo" : 2 === t2[0] && t2[1] > 2 ? "Gingerbread" : 3 === t2[0] ? "Honeycomb" : 4 === t2[0] && t2[1] < 1 ? "Ice Cream Sandwich" : 4 === t2[0] && t2[1] < 4 ? "Jelly Bean" : 4 === t2[0] && t2[1] >= 4 ? "KitKat" : 5 === t2[0] ? "Lollipop" : 6 === t2[0] ? "Marshmallow" : 7 === t2[0] ? "Nougat" : 8 === t2[0] ? "Oreo" : 9 === t2[0] ? "Pie" : void 0;
      }
      static getVersionPrecision(e2) {
        return e2.split(".").length;
      }
      static compareVersions(e2, t2, r2 = false) {
        const n2 = c.getVersionPrecision(e2), s2 = c.getVersionPrecision(t2);
        let o2 = Math.max(n2, s2), i2 = 0;
        const a2 = c.map([e2, t2], (e3) => {
          const t3 = o2 - c.getVersionPrecision(e3), r3 = e3 + new Array(t3 + 1).join(".0");
          return c.map(r3.split("."), (e4) => new Array(20 - e4.length).join("0") + e4).reverse();
        });
        for (r2 && (i2 = o2 - Math.min(n2, s2)), o2 -= 1; o2 >= i2; ) {
          if (a2[0][o2] > a2[1][o2]) return 1;
          if (a2[0][o2] === a2[1][o2]) {
            if (o2 === i2) return 0;
            o2 -= 1;
          } else if (a2[0][o2] < a2[1][o2]) return -1;
        }
      }
      static map(e2, t2) {
        const r2 = [];
        let n2;
        if (Array.prototype.map) return Array.prototype.map.call(e2, t2);
        for (n2 = 0; n2 < e2.length; n2 += 1) r2.push(t2(e2[n2]));
        return r2;
      }
      static find(e2, t2) {
        let r2, n2;
        if (Array.prototype.find) return Array.prototype.find.call(e2, t2);
        for (r2 = 0, n2 = e2.length; r2 < n2; r2 += 1) {
          const n3 = e2[r2];
          if (t2(n3, r2)) return n3;
        }
      }
      static assign(e2, ...t2) {
        const r2 = e2;
        let n2, s2;
        if (Object.assign) return Object.assign(e2, ...t2);
        for (n2 = 0, s2 = t2.length; n2 < s2; n2 += 1) {
          const e3 = t2[n2];
          if ("object" == typeof e3 && null !== e3) {
            Object.keys(e3).forEach((t3) => {
              r2[t3] = e3[t3];
            });
          }
        }
        return e2;
      }
      static getBrowserAlias(e2) {
        return n[e2];
      }
      static getBrowserTypeByAlias(e2) {
        return s[e2] || "";
      }
    }
    const l = /version\/(\d+(\.?_?\d+)+)/i, u = [{ test: [/gptbot/i], describe(e2) {
      const t2 = { name: "GPTBot" }, r2 = c.getFirstMatch(/gptbot\/(\d+(\.\d+)+)/i, e2) || c.getFirstMatch(l, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/chatgpt-user/i], describe(e2) {
      const t2 = { name: "ChatGPT-User" }, r2 = c.getFirstMatch(/chatgpt-user\/(\d+(\.\d+)+)/i, e2) || c.getFirstMatch(l, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/oai-searchbot/i], describe(e2) {
      const t2 = { name: "OAI-SearchBot" }, r2 = c.getFirstMatch(/oai-searchbot\/(\d+(\.\d+)+)/i, e2) || c.getFirstMatch(l, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/claudebot/i, /claude-web/i, /claude-user/i, /claude-searchbot/i], describe(e2) {
      const t2 = { name: "ClaudeBot" }, r2 = c.getFirstMatch(/(?:claudebot|claude-web|claude-user|claude-searchbot)\/(\d+(\.\d+)+)/i, e2) || c.getFirstMatch(l, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/omgilibot/i, /webzio-extended/i], describe(e2) {
      const t2 = { name: "Omgilibot" }, r2 = c.getFirstMatch(/(?:omgilibot|webzio-extended)\/(\d+(\.\d+)+)/i, e2) || c.getFirstMatch(l, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/diffbot/i], describe(e2) {
      const t2 = { name: "Diffbot" }, r2 = c.getFirstMatch(/diffbot\/(\d+(\.\d+)+)/i, e2) || c.getFirstMatch(l, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/perplexitybot/i], describe(e2) {
      const t2 = { name: "PerplexityBot" }, r2 = c.getFirstMatch(/perplexitybot\/(\d+(\.\d+)+)/i, e2) || c.getFirstMatch(l, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/perplexity-user/i], describe(e2) {
      const t2 = { name: "Perplexity-User" }, r2 = c.getFirstMatch(/perplexity-user\/(\d+(\.\d+)+)/i, e2) || c.getFirstMatch(l, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/youbot/i], describe(e2) {
      const t2 = { name: "YouBot" }, r2 = c.getFirstMatch(/youbot\/(\d+(\.\d+)+)/i, e2) || c.getFirstMatch(l, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/meta-webindexer/i], describe(e2) {
      const t2 = { name: "Meta-WebIndexer" }, r2 = c.getFirstMatch(/meta-webindexer\/(\d+(\.\d+)+)/i, e2) || c.getFirstMatch(l, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/meta-externalads/i], describe(e2) {
      const t2 = { name: "Meta-ExternalAds" }, r2 = c.getFirstMatch(/meta-externalads\/(\d+(\.\d+)+)/i, e2) || c.getFirstMatch(l, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/meta-externalagent/i], describe(e2) {
      const t2 = { name: "Meta-ExternalAgent" }, r2 = c.getFirstMatch(/meta-externalagent\/(\d+(\.\d+)+)/i, e2) || c.getFirstMatch(l, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/meta-externalfetcher/i], describe(e2) {
      const t2 = { name: "Meta-ExternalFetcher" }, r2 = c.getFirstMatch(/meta-externalfetcher\/(\d+(\.\d+)+)/i, e2) || c.getFirstMatch(l, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/googlebot/i], describe(e2) {
      const t2 = { name: "Googlebot" }, r2 = c.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e2) || c.getFirstMatch(l, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/linespider/i], describe(e2) {
      const t2 = { name: "Linespider" }, r2 = c.getFirstMatch(/(?:linespider)(?:-[-\w]+)?[\s/](\d+(\.\d+)+)/i, e2) || c.getFirstMatch(l, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/amazonbot/i], describe(e2) {
      const t2 = { name: "AmazonBot" }, r2 = c.getFirstMatch(/amazonbot\/(\d+(\.\d+)+)/i, e2) || c.getFirstMatch(l, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/bingbot/i], describe(e2) {
      const t2 = { name: "BingCrawler" }, r2 = c.getFirstMatch(/bingbot\/(\d+(\.\d+)+)/i, e2) || c.getFirstMatch(l, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/baiduspider/i], describe(e2) {
      const t2 = { name: "BaiduSpider" }, r2 = c.getFirstMatch(/baiduspider\/(\d+(\.\d+)+)/i, e2) || c.getFirstMatch(l, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/duckduckbot/i], describe(e2) {
      const t2 = { name: "DuckDuckBot" }, r2 = c.getFirstMatch(/duckduckbot\/(\d+(\.\d+)+)/i, e2) || c.getFirstMatch(l, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/ia_archiver/i], describe(e2) {
      const t2 = { name: "InternetArchiveCrawler" }, r2 = c.getFirstMatch(/ia_archiver\/(\d+(\.\d+)+)/i, e2) || c.getFirstMatch(l, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/facebookexternalhit/i, /facebookcatalog/i], describe: () => ({ name: "FacebookExternalHit" }) }, { test: [/slackbot/i, /slack-imgProxy/i], describe(e2) {
      const t2 = { name: "SlackBot" }, r2 = c.getFirstMatch(/(?:slackbot|slack-imgproxy)(?:-[-\w]+)?[\s/](\d+(\.\d+)+)/i, e2) || c.getFirstMatch(l, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/yahoo!?[\s/]*slurp/i], describe: () => ({ name: "YahooSlurp" }) }, { test: [/yandexbot/i, /yandexmobilebot/i], describe: () => ({ name: "YandexBot" }) }, { test: [/pingdom/i], describe: () => ({ name: "PingdomBot" }) }, { test: [/opera/i], describe(e2) {
      const t2 = { name: "Opera" }, r2 = c.getFirstMatch(l, e2) || c.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/opr\/|opios/i], describe(e2) {
      const t2 = { name: "Opera" }, r2 = c.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e2) || c.getFirstMatch(l, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/SamsungBrowser/i], describe(e2) {
      const t2 = { name: "Samsung Internet for Android" }, r2 = c.getFirstMatch(l, e2) || c.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/Whale/i], describe(e2) {
      const t2 = { name: "NAVER Whale Browser" }, r2 = c.getFirstMatch(l, e2) || c.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/PaleMoon/i], describe(e2) {
      const t2 = { name: "Pale Moon" }, r2 = c.getFirstMatch(l, e2) || c.getFirstMatch(/(?:PaleMoon)[\s/](\d+(?:\.\d+)+)/i, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/MZBrowser/i], describe(e2) {
      const t2 = { name: "MZ Browser" }, r2 = c.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e2) || c.getFirstMatch(l, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/focus/i], describe(e2) {
      const t2 = { name: "Focus" }, r2 = c.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e2) || c.getFirstMatch(l, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/swing/i], describe(e2) {
      const t2 = { name: "Swing" }, r2 = c.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e2) || c.getFirstMatch(l, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/coast/i], describe(e2) {
      const t2 = { name: "Opera Coast" }, r2 = c.getFirstMatch(l, e2) || c.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/opt\/\d+(?:.?_?\d+)+/i], describe(e2) {
      const t2 = { name: "Opera Touch" }, r2 = c.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e2) || c.getFirstMatch(l, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/yabrowser/i], describe(e2) {
      const t2 = { name: "Yandex Browser" }, r2 = c.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e2) || c.getFirstMatch(l, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/ucbrowser/i], describe(e2) {
      const t2 = { name: "UC Browser" }, r2 = c.getFirstMatch(l, e2) || c.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/Maxthon|mxios/i], describe(e2) {
      const t2 = { name: "Maxthon" }, r2 = c.getFirstMatch(l, e2) || c.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/epiphany/i], describe(e2) {
      const t2 = { name: "Epiphany" }, r2 = c.getFirstMatch(l, e2) || c.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/puffin/i], describe(e2) {
      const t2 = { name: "Puffin" }, r2 = c.getFirstMatch(l, e2) || c.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/sleipnir/i], describe(e2) {
      const t2 = { name: "Sleipnir" }, r2 = c.getFirstMatch(l, e2) || c.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/k-meleon/i], describe(e2) {
      const t2 = { name: "K-Meleon" }, r2 = c.getFirstMatch(l, e2) || c.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/micromessenger/i], describe(e2) {
      const t2 = { name: "WeChat" }, r2 = c.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e2) || c.getFirstMatch(l, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/qqbrowser/i], describe(e2) {
      const t2 = { name: /qqbrowserlite/i.test(e2) ? "QQ Browser Lite" : "QQ Browser" }, r2 = c.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e2) || c.getFirstMatch(l, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/msie|trident/i], describe(e2) {
      const t2 = { name: "Internet Explorer" }, r2 = c.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/\sedg\//i], describe(e2) {
      const t2 = { name: "Microsoft Edge" }, r2 = c.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/edg([ea]|ios)/i], describe(e2) {
      const t2 = { name: "Microsoft Edge" }, r2 = c.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/vivaldi/i], describe(e2) {
      const t2 = { name: "Vivaldi" }, r2 = c.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/seamonkey/i], describe(e2) {
      const t2 = { name: "SeaMonkey" }, r2 = c.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/sailfish/i], describe(e2) {
      const t2 = { name: "Sailfish" }, r2 = c.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/silk/i], describe(e2) {
      const t2 = { name: "Amazon Silk" }, r2 = c.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/phantom/i], describe(e2) {
      const t2 = { name: "PhantomJS" }, r2 = c.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/slimerjs/i], describe(e2) {
      const t2 = { name: "SlimerJS" }, r2 = c.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe(e2) {
      const t2 = { name: "BlackBerry" }, r2 = c.getFirstMatch(l, e2) || c.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/(web|hpw)[o0]s/i], describe(e2) {
      const t2 = { name: "WebOS Browser" }, r2 = c.getFirstMatch(l, e2) || c.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/bada/i], describe(e2) {
      const t2 = { name: "Bada" }, r2 = c.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/tizen/i], describe(e2) {
      const t2 = { name: "Tizen" }, r2 = c.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e2) || c.getFirstMatch(l, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/qupzilla/i], describe(e2) {
      const t2 = { name: "QupZilla" }, r2 = c.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e2) || c.getFirstMatch(l, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/librewolf/i], describe(e2) {
      const t2 = { name: "LibreWolf" }, r2 = c.getFirstMatch(/(?:librewolf)[\s/](\d+(\.?_?\d+)+)/i, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/firefox|iceweasel|fxios/i], describe(e2) {
      const t2 = { name: "Firefox" }, r2 = c.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/electron/i], describe(e2) {
      const t2 = { name: "Electron" }, r2 = c.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/sogoumobilebrowser/i, /metasr/i, /se 2\.[x]/i], describe(e2) {
      const t2 = { name: "Sogou Browser" }, r2 = c.getFirstMatch(/(?:sogoumobilebrowser)[\s/](\d+(\.?_?\d+)+)/i, e2), n2 = c.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e2), s2 = c.getFirstMatch(/se ([\d.]+)x/i, e2), o2 = r2 || n2 || s2;
      return o2 && (t2.version = o2), t2;
    } }, { test: [/MiuiBrowser/i], describe(e2) {
      const t2 = { name: "Miui" }, r2 = c.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: (e2) => !!e2.hasBrand("DuckDuckGo") || e2.test(/\sDdg\/[\d.]+$/i), describe(e2, t2) {
      const r2 = { name: "DuckDuckGo" };
      if (t2) {
        const e3 = t2.getBrandVersion("DuckDuckGo");
        if (e3) return r2.version = e3, r2;
      }
      const n2 = c.getFirstMatch(/\sDdg\/([\d.]+)$/i, e2);
      return n2 && (r2.version = n2), r2;
    } }, { test: (e2) => e2.hasBrand("Brave"), describe(e2, t2) {
      const r2 = { name: "Brave" };
      if (t2) {
        const e3 = t2.getBrandVersion("Brave");
        if (e3) return r2.version = e3, r2;
      }
      return r2;
    } }, { test: [/chromium/i], describe(e2) {
      const t2 = { name: "Chromium" }, r2 = c.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e2) || c.getFirstMatch(l, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/chrome|crios|crmo/i], describe(e2) {
      const t2 = { name: "Chrome" }, r2 = c.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/GSA/i], describe(e2) {
      const t2 = { name: "Google Search" }, r2 = c.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test(e2) {
      const t2 = !e2.test(/like android/i), r2 = e2.test(/android/i);
      return t2 && r2;
    }, describe(e2) {
      const t2 = { name: "Android Browser" }, r2 = c.getFirstMatch(l, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/playstation 4/i], describe(e2) {
      const t2 = { name: "PlayStation 4" }, r2 = c.getFirstMatch(l, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/safari|applewebkit/i], describe(e2) {
      const t2 = { name: "Safari" }, r2 = c.getFirstMatch(l, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/.*/i], describe(e2) {
      const t2 = -1 !== e2.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
      return { name: c.getFirstMatch(t2, e2), version: c.getSecondMatch(t2, e2) };
    } }], d = u, p = [{ test: [/Roku\/DVP/], describe(e2) {
      const t2 = c.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e2);
      return { name: i.Roku, version: t2 };
    } }, { test: [/windows phone/i], describe(e2) {
      const t2 = c.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e2);
      return { name: i.WindowsPhone, version: t2 };
    } }, { test: [/windows /i], describe(e2) {
      const t2 = c.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e2), r2 = c.getWindowsVersionName(t2);
      return { name: i.Windows, version: t2, versionName: r2 };
    } }, { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe(e2) {
      const t2 = { name: i.iOS }, r2 = c.getSecondMatch(/(Version\/)(\d[\d.]+)/, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/macintosh/i], describe(e2) {
      const t2 = c.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e2).replace(/[_\s]/g, "."), r2 = c.getMacOSVersionName(t2), n2 = { name: i.MacOS, version: t2 };
      return r2 && (n2.versionName = r2), n2;
    } }, { test: [/(ipod|iphone|ipad)/i], describe(e2) {
      const t2 = c.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e2).replace(/[_\s]/g, ".");
      return { name: i.iOS, version: t2 };
    } }, { test: [/OpenHarmony/i], describe(e2) {
      const t2 = c.getFirstMatch(/OpenHarmony\s+(\d+(\.\d+)*)/i, e2);
      return { name: i.HarmonyOS, version: t2 };
    } }, { test(e2) {
      const t2 = !e2.test(/like android/i), r2 = e2.test(/android/i);
      return t2 && r2;
    }, describe(e2) {
      const t2 = c.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e2), r2 = c.getAndroidVersionName(t2), n2 = { name: i.Android, version: t2 };
      return r2 && (n2.versionName = r2), n2;
    } }, { test: [/(web|hpw)[o0]s/i], describe(e2) {
      const t2 = c.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e2), r2 = { name: i.WebOS };
      return t2 && t2.length && (r2.version = t2), r2;
    } }, { test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe(e2) {
      const t2 = c.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e2) || c.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e2) || c.getFirstMatch(/\bbb(\d+)/i, e2);
      return { name: i.BlackBerry, version: t2 };
    } }, { test: [/bada/i], describe(e2) {
      const t2 = c.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e2);
      return { name: i.Bada, version: t2 };
    } }, { test: [/tizen/i], describe(e2) {
      const t2 = c.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e2);
      return { name: i.Tizen, version: t2 };
    } }, { test: [/linux/i], describe: () => ({ name: i.Linux }) }, { test: [/CrOS/], describe: () => ({ name: i.ChromeOS }) }, { test: [/PlayStation 4/], describe(e2) {
      const t2 = c.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e2);
      return { name: i.PlayStation4, version: t2 };
    } }], m = [{ test: [/googlebot/i], describe: () => ({ type: o.bot, vendor: "Google" }) }, { test: [/linespider/i], describe: () => ({ type: o.bot, vendor: "Line" }) }, { test: [/amazonbot/i], describe: () => ({ type: o.bot, vendor: "Amazon" }) }, { test: [/gptbot/i], describe: () => ({ type: o.bot, vendor: "OpenAI" }) }, { test: [/chatgpt-user/i], describe: () => ({ type: o.bot, vendor: "OpenAI" }) }, { test: [/oai-searchbot/i], describe: () => ({ type: o.bot, vendor: "OpenAI" }) }, { test: [/baiduspider/i], describe: () => ({ type: o.bot, vendor: "Baidu" }) }, { test: [/bingbot/i], describe: () => ({ type: o.bot, vendor: "Bing" }) }, { test: [/duckduckbot/i], describe: () => ({ type: o.bot, vendor: "DuckDuckGo" }) }, { test: [/claudebot/i, /claude-web/i, /claude-user/i, /claude-searchbot/i], describe: () => ({ type: o.bot, vendor: "Anthropic" }) }, { test: [/omgilibot/i, /webzio-extended/i], describe: () => ({ type: o.bot, vendor: "Webz.io" }) }, { test: [/diffbot/i], describe: () => ({ type: o.bot, vendor: "Diffbot" }) }, { test: [/perplexitybot/i], describe: () => ({ type: o.bot, vendor: "Perplexity AI" }) }, { test: [/perplexity-user/i], describe: () => ({ type: o.bot, vendor: "Perplexity AI" }) }, { test: [/youbot/i], describe: () => ({ type: o.bot, vendor: "You.com" }) }, { test: [/ia_archiver/i], describe: () => ({ type: o.bot, vendor: "Internet Archive" }) }, { test: [/meta-webindexer/i], describe: () => ({ type: o.bot, vendor: "Meta" }) }, { test: [/meta-externalads/i], describe: () => ({ type: o.bot, vendor: "Meta" }) }, { test: [/meta-externalagent/i], describe: () => ({ type: o.bot, vendor: "Meta" }) }, { test: [/meta-externalfetcher/i], describe: () => ({ type: o.bot, vendor: "Meta" }) }, { test: [/facebookexternalhit/i, /facebookcatalog/i], describe: () => ({ type: o.bot, vendor: "Meta" }) }, { test: [/slackbot/i, /slack-imgProxy/i], describe: () => ({ type: o.bot, vendor: "Slack" }) }, { test: [/yahoo/i], describe: () => ({ type: o.bot, vendor: "Yahoo" }) }, { test: [/yandexbot/i, /yandexmobilebot/i], describe: () => ({ type: o.bot, vendor: "Yandex" }) }, { test: [/pingdom/i], describe: () => ({ type: o.bot, vendor: "Pingdom" }) }, { test: [/huawei/i], describe(e2) {
      const t2 = c.getFirstMatch(/(can-l01)/i, e2) && "Nova", r2 = { type: o.mobile, vendor: "Huawei" };
      return t2 && (r2.model = t2), r2;
    } }, { test: [/nexus\s*(?:7|8|9|10).*/i], describe: () => ({ type: o.tablet, vendor: "Nexus" }) }, { test: [/ipad/i], describe: () => ({ type: o.tablet, vendor: "Apple", model: "iPad" }) }, { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe: () => ({ type: o.tablet, vendor: "Apple", model: "iPad" }) }, { test: [/kftt build/i], describe: () => ({ type: o.tablet, vendor: "Amazon", model: "Kindle Fire HD 7" }) }, { test: [/silk/i], describe: () => ({ type: o.tablet, vendor: "Amazon" }) }, { test: [/tablet(?! pc)/i], describe: () => ({ type: o.tablet }) }, { test(e2) {
      const t2 = e2.test(/ipod|iphone/i), r2 = e2.test(/like (ipod|iphone)/i);
      return t2 && !r2;
    }, describe(e2) {
      const t2 = c.getFirstMatch(/(ipod|iphone)/i, e2);
      return { type: o.mobile, vendor: "Apple", model: t2 };
    } }, { test: [/nexus\s*[0-6].*/i, /galaxy nexus/i], describe: () => ({ type: o.mobile, vendor: "Nexus" }) }, { test: [/Nokia/i], describe(e2) {
      const t2 = c.getFirstMatch(/Nokia\s+([0-9]+(\.[0-9]+)?)/i, e2), r2 = { type: o.mobile, vendor: "Nokia" };
      return t2 && (r2.model = t2), r2;
    } }, { test: [/[^-]mobi/i], describe: () => ({ type: o.mobile }) }, { test: (e2) => "blackberry" === e2.getBrowserName(true), describe: () => ({ type: o.mobile, vendor: "BlackBerry" }) }, { test: (e2) => "bada" === e2.getBrowserName(true), describe: () => ({ type: o.mobile }) }, { test: (e2) => "windows phone" === e2.getBrowserName(), describe: () => ({ type: o.mobile, vendor: "Microsoft" }) }, { test(e2) {
      const t2 = Number(String(e2.getOSVersion()).split(".")[0]);
      return "android" === e2.getOSName(true) && t2 >= 3;
    }, describe: () => ({ type: o.tablet }) }, { test: (e2) => "android" === e2.getOSName(true), describe: () => ({ type: o.mobile }) }, { test: [/smart-?tv|smarttv/i], describe: () => ({ type: o.tv }) }, { test: [/netcast/i], describe: () => ({ type: o.tv }) }, { test: (e2) => "macos" === e2.getOSName(true), describe: () => ({ type: o.desktop, vendor: "Apple" }) }, { test: (e2) => "windows" === e2.getOSName(true), describe: () => ({ type: o.desktop }) }, { test: (e2) => "linux" === e2.getOSName(true), describe: () => ({ type: o.desktop }) }, { test: (e2) => "playstation 4" === e2.getOSName(true), describe: () => ({ type: o.tv }) }, { test: (e2) => "roku" === e2.getOSName(true), describe: () => ({ type: o.tv }) }], h = [{ test: (e2) => "microsoft edge" === e2.getBrowserName(true), describe(e2) {
      if (/\sedg\//i.test(e2)) return { name: a.Blink };
      const t2 = c.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e2);
      return { name: a.EdgeHTML, version: t2 };
    } }, { test: [/trident/i], describe(e2) {
      const t2 = { name: a.Trident }, r2 = c.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: (e2) => e2.test(/presto/i), describe(e2) {
      const t2 = { name: a.Presto }, r2 = c.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test(e2) {
      const t2 = e2.test(/gecko/i), r2 = e2.test(/like gecko/i);
      return t2 && !r2;
    }, describe(e2) {
      const t2 = { name: a.Gecko }, r2 = c.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e2);
      return r2 && (t2.version = r2), t2;
    } }, { test: [/(apple)?webkit\/537\.36/i], describe: () => ({ name: a.Blink }) }, { test: [/(apple)?webkit/i], describe(e2) {
      const t2 = { name: a.WebKit }, r2 = c.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e2);
      return r2 && (t2.version = r2), t2;
    } }];
    const f = class {
      constructor(e2, t2 = false, r2 = null) {
        if (null == e2 || "" === e2) throw new Error("UserAgent parameter can't be empty");
        this._ua = e2;
        let n2 = false;
        "boolean" == typeof t2 ? (n2 = t2, this._hints = r2) : this._hints = null != t2 && "object" == typeof t2 ? t2 : null, this.parsedResult = {}, true !== n2 && this.parse();
      }
      getHints() {
        return this._hints;
      }
      hasBrand(e2) {
        if (!this._hints || !Array.isArray(this._hints.brands)) return false;
        const t2 = e2.toLowerCase();
        return this._hints.brands.some((e3) => e3.brand && e3.brand.toLowerCase() === t2);
      }
      getBrandVersion(e2) {
        if (!this._hints || !Array.isArray(this._hints.brands)) return;
        const t2 = e2.toLowerCase(), r2 = this._hints.brands.find((e3) => e3.brand && e3.brand.toLowerCase() === t2);
        return r2 ? r2.version : void 0;
      }
      getUA() {
        return this._ua;
      }
      test(e2) {
        return e2.test(this._ua);
      }
      parseBrowser() {
        this.parsedResult.browser = {};
        const e2 = c.find(d, (e3) => {
          if ("function" == typeof e3.test) return e3.test(this);
          if (Array.isArray(e3.test)) return e3.test.some((e4) => this.test(e4));
          throw new Error("Browser's test function is not valid");
        });
        return e2 && (this.parsedResult.browser = e2.describe(this.getUA(), this)), this.parsedResult.browser;
      }
      getBrowser() {
        return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser();
      }
      getBrowserName(e2) {
        return e2 ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || "";
      }
      getBrowserVersion() {
        return this.getBrowser().version;
      }
      getOS() {
        return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
      }
      parseOS() {
        this.parsedResult.os = {};
        const e2 = c.find(p, (e3) => {
          if ("function" == typeof e3.test) return e3.test(this);
          if (Array.isArray(e3.test)) return e3.test.some((e4) => this.test(e4));
          throw new Error("Browser's test function is not valid");
        });
        return e2 && (this.parsedResult.os = e2.describe(this.getUA())), this.parsedResult.os;
      }
      getOSName(e2) {
        const { name: t2 } = this.getOS();
        return e2 ? String(t2).toLowerCase() || "" : t2 || "";
      }
      getOSVersion() {
        return this.getOS().version;
      }
      getPlatform() {
        return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
      }
      getPlatformType(e2 = false) {
        const { type: t2 } = this.getPlatform();
        return e2 ? String(t2).toLowerCase() || "" : t2 || "";
      }
      parsePlatform() {
        this.parsedResult.platform = {};
        const e2 = c.find(m, (e3) => {
          if ("function" == typeof e3.test) return e3.test(this);
          if (Array.isArray(e3.test)) return e3.test.some((e4) => this.test(e4));
          throw new Error("Browser's test function is not valid");
        });
        return e2 && (this.parsedResult.platform = e2.describe(this.getUA())), this.parsedResult.platform;
      }
      getEngine() {
        return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine();
      }
      getEngineName(e2) {
        return e2 ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || "";
      }
      parseEngine() {
        this.parsedResult.engine = {};
        const e2 = c.find(h, (e3) => {
          if ("function" == typeof e3.test) return e3.test(this);
          if (Array.isArray(e3.test)) return e3.test.some((e4) => this.test(e4));
          throw new Error("Browser's test function is not valid");
        });
        return e2 && (this.parsedResult.engine = e2.describe(this.getUA())), this.parsedResult.engine;
      }
      parse() {
        return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this;
      }
      getResult() {
        return c.assign({}, this.parsedResult);
      }
      satisfies(e2) {
        const t2 = {};
        let r2 = 0;
        const n2 = {};
        let s2 = 0;
        if (Object.keys(e2).forEach((o2) => {
          const i2 = e2[o2];
          "string" == typeof i2 ? (n2[o2] = i2, s2 += 1) : "object" == typeof i2 && (t2[o2] = i2, r2 += 1);
        }), r2 > 0) {
          const e3 = Object.keys(t2), r3 = c.find(e3, (e4) => this.isOS(e4));
          if (r3) {
            const e4 = this.satisfies(t2[r3]);
            if (void 0 !== e4) return e4;
          }
          const n3 = c.find(e3, (e4) => this.isPlatform(e4));
          if (n3) {
            const e4 = this.satisfies(t2[n3]);
            if (void 0 !== e4) return e4;
          }
        }
        if (s2 > 0) {
          const e3 = Object.keys(n2), t3 = c.find(e3, (e4) => this.isBrowser(e4, true));
          if (void 0 !== t3) return this.compareVersion(n2[t3]);
        }
      }
      isBrowser(e2, t2 = false) {
        const r2 = this.getBrowserName().toLowerCase();
        let n2 = e2.toLowerCase();
        const s2 = c.getBrowserTypeByAlias(n2);
        return t2 && s2 && (n2 = s2.toLowerCase()), n2 === r2;
      }
      compareVersion(e2) {
        let t2 = [0], r2 = e2, n2 = false;
        const s2 = this.getBrowserVersion();
        if ("string" == typeof s2) return ">" === e2[0] || "<" === e2[0] ? (r2 = e2.substr(1), "=" === e2[1] ? (n2 = true, r2 = e2.substr(2)) : t2 = [], ">" === e2[0] ? t2.push(1) : t2.push(-1)) : "=" === e2[0] ? r2 = e2.substr(1) : "~" === e2[0] && (n2 = true, r2 = e2.substr(1)), t2.indexOf(c.compareVersions(s2, r2, n2)) > -1;
      }
      isOS(e2) {
        return this.getOSName(true) === String(e2).toLowerCase();
      }
      isPlatform(e2) {
        return this.getPlatformType(true) === String(e2).toLowerCase();
      }
      isEngine(e2) {
        return this.getEngineName(true) === String(e2).toLowerCase();
      }
      is(e2, t2 = false) {
        return this.isBrowser(e2, t2) || this.isOS(e2) || this.isPlatform(e2);
      }
      some(e2 = []) {
        return e2.some((e3) => this.is(e3));
      }
    };
    const g = class {
      static getParser(e2, t2 = false, r2 = null) {
        if ("string" != typeof e2) throw new Error("UserAgent should be a string");
        return new f(e2, t2, r2);
      }
      static parse(e2, t2 = null) {
        return new f(e2, t2).getResult();
      }
      static get BROWSER_MAP() {
        return s;
      }
      static get ENGINE_MAP() {
        return a;
      }
      static get OS_MAP() {
        return i;
      }
      static get PLATFORMS_MAP() {
        return o;
      }
    };
  }