import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="./style.css">
    <title>Spotify</title>
  </head>
  <body>
    <header class="header">
      <div class="arrows">
        <button class="arrow_back">
          <svg fill="currentColor" height="24" width="24" viewBox="0 0 24 24">
            <path d="M15.957 2.793a1 1 0 010 1.414L8.164 12l7.793 7.793a1 1 0 11-1.414 1.414L5.336 12l9.207-9.207a1 1 0 011.414 0z"></path>
          </svg>
        </button>
        <button class="arrow_next">
          <svg fill="currentColor" height="24" width="24" viewBox="0 0 24 24">
            <path d="M8.043 2.793a1 1 0 000 1.414L15.836 12l-7.793 7.793a1 1 0 101.414 1.414L18.664 12 9.457 2.793a1 1 0 00-1.414 0z"></path>
          </svg>
        </button>
      </div>
      <div class="rate">
        <button class="rate_button">Сменить тариф</button>
      </div>
      <button class="account">
        <figure class="account_image" style="width: 28px; height: 28px;">
          <div class="avatar_border" style="width: 28px; height: 28px; inset-inline-start: 0px;">
            <div class="avatar">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 18 20">
                <path d="M15.216 13.717L12 11.869C11.823 11.768 11.772 11.607 11.757 11.521C11.742 11.435 11.737 11.267 11.869 11.111L13.18 9.57401C14.031 8.58001 14.5 7.31101 14.5 6.00001V5.50001C14.5 3.98501 13.866 2.52301 12.761 1.48601C11.64 0.435011 10.173 -0.0879888 8.636 0.0110112C5.756 0.198011 3.501 2.68401 3.501 5.67101V6.00001C3.501 7.31101 3.97 8.58001 4.82 9.57401L6.131 11.111C6.264 11.266 6.258 11.434 6.243 11.521C6.228 11.607 6.177 11.768 5.999 11.869L2.786 13.716C1.067 14.692 0 16.526 0 18.501V20H1V18.501C1 16.885 1.874 15.385 3.283 14.584L6.498 12.736C6.886 12.513 7.152 12.132 7.228 11.691C7.304 11.251 7.182 10.802 6.891 10.462L5.579 8.92501C4.883 8.11101 4.499 7.07201 4.499 6.00001V5.67101C4.499 3.21001 6.344 1.16201 8.699 1.00901C9.961 0.928011 11.159 1.35601 12.076 2.21501C12.994 3.07601 13.5 4.24301 13.5 5.50001V6.00001C13.5 7.07201 13.117 8.11101 12.42 8.92501L11.109 10.462C10.819 10.803 10.696 11.251 10.772 11.691C10.849 12.132 11.115 12.513 11.503 12.736L14.721 14.585C16.127 15.384 17.001 16.884 17.001 18.501V20H18.001V18.501C18 16.526 16.932 14.692 15.216 13.717Z"></path>
              </svg>
            </div>
          </div>
        </figure>
        <span class="user_name">prostoromantic</span>
        <svg height="16" width="16" class="arrow_up" fill="currentColor">
          <path d="M14 6l-6 6-6-6h12z"></path>
          </svg>
      </button>
    </header>

    <div class="menu">
      <div class="logo">
        <a href="#" class="logo_link">
          <svg viewBox="0 0 1134 340" class="logo_image">
            <title>Spotify</title>
            <path fill="currentColor" d="M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-54-32-144-35-195-19zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 34 0 55-19 55-47 0-24-15-37-50-46-29-7-34-12-34-22s10-16 23-16 25 5 39 15c0 0 1 1 2 1s1-1 1-1l14-20c1-1 1-1 0-2-16-13-35-20-56-20-31 0-53 19-53 46 0 29 20 38 52 46 28 6 32 12 32 22 0 11-10 17-25 17zm95-77v-13c0-1-1-2-2-2h-26c-1 0-2 1-2 2v147c0 1 1 2 2 2h26c1 0 2-1 2-2v-46c10 11 21 16 36 16 27 0 54-21 54-61s-27-60-54-60c-15 0-26 5-36 17zm30 78c-18 0-31-15-31-35s13-34 31-34 30 14 30 34-12 35-30 35zm68-34c0 34 27 60 62 60s62-27 62-61-26-60-61-60-63 27-63 61zm30-1c0-20 13-34 32-34s33 15 33 35-13 34-32 34-33-15-33-35zm140-58v-29c0-1 0-2-1-2h-26c-1 0-2 1-2 2v29h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v58c0 23 11 35 34 35 9 0 18-2 25-6 1 0 1-1 1-2v-21c0-1 0-2-1-2h-2c-5 3-11 4-16 4-8 0-12-4-12-12v-54h30c1 0 2-1 2-2v-22c0-1-1-2-2-2h-30zm129-3c0-11 4-15 13-15 5 0 10 0 15 2h1s1-1 1-2V93c0-1 0-2-1-2-5-2-12-3-22-3-24 0-36 14-36 39v5h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v89c0 1 1 2 2 2h26c1 0 1-1 1-2v-89h25l37 89c-4 9-8 11-14 11-5 0-10-1-15-4h-1l-1 1-9 19c0 1 0 3 1 3 9 5 17 7 27 7 19 0 30-9 39-33l45-116v-2c0-1-1-1-2-1h-27c-1 0-1 1-1 2l-28 78-30-78c0-1-1-2-2-2h-44v-3zm-83 3c-1 0-2 1-2 2v113c0 1 1 2 2 2h26c1 0 1-1 1-2V134c0-1 0-2-1-2h-26zm-6-33c0 10 9 19 19 19s18-9 18-19-8-18-18-18-19 8-19 18zm245 69c10 0 19-8 19-18s-9-18-19-18-18 8-18 18 8 18 18 18zm0-34c9 0 17 7 17 16s-8 16-17 16-16-7-16-16 7-16 16-16zm4 18c3-1 5-3 5-6 0-4-4-6-8-6h-8v19h4v-6h4l4 6h5zm-3-9c2 0 4 1 4 3s-2 3-4 3h-4v-6h4z"></path>
          </svg>
        </a>
      </div>

      <ul class="navigation">
        <li class="menu_button">
          <a href="#" class="menu_button_link active_link">
            <svg width="24" height="24" viewBox="0 0 24 24" class="home_icon">
              <path fill="currentColor" d="M12.5 3.247a1 1 0 00-1 0L4 7.577V20h4.5v-6a1 1 0 011-1h5a1 1 0 011 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 013 0l7.5 4.33a2 2 0 011 1.732V21a1 1 0 01-1 1h-6.5a1 1 0 01-1-1v-6h-3v6a1 1 0 01-1 1H3a1 1 0 01-1-1V7.577a2 2 0 011-1.732l7.5-4.33z"></path>
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" class="home_icon_active">
              <path fill="currentColor" d="M13.5 1.515a3 3 0 00-3 0L3 5.845a2 2 0 00-1 1.732V21a1 1 0 001 1h6a1 1 0 001-1v-6h4v6a1 1 0 001 1h6a1 1 0 001-1V7.577a2 2 0 00-1-1.732l-7.5-4.33z"></path>
            </svg>
            <span class="menu_button_text">Главная</span>
          </a>
        </li>
        <li class="menu_button">
          <a href="#" class="menu_button_link">
            <svg width="24" height="24" viewBox="0 0 24 24" class="search_icon">
              <path fill="currentColor" d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 101.414-1.414l-4.344-4.344a9.157 9.157 0 002.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path>
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" class="search_icon_active">
              <path fill="currentColor" d="M15.356 10.558c0 2.623-2.16 4.75-4.823 4.75-2.664 0-4.824-2.127-4.824-4.75s2.16-4.75 4.824-4.75c2.664 0 4.823 2.127 4.823 4.75z"></path>
              <path fill="currentColor" d="M1.126 10.558c0-5.14 4.226-9.28 9.407-9.28 5.18 0 9.407 4.14 9.407 9.28a9.157 9.157 0 01-2.077 5.816l4.344 4.344a1 1 0 01-1.414 1.414l-4.353-4.353a9.454 9.454 0 01-5.907 2.058c-5.18 0-9.407-4.14-9.407-9.28zm9.407-7.28c-4.105 0-7.407 3.274-7.407 7.28s3.302 7.279 7.407 7.279 7.407-3.273 7.407-7.28c0-4.005-3.302-7.278-7.407-7.278z"></path>
            </svg>
            <span class="menu_button_text">Поиск</span>
          </a>
        </li>
        <li class="menu_button">
          <a href="#" class="menu_button_link">
            <svg width="24" height="24" viewBox="0 0 24 24" class="collection_icon">
              <path fill="currentColor" d="M14.5 2.134a1 1 0 011 0l6 3.464a1 1 0 01.5.866V21a1 1 0 01-1 1h-6a1 1 0 01-1-1V3a1 1 0 01.5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1zm6 0a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1z"></path>
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" class="collection_icon_active">
              <path fill="currentColor" d="M3 22a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1zM15.5 2.134A1 1 0 0014 3v18a1 1 0 001 1h6a1 1 0 001-1V6.464a1 1 0 00-.5-.866l-6-3.464zM9 2a1 1 0 00-1 1v18a1 1 0 102 0V3a1 1 0 00-1-1z"></path>
            </svg>
            <span class="menu_button_text">Моя медиатека</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="content">
      <h2 style="color: #fff;">Недавно прослушано</h2>
      <div class="album_list">
        <div class="album">
          <div class="border">
            <div class="album_image">
              <img class="image" src="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png">
            </div>
            <div class="album_name">
              <a class="album_link" href="https://open.spotify.com/user/31rqs22vkj3x5cekxh3rvhvgom5y/collection" target="_blank">
                Любимые треки
              </a>
            </div>
            <div class="album_description">
              6 треков
            </div>
          </div>
        </div>
        <div class="album">
          <div class="border">
            <div class="album_image">
              <img class="image" src="https://i.scdn.co/image/ab67706c0000da84ccb72853bcffbc74c7c04b49">
            </div>
            <div class="album_name">
              <a class="album_link" href="https://open.spotify.com/playlist/5BD7I98DmJShRfVOb6E4T0" target="_blank">
                Cooman Playlist
              </a>
            </div>
            <div class="album_description">
              Best Rap playlist 2022/new school/old school. inst - @trebushe
            </div>
          </div>
        </div>
        <div class="album">
          <div class="border">
            <div class="album_image">
              <img class="image" src="https://i.scdn.co/image/ab67706c0000da84ccb72853bcffbc74c7c04b49">
            </div>
            <div class="album_name">
              <a class="album_link" href="https://open.spotify.com/playlist/5BD7I98DmJShRfVOb6E4T0" target="_blank">
                Cooman Playlist
              </a>
            </div>
            <div class="album_description">
              Best Rap playlist 2022/new school/old school. inst - @trebushe
            </div>
          </div>
        </div>
        <div class="album">
          <div class="border">
            <div class="album_image">
              <img class="image" src="https://i.scdn.co/image/ab67706c0000da84ccb72853bcffbc74c7c04b49">
            </div>
            <div class="album_name">
              <a class="album_link" href="https://open.spotify.com/playlist/5BD7I98DmJShRfVOb6E4T0" target="_blank">
                Cooman Playlist
              </a>
            </div>
            <div class="album_description">
              Best Rap playlist 2022/new school/old school. inst - @trebushe
            </div>
          </div>
        </div>
        <div class="album">
          <div class="border">
            <div class="album_image">
              <img class="image" src="https://i.scdn.co/image/ab67706c0000da84ccb72853bcffbc74c7c04b49">
            </div>
            <div class="album_name">
              <a class="album_link" href="https://open.spotify.com/playlist/5BD7I98DmJShRfVOb6E4T0" target="_blank">
                Cooman Playlist
              </a>
            </div>
            <div class="album_description">
              Best Rap playlist 2022/new school/old school. inst - @trebushe
            </div>
          </div>
        </div>
        <div class="album">
          <div class="border">
            <div class="album_image">
              <img class="image" src="https://i.scdn.co/image/ab67706c0000da84ccb72853bcffbc74c7c04b49">
            </div>
            <div class="album_name">
              <a class="album_link" href="https://open.spotify.com/playlist/5BD7I98DmJShRfVOb6E4T0" target="_blank">
                Cooman Playlist
              </a>
            </div>
            <div class="album_description">
              Best Rap playlist 2022/new school/old school. inst - @trebushe
            </div>
          </div>
        </div>
        <div class="album">
          <div class="border">
            <div class="album_image">
              <img class="image" src="https://i.scdn.co/image/ab67706c0000da84ccb72853bcffbc74c7c04b49">
            </div>
            <div class="album_name">
              <a class="album_link" href="https://open.spotify.com/playlist/5BD7I98DmJShRfVOb6E4T0" target="_blank">
                Cooman Playlist
              </a>
            </div>
            <div class="album_description">
              Best Rap playlist 2022/new school/old school. inst - @trebushe
            </div>
          </div>
        </div>
      </div>
      <h2 style="color: #fff;">Выпуски для тебя</h2>
      <div class="album_list">
        <div class="album">
          <div class="border">
            <div class="album_image">
              <img class="image" src="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png">
            </div>
            <div class="album_name">
              <a class="album_link" href="https://open.spotify.com/user/31rqs22vkj3x5cekxh3rvhvgom5y/collection" target="_blank">
                Любимые треки
              </a>
            </div>
            <div class="album_description">
              6 треков
            </div>
          </div>
        </div>
        <div class="album">
          <div class="border">
            <div class="album_image">
              <img class="image" src="https://i.scdn.co/image/ab67706c0000da84ccb72853bcffbc74c7c04b49">
            </div>
            <div class="album_name">
              <a class="album_link" href="https://open.spotify.com/playlist/5BD7I98DmJShRfVOb6E4T0" target="_blank">
                Cooman Playlist
              </a>
            </div>
            <div class="album_description">
              Best Rap playlist 2022/new school/old school. inst - @trebushe
            </div>
          </div>
        </div>
        <div class="album">
          <div class="border">
            <div class="album_image">
              <img class="image" src="https://i.scdn.co/image/ab67706c0000da84ccb72853bcffbc74c7c04b49">
            </div>
            <div class="album_name">
              <a class="album_link" href="https://open.spotify.com/playlist/5BD7I98DmJShRfVOb6E4T0" target="_blank">
                Cooman Playlist
              </a>
            </div>
            <div class="album_description">
              Best Rap playlist 2022/new school/old school. inst - @trebushe
            </div>
          </div>
        </div>
        <div class="album">
          <div class="border">
            <div class="album_image">
              <img class="image" src="https://i.scdn.co/image/ab67706c0000da84ccb72853bcffbc74c7c04b49">
            </div>
            <div class="album_name">
              <a class="album_link" href="https://open.spotify.com/playlist/5BD7I98DmJShRfVOb6E4T0" target="_blank">
                Cooman Playlist
              </a>
            </div>
            <div class="album_description">
              Best Rap playlist 2022/new school/old school. inst - @trebushe
            </div>
          </div>
        </div>
        <div class="album">
          <div class="border">
            <div class="album_image">
              <img class="image" src="https://i.scdn.co/image/ab67706c0000da84ccb72853bcffbc74c7c04b49">
            </div>
            <div class="album_name">
              <a class="album_link" href="https://open.spotify.com/playlist/5BD7I98DmJShRfVOb6E4T0" target="_blank">
                Cooman Playlist
              </a>
            </div>
            <div class="album_description">
              Best Rap playlist 2022/new school/old school. inst - @trebushe
            </div>
          </div>
        </div>
        <div class="album">
          <div class="border">
            <div class="album_image">
              <img class="image" src="https://i.scdn.co/image/ab67706c0000da84ccb72853bcffbc74c7c04b49">
            </div>
            <div class="album_name">
              <a class="album_link" href="https://open.spotify.com/playlist/5BD7I98DmJShRfVOb6E4T0" target="_blank">
                Cooman Playlist
              </a>
            </div>
            <div class="album_description">
              Best Rap playlist 2022/new school/old school. inst - @trebushe
            </div>
          </div>
        </div>
        <div class="album">
          <div class="border">
            <div class="album_image">
              <img class="image" src="https://i.scdn.co/image/ab67706c0000da84ccb72853bcffbc74c7c04b49">
            </div>
            <div class="album_name">
              <a class="album_link" href="https://open.spotify.com/playlist/5BD7I98DmJShRfVOb6E4T0" target="_blank">
                Cooman Playlist
              </a>
            </div>
            <div class="album_description">
              Best Rap playlist 2022/new school/old school. inst - @trebushe
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer"></div>
  </body>
</html>