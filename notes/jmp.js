"use strict";
var code_1 = require('../x86/x64/code');
var code = code_1.Code.create();
var start = code.getStartLabel();
code.db([1, 2, 3, 4, 5]);
var insn = code.jmp(start);
console.log(code.toString() + '\n\n');
code.do2ndPass();
console.log(code.toString() + '\n\n');
var bin = code.do3rdPass();
console.log(code.toString() + '\n\n');
console.log(new Buffer(bin));