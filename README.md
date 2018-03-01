# Oblique Strategies
The keys to the war against a creative block.  A simple node module based off of Brian Eno and Peter Schmidt's [oblique strategies](http://en.wikipedia.org/wiki/Oblique_Strategies).   The strategies came from [this webpage created by alexplorer](http://www.alexplorer.net/music/oblique.html).

# Usage
There are six different editions of the oblique editions : 1, 2, 3, 4, 5, and
the combined version of all 5 without any strategies with the same meaning.

## From the Command Line
```javascript
// edition is set to combined by default
oblique (edition = combined)
```

## In a javascript program
```javascript
var oblique = require('oblique-stratagems');
// all the strategies for that edition in alphabetical order
oblique.strategy[edition];
// draw a strategy from an edition
oblique.draw(edition);
```
# License
The unlicense: I don't own any of this.  Whatever I have made, it is based on the shoulder of giants, and is free to all.
