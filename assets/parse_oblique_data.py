import json
import re
editions = ["1", "2", "3", "4", "5", "combined"] 
oblique_data = {}
for edition in editions:
  filename = "oblique-edition" + edition + ".txt"
  with open(filename, mode = "r", encoding="utf8") as f:
    content = f.readlines()
    oblique_data[edition] = [entry.strip() for entry in content]
  
  if edition == "combined":
    cleaned_data = [re.sub(r"\s{2}.*", '', entry) for entry in oblique_data[edition]]
    oblique_data[edition] = cleaned_data
    
fn = "oblique-strategies.json"
with open(fn, mode='w', encoding="utf8") as f:
  json.dump(oblique_data, f)
