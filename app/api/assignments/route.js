import { assignments } from "@/lib/data";

export async function GET() {
  return Response.json(assignments);
}

export async function POST(request) {
  const body = await request.json();

  if (!body.title || !body.description) {
    return Response.json(
      { message: "Title and Description are required" },
      { status: 400 }
    );
  }

  const newAssignment = {
    id: assignments.length + 1,
    ...body
  };

  assignments.push(newAssignment);

  return Response.json(newAssignment, { status: 201 });
}