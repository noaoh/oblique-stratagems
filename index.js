oblique-strategies = require('assets/oblique-strategies.json');
edition1 = oblique-strategies["1"];
edition2 = oblique-strategies["2"];
edition3 = oblique-strategies["3"];
edition4 = oblique-strategies["4"];
combined = oblique-strategies["combined"];

function draw(edition = "combined") {
        if !(["1", "2", "3", "4", "combined"].includes(edition))
        {
                return false;
        }
        var selection = Math.floor(Math.random() * (oblique-strategies[edition].length + 1));
        return oblique-strategies[edition][selection];
}
