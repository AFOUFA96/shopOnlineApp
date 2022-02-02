import { useEffect, useState } from "react";
import { GenderService } from "../services/gender.service";
// import '../components/styles/genderMenu.css'

export function Navbar(props) {

    const [genders, setGenders] = useState([]);

    useEffect( () => {
        const fetchData = async () => {
            let service = new GenderService();
            let data = await service.getAll();
            setGenders(data);
        }
        fetchData().catch(console.error);
    }, [])

    return (
        <div>
            <ul className="myNav nav justify-content-center">
            {genders.map(gender => {
                return (
                    <li className="nav-item">
                        <a className="myCol nav-link active"  href="#">{gender.title}</a>
                    </li>
                );
            })  }
            </ul>
        </div>
    )
}