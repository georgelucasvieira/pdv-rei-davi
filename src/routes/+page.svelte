<script>
  import Cadastro from "$lib/components/Cadastro.svelte";
  import Consulta from "$lib/components/Consulta.svelte";

  let tab = "cadastro";
</script>

<div class="container">
  <div class="wrapper">
    <div class="tabs">
      <button on:click={() => tab = "cadastro"} class:active={tab === "cadastro"}>Cadastro</button>
      <button on:click={() => tab = "consulta"} class:active={tab === "consulta"}>Consulta</button>
    </div>

    <div class="conteudo">
      {#if tab === "cadastro"}
      <Cadastro />
      {:else if tab === "consulta"}
      <Consulta />
      {/if}
    </div>
  </div>

</div>


<style>
  .container {
    min-height: 50vh;
    margin: 2rem auto;
    padding: 3rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    display: flex;
  }
  .wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .tabs {
    display: flex;
    gap: .5rem;
    margin-bottom: 1rem;
    width: 100%;
  }
  .conteudo{
    width: 100%;
  }
  button {
    padding: .5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
  }
  .active {
    background: #333;
    color: white;
  }
</style>
