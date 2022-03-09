const demoNode = {
    tagName: 'ul',
    props: {
        'class': 'list'
    },
    text: 'ul标签',
    children: [
        {
            tagName: 'li',
            props: {'id' : 'liId2'},
            text: 'item1',
            children: [{
                tagName: 'span',
                props: {class: 'sss'},
                text: '孙子'
            }]
        },
        {
            tagName: 'li',
            props: {'id' : 'liId'},
            text: 'item2'
        }
    ]
};
//构建一个render函数，将demoNode对象渲染为以下dom

/*
 * @Params:
 *     tagName(string)(requered)
 *     props(object)(optional)
 *     children(array)(optional)
 * */

class Element{
    constructor({
        tagName,
        props,
        text,
        children
    }) {
        this.tagName = tagName;
        this.props = props || {};
        this.text = text || ''
        this.children = children || [];
    }

    render() {
        const tagNode = document.createElement(this.tagName);

        for(const key in this.props) {
            const attr = this.props[key];
            tagNode.setAttribute(attr);
        }

        const textNode = document.createTextNode(this.text);

        tagNode.appendChild(textNode);

        this.children.forEach(child => {
            const childNode = (new Element(child)).render();
            tagNode.appendChild(childNode);
        })

        return tagNode;
    }
}

const elem = (new Element(demoNode));
document.querySelector('body').appendChild(elem.render());
