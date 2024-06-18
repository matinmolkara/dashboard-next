'use client'
import BalanceCart from "../components/BalanceCart";
import ProfitPack from "../components/ProfitPack"
import styles from "../../styles/dashboard.module.css";

import Table from "../components/Table";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
export default function Dashboard() {
   
   const headers = ["Event", "Date", "Amount", "Profit"];
   const Tabledata = [
     ["Event 2", "Nov-3-2022 02:06:55 pm", "$1,214.50", "$537.00"],
     ["Event 3", "Nov-3-2023 02:06:33 pm", "$1,214.33", "$533.00"],
   ];
    return (
      <>
        <div className={styles.walletDetails}>
          <div className="row">
            <BalanceCart />
          </div>
        </div>
        <div className={styles.profitChart}>
          <div className="row">
            <div className="col-12 col-lg-8">
              <div className={styles.chartInfo}>
                <Line options={options} data={data} />
              </div>
            </div>
            <div className="col-12 col-lg-4 d-flex justify-content-center justify-content-lg-end">
              <div className={styles.profitChart0}>
                <ProfitPack />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.eventTable}>
          <div className={styles.inviteContentTable}>
            <div className={`table-responsive ${styles.inviteContentTable0}`}>
              <Table headers={headers} data={Tabledata} />
            </div>
          </div>
        </div>
      </>
    );
}