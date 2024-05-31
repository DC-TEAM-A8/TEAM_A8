

import { TestSubjectSelect } from "../../components/TestSubjectSelect/TestSubjectSelect"

export default async function Test() {
    const response = await fetch("http://localhost:8080/testPreferences", {
        cache: "no-cache",
    })
    const result = await response.json();
    const subjects = Array.from(
        new Map(
            result._embedded.testPreferences.map(tp => [
                tp.section,
                {
                    name: tp.section,
                    sessions: tp.volume
                }
            ])
        ).values()
    )

    return <div>
        <TestSubjectSelect subjects={subjects} />
    </div>
}
