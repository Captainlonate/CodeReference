const request = require("supertest");
const app = require('./app');

describe("Test app.js's routes", () => {
    test("GET '/' should return successfull json.", async () => {
        const response = await request(app)
            .get("/")
            .expect('Content-Type', /json/)
            .expect(200)

        expect(response.body.status).toEqual('success');
        expect(response.body.message).toEqual('Everything worked.');
    })

    test("POST /api/user should create and return a new user", async () => {
        const response = await request(app)
            .post("/api/user")
            .send({
                firstName: 'MageFN',
                lastName: 'MageLN'
            })

        expect(response.headers["content-type"]).toMatch(/application\/json/i);
        expect(response.statusCode).toEqual(201);
        // If you specify a property here, it must be in the real object.
        // But you can leave off certain properties (like 'id' in this case).
        expect(response.body).toMatchObject({
            // id: '001' // Not specifying id, and it will still pass.
            name: 'MageFN MageLN'
        })
    })
})