import { LoadingSpinner } from "@/components/LoadingSpinner";

export default function Loading() {
    return (
        <div className="h-screen w-screen items-center justify-center flex bg-transparent">
            <LoadingSpinner />
        </div>
    );
};

export async function getStaticProps() {
    // You can return an empty object since there are no data dependencies
    return {
        props: {},
    };
}
