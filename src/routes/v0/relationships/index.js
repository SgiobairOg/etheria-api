const { query } = require('./../../../services/db')
const { restResponse } = require('./../../../utils')

module.exports = function (fastify, opts, done) {
    const relationshipToJson = ( relationship ) => {
        const {
            id,
            individual,
            relates_to,
            type,
            lore,
            former
        } = relationship

        return {
            'id': id,
            'individual': individual,
            'relates_to': relates_to,
            'type': type,
            'lore': lore || '',
            'former': former,
        }
    }

    const retrieveRelationships = async ( request, reply ) => {
        const { rows } = await query('SELECT * FROM relationship')
        
        const data = restResponse( 
            request,
            {relationships: [...rows]}
        )
        
        return data
    }

    const retrieveIndividualRelationships = async ( request, reply ) => {
        const { id } = request.params
        const { rows } = await query('SELECT * FROM relationship WHERE individual=$1', [id])
        
        const data = restResponse( 
            request,
            {relationships: [...rows]},
            {relationships: `${process.env.HOST_URL}/api/v0/relationships/1`}
        )

        return data
    }

    fastify.get('relationships', opts, retrieveRelationships)
    fastify.get('relationships/:id', opts, retrieveIndividualRelationships)

    done()
}