const mainContainer = document.querySelector('#root')

function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for(const prop in reactElement.props){
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement);

}

const reactElement = {
    type: 'a',
    props : {
        href: 'https://www.google.com/',
        target: '_blank'
    },
    children: "Click here to go to google.com"
}

const reactDiv = {
    type: 'div',
    props: {
        id: "#id",
    },
    children: "This is a div"
}
customRender(reactElement, mainContainer);
customRender(reactDiv, mainContainer)