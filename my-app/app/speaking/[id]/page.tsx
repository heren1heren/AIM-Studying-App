import { notFound } from "next/navigation";

interface Props {
    params: { id: string };
}

export default async function SpeakingPage({ params }: Props) {

    const { id } = await params
    return <p>ID: {id}</p>

}
