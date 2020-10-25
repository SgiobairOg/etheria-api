const fastify = require('fastify')({
    logger: { level: 'info' }
})

const PORT = process.env.PORT || 3000

fastify.register(require('./src/routes/v0/root'), {prefix: 'api/v0/'})

const start = async () => {
    try {
        await fastify.listen(PORT)
    } catch (error) {
        fastify.log.error(error)
        process.exit(1)
    }
}

start()
