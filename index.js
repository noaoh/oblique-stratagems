import oblique_strategies from './assets/oblique-strategies.json';

export oblique_strategies = oblique_strategies;
export function draw(edition = "combined") {
        if (!["1", "2", "3", "4", "5", "combined"].includes(edition)) {
                return false;
        }
        var length = oblique_strategies[edition].length + 1;
        var selection = Math.floor(Math.random() * length);
        return oblique_strategies[edition][selection];
}
