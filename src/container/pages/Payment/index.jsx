import React, { useState, useEffect, useMemo, useRef } from "react";
import axios from "axios";
import Test from "../../../components/Test";
import InsideTest from "../../../components/InsideTest";

function Payment() {
  return (
    <>
      <Test InsideTest={<InsideTest name="anish" />} />
    </>
  );
}

export default Payment;
