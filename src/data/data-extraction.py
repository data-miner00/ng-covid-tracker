import json

with open("countries.json", "r") as f:
	json_data = json.loads(f.read())
	
	mapped_countries = list(map(lambda x: x["name"], json_data))
	print(mapped_countries)

with open("country-array.json", "w") as f:
	json.dump(mapped_countries, f)

print("End of script")