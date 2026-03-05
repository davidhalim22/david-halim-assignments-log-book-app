import { assignments } from "@/lib/data";

// GET all assignments
export async function GET() {
  return Response.json(assignments);
}

// CREATE assignment
export async function POST(request) {

  let body;

  try {
    body = await request.json();
  } catch {
    return Response.json(
      { message: "Body must be valid JSON" },
      { status: 400 }
    );
  }

  if (!body.title || !body.description) {
    return Response.json(
      { message: "title and description required" },
      { status: 400 }
    );
  }

  const newAssignment = {
    id: assignments.length + 1,
    title: body.title,
    description: body.description,
    dueDate: body.dueDate || null
  };

  assignments.push(newAssignment);

  return Response.json(newAssignment, { status: 201 });
}