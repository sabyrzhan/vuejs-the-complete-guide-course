export default {
    namespaced: true,
    state() {
        return {
            requests: [
                {
                    id: 1,
                    email: 'some@email.com',
                    message: 'Some message 1',
                },
                {
                    id: 2,
                    email: 'some2@email.com',
                    message: 'Some message 2',
                }
            ]
        }
    }
}