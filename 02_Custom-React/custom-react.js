const reactElement = {
    type : "a",
    props : {
        href : "https://www.google.com",
        tagret : "_blank"
    },
    children : "Go to Google.com"
}

const container = document.querySelector("#root")

customRender(reactElement, container)

function customRender(reactElement, container) {
    // 1st Version of code
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.tagret)
    
    container.appendChild(domElement)

    // This code creates a problem as we need more generalized version of this code.
    // For Example, if there are different attributes for the code, it would lead to an error
    */

    // 2nd Version of Code
    // /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    for (const prop in reactElement.props) {
        if(prop == 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
    // */
}
