import React from "react";

import "./styles.css";

import undrawImageViewer from "../../assets/image_viewer.svg";

import Header from "../../components/Header";
import Menu from "../../components/Menu";

import { FaDollarSign, FaUserCheck, FaClipboardList } from "react-icons/fa";

import Card from "../../components/Card";
import CardLarge from "../../components/CardLarge";
import CardGroup from "../../components/CardGroup";

import Footer from "../../components/Footer";

function Dashboard() {
  return (
    <>
      <Menu />
      <Header />

      <main className="dashboard">
        <div className="dashboard-container-header">
          <h2>App Dashboard</h2>
          <div className="dashboard-container-cards">
            <Card
              icon={<FaClipboardList size={32} color="#BBB" />}
              color={"#5880E1"}
              name={"PRODUCTS IN DATA BASE"}
              description={"135"}
            />
            <Card
              icon={<FaDollarSign size={32} color="#BBB" />}
              color={"#45D39F"}
              name={"AMOUNT IN PRODUCTS"}
              description={"$546.456"}
            />
            <Card
              icon={<FaUserCheck size={32} color="#BBB" />}
              color={"#F5C336"}
              name={"USERS QUANTITY"}
              description={"38"}
            />
          </div>
        </div>
        <div className="dashboard-container-body">
          <CardLarge
            title={"Last Product in Data Base"}
            textDescription={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ante lectus, interdum in convallis vel, cursus non est. Phasellus pretium lectus sollicitudin ultricies euismod. Proin luctus est eros, non molestie est imperdiet vel. Quisque sit amet lacus eu purus rhoncus tincidunt. Fusce vitae sem sed ante interdum cursus vel non diam. Donec blandit lorem porttitor scelerisque porttitor."
            }
            imageSource={undrawImageViewer}
            imageAlt={"Image Viewer"}
          />
          <CardGroup
            title={"Categories in Data Base"}
            categories={[
              { id: 1, name: "Category 1" },
              { id: 2, name: "Category 2" },
              { id: 3, name: "Category 3" },
              { id: 4, name: "Category 4" },
              { id: 5, name: "Category 5" },
              { id: 6, name: "Category 6" },
            ]}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Dashboard;
