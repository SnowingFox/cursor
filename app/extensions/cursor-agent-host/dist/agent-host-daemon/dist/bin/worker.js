"use strict";
var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var require_symbols = __commonJS({
  "../../node_modules/.pnpm/piscina@4.9.3/node_modules/piscina/dist/symbols.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.kFieldCount = exports2.kResponseCountField = exports2.kRequestCountField = exports2.kQueueOptions = exports2.kValue = exports2.kTransferable = exports2.kMovable = void 0;
    exports2.kMovable = /* @__PURE__ */ Symbol("Piscina.kMovable");
    exports2.kTransferable = /* @__PURE__ */ Symbol.for("Piscina.transferable");
    exports2.kValue = /* @__PURE__ */ Symbol.for("Piscina.valueOf");
    exports2.kQueueOptions = /* @__PURE__ */ Symbol.for("Piscina.queueOptions");
    exports2.kRequestCountField = 0;
    exports2.kResponseCountField = 1;
    exports2.kFieldCount = 2;
  }
});
var require_common = __commonJS({
  "../../node_modules/.pnpm/piscina@4.9.3/node_modules/piscina/dist/common.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.commonState = exports2.READY = void 0;
    exports2.isTransferable = isTransferable;
    exports2.isMovable = isMovable;
    exports2.markMovable = markMovable;
    exports2.createHistogramSummary = createHistogramSummary;
    exports2.toHistogramIntegerNano = toHistogramIntegerNano;
    exports2.maybeFileURLToPath = maybeFileURLToPath;
    exports2.getAvailableParallelism = getAvailableParallelism;
    var node_url_12 = require("node:url");
    var node_os_1 = require("node:os");
    var symbols_12 = require_symbols();
    exports2.READY = "_WORKER_READY";
    function isTransferable(value) {
      return value != null && typeof value === "object" && symbols_12.kTransferable in value && symbols_12.kValue in value;
    }
    function isMovable(value) {
      return isTransferable(value) && value[symbols_12.kMovable] === true;
    }
    function markMovable(value) {
      Object.defineProperty(value, symbols_12.kMovable, {
        enumerable: false,
        configurable: true,
        writable: true,
        value: true
      });
    }
    exports2.commonState = {
      isWorkerThread: false,
      workerData: void 0
    };
    function createHistogramSummary(histogram) {
      const { mean, stddev, min, max } = histogram;
      return {
        average: mean / 1e3,
        mean: mean / 1e3,
        stddev,
        min: min / 1e3,
        max: max / 1e3,
        p0_001: histogram.percentile(1e-3) / 1e3,
        p0_01: histogram.percentile(0.01) / 1e3,
        p0_1: histogram.percentile(0.1) / 1e3,
        p1: histogram.percentile(1) / 1e3,
        p2_5: histogram.percentile(2.5) / 1e3,
        p10: histogram.percentile(10) / 1e3,
        p25: histogram.percentile(25) / 1e3,
        p50: histogram.percentile(50) / 1e3,
        p75: histogram.percentile(75) / 1e3,
        p90: histogram.percentile(90) / 1e3,
        p97_5: histogram.percentile(97.5) / 1e3,
        p99: histogram.percentile(99) / 1e3,
        p99_9: histogram.percentile(99.9) / 1e3,
        p99_99: histogram.percentile(99.99) / 1e3,
        p99_999: histogram.percentile(99.999) / 1e3
      };
    }
    function toHistogramIntegerNano(milliseconds) {
      return Math.max(1, Math.trunc(milliseconds * 1e3));
    }
    function maybeFileURLToPath(filename) {
      return filename.startsWith("file:") ? (0, node_url_12.fileURLToPath)(new node_url_12.URL(filename)) : filename;
    }
    function getAvailableParallelism() {
      if (typeof node_os_1.availableParallelism === "function") {
        return (0, node_os_1.availableParallelism)();
      }
      try {
        return (0, node_os_1.cpus)().length;
      } catch {
        return 1;
      }
    }
  }
});
var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
  if (k2 === void 0) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = { enumerable: true, get: function() {
      return m[k];
    } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === void 0) k2 = k;
  o[k2] = m[k];
}));
var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
});
var __importStar = exports && exports.__importStar || function(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) {
    for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }
  __setModuleDefault(result, mod);
  return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_worker_threads_1 = require("node:worker_threads");
