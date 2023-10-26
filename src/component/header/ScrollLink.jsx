/**
* Creates a Link element, when clicked then it scrolls to the given id's element
*
* @param to The given element's ID
* @param scrollInfo The given scroll infos like smooth scrolling
* @param className The element's CSS classes
* @param children Nested elements
*
* @returns Anchor element and its children
*/
function ScrollLink({ to, scrollInfo, className, children }) {
    function clickHandle(e) {
        e.preventDefault();
        if (!to) {
            return;
        }

        const clickedElement = e.currentTarget;
        const targetElement = document.getElementById(clickedElement.getAttribute("href").slice(1));
        if (!targetElement) {
            return;
        }    

        targetElement.scrollIntoView(scrollInfo);
    }

    return (
        <a href={ to } onClick={ clickHandle } className={ className } >
            { children }
        </a>
    );
}

export default ScrollLink;