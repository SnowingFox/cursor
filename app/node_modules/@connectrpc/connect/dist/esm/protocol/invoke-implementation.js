// Copyright 2021-2024 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
    function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
    function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __asyncDelegator = (this && this.__asyncDelegator) || function (o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
};
import { Message, MethodKind } from "@bufbuild/protobuf";
import { ConnectError } from "../connect-error.js";
import { Code } from "../code.js";
import { normalize, normalizeIterable } from "./normalize.js";
import { applyInterceptors } from "../interceptor.js";
/**
 * Invoke a user-provided implementation of a unary RPC. Returns a normalized
 * output message.
 *
 * @private Internal code, does not follow semantic versioning.
 */
export async function invokeUnaryImplementation(spec, context, input, interceptors) {
    const anyFn = async (req) => {
        return {
            message: normalize(spec.method.O, await spec.impl(req.message, Object.assign(Object.assign({}, context), { service: req.service, method: req.method, requestHeader: req.header, values: req.contextValues, signal: req.signal }))),
            stream: false,
            service: req.service,
            method: req.method,
            header: context.responseHeader,
            trailer: context.responseTrailer,
        };
    };
    const next = applyInterceptors(anyFn, interceptors);
    const { message } = await next({
        init: {
            method: context.requestMethod,
        },
        message: input,
        url: context.url,
        signal: context.signal,
        service: spec.service,
        method: spec.method,
        header: context.requestHeader,
        contextValues: context.values,
        stream: false,
    });
    return message;
}
/**
 * Return an AsyncIterableTransform that invokes a user-provided implementation,
 * giving it input from an asynchronous iterable, and returning its output as an
 * asynchronous iterable.
 *
 * @private Internal code, does not follow semantic versioning.
 */
export function transformInvokeImplementation(spec, context, interceptors) {
    switch (spec.kind) {
        case MethodKind.Unary:
            return function unary(input) {
                return __asyncGenerator(this, arguments, function* unary_1() {
                    const inputIt = input[Symbol.asyncIterator]();
                    const input1 = yield __await(inputIt.next());
                    if (input1.done === true) {
                        throw new ConnectError("protocol error: missing input message for unary method", Code.Unimplemented);
                    }
                    const anyFn = async (req) => {
                        return {
                            message: normalize(spec.method.O, await spec.impl(req.message, Object.assign(Object.assign({}, context), { service: req.service, method: req.method, requestHeader: req.header, values: req.contextValues, signal: req.signal }))),
                            stream: false,
                            service: req.service,
                            method: req.method,
                            header: context.responseHeader,
                            trailer: context.responseTrailer,
                        };
                    };
                    const next = applyInterceptors(anyFn, interceptors);
                    const { message, header, trailer } = yield __await(next({
                        init: {
                            method: context.requestMethod,
                        },
                        message: input1.value,
                        url: context.url,
                        signal: context.signal,
                        service: spec.service,
                        method: spec.method,
                        header: context.requestHeader,
                        contextValues: context.values,
                        stream: false,
                    }));
                    copyHeaders(header, context.responseHeader);
                    copyHeaders(trailer, context.responseTrailer);
                    yield yield __await(message);
                    const input2 = yield __await(inputIt.next());
                    if (input2.done !== true) {
                        throw new ConnectError("protocol error: received extra input message for unary method", Code.Unimplemented);
                    }
                });
            };
        case MethodKind.ServerStreaming: {
            return function serverStreaming(input) {
                return __asyncGenerator(this, arguments, function* serverStreaming_1() {
                    const inputIt = input[Symbol.asyncIterator]();
                    const input1 = yield __await(inputIt.next());
                    if (input1.done === true) {
                        throw new ConnectError("protocol error: missing input message for server-streaming method", Code.Unimplemented);
                    }
                    const anyFn = async (req) => {
                        return {
                            message: normalizeIterable(spec.method.O, spec.impl(req.message, Object.assign(Object.assign({}, context), { service: req.service, method: req.method, requestHeader: req.header, values: req.contextValues, signal: req.signal }))),
                            stream: true,
                            service: req.service,
                            method: req.method,
                            header: context.responseHeader,
                            trailer: context.responseTrailer,
                        };
                    };
                    const next = applyInterceptors(anyFn, interceptors);
                    const { message, header, trailer } = yield __await(next({
                        init: {
                            method: context.requestMethod,
                        },
                        message: input1.value,
                        url: context.url,
                        signal: context.signal,
                        service: spec.service,
                        method: spec.method,
                        header: context.requestHeader,
                        contextValues: context.values,
                        stream: false,
                    }));
                    copyHeaders(header, context.responseHeader);
                    copyHeaders(trailer, context.responseTrailer);
                    yield __await(yield* __asyncDelegator(__asyncValues(message)));
                    const input2 = yield __await(inputIt.next());
                    if (input2.done !== true) {
                        throw new ConnectError("protocol error: received extra input message for server-streaming method", Code.Unimplemented);
                    }
                });
            };
        }
        case MethodKind.ClientStreaming: {
            return function clientStreaming(input) {
                return __asyncGenerator(this, arguments, function* clientStreaming_1() {
                    const anyFn = async (req) => {
                        return {
                            message: normalize(spec.method.O, await spec.impl(req.message, Object.assign(Object.assign({}, context), { service: req.service, method: req.method, requestHeader: req.header, values: req.contextValues, signal: req.signal }))),
                            stream: false,
                            service: req.service,
                            method: req.method,
                            header: context.responseHeader,
                            trailer: context.responseTrailer,
                        };
                    };
                    const next = applyInterceptors(anyFn, interceptors);
                    const { message, header, trailer } = yield __await(next({
                        init: {
                            method: context.requestMethod,
                        },
                        message: input,
                        url: context.url,
                        signal: context.signal,
                        service: spec.service,
                        method: spec.method,
                        header: context.requestHeader,
                        contextValues: context.values,
                        stream: true,
                    }));
                    copyHeaders(header, context.responseHeader);
                    copyHeaders(trailer, context.responseTrailer);
                    yield yield __await(message);
                });
            };
        }
        case MethodKind.BiDiStreaming:
            return function biDiStreaming(input) {
                return __asyncGenerator(this, arguments, function* biDiStreaming_1() {
                    const anyFn = async (req) => {
                        return {
                            message: normalizeIterable(spec.method.O, spec.impl(req.message, Object.assign(Object.assign({}, context), { service: req.service, method: req.method, requestHeader: req.header, values: req.contextValues, signal: req.signal }))),
                            stream: true,
                            service: req.service,
                            method: req.method,
                            header: context.responseHeader,
                            trailer: context.responseTrailer,
                        };
                    };
                    const next = applyInterceptors(anyFn, interceptors);
                    const { message, header, trailer } = yield __await(next({
                        init: {
                            method: context.requestMethod,
                        },
                        message: input,
                        url: context.url,
                        signal: context.signal,
                        service: spec.service,
                        method: spec.method,
                        header: context.requestHeader,
                        contextValues: context.values,
                        stream: true,
                    }));
                    copyHeaders(header, context.responseHeader);
                    copyHeaders(trailer, context.responseTrailer);
                    yield __await(yield* __asyncDelegator(__asyncValues(message)));
                });
            };
    }
}
function copyHeaders(from, to) {
    if (from === to) {
        return;
    }
    to.forEach((_, key) => {
        to.delete(key);
    });
    from.forEach((value, key) => {
        to.set(key, value);
    });
}
