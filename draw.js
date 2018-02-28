#!/usr/bin/env nodejs

var oblique = require('./index.js');

function handle_arg(arg = "combined")
{
        if(["1","2","3","4", "5", "combined"].includes(arg)) {
	        return arg;	
        }
        else {
                return "Not a valid edition";
        }
}

console.log("\n" + oblique.draw(handle_arg(process.argv[2])) + "\n")
