// import useGetPerson from "../APPServices/useGetPerson";
// import { GetPerson } from "./GetPerson";

import axios from "axios";

export function GetPersonBirthday() {
    const DATA = new Date().toLocaleDateString().split('/').slice(0, 2).join('');

    // const persons = useGetPerson();
    // console.log(persons);

    const birthPers = []
    // const prsData = persons.birthday
    // console.log('prsData', prsData);
    // const t = prsData.split('-').slice(1,3).join('')
    // console.log(t);
    // console.log(DATA);

    for (let i = 287; i < 290; i++) {

        const person = `https://api.themoviedb.org/3/person/${i}?api_key=0c6e06ac468d17f199af4a1b4426b740`
        const data = axios.get(person).then((result) => {
            // console.log(result.data);
        })

        birthPers.push(person.birthday)

        // const persons = GetPersson(i);
        // console.log(persons);



        //     DATA === prsData ? birthPers.push(person.id) : ''
    }

    // console.log(birthPers);
}
