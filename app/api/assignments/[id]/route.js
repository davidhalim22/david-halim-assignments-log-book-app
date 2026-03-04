import { assignments } from "@/lib/data";

export async function GET(request, { params }) {
  const id = parseInt(params.id);

  const assignment = assignments.find(a => a.id === id);

  if (!assignment) {
    return Response.json(
      { message: "Assignment not found" },
      { status: 404 }
    );
  }

  return Response.json(assignment);
}

export async function PUT(request, { params }) {
  const id = parseInt(params.id);
  const body = await request.json();

  const index = assignments.findIndex(a => a.id === id);

  if (index === -1) {
    return Response.json(
      { message: "Assignment not found" },
      { status: 404 }
    );
  }

  assignments[index] = { ...assignments[index], ...body };

  return Response.json(assignments[index]);
}

export async function DELETE(request, { params }) {
  const id = parseInt(params.id);

  const index = assignments.findIndex(a => a.id === id);

  if (index === -1) {
    return Response.json(
      { message: "Assignment not found" },
      { status: 404 }
    );
  }

  const deleted = assignments.splice(index, 1);

  return Response.json(deleted[0]);
}