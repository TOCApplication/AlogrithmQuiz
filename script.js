const quizData = [  //round 1
  {
    round: 1,
    info: `<b>Welcome to Round 1:</b> Basic Algorithms. This round contains questions on fundamental algorithm concepts including backtracking, binary search, and the basics of greedy algorithms.<br><b>Total Questions:</b> 7<br><b>Time Limit:</b> 60 seconds`,
    questions: [
      {
        question: "1. Backtracking involves:",
        options: [
          "Starting from the end of the problem",
          "Using a stack to keep track of solutions",
          "Iterating through all elements in a list",
          "Going back to a previous step if the current step doesn't work"
        ],
        answer: 3
      },
      {
        question: "2. The time taken by binary search algorithm to search a key in a sorted array of n elements is",
        options: [
          "O ( logn )",
          "O ( n )",
          "O ( n logn )",
          "O ( n^2 )"
        ],
        answer: 0
      },
      {
        question: "3. Number of comparisons required for an unsuccessful search of an element in a sequential search, organized, fixed length, symbol table of length L is",
        options: ["L", "L/2", "(L+2)/2", "2L"],
        answer: 0
      },
      {
        question: "4. The necessary condition for using binary search in an array is :-",
        options: [
          "The array should not be too long",
          "The array should of more size",
          "The array should be sorted",
          "None of these"
        ],
        answer: 2
      },
      {
        question: "5. Which of the following standard algorithms is not a Greedy algorithm?",
        options: [
          "Dijkstra's shortest path algorithm",
          "Prim's algorithm",
          "Kruskal algorithm",
          "Bellmen Ford Shortest path algorithm"
        ],
        answer: 3
      },
      {
        question: "6. What is the time complexity of Bellman-Ford single-source shortest path algorithm on a complete graph of n vertices?",
        options: [
          "θ(n^2)",
          "θ(n^2 log n)",
          "θ(n^3)",
          "θ(n^3 log n)"
        ],
        answer: 2
      },
      {
        question: "7. In the 0-1 Knapsack Problem, if an item's weight is greater than the remaining capacity of the knapsack, what action is typically taken?",
        options: [
          "Ignore the item and move to the next one",
          "Remove the least valuable item from the knapsack to make space",
          "Add the fractional part of the item that can fit into the knapsack",
          "Remove the most valuable item from the knapsack to make space"
        ],
        answer: 0
      }
    ]
  },
  {     //round 2
    round: 2,
    info: `<b>Welcome to Round 2:</b> Backtracking and Dynamic Programming. This round contains questions focused on backtracking techniques and dynamic programming approaches.<br><b>Total Questions:</b> 7<br><b>Time Limit:</b> 90 seconds`,
    questions: [
      {
        question: "1. What happens when the backtracking algorithm reaches a complete solution?",
        options: [
          "It backtracks to the root",
          "It traverses from a different route",
          "It continues searching for other possible solutions",
          "Recursively traverses through the same route"
        ],
        answer: 2
      },
      {
        question: "2. Backtracking may lead to a solution that is:",
        options: ["Optimal", "Suboptimal", "Efficient", "Deterministic"],
        answer: 1
      },
      {
        question: "3. Backtracking is best suited for solving problems that involve:",
        options: [
          "Sorting elements",
          "Searching in a sorted list",
          "Dynamic programming",
          "Exploring all possible solutions"
        ],
        answer: 3
      },
      {
        question: "4. We use dynamic programming approach when",
        options: [
          "We need an optimal solution",
          "The solution has optimal substructure",
          "The given problem can be reduced to the 3-SAT problem",
          "It's faster than Greedy"
        ],
        answer: 1
      },
      {
        question: "5. The following paradigm can be used to find the solution of the problem in minimum time: Given a set of non-negative integer, and a value K, determine if there is a subset of the given set with sum equal to K:",
        options: [
          "Divide and Conquer",
          "Dynamic Programming",
          "Greedy Algorithm",
          "Branch and Bound"
        ],
        answer: 1
      },
      {
        question: "6. What are the different techniques to solve dynamic programming problems:",
        options: [
          "Memorization",
          "Bottom-Up",
          "Both",
          "None"
        ],
        answer: 2
      },
      {
        question: `7. Consider the following table<br><table><tr><th>Algorithms</th><th>Design Paradigms</th></tr><tr><td>(P) Dijkstra’s Algorithm</td><td>(i) Divide and Conquer</td></tr><tr><td>(Q) Max & Min</td><td>(ii) Greedy</td></tr><tr><td>(R) Matrix Multiplication</td><td>(iii) Dynamic Programming</td></tr></table> Match the algorithm to design paradigms they are based on:`,
        options: [
          "P-(ii), Q-(iii), R-(i)",
          "P-(iii), Q-(i), R-(ii)",
          "P-(ii), Q-(i), R-(iii)",
          "P-(i), Q-(ii), R-(iii)"
        ],
        answer: 2
      }
    ]
  },
  {         //round 3
    round: 3,
    info: `<b>Welcome to Round 3:</b> Graph Algorithms. This round contains questions on graph theory and graph algorithms, including problems related to cycles, spanning trees, and sorting algorithms within the context of graphs.<br><b>Total Questions:</b> 7<br><b>Time Limit:</b> 120 seconds`,
    questions: [
      {
        question: "1. The 'Eight Queens Puzzle' involves placing 8 queens on an 8x8 chessboard such that no two queens threaten each other. How many solutions are there for this problem?",
        options: ["8", "12", "32", "92"],
        answer: 3
      },
      {
        question: "2. Consider the problem of computing min-max in an unsorted array where min and max are minimum and maximum elements of array. Algorithm A1 can compute min-max in a1 comparisons without divide and conquer. Algorithm A2 can compute min-max in a2 comparisons by scanning the array linearly. What could be the relation between a1 and a2 considering the worst-case scenarios?",
        options: ["a1 < a2", "a1 > a2", "a1 = a2", "Depends on the input"],
        answer: 1
      },
      {
        question: "3. Consider the following array. <img src='./merge sort.png'> Which algorithm out of the following options uses the least number of comparisons (among the array elements) to sort the above array in ascending order?",
        options: [
          "Selection sort",
          "Mergesort",
          "Insertion sort",
          "Quicksort using the last element as pivot"
        ],
        answer: 2
      },
      {
        question: `4. Quick sort is run on 2 inputs shown below to sort in ascending order<br><code>A. 1, 2, 3……n<br>B. n, n – 1, n – 2 …… 1</code><br>Let C1 and C2 be the number of comparisons made for A and B respectively. Then`,
        options: [
          "C1 > C2",
          "C1 = C2",
          "C1 < C2",
          "Cannot say anything for arbitrary n"
        ],
        answer: 1
      },
      {
        question: "5. Consider the following two problems of graph. <br>1) Given a graph, find if the graph has a cycle that visits every vertex exactly once except the first visited vertex which must be visited again to complete the cycle.<br> 2) Given a graph, find if the graph has a cycle that visits every edge exactly once. <br>Which of the following is true about above two problems.",
        options: [
          "Problem 1 belongs NP Complete set and 2 belongs to P",
          "Problem 1 belongs to P set and 2 belongs to NP Complete set",
          "Both problems belong to P set",
          "Both problems belong to NP complete set"
        ],
        answer: 0
      },
      {
        question: "6. Which of the following is true about NP-Complete and NP-Hard problems.",
        options: [
          "If we want to prove that a problem X is NP-Hard, we take a known NP-Hard problem Y and reduce Y to X",
          "The first problem that was proved as NP-complete was the circuit satisfiability problem.",
          "NP-complete is a subset of NP Hard",
          "All of the above",
          "None of the above"
        ],
        answer: 3
      },
      {
        question: "7. Consider a graph G=(V, E), where V = { v1,v2,…,v100 }, E={ (vi, vj) ∣ 1≤ i < j ≤ 100} and weight of the edge (vi, vj)  is ∣i–j∣. The weight of minimum spanning tree of G is ________.",
        options: ["99", "100", "98", "101"],
        answer: 0
      }
    ]
  },
  {   //round 4
    round: 4,
    info: `<b>Welcome to Round 4:</b> Advanced Algorithms. This round contains questions on advanced algorithm topics such as Huffman coding, matrix multiplication, and optimization problems.<br><b>Total Questions:</b> 5<br><b>Time Limit:</b> 15 minutes`,
    questions: [
      {
        question: "1. Suppose the letters a, b, c, d, e, f have probabilities 1/2, 1/4, 1/8, 1/16, 1/32, 1/32 respectively. Which of the following is the Huffman code for the letter a, b, c, d, e, f?",
        options: [
          "0, 10, 110, 1110, 11110, 11111",
          "11, 10, 011, 010, 001, 000",
          "11, 10, 01, 001, 0001, 0000",
          "110, 100, 010, 000, 001, 111"
        ],
        answer: 0
      },
      {
        question: "2. Let A1, A2, A3, and A4 be four matrices of dimensions 10 x 5, 5 x 20, 20 x 10, and 10 x 5, respectively. The minimum number of scalar multiplications required to find the product A1A2A3A4 using the basic matrix multiplication method is",
        options: ["1500", "2000", "500", "100"],
        answer: 3
      },
      {
        question: `3. Consider the weights and values of items listed below. Note that there is only one unit of each item.<br><img style="width:85%" src="./greedy value.png"><br>The task is to pick a subset of these items such that their total weight is no more than 11 Kgs and their total value is maximized. Moreover, no item may be split. The total value of items picked by an optimal algorithm is denoted by Vopt. A greedy algorithm sorts the items by their value-to-weight ratios in descending order and packs them greedily, starting from the first item in the ordered list. The total value of items picked by the greedy algorithm is denoted by Vgreedy. The value of Vopt − Vgreedy is ______ .`,
        options: ["16", "8", "44", "60"],
        answer: 0
      },
      {
        question: `4. A networking company uses a compression technique to encode the message before transmitting over the network. Suppose the message contains the following characters with their frequency:<br><table><tr><th>character </th><th> Frequency </th></tr><tr><td>a </td><td> 5</td></tr><tr><td>b </td><td> 9</td></tr><tr><td>c </td><td> 12</td></tr><tr><td>d </td><td> 13</td></tr><tr><td>e </td><td> 16</td></tr><tr><td>f </td><td> 45</td></tr></table>Note : Each character in input message takes 1 byte. If the compression technique used is Huffman Coding, how many bits will be saved in the message?`,
        options: ["224", "800", "576", "324"],
        answer: 2
      },
      {
        question: "5. Consider the undirected graph below: Using Prim's algorithm to construct a minimum spanning tree starting with node A, which one of the following sequences of edges represents a possible order in which the edges would be added to construct the minimum spanning tree?<br><img style='width:80%' src ='./prims.png'>",
        options: [
          "(E, G), (C, F), (F, G), (A, D), (A, B), (A, C)",
          "(A, D), (A, B), (A, C), (C, F), (G, E), (F, G)",
          "(A, B), (A, D), (D, F), (F, G), (G, E), (F, C)",
          "(A, D), (A, B), (D, F), (F, C), (F, G), (G, E)"
        ],
        answer: 3
      }
    ]
  }
];



