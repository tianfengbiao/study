

// https://juejin.cn/post/6844903487155732494

var a = 'AbCdE'.replace(/[A-Za-z]/g, function(match){
    // console.log('match==',match)
    return /[A-Z]/.test(match) ? match.toLowerCase() : match.toUpperCase()
})
console.log('a===',a)


var reg = new RegExp('vvc_model' + '=([^;]+);?\s*')
reg = /key_model=([^;]+);?s*/
console.log('reg===',reg)



var regex = /ab{2,5}c/g;
var string = "abc abbc abbbc abbbbc abbbbbc abbbbbbc";
console.log( string.match(regex) ); 
// => ["abbc", "abbbc", "abbbbc", "abbbbbc"]

var regex = /a[123]b/g;
var string = "a0b a1b a2b a3b a4b a123b";
console.log( string.match(regex) ); 
// => ["a1b", "a2b", "a3b"]


var regex = /\d{2,5}/g;
var string = "123 1234 12345 123456";
console.log( string.match(regex) ); 
// => ["123", "1234", "12345", "12345"]


var regex = /\d{2,5}?/g;
var string = "123 1234 12345 123456";
console.log( string.match(regex) ); 
// => ["12", "12", "34", "12", "34", "12", "34", "56"]

// {m,n}?
// {m,}?
// ??
// +?
// *?
// 对惰性匹配的记忆方式是：量词后面加个问号，问一问你知足了吗，你很贪婪吗？

var regex = /good|nice/g;
var string = "good idea, nice try.";
console.log( string.match(regex) ); 
// => ["good", "nice"]


var regex = /good|goodbye/g;
var string = "goodbye";
console.log( string.match(regex) ); 
// => ["good"]

var regex = /goodbye|good/g;
var string = "goodbye";
console.log( string.match(regex) ); 
// => ["goodbye"]
// 也就是说，分支结构也是惰性的，即当前面的匹配上了，后面的就不再尝试了。


var regex = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g;
var string = "#ffbbad #Fc01DF #FFF #ffE";
console.log( string.match(regex) ); 
// => ["#ffbbad", "#Fc01DF", "#FFF", "#ffE"]

console.log(`==============`)

var regex = /^([01][0-9]|[2][0-3]):[0-5][0-9]$/;
console.log( regex.test("23:59") ); 
console.log( regex.test("02:07") ); 
// => true
// => true


var regex = /^(0?[0-9]|1[0-9]|[2][0-3]):(0?[0-9]|[1-5][0-9])$/;
console.log( regex.test("23:59") ); 
console.log( regex.test("02:07") ); 
console.log( regex.test("7:9") ); 
// => true
// => true
// => true


var regex = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
console.log( regex.test("2017-06-10") ); 
// => true


var regex = /^[a-zA-Z]:\\([^\\:*<>|"?\r\n/]+\\)*([^\\:*<>|"?\r\n/]+)?$/;
console.log( regex.test("F:\\study\\javascript\\regex\\regular expression.pdf") ); 
console.log( regex.test("F:\\study\\javascript\\regex\\") ); 
console.log( regex.test("F:\\study\\javascript") ); 
console.log( regex.test("F:\\") ); 
// => true
// => true
// => true
// => true


console.log(`==============`)

var regex = /id=".*"/
var string = '<div id="container" class="main"></div>';
console.log(string.match(regex)[0]); 
// => id="container" class="main"


var regex = /id=".*?"/
var string = '<div id="container" class="main"></div>';
console.log(string.match(regex)[0]); 
// => id="container"


var regex = /id="[^"]*"/
var string = '<div id="container" class="main"></div>';
console.log(string.match(regex)[0]); 
// => id="container"



var result = "hello".replace(/^|$/g, '#');// 比如我们把字符串的开头和结尾用"#"替换（位置可以替换成字符的！）
console.log(result); 
// => "#hello#"


var result = "I\nlove\njavascript".replace(/^|$/gm, '#');
console.log(result);
/*
#I#
#love#
#javascript#
*/


// \b是单词边界，具体就是\w和\W之间的位置，也包括\w和^之间的位置，也包括\w和$之间的位置。
// 比如一个文件名是"[JS] Lesson_01.mp4"中的\b，如下：
var result = "[JS] Lesson_01.mp4".replace(/\b/g, '#');
console.log(result); 
// => "[#JS#] #Lesson_01#.#mp4#"

