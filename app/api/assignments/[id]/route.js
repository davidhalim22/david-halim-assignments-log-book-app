import { assignments } from "@/lib/data";

// GET assignment by id
export async function GET(request, context) {

  const params = await context.params;
  const id = Number(params.id);

  const assignment = assignments.find(a => a.id === id);

  if (!assignment) {
    return Response.json(
      { message: "Assignment not found" },
      { status: 404 }
    );
  }

  return Response.json(assignment);
}


// UPDATE assignment
export async function PUT(request, context) {

  const params = await context.params;
  const id = Number(params.id);

  let body;

  try {
    body = await request.json();
  } catch {
    return Response.json(
      { message: "Body must be valid JSON" },
      { status: 400 }
    );
  }

  const index = assignments.findIndex(a => a.id === id);

  if (index === -1) {
    return Response.json(
      { message: "Assignment not found" },
      { status: 404 }
    );
  }

  assignments[index] = {
    ...assignments[index],
    ...body
  };

  return Response.json(assignments[index]);
}


// DELETE assignment
export async function DELETE(request, context) {

  const params = await context.params;
  const id = Number(params.id);

  const index = assignments.findIndex(a => a.id === id);

  if (index === -1) {
    return Response.json(
      { message: "Assignment not found" },
      { status: 404 }
    );
  }

  const deleted = assignments.splice(index, 1);

  return Response.json({
    message: "Assignment deleted",
    data: deleted[0]
  });
}