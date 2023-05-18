import Link from 'next/link';
import "../public/style.css";
import { BsSearch } from 'react-icons/bs';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans text-base text-gray-600">
	    <header className="site-header">
		    <nav className="py-10">
      <div className="container mx-auto  flex items-center justify-between">
        <div className="flex items-center">
          <Link className="text-green-700 text-2xl font-bold" href="/">
            Logo
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-green-700">
              <BsSearch className="text-xl hover:opacity-75" />
          </button>
          <button className="text-green-700 border-green-700 border-2 px-8 py-2 rounded-md font-bold hover:opacity-75">Start Enterprise Trial</button>
          <button className="text-white rounded-md border-green-700 bg-green-700 px-8 py-2 hover:opacity-75" >Subscribe</button>
        </div>
      </div>
    </nav>
		</header>
		<main>
	  {children}
	  </main>
	  <footer className="py-10">
         <div className="container mx-auto max-w-screen-lg">
              <div className="flex justify-between items-baseline flex-wrap">
                     <div className="">
					    <h2 className="uppercase font-bold text-lg text-green-700">get started</h2>
					    <ul className="mt-3">
						  <li className="mb-2"><Link href="/">Feedly Web</Link></li>
						  <li className="mb-2"><Link href="/">Feedly for iOS</Link></li>
						  <li className="mb-2"><Link href="/">Feedly for Android</Link></li>
						  <li className="mb-2"><Link href="/">Explore Topics</Link></li>
						</ul>
					 </div>
					 <div className="">
					    <h2 className="uppercase font-bold text-lg text-green-700">UPGRADE</h2>
					    <ul className="mt-3">
						  <li className="mb-2"><Link href="/">Feedly Pro</Link></li>
						  <li className="mb-2"><Link href="/">Feedly Pro+</Link></li>
						  <li className="mb-2"><Link href="/">Feedly API</Link></li>
						</ul>
					 </div>
					 <div className="">
					    <h2 className="uppercase font-bold text-lg text-green-700">SOLUTIONS</h2>
					    <ul className="mt-3">
						  <li className="mb-2"><Link href="/">Cybersecurity</Link></li>
						  <li className="mb-2"><Link href="/">Biopharma</Link></li>
						  <li className="mb-2"><Link href="/">Feedly API</Link></li>
						</ul>
					 </div>
					 <div className="">
					    <h2 className="uppercase font-bold text-lg text-green-700">MORE</h2>
					    <ul className="mt-3">
						  <li className="mb-2"><Link href="/">Meet Feedly AI</Link></li>
						  <li className="mb-2"><Link href="/">Advertise on Feedly</Link></li>
						  <li className="mb-2"><Link href="/">Tutorials</Link></li>
						  <li className="mb-2"><Link href="/">Terms and conditions</Link></li>
						</ul>
					 </div>

              </div>
         </div>
		 
	  </footer>
	  </body>
    </html>
  );
}