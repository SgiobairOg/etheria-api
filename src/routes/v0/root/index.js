module.exports = function (fastify, opts, done) {
    fastify.get('/', opts, (request, reply) => {
        const data = {
            'content': 'Welcome, friends of Mara',
            'links': {
                'self': `${process.env.HOST_URL}${request.url}`,
                'relationships': `${process.env.HOST_URL}/api/v0/relationships`,
            }
        }
        return data
    })

    done()
}