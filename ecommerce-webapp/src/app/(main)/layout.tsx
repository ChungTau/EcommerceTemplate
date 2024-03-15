import PageTransition from "../components/PageTransition";
import Navigation from "../components/navigation";


export default function MainLayout({children}:{children:React.ReactNode}){
return(
    <>
    <Navigation />
        <PageTransition>
            <main className="mt-24">
            {children}
            </main>
            </PageTransition>
            </>
);
};