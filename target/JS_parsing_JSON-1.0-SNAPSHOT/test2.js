/**
 * Project name(项目名称)：JS_parsing_JSON
 * File name(文件名): test2
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/19
 * Time(创建时间)： 22:09
 * Version(版本): 1.0
 * Description(描述)： 无
 */

var json = `{
    "book": {
        "name": "Harry Potter and the Goblet of Fire",
        "author": "J. K. Rowling",
        "year": 2000,
        "characters": ["Harry Potter", "Hermione Granger", "Ron Weasley"],
        "genre": "Fantasy Fiction",
        "price": {
            "paperback": "$10.40", "hardcover": "$20.32", "kindle": "$4.11"
        }
    }
}`;
// 将 JSON 数据转换为 JSON 对象
var obj = JSON.parse(json);

// 打印嵌套的 JSON 数据
function printValues(obj)
{
    for (var k in obj)
    {
        if (obj[k] instanceof Object)
        {
            printValues(obj[k]);
        }
        else
        {
            document.write(obj[k] + "<br>");
        }
    }
}
// 调用 printValues() 函数
printValues(obj);
document.write("<hr>");
// 打印 JSON 数据中的单个值
document.write(obj["book"]["author"] + "<br>");         // 输出: J. K. Rowling
document.write(obj["book"]["characters"][0] + "<br>");  // 输出: Harry Potter
document.write(obj["book"]["price"]["hardcover"]);      // 输出: $20.32