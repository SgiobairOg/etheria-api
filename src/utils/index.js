const restResponse = ( request, content, links ) => {
    return {
        content: {
            ...content
        },
        links: {
            self: `${process.env.HOST_URL}${request.url}`,
            ...links
        }
    }
}

module.exports = {
    restResponse
}
