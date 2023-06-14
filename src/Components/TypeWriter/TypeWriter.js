import {useEffect, useState, useRef} from 'react'

const TypeWriter = ({ text }) => {

    const index = useRef(0)
    const [currentText, setCurrentText] = useState(null)

    useEffect(() => {
        index.current = 0
        setCurrentText('')
    }, [text])

    useEffect(() => {

        if(index.current < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText((value) => value + text.charAt(index.current -1))
                console.log(text.charAt(index.current))
                index.current += 1
            }, 50)

            return () => {
                clearTimeout(timeout)
            }
        }
    }, [currentText])

    return (
        <p>{currentText}</p>
    )
}

export default TypeWriter