<script>
export default {
  name: 'AppHeader'
}
</script>

<template>
  <header class="container-fluid d-flex justify-content-between">
    <div class="logo">
      <img src="../assets/img/logo.png" alt="">
      <div class="nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Serie TV</a></li>
          <li><a href="#">Film</a></li>
        </ul>
      </div>
    </div>

    <div class="secondary-nav">
      <i class="fa-solid fa-magnifying-glass"></i>
      <form action="">
        <input type="text" id="fname" name="fname" value="" placeholder="Titolo, persone, generi">
      </form>
    </div>
    
  </header>
</template>

<style lang="scss" scoped>

@use '../styles/general.scss' as *;

.active{
  color: white;
}

.container-fluid{
  padding: 20px;
}

.logo{
  display: flex;
  img{
    width: 100px;
  }
  ul{
    display: flex;
    list-style: none;
    a{
      padding-right: 20px;
      text-decoration: none;
      color: lightgray;
      font-weight: bold;
      &:hover{
        color: gray;
      }
    }
  }
}

  .secondary-nav{
    display: flex;
    i{
      color: white;
      margin-right: 10px;
    }
    input{
      background-color: black;
      border: 1px solid white;
      color: white;
      input::placeholder{
        color: white;
        opacity: 1;
      }
    }
  }

</style>