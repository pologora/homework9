import { test, describe, expect, beforeEach } from 'vitest';
import { Graph } from '../dataStructures/Graf';
import { shortestPathBFS } from '../algorithmicProblems/graphAlgorithms/BFS';

describe('dijkstra path', () => {
  let graph: Graph;
  beforeEach(() => {
    graph = new Graph();
  });
  test('should find the shortest path using BFS', () => {
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('B', 'D');
    graph.addEdge('C', 'E');
    graph.addEdge('D', 'E');
    const result = shortestPathBFS('A', 'E', graph.adjacencyList);
    expect(result).toEqual(['A', 'C', 'E']);
  });
});
