export async function GET(req, { params }) {
  const { slug } = params;
  const product = await prisma.product.findUnique({
    where: { slug },
    include: { media: true, variants: true, reviews: true, category: true },
  });
  return NextResponse.json(product);
}

export async function PUT(req, { params }) {
  const { slug } = params;
  const data = await req.json();
  const product = await prisma.product.update({ where: { slug }, data });
  return NextResponse.json(product);
}

export async function DELETE(req, { params }) {
  const { slug } = params;
  await prisma.product.delete({ where: { slug } });
  return NextResponse.json({ success: true });
}
