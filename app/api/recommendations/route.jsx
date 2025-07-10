export async function GET(req) {
  // This is a placeholder logic, ideally should be based on user history or ML model
  const products = await prisma.product.findMany({ take: 10, orderBy: { createdAt: 'desc' } });
  return NextResponse.json(products);
}