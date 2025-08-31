<script>
  let { venda, novaVenda} = $props();
</script>

<div class="sucesso">
  <h2>Venda salva com sucesso!</h2>
  <p><strong>Cliente:</strong> {venda.nome}</p>
  <p><strong>Quantidade:</strong> {venda.quantidade}</p>
  <p><strong>Código:</strong> {venda.codigo}</p>
  <button onclick={novaVenda}>Nova venda</button>
</div>

<style>
  .sucesso {
    padding: 1rem;
    border: 2px solid green;
    border-radius: 8px;
  }
</style>
