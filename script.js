document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('startBtn');
    const startQuizBtn = document.getElementById('startQuizBtn');
    const reviewQuestionBtn = document.getElementById('reviewQuestionBtn');
    const introSection = document.getElementById('intro');
    const rulesSection = document.getElementById('rules');
    const quizSection = document.getElementById('quiz');
    const resultsSection = document.getElementById('results');
    const questionContainer = document.getElementById('questionContainer');
    const roundTitle = document.getElementById('roundTitle');
    const scoreDisplay = document.getElementById('score');

    let currentRound = 0;
    let currentQuestionIndex = 0;
    let score = 0;
    let reviewQuestions = [];
    let answeredQuestions = new Set();

    const rounds = [
        // Round 1 - Find the correct word
        [
            { question: "Find the correct word: _pple", answer: "a", options: ["a", "e", "i", "o"] },
            { question: "Find the correct word: B_nana", answer: "a", options: ["e", "a", "o", "u"] },
            { question: "Find the correct word: _rane", answer: "c", options: ["g", "h", "c", "k"] },
            { question: "Find the correct word: Grap_", answer: "e", options: ["a", "e", "o", "u"] },
            { question: "Find the correct word: Or_ng_", answer: "a", options: ["i", "a", "o", "u"] },
        ],
        // Round 2 - Questions with four options based on ALGORITHMS
        [
            { question: "What is the time complexity of binary search?", answer: "O(log n)", options: ["O(n)", "O(n^2)", "O(log n)", "O(1)"] },
            { question: "What is the space complexity of merge sort?", answer: "O(n)", options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"] },
            { question: "Which of the following is not a stable sorting algorithm?", answer: "Quick sort", options: ["Merge sort", "Quick sort", "Bubble sort", "Insertion sort"] },
            { question: "What is the time complexity of Dijkstra's algorithm using a min-heap?", answer: "O(E + V log V)", options: ["O(E log V)", "O(V^2)", "O(E + V log V)", "O(V^2 log V)"] },
            { question: "Which data structure is used in breadth-first search?", answer: "Queue", options: ["Stack", "Queue", "Priority queue", "Deque"] },
        ],
        // Round 3 - More questions on algorithms
        [
            { question: "Which algorithm is used to find the shortest path in a graph?", answer: "Dijkstra's algorithm", options: ["Prim's algorithm", "Kruskal's algorithm", "Dijkstra's algorithm", "Bellman-Ford algorithm"] },
            { question: "What is the worst-case time complexity of bubble sort?", answer: "O(n^2)", options: ["O(n log n)", "O(n)", "O(n^2)", "O(log n)"] },
            { question: "Which algorithm is used to detect cycles in a graph?", answer: "Tarjan's algorithm", options: ["Kruskal's algorithm", "Prim's algorithm", "Tarjan's algorithm", "Dijkstra's algorithm"] },
            { question: "What is the average-case time complexity of quicksort?", answer: "O(n log n)", options: ["O(n^2)", "O(n log n)", "O(n)", "O(log n)"] },
            { question: "Which of the following is a divide and conquer algorithm?", answer: "Merge sort", options: ["Bubble sort", "Merge sort", "Insertion sort", "Selection sort"] },
        ],
        // Round 4 - Advanced algorithm questions
        [
            { question: "Which algorithm is used to find the strongly connected components of a graph?", answer: "Kosaraju's algorithm", options: ["Prim's algorithm", "Kruskal's algorithm", "Kosaraju's algorithm", "Dijkstra's algorithm"] },
            { question: "What is the time complexity of the Floyd-Warshall algorithm?", answer: "O(V^3)", options: ["O(V^2)", "O(V log V)", "O(V^3)", "O(E log V)"] },
            { question: "Which algorithm is used for finding the minimum spanning tree?", answer: "Prim's algorithm", options: ["Dijkstra's algorithm", "Prim's algorithm", "Tarjan's algorithm", "Floyd-Warshall algorithm"] },
            { question: "What is the time complexity of insertion sort?", answer: "O(n^2)", options: ["O(n log n)", "O(n^2)", "O(n)", "O(log n)"] },
            { question: "Which algorithm is used to find the shortest path in a weighted graph?", answer: "Bellman-Ford algorithm", options: ["Prim's algorithm", "Bellman-Ford algorithm", "Dijkstra's algorithm", "Floyd-Warshall algorithm"] },
        ],
    ];

    startBtn.addEventListener('click', () => {
        introSection.style.display = 'none';
        rulesSection.style.display = 'block';
    });

    startQuizBtn.addEventListener('click', () => {
        rulesSection.style.display = 'none';
        quizSection.style.display = 'block';
        initRound();
    });

    reviewQuestionBtn.addEventListener('click', () => {
        if (!answeredQuestions.has(currentQuestionIndex)) {
            nextQuestion();
        }
    });

    function initRound() {
        currentQuestionIndex = 0;
        reviewQuestions = Array.from({ length: rounds[currentRound].length }, (_, i) => i);
        answeredQuestions.clear();
        showRoundIntro();
    }

    function showRoundIntro() {
        roundTitle.textContent = `Round ${currentRound + 1} starting in 3 seconds...`;
        setTimeout(() => {
            roundTitle.textContent = `Round ${currentRound + 1}`;
            loadQuestion();
        }, 3000);
    }

    function loadQuestion() {
        const currentQuestion = rounds[currentRound][currentQuestionIndex];
        questionContainer.innerHTML = `
            <p>${currentQuestion.question}</p>
            ${currentQuestion.options.map((option, index) => `
                <button class="option" data-answer="${currentQuestion.answer}" data-selected="${option}">
                    ${option}
                </button>
            `).join('')}
        `;

        document.querySelectorAll('.option').forEach((button) => {
            button.addEventListener('click', () => {
                if (button.getAttribute('data-selected') === button.getAttribute('data-answer')) {
                    score++;
                    button.classList.add('correct');
                } else {
                    button.classList.add('incorrect');
                }
                answeredQuestions.add(currentQuestionIndex);
                reviewQuestions = reviewQuestions.filter(index => index !== currentQuestionIndex);
                setTimeout(() => {
                    nextQuestion();
                }, 1000);
            });
        });
    }

    function nextQuestion() {
        if (reviewQuestions.length > 0) {
            currentQuestionIndex = reviewQuestions.shift();
            loadQuestion();
        } else if (answeredQuestions.size === rounds[currentRound].length) {
            if (currentRound < rounds.length - 1) {
                currentRound++;
                initRound();
            } else {
                showResults();
            }
        }
    }

    function showResults() {
        quizSection.style.display = 'none';
        resultsSection.style.display = 'block';
        const totalQuestions = rounds.reduce((total, round) => total + round.length, 0);
        const percentage = (score / totalQuestions) * 100;
        scoreDisplay.textContent = `You answered ${score} out of ${totalQuestions} questions correctly (${percentage.toFixed(2)}%)`;
    }
});
