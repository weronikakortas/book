class PriceGameTypeFactory {

    createGamePriceType = function (type) {
        let priceType;
        if (type === "baseprice") {
            priceType = new BasePrice();
        } else if (type === "midprice") {
            priceType = new MidPrice();
        } else if (type === "aaaprice") {
            priceType = new AAAPrice();
        }

        priceType.display()
        {
            return console.log(`osoba odpowiedzialna za segment ${this.name} to ${this.brandManager} (cena sugerowana to: ${this.price})`);
        }

        return priceType;
    }
}

class BasePrice {
    name = 'base'
    price = 50
    brandManager = 'Karol Kowalski'
}

class MidPrice {
    name = 'mid'
    price = 50
    brandManager = 'Maciej Nowak'
}

class AAAPrice {
    name = 'aaa price'
    price = 250
    brandManager = 'Marianna Srebrna'
    publishers = ['EA', 'Microsoft']
}


function gamesFactory() {
    let games = [];
    let gameFactory = new PriceGameTypeFactory();
    let aaaPrice = gameFactory.createGamePriceType('aaaprice');

    games.push(aaaPrice)
    games.push(gameFactory.createGamePriceType('baseprice'));
    games.push(gameFactory.createGamePriceType('midprice'));
    games.push(gameFactory.createGamePriceType('baseprice'));

    for (let i = 0; i < games.length; i += 1) {
        console.log(games[i].display());
    }
    console.log(aaaPrice.publishers);

}

gamesFactory();