var node_url_1 = require("node:url");
var symbols_1 = require_symbols();
var common_1 = require_common();
common_1.commonState.isWorkerThread = true;
common_1.commonState.workerData = node_worker_threads_1.workerData;
var handlerCache = /* @__PURE__ */ new Map();
var useAtomics = process.env.PISCINA_DISABLE_ATOMICS !== "1";
var importESMCached;
function getImportESM() {
  if (importESMCached === void 0) {
    importESMCached = new Function("specifier", "return import(specifier)");
  }
  return importESMCached;
}
async function getHandler(filename, name) {
  let handler = handlerCache.get(`${filename}/${name}`);
  if (handler !== void 0) {
    return handler;
  }
  try {
    handler = await Promise.resolve(`${filename}`).then((s) => __importStar(require(s)));
    if (typeof handler !== "function") {
      handler = await handler[name];
    }
  } catch {
  }
  if (typeof handler !== "function") {
    handler = await getImportESM()((0, node_url_1.pathToFileURL)(filename).href);
    if (typeof handler !== "function") {
      handler = await handler[name];
    }
  }
  if (typeof handler !== "function") {
    return null;
  }
  if (handlerCache.size > 1e3) {
    const [[key]] = handlerCache;
    handlerCache.delete(key);
  }
  handlerCache.set(`${filename}/${name}`, handler);
  return handler;
}
node_worker_threads_1.parentPort.on("message", (message) => {
  useAtomics = process.env.PISCINA_DISABLE_ATOMICS === "1" ? false : message.useAtomics;
  const { port, sharedBuffer, filename, name, niceIncrement } = message;
  (async function() {
    try {
      if (niceIncrement !== 0) {
        (await Promise.resolve().then(() => __importStar(require("@napi-rs/nice")))).nice(niceIncrement);
      }
    } catch {
    }
    if (filename !== null) {
      await getHandler(filename, name);
    }
    const readyMessage = { [common_1.READY]: true };
    node_worker_threads_1.parentPort.postMessage(readyMessage);
    port.on("message", onMessage.bind(null, port, sharedBuffer));
    atomicsWaitLoop(port, sharedBuffer);
  })().catch(throwInNextTick);
});
var currentTasks = 0;
var lastSeenRequestCount = 0;
function atomicsWaitLoop(port, sharedBuffer) {
  if (!useAtomics)
    return;
  while (currentTasks === 0) {
    Atomics.wait(sharedBuffer, symbols_1.kRequestCountField, lastSeenRequestCount);
    lastSeenRequestCount = Atomics.load(sharedBuffer, symbols_1.kRequestCountField);
    let entry;
    while ((entry = (0, node_worker_threads_1.receiveMessageOnPort)(port)) !== void 0) {
      onMessage(port, sharedBuffer, entry.message);
    }
  }
}
function onMessage(port, sharedBuffer, message) {
  currentTasks++;
  const { taskId, task, filename, name } = message;
  (async function() {
    let response;
    let transferList = [];
    try {
      const handler = await getHandler(filename, name);
      if (handler === null) {
        throw new Error(`No handler function exported from ${filename}`);
      }
      let result = await handler(task);
      if ((0, common_1.isMovable)(result)) {
        transferList = transferList.concat(result[symbols_1.kTransferable]);
        result = result[symbols_1.kValue];
      }
      response = {
        taskId,
        result,
        error: null
      };
      if (process.stdout.writableLength > 0) {
        await new Promise((resolve) => process.stdout.write("", resolve));
      }
      if (process.stderr.writableLength > 0) {
        await new Promise((resolve) => process.stderr.write("", resolve));
      }
    } catch (error) {
      response = {
        taskId,
        result: null,
        // It may be worth taking a look at the error cloning algorithm we
        // use in Node.js core here, it's quite a bit more flexible
        error
      };
    }
    currentTasks--;
    port.postMessage(response, transferList);
    Atomics.add(sharedBuffer, symbols_1.kResponseCountField, 1);
    atomicsWaitLoop(port, sharedBuffer);
  })().catch(throwInNextTick);
}
function throwInNextTick(error) {
  process.nextTick(() => {
    throw error;
  });
}
