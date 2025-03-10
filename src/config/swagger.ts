import swaggerJSDoc from "swagger-jsdoc";

const options: swaggerJSDoc.Options = {
  swaggerDefinition: {
    openapi: "3.0.2",
    info: {
      title: "API Documentation",
      version: "1.0.0",
      description: "API Documentation",
    },
    tags: [
      {
        name: "Account",
        description: "Account API",
      },
    ],
  },
  apis: ["./src/routers/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;