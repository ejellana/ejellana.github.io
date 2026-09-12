import { useState, useEffect } from 'react';

const ROLES = ['Data Analyst', 'Data Engineer', 'IT Business Analyst'];
const TYPING_SPEED = 90;
const DELETING_SPEED = 45;
const PAUSE_AFTER_TYPE = 1600;
const PAUSE_AFTER_DELETE = 300;

export default function RotatingRole() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = ROLES[roleIndex];
        let timeout;

        if (!isDeleting && text.length < currentWord.length) {
            // typing forward
            timeout = setTimeout(() => {
                setText(currentWord.slice(0, text.length + 1));
            }, TYPING_SPEED);
        } else if (!isDeleting && text.length === currentWord.length) {
            // pause on the full word before deleting
            timeout = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE);
        } else if (isDeleting && text.length > 0) {
            // deleting backward
            timeout = setTimeout(() => {
                setText(currentWord.slice(0, text.length - 1));
            }, DELETING_SPEED);
        } else if (isDeleting && text.length === 0) {
            // move to next role
            timeout = setTimeout(() => {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % ROLES.length);
            }, PAUSE_AFTER_DELETE);
        }

        return () => clearTimeout(timeout);
    }, [text, isDeleting, roleIndex]);

    return (
        <span className="rotating-role">
            {text}
            <span className="rotating-cursor">|</span>
        </span>
    );
}