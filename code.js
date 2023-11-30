function dijkstra(graph, sourceNode) {
    if(graph.length < 1){ // if graph is empty return empty list with no distances
        return []
    }

    var visited =  Array.from({length: graph.length}, (e, i)=> false)
    var distance =  Array.from({length: graph.length}, (e, i)=> [i, Infinity])
    
    distance[sourceNode] = [sourceNode, 0]

    nodeVisits = 0

    while(nodeVisits < graph.length){ // runs through every possible node
        next = [-1, Infinity] // placeholder check

        for(i = 0; i < graph.length; i++){// picks the node with the shortest distance to be used
            if(visited[i] == false && distance[i][1] < next[1]){
                next = [i, distance[i][1]]
                
            }
            
        }
        
        for(w = 0; w < graph.length; w++) // compares the distances from the selected node
            {   
                // if next[0] = -1 then no node was selected which means there was no edge so the distance is infinite
                if(next[0] > -1 && graph[next[0]][w] > 0) // if the distance is greater than 0 meaning there is a proper edge
                {
                    distance[w][1] = Math.min(distance[w][1], next[1] + graph[next[0]][w]) // replace current distance with new distance if new distance is smaller
                }
            }
        nodeVisits++
        visited[next[0]] = true   // checks the node as visited
    }

    return distance
}
    
    //console.log(dijkstra([ [ 0, 0, 1, 0], [0, 0, 0, 0], [1, 0, 0, 0], [0, 0, 0, 0]], 1)) // debug

    // https://www.geeksforgeeks.org/introduction-to-dijkstras-shortest-path-algorithm/
    // also got help from looking at ben's code