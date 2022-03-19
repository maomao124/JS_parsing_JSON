/**
 * Project name(项目名称)：JS_parsing_JSON
 * File name(文件名): test3
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/19
 * Time(创建时间)： 22:18
 * Version(版本): 1.0
 * Description(描述)： 无
 */

var obj = {
    "name": "JavaScript",
    "author": "123",
    "year": 2022,
    "genre": "Getting Started tutorial",
    "bestseller": true
};

//JSON.stringify()方法将 JavaScript 对象或值转换为 JSON 字符串，如果指定了替换函数，则可选地替换值，或者如果指定了替换器数组，则可选地仅包括指定的属性。
var json = JSON.stringify(obj);
document.write(json);