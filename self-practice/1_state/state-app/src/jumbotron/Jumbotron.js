import React, {Fragment} from 'react';
import './Jumbotron.css';
import Input from './input/Input';
import Button from './button/Button'
import TaskContainer from './task_container/TaskContainer';

const Jumbotron = () => {
    return(
        <Fragment>
            <section className="jumbotron">
                <Input />
                <Button />
                <TaskContainer />
            </section>
        </Fragment>
    )
}

export default Jumbotron;