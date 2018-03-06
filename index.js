var fs = require('fs');
var path = require('path');
var json_path = path.join(__dirname, 'assets', 'oblique-strategies.json');
var oblique_strategies = JSON.parse(fs.readFileSync(json_path, 'utf8'));

exports.strategies = oblique_strategies;
exports.draw = function draw(edition = "combined") {
        if (!["1", "2", "3", "4", "5", "combined"].includes(edition)) {
                return false;
        }
        var length = oblique_strategies[edition].length + 1;
        var selection = Math.floor(Math.random() * length);
        return oblique_strategies[edition][selection];
}
