/**
 * Exercise 26: Recursive Tree Directory Printer
 * Prompt: Print a nested folder tree object with indentation using recursion.
 */

const projectTree = {
  name: "project-root",
  type: "folder",
  children: [
    {
      name: "src",
      type: "folder",
      children: [
        { name: "controllers", type: "folder", children: [{ name: "auth.js", type: "file" }] },
        { name: "index.js", type: "file" }
      ]
    },
    { name: "package.json", type: "file" }
  ]
};

function printDirectory(node, indent = 0) {
  const symbol = node.type === "folder" ? "📁 " : "📄 ";
  console.log("  ".repeat(indent) + symbol + node.name);
  if (node.children) {
    for (const child of node.children) {
      printDirectory(child, indent + 1);
    }
  }
}

printDirectory(projectTree);
