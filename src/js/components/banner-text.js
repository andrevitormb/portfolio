import { useState, useEffect } from "react";

function bannerText(){
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer"];
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const [text, setText] = useState('')
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta );

        return () => { clearInterval(ticker)};
        
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fulltext = toRotate[i];
        let updatedText = isDeleting ? fulltext.substring(0, text.length -1) : fulltext.substring(0 , text.length + 1);

        setText(updatedText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta/2 )

        }
        if (!isDeleting && updatedText === fulltext) {
            setIsDeleting(true)
            setDelta(period);

        }else if (isDeleting && updatedText === ''){
            setIsDeleting(false)
            setLoopNum(loopNum + 1);
            setDelta(500)
        }
    }
    return text;
   
}

export default bannerText