var result = "[JS] Lesson_01.mp4".replace(/\B/g, '#');
console.log(result); 
// => "#[J#S]# L#e#s#s#o#n#_#0#1.m#p#4"



// (?=p)，其中p是一个子模式，即p前面的位置。比如(?=l)，表示'l'字符前面的位置，例如：
var result = "hello".replace(/(?=l)/g, '#');
console.log(result); 
// => "he#l#lo"


// 而(?!p)就是(?=p)的反面意思，比如：

var result = "hello".replace(/(?!l)/g, '#');

console.log(result); 
// => "#h#ell#o#



var result = "12345678".replace(/(?=\d{3}$)/g, ',')
console.log(result); 
// => "12345,678"



// 因为逗号出现的位置，要求后面3个数字一组，也就是\d{3}至少出现一次。
// 此时可以使用量词+：

var result = "12345678".replace(/(?=(\d{3})+$)/g, ',')
console.log(result); 
// => "12,345,678"


var result = "123456789".replace(/(?=(\d{3})+$)/g, ',')
console.log(result); 
// => ",123,456,789"


console.log('===============')

var string1 = "12345678",
string2 = "123456789";
// reg = /(?!^)(?=(\d{3})+$)/g;
// reg = /(?!\b)(?=(\d{3})+\b)/g;
reg = /\B(?=(\d{3})+\b)/g;

var result = string1.replace(reg, ',')
console.log(result); 
// => "12,345,678"

result = string2.replace(reg, ',');
console.log(result); 
// => "123,456,789"


console.log('===============')


var reg = /((?=.*[0-9])(?=.*[a-z])|(?=.*[0-9])(?=.*[A-Z])|(?=.*[a-z])(?=.*[A-Z]))^[0-9A-Za-z]{6,12}$/;
console.log( reg.test("1234567") ); // false 全是数字
console.log( reg.test("abcdef") ); // false 全是小写字母
console.log( reg.test("ABCDEFGH") ); // false 全是大写字母
console.log( reg.test("ab23C") ); // false 不足6位
console.log( reg.test("ABCDEF234") ); // true 大写字母和数字
console.log( reg.test("abcdEF234") ); // true 三者都有

console.log('===============')


var reg = /(?!^[0-9]{6,12}$)(?!^[a-z]{6,12}$)(?!^[A-Z]{6,12}$)^[0-9A-Za-z]{6,12}$/;
console.log( reg.test("1234567") ); // false 全是数字
console.log( reg.test("abcdef") ); // false 全是小写字母
console.log( reg.test("ABCDEFGH") ); // false 全是大写字母
console.log( reg.test("ab23C") ); // false 不足6位
console.log( reg.test("ABCDEF234") ); // true 大写字母和数字
console.log( reg.test("abcdEF234") ); // true 三者都有



console.log('===============')


// 我们知道/a+/匹配连续出现的“a”，而要匹配连续出现的“ab”时，需要使用/(ab)+/。其中括号是提供分组功能，使量词+作用于“ab”这个整体，测试如下：
var regex = /(ab)+/g;
var string = "ababa abbb ababab";
console.log( string.match(regex) ); 
// => ["abab", "ab", "ababab"]

// 而在多选分支结构(p1|p2)中，此处括号的作用也是不言而喻的，提供了子表达式的所有可能。比如，要匹配如下的字符串：
// I love JavaScriptI love Regular Expression可以使用正则：
var regex = /^I love (JavaScript|Regular Expression)$/;
console.log( regex.test("I love JavaScript") );
console.log( regex.test("I love Regular Expression") );
// => true
// => true

console.log('===============')

var regex = /(\d{4})-(\d{2})-(\d{2})/;
var string = "2017-06-12";
console.log( string.match(regex) ); 
// => ["2017-06-12", "2017", "06", "12", index: 0, input: "2017-06-12"]


// match返回的一个数组，第一个元素是整体匹配结果，然后是各个分组（括号里）匹配的内容，
// 然后是匹配下标，最后是输入的文本。（注意：如果正则是否有修饰符g，match返回的数组格式是不一样的）

// 另外也可以使用正则对象的exec方法：
var regex = /(\d{4})-(\d{2})-(\d{2})/;
var string = "2017-06-12";
console.log( regex.exec(string) ); 
// => ["2017-06-12", "2017", "06", "12", index: 0, input: "2017-06-12"]

