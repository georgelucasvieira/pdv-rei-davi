<script lang="ts">
  let password = '';
  let error = '';

  async function login() {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password })
    });

    if (res.ok) {
      window.location.href = '/'; // redireciona para home
    } else {
      error = 'Senha inválida';
    }
  }
</script>

<div class="login-container">
    <div class="wrapper">
        <h1>Login</h1>
        <input type="password" bind:value={password} placeholder="Digite a senha" />
        <button on:click={login}>Entrar</button>
        {#if error}
        <p style="color:red">{error}</p>
        {/if}
    </div>
</div>

<style>
    .login-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 50vh;
        margin: auto auto;
        width: 100%;
        max-width: 600px;
    }
    
    .login-container .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        width: 80%;
        border: solid 1px #ddd;
        padding: 10px;
    }

    input {
        padding: 0.5rem;
        font-size: 1rem;
        width: 200px;
    }
    
    button {
        padding: 0.7rem 1rem;
        font-size: 1rem;
        cursor: pointer;
        width: 200px;
    }
</style>