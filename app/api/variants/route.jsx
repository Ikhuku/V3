export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const productId = searchParams.get('productId');
  const variants = await prisma.variant.findMany({ where: { productId } });
  return NextResponse.json(variants);
}

export async function POST(req) {
  const data = await req.json();
  const variant = await prisma.variant.create({ data });
  return NextResponse.json(variant);
}