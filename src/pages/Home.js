import React, { useEffect, useState } from "react"
import Header from "../components/layouts/Header"
import JobCard from "../components/home/JobCard"
import { callGetApi } from "../utils/api/api"
import { Teams } from "../utils/var/teams"
import { Departments } from "../utils/var/departments"
import { Modal } from "antd"
import axios from 'axios';

export default function Home() {
    const getDepartments = async () => {
        try {
            const response = await axios.get(
                'https://boards-api.greenhouse.io/v1/boards/tbnr/departments',
                {
                    headers: {
                        Authorization: 'Basic MWUzYzU3NmU0MGE5MzhhOThjMDYwZTA1NjY5YzcxMjItNzo=',
                    },
                }
            );
            console.log(response.data);
        } catch (error) {
            console.log('error', error);
        }
    };

    useEffect(() => {
        getDepartments();
    }, []);

    return <div>Fetching data...</div>;
}