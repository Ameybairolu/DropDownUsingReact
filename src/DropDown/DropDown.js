import { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import classes from './DropDown.module.css';

const DropDown = (props) => {

    // to change Menu open or closed state

    const [currentlyVisible, setVisible] = useState(false);

    // to change state of the opted option

    const [defaultOptionState, setState] = useState('Select an Option');

    // Transition to animate menu display using React Spring

    const transition = useTransition(currentlyVisible, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 }
    })

    // Upon hovering on the button, we need to display the menu.

    const showOptionsHandler = (bool) => {
        setVisible(bool);
    }

    // When an option is selected, we need to close the menu and display the clicked option

    const closeTheMenuOnClick = (text) => {
        if (text !== 'none') {
            setState(text);
        }
        setVisible(false);
    }

    // To close the menu when we click outside

    let main = document.querySelector('html');
    main.addEventListener('click', (e) => {
        if (e.target.classList.contains('forclick')) {
            closeTheMenuOnClick('none');
        }
    });

    // Whatever dummy data we receive, we are using that to get an array of menu items using Map in JS

    const optionsToDisplay = props.opt.map(eachOption => {
        return <h3 className={classes.commonStyle} key={eachOption[1]} onClick={closeTheMenuOnClick.bind(this, eachOption[0])}><span>{eachOption[0]}</span></h3>
    });

    return (
        <>
            <div onMouseEnter={showOptionsHandler.bind(this, true)} className={classes.button}>
                <div className={classes.mainArea}>
                    <h2> {defaultOptionState} </h2>
                    <h2 className={classes.arrow}>
                        {currentlyVisible ? '🔽' : '🔼'}
                    </h2>
                </div>
            </div>


            {transition((style, item) => item ? <animated.div style={style} className={classes.options}>{optionsToDisplay}</animated.div> : '')}

        </>

    )
}

export default DropDown;