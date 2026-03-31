import json

files = [
    "../data/words.json",
    "../data/slang.json",
    "../data/user_submissions.json"
]

merged = []

for file in files:
    with open(file) as f:
        merged.extend(json.load(f))

# Remove duplicates
unique = {entry["word"].lower(): entry for entry in merged}

with open("../data/full_dictionary.json", "w") as f:
    json.dump(list(unique.values()), f, indent=2)

print("Merged dictionary saved as full_dictionary.json")
