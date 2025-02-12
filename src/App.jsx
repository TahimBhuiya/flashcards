import './App.css';
import { useState } from 'react';

const App = () => {
  const initialFlashcards = [
    { 
      question: "Welcome to the Ultimate Fast Food Restaurant Quiz! The flashcards are categorized by difficulty.", 
      answer:(
        <>
          Green 💚 = Easy<br />
          Yellow 💛= Medium<br />
          Red ❤️ = Hard<br /><br />
          Click the Next ➡️ Button to begin
        </>
      ),
      difficulty: "easy",
      image: "https://static.vecteezy.com/system/resources/previews/009/830/714/non_2x/food-objects-and-dishes-group-cartoon-illustration-vector.jpg" 
    },
    { 
      question: "How much money does McDonald's make in revenue every day?", 
      answer: "Around $75 million per day worldwide!", 
      difficulty: "medium",
      image: "https://th.bing.com/th/id/R.c2e259f3bba2e3c11219c1cd3c611e7b?rik=QvPxZ4TXkP6Mwg&riu=http%3a%2f%2f1000marcas.net%2fwp-content%2fuploads%2f2019%2f11%2fMcDonalds-logo.jpg&ehk=D79Gyta5MGQAbtmyxUdlyLJsvvszOaBYpcKpFQWlVSQ%3d&risl=&pid=ImgRaw&r=0" // Add the image URL here
    },
    { 
      question: "What was Burger King’s original name when it was founded in 1953?", 
      answer: "Insta-Burger King", 
      difficulty: "medium",
      image: "https://th.bing.com/th/id/OIP.jVKGi2-wTQhOvnqabhJp6wAAAA?rs=1&pid=ImgDetMain" 
    },
    { 
      question: "Where is KFC’s secret 11 herbs and spices recipe stored?", 
      answer: "In a vault in Kentucky, with only a few people knowing the full recipe.", 
      difficulty: "hard",
      image: "https://th.bing.com/th/id/R.411a87d5af2bc235ecb382b0cd558d38?rik=UtW6MCxoF8y%2f%2fA&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f03%2fKFC_logo_emblem_logotype.png&ehk=byNwaMdRAAT6teeclgHRtW%2b9KoKKbMb%2f%2bRM8Z2%2bS%2f6s%3d&risl=&pid=ImgRaw&r=0" 
    },
    { 
      question: "What fast-food chain once promised free tacos to everyone in America if a space station hit a target in the ocean?", 
      answer: "Taco Bell (It missed!)", 
      difficulty: "easy",
      image: "https://static.vecteezy.com/system/resources/previews/006/131/101/non_2x/ocean-scenery-cartoon-background-free-vector.jpg" 
    },

    { 
      question: "Which fast-food chain has more locations worldwide than McDonald’s?", 
      answer: "Subway, with over 37,000 locations in 100+ countries.", 
      difficulty: "medium",
      image: "https://w7.pngwing.com/pngs/790/762/png-transparent-earth-drawing-earth-cartoon-earth-illustration-globe-world-sphere.png" 
    },
    { 
      question: "Why did Domino’s stop its “30 minutes or it’s free” delivery guarantee?", 
      answer: "Due to car accidents caused by delivery drivers rushing to meet the deadline.", 
      difficulty: "easy",
      image: "https://logodix.com/logo/432046.jpg" 
    },
    { 
      question: "Which fast-food brand became famous for roasting customers and other companies on Twitter?", 
      answer: "It is Wendy’s!!!", 
      difficulty: "easy",
      image: "https://img.freepik.com/premium-vector/twitter-old-logo-icon_606147-21.jpg" 
    },
    { 
      question: "What is the secret extra-large drink size at Starbucks called?", 
      answer: "Trenta, which holds 31 ounces of liquid.", 
      difficulty: "hard",
      image: "https://logos-world.net/wp-content/uploads/2020/09/Starbucks-Logo.png" 
    },
    { 
      question: "What pizza chain was the first to deliver pizza to space?", 
      answer: "Pizza Hut, sending one to the International Space Station in 2001.", 
      difficulty: "hard",
      image: "https://static.vecteezy.com/system/resources/previews/002/516/856/original/astronaut-in-space-cartoon-illustration-vector.jpg" 
    },
    { 
      question: "What Dairy Queen menu item is sometimes served upside down as a guarantee?", 
      answer: "The Blizzard—if it falls out, you get it free!", 
      difficulty: "easy",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Dairy_Queen_logo.svg/1200px-Dairy_Queen_logo.svg.png" 
    }


  ];

  const [flashcards, setFlashcards] = useState(initialFlashcards);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [userGuess, setUserGuess] = useState('');
  const [inputClass, setInputClass] = useState('');
  const [streak, setStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [masteredCards, setMasteredCards] = useState([]);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const checkAnswer = () => {
    const correctAnswer = flashcards[currentIndex].answer.toLowerCase().trim();
    const userAnswer = userGuess.toLowerCase().trim();
    if (userAnswer.includes(correctAnswer) || correctAnswer.includes(userAnswer)) {
      setInputClass('correct-box');
      setStreak(streak + 1);
      if (streak + 1 > longestStreak) {
        setLongestStreak(streak + 1);
      }
    } else {
      setInputClass('incorrect-box');
      setStreak(0);
    }
  };

  const nextCard = () => {
    setIsFlipped(false);
    setUserGuess('');
    setInputClass('');
    const availableCards = flashcards.filter(card => !masteredCards.includes(card));
    if (availableCards.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % availableCards.length);
    }
  };

  const prevCard = () => {
    setIsFlipped(false);
    setUserGuess('');
    setInputClass('');
    const availableCards = flashcards.filter(card => !masteredCards.includes(card));
    if (availableCards.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + availableCards.length) % availableCards.length);
    }
  };

  const shuffleCards = () => {
    setFlashcards((prevFlashcards) => {
      const shuffled = [...prevFlashcards].sort(() => Math.random() - 0.5);
      return shuffled;
    });
    setCurrentIndex(0); // Reset index after shuffling
  };
  
  const markAsMastered = () => {
    const currentCard = flashcards[currentIndex];
    const remainingCards = flashcards.filter((card, index) => index !== currentIndex);

    setMasteredCards([...masteredCards, currentCard]);
    setFlashcards(remainingCards);

    if (remainingCards.length > 0) {
      setCurrentIndex(currentIndex % remainingCards.length);
    } else {
      setCurrentIndex(0); // Reset index when all cards are mastered
    }
  };


  return (
    <div className="App">
        <div className="header">
    <h1 className="title">The Ultimate Fast Food Restaurant Quiz</h1>
    <h1 className="subtitle">By: Tahim Bhuiya (Z23493520)</h1>
    <h1 className="subtitle">How much of a fast foodie are you? Test all of your tasty trivia here!</h1> 
    <h1 className="subtitle">Number of cards: 10</h1>
    <p>Current Streak: {streak} | Longest Streak: {longestStreak}</p>
  </div>

  

      <div className="flashcard-container" onClick={flipCard}>
        <div className={`flashcard ${isFlipped ? 'flipped' : ''} ${flashcards[currentIndex]?.difficulty}`}>
          <div className="front">
            <img src={flashcards[currentIndex]?.image} alt="flashcard visual" className="flashcard-image" />
            <p>{flashcards[currentIndex]?.question}</p>
          </div>
          <div className="back">
            <p>{flashcards[currentIndex]?.answer}</p>
          </div>
        </div>
      </div>
      <div className={`input-container ${inputClass}`}>
        <input 
          type="text" 
          value={userGuess} 
          onChange={(e) => setUserGuess(e.target.value)} 
          placeholder="Enter your guess here..." 
        />
        <button onClick={checkAnswer}>Submit</button>
      </div>
      <div>
        <button onClick={prevCard}>⬅️ Back</button>
        <button onClick={nextCard}>Next ➡️</button>
        <button onClick={shuffleCards}>🔀 Shuffle</button>
        <button onClick={markAsMastered}>✔️ Mastered</button>
      </div>
      <h2>Mastered Cards:</h2>
      <ul>
        {masteredCards.map((card, index) => (
          <li key={index}>{card.question}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