let participantName = '';
let participantEmail = '';
let currentRound = 0;
let currentQuestionIndex = 0;
let savedForLast = [];
let score = 0;
let reviewedSavedQuestions = false;
let answeredQuestions = [];
let userResponses = [];
let timer;
let timeRemaining;

const roundDurations = [1 * 60, 1.5 * 60, 2 * 60, 15 * 60]; // durations in seconds for rounds 1, 2, 3, and 4

document.getElementById('participant-form').addEventListener('submit', function(event) {
  event.preventDefault();
  participantName = document.getElementById('name').value;
  participantEmail = document.getElementById('email').value;
  showRules();
});

function showRules() {
  document.getElementById('intro-container').classList.add('hidden');
  const rulesContainer = document.getElementById('rules-container');
  rulesContainer.classList.remove('hidden');
  document.getElementById('rules-text').innerHTML = quizData[currentRound].info;
}

function startRound() {
  document.getElementById('rules-container').classList.add('hidden');
  document.getElementById('quiz-container').classList.remove('hidden');
  resetRoundState();
  startTimer();
  preventPageRefresh();
  loadQuiz();
}

function resetRoundState() {
  currentQuestionIndex = 0;
  savedForLast = [];
  answeredQuestions = [];
  reviewedSavedQuestions = false;
}

