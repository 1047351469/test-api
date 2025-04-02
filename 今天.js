function parseToTsType(input) {
  const lines = input.trim().split('\n');
  const stack = [];
  const root = {};

  for (const line of lines) {
    const match = line.match(/^(\d+)\s+(.+?)\s+([A-Z0-9\-]+)$/);
    if (!match) continue;

    const level = parseInt(match[1]);
    const label = match[2].trim();
    const key = match[3].trim();

    const node = { __comment: label, __key: key, __children: {} };

    // Find the correct parent in stack
    while (stack.length && stack[stack.length - 1].level >= level) {
      stack.pop();
    }

    if (stack.length === 0) {
      root[key] = node;
    } else {
      const parent = stack[stack.length - 1];
      parent.node.__children[key] = node;
    }

    stack.push({ level, node });
  }

  function generateTs(obj, indent = '  ') {
    const lines = ['{'];
    for (const key in obj) {
      const { __comment, __children } = obj[key];
      lines.push(`${indent}// ${__comment}`);
      if (Object.keys(__children).length > 0) {
        lines.push(`${indent}'${key}': ${generateTs(__children, indent + '  ')},`);
      } else {
        lines.push(`${indent}'${key}': string,`);
      }
    }
    lines.push(indent.slice(0, -2) + '}');
    return lines.join('\n');
  }

  return `type MessageArea = ${generateTs(root)};`;
}

console.log(parseToTsType(input));