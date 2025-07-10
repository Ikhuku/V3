export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const productId = searchParams.get('productId');
  const reviews = await prisma.review.findMany({ where: { productId } });
  return NextResponse.json(reviews);
}

export async function POST(req) {
  const data = await req.json();
  const review = await prisma.review.create({ data });
  return NextResponse.json(review);
}

export async function DELETE(req) {
  const { id } = await req.json();
  await prisma.review.delete({ where: { id } });
  return NextResponse.json({ success: true });
}