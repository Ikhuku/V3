export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get('userId');
  const cart = await prisma.cart.findMany({ where: { userId }, include: { product: true } });
  return NextResponse.json(cart);
}

export async function POST(req) {
  const data = await req.json();
  const cartItem = await prisma.cart.create({ data });
  return NextResponse.json(cartItem);
}

export async function PATCH(req) {
  const data = await req.json();
  const cartItem = await prisma.cart.update({ where: { id: data.id }, data });
  return NextResponse.json(cartItem);
}

export async function DELETE(req) {
  const { id } = await req.json();
  await prisma.cart.delete({ where: { id } });
  return NextResponse.json({ success: true });
}