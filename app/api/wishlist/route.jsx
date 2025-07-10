export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get('userId');
  const wishlist = await prisma.wishlist.findMany({ where: { userId }, include: { product: true } });
  return NextResponse.json(wishlist);
}

export async function POST(req) {
  const data = await req.json();
  const wish = await prisma.wishlist.create({ data });
  return NextResponse.json(wish);
}

export async function DELETE(req) {
  const { productId, userId } = await req.json();
  await prisma.wishlist.deleteMany({ where: { productId, userId } });
  return NextResponse.json({ success: true });
}