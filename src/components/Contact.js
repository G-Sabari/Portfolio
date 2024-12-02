export default function Contact(){

    const config = {
        email: 'rohitsabari045@gmail.com',
        phone:'8754864826'
    }
    return <section className="flex flex-col md:flex-col bg-primary px-5 py-28" id="contact">

        <div className="flex flex-col items-center text-white">

            <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[135px] font-bold">Contact</h1>
            <p className="text-1xl">If you want to discuss with me , Please contact me </p>
            <p className="py-2"><span className="font-bold px-2">E-Mail :</span>{config.email}</p>
            <p><span className="font-bold px-2">Phone : </span>{config.phone}</p>
        </div>

    </section>
}