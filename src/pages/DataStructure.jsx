import Quiz  from "./Quiz";
export default function REactPage() {
  const questions = [
    {
      question: "Which data structure works on the principle of Last In First Out (LIFO)?",
      answers: [
        { text: "Queue", correct: false },
        { text: "Stack", correct: true },
        { text: "Tree", correct: false },
        { text: "Graph", correct: false },
      ],
    },
    {
      question: "What is the time complexity of searching an element in a Binary Search Tree (BST)?",
      answers: [
        { text: "O(n)", correct: false },
        { text: "O(log n)", correct: true },
        { text: "O(n^2)", correct: false },
        { text: "O(1)", correct: false },
      ],
    },
    {
      question: "Which sorting algorithm has the best average case time complexity?",
      answers: [
        { text: "Bubble Sort", correct: false },
        { text: "Merge Sort", correct: true },
        { text: "Insertion Sort", correct: false },
        { text: "Selection Sort", correct: false },
      ],
    },
    {
      question: "Which data structure is used for Breadth First Search (BFS) algorithm?",
      answers: [
        { text: "Stack", correct: false },
        { text: "Queue", correct: true },
        { text: "Heap", correct: false },
        { text: "Graph", correct: false },
      ],
    },
    {
      question: "Which data structure allows inserting and deleting elements from both ends?",
      answers: [
        { text: "Deque", correct: true },
        { text: "Queue", correct: false },
        { text: "Stack", correct: false },
        { text: "Linked List", correct: false },
      ],
    },
    {
      question: "Which algorithm is used to find the shortest path in a graph?",
      answers: [
        { text: "Kruskal's Algorithm", correct: false },
        { text: "Dijkstra's Algorithm", correct: true },
        { text: "DFS", correct: false },
        { text: "BFS", correct: false },
      ],
    },
    {
      question: "Which of the following is not a stable sorting algorithm?",
      answers: [
        { text: "Merge Sort", correct: false },
        { text: "Quick Sort", correct: true },
        { text: "Bubble Sort", correct: false },
        { text: "Insertion Sort", correct: false },
      ],
    },
    {
      question: "Which of the following data structures is non-linear?",
      answers: [
        { text: "Array", correct: false },
        { text: "Queue", correct: false },
        { text: "Tree", correct: true },
        { text: "Stack", correct: false },
      ],
    },
    {
      question: "What is the worst-case time complexity of Quick Sort?",
      answers: [
        { text: "O(n)", correct: false },
        { text: "O(n log n)", correct: false },
        { text: "O(n^2)", correct: true },
        { text: "O(log n)", correct: false },
      ],
    },
    {
      question: "Which of the following data structures is used to implement recursion?",
      answers: [
        { text: "Queue", correct: false },
        { text: "Heap", correct: false },
        { text: "Stack", correct: true },
        { text: "Tree", correct: false },
      ],
    }
  ];

  return (
    <Quiz
      title="Data Structure "
      description="Test your knowledge about Data Structure!"
      questions={questions}
    />
  );
}


  