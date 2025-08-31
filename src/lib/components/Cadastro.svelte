<script>
    import Sucesso from "./Sucesso.svelte";

    let nome = "";
    let quantidade = 1;
    /**
     * @type {{ nome: string; quantidade: number; codigo: string; } | null}
     */
    let venda = null;
    let btnPressionado = "";

    async function salvar() {
        if (!nome || quantidade < 1) return;
        
        const codigo = Math.random().toString(36).substring(2, 6).toUpperCase();

        const res = await fetch("/cadastro", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nome, quantidade, codigo }),
        });

        if (res.ok) {
            venda = {nome, quantidade, codigo}
        } else {
            const err = await res.json();
            alert(err.error || "Erro ao salvar");
        }
    }

    function novaVenda() {
        venda = null;
        nome = "";
        quantidade = 1;
    }

    function aumentar() {
        quantidade += 1;
        btnPressionado = "mais";
        resetarCorBotao();
    }

    function diminuir() {
        if (quantidade > 1) quantidade -= 1;
        btnPressionado = "menos";
        resetarCorBotao();
    }

    function resetarCorBotao() {
        setTimeout(() => {
            btnPressionado = "";
        }, 100);
    }
</script>

{#if venda}
    <Sucesso venda={venda} novaVenda={novaVenda} />
{:else}
    <div class="form">
        <div class="conteudo-form">
            <h2>Cadastro de Venda</h2>

            <label>
                Nome do cliente:
                <input
                    name="nome-cliente"
                    bind:value={nome}
                    placeholder="Ex: João Silva"
                />
            </label>

            <label>
                Quantidade de marmitas:
                <div class="quantidade-control">
                    <button
                        type="button"
                        class:ativo={btnPressionado === "menos"}
                        on:click={diminuir}>–</button
                    >
                    <span>{quantidade}</span>
                    <button
                        type="button"
                        class:ativo={btnPressionado === "mais"}
                        on:click={aumentar}>+</button
                    >
                </div>
            </label>
        </div>

        <button class="salvar" on:click={salvar}>Salvar</button>
    </div>
{/if}

<style>
    .form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
    }

    .conteudo-form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;
    }

    .conteudo-form label {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: start;
    }

    input {
        padding: 0.7rem 0.5rem;
        font-size: 1rem;
        width: 90%;
    }

    .quantidade-control {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 0.5rem;
    }

    .quantidade-control span {
        font-size: 2rem;
        font-weight: bold;
        min-width: 40px;
        text-align: center;
    }

    .quantidade-control button {
        font-size: 2rem;
        padding: 0.5rem 1rem;
        cursor: pointer;
        border: none;
        border-radius: 6px;
        background: #333;
    }

    .quantidade-control button.ativo {
        background: #ddd;
    }

    .salvar {
        background: #333;
        color: white;
        font-size: 1rem;
        padding: 0.7rem;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        width: 100%;
    }

    .salvar:active {
        background: #111;
    }
</style>
