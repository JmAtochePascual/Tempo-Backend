import request from "supertest"
import app from "../server"
import mongoose from "mongoose";

// Test for register
describe('POST /api/auth/register', () => {
  it('Debe mostrar un error si no se pasan los datos requeridos', async () => {
    const response = await request(app).post('/api/auth/register').send({})

    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('errors')
    expect(response.header['content-type']).toMatch(/json/)
    expect(response.body.errors).toHaveLength(6)

    expect(response.status).not.toBe(200)
  })

  it('Debe mostrar un error si no se pasa el nombre del usuario', async () => {
    const response = await request(app).post('/api/auth/register').send({
      name: "",
      email: "user@123.com",
      password: "password",
      confirmPassword: "password"
    })

    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('errors')
    expect(response.header['content-type']).toMatch(/json/)
    expect(response.body.errors).toHaveLength(3)

    expect(response.status).not.toBe(200)
  })

  it('Debe mostrar un error si no se pasa el email del usuario', async () => {
    const response = await request(app).post('/api/auth/register').send({
      name: "Test",
      email: "",
      password: "password",
      confirmPassword: "password"
    })

    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('errors')
    expect(response.header['content-type']).toMatch(/json/)
    expect(response.body.errors).toHaveLength(2)

    expect(response.status).not.toBe(200)
  })

  it('Debe mostrar un error si no se pasa el password del usuario', async () => {
    const response = await request(app).post('/api/auth/register').send({
      name: "Test",
      email: "user@123.com",
      password: "",
      confirmPassword: "password"
    })

    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('errors')
    expect(response.header['content-type']).toMatch(/json/)
    expect(response.body.errors).toHaveLength(4)

    expect(response.status).not.toBe(200)
  })

  it('Debe mostrar un error si no se pasa el confirm password del usuario', async () => {
    const response = await request(app).post('/api/auth/register').send({
      name: "Test",
      email: "user@123.com",
      password: "password",
      confirmPassword: ""
    })

    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('errors')
    expect(response.header['content-type']).toMatch(/json/)
    expect(response.body.errors).toHaveLength(2)

    expect(response.status).not.toBe(200)
  })

  describe("POST /api/auth/register", () => {
    test("Debe registrar un usuario correctamente", async () => {
      const response = await request(app).post("/api/auth/register").send({ name: "Test", email: "user@123.com", password: "password", confirmPassword: "password" })

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty("message", "User created successfully");
    });
  });
});

// Test for login
it('Debe mostrar un error si no se pasan los datos requeridos', async () => {
  const response = await request(app).post('/api/auth/login').send({})

  expect(response.status).toBe(400)
  expect(response.body).toHaveProperty('errors')
  expect(response.header['content-type']).toMatch(/json/)
  expect(response.body.errors).toHaveLength(3)

  expect(response.status).not.toBe(200)
})

describe("POST /api/auth/login", () => {
  it("Debe mostrar un error si no se pasa el email", async () => {
    const response = await request(app).post("/api/auth/login").send({ password: "password" })

    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('errors')
    expect(response.header['content-type']).toMatch(/json/)
    expect(response.body.errors).toHaveLength(2)

    expect(response.status).not.toBe(200)
  })
})

describe("POST /api/auth/login", () => {
  it("Debe mostrar un error si no se pasa el password", async () => {
    const response = await request(app).post("/api/auth/login").send({ email: "user@123.com" })

    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('errors')
    expect(response.header['content-type']).toMatch(/json/)
    expect(response.body.errors).toHaveLength(1)

    expect(response.status).not.toBe(200)
  })
})


describe("POST /api/auth/login", () => {
  it("Debe mostrar un error si el usuario no existe", async () => {
    const response = await request(app).post("/api/auth/login").send({
      email: "user123@123.com",
      password: "password"
    })

    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty("message")
    expect(response.header['content-type']).toMatch(/json/)
    expect(response.body.message).toEqual("User not found")

    expect(response.status).not.toBe(200)
  })
})

describe("POST /api/auth/login", () => {
  it("Debe mostrar un error si el password es incorrecto", async () => {
    const response = await request(app).post("/api/auth/login").send({
      email: "user@123.com",
      password: "passwordsd"
    })

    expect(response.status).toBe(401)
    expect(response.body).toHaveProperty('message')
    expect(response.header['content-type']).toMatch(/json/)
    expect(response.body.message).toEqual("Incorrect password")

    expect(response.status).not.toBe(200)
  })
})

describe("POST /api/auth/login", () => {
  it("Debe autenticar correctamente al usuario", async () => {
    const response = await request(app).post("/api/auth/login").send({
      email: "user@123.com",
      password: "password"
    })

    expect(response.status).toBe(200)
    expect(response.body.message).toEqual("Logged in successfully")

    expect(response.status).not.toBe(400)
  })
})

// ✅ Cerrar la conexión a la base de datos después de los tests
afterAll(async () => {
  await mongoose.connection.close();
});
