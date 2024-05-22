import { test, describe, expect, beforeEach } from 'vitest';
import { shortestPathDijkstra } from '../algorithmicProblems/graphAlgorithms/dijkstra';
import { Graph } from '../dataStructures/Graf';

describe('dijkstra path', () => {
  let graph: Graph;
  beforeEach(() => {
    graph = new Graph();
  });

  test("should find the shortest path using Dijkstra's algorithm", () => {
    graph.addEdge('A', 'B', 1);
    graph.addEdge('A', 'C', 4);
    graph.addEdge('B', 'C', 2);
    graph.addEdge('B', 'D', 5);
    graph.addEdge('C', 'D', 1);
    const result = shortestPathDijkstra('A', 'D', graph.adjacencyList);
    expect(result).toEqual(['A', 'B', 'C', 'D']);
  });
});
