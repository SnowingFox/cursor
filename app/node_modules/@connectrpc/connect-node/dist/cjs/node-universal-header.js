"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.nodeHeaderToWebHeader = nodeHeaderToWebHeader;
exports.webHeaderToNodeHeaders = webHeaderToNodeHeaders;
/**
 * Convert a Node.js header object to a fetch API Headers object.
 *
 * This function works for Node.js incoming and outgoing headers, and for the
 * http and the http2 package.
 *
 * HTTP/2 pseudo-headers (:method, :path, etc.) are stripped.
 */
function nodeHeaderToWebHeader(nodeHeaders) {
    const header = new Headers();
    for (const [k, v] of Object.entries(nodeHeaders)) {
        if (k.startsWith(":")) {
            continue;
        }
        if (v === undefined) {
            continue;
        }
        if (typeof v == "string") {
            header.append(k, v);
        }
        else if (typeof v == "number") {
            header.append(k, String(v));
        }
        else {
            for (const e of v) {
                header.append(k, e);
            }
        }
    }
    return header;
}
function webHeaderToNodeHeaders(headersInit, defaultNodeHeaders) {
    if (headersInit === undefined && defaultNodeHeaders === undefined) {
        return undefined;
    }
    const o = Object.create(null);
    if (defaultNodeHeaders !== undefined) {
        for (const [key, value] of Object.entries(defaultNodeHeaders)) {
            if (Array.isArray(value)) {
                o[key] = value.concat();
            }
            else if (value !== undefined) {
                o[key] = value;
            }
        }
    }
    if (headersInit !== undefined) {
        if (Array.isArray(headersInit)) {
            for (const [key, value] of headersInit) {
                appendWebHeader(o, key, value);
            }
        }
        else if ("forEach" in headersInit) {
            if (typeof headersInit.forEach == "function") {
                headersInit.forEach((value, key) => {
                    appendWebHeader(o, key, value);
                });
            }
        }
        else {
            for (const [key, value] of Object.entries(headersInit)) {
                appendWebHeader(o, key, value);
            }
        }
    }
    return o;
}
function appendWebHeader(o, key, value) {
    key = key.toLowerCase();
    const existing = o[key];
    if (Array.isArray(existing)) {
        existing.push(value);
    }
    else if (existing === undefined) {
        o[key] = value;
    }
    else {
        o[key] = [existing.toString(), value];
    }
}
