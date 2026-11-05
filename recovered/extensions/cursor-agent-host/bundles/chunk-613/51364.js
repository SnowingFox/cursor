// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 51364 range:275814..279505
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
51364: (A, e, t) => {
  "use strict";
  const { Transform: r } = t(57075), { isASCIINumber: s, isValidLastEventId: o } = t(42136), n = [239, 187, 191];
  A.exports = { EventSourceStream: class extends r {
    state = null;
    checkBOM = true;
    crlfCheck = false;
    eventEndCheck = false;
    buffer = null;
    pos = 0;
    event = { data: void 0, event: void 0, id: void 0, retry: void 0 };
    constructor(A2 = {}) {
      A2.readableObjectMode = true, super(A2), this.state = A2.eventSourceSettings || {}, A2.push && (this.push = A2.push);
    }
    _transform(A2, e2, t2) {
      if (0 !== A2.length) {
        if (this.buffer ? this.buffer = Buffer.concat([this.buffer, A2]) : this.buffer = A2, this.checkBOM) switch (this.buffer.length) {
          case 1:
            return this.buffer[0] === n[0] || (this.checkBOM = false), void t2();
          case 2:
            if (this.buffer[0] === n[0] && this.buffer[1] === n[1]) return void t2();
            this.checkBOM = false;
            break;
          case 3:
            if (this.buffer[0] === n[0] && this.buffer[1] === n[1] && this.buffer[2] === n[2]) return this.buffer = Buffer.alloc(0), this.checkBOM = false, void t2();
            this.checkBOM = false;
            break;
          default:
            this.buffer[0] === n[0] && this.buffer[1] === n[1] && this.buffer[2] === n[2] && (this.buffer = this.buffer.subarray(3)), this.checkBOM = false;
        }
        for (; this.pos < this.buffer.length; ) if (this.eventEndCheck) {
          if (this.crlfCheck) {
            if (10 === this.buffer[this.pos]) {
              this.buffer = this.buffer.subarray(this.pos + 1), this.pos = 0, this.crlfCheck = false;
              continue;
            }
            this.crlfCheck = false;
          }
          if (10 === this.buffer[this.pos] || 13 === this.buffer[this.pos]) {
            13 === this.buffer[this.pos] && (this.crlfCheck = true), this.buffer = this.buffer.subarray(this.pos + 1), this.pos = 0, (void 0 !== this.event.data || this.event.event || this.event.id || this.event.retry) && this.processEvent(this.event), this.clearEvent();
            continue;
          }
          this.eventEndCheck = false;
        } else 10 !== this.buffer[this.pos] && 13 !== this.buffer[this.pos] ? this.pos++ : (13 === this.buffer[this.pos] && (this.crlfCheck = true), this.parseLine(this.buffer.subarray(0, this.pos), this.event), this.buffer = this.buffer.subarray(this.pos + 1), this.pos = 0, this.eventEndCheck = true);
        t2();
      } else t2();
    }
    parseLine(A2, e2) {
      if (0 === A2.length) return;
      const t2 = A2.indexOf(58);
      if (0 === t2) return;
      let r2 = "", n2 = "";
      if (-1 !== t2) {
        r2 = A2.subarray(0, t2).toString("utf8");
        let e3 = t2 + 1;
        32 === A2[e3] && ++e3, n2 = A2.subarray(e3).toString("utf8");
      } else r2 = A2.toString("utf8"), n2 = "";
      switch (r2) {
        case "data":
          void 0 === e2[r2] ? e2[r2] = n2 : e2[r2] += `
${n2}`;
          break;
        case "retry":
          s(n2) && (e2[r2] = n2);
          break;
        case "id":
          o(n2) && (e2[r2] = n2);
          break;
        case "event":
          n2.length > 0 && (e2[r2] = n2);
      }
    }
    processEvent(A2) {
      A2.retry && s(A2.retry) && (this.state.reconnectionTime = parseInt(A2.retry, 10)), A2.id && o(A2.id) && (this.state.lastEventId = A2.id), void 0 !== A2.data && this.push({ type: A2.event || "message", options: { data: A2.data, lastEventId: this.state.lastEventId, origin: this.state.origin } });
    }
    clearEvent() {
      this.event = { data: void 0, event: void 0, id: void 0, retry: void 0 };
    }
  } };
}