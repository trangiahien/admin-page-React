import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Wighet from "../../components/widget/Wighet";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const Home = () => {
  return (
    <div className="home">
        <Sidebar/>
        <div className="homeContainer">
            <Navbar/>
            <div className="wighets">
                <Wighet type="user"/>
                <Wighet type="order"/>
                <Wighet type="earning"/>
                <Wighet type="balance"/>
            </div>
            <div className="charts">
                <Featured/>
                <Chart title="Last 6 Months" aspect={3 / 1}/>
            </div>
            <div className="listContainer">
              <div className="listTitle">
                Latest Transactions
              </div>
              <Table/>
            </div>
        </div>
    </div>
  )
}

export default Home