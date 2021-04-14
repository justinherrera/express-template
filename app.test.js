const request = require('supertest')
const app = require('./app')
const User = require('models/User')

describe('POST /users/signup', () => {
    it('responds with json', function(done) {
        
        return request(app).post('/api/users/signup').send({
            name: 'qwertyssstdzxc',
            email: 'qwertyssstddzxc@example.com',
            password: 'password123',
            passwordConfirm: 'password123',
        })
        .expect('Content-Type', /json/)
        .expect(201)
        .then(response => {
            expect(response.body.name).toBe(user.name)
            expect(response.body.email).toBe(user.email)
            expect(response.body.password).toBe(user.password)
        })
    });

      
    // test('POST /api/users/signup', async () => {

    //     const user = await User.create({
    //         name: 'qwertyssstd',
    //         email: 'qwertyssstdd@example.com',
    //         password: 'password123',
    //         passwordConfirm: 'password123',
    //     })
    //     await request(app)
    //     .post('/api/users/signup')
	// 	.expect(200)
	// 	.then(async (response) => {
	// 		expect(response.body._id).toBeTruthy()
	// 		expect(response.body.name).toBe(user.name)
	// 		expect(response.body.email).toBe(user.email)
    //         expect(response.body.password).toBe(user.password)
    //         expect(response.body.passwordConfirm).toBe(user.passwordConfirm)

    //         const user = await Post.findOne({ _id: response.body._id })
    //         expect(user).toBeTruthy()
    //         expect(user.name).toBe(user.name)
    //         expect(user.email).toBe(user.email)
    //         expect(user.password).toBe(user.password)
	// 	})
    // })

    // test('GET /api/users', async () => {

    //     // const user = await User.find({})
    //     await request(app)
    //         .get('/api/users')
    //         .expect(200)
    //         .then((response) => {

    //             // Check the response type and length
    //             expect(Array.isArray(response.body)).toBeTruthy()
    //             expect(response.body.length).toEqual(1)

    //             //Check the response data
    //             // expect(response.body[0]._id).toBe(user.id)
    //             // expect(response.body[0].name).toBe(user.name)
    //             // expect(response.body[0].email).toBe(user.email)

    //         })
    // })
})
// describe('User API', () => {
//     it('GET /users --> array of users', () => {
//         return request('http://localhost:3002')
//         .get('/users')
//         .expect('Content-Type', /json/)
//         .expect(200)
//         .then(response => {
//             expect(response.body).toEqual(
//                 expect.arrayContaining([
//                     expect.objectContaining({
//                         _id: expect.any(String),
//                         name: expect.any(String),
//                         email: expect.any(String),
//                     })
//                 ])
//             )
//         })
//     })

//     it('GET /users/id --> specific user by id', () => {
//         return request(app)
//         .get('/users/1')
//         .expect('Content-Type', /json/)
//         .expect(200)
//         .then(response => {
//             expect(response.body).toEqual(
//                 expect.objectContaining({
//                     name: expect.any(String),
//                     completed: expect.any(Boolean),
//                 })
//             )
//         })

//     })

//     it('GET /users/id --> 404 not found', () => {
//         return request(app).get('/user/9999').expect(404)
//     })

//     it('POST /users/signup --> created user', () => {
//         return request(app).post('users/signup').send({
//             name: 'john doe',
//             email: 'john@example.com',
//             password: 'password123'
//         })
//         .expect('Content-Type', /json/)
//         .expect(201)
//         .then(response => {
//             expect(response.body).toEqual(
//                 expect.objectContaining({
//                     name: 'john doe',
//                     email: 'john@example.com',
//                     password: 'password123'
//                 })
//             )
//         })
//     })

//     it('GET /users -- validates request body', () => {
//         return request(app).post('/users').send({
//             name: 123
//         }).expect(422)
//     })
// })
