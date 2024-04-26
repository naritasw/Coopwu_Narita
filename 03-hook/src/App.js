import { Card, CardContent, Input } from "@mui/joy";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import ControlCard from "./Components/ControlCard";
import _ from 'lodash';
import './App.css';


export default function App() {
  const titleArray = ['Banking', 'Logistic', 'E-Commerce', 'Computer'];
  const [searchTerm, setSearchTerm] = useState("");
  const [starWarPeople, setStarWarPeople] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/")
      .then((res) => {
        setStarWarPeople(res.data);
        console.log("People ", res.data);
      })
      .catch((error) => {
        console.error("Error", error?.message);
      });

    return () => { };
  }, []);

  return (
    <div>
      <Card>
        <CardContent>
          <div>Search Box</div>
          <Input
            placeholder='Input Some Search Word'
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div>
            You Search <span className='text-blue-500'>{searchTerm}</span>
          </div>
        </CardContent>
      </Card>

      {/* <header className="text-black">
        Monitoring System
      </header> */}

      <div className='text-xl mx-4 my-2'>People in Starwar</div>
      <div className='mx-4'>
      {_.map(starWarPeople, (eachPeople, index) => (
            <Card key={index} className='my-2'>
              <CardContent>
                <div className='flex'>
                  <div className='w-1/3'></div>
                  <div className='w-2/3'>
                  <li>Name: {eachPeople?.name}</li>
                  <li>Username: {eachPeople?.username}</li>
                  <li>Email: {eachPeople?.email}</li>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {titleArray.map(eachTitle => (
        <ControlCard title={eachTitle} />
      ))}

      <footer className="text-black">
        This is footer
      </footer>
    </div>

  );
}
