import Footer from "./Footer"
import NavbarHeader from "./NavbarHeader"

function Contact() {
  return (
    <div>
        <NavbarHeader/>
        <div className="w-full grid grid-flow-col change-hight -z-10 size-full ">
        <div className=" p-40 col-span-9 backgroundimg bg-white">
       
            {/* className="attachment-full size-full wp-image-24" */}
        
            <div className="card lg:card-side bg-none  relative -left-0 md:card">
                <div className="card-body">
                <h1 className="card-title text-7xl">Contact</h1>
<p className="card-text">Massa urna magnis dignissim id euismod porttitor vitae etiam viverra nunc at adipiscing sit morbi aliquet mauris porttitor nisi, senectus pharetra, ac porttitor orci.</p>
<div className="grid grid-flow-col justify-start">
<svg className="text-[#be7d69]" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg>
<span>Address</span>
</div>
<p>1234 N Spring St, Los Angeles, CA 90012, United States. </p>
<div className="grid grid-flow-col justify-start">
<svg className="text-[#be7d69]"  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg>
<span>Phone</span>
</div>
<p>+01 - 123 456 7890 </p>
<div className="grid grid-flow-col justify-start">
<svg className="text-[#be7d69]"  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
</svg>
<span>Email </span>
</div>
<p>mail@example.com</p>

                </div>
                <div className="card h-full shadow-lg shadow-black bg-white">
                    <div className="card-body">
                    <h1 className="text-3xl">Let's Talk</h1>
                <label className="input input-bordered flex items-center gap-2">
  Name
  <input type="text" className="grow" placeholder="Daisy" />
</label>
<label className="input input-bordered flex items-center gap-2">
  Email
  <input type="text" className="grow" placeholder="daisy@site.com" />
</label>
<label className="input input-bordered flex items-center gap-2">
  Subject
  <input type="text" className="grow" placeholder="Daisy" />
</label>
<label className="flex">
    Comment or Message
    </label>
<textarea className="textarea textarea-ghost" placeholder="Bio"></textarea>

<div className="card-actions">
                <button className="btn text-[#be7d69] bg-white hover:bg-[#be7d69] hover:text-white col-span-1">Send Message</button>
                </div>
</div>
            </div>
            </div>
            <div className="flex gap-2 justify- pt-7 ">
        <a>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-youtube text-[#be7d69]" viewBox="0 0 16 16">
                                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                            </svg>
                            <h2>1.2M+</h2>
                            <p> Subscribers </p>
                        </a>
                        <a>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-instagram text-[#be7d69]" viewBox="0 0 16 16">
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                            </svg>
                            <h2>1.8M+</h2>
                            <p>Followers</p>
                        </a>
                        <a> 
                            <img height={24} width={24} className="text-[#be7d69]" src="https://i.pinimg.com/564x/b7/0a/41/b70a419763ec92915435899a4880fd7c.jpg"/>
                            <h2>800K+</h2>
                            <p>Readers</p>
                            </a>
                        </div>
           

        </div>
    </div>
    <div className="p-20">
    <div className="card lg:card-side shadow-lg shadow-black bg-none  relative -left-0 md:card ">
    <figure>
        <img
src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-hero-img.jpg"
            alt="Dianaa"
            className=" "
            />
            </figure>
                <div className="card-body">
                <p className=" text-[#be7d69] divider ">Welcome</p>
                <h1 className="card-title">I’m Dianna Adams</h1>
                <h2 className="card-title">Food Critic / Influencer / Blogger</h2>
<p className="card-text">Massa urna magnis dignissim id euismod porttitor vitae etiam viverra nunc at adipiscing sit morbi aliquet mauris porttitor nisi, senectus pharetra, ac porttitor orci.</p>
<div className="card-actions justify-end">
                <button className="btn text-[#be7d69] bg-white hover:bg-[#be7d69] hover:text-white col-span-1">JOIN INSIDER</button>
                </div>
                </div>
              
            </div>
            </div>
        <Footer/>
    </div>
  )
}

export default Contact