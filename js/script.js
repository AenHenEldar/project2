/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

/* jslint node: true */
"use strict";

const ad = document.querySelectorAll('.promo__adv img');
const genre = document.querySelector('.promo__genre');
const promoBG = document.querySelector('.promo__bg');
const movieList = document.querySelectorAll('.promo__interactive-item');

ad.forEach(value => {
    value.remove();
});

genre.textContent = "драма";
promoBG.style.backgroundImage = "url(img/bg.jpg)";

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

movieDB.movies.sort();

movieList.forEach((value, i) => {
    value.textContent = `${i + 1}. ${movieDB.movies[i]}`;
});



