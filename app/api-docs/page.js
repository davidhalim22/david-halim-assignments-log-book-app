"use client";

import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

const swaggerSpec = {
  openapi: "3.0.0",
  info: {
    title: "Thunder Assignment Log Book API",
    version: "1.0.0"
  },
  paths: {
    "/api/assignments": {
      get: {
        summary: "Get all assignments",
        responses: {
          200: { description: "Success" }
        }
      },
      post: {
        summary: "Create new assignment",
        responses: {
          201: { description: "Created" },
          400: { description: "Validation Error" }
        }
      }
    },
    "/api/assignments/{id}": {
      get: {
        summary: "Get assignment by ID"
      },
      put: {
        summary: "Update assignment"
      },
      delete: {
        summary: "Delete assignment"
      }
    }
  }
};

export default function ApiDocs() {
  return <SwaggerUI spec={swaggerSpec} />;
}