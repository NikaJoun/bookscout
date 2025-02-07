<template>
    <div class="about-page">
      <h1 class="text-center">О проекте</h1>
      <p class="lead">
        Этот проект представляет собой приложение для поиска, где можно найти информацию о любимых книгах с помощью поиска в каталоге Google Books.
      </p>
      <h4>Функциональность:</h4>
      <ul>
        <li>Поиск книг по названию или автору.</li>
        <li>Интеграция с Google Books API для загрузки книг.</li>
        <li>Возможность просматривать информацию о книге, включая описание и авторов и получение ссылки на покупку книги.</li>
      </ul>
      <h4>Контакты:</h4>
      <p>Если у вас есть вопросы или предложения, пожалуйста, свяжитесь с нами в Telegram: <strong>@AnoneKek</strong></p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutView'
  };
  </script>
  
  <style scoped>
  .about-page {
    padding: 20px;
  }
  
  h1, h4 {
    color: var(--text-color);
  }
  
  p, li {
    color: var(--text-color);
  }
  </style>
  