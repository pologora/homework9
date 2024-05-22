import { beforeEach, describe, expect, it } from 'vitest';
import { Graph } from '../dataStructures/Graf';

describe('Graph', () => {
  let graph: Graph;

  beforeEach(() => {
    graph = new Graph();
  });

  it('should add vertices correctly', () => {
    graph.addVertex('A');
    expect(graph['adjacencyList'].has('A')).toBe(true);
  });

  it('should add edges correctly', () => {
    graph.addEdge('A', 'B', 5);
    expect(graph['adjacencyList'].get('A')!.get('B')).toBe(5);
    expect(graph['adjacencyList'].get('B')!.get('A')).toBe(5);
  });

  it('should perform DFS correctly', () => {
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('B', 'D');
    graph.addEdge('C', 'E');
    const dfsResult = graph.depthFirstSearch('A');
    expect(dfsResult).toEqual(['A', 'B', 'D', 'C', 'E']);
  });

  it('should perform BFS correctly', () => {
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('B', 'D');
    graph.addEdge('C', 'E');
    const bfsResult = graph.breadthFirstSearch('A');
    expect(bfsResult).toEqual(['A', 'B', 'C', 'D', 'E']);
  });
});
