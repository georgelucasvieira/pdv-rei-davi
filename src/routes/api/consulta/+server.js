import pb from '$lib/pb';

export async function GET({ url }) {
  const codigo = url.searchParams.get('codigo');
  const result = await pb.collection('vendas').getFirstListItem(`codigo="${codigo}"`);
  return new Response(JSON.stringify(result), { status: 200 });
}
