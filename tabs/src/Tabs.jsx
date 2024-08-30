
import { useState } from "react";
import { CityData } from "./Cities/CityData";
import "./Tabs.css"
function Tabs() {
    const [activeTab , setActiveTab] = useState(0);


    const handlerClick = id => {
      setActiveTab(id)
    }
    return (
        <>
        <nav>

        <ul>
          {
          CityData.map((tab , i) => <li key={i} className={activeTab === i ? "active" : ""} onClick={() => handlerClick(i)}>{tab.city}</li>)
          }
        </ul>

    </nav>
        <section className="cities">
            {
                CityData.map((city, i) => <>
                    <div className={`tab ${activeTab === i ? `active`: ""}`} key={i}>
                        <div className="img-card">
                            <img src={"src/assets/images/" + city.image} alt={city.city} />
                            <p className="country">{city.country}</p>
                        </div>
                    </div>
                </>)
            }

        </section>
        </>
    )
}

export default Tabs