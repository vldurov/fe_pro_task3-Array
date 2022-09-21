let styles = ["Джаз", "Блюз"];
document.write(styles.join("&harr;")  + "&#10148;" + "Создать масив с элементами Джаз и Блюз"+ "<br/>");

styles.push("Рок-н-рол");
document.write(styles.join("&harr;") + "&#10148;" + "Добавить элемент Рок-н-рол в крнец масива" + "<br/>");

styles.splice(1,1,"Классика");
document.write(styles.join("&harr;") + "&#10148;" +  "Заменить блюз на классика в средине масива"  + "<br/>" + "<hr/>");

let removed = styles.splice(0,1);
document.write(removed + "&#10148;" +  "Удалите первый элемент масива и покажите его" + "<br/>" + "<hr/>");
 

styles.unshift("Рэп", "Рэгги");
document.write(styles.join("&harr;") + "&#10148;" +  "Вставьте рэп и рэгги в начало массива" + "<hr/>");