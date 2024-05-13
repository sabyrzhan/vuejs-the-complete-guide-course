export default {
    namespaced: true,
    state() {
        return {
            coaches: [
                {
                    id: 1,
                    name: 'Manuel Lorenz',
                    price: '$39/hour',
                    tags: ['frontend', 'career']
                },
                {
                    id: 2,
                    name: 'Max Schwarz',
                    price: '$39/hour',
                    tags: ['frontend','backend','career']
                }
            ]
        }
    }
}