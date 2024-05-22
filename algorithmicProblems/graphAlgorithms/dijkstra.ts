export function shortestPathDijkstra(
  start: string,
  end: string,
  adjacencyList: Map<string, Map<string, number>>,
): string[] | undefined {
  const distances: Map<string, number> = new Map();
  const previous: Map<string, string | undefined> = new Map();
  const pq: [string, number][] = [];

  adjacencyList.forEach((_, vertex) => {
    if (vertex === start) {
      distances.set(vertex, 0);
      pq.push([vertex, 0]);
    } else {
      distances.set(vertex, Infinity);
      pq.push([vertex, Infinity]);
    }
    previous.set(vertex, undefined);
  });

  while (pq.length > 0) {
    pq.sort((a, b) => a[1] - b[1]);
    const [currentVertex, currentDistance] = pq.shift()!;

    if (currentVertex === end) {
      const path: string[] = [];
      let step = end;
      while (previous.get(step)) {
        path.unshift(step);
        step = previous.get(step)!;
      }
      path.unshift(start);
      return path;
    }

    const neighbors = adjacencyList.get(currentVertex);
    if (neighbors) {
      for (const [neighbor, weight] of neighbors) {
        const distance = currentDistance + weight;
        if (distance < distances.get(neighbor)!) {
          distances.set(neighbor, distance);
          previous.set(neighbor, currentVertex);
          pq.push([neighbor, distance]);
        }
      }
    }
  }

  return undefined;
}
