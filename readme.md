# Homework 9

## Part 1. Data structures.

### 1. Stack

#### class Node

Constructor:

- initializes a new node with given value

Parameters:

- `value`: the value to be stored in node

Properties:

- `next`: a reference to the next node
- `value`: value stored in node

#### class Stack

Constructor:

- initializes an empty stack object with a `length`of 0 and `head` set to `undefined`

Properties:

- `length`: number of nodes
- `head`: top node of a stack

Methods:

- `pop`: remove top node and returns node `value`
- `push`: creates a new node with a given `value` and insert a node in a top of stack
- `peek`: returns a top node `value`

### 2. Queue

#### class QueueNode

Contructor:

- initializes a new node with a given value

Properties:

- `next`: reference to the next node
- `prev`: reference to the previous node
- `value`: value of the node

#### class Queue

Properties:

- `head`: first node of the queue
- `tail`: last node of the queue

Methods:

- `enqueue`: creates a new node and add it to the end of the queue (`tail`)
- `dequeue`: removes a firs node (`head`) and returns its value
- `peek`: returns first node value (`head`)

### 3. Binary tree

#### class BinaryNode

Constructor:

- initializes a new binary node with given `value`

Parameters:

- `value`: the value to be stored in node

Properties:

- `left`: left child node
- `right`: right child node
- `value`: value stored in node

#### class BinaryTree

Constructor:

- initializes an empty binary tree with `root` set to `undefined` and a `size` to 0

Properties:

- `root`: root node of the binary tree
- `size`: number of nodes in tree

Methods:

- `insert`: `insert(value: T): this`, creates a new node with a given value and insert to the tree as a last node (BFS), returns this
- `find`: search for a value in binary tree (DFS), returns boolean
- `preOrder`: traverses the tree in pre-order (DFS) and applies a callback function on each node value, returns
  an array of nodes values or array of results of callback function
- `inOrder`: same as `preOrder` but in order
- `postOrder`: same as `preOrder` but in post order
- `levelOrder`: traverses the tree in level-order (BFS)

### Graph

Contstructor:

- initializes an adjacency list as an empty Map object

Properties:

- `adjacencyList`: map to store grap structure

Methods:

- `addVertex`: adds a new vertex to the graph
- `addEdge`: adds a new edge between two vertices, if the vertices do not exists, they are added to the graph
- `getEdgeWeight`: returns the weight of the edge between two vetices
- `depthFirstSearch`: performs a DFS starting from a given vertex
- `breadthFirstSearch`: performs BFS starting from a given vertex.

### SinglyLinkedList

#### class SinglyLinkedListNode

Constructor:

- initialize a new node with a given value

Properties:

- `value`: node value
- `next`: reference to the next node

#### class SinglyLinkedList

Properties:

- `head`: first node of the list
- `length`: number of nodes in the list

Methods:

- `prepend`: creates a new node with a given value and insert it at the beginning of the list
- `append`: creates a new node with a given value and insert it at the end
- `insertAt`: creates a new node with a given value and insert it at a given index
- `removeAt`: removes a node at a given index
- `remove`: removes a node with a given value
- `search`: search for a node with a given value, returns `boolean`
- `validateIdx`: private method for a validating if a given index is not out of bounds

## Part 2. Algorithmic Problems

### 1. Min/Max Stack

#### class MinMaxStack extends Stack

Constructor:

- initialize a new MinMaxStack object with a min and max properties sets to a new Stack objects, calls super()

Properties:

- `min`: stores a stuck object for storing current min value of the MinMaxStack object
- `max`:stores a stuck object for storing current max value of the MinMaxStack object
- all properties inherited from Stack class

Methods:

- `pop`: creates a new node with a given value and add it to the top of the stack
- `push`: removes a top node of the stack and returns its value
- `setMinMaxOnPush`: private method using to adjust current min and max values in the stack after adding a new node
- `setMinMaxOnPop`: private method using to adjust current min and max values in the stack after removing a node
- `getMin`: returns a min value
- `getMax`: returns a max value

### 2. Binary Search Tree

#### isBST function

Determines if a binary tree is a binary search tree. Returns boolean.

Parameters:

- `root`: root node of a binary tree

### 3. Graph Algorithms

#### DFS function

Finds the shortest path between two vertices in a graph using Breadth-First-Search. Returns path as an array or `underfind`.

Parameters:

- `start`: start vertex
- `end`: end vertex
- `adjacencyList`: adjacency list representing the graph

#### dijkstra function

Finds the shortest path between two vertices in a graph using Dijkstra's algorithm. Returns path as an array or `underfind`.

- `start`: start vertex
- `end`: end vertex
- `adjacencyList`: adjacency list representing the graph

### 4. Linked List Cycle

#### hasCycle function

Detects if a linked list has a cycle, using fast and slow pointers. Returns `boolean`.

Parameters:

- `head`: a head of a linked list
