export function shortestPathBFS(
  start: string,
  end: string,
  adjacencyList: Map<string, Map<string, number>>,
): string[] | undefined {
  const queue: string[][] = [[start]];
  const visited: Set<string> = new Set([start]);

  while (queue.length > 0) {
    const path = queue.shift()!;
    const vertex = path[path.length - 1];
    const neighbors = adjacencyList.get(vertex);

    if (neighbors) {
      for (const neighbor of neighbors.keys()) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          const newPath = [...path, neighbor];
          if (neighbor === end) {
            return newPath;
          }
          queue.push(newPath);
        }
      }
    }
  }

  return undefined;
}
