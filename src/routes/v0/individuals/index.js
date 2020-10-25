const { query } = require('./../../../services/db')
const { restResponse } = require('./../../../utils')

module.exports = function (fastify, opts, done) {
    const retrieveIndividuals = async ( request, reply ) => {
        const { rows } = await query('SELECT * FROM individual')
        
        const data = restResponse( 
            request,
            {individuals: [...rows]}
        )
        
        return data
    }

    const retrieveIndividualsByName = async ( request, reply ) => {
        const { name } = request.params
        const { rows } = await query("SELECT * FROM individual WHERE name ILIKE $1", [`${name}%`])
        
        const data = restResponse( 
            request,
            {individuals: [...rows]}
        )
        
        return data
    }

    const retrieveSpecificIndividual = async ( request, reply ) => {
        const { id } = request.params
        const { rows } = await query('SELECT * FROM individual WHERE id=$1', [id])
        
        const data = restResponse( 
            request,
            {individuals: [...rows]},
            {relationships: `${process.env.HOST_URL}/api/v0/relationships/1`}
        )

        return data
    }

    fastify.get('individuals', opts, retrieveIndividuals)
    fastify.get('individuals/:id', opts, retrieveSpecificIndividual)
    fastify.get('individuals/named/:name', opts, retrieveIndividualsByName)

    done()
}