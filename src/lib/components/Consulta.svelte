<script>
  let codigo = "";
  /**
     * @type {string | any[]}
     */
  let resultado = [];

  async function consultar() {
    const res = await fetch(`/consulta?codigo=${codigo.toUpperCase()}`);
    if (res.ok) {
      const data = await res.json();
      resultado = Array.isArray(data) ? data : [data];
    } else {
      resultado = [];
      alert("Código não encontrado");
    }
  }
</script>

<div class="consulta">
  <h2>Consultar venda</h2>
  <input bind:value={codigo} placeholder="Digite o código" />
  <button on:click={consultar}>Buscar</button>

  {#if resultado.length !== 0 && codigo}
    {#each resultado as res}
      <div class="resultado">
        <p><strong>Cliente:</strong> {res.nome_cliente}</p>
        <p><strong>Quantidade:</strong> {res.quantidade_marmitas}</p>
        <p><strong>Código:</strong> {res.codigo}</p>
      </div>
    {/each}
  {/if}
</div>

<style>
  .consulta {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  input,
  button {
    padding: 0.5rem;
    font-size: 1rem;
  }
  .resultado {
    margin-top: 1rem;
    border: 1px solid #ccc;
    padding: 0.5rem;
  }
</style>
