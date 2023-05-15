 import axios from 'axios';

import React from 'react'

export function getpatient() {
  return axios.get('http://127.0.0.1:8000/patient/')
  .then(res=>{
    return res.data
  })
}
