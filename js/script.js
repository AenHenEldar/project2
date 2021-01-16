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

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const ad = document.querySelectorAll('.promo__adv img'),
    genre = document.querySelector('.promo__genre'),
    promoBG = document.querySelector('.promo__bg'),
    movieList = document.querySelector('.promo__interactive-list'),
    formMovie = document.querySelector('.add'),
    favMovie = formMovie.querySelector('[type="checkbox"]'),
    inputMovie = document.querySelector('.adding__input');

    ad.forEach(value => {
        value.remove();
    });

    genre.textContent = "драма";
    promoBG.style.backgroundImage = "url(img/bg.jpg)";

    function getMovieList(movies, parent) {
        parent.innerHTML = '';

        movies.sort();
        movies.forEach((value, i) => {
            parent.innerHTML += `<li class="promo__interactive-item">${i + 1}. ${value}<div class="delete"></div></li>`;
        });

        document.querySelectorAll('.delete').forEach((value, i) => {
            value.addEventListener('click', e => {
                movies.splice(i, 1);
                getMovieList(movies, parent);
            });
        });
    } 
    
    getMovieList(movieDB.movies, movieList);

    formMovie.addEventListener('submit', (e) => {
        e.preventDefault();
        if(inputMovie.value) {
            if(inputMovie.value.length > 21) {
                movieDB.movies.push(inputMovie.value.slice(0, 22) + '...');
            } else {
                movieDB.movies.push(inputMovie.value);
            }

            if(favMovie.checked) {
                console.log("Добавляем любимый фильм");
            }

            getMovieList(movieDB.movies, movieList);

            e.target.reset();
        } 
    });    
});




