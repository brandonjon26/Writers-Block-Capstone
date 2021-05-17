import React, { useState, useEffect } from "react";
import { getBurstById, deleteBurst } from "../../modules/BurstManager";
// import "./BurstDetail.css";
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export const BurstDetail = () => {
    const [burst, setBurst] = useState({"title": "burst"});
    const [isLoading, setIsLoading] = useState(true);

    const { burstId } = useParams();
    const history = useHistory();

    useEffect(() => {
        getBurstById(burstId)
            .then(burst => {
                setBurst(burst);
                setIsLoading(false);
            });
    }, [burstId]);

    const handleDelete = () => {
        setIsLoading(true);
        deleteBurst(burstId).then(() => 
            history.push("/bursts")
        );
    };

    return (
        <section className="burst">
            <h3 className="burst__title">{(burst.title)}</h3>
            <div className="burst__text">{(burst.burst)}</div>
            <Link to={`/bursts`}>
                <button>Back</button>
            </Link>
            <button type="button" disabled={isLoading} onClick={handleDelete}>
                Nuke
            </button>
        </section>
    );
}