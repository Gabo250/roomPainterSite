import { useEffect, useRef } from "react";

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

        if (document.title !== title){
            document.title = title;
            ogTitleRef.current.content = title;
        }

        if (ogUrlRef.current.content !== window.location.href) {
            ogUrlRef.current.content = window.location.href;            
        }
    }, [description, title, url]);
}

export default useMetaDataChange;