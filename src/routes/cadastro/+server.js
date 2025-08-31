import pb from '$lib/pb';

export async function POST({ request }) {
  const data = await request.json();
  const { nome, quantidade, codigo} = data;

  // gerar código aleatório de 4 caracteres

  const venda = await pb.collection('vendas').create({
    nome_cliente: nome,
    quantidade_marmitas: quantidade,
    codigo
  });

  return new Response(JSON.stringify(venda), { status: 200 });
}
