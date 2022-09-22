let styles = ["Джаз", "Блюз"];
document.write(styles.join("&harr;")  + "&#10148;" + "Создать масив с элементами Джаз и Блюз"+ "<br/>");

styles.push("Рок-н-рол");
document.write(styles.join("&harr;") + "&#10148;" + "Добавить элемент Рок-н-рол в крнец масива" + "<br/>");

styles.splice(1,1,"Классика");
document.write(styles.join("&harr;") + "&#10148;" +  "Заменить блюз на классика в средине масива"  + "<br/>" + "<hr/>");

let leng = styles.length / 2;
let lengMath = Math.floor(leng);
document.write(styles[lengMath] + "&#10148;" +  "Находит средину в массиве любой длинны"  + "<br/>" + "<hr/>");

let removed = styles.splice(0,1);
document.write(removed + "&#10148;" +  "Удалите первый элемент масива и покажите его" + "<br/>" + "<hr/>");
 

styles.unshift("Рэп", "Рэгги");
document.write(styles.join("&harr;") + "&#10148;" +  "Вставьте рэп и рэгги в начало массива" + "<hr/>");

let arr = ["a", "b", "c"];
let arr1 = [1,2,3];

let arr2 = arr.concat(arr1);
document.write("1) " + arr + " + " + arr1 + " = " + arr2 + "<br/>" + "<hr/>");

let arr3 = arr.push(1,2,3);
document.write("2) " + arr + " 1,2,3 в конец масива" + "<br/>" + "<hr/>");

document.write("<h3> Код будет дополнятся по мере виполнения доп. задания к домашке <h3/>")

