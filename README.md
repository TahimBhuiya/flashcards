# Flashcards Interactive App! 

Submitted by: 

**Tahim Bhuiya**

This web app: **is one where we chose pairs of items to store in a flashcard-like format that users can use to study, learn something new, or play a guessing game. In this continuation, I have added some imporvements to the functionality of our 'Fast Food Restaurant Quiz' app! I have added features that allow users to enter an answer (with exact or fuzzy matching) and move backwards and forwards through the list of cards as well as some other cool features.**

Time spent: **10** hours spent in total

## Features

The following **required** functionality is completed:

- [x] **The user can enter their guess in a box before seeing the flipside of the card**
- [x] **Clicking on a submit button shows visual feedback about whether the answer was correct or incorrect**
- [x] **A back button is displayed on the card and can be used to return to the previous card in a set sequence**
- [x] **A next button is displayed on the card and can be used to navigate to the next card in a set sequence**

The following **additional** features are implemented:

- [x] **A shuffle button is used to randomize the order of the cards**
- [x] **A user's answer may be counted as correct even when it is slightly different from the target answer**
- [x] **A counter displays the user's current and longest streak of correct responses**
- [x] **A user can mark a card that they have mastered and have it removed from the pool of answers as well as added to a list of mastered cards**

## Video Walkthrough

Here's a walkthrough of implemented required features:

![Flashcards Part 2 Display](src/images/flashcards-part2.gif)

<!-- Replace this with whatever GIF tool you used! -->
GIF created with [ScreenToGif](https://www.screentogif.com/) for Windows
## Notes

**Building this flashcard quiz app came with several challenges, particularly in styling and functionality. Some of the main challenges included:**

**Handling Dynamic Flashcard Indexing**
One of the primary challenges was ensuring the app properly handles the dynamic nature of flashcards—particularly as cards were mastered and excluded from rotation. The logic for maintaining an accurate flashcard index required careful management of the masteredCards state to prevent showing mastered cards again after they were marked.

**Responsive Layout and Styling**
Since the app's content (including flashcards and buttons) needed to fit and display properly, designing a responsive proper layout was crucial. Adjustments were made to ensure the app maintained a clean and functional design, such as moving the card down to ensure the streak counter wasn't hidden behind it and adding a new background to help show the visual better if an answer was incorrect.

**Shuffling Logic**
Implementing the shuffle functionality to randomly select and reorder available flashcards was a challenge. Ensuring the shuffle worked seamlessly while keeping track of the cards already mastered required careful management of both the flashcards and masteredCards states, especially ensuring that the index update logic worked correctly after the shuffle.

**Managing Card Flip and Input State**
The interactive nature of the flashcards, where users flip cards to view the answer, required careful handling of the state transitions for both the flipCard function and input handling. It was essential to ensure that the user's input did not affect the card flip state and that the streak counter updated correctly based on user responses.

## License

    Copyright [2025] [Tahim Bhuiya]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.