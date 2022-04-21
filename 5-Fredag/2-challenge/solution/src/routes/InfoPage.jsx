import React from 'react';
import { useParams } from 'react-router-dom';

export default function Info() {
  let { name, age, gender } = useParams();
  return (
    <div>{`Your name is ${name} and you are ${age} years old. Your gender is ${gender}`}</div>
  );
}
