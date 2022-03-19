/**
 * Project name(项目名称)：JS_parsing_JSON
 * File name(文件名): test1
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/19
 * Time(创建时间)： 22:06
 * Version(版本): 1.0
 * Description(描述)： 无
 */

var json = '{"course": {"name": "JavaScript","author": "123","year": 2022,"genre": "Getting Started tutorial",' +
    '"bestseller": true},"fruits": ["Apple","Banana","Strawberry","Mango"]}';
var obj = JSON.parse(json);
console.log(obj.course);
console.log(obj.fruits);