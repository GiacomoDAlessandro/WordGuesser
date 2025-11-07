import random


with open('backend/Words', 'r', encoding='utf-8') as file:
    words = set(line.strip().lower() for line in file)


word_list = list(words)

turns = 5

wordToGuess = random.choice(word_list)


while (turns > 0):
    print("You have 5 guesses to guess the random 5 letter word")
    wordGuessed = input("Enter your guess: ")

    
    if len(wordGuessed) != 5:
        print("Error: Enter a word with five letters")
        turns -= 1
        continue

    if (wordGuessed == wordToGuess):
        print("Congratulations!\n You guessed the word: " + wordToGuess)
        break
    
    correctLetters = ""
    correctNum = 0

    for i in range(len(wordToGuess)):
        if wordToGuess[i] == wordGuessed[i]:
            correctLetters += wordToGuess[i]
            correctNum += 1
        else:
            correctLetters += "_"

    if correctNum > 0:
        print(f"You got {correctNum} letters correct\n{correctLetters}")
    else:
        print(f"None of the letters you guessed were correct: {correctLetters}")
    turns -= 1