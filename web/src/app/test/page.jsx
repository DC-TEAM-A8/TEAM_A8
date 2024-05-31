

import { TestSubjectSelect } from "../../components/TestSubjectSelect/TestSubjectSelect"

export default async function Test() {
    const response = await fetch("http://localhost:8080/miniTest")
    const result = await response.json();
    const subjects = Array.from(
        new Map(
            result.map(tp => [
                tp.name,
                {
                    name: tp.name,
                    sessions: tp.volume
                }
            ])
        ).values()
    )

    return <div>
        <TestSubjectSelect subjects={subjects} />
    </div>
}