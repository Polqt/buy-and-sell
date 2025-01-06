export type UserDataProps = {
    name: string;
    email: string;
    image: any;
    time: string;
}

export default function UserDataCard(props: UserDataProps) {
    const defaultImage = './mesh.jpg';
    return (
        <div className="flex flex-wrap justify-between gap-3">
            <section className="flex justify-between gap-3">
                <div className="h-12 w-12 rounded-full">
                    <img src={props.image || defaultImage} alt="avatar" width={300} height={300} className="rounded-full h-12 w-12" />
                </div>
                <div className="text-sm">
                    <p>{props.name}</p>
                    <div className="text-ellipsis overflow-hidden whitespace-nowrap w-[120px] sm:w-auto opacity-30">
                        {props.email}
                    </div>
                </div>
            </section>
            <p className="text-sm">{props.time}</p>
        </div>
    )
}