// 同时，也可以使用构造函数的全局属性$1至$9来获取：
var regex = /(\d{4})-(\d{2})-(\d{2})/;
var string = "2017-06-12";

regex.test(string); // 正则操作即可，例如
//regex.exec(string);
//string.match(regex);
console.log(RegExp.$1); // "2017"
console.log(RegExp.$2); // "06"
console.log(RegExp.$3); // "12"


console.log('===============')

var regex = /(\d{4})-(\d{2})-(\d{2})/;
var string = "2017-06-12";
var result = string.replace(regex, function(match, year, month, day) {
	return month + "/" + day + "/" + year;
});
console.log(result); 
// => "06/12/2017"

// 之前文中出现的分组，都会捕获它们匹配到的数据，以便后续引用，因此也称他们是捕获型分组。
// 如果只想要括号最原始的功能，但不会引用它，即，既不在API里引用，也不在正则里反向引用。
// 此时可以使用非捕获分组(?:p)，例如本文第一个例子可以修改为：
var regex = /(?:ab)+/g;
var string = "ababa abbb ababab";
console.log( string.match(regex) ); 
// => ["abab", "ab", "ababab"]


function trim(str) {
	return str.replace(/^\s+|\s+$/g, '');
}
console.log( trim("  foobar   ") ); 
// => "foobar"


function titleize(str) {
	return str.toLowerCase().replace(/(?:^|\s)\w/g, function(c) {
        // console.log('c===',c)
		return c.toUpperCase();
	});
}
console.log( titleize('my name is epeli') ); 
// => "My Name Is Epeli"

function camelize(str) {
	return str.replace(/[-_\s]+(.)?/g, function(match, c) {
		return c ? c.toUpperCase() : '';
	});
}
console.log( camelize('-moz-transform') ); 
// => "MozTransform"
// 复制代码其中分组(.)表示首字母。
// 单词的界定是，前面的字符可以是多个连字符、下划线以及空白符。正则后面的?的目的，是为了应对str尾部的字符可能不是单词字符，比如str是'-moz-transform 


// 将HTML特殊字符转换成等值的实体
function escapeHTML(str) {
	var escapeChars = {
	  '¢' : 'cent',
	  '£' : 'pound',
	  '¥' : 'yen',
	  '€': 'euro',
	  '©' :'copy',
	  '®' : 'reg',
	  '<' : 'lt',
	  '>' : 'gt',
	  '"' : 'quot',
	  '&' : 'amp',
	  '\'' : '#39'
	};
	return str.replace(new RegExp('[' + Object.keys(escapeChars).join('') +']', 'g'), function(match) {
		return '&' + escapeChars[match] + ';';
	});
}
console.log( escapeHTML('<div>Blah blah blah</div>') );
// => "&lt;div&gt;Blah blah blah&lt;/div&gt";



// 实体字符转换为等值的HTML。
function unescapeHTML(str) {
	var htmlEntities = {
	  nbsp: ' ',
	  cent: '¢',
	  pound: '£',
	  yen: '¥',
	  euro: '€',
	  copy: '©',
	  reg: '®',
	  lt: '<',
	  gt: '>',
	  quot: '"',
	  amp: '&',
	  apos: '\''
	};
	return str.replace(/\&([^;]+);/g, function(match, key) {
		if (key in htmlEntities) {
			return htmlEntities[key];
		}
		return match;
	});
}
console.log( unescapeHTML('&lt;div&gt;Blah blah blah&lt;/div&gt;') );
// => "<div>Blah blah blah</div>"



var string = "12345";
var regex = /(\d{1,3})(\d{1,3})/;
console.log( string.match(regex) );
// => ["12345", "123", "45", index: 0, input: "12345"]
// 复制代码其中，前面的\d{1,3}匹配的是"123"，后面的\d{1,3}匹配的是"4

var string = "12345";
var regex = /(\d{1,3}?)(\d{1,3})/;
console.log( string.match(regex) );
// => ["1234", "1", "234", index: 0, input: "12345"]

var string = "2017.06.27";
var regex1 = /\b(\d+)\b/;
var regex2 = /\b(\d+)\b/g;
console.log( string.match(regex1) );
console.log( string.match(regex2) );
// => ["2017", "2017", index: 0, input: "2017.06.27"]
// => ["2017", "06", "27"]



