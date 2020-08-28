import supertest from 'supertest'
import app from '../../src/app'

describe('should be access routers', () => {
    it('access the route /', async () => {
        const { status, body } = await supertest(app).get('/')

        expect(status).toBe(200)
        expect(body).toBe({ message: 'work' })
    })
})
