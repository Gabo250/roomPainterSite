import { useEffect } from "react";

/**
* It changes the document Title to the given title name
*
* @param title The given document title
*/
function useTitleChange(title) {
    useEffect(() => {
        if (document.title !== title){
            document.title = title;
        }
    }, [title]);
}

export default useTitleChange;