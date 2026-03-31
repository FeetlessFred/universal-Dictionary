import json

def load_data():
    with open("../data/words.json") as f:
        words = json.load(f)

    with open("../data/slang.json") as f:
        slang = json.load(f)

    with open("../data/user_submissions.json") as f:
        user = json.load(f)

    return words + slang + user


def search(term):
    data = load_data()
    results = [entry for entry in data if entry["word"].lower() == term.lower()]
    return results


if __name__ == "__main__":
    term = input("Enter a word: ")
    results = search(term)

    if results:
        for r in results:
            print(f"\nWord: {r['word']}")
            print(f"Type: {r['type']}")
            print(f"Meaning: {r['meaning']}")
            print(f"Example: {r['example']}")
    else:
        print("Word not found.")
