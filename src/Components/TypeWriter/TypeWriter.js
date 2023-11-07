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
                index.current += 1
            }, 50)
            return () => {
                clearTimeout(timeout)
            }
        }
        // eslint-disable-next-line
    }, [currentText])

    return (
        <span>{currentText}</span>
    )
}

export default TypeWriter