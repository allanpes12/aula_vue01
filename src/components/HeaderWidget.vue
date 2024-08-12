<template>
    <header class="app-header">
      <img src="/src/img/logo2.png" alt="Logo" class="logo">
      <nav class="navigation">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'AppHeader'
  }
  </script>
  
  <style scoped>
  .app-header {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .logo {
    width: 150px;
    height: auto;
  }
  
  .navigation ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .navigation li {
    margin-left: 20px;
  }
  
  .navigation a {
    text-decoration: none;
    color: #333;
  }
  
  .navigation a:hover {
    color: #007BFF;
  }
  </style>
  