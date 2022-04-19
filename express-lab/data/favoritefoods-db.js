const favoritefoods = [
    {favoritefood: 'Pasta', healthy: true},
    {favoritefood: 'Seafood', healthy: true},
    {favoritefood: 'Chips', healthy: false},
    {favoritefood: 'Fruits', healthy: true},
    {favoritefood: 'Veggies', healthy: true},
    {favoritefood: 'Salad', healthy: true}
];

module.exports = {
    getAll: function() {
        return favoritefoods;
    }
};