import { useEffect, useRef } from "react";

/**
 * Changes some content of meta tags to the given params.
 * 
 * @param description The description of the site.
 * @param title The title of the site.
 * @param url The url of the site.
 */
function useMetaDataChange(description, title, url) {  
    const descRef = useRef(document.getElementsByTagName('meta')['description']);
    const ogDescRef = useRef(document.querySelector('meta[property="og:description"]'));
    const ogTitleRef = useRef(document.querySelector('meta[property="og:title"]'));
    const ogUrlRef = useRef(document.querySelector('meta[property="og:url"]'));

    useEffect(() => {
        if (descRef.current.content !== description) {            
            descRef.current.content = description
            ogDescRef.current.content = description;
        }        
    }, [description]);

    useEffect(() => {
        if (document.title !== title){
            document.title = title;
            ogTitleRef.current.content = title;
        }
    }, [title]);

    useEffect(() => {
        if (ogUrlRef.current.content !== url) {
            ogUrlRef.current.content = url;            
        }
    }, [url]);
}

export default useMetaDataChange;