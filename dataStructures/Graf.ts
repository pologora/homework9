export class Graph {
  private adjacencyList: Map<string, Map<string, number>>;

  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex: string): void {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, new Map());
    }
  }

  addEdge(vertex1: string, vertex2: string, weight: number = 1): void {
    if (!this.adjacencyList.has(vertex1)) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList.has(vertex2)) {
      this.addVertex(vertex2);
    }
    this.adjacencyList.get(vertex1)!.set(vertex2, weight);
    this.adjacencyList.get(vertex2)!.set(vertex1, weight); // Comment out this line if the graph is directed
  }

  getEdgeWeight(vertex1: string, vertex2: string): number | undefined {
    return this.adjacencyList.get(vertex1)?.get(vertex2);
  }

  depthFirstSearch(start: string): string[] {
    const result: string[] = [];
    const visited: Set<string> = new Set();
    const adjacencyList = this.adjacencyList;

    function dfs(vertex: string) {
      if (!vertex) return;
      visited.add(vertex);
      result.push(vertex);
      const neighbors = adjacencyList.get(vertex);
      if (neighbors) {
        for (const neighbor of neighbors.keys()) {
          if (!visited.has(neighbor)) {
            dfs(neighbor);
          }
        }
      }
    }

    dfs(start);
    return result;
  }

  breadthFirstSearch(start: string): string[] {
    const result: string[] = [];
    const visited: Set<string> = new Set();
    const queue: string[] = [start];
    visited.add(start);

    while (queue.length > 0) {
      const vertex = queue.shift()!;
      result.push(vertex);
      const neighbors = this.adjacencyList.get(vertex);
      if (neighbors) {
        for (const neighbor of neighbors.keys()) {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push(neighbor);
          }
        }
      }
    }

    return result;
  }
}
