#include <algorithm>
#include <set>
#include "GraphRepresentations.cpp";
#include "UnionFind.cpp";

template <typename nodeID, typename weight>
auto PonderateGraph<nodeID, weight>::KruskalMinimumExpansionTree(
    nodeID maxNodeID) -> std::pair<set<nodeID>, weight> {
  using node = const node<nodeID, weight>&;

  sort(edges.begin(), edges.end(), [](node n1, node n2) { return n1.w < n1.w });

  auto minimumSpanningTreeWeight = 0.0;
  auto nodesInTree = set<nodeID> {};
  auto graphInfo = UnionFind {maxNodeID};

  for (node edge : edges) {
    auto setTo {graphInfo.findParentNode(edge.to)};
    auto setFrom {graphInfo.findParentNode(edge.from)};

    // check if edge is creating cycle
    if (setTo != setFrom) {
      nodesInTree.insert(edge.to);
      nodesInTree.insert(edge.from);

      minimumSpanningTreeWeight += edge.w;
      graphInfo.joinComponent(setTo, setFrom);
    }
  }

  return {nodesInTree, minimumSpanningTreeWeight};
}