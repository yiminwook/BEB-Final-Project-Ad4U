import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Accordion, Col, Row, Container } from 'react-bootstrap';
import method from '../../../../hooks/web3/sendTransaction';
import '../../Client.css';

const Stage_0 = ({ adList }) => {

  // console.log("지원자명단", adList.Advertisement_has_Suppliers)

  return (
    <>
      <div>요청중</div>
      <div>지원자 명단...</div>
    </>
  );
}

export default Stage_0;