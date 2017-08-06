var mongoose = require('mongoose');

var beerSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    history: String,
    harmonization: String,
    content: Number, //Teor alcoolico - porcentagem
    color: Number, //Cor: 0 - clara, 1 - escura
    ferment: Number, //Fermentacao: 0 - baixa, 1 - alta
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
});

module.exports = mongoose.model("Beer", beerSchema);
