import React, { useState, useEffect } from 'react';
import { addRes, getOpinions } from '../../Service/service';
import SmallOpinion from './smallOpinion';
import Rating from '@material-ui/lab/Rating';
import './opinion.css';

function Opinion() {
    const [value, setValue] = useState({
        name: "",
        title: "",
        opinion: "",
        score: 0,
        up: 0,
        down: 0
    });

    const [opinion, setOpinion] = useState(false);

    const [OpinionList, setOpinionList] = useState([]);
    async function fetchData() {
        let OpinionList = await getOpinions();
        setOpinionList(OpinionList);
    };

    function addOpinion() {
        addRes(value, "opinion");
    }

    useEffect(() => {
        fetchData()
        window.scrollTo({ top: 0, left: 0 })
    }, []);

    function onInputChange(field, event, content) {
        if (field === "score") {
            setValue({ ...value, [field]: content })
        }
        else {
            setValue({ ...value, [field]: event.target.value })
        }
    }

    async function onsubmit() {
        addOpinion();
        setOpinion(false);
        setValue({ name: "",
        title: "",
        opinion: "",
        score: 0,
        up: 0,
        down: 0})
        await fetchData();
    }
    return (
        <>
            <h1 className="headC">opinion</h1>
            <section className="opinionTitle">Opinion</section>
            <div className="divOpinion">
                {(!opinion) && <button className="buttonAddYourOpinion" onClick={() => setOpinion(true)}>Add your opinion on our products</button>}
                {opinion && <>
                    <div className="card text-center cardOpinion">
                        <div className="card-header">
                            <h5 className="card-title">rate us:</h5>
                            <Rating
                                size="large"
                                value={value.score}
                                onChange={(event, content) => onInputChange("score", event, content)}
                            />
                            <div className="card-body">
                                <h5 className="card-text"><input className="inputOpinion" type="text" placeholder="Title"
                                    onChange={(event) => onInputChange("title", event)} ></input></h5>
                                <p className="card-text"> <textarea className="inputOpinion" name="rate" placeholder="Your Opinion"
                                    cols="109" rows="5" onChange={(event) => onInputChange("opinion", event)}></textarea></p>
                                <h5 className="card-text"><input className="inputOpinion" type="text" placeholder="Name"
                                    onChange={(event) => onInputChange("name", event)} ></input></h5>
                                <button className="buttonOpinion"  onClick={onsubmit} >Send</button>
                            </div>
                        </div>
                    </div>
                </>}
                {OpinionList.map(opinion => <SmallOpinion opinion={opinion} fetchData={fetchData}/>)}
            </div>
        </>
    );
}

export default Opinion