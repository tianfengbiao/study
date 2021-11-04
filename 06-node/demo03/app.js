class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
const createTree = (arr) => {
    let root = new Node(arr[0]);
    let nodeList = [root];
    let i = 1;
    for (let node of nodeList) {
        node.left = new Node(arr[i]);
        nodeList.push(node.left);
        i++;
        if (i === arr.length) {
            return root
        }
        node.right = new Node(arr[i]);
        nodeList.push(node.right);
        i++;
        if (i === arr.length) {
            return root
        }
    }
    return root
}

const l = ['A', 'B', 'C', 'D', 'E', 'F', 'G', "H"]

const res = createTree(l);

// console.log('res====', res)



const input = [
    { id: 1, name: '效率产品组', parentId: 2 },
    { id: 2, name: '数据挖掘部', parentId: 0 },
    { id: 3, name: '数据产品组', parentId: 2 },
    { id: 4, name: '综合设计部', parentId: 5 },
]


const createTree1 = (arr) => {
    const map = new Map();
    const res = [];
    for(let item of arr) {
        map.set(item.id, item)
    }

    for(let item of arr) {
        if(map.has(item.parentId)) {

            if(map.get(item.parentId).children) {
                map.get(item.parentId).children.push(item)
            } else {
                map.get(item.parentId).children = [item];
            }
            
        } else {
            res.push(map.get(item.id))
        }
       
    }

    return res;
}

const res1 = createTree1(input)

console.log('res1====', res1)




const output = [
    {
        id: 2,
        name: '数据挖掘部',
        parentId: 0,
        children: [
            { id: 1, name: '效率产品组', parentId: 2 },
            { id: 3, name: '数据产品组', parentId: 2 },
        ],
    },
    { id: 4, name: '综合设计部', parentId: 5 },
]