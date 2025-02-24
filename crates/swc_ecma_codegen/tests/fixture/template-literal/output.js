const template_literal1 = `test${"test"}test${"test"}`;
const template_literal2 = ``;
const template_literal3 = ` `;
const template_literal4 = `string text`;
const template_literal5 = `string text line 1
 string text line 2`;
const template_literal6 = `string text ${expression} string text`;
const templateFn = (expression)=>`string text ${expression} string text`
;
const template_literal7 = example`string text ${expression} string text`;
const template_literal8 = `header ${isLargeScreen() ? '' : `icon-${item.isCollapsed ? 'expander' : 'collapser'}`}`;
const template_literal9 = `test \u00A9`;
const template_literal10 = `test \u{2F804}`;
const template_literal11 = `test \xA9`;
const template_literal12 = `test \0o251`;
function latex(str) {
    return {
        "cooked": str[0],
        "raw": str.raw[0]
    };
}
const template_literal14 = latex`\unicode`;
const template_literal15 = `\"test\"test\"test`;
const template_literal16 = `\"test\'test\'test`;
const template_literal17 = `\"test\"test\"test`;
const template_literal18 = `\'test\'test\'test`;
const template_literal19 = `\0`;
const template_literal20 = `\x01`;
const template_literal21 = `\0${0}`;
const template_literal22 = `\x01${0}`;
const template_literal23 = `${0}\0`;
const template_literal24 = `${0}\x01`;
const template_literal25 = `${0}\0${1}`;
const template_literal26 = `${0}\x01${1}`;
const template_literal27 = String.raw`\1`;
const template_literal28 = String.raw`\\x01`;
const template_literal29 = String.raw`\\1${0}`;
const template_literal30 = String.raw`\\x01${0}`;
const template_literal31 = String.raw`${0}\\1`;
const template_literal32 = String.raw`${0}\\x01`;
const template_literal33 = String.raw`${0}\\1${1}`;
const template_literal34 = String.raw`${0}\\x01${1}`;
const template_literal35 = `${y}`;
const template_literal36 = `$(y)`;
const template_literal37 = `{y}$`;
const template_literal38 = `$}y{`;
const template_literal39 = `\\${y}`;
const template_literal40 = `$\\{y}`;
await tag`x`;
await (tag`x`);
(await tag)`x`;
await tag`${x}`;
await (tag`${x}`);
(await tag)`${x}`;
new tag`x`;
new (tag`x`);
new tag()`x`;
(new tag)`x`;
new tag`${x}`;
new (tag`${x}`);
new tag()`${x}`;
(new tag)`${x}`;
new tag`${x}`;
new (tag`${x}`);
new tag()`${x}`;
(new tag)`${x}`;
const template_literal41 = `${"test\`"}${'test\"'}${"test\'\'\'"}`;
const template_literal42 = "\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc";
const template_literal43 = "A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff";
const template_literal45 = `xx\`x`;
const template_literal46 = `${foo + 2}`;
const template_literal47 = ` foo ${bar + `baz ${qux}`}`;
const template_literal48 = `foo
bar
ↂωↂ`;
const template_literal48 = `This is ${undefined}`;
const template_literal49 = `This is ${NaN}`;
const template_literal50 = `This is ${null}`;
const template_literal51 = `This is ${Infinity}`;
const template_literal60 = `${4 ** 11}`;
const template_literal61 = `Hello ${guest()}, welcome to ${location()}${"."}`;
const template_literal62 = `${1}${2}${3}${4}${5}${6}${7}${8}${9}${0}`;
const template_literal63 = `${foobar()}${foobar()}${foobar()}${foobar()}`;
const template_literal64 = `${1}${foobar()}${2}${foobar()}${3}${foobar()}`;
const template_literal65 = "Decimals " + `${1}${2}${3}${4}${5}${6}${7}${8}${9}${0}`;
const template_literal66 = `${`${`${`foo`}`}`}`;
const template_literal67 = `before ${`innerBefore ${any} innerAfter`} after`;
const template_literal68 = `1 ${2 + `3 ${any} 4` + 5} 6`;
const template_literal69 = `</script>${content}`;
const template_literal70 = `<!--`;
const template_literal71 = `-->`;
const template_literal72 = `\u0020\u{20}\u{00020}\x20 `;
console.log(`\\n\\r\\u2028\\u2029\n\r\u2028\u2029`);
function a() {
    return `\
foo`;
}
function b() {
    return `
bar`;
}
function c() {
    return;
    `\
baz`;
}
function d() {
    return;
    `qux`;
}
function e() {
    return `\nfin`;
}
function x(s) {
    return s.raw[0];
}
console.log(String.raw`\u`);
console.log(x`\u`);
console.log(String.raw`\unicode \xerces \1234567890`);
let z = ()=>String.raw
;
console.log(z()`\4321\u\x`);
var str = `foo ${'`;\n`${any}'} bar`;
var concat = `foo ${any} bar` + '`;\n`${any}';
var template = `foo ${'`;\n`${any}'} ${any} bar`;
const template_weird = `\xb43`;
const template_literal73 = `\'`;
const template_literal74 = `\"`;
const template_literal75 = '\u2028';
const template_literal76 = '\u2029';
const template_literal77 = '\uFEFF';
const template_literal78 = `\uD800`;
const template_literal79 = `\uDBFF`;
const template_literal80 = `\uDC00`;
const template_literal81 = `\uDFFF`;
const template_literal81 = `\x32`;
const template_literal82 = `\x7e`;
const template_literal82 = `\x01`;
const template_literal83 = `\x10`;
const template_literal84 = `\x7f`;
const template_literal85 = `\0`;
const template_literal86 = `\0a`;
const template_literal87 = `\0b`;
const template_literal88 = `\0o`;
const template_literal89 = `\0x`;
const template_literal90 = `\\x32`;
const template_literal91 = `\\\x32`;
const template_literal92 = `\\`;
String.raw`\01`;
String.raw`\0a`;
const template_literal93 = `\u1234`;
const template_literal94 = `\u{1234}`;
const template_literal95 = `    `;
const template_literal96 = `\n`;
const template_literal97 = `\r`;
const template_literal98 = `\v`;
const template_literal99 = `\t`;
const template_literal100 = `\b`;
const template_literal101 = `\f`;
const template_literal102 = `
test 
test 
test§
	test	
`;
const template_literal103 = `\0z`;
const template_literal104 = `\0`;
const template_literal105 = `x``x`;
const template_literal106 = `😀`;
const template_literal107 = `\u1111`;
const template_literal108 = `\u{1111}`;
const template_literal109 = `\x10`;
const template_literal110 = `\\x10`;
const template_literal111 = `\\\\`;
const template_literal112 = ``;
const template_literal113 = ``;
const template_literal114 = ``;
console.log(` `);
console.log(` 1`);
console.log(` a`);
const template_literal115 = `\uD800`;
const template_literal116 = `\u{D800}`;
const template_literal117 = `\uDBFF`;
const template_literal118 = `\u{DBFF}`;
const template_literal119 = `\uDC00`;
const template_literal120 = `\u{DC00}`;
const template_literal121 = `\uDFFF`;
const template_literal122 = `\u{DFFF}`;
const template_literal123 = `\uFFFF`;
const template_literal124 = `\u{FFFF}`;
