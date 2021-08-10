import React from 'react';
import Rating from 'react-star-rating-lite'
import './smallOpinion.css'
import { IoIosThumbsUp, IoIosThumbsDown } from 'react-icons/io'
import { addToFileOpinion } from '../../Service/service'
function SmallOpinion(props) {

    async function onclick(up, down) {
        let opinion = {
            id: props.opinion._id,
            name: props.opinion.name,
            title: props.opinion.title,
            opinion: props.opinion.opinion,
            score: props.opinion.score,
            up: props.opinion.up + up,
            down: props.opinion.down + down
        }
        addToFileOpinion(opinion);
        await props.fetchData();
    }
    return (
        <div className="rate">
            <div className="card text-center">
                <div className="card-header">
                    <Rating value={props.opinion.score} readonly />
                </div>
                <div className="card-body cardOpinion">
                    <h5 className="card-title">{props.opinion.title}</h5>
                    <p className="card-text">{props.opinion.opinion}</p>
                </div>
                <div className="cardFooter">
                    <p className="pOpinion">did the review help you?</p>
                    <button onClick={() => onclick(1, 0)} className="iconButton"><IoIosThumbsUp className="iconOpinion" /></button>{props.opinion.up}
                    <button onClick={() => onclick(0, -1)} className="iconButton"><IoIosThumbsDown className="iconOpinion" /></button>{props.opinion.down}
                </div>
            </div>
        </div>
    );
}
export default SmallOpinion