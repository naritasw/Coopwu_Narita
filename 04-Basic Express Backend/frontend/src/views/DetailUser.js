import React from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useState, useEffect } from "react";
import {LinearProgress} from "@mui/joy";
import _ from "lodash";


function DetailUser() {
    const params = useParams();
    const [isReady, setIsReady] = useState(false);
    const [data, setData] = useState({});
    console.log("params", params);

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/user/${params.id}`)
            .then((res) => {
                setData(res.data);
                setIsReady(true);
                console.log("data", data);
            });

        return () => { };
    }, [params]);

    if (!isReady) {
        return (
            <div>
                <LinearProgress />
            </div>
        );
    }
    return <div>DetailUser</div>;
}

export default DetailUser;