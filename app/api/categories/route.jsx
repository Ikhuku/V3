export async function GET() {
  const categories = await prisma.category.findMany();
  return NextResponse.json(categories);
}

export async function POST(req) {
  const data = await req.json();
  const category = await prisma.category.create({ data });
  return NextResponse.json(category);
}