export default function BasicExample() {
   return (
      <div className="cardDiv">
         <form action="" className="text-center mt-4">
            <div className="inputCard mt-5">
               <div>
                  <label className="d-block label pt-3" htmlFor="">
                     Title
                  </label>
                  <input className="" type="text" />
               </div>
               <div>
                  <label className="d-block mt-4" htmlFor="">
                     Notes
                  </label>
                  <textarea className="" type="text" />
               </div>
               <button className="button mb-4">Add Notes</button>
            </div>
         </form>
      </div>
   );
}