function startTimer() {
  timeRemaining = roundDurations[currentRound];
  updateTimerDisplay();
  timer = setInterval(() => {
    timeRemaining--;
    updateTimerDisplay();
    if (timeRemaining <= 0) {
      clearInterval(timer);
      showTimeUpMessage();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  document.getElementById('timer').textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function showTimeUpMessage() {
  const timeUpMessageContainer = document.getElementById('time-up-message-container');
  timeUpMessageContainer.textContent = 'Time is up for this round!';
  timeUpMessageContainer.classList.remove('hidden');

  setTimeout(() => {
    timeUpMessageContainer.classList.add('hidden');
    endRound();
  }, 1000); // Show the message for 1 second
}

function loadQuiz() {
  loadQuestion();
}

function loadQuestion() {
  const questionContainer = document.getElementById('question-container');
  const questionData = quizData[currentRound].questions[currentQuestionIndex];

  const optionsHtml = questionData.options.map((option, index) =>
    `<li onclick="selectAnswer(${index}, this)">${option}</li>`).join('');

  questionContainer.innerHTML = `
    <p>${questionData.question}</p>
    <ul>${optionsHtml}</ul>
  `;

  document.getElementById('save-for-last-btn').classList.toggle('hidden', reviewedSavedQuestions || currentQuestionIndex >= quizData[currentRound].questions.length);
}

function selectAnswer(selectedIndex, optionElem) {
  const questionData = quizData[currentRound].questions[currentQuestionIndex];
  userResponses.push({
    question: questionData.question,
    options: questionData.options,
    correctAnswer: questionData.answer,
    userAnswer: selectedIndex
  });

  if (answeredQuestions.indexOf(currentQuestionIndex) === -1) {
    answeredQuestions.push(currentQuestionIndex);
  }

  if (selectedIndex === questionData.answer) {
    score++;
  }

  optionElem.classList.add('fade-out');
  
  setTimeout(() => {
    optionElem.classList.remove('fade-out');
    optionElem.classList.add('fade-in');
    setTimeout(() => {
      optionElem.classList.remove('fade-in');
      if (reviewedSavedQuestions) {
        nextSavedQuestion();
      } else {
        nextQuestion();
      }
    }, 500);
  }, 500);
}

function nextQuestion() {
  if (currentQuestionIndex < quizData[currentRound].questions.length - 1) {
    currentQuestionIndex++;
    loadQuestion();
  } else {
    if (savedForLast.length > 0) {
      reviewSaved();
    } else {
      endRound();
    }
  }
}

function saveForLast() {
  savedForLast.push(currentQuestionIndex);
  nextQuestion();
}

function reviewSaved() {
  if (savedForLast.length > 0) {
    reviewedSavedQuestions = true;
    currentQuestionIndex = savedForLast.shift();
    loadQuestion();
  }
}

function nextSavedQuestion() {
  if (savedForLast.length > 0) {
    currentQuestionIndex = savedForLast.shift();
    loadQuestion();
  } else {
    reviewedSavedQuestions = false;
    endRound();
  }
}

function endRound() {
  clearInterval(timer);
  if (currentRound < quizData.length - 1) {
    currentRound++;
    resetRoundState();
    document.getElementById('quiz-container').classList.add('hidden');
    showRules();
  } else {
    showFinalScore();
  }
}

function showFinalScore() {
  const quizContainer = document.getElementById('quiz-container');
  const scoreContainer = document.getElementById('score-container');
  const finalScoreElem = document.getElementById('final-score');
  const reviewContainer = document.getElementById('review-container');
  
  quizContainer.classList.add('hidden');
  finalScoreElem.textContent = `${participantName}, you scored ${score} out of ${quizData.reduce((total, round) => total + round.questions.length, 0)}.`;

  // Ensure all questions are displayed, including unanswered questions
  const allQuestions = quizData.flatMap(round => round.questions);
  reviewContainer.innerHTML = allQuestions.map((questionData, index) => {
    const userResponse = userResponses.find(response => response.question === questionData.question);
    const userAnswer = userResponse ? userResponse.userAnswer : null;
    return `
      <div class="review-question">
        <p>${questionData.question}</p>
        <ul>
          ${questionData.options.map((option, optionIndex) => `
            <li class="${optionIndex === questionData.answer ? 'correct' : ''} ${optionIndex === userAnswer && optionIndex !== questionData.answer ? 'wrong' : ''}">
              ${option}
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  }).join('');

  scoreContainer.classList.remove('hidden');
  allowPageRefresh();
}

function preventPageRefresh() {
  window.addEventListener('beforeunload', handleBeforeUnload);
}

function allowPageRefresh() {
  window.removeEventListener('beforeunload', handleBeforeUnload);
}

function handleBeforeUnload(event) {
  event.preventDefault();
  event.returnValue = 'Are you sure you want to leave? Your progress will be lost.';
}

document.addEventListener('DOMContentLoaded', () => {
  loadQuiz();
});