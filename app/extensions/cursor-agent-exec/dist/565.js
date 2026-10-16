"use strict";
exports.id = 565, exports.ids = [565], exports.modules = { 11565: (t, e, s) => {
  s.d(e, { default: () => f });
  var r = s(63652);
  async function f(t2) {
    const e2 = Buffer.isBuffer(t2.bytes) ? t2.bytes : Buffer.from(t2.bytes), s2 = new r.Cm({ data: e2 });
    try {
      const t3 = await s2.getText();
      return { text: "string" == typeof t3.text ? t3.text : "" };
    } finally {
      await s2.destroy();
    }
  }
} };
