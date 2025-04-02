const fs = require('fs');

// 输入数据：每行是 [层级 项目名 英文key]
const input = `
01 対象契約入力上り電文エリア
05 請求基本情報エリア NX-SQ-KHN-JH-AREA
05 対象契約入力画面電文エリア NX-TSH-KY-NYR-GMN-AREA
10 メニュー情報エリア NX-MENU-JH-AREA
15 手続判定ＮＶ－ＳＮ NX-OPE-HNT-NV-SN
15 契約者情報エリア NX-KY-JH-AREA
20 証券番号 NX-KY-NO
20 契約番号ＣＤ NX-KY-CKD-NO
20 支払者口座番号ＣＤ NX-DEGI-SQ-TSH-SH-ZKS-CD
`.trim().split('\n');

// 栈结构处理嵌套关系
const root = {};
const stack = [];

for (const line of input) {
  const parts = line.trim().split(/\s+/);
  const level = parseInt(parts[0]);
  const hasKey = parts.length > 2;
  const name = hasKey ? parts.slice(1, -1).join(' ') : parts.slice(1).join(' ');
  const key = hasKey ? parts[parts.length - 1] : null;

  const node = {
    __comment: name,
    __key: key,
    __children: {}
  };

  while (stack.length && stack[stack.length - 1].level >= level) {
    stack.pop();
  }

  if (stack.length === 0) {
    if (key) root[key] = node;
    else root[`__L${level}_${name}`] = node;
  } else {
    const parent = stack[stack.length - 1].node;
    if (key) parent.__children[key] = node;
    else parent.__children[`__L${level}_${name}`] = node;
  }

  stack.push({ level, node });
}

// 输出为 TypeScript 字符串
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

const tsCode = `type MessageArea = ${generateTs(root)};`;

// 写入 .ts 文件
fs.writeFileSync('output.ts', tsCode, 'utf8');

console.log('✅ TypeScript 文件已生成: output.